import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";
import { PRICE_LIST } from "@/data/pricing";

export const metadata = {
  title: { absolute: "Prices: GST, DSC and Accounting | Income N Filing" },
  description: "Prices for GST services, digital signature certificates and monthly accounting from Income N Filing, Kolkata. Fixed in writing before we start.",
  alternates: { canonical: "/pricing" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/pricing", title: "Prices: GST, DSC and Accounting | Income N Filing", description: "Fixed in writing before we start." },
};

const CARDS = [
  { key: "GST", href: "/pricing/gst", from: "From ₹499", note: "+ 18% GST", text: "Registration, monthly filing, NIL returns, LUT, refund, amendment, cancellation and more." },
  { key: "DSC", href: "/pricing/dsc", from: "From ₹1,590", note: "final price", text: "Class 3 certificate with a Hype USB token. Assisted and Basic service." },
  { key: "Company", href: "/pricing/company", from: "From ₹2,500", note: "+ 18% GST", text: "Private limited, LLP and partnership firm: registration and yearly ROC compliance." },
  { key: "Accounting", href: "/pricing/accounting", from: "From ₹7,999", note: "a month + 18% GST", text: "Books in Tally, GST and TDS filing, and cash-flow reports." },
];
const T = { fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };

export default function PricingPage() {
  const count = (k) => PRICE_LIST.filter((x) => (x.group || "GST") === k).length;
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="pricing" />
      <section style={{ background: "var(--navy-900)", padding: "clamp(40px,7vw,72px) 20px" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(28px,5vw,44px)", color: "var(--white)", margin: "0 0 12px" }}>Service prices</h1>
          <p style={{ ...T, color: "var(--navy-300)", maxWidth: 640 }}>Pick a service group. Fees are fixed in writing before we start. Government charges, if any, are separate.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Get an exact quote</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Book a call</a>
          </div>
        </div>
      </section>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 20px 96px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {CARDS.map((c) => (
            <Link key={c.key} href={c.href} style={{ display: "flex", flexDirection: "column", gap: 8, background: "var(--white)", border: "1px solid var(--ink-100)", borderTop: "4px solid var(--gold-500)", borderRadius: "var(--radius-xl)", padding: 22, textDecoration: "none" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--navy-900)", margin: 0 }}>{c.key === "Company" ? "Company and LLP" : c.key} prices</h2>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--navy-900)" }}>{c.from} <span style={{ ...T, fontSize: 13 }}>{c.note}</span></div>
              <p style={T}>{c.text}</p>
              <span style={{ ...T, fontSize: 13 }}>{count(c.key)} service{count(c.key) > 1 ? "s" : ""} with full inclusions</span>
              <span style={{ marginTop: "auto", color: "var(--navy-800)", fontWeight: 700, fontSize: 14 }}>See {c.key} prices →</span>
            </Link>
          ))}
        </div>
        <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 18, marginTop: 28 }}>
          <p style={T}>Fees are professional fees only. Government fees, if any, are not included. These are the rates on the day you read this page. If a rate changes before we start work, we will update you. Our working hours are 10:00 to 19:00 IST, Monday to Saturday.</p>
          <p style={{ ...T, marginTop: 8 }}>Income tax returns, notices, company and LLP registration, ROC filings and other services depend on your papers. We quote them after we see your details, in writing, before we start.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
