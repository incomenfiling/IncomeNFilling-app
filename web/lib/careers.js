import { FALLBACK_OPENINGS } from "@/data/careers";

// The openings live in a Google Sheet that HR edits. Share it as "Anyone with the link: Viewer" and the site reads it as CSV.
// Set CAREERS_SHEET_ID in the Cloudflare environment to use another sheet.
const SHEET_ID = process.env.CAREERS_SHEET_ID || "1mWje6UtHkkWCr_D7mhYWug2EoySUyZ42Wa22niAtwos";
const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

function parseCsv(text) {
  const rows = [];
  let row = [], cell = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(cell); cell = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(cell); cell = "";
      if (row.some((x) => x !== "")) rows.push(row);
      row = [];
    } else cell += c;
  }
  row.push(cell);
  if (row.some((x) => x !== "")) rows.push(row);
  return rows;
}

const list = (v) => String(v || "").split("|").map((x) => x.trim()).filter(Boolean);
const clean = (v) => String(v || "").replace(/[<>]/g, "").trim();

export async function getOpenings() {
  try {
    const res = await fetch(URL, { signal: AbortSignal.timeout(4000), cache: "no-store" });
    if (!res.ok) throw new Error("sheet " + res.status);
    const rows = parseCsv(await res.text());
    const head = rows[0].map((h) => h.trim().toLowerCase());
    if (!head.includes("slug") || !head.includes("role")) throw new Error("bad header");
    const out = rows.slice(1).map((r) => Object.fromEntries(head.map((h, i) => [h, r[i] ?? ""])))
      .filter((o) => String(o.active).toUpperCase() === "TRUE" && /^[a-z0-9-]+$/.test(o.slug) && o.role)
      .map((o) => ({
        active: true, slug: o.slug, role: clean(o.role), department: clean(o.department), city: clean(o.city),
        mode: /wfh|remote/i.test(o.mode) ? "WFH" : "WFO", type: clean(o.type) || "Full time", experience: clean(o.experience),
        summary: clean(o.summary), responsibilities: list(o.responsibilities).map(clean), requirements: list(o.requirements).map(clean),
        email: clean(o.apply_email) || "hr@incomenfiling.com", posted: clean(o.posted),
      }));
    return out;
  } catch {
    return FALLBACK_OPENINGS;
  }
}

export const modeLabel = (m) => (m === "WFH" ? "Work from home" : "Work from office");
