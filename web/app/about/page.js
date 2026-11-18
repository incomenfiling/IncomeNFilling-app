import Image from "next/image";
import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";

export const metadata = {
  title: "About Income N Filing | Tax and Compliance, Kolkata",
  description: "Income N Filing is a tax and compliance firm in Kasba, Kolkata, founded in 2017. Every file is made by one person and checked by another, before and after filing.",
  alternates: { canonical: "/about" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/about", title: "About Income N Filing", description: "Tax and compliance in Kolkata since 2017. Every file is made by one person and checked by another." },
};

const h2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "48px 0 14px" };
const p = { fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 14px" };
const btn = { display: "inline-block", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, padding: "13px 26px", borderRadius: "var(--radius-pill)", textDecoration: "none" };

export default function AboutPage() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="about" />
      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: "clamp(48px,8vw,80px) 20px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14 }}>About us</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(30px,5.5vw,48px)", color: "var(--white)", margin: 0, lineHeight: 1.12 }}>Tax and compliance, built around a second pair of eyes</h1>
        </div>
      </section>

      <main style={{ maxWidth: 820, margin: "0 auto", padding: "8px 20px 96px" }}>
        <h2 style={h2}>Our story</h2>
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start", flexWrap: "wrap" }}>
          <Image src="/images/anish-jhunjhunwala.webp" alt="Anish Jhunjhunwala, founder of Income N Filing" width={160} height={160} style={{ borderRadius: "50%", objectFit: "cover", flex: "0 0 auto" }} />
          <div style={{ flex: "1 1 300px" }}>
            <p style={p}>I started Income N Filing in 2017 in Kolkata, after seeing how work was checked, or not checked, in the firms I worked in. The owner rarely looked at the work, nobody checked it independently, and clients never knew where their work stood.</p>
            <p style={p}>So I built this firm differently. Every file has a maker and a separate checker. Since 2017, 500+ clients have trusted us with their tax and compliance.</p>
            <p style={{ ...p, color: "var(--navy-900)", fontWeight: 600 }}>Anish Jhunjhunwala, Founder</p>
          </div>
        </div>

        <h2 style={h2}>How your file is handled</h2>
        <ol style={{ ...p, paddingLeft: 22 }}>
          <li>One person prepares your file.</li>
          <li>A different person checks it before filing.</li>
          <li>The file is checked again after filing.</li>
          <li>The owner spot-checks files at random.</li>
          <li>You see progress as it happens.</li>
        </ol>

        <h2 style={h2}>Our promise, with its terms</h2>
        <div style={{ background: "var(--navy-050)", border: "1px solid var(--ink-100)", borderLeft: "4px solid var(--gold-500)", borderRadius: "var(--radius-md)", padding: "18px 22px" }}>
          <p style={{ ...p, margin: 0, color: "var(--navy-900)" }}>If our mistake costs you a penalty, we pay it. This applies when you gave us accurate documents before the due date. Full terms are in our <Link href="/#faq" style={{ color: "var(--navy-700)" }}>FAQ</Link>.</p>
        </div>

        <h2 style={h2}>What we do</h2>
        <ul style={{ ...p, paddingLeft: 22 }}>
          <li><Link href="/services/income-tax" style={{ color: "var(--navy-700)" }}>Income tax</Link>: ITR filing, notices and planning</li>
          <li><Link href="/services/gst-compliance" style={{ color: "var(--navy-700)" }}>GST</Link>: registration, returns and notices</li>
          <li><Link href="/services/incorporation-registrations" style={{ color: "var(--navy-700)" }}>Company registration</Link>: Pvt Ltd, LLP, OPC and more</li>
          <li><Link href="/services/accounting-bookkeeping" style={{ color: "var(--navy-700)" }}>Accounting and bookkeeping</Link>, plus TDS, ROC and other compliance</li>
        </ul>

        <h2 style={h2}>Where we work</h2>
        <p style={p}>Our head office is in Kasba, Kolkata. We also have teams in Bengaluru, Mumbai, Ahmedabad, Delhi, Lucknow and Hyderabad. We serve clients across India.</p>

        <h2 style={h2}>Your data</h2>
        <p style={p}>Documents you share are stored in Google Drive and on our own server. Access is limited to authorised people working on your file. Read our <Link href="/privacy" style={{ color: "var(--navy-700)" }}>Privacy Policy</Link>.</p>

        <h2 style={h2}>Talk to us</h2>
        <p style={p}>Tell us your service and we will explain the process, documents and fees. We reply Monday to Saturday, 10:00 to 19:00.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "#25D366", color: "#fff" }}>Chat on WhatsApp</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...btn, background: "var(--gold-500)", color: "var(--navy-950)" }}>Book a 20-min call</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
