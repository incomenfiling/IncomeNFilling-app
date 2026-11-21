import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--ink-500)", margin: 0 };
export function Sec({ h, children }) {
  return (
    <section style={{ margin: "0 0 34px" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-2xl, 26px)", color: "var(--navy-900)", margin: "0 0 12px" }}>{h}</h2>
      {children}
    </section>
  );
}
export function Tiles({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
      {items.map(([t, d]) => (
        <div key={t} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderTop: "3px solid var(--navy-900)", borderRadius: "var(--radius-md)", padding: 16 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--navy-900)", fontSize: 16 }}>{t}</div>
          <p style={{ ...T, fontSize: 14, marginTop: 6 }}>{d}</p>
        </div>
      ))}
    </div>
  );
}
export function InfoPage({ eyebrow, h1, lead, ctas, children }) {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="" />
      <section style={{ background: "var(--navy-900)", padding: "clamp(40px,7vw,68px) 20px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 12 }}>{eyebrow}</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(28px,5vw,44px)", color: "var(--white)", margin: "0 0 12px" }}>{h1}</h1>
          <p style={{ ...T, color: "var(--navy-300)", maxWidth: 680 }}>{lead}</p>
          {ctas}
        </div>
      </section>
      <main style={{ maxWidth: 960, margin: "0 auto", padding: "32px 20px 96px" }}>{children}</main>
      <Footer />
    </div>
  );
}

export const Chip = ({ children, gold }) => (
  <span style={{ background: gold ? "var(--gold-050)" : "var(--paper)", border: "1px solid " + (gold ? "var(--gold-200)" : "var(--ink-100)"), color: "var(--navy-800)", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, padding: "3px 10px", borderRadius: 999 }}>{children}</span>
);


export function Bullets({ items }) {
  return <ul style={{ ...T, paddingLeft: 20, display: "grid", gap: 6 }}>{items.map((x) => <li key={x}>{x}</li>)}</ul>;
}
