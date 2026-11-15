// Sends a website lead to the Google Apps Script web app, which appends a row to the
// "Income N Filing - Website Leads" sheet and emails the sales inbox.
// Env (set as Worker secrets): LEADS_WEBHOOK_URL, LEADS_WEBHOOK_SECRET.
// To move to a CRM later, change only this file.
export async function sendLeadToCRM({ name, phone, email, property, notes, source }) {
  const url = process.env.LEADS_WEBHOOK_URL;
  const secret = process.env.LEADS_WEBHOOK_SECRET;
  if (!url || !secret) {
    throw new Error("Lead webhook is not configured");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    redirect: "follow",
    body: JSON.stringify({
      secret,
      name,
      phone: phone || "",
      email: email || "",
      service: property || "",
      message: notes || "",
      source: source || "website",
    }),
  });

  if (!res.ok) {
    throw new Error(`Lead webhook responded ${res.status}`);
  }
  const data = await res.json().catch(() => null);
  if (!data || data.ok !== true) {
    throw new Error("Lead webhook rejected the lead");
  }
  return data;
}
