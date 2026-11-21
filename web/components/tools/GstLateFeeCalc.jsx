"use client";
import { useState } from "react";

const inp = { width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-900)", minHeight: 44 };
const lab = { fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--navy-800)", marginBottom: 5, display: "block" };
const CAPS = { nil: 500, small: 2000, mid: 5000, large: 10000 };
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

function daysBetween(a, b) {
  if (!a || !b) return 0;
  const d = Math.round((new Date(b) - new Date(a)) / 86400000);
  return d > 0 ? d : 0;
}

export function GstLateFeeCalc() {
  const [ret, setRet] = useState("3B");
  const [nil, setNil] = useState("no");
  const [band, setBand] = useState("small");
  const [due, setDue] = useState("");
  const [filed, setFiled] = useState("");
  const [tax, setTax] = useState("");

  const days = daysBetween(due, filed);
  const isNil = nil === "yes";
  const rate = isNil ? 20 : 50;
  const cap = isNil ? CAPS.nil : CAPS[band];
  const raw = days * rate;
  const fee = Math.min(raw, cap);
  const capped = raw > cap;
  const t = Math.max(0, Number(tax) || 0);
  const interest = ret === "3B" ? (t * 0.18 * days) / 365 : 0;
  const ready = due && filed;

  return (
    <div style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderTop: "4px solid var(--navy-900)", borderRadius: "var(--radius-lg)", padding: 20, marginBottom: 28 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 14 }}>
        <div><label htmlFor="g-ret" style={lab}>Return</label>
          <select id="g-ret" value={ret} onChange={(e) => setRet(e.target.value)} style={inp}><option value="3B">GSTR-3B</option><option value="1">GSTR-1</option></select></div>
        <div><label htmlFor="g-nil" style={lab}>Was it a nil return?</label>
          <select id="g-nil" value={nil} onChange={(e) => setNil(e.target.value)} style={inp}><option value="no">No, there was tax or sales</option><option value="yes">Yes, nil</option></select></div>
        {!isNil && (
          <div><label htmlFor="g-band" style={lab}>Turnover in the last financial year</label>
            <select id="g-band" value={band} onChange={(e) => setBand(e.target.value)} style={inp}><option value="small">Up to ₹1.5 crore</option><option value="mid">Above ₹1.5 crore, up to ₹5 crore</option><option value="large">Above ₹5 crore</option></select></div>
        )}
        <div><label htmlFor="g-due" style={lab}>Due date</label><input id="g-due" type="date" value={due} onChange={(e) => setDue(e.target.value)} style={inp} /></div>
        <div><label htmlFor="g-filed" style={lab}>Date filed (or today)</label><input id="g-filed" type="date" value={filed} onChange={(e) => setFiled(e.target.value)} style={inp} /></div>
        {ret === "3B" && (
          <div><label htmlFor="g-tax" style={lab}>Tax paid late in cash, ₹ (for interest)</label><input id="g-tax" type="number" inputMode="numeric" min="0" value={tax} onChange={(e) => setTax(e.target.value)} placeholder="0" style={inp} /></div>
        )}
      </div>
      <div role="status" aria-live="polite" style={{ marginTop: 18, background: "var(--navy-050)", borderRadius: "var(--radius-md)", padding: 16 }}>
        {!ready ? (
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)" }}>Choose the due date and the date you filed to see the estimate.</p>
        ) : days === 0 ? (
          <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 15, color: "var(--navy-900)", fontWeight: 600 }}>Filed on or before the due date, so no late fee.</p>
        ) : (
          <>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)" }}>{days} day{days > 1 ? "s" : ""} late</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "var(--navy-900)" }}>{inr(fee)} <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-500)" }}>late fee</span></div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-700)", marginTop: 4 }}>
              {inr(fee / 2)} under CGST and {inr(fee / 2)} under SGST ({inr(rate / 2)} a day each){capped ? `, held at the ${inr(cap)} maximum` : ""}.
            </div>
            {ret === "3B" && t > 0 && <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-700)", marginTop: 8 }}>Interest at 18% a year on {inr(t)}: about <strong>{inr(interest)}</strong>.</div>}
          </>
        )}
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--ink-500)", margin: "12px 0 0" }}>Estimate only. The GST portal computes the exact amount when you file.</p>
    </div>
  );
}
