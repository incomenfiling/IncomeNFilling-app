import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";
import { PRICE_LIST } from "@/data/pricing";
import { ldScript, webPage, priceCatalog } from "@/lib/schema";
import { PriceDetails } from "@/components/pricing/PriceDetails";

// One entry per price page. group = the PRICE_LIST group name. Add a new group here, in app/pricing/page.js, sitemap and llms.txt.
export const PRICE_GROUPS = {
  gst: { tab: "GST", group: "GST", h1: "GST service prices in Kolkata", lead: "Fee + 18% GST. Totals shown include GST. Fixed in writing before we start. Government charges, if any, are separate.",
    title: "GST Service Prices in Kolkata | Income N Filing", description: "Prices for GST registration, monthly filing, NIL returns, LUT, refund, amendment, cancellation and more from Income N Filing, Kolkata. Fixed in writing." },
  "income-tax": { tab: "Income Tax", group: "Income Tax", h1: "Income tax return filing prices", lead: "Fee + 18% GST, with the total shown. Pick your package by income and ITR form.", detailsName: "Income Tax Return Filing",
    title: "Income Tax Return Filing Prices in Kolkata | Income N Filing", description: "ITR-1 to ITR-5 filing packages for salaried people, investors, traders, professionals and firms, with fee and GST shown. Income N Filing, Kolkata." },
  dsc: { tab: "DSC", group: "DSC", h1: "Digital Signature Certificate (DSC) prices", lead: "Final price: certificate, Hype USB token, key ring (new DSC) and our fee. Courier and porter at actual cost.",
    title: "DSC Price in Kolkata, Class 3 Certificate | Income N Filing", description: "Class 3 digital signature certificate prices with a Hype USB token, by certificate type and validity. Assisted and Basic service, Income N Filing, Kolkata." },
  incorporation: { tab: "Incorporation", group: "Incorporation", h1: "Incorporation prices: Private Limited, LLP and partnership", lead: "Our fee + 18% GST. Digital signatures and government charges are on separate lines, in writing before you pay.",
    title: "Company, LLP Registration Prices in Kolkata | Income N Filing", description: "Private limited company, LLP and partnership firm registration prices, with our fee, digital signatures and government charges listed. Income N Filing, Kolkata." },
  roc: { tab: "ROC", group: "ROC", h1: "ROC annual compliance prices", lead: "One yearly fee for every regular ROC filing. Our fee + 18% GST. Government fees at actuals.",
    title: "ROC Annual Compliance Prices, Company and LLP | Income N Filing", description: "Yearly ROC compliance plans for private limited companies and LLPs: AOC-4, MGT-7A, Form 11, Form 8, DIR-3 KYC and event filings. Income N Filing, Kolkata." },
  "professional-tax": { tab: "Professional Tax", group: "Professional Tax", h1: "Professional tax prices in Kolkata (West Bengal)", lead: "Registration, monthly payment and annual return. Our fee + 18% GST. Government tax is separate and paid at actuals.", detailsName: "Professional Tax in Kolkata",
    title: "Professional Tax Registration and Return, Kolkata | Income N Filing", description: "PTRC and PTEC registration, monthly payment and annual Form III for West Bengal employers and professionals, with new salary slabs from October 2026. Income N Filing, Kolkata." },
  udyam: { tab: "Udyam (MSME)", group: "Udyam (MSME)", h1: "Udyam (MSME) registration prices", lead: "Our fee + 18% GST, with the total shown. The government fee for Udyam is ₹0.", detailsName: "Udyam (MSME) Registration",
    title: "Udyam (MSME) Registration Price in Kolkata | Income N Filing", description: "Udyam registration, update, reprint and cancellation prices with our fee and GST shown. The Udyam portal charges nothing. Income N Filing, Kolkata." },
  accounting: { tab: "Accounting", group: "Accounting", h1: "Accounting and cash-flow desk prices", lead: "Monthly fee + 18% GST, plus a one-time setup fee. All work is done in Tally by our backend team.",
    title: "Monthly Accounting Prices in Kolkata | Income N Filing", description: "Monthly accounting plans in Tally with GST and TDS filing and cash-flow reports, by number of entries. Income N Filing, Kolkata. Fixed in writing." },
};

const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };

export function PriceGroupPage({ groupKey }) {
  const g = PRICE_GROUPS[groupKey];
  const items = PRICE_LIST.filter((x) => (x.group || "GST") === g.group);
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="pricing" />
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript([webPage(`/pricing/${groupKey}`, g.h1, g.description), priceCatalog(`/pricing/${groupKey}`, g.tab, items)])} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://incomenfiling.com/" }, { "@type": "ListItem", position: 2, name: "Pricing", item: "https://incomenfiling.com/pricing" }, { "@type": "ListItem", position: 3, name: g.tab, item: `https://incomenfiling.com/pricing/${groupKey}` }] }) }} />
      <section style={{ background: "var(--navy-900)", padding: "clamp(36px,6vw,64px) 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(26px,4.6vw,42px)", color: "var(--white)", margin: "0 0 12px" }}>{g.h1}</h1>
          <p style={{ ...T, color: "var(--navy-300)", maxWidth: 680 }}>{g.lead}</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Get an exact quote</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Book a call</a>
          </div>
        </div>
      </section>
      <nav aria-label="Price groups" style={{ background: "var(--white)", borderBottom: "1px solid var(--ink-100)", position: "sticky", top: 0, zIndex: 5 }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", padding: "10px 20px", display: "flex", gap: 8, overflowX: "auto" }}>
          <Link href="/pricing" style={{ whiteSpace: "nowrap", padding: "8px 14px", borderRadius: 999, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 600, color: "var(--navy-800)", textDecoration: "none" }}>All prices</Link>
          {Object.entries(PRICE_GROUPS).map(([k, v]) => (
            <Link key={k} href={`/pricing/${k}`} aria-current={k === groupKey ? "page" : undefined} style={{ whiteSpace: "nowrap", padding: "8px 16px", borderRadius: 999, fontFamily: "var(--font-body)", fontSize: 14, fontWeight: 700, textDecoration: "none", background: k === groupKey ? "var(--navy-900)" : "var(--paper)", color: k === groupKey ? "var(--white)" : "var(--navy-800)", border: k === groupKey ? "1px solid var(--navy-900)" : "1px solid var(--ink-100)" }}>{v.tab}</Link>
          ))}
        </div>
      </nav>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 20px 96px" }}>
        {items.length > 1 && (
          <div style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "14px 16px", marginBottom: 24 }}>
            <div style={{ ...T, fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-800)", marginBottom: 8 }}>{items.length} services on this page</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {items.map((s) => (
                <a key={s.name} href={`#${slug(s.name)}`} style={{ border: "1px solid var(--navy-800)", background: "var(--white)", borderRadius: 999, padding: "6px 14px", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--navy-800)", textDecoration: "none" }}>{g.group === "GST" ? s.name.replace("GST ", "") : s.name}</a>
              ))}
            </div>
          </div>
        )}
        {items.map((s) => (
          <section key={s.name} id={slug(s.name)} style={{ marginBottom: 28, scrollMarginTop: 120, background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", overflow: "hidden" }}>
            <div style={{ background: "var(--navy-900)", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--white)", margin: 0 }}>{s.name}</h2>
                <p style={{ ...T, fontSize: 13, color: "var(--navy-300)", marginTop: 2 }}>{s.per}</p>
              </div>
              <Link href={`/contact?group=${groupKey}&service=${encodeURIComponent(s.name)}`} style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, fontSize: 14, padding: "10px 18px", borderRadius: 999, textDecoration: "none" }}>Get this quote</Link>
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 12 }}>
                {s.rows.map((r) => {
                  const rec = /recommended/i.test(r[0]);
                  const label = r[0].replace(/,?\s*\(?recommended\)?/i, "").replace(/\(\s*$/, "").replace(/\s+$/, "");
                  const final = s.final || r[2] === "Final price";
                  return (
                    <div key={r[0]} style={{ border: rec ? "2px solid var(--gold-500)" : "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 14, display: "flex", flexDirection: "column", gap: 6, background: rec ? "var(--gold-050)" : "var(--paper)" }}>
                      {rec && <span style={{ alignSelf: "flex-start", background: "var(--navy-900)", color: "var(--gold-400)", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 999 }}>Recommended</span>}
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, lineHeight: 1.35, color: "var(--navy-900)" }}>{label}</div>
                      {r[3] && <div style={{ ...T, fontSize: 12.5 }}>{r[3]}</div>}
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "var(--navy-900)", marginTop: "auto", paddingTop: 4 }}>{r[1]}</div>
                      <div style={{ ...T, fontSize: 12 }}>{final ? "Final price" : /^(quoted|custom)/i.test(r[2]) ? "Quoted in writing" : `+ 18% GST · total ${r[2]}`}</div>
                      <Link href={`/contact?group=${groupKey}&service=${encodeURIComponent(s.name)}&plan=${encodeURIComponent(label)}`} style={{ fontSize: 13, fontWeight: 700, color: "var(--navy-800)", textDecoration: "underline", padding: "6px 0" }}>Choose this plan →</Link>
                    </div>
                  );
                })}
              </div>
              {s.note && <p style={{ ...T, fontSize: 13, marginTop: 12 }}>{s.note}</p>}
              <PriceDetails name={s.name} />
              {s.href && <p style={{ ...T, marginTop: 12 }}><Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 700 }}>Open the full {s.name} page →</Link></p>}
            </div>
          </section>
        ))}
        {g.detailsName && (
          <section style={{ marginBottom: 28, background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 20 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: 0 }}>Package guide, what we need and terms</h2>
            <PriceDetails name={g.detailsName} />
          </section>
        )}
        <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 18 }}>
          <p style={T}>Fees are professional fees only. Government fees, if any, are not included. These are the rates on the day you read this page. If a rate changes before we start work, we will update you. Our working hours are 10:00 to 19:00 IST, Monday to Saturday.</p>
          <p style={{ ...T, marginTop: 8 }}>Notices, appeals and other services depend on your papers. We quote them after we see your details, in writing, before we start.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
