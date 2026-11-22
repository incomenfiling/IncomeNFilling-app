// Event helper. Sends to GA4 and, when the visitor allowed analytics (Meta pixel loaded), to Meta.
// Safe to call anywhere on the client; no-ops if the tools are not loaded.
const META_MAP = { generate_lead: "Lead", whatsapp_click: "Contact", call_click: "Contact", booking_click: "Schedule" };

export function track(name, params = {}) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") window.gtag("event", name, params);
  const metaName = META_MAP[name];
  if (metaName && typeof window.fbq === "function") {
    // Same event_id as the server-side Conversions API call, so Meta counts one lead, not two.
    const opts = name === "generate_lead" && window.__infLeadId ? { eventID: window.__infLeadId } : undefined;
    try { window.fbq("track", metaName, {}, opts); } catch {}
  }
}
