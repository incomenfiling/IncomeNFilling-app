import Link from "next/link";
import { InfoPage, T } from "@/components/layout/InfoPage";
import { BOOKING_URL, WHATSAPP_URL } from "@/data/content";

// Shared wrapper for every tool page: breadcrumb schema, content, a short next step and the verification note.
export function ToolShell({ slug, name, eyebrow = "Free tool", h1, lead, updated, sources = [], children, faqs = [] }) {
  const ld = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://incomenfiling.com/" },
      { "@type": "ListItem", position: 2, name: "Tools", item: "https://incomenfiling.com/tools" },
      { "@type": "ListItem", position: 3, name, item: `https://incomenfiling.com/tools/${slug}` },
    ] },
  ];
  if (faqs.length) ld.push({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });
  return (
    <InfoPage eyebrow={eyebrow} h1={h1} lead={lead}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      {children}
      {faqs.length > 0 && (
        <section style={{ margin: "0 0 34px" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--navy-900)", margin: "0 0 12px" }}>Questions</h2>
          {faqs.map(([q, a]) => (
            <details key={q} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: 8 }}>
              <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center", fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--navy-900)" }}>{q}</summary>
              <p style={{ ...T, fontSize: 15, marginTop: 8 }}>{a}</p>
            </details>
          ))}
        </section>
      )}
      <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 18 }}>
        <p style={{ ...T, fontSize: 14 }}>
          This page is a general guide{updated ? `, last checked ${updated}` : ""}. Rules, rates and due dates can change or be extended by notification, so confirm on the official portal before you act.
          {sources.length > 0 && <> Sources: {sources.map(([t, u], i) => <span key={u}>{i ? ", " : ""}<a href={u} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 600 }}>{t}</a></span>)}.</>}
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
          <Link href="/contact" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "11px 20px", borderRadius: 999, textDecoration: "none" }}>Talk to our team</Link>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-800)", color: "var(--navy-800)", fontWeight: 600, padding: "11px 20px", borderRadius: 999, textDecoration: "none" }}>Book a 20-min call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--ink-100)", color: "var(--navy-800)", fontWeight: 600, padding: "11px 20px", borderRadius: 999, textDecoration: "none" }}>WhatsApp</a>
        </div>
      </div>
    </InfoPage>
  );
}

export const tableWrap = { overflowX: "auto", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-md)", marginBottom: 14 };
export const th = { textAlign: "left", background: "var(--navy-900)", color: "var(--white)", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, padding: "10px 12px", whiteSpace: "nowrap" };
export const td = { fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-700)", padding: "10px 12px", borderTop: "1px solid var(--ink-100)", verticalAlign: "top" };
