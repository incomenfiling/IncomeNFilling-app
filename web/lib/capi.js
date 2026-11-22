// Meta Conversions API: sends a server-side Lead event with the same event_id as the browser pixel.
// Needs Worker secret META_CAPI_TOKEN (Events Manager > Dataset > Settings > Conversions API > access token).
// Without it this does nothing. Personal data is SHA-256 hashed as Meta requires.
const DATASET_ID = "1343663231215768";

async function sha256(v) {
  const bytes = new TextEncoder().encode(v);
  const buf = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function sendMetaLead({ eventId, phone, email, name, source, url, fbp, fbc, ip, ua }) {
  const token = process.env.META_CAPI_TOKEN;
  if (!token || !eventId) return;
  const user = {};
  const digits = String(phone || "").replace(/\D/g, "");
  if (digits) user.ph = [await sha256(digits.length === 10 ? "91" + digits : digits)];
  const em = String(email || "").trim().toLowerCase();
  if (em) user.em = [await sha256(em)];
  const first = String(name || "").trim().toLowerCase().split(/\s+/)[0];
  if (first) user.fn = [await sha256(first)];
  user.country = [await sha256("in")];
  if (fbp) user.fbp = fbp;
  if (fbc) user.fbc = fbc;
  if (ip) user.client_ip_address = ip;
  if (ua) user.client_user_agent = ua;
  const payload = {
    data: [{ event_name: "Lead", event_time: Math.floor(Date.now() / 1000), event_id: eventId, action_source: "website", event_source_url: url, user_data: user, custom_data: { lead_source: source } }],
  };
  const test = process.env.META_CAPI_TEST_CODE;
  if (test) payload.test_event_code = test;
  await fetch(`https://graph.facebook.com/v21.0/${DATASET_ID}/events?access_token=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(5000),
    body: JSON.stringify(payload),
  });
}
