"use client";
import { useState } from "react";
import { postLead } from "@/lib/postLead";
import { track } from "@/lib/track";
import { ConsentNote } from "@/components/ui/ConsentNote";
import { PAY_URL, WHATSAPP_URL } from "@/data/content";

// Step 1: name, mobile, email -> lead row in the Sheet (so the team is told at once).
// Step 2: Razorpay. /api/pay makes a payment link for the exact plan amount; if Razorpay keys are not set yet,
// it falls back to the Razorpay payment page (PAY_URL) where the customer types the amount shown here.
const input = { width: "100%", boxSizing: "border-box", fontFamily: "var(--font-body)", fontSize: 15, padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1px solid var(--ink-100)", background: "var(--white)", color: "var(--navy-900)", minHeight: 44 };
const lab = { fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--navy-800)", marginBottom: 5, display: "block" };
const btn = { background: "var(--gold-500)", color: "var(--navy-900)", border: "none", borderRadius: 999, padding: "13px 22px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, cursor: "pointer", minHeight: 46, textDecoration: "none", textAlign: "center", display: "block" };
const T = { fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };
const inr = (n) => "₹" + n.toLocaleString("en-IN");

export function PlanCheckout({ group, service, plan, total, quoted }) {
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");
  const payable = !quoted && total > 0;

  async function submit(e) {
    e.preventDefault();
    if (state === "sending") return;
    const fd = new FormData(e.currentTarget);
    const get = (k) => String(fd.get(k) || "").trim();
    const mode = e.nativeEvent.submitter?.value || "pay";
    setState("sending");
    setErr("");
    try {
      const res = await postLead({ name: get("name"), phone: get("phone"), email: get("email"), property: `${service} - ${plan}`, notes: `Plan page | ${mode === "pay" ? "Chose to pay online" : "Asked to talk first"} | Amount ${payable ? inr(total) + " incl. GST" : "quoted"} | GSTIN/PAN: ${get("gstin") || "-"}`, source: "plan", website: get("company_url_2") });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Could not send");
      }
      track("generate_lead", { source: "plan" });
      if (mode !== "pay" || !payable) return setState("done");
      track("begin_checkout", { value: total, currency: "INR", items: [{ item_name: `${service} - ${plan}` }] });
      const pr = await fetch("/api/pay", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ group, service, plan, name: get("name"), phone: get("phone"), email: get("email") }) });
      const j = await pr.json().catch(() => ({}));
      if (j.url) {
        window.location.href = j.url;
        return;
      }
      setState("manual");
    } catch (x) {
      setErr(x.message || "Could not send. Please WhatsApp us.");
      setState("idle");
    }
  }

  const box = { background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 22, minWidth: 0 };
  if (state === "manual") {
    return (
      <div role="status" aria-live="polite" style={{ ...box, display: "grid", gap: 12 }}>
        <strong style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--navy-900)" }}>Pay {inr(total)} securely</strong>
        <p style={T}>We have your details. On the Razorpay page, enter <strong>{inr(total)}</strong> and write &quot;{service} - {plan}&quot; in the note.</p>
        <a href={PAY_URL} target="_blank" rel="noopener noreferrer" style={btn}>Open Razorpay and pay {inr(total)}</a>
        <p style={T}>After paying, send the payment screenshot on <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>WhatsApp</a> so we can start.</p>
      </div>
    );
  }
  if (state === "done") {
    return (
      <div role="status" aria-live="polite" style={{ ...box, background: "var(--gold-050)", fontFamily: "var(--font-body)", color: "var(--navy-900)" }}>
        <strong>Thank you.</strong> We will call you during working hours (Monday to Saturday, 10:00 to 19:00 IST) to confirm the scope{quoted ? " and send the written quote" : ""}.
        <div style={{ marginTop: 10 }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>Continue on WhatsApp</a></div>
      </div>
    );
  }
  return (
    <form onSubmit={submit} style={{ ...box, display: "grid", gap: 14 }}>
      <input type="text" name="company_url_2" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} />
      <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--navy-900)" }}>{payable ? "Start this plan" : "Get your written quote"}</h2>
      <div><label htmlFor="pc-name" style={lab}>Name *</label><input id="pc-name" name="name" required maxLength={120} autoComplete="name" style={input} /></div>
      <div><label htmlFor="pc-phone" style={lab}>Mobile *</label><input id="pc-phone" name="phone" type="tel" inputMode="tel" required maxLength={20} autoComplete="tel" style={input} /></div>
      <div><label htmlFor="pc-email" style={lab}>Email *</label><input id="pc-email" name="email" type="email" required maxLength={120} autoComplete="email" style={input} /></div>
      <div><label htmlFor="pc-gstin" style={lab}>GSTIN or PAN (optional)</label><input id="pc-gstin" name="gstin" maxLength={20} style={input} /></div>
      {err && <div role="alert" style={{ color: "#B3261E", fontFamily: "var(--font-body)", fontSize: 13.5 }}>{err}</div>}
      {payable ? (
        <>
          <button type="submit" name="mode" value="pay" disabled={state === "sending"} style={btn}>{state === "sending" ? "Please wait..." : `Pay ${inr(total)} online`}</button>
          <button type="submit" name="mode" value="talk" disabled={state === "sending"} style={{ ...btn, background: "var(--white)", border: "1px solid var(--navy-800)" }}>Talk to us first</button>
          <p style={{ ...T, fontSize: 12.5 }}>Secure payment by Razorpay (UPI, cards, net banking). Total includes 18% GST. Government fees, if any, are separate.</p>
        </>
      ) : (
        <button type="submit" name="mode" value="talk" disabled={state === "sending"} style={btn}>{state === "sending" ? "Sending..." : "Request my quote"}</button>
      )}
      <ConsentNote style={{ margin: 0 }} />
    </form>
  );
}
