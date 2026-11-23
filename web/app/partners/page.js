import { InfoPage, Sec, Tiles, T } from "@/components/layout/InfoPage";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";
import { WHATSAPP_URL } from "@/data/content";

export const metadata = {
  title: { absolute: "Partner Program for Tax Professionals | Income N Filing" },
  description: "White-label digital signatures and accounting back-office for accountants, tax professionals and consulting firms. You own the client. Request our partner rate card. Kolkata.",
  alternates: { canonical: "/partners" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/partners", title: "Partner Program | Income N Filing", description: "White-label digital signatures and accounting back-office for professionals. You own the client." },
};

const faqs = [
  ["Do you contact my clients?", "No. We work in your name and never contact your client directly."],
  ["Will my clients see your branding?", "No. Our working and reports carry no Income N Filing branding."],
  ["Who signs the final accounts and returns?", "You do, as the professional. We prepare the working. We do not sign audit reports."],
  ["Is there a minimum number of clients or a minimum period?", "No. Each client's plan is monthly. To stop, tell us in writing before the 25th."],
  ["What are the partner rates?", "Partner rates are lower than our standard fees. Send the form or WhatsApp us and we will share the rate card for your practice."],
  ["Where is the work done?", "In Kolkata. Digital signature work is done at our Kolkata office. Other cities are served by courier."],
];

export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <InfoPage
      eyebrow="Partner program"
      h1="Back-office for your practice. You own the client."
      lead="Digital signatures and accounting, GST and TDS work done in the background for accountants, tax professionals and consulting firms."
      ctas={
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          <a href="#partner-form" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Request the rate card</a>
          <a href={`${WHATSAPP_URL}?text=${encodeURIComponent("Hi, I want the partner rate card")}`} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>WhatsApp us</a>
        </div>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Sec h="Who this is for">
        <p style={T}>Accountants, tax professionals and consultants who serve their own clients and want extra hands for digital signatures, bookkeeping, GST and TDS, without hiring more staff.</p>
      </Sec>
      <Sec h="Problems we solve for your practice">
        <Tiles items={[["Client stuck on KYC?", "We guide you and your client through it."], ["Portal error on filing day?", "Support for the digital signature during office hours."], ["Staff tied up in data entry?", "Your team reviews and signs. We do the entry and reconciliation."], ["Clients want MIS and cash flow?", "Monthly reports come ready for you to share under your name."]]} />
      </Sec>
      <Sec h="What we do for you">
        <Tiles items={[
          ["Digital signature certificates", "Class 3 certificates with a Hype USB token for your clients. Kolkata delivery by porter or courier, other cities by courier. Technical support during office hours."],
          ["Accounting and cash-flow desk", "Books in Tally from your clients' soft copies, bank reconciliation, GST and TDS working and filing, debtor and creditor ageing, monthly P&L and Balance Sheet. Plans by number of entries per month, per client."],
          ["Add-ons, quoted in writing", "Payroll, invoices and e-way bills, GSTR-9, refunds, notices and backlog work. Nothing is charged without your yes."],
        ]} />
      </Sec>
      <Sec h="How it works with you">
        <Tiles items={[["You own the client", "We work in your name and never contact your client directly. We do not solicit your clients, during our work and for 24 months after it ends."], ["Your data stays separate", "Each client has a separate folder on our secure server. Data is confidential. We hand back Tally data on request."], ["White-label", "Working and reports carry no Income N Filing branding."], ["Simple exit", "No minimum clients and no minimum period. Tell us in writing before the 25th to stop from the next month."]]} />
      </Sec>
      <Sec h="What we do not do">
        <p style={T}>We do not collect payments from your client, call your client&apos;s parties, handle cash or visit banks. We do not do stock valuation, budgeting or forecasting, and we do not sign audit reports.</p>
      </Sec>
      <Sec h="Partner rates">
        <p style={T}>Partner rates are lower than our standard client fees and depend on the services and the number of clients. Send us the form and we share the rate card for your practice, with fees fixed in writing before we start.</p>
      </Sec>
      <Sec h="Questions">
        {faqs.map(([q, a]) => (
          <details key={q} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: 8 }}>
            <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center", fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--navy-900)" }}>{q}</summary>
            <p style={{ ...T, fontSize: 15, marginTop: 8 }}>{a}</p>
          </details>
        ))}
      </Sec>
      <div id="partner-form" style={{ scrollMarginTop: 90 }}>
        <SimpleLeadForm
          title="Request the partner rate card"
          source="partner"
          propertyField="service"
          button="Request rate card"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "firm", label: "Firm name", required: true },
            { name: "profession", label: "You are a", type: "select", required: true, options: ["Accountant", "Tax professional", "Consultant", "Company secretary", "Other professional"] },
            { name: "city", label: "City", required: true },
            { name: "phone", label: "WhatsApp number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "service", label: "Interested in", type: "select", required: true, options: ["Digital signatures", "Accounting desk", "Both"] },
            { name: "clients", label: "Approximate number of clients", type: "select", options: ["1 to 5", "6 to 20", "21 to 50", "More than 50"] },
          ]}
        />
      </div>
    </InfoPage>
  );
}
