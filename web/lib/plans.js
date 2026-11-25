import { PRICE_LIST } from "@/data/pricing";

// Shared by the price cards, the plan page and /api/pay, so the amount is always read from PRICE_LIST (never from the browser).
export const planLabel = (raw) => raw.replace(/,?\s*\(?recommended\)?/i, "").replace(/\(\s*$/, "").replace(/\s+$/, "");
export const planHref = (groupKey, service, label) => `/pricing/${groupKey}/plan?service=${encodeURIComponent(service)}&plan=${encodeURIComponent(label)}`;
const rupees = (v) => (/^\s*₹\s*[\d,]+\s*$/.test(String(v || "")) ? Number(String(v).replace(/[^\d]/g, "")) : null);

export function findPlan(group, serviceName, label) {
  const s = PRICE_LIST.find((x) => (x.group || "GST") === group && x.name === serviceName);
  if (!s) return null;
  const r = s.rows.find((row) => planLabel(row[0]) === label);
  if (!r) return { s, r: null };
  const final = s.final || r[2] === "Final price";
  const quoted = /^(quoted|custom)/i.test(r[2] || "") || /^from/i.test(r[1] || "");
  const total = quoted ? null : final ? rupees(r[1]) : rupees(r[2]);
  return { s, r, label, final, quoted, recommended: /recommended/i.test(r[0]), fee: r[1], total };
}
