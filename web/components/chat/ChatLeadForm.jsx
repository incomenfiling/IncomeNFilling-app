"use client";
import { useState } from "react";
import { postLead } from "@/lib/postLead";
import { track } from "@/lib/track";

// Small name + phone card shown under Ira's answers. Posts to /api/leads (Google Sheet + email).
export function ChatLeadForm({ topic }) {
  const [state, setState] = useState("idle"); // idle | busy | done | err
  const submit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setState("busy");
    try {
      const res = await postLead({ name: fd.get("name"), phone: fd.get("phone"), property: topic || "Ira chat", notes: "Lead from Ira chat", website: fd.get("website"), source: "ira_chat" });
      if (!res.ok) throw new Error("failed");
      track("generate_lead", { source: "ira_chat" });
      setState("done");
    } catch {
      setState("err");
    }
  };
  const box = { marginTop: 4, maxWidth: "92%", marginLeft: 39, background: "var(--white)", border: "1px solid var(--gold-200)", borderRadius: 14, padding: 14, fontFamily: "var(--font-body)" };
  const input = { width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: "1px solid var(--ink-100)", fontSize: 14, marginTop: 8, fontFamily: "inherit" };
  if (state === "done") return <div style={{ ...box, fontSize: 14, color: "var(--navy-900)" }}>Thank you! ✅ Our advisor will call you in working hours (Mon–Sat, 10 AM – 7 PM).</div>;
  return (
    <form onSubmit={submit} style={box}>
      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--navy-900)" }}>Want a call back? Leave your details 📞</div>
      <input name="name" required placeholder="Your name" autoComplete="name" style={input} />
      <input name="phone" required type="tel" inputMode="tel" placeholder="Phone number" autoComplete="tel" style={input} />
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: "absolute", left: -9999, opacity: 0 }} />
      <button type="submit" disabled={state === "busy"} style={{ marginTop: 10, padding: "10px 18px", borderRadius: 999, border: "none", background: "var(--gold-500)", color: "var(--navy-950)", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>{state === "busy" ? "Sending…" : "Request a call back"}</button>
      {state === "err" && <div style={{ marginTop: 8, fontSize: 12, color: "var(--status-negative, #b3261e)" }}>Couldn’t send. Please try WhatsApp instead.</div>}
      <div style={{ marginTop: 8, fontSize: 11, color: "var(--ink-300)" }}>We use your details only to contact you about your enquiry.</div>
    </form>
  );
}
