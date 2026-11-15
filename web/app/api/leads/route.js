import { NextResponse } from "next/server";
import { sendLeadToCRM } from "@/lib/crm";

const clip = (v, n) => String(v ?? "").trim().slice(0, n);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request) {
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

  const name = clip(body?.name, 120);
  const phone = clip(body?.phone, 30);
  const email = clip(body?.email, 120);
  const property = clip(body?.property, 300);
  const notes = clip(body?.notes, 2000);
  const source = clip(body?.source, 40) || "website";

  if (!name || (!phone && !email)) {
    return NextResponse.json({ error: "name and (phone or email) are required" }, { status: 400 });
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }
  if (phone && phone.replace(/\D/g, "").length < 7) {
    return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
  }

  try {
    await sendLeadToCRM({ name, phone, email, property, notes, source });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed:", err);
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 502 });
  }
}
