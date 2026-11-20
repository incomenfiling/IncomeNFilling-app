// Posts a lead to /api/leads with a Cloudflare Turnstile token (invisible; a challenge
// only appears for suspicious visitors). Until TURNSTILE_SITE_KEY is set it sends no token.
export const TURNSTILE_SITE_KEY = ""; // disabled: widget did not return a token in real browsers (key 0x4AAAAAAGFlivQ27t0neXIO)

let scriptPromise;
function loadTurnstile() {
  if (window.turnstile) return Promise.resolve();
  if (!scriptPromise) {
    scriptPromise = new Promise((resolve, reject) => {
      const s = document.createElement("script");
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  return scriptPromise;
}

async function getToken() {
  if (!TURNSTILE_SITE_KEY || typeof window === "undefined") return "";
  try {
    await loadTurnstile();
  } catch {
    return "";
  }
  return new Promise((resolve) => {
    const box = document.createElement("div");
    box.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483000";
    document.body.appendChild(box);
    const done = (t) => {
      try { window.turnstile.remove(id); } catch {}
      box.remove();
      resolve(t || "");
    };
    const id = window.turnstile.render(box, {
      sitekey: TURNSTILE_SITE_KEY,
      execution: "execute",
      appearance: "interaction-only",
      callback: done,
      "error-callback": () => done(""),
      "timeout-callback": () => done(""),
    });
    window.turnstile.execute(id);
    setTimeout(() => done(""), 20000);
  });
}

export const POLICY_VERSION = "2026-11";

function pageMeta() {
  if (typeof window === "undefined") return {};
  let utm = {};
  try {
    const saved = sessionStorage.getItem("inf_utm");
    if (saved) utm = JSON.parse(saved);
    const q = new URLSearchParams(window.location.search);
    const found = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid", "src"].forEach((k) => { if (q.get(k)) found[k] = q.get(k).slice(0, 60); });
    if (Object.keys(found).length) { utm = found; sessionStorage.setItem("inf_utm", JSON.stringify(found)); }
  } catch {}
  return { pageUrl: window.location.pathname, referrer: (document.referrer || "").slice(0, 120), utm, ua: (navigator.userAgent || "").slice(0, 100) };
}

export async function postLead(payload) {
  const token = await getToken();
  return fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, ...pageMeta(), policyVersion: POLICY_VERSION, turnstileToken: token, elapsed: Math.round(performance.now()) }),
  });
}
