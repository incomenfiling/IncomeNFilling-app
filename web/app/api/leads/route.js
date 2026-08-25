import { NextResponse } from "next/server";
import { sendLeadToCRM } from "@/lib/crm";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, phone, email, property, notes, source } = body || {};
  if (!name || (!phone && !email)) {
    return NextResponse.json({ error: "name and (phone or email) are required" }, { status: 400 });
  }

  try {
    await sendLeadToCRM({ name, phone, email, property, notes, source });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead submission failed:", err);
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 502 });
  }
}
