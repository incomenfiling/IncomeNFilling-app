import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { WHATSAPP_URL } from "@/data/content";

export const metadata = { title: "Page not found", robots: { index: false } };

const btn = { display: "inline-block", padding: "13px 24px", borderRadius: 999, fontFamily: "var(--font-body)", fontWeight: 600, textDecoration: "none" };

export default function NotFound() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <NavBar active="" />
      <section style={{ maxWidth: 640, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".08em", color: "var(--gold-600)", margin: 0 }}>ERROR 404</p>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: "14px 0 12px" }}>We couldn’t find that page</h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", color: "var(--ink-500)", lineHeight: 1.6, margin: "0 0 28px" }}>
          The link may be old or mistyped. Here are the pages people look for most.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/" style={{ ...btn, background: "var(--gold-500)", color: "var(--navy-950)" }}>Go to homepage</Link>
          <Link href="/services" style={{ ...btn, border: "1.5px solid var(--navy-900)", color: "var(--navy-900)" }}>View services</Link>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, border: "1.5px solid var(--navy-900)", color: "var(--navy-900)" }}>Chat on WhatsApp</a>
        </div>
      </section>
    </div>
  );
}
