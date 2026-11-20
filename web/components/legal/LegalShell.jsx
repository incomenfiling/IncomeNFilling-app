import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";

export const CONSENT =
  "When you share your name, phone number, email address or other details, you allow Income N Filing to contact you by phone, SMS, WhatsApp or email about your enquiry and the services you ask for. You can withdraw this consent at any time by writing to us.";

export function H({ children }) {
  return <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: "34px 0 12px" }}>{children}</h2>;
}

export function P({ children }) {
  return <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--ink-500)", margin: "0 0 14px" }}>{children}</p>;
}

export function ConsentBox() {
  return (
    <div style={{ background: "var(--navy-050)", border: "1px solid var(--ink-100)", borderLeft: "4px solid var(--gold-500)", borderRadius: "var(--radius-md)", padding: "18px 22px", margin: "0 0 20px" }}>
      <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-base)", lineHeight: 1.7, color: "var(--navy-900)", margin: 0 }}>{CONSENT}</p>
    </div>
  );
}

export function LegalShell({ title, children }) {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="" />
      <section style={{ background: "linear-gradient(150deg,var(--navy-950) 0%,var(--navy-900) 55%,var(--navy-800) 100%)", padding: "clamp(44px,8vw,64px) 20px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--gold-400)", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 14 }}>Legal</div>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "clamp(28px,5vw,44px)", color: "var(--white)", margin: 0 }}>{title}</h1>
          <div style={{ marginTop: 12, fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--navy-300)" }}>Last updated November 2026</div>
        </div>
      </section>
      <section style={{ padding: "clamp(32px,6vw,48px) 20px 96px", maxWidth: 820, margin: "0 auto" }}>{children}</section>
      <Footer />
    </div>
  );
}
