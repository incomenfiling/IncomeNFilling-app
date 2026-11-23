import { NextResponse } from "next/server";
import { sendLeadToCRM } from "@/lib/crm";
import { sendMetaLead } from "@/lib/capi";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);
// Stop spreadsheet formula injection: a leading = + - @ would run as a formula in Sheets.
const safe = (v) => (/^[=+\-@\t\r]/.test(v) ? "'" + v : v);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Browsers always send Origin on cross-site POSTs; reject any that is not our own site.
const ALLOWED_ORIGINS = new Set(["https://incomenfiling.com", "https://www.incomenfiling.com"]);
const MAX_BODY_BYTES = 10_000;

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGINS.has(origin) && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }
  if (Number(request.headers.get("content-length")) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field. Pretend success to bots.
  if (body && body.website) {
    return NextResponse.json({ ok: true });
  }

  // Cloudflare Turnstile: enforced only when TURNSTILE_SECRET_KEY is set as a Worker secret.
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (secretKey) {
    const token = clip(body?.turnstileToken, 2048);
    let pass = false;
    if (token) {
      try {
        const ip = request.headers.get("CF-Connecting-IP") || "";
        const r = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret: secretKey, response: token, remoteip: ip }),
        });
        pass = (await r.json()).success === true;
      } catch {
        pass = false;
      }
    }
    if (!pass) {
      return NextResponse.json({ error: "Verification failed. Please retry." }, { status: 403 });
    }
  }

  // Too-fast / no-timing submissions come from scripts posting straight to the API: pretend success.
  const elapsed = Number(body?.elapsed);
  if (!Number.isFinite(elapsed) || elapsed < 3000) {
    return NextResponse.json({ ok: true });
  }

  // Link spam: real enquiries rarely contain more than one link.
  if ((String(body?.notes ?? "").match(/https?:\/\//gi) || []).length > 2) {
    return NextResponse.json({ ok: true });
  }

  const name = safe(clip(body?.name, 120));
  const phone = clip(body?.phone, 30);
  const consentNote = body?.consent === true ? "consent ticked" : "consent notice shown";
  const email = safe(clip(body?.email, 120));
  const property = safe(clip(body?.property, 600));
  const notes0 = safe(clip(body?.notes, 1800));
  const utm = body?.utm && typeof body.utm === "object" ? Object.entries(body.utm).slice(0, 8).map(([k, v]) => `${clip(k, 20)}=${clip(v, 60)}`).join(" ") : "";
  const meta = `[page ${clip(body?.pageUrl, 120) || "-"} | ref ${clip(body?.referrer, 120) || "-"} | ${utm || "no utm"} | policy ${clip(body?.policyVersion, 12) || "-"} | ${consentNote} | ${clip(body?.ua, 100)}]`;
  // Same id on the retry, so a duplicate row can be spotted and removed in the Sheet.
  const leadId = Math.random().toString(36).slice(2, 8);
  const notes = (notes0 ? notes0 + " " : "") + meta.slice(0, -1) + ` | id ${leadId}]`;
  const source = safe(clip(body?.source, 40)) || "website";

  if (!name || (!phone && !email)) {
    return NextResponse.json({ error: "name and (phone or email) are required" }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (phone) {
    let d = phone.replace(/\D/g, "");
    if (d.length === 12 && d.startsWith("91")) d = d.slice(2);
    if (d.length === 11 && d.startsWith("0")) d = d.slice(1);
    const intl = phone.trim().startsWith("+") && !phone.trim().startsWith("+91");
    if ((intl && (d.length < 8 || d.length > 15)) || (!intl && !/^[6-9]\d{9}$/.test(d))) {
      return NextResponse.json({ error: "Please enter a valid 10-digit mobile number" }, { status: 400 });
    }
  }

  // One retry: a lead must not be lost to a single webhook hiccup.
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      await sendLeadToCRM({ name, phone, email, property, notes, source });
      // Server-side Meta Conversions API lead (only when the visitor allowed analytics and the secret is set). Never blocks the lead.
      if (body?.adsConsent === true) {
        await sendMetaLead({
          eventId: clip(body?.eventId, 60), phone, email, name, source,
          url: "https://incomenfiling.com" + (clip(body?.pageUrl, 120) || "/"),
          fbp: clip(body?.fbp, 100), fbc: clip(body?.fbc, 200),
          ip: request.headers.get("CF-Connecting-IP") || "", ua: request.headers.get("user-agent") || "",
        }).catch(() => {});
      }
      return NextResponse.json({ ok: true });
    } catch (err) {
      if (attempt === 1) console.error("Lead submission failed:", err?.message || "unknown");
    }
  }
  return NextResponse.json({ error: "We could not save your request. Please WhatsApp us on 078905 94600." }, { status: 502 });
}
