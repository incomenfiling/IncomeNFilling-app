function formatCrmTimestamp(date) {
  const pad = (n) => String(n).padStart(2, "0");
  const yy = String(date.getFullYear()).slice(-2);
  return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${yy} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export async function sendLeadToCRM({ name, phone, email, property, notes, source }) {
  const webhookUrl = process.env.CRM_WEBHOOK_URL;
  const apiKey = process.env.CRM_API_KEY;
  if (!webhookUrl || !apiKey) {
    throw new Error("CRM webhook is not configured");
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-Key": apiKey,
    },
    body: JSON.stringify({
      leads: [
        {
          name,
          phone: phone || "",
          email: email || "",
          property: property || "",
          DateAndTime: formatCrmTimestamp(new Date()),
          additionalProperties: {
            notes: notes || "",
            source: source || "website",
          },
          leadStatus: "New Lead",
        },
      ],
    }),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new Error(`CRM webhook responded ${res.status}: ${body.slice(0, 200)}`);
  }

  return res.json().catch(() => ({}));
}
