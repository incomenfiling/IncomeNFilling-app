"use client";
import { useState } from "react";
import { postLead } from "@/lib/postLead";
import { track } from "@/lib/track";
import { ConsentNote } from "@/components/ui/ConsentNote";
import { WHATSAPP_URL } from "@/data/content";

// One compact lead form for Partners, Careers and future pages.
// fields: [{ name, label, type: "text"|"tel"|"email"|"select"|"textarea"|"url", options?, required? }]
// name/phone/email map to the lead; every other field is added to the message. property = value of the field named `propertyField`.
const input = { width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-900)", minHeight: 44 };
const lab = { fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--navy-800)", marginBottom: 5, display: "block" };

export function SimpleLeadForm({ title, source, fields, propertyField, button = "Send", doneText }) {
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");

  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    const fd = new FormData(e.currentTarget);
    const get = (k) => String(fd.get(k) || "").trim();
    const extra = fields.filter((f) => !["name", "phone", "email"].includes(f.name)).map((f) => `${f.label}: ${get(f.name) || "-"}`).join(" | ");
    setState("sending");
    setErr("");
    try {
      const res = await postLead({ name: get("name"), phone: get("phone"), email: get("email"), property: propertyField ? get(propertyField) : title, notes: extra, source, website: get("company_url_2") });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Could not send");
      }
      track("generate_lead", { source });
      setState("done");
    } catch (x) {
      setErr(x.message || "Could not send. Please WhatsApp us.");
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div role="status" aria-live="polite" style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 22, fontFamily: "var(--font-body)", color: "var(--navy-900)" }}>
        <strong>Thank you.</strong> {doneText || "We have your details and will get back to you during working hours (Monday to Saturday, 10:00 to 19:00 IST)."}
        <div style={{ marginTop: 10 }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>Continue on WhatsApp</a></div>
      </div>
    );
  }
  return (
    <form onSubmit={submit} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 22, display: "grid", gap: 14 }}>
      <input type="text" name="company_url_2" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>{title}</h2>
      {fields.map((f) => (
        <div key={f.name}>
          <label htmlFor={`f-${source}-${f.name}`} style={lab}>{f.label}{f.required ? " *" : ""}</label>
          {f.type === "select" ? (
            <select id={`f-${source}-${f.name}`} name={f.name} required={f.required} defaultValue="" style={input}>
              <option value="" disabled>Select</option>
              {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          ) : f.type === "textarea" ? (
            <textarea id={`f-${source}-${f.name}`} name={f.name} required={f.required} rows={3} maxLength={600} style={{ ...input, resize: "vertical" }} />
          ) : (
            <input id={`f-${source}-${f.name}`} name={f.name} type={f.type || "text"} required={f.required} maxLength={f.type === "url" ? 300 : 120} inputMode={f.type === "tel" ? "tel" : undefined} autoComplete={f.name === "name" ? "name" : f.name === "phone" ? "tel" : f.name === "email" ? "email" : "off"} style={input} />
          )}
        </div>
      ))}
      {err && <div role="alert" style={{ color: "#B3261E", fontFamily: "var(--font-body)", fontSize: 13.5 }}>{err}</div>}
      <button type="submit" disabled={state === "sending"} style={{ background: "var(--navy-900)", color: "var(--white)", border: "none", borderRadius: 999, padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, cursor: "pointer", minHeight: 46 }}>
        {state === "sending" ? "Sending..." : button}
      </button>
      <ConsentNote style={{ margin: 0 }} />
    </form>
  );
}
