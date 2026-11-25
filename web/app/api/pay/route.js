import { NextResponse } from "next/server";
import { PRICE_GROUPS } from "@/components/pricing/PriceGroupPage";
import { findPlan } from "@/lib/plans";

// Creates a Razorpay Payment Link for the exact plan total (read from PRICE_LIST, never from the browser).
// Needs Worker secrets RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET. Without them it answers { fallback: true }
// and the page sends the customer to the Razorpay payment page (PAY_URL) with the amount to enter.
const clip = (v, n) => String(v ?? "").trim().slice(0, n);

export async function POST(request) {
  let b;
  try {
    b = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }
  const g = PRICE_GROUPS[b?.group];
  const p = g && findPlan(g.group, clip(b.service, 120), clip(b.plan, 160));
  if (!p || !p.r || p.quoted || !p.total) return NextResponse.json({ error: "This plan is quoted in writing" }, { status: 400 });

  const id = process.env.RAZORPAY_KEY_ID;
  const secret = process.env.RAZORPAY_KEY_SECRET;
  if (!id || !secret) return NextResponse.json({ fallback: true });

  const digits = clip(b.phone, 20).replace(/[^\d+]/g, "");
  const contact = /^\d{10}$/.test(digits) ? "+91" + digits : digits;
  const ref = "inf_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const body = {
    amount: p.total * 100,
    currency: "INR",
    description: clip(`${p.s.name} - ${p.label}`, 2000),
    reference_id: ref,
    customer: { name: clip(b.name, 80), contact, email: clip(b.email, 120) },
    notify: { sms: true, email: true },
    reminder_enable: true,
    notes: { service: clip(p.s.name, 250), plan: clip(p.label, 250), source: "website plan page" },
    callback_url: "https://incomenfiling.com/payment/thanks",
    callback_method: "get",
  };
  try {
    const r = await fetch("https://api.razorpay.com/v1/payment_links", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: "Basic " + btoa(`${id}:${secret}`) },
      body: JSON.stringify(body),
    });
    const j = await r.json();
    if (!r.ok || !j.short_url) {
      console.error("razorpay link failed", r.status, j?.error?.description);
      return NextResponse.json({ fallback: true });
    }
    return NextResponse.json({ url: j.short_url });
  } catch (e) {
    console.error("razorpay link error", e?.message);
    return NextResponse.json({ fallback: true });
  }
}
