import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";
import { PRICE_LIST } from "@/data/pricing";
import { PriceDetails } from "@/components/pricing/PriceDetails";

export const metadata = {
  title: { absolute: "GST Service Prices in Kolkata | Income N Filing" },
  description: "Fees for GST registration, filing, refund, LUT, e-invoice, amendment and more from Income N Filing, Kolkata. Fee plus 18% GST, fixed in writing before we start.",
  alternates: { canonical: "/pricing" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/pricing", title: "GST Service Prices | Income N Filing", description: "Fee plus 18% GST, fixed in writing before we start." },
};

const slug = (n) => n.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };

export default function PricingPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="pricing" />
      <section style={{ background: "var(--navy-900)", padding: "clamp(40px,7vw,72px) 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(28px,5vw,44px)", color: "var(--white)", margin: "0 0 12px" }}>GST service prices</h1>
          <p style={{ ...T, color: "var(--navy-300)", maxWidth: 640 }}>Fee + 18% GST. Totals shown include GST. The fee is fixed in writing before we start. Government charges, if any, are separate.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Get an exact quote</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Book a call</a>
          </div>
        </div>
      </section>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "28px 20px 96px" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: 0 }}>GST</h2>
          <span style={{ ...T, fontSize: 14 }}>GST Registration and other GST services</span>
        </div>
        <nav aria-label="Jump to a GST service" style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "14px 0 28px" }}>
          {PRICE_LIST.map((s) => (
            <a key={s.name} href={`#${slug(s.name)}`} style={{ border: "1px solid var(--ink-100)", background: "var(--white)", borderRadius: 999, padding: "8px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)", textDecoration: "none" }}>{s.name.replace("GST ", "")}</a>
          ))}
        </nav>
        {PRICE_LIST.map((s) => (
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
                    <div style={{ ...T, fontSize: 12 }}>+ 18% GST · total {r[2]}</div>
                  </div>
                );
              })}
            </div>
            <PriceDetails name={s.name} />
            {s.note && <p style={{ ...T, fontSize: 13, marginTop: 12 }}>{s.note}</p>}
            {s.href && <p style={{ ...T, marginTop: 12 }}><Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 600 }}>Open the full {s.name} page →</Link></p>}
          </section>
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
