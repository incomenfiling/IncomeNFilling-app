import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL, PHONE_DISPLAY, ADDRESS_LINE, MAPS_URL } from "@/data/content";
import { SERVICE_PAGES } from "@/data/servicePages";
import { CITIES } from "@/data/cities";

const city = CITIES.kolkata;

export const metadata = {
  title: { absolute: "Tax and Compliance Services in Kolkata | Income N Filing" },
  description: "Income tax, GST, company and compliance services from our head office in Kasba, Kolkata. Every file is made by one person and checked by another.",
  alternates: { canonical: city.path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: city.path, title: "Tax and Compliance Services in Kolkata", description: "Tax and compliance in Kolkata since 2017." },
};

const h2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "44px 0 14px" };
const p = { fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 14px" };
const btn = { display: "inline-block", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, padding: "13px 26px", borderRadius: "var(--radius-pill)", textDecoration: "none" };

export default function KolkataPage() {
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: city.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const services = [{ slug: "itr-filing", name: "ITR Filing" }, ...SERVICE_PAGES.map((s) => ({ slug: s.slug, name: s.name }))];
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <WhatsAppButton />
      <NavBar />
      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: "clamp(48px,8vw,80px) 20px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14 }}>Kasba, Kolkata · Since 2017</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(30px,5.5vw,48px)", color: "var(--white)", margin: 0, lineHeight: 1.12 }}>Tax and compliance services in Kolkata</h1>
        </div>
      </section>
      <main style={{ maxWidth: 820, margin: "0 auto", padding: "8px 20px 96px" }}>
        <p style={{ ...p, marginTop: 28 }}>Income N Filing is a tax and compliance firm with its head office in Kasba, Kolkata. We help individuals, startups and businesses with income tax, GST, company and LLP registration, ROC filings, TDS and bookkeeping. Every file is prepared by one person and checked by another, before and after filing.</p>

        <h2 style={h2}>Services we offer in Kolkata</h2>
        <ul style={{ ...p, paddingLeft: 22 }}>
          {services.map((s) => (
            <li key={s.slug}><Link href={`/services/${s.slug}`} style={{ color: "var(--link)" }}>{s.name}</Link></li>
          ))}
        </ul>
        <p style={p}>See the <Link href="/services" style={{ color: "var(--link)" }}>full list of services</Link>.</p>

        <h2 style={h2}>Visit our Kolkata office</h2>
        <address style={{ ...p, fontStyle: "normal" }}>{ADDRESS_LINE}</address>
        <p style={p}>Monday to Saturday, 10:00 to 19:00 IST. Phone and WhatsApp: {PHONE_DISPLAY}.</p>
        <p style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--navy-900)", color: "var(--white)" }}>Get directions</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--gold-500)", color: "var(--navy-900)" }}>Book a 20-min call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, border: "2px solid var(--navy-900)", color: "var(--navy-900)" }}>Chat on WhatsApp</a>
        </p>

        <h2 style={h2}>Questions about our Kolkata office</h2>
        {city.faqs.map((f) => (
          <details key={f.q} open style={{ marginBottom: 12 }}>
            <summary style={{ ...p, fontWeight: 600, color: "var(--navy-900)", cursor: "pointer", margin: 0 }}>{f.q}</summary>
            <p style={{ ...p, marginTop: 8 }}>{f.a}</p>
          </details>
        ))}
      </main>
      <Footer />
    </div>
  );
}
