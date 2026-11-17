// GA4 event helper. Safe to call anywhere on the client; no-ops if gtag is not loaded.
export function track(name, params = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
