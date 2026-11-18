"use client";
import { useRouter } from "next/navigation";
import { useBP } from "@/lib/useBP";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/Button";

import Link from "next/link";
import { ITR_FAQ } from "@/data/itrPage";

const H2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "40px 0 16px" };
const P = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-base)", lineHeight: "var(--leading-base)", margin: 0 };
const LI = { ...P, marginBottom: 8 };
const List = ({ items }) => (
  <ul style={{ margin: 0, paddingLeft: 22 }}>{items.map((t) => <li key={t} style={LI}>{t}</li>)}</ul>
);

const WHO = [
  "Salaried people with more than one source of income",
  "People with capital gains from shares, mutual funds or property",
  "Freelancers and professionals",
  "Business owners and traders",
  "Anyone claiming a refund, or needing an ITR for a loan or visa",
];
const FORMS = [
  ["ITR-1", "salary, one house property and other income, within the limits"],
  ["ITR-2", "capital gains, more than one house property, or foreign assets"],
  ["ITR-3", "business or professional income"],
  ["ITR-4", "presumptive taxation"],
];
const DOCS = [
  "PAN and Aadhaar, and your bank account details",
  "Form 16 or salary slips",
  "AIS and Form 26AS",
  "Bank interest certificates and statements",
  "Rent receipts and home loan interest certificate",
  "Capital gains statements from your broker",
  "Investment and insurance proofs",
  "Advance tax or self-assessment tax paid",
];
const STEPS = [
  "You share documents on WhatsApp or the form.",
  "We confirm the scope and fee in writing.",
  "One person prepares your return and works out the tax.",
  "A second person checks it before filing, and you approve it.",
  "We file, help you e-verify, and check again after filing. You receive the acknowledgement.",
];
const FEE = [
  "The type of income: salary only, capital gains, or business",
  "The number of income sources",
  "How many years are pending",
  "Whether your records are ready",
  "Any notice involved",
];
const MISTAKES = [
  "Not matching your AIS and Form 26AS with the return",
  "Leaving out small interest income",
  "Choosing the wrong ITR form",
  "Forgetting to e-verify",
  "Giving a bank account that is not validated for your refund",
  "Reporting capital gains wrongly",
  "Missing the due date",
];

export default function ITRFilingPage() {
  const router = useRouter();
  const bp = useBP();

  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="itr" />
      <section style={{ padding: bp.mobile ? "32px 20px 64px" : "56px 32px 90px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--ink-500)", marginBottom: 16 }}>
          services / income-tax / <span style={{ color: "var(--navy-900)" }}>itr-filing</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: bp.ltDesktop ? "1fr" : "1.5fr 1fr", gap: 40, alignItems: "start" }}>
          <div>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: "0 0 16px" }}>ITR Filing in Kolkata</h1>
            <p style={{ ...P, maxWidth: 640 }}>
              We prepare and file income tax returns for salaried people, professionals, traders and businesses. Every return is prepared by one person and checked by another, before and after filing.
            </p>
            <h2 style={H2}>Who needs this</h2>
            <List items={WHO} />
            <p style={{ ...P, marginTop: 12 }}>Whether you must file depends on your income and other conditions. If you are unsure, send us your documents and we will tell you.</p>
            <h2 style={H2}>Which ITR form applies</h2>
            <ul style={{ margin: 0, paddingLeft: 22 }}>
              {FORMS.map(([f, d]) => <li key={f} style={LI}><strong style={{ color: "var(--navy-900)" }}>{f}:</strong> {d}</li>)}
            </ul>
            <p style={{ ...P, marginTop: 12 }}>We pick the right form for you.</p>
            <h2 style={H2}>Documents to keep ready</h2>
            <List items={DOCS} />
            <h2 style={H2}>How it works</h2>
            <ol style={{ margin: 0, paddingLeft: 22 }}>{STEPS.map((t) => <li key={t} style={LI}>{t}</li>)}</ol>
            <h2 style={H2}>Timeline</h2>
            <p style={P}>It depends on when your documents arrive and how complex the return is. We give you the expected date when we confirm the scope. Do not leave it to the last week, because portal problems or missing documents can push you past the due date.</p>
            <h2 style={H2}>What affects the fee</h2>
            <List items={FEE} />
            <p style={{ ...P, marginTop: 12 }}>The fee is fixed and quoted in writing before we start. Government charges, such as a late fee, are separate.</p>
            <h2 style={H2}>Common mistakes to avoid</h2>
            <List items={MISTAKES} />
            <h2 style={H2}>In Kolkata</h2>
            <p style={P}>We are based in Kasba, Kolkata and file returns for clients across West Bengal and India. Message us on WhatsApp or book a 20-min call. We reply Monday to Saturday, 10:00 to 19:00. Missed the due date? Read our guide to the <Link href="/blog/missed-itr-deadline-belated-return-31-december-2026" style={{ color: "var(--navy-800)", fontWeight: 600 }}>belated return</Link>.</p>
            <h2 style={H2}>Questions and answers</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {ITR_FAQ.map((f) => (
                <details key={f.q} open style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "16px 20px" }}>
                  <summary style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", cursor: "pointer" }}>{f.q}</summary>
                  <p style={{ ...P, marginTop: 10 }}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
          <div style={{ position: bp.ltDesktop ? "static" : "sticky", top: 24, background: "var(--navy-900)", borderRadius: "var(--radius-xl)", padding: bp.mobile ? 24 : 32, color: "var(--white)", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, background: "var(--gold-500)", opacity: 0.15, borderRadius: "50%" }} />
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 10, position: "relative" }}>Get started</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", marginBottom: 14, position: "relative" }}>Book your ITR filing</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--navy-300)", lineHeight: "var(--leading-sm)", marginBottom: 24, position: "relative" }}>Tell us your service and we will explain the process, documents and fees.</p>
            <Button variant="primary" fullWidth onClick={() => router.push("/chat")}>Chat With an Advisor</Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
