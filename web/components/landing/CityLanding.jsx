import Link from "next/link";
import { InfoPage, Sec, Tiles, T } from "@/components/layout/InfoPage";
import { ProblemsSolve } from "@/components/ui/ProblemsSolve";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";
import { WHATSAPP_URL, BOOKING_URL, PAY_URL } from "@/data/content";
import { ldScript, webPage } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

// One compact landing layout for Kolkata search pages. Content comes from the page file.
export function CityLanding({ path, name, description, eyebrow, h1, lead, problems, tilesTitle, tiles, steps, priceNote, faqs, formTitle, source, serviceOptions, pricingHref = "/pricing/income-tax", pricingLabel = "See all income tax prices" }) {
  const graph = [
    webPage(path, name, description),
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Kolkata", item: `${SITE_URL}/kolkata` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
    ] },
    { "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  const cta = { fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" };
  return (
    <InfoPage
      eyebrow={eyebrow}
      h1={h1}
      lead={lead}
      ctas={
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          <a href="#lead-form" style={{ ...cta, background: "var(--gold-500)", color: "var(--navy-900)" }}>Get a quote in writing</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...cta, border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600 }}>Book a 20-min call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...cta, border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600 }}>WhatsApp us</a>
        </div>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={ldScript(graph)} />
      <ProblemsSolve items={problems} />
      <Sec h={tilesTitle}><Tiles items={tiles} /></Sec>
      <Sec h="How it works">
        <ol style={{ ...T, paddingLeft: 22, display: "grid", gap: 6 }}>{steps.map((s) => <li key={s}>{s}</li>)}</ol>
      </Sec>
      <Sec h="Fees">
        <p style={T}>{priceNote} <Link href={pricingHref} style={{ color: "var(--navy-800)", fontWeight: 700 }}>{pricingLabel}</Link>. The fee is fixed in writing before we start; government charges are separate.</p>
        <p style={{ ...T, fontSize: 15 }}>Already have our written quote? <a href={PAY_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>Pay it securely online</a> and enter the amount from the quote. After paying, send us your name and phone on WhatsApp.</p>
      </Sec>
      <Sec h="Questions">
        {faqs.map(([q, a]) => (
          <details key={q} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: 8 }}>
            <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center", fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--navy-900)" }}>{q}</summary>
            <p style={{ ...T, fontSize: 15, marginTop: 8 }}>{a}</p>
          </details>
        ))}
      </Sec>
      <div id="lead-form" style={{ scrollMarginTop: 90 }}>
        <SimpleLeadForm
          title={formTitle}
          source={source}
          propertyField="service"
          button="Request a quote"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "phone", label: "WhatsApp number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "service", label: "What do you need?", type: "select", required: true, options: serviceOptions },
          ]}
        />
      </div>
      <p style={{ ...T, fontSize: 13, marginTop: 14 }}>Prefer to talk? Call or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>WhatsApp 078905 94600</a>. Mon–Sat, 10:00–19:00 IST. Office: Kasba, Kolkata.</p>
    </InfoPage>
  );
}
