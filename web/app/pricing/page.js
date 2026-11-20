import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";
import { PRICE_LIST } from "@/data/pricing";

export const metadata = {
  title: { absolute: "GST Service Prices in Kolkata | Income N Filing" },
  description: "Fees for GST registration, filing, refund, LUT, e-invoice, amendment and more from Income N Filing, Kolkata. Fee plus 18% GST, fixed in writing before we start.",
  alternates: { canonical: "/pricing" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/pricing", title: "GST Service Prices | Income N Filing", description: "Fee plus 18% GST, fixed in writing before we start." },
};

const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };
const th = { textAlign: "left", padding: "9px 12px", fontWeight: 500, color: "var(--ink-500)", fontSize: 13 };
const td = { padding: "10px 12px", borderTop: "1px solid var(--ink-100)", verticalAlign: "top" };

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
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px 20px 96px" }}>
        <nav aria-label="Jump to a service" style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
          {PRICE_LIST.map((s) => (
            <a key={s.name} href={`#${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ border: "1px solid var(--ink-100)", background: "var(--white)", borderRadius: 999, padding: "7px 14px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--navy-800)", textDecoration: "none" }}>{s.name.replace("GST ", "")}</a>
          ))}
        </nav>
        {PRICE_LIST.map((s) => (
          <section key={s.name} id={s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")} style={{ marginBottom: 32, scrollMarginTop: 90 }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: "0 0 2px" }}>{s.name}</h2>
            <p style={{ ...T, fontSize: 13, marginBottom: 8 }}>{s.per}</p>
            <div style={{ overflowX: "auto", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)" }}>
                <thead><tr><th scope="col" style={th}>Plan</th><th scope="col" style={th}>Fee (before GST)</th><th scope="col" style={th}>Total incl. GST</th></tr></thead>
                <tbody>
                  {s.rows.map((r) => (
                    <tr key={r[0]}><th scope="row" style={{ ...td, textAlign: "left", fontWeight: 400 }}>{r[0]}</th><td style={{ ...td, fontWeight: 600, color: "var(--navy-900)" }}>{r[1]}</td><td style={{ ...td, fontWeight: 600, color: "var(--navy-900)" }}>{r[2]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
            {s.note && <p style={{ ...T, fontSize: 13, marginTop: 8 }}>{s.note}</p>}
            {s.href && <p style={{ ...T, marginTop: 8 }}><Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 600 }}>See all inclusions for {s.name} →</Link></p>}
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
