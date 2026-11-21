"use client";
import Link from "next/link";
import { useConsent, setConsent } from "@/lib/consent";

export function ConsentBanner() {
  const c = useConsent();
  if (c !== null) return null; // "unknown" on the server, "all" or "essential" once chosen
  const btn = { fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, padding: "10px 18px", borderRadius: 999, cursor: "pointer", minHeight: 44 };
  return (
    <div className="cc-bar" role="region" aria-label="Cookie choice" style={{ position: "fixed", left: 12, right: 12, margin: "0 auto", maxWidth: 620, zIndex: 150, background: "var(--navy-900)", color: "var(--white)", borderRadius: "var(--radius-lg)", padding: "14px 16px", boxShadow: "var(--shadow-lg)", display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
      <p style={{ margin: 0, flex: "1 1 260px", fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "var(--navy-100, #dbe4f0)" }}>
        We use cookies for site analytics and the chat widget. Allow them, or keep only what the site needs. See our <Link href="/cookies" style={{ color: "var(--gold-400)", textDecoration: "underline" }}>Cookie Policy</Link>.
      </p>
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setConsent("all")} style={{ ...btn, background: "var(--gold-500)", color: "var(--navy-950)", border: "none" }}>Allow</button>
        <button type="button" onClick={() => setConsent("essential")} style={{ ...btn, background: "transparent", color: "var(--white)", border: "1px solid var(--navy-300)" }}>Essential only</button>
      </div>
    </div>
  );
}
