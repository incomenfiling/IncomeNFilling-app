import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";
import { PRICE_LIST } from "@/data/pricing";
import { PriceDetails } from "@/components/pricing/PriceDetails";

export const PRICE_GROUPS = {
  gst: { key: "GST", h1: "GST service prices in Kolkata", sub: "GST Registration and other GST services", lead: "Fee + 18% GST. Totals shown include GST. Fixed in writing before we start. Government charges, if any, are separate.",
    title: "GST Service Prices in Kolkata | Income N Filing", description: "Prices for GST registration, monthly filing, NIL returns, LUT, refund, amendment, cancellation and more from Income N Filing, Kolkata. Fixed in writing." },
  dsc: { key: "DSC", h1: "Digital Signature Certificate (DSC) prices", sub: "Digital Signature Certificate", lead: "Final price: certificate, Hype USB token, key ring (new DSC) and our fee. Courier and porter at actual cost.",
    title: "DSC Price in Kolkata, Class 3 Certificate | Income N Filing", description: "Class 3 digital signature certificate prices with a Hype USB token, by certificate type and validity. Assisted and Basic service, Income N Filing, Kolkata." },
  accounting: { key: "Accounting", h1: "Accounting and cash-flow desk prices", sub: "Monthly books, GST and TDS filing, cash-flow reports", lead: "Monthly fee + 18% GST, plus a one-time setup fee. All work is done in Tally by our backend team.",
    title: "Monthly Accounting Prices in Kolkata | Income N Filing", description: "Monthly accounting plans in Tally with GST and TDS filing and cash-flow reports, by number of entries. Income N Filing, Kolkata. Fixed in writing." },
};

const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };

export function PriceGroupPage({ groupKey }) {
  const g = PRICE_GROUPS[groupKey];
  const items = PRICE_LIST.filter((x) => (x.group || "GST") === g.key);
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="pricing" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://incomenfiling.com/" }, { "@type": "ListItem", position: 2, name: "Pricing", item: "https://incomenfiling.com/pricing" }, { "@type": "ListItem", position: 3, name: g.key, item: `https://incomenfiling.com/pricing/${groupKey}` }] }) }} />
      <section style={{ background: "var(--navy-900)", padding: "clamp(40px,7vw,72px) 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(28px,5vw,44px)", color: "var(--white)", margin: "0 0 12px" }}>{g.h1}</h1>
          <p style={{ ...T, color: "var(--navy-300)", maxWidth: 640 }}>{g.lead}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Get an exact quote</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Book a call</a>
          </div>
        </div>
      </section>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 20px 96px" }}>
        <p style={{ ...T, marginBottom: 12 }}><Link href="/pricing" style={{ color: "var(--navy-800)", fontWeight: 600 }}>← All prices</Link> · <Link href="/pricing/gst" style={{ color: "var(--navy-800)" }}>GST</Link> · <Link href="/pricing/dsc" style={{ color: "var(--navy-800)" }}>DSC</Link> · <Link href="/pricing/accounting" style={{ color: "var(--navy-800)" }}>Accounting</Link></p>
        {[g].map((g) => (
          <div key={g.key}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", margin: "8px 0 6px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: 0 }}>{g.key}</h2>
              <span style={{ ...T, fontSize: 14 }}>{g.sub}</span>
            </div>
            <nav aria-label={`Jump to a ${g.key} service`} style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "10px 0 22px" }}>
              {items.map((s) => (
                <a key={s.name} href={`#${slug(s.name)}`} style={{ border: "1px solid var(--ink-100)", background: "var(--white)", borderRadius: 999, padding: "8px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)", textDecoration: "none" }}>{s.name.replace("GST ", "")}</a>
              ))}
            </nav>
            {items.map((s) => (
          <section key={s.name} id={slug(s.name)} style={{ marginBottom: 36, scrollMarginTop: 90, background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: "22px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: 0 }}>{s.name}</h3>
                <p style={{ ...T, fontSize: 13, marginTop: 2 }}>{s.per}</p>
              </div>
              <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I want a quote for " + s.name)}`} target="_blank" rel="noopener noreferrer" style={{ background: "var(--navy-900)", color: "var(--white)", fontWeight: 600, fontSize: 14, padding: "10px 18px", borderRadius: 999, textDecoration: "none" }}>Get this quote</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 16 }}>
              {s.rows.map((r) => {
                const rec = /recommended/i.test(r[0]);
                const label = r[0].replace(/\s*\(recommended\)|,\s*recommended\)/i, rec && r[0].includes(", recommended)") ? ")" : "");
                return (
                  <div key={r[0]} style={{ border: rec ? "2px solid var(--gold-500)" : "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 14, display: "flex", flexDirection: "column", gap: 4, background: "var(--paper)" }}>
                    {rec && <span style={{ alignSelf: "flex-start", background: "var(--gold-050)", border: "1px solid var(--gold-500)", color: "var(--navy-900)", fontSize: 11, fontWeight: 600, padding: "1px 8px", borderRadius: 6 }}>Recommended</span>}
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.4, color: "var(--ink-700)" }}>{label}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--navy-900)", marginTop: "auto" }}>{r[1]}</div>
                    <div style={{ ...T, fontSize: 12 }}>{s.final ? "Final price" : `+ 18% GST · total ${r[2]}`}</div>
                  </div>
                );
              })}
            </div>
            <PriceDetails name={s.name} />
            {s.note && <p style={{ ...T, fontSize: 13, marginTop: 12 }}>{s.note}</p>}
            {s.href && <p style={{ ...T, marginTop: 12 }}><Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 600 }}>Open the full {s.name} page →</Link></p>}
          </section>
            ))}
          </div>
        ))}
        <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 18 }}>
          <p style={T}>Fees are professional fees only. Government fees, if any, are not included. These are the rates on the day you read this page. If a rate changes before we start work, we will update you. Our working hours are 10:00 to 19:00 IST, Monday to Saturday.</p>
          <p style={{ ...T, marginTop: 8 }}>Income tax returns, notices, company and LLP registration, ROC filings and bookkeeping depend on your papers. We quote them after we see your details, in writing, before we start.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
