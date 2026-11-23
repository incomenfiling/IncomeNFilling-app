import Link from "next/link";
import { InfoPage, Sec, Tiles, T } from "@/components/layout/InfoPage";
import { ProblemsSolve } from "@/components/ui/ProblemsSolve";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";
import { WHATSAPP_URL, BOOKING_URL } from "@/data/content";

export const metadata = {
  title: { absolute: "GST for Online Sellers in Kolkata | Income N Filing" },
  description: "GST registration, monthly returns, marketplace reconciliation and income tax for online sellers on Amazon, Flipkart, Meesho and your own website. Kolkata team, fees fixed in writing.",
  alternates: { canonical: "/ecommerce-sellers" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/ecommerce-sellers", title: "GST and tax for online sellers | Income N Filing", description: "GST, reconciliation and income tax for marketplace and website sellers." },
};

const faqs = [
  ["Do I need a GST number to sell on Amazon, Flipkart or Meesho?", "In most cases yes, because marketplaces ask for a GSTIN at onboarding. Some small sellers of goods have a way to sell without one. Tell us what you sell and where, and we confirm what applies to you."],
  ["What is TCS on my marketplace payouts?", "The marketplace collects a small percentage of your net sales as GST TCS and deposits it with the government. It shows against your GSTIN and you claim it in your returns. It is not an extra cost if it is matched correctly."],
  ["Does the marketplace deduct income tax as well?", "Yes. Marketplaces deduct a small TDS on the sale amount, and it appears in your tax credit statement. We match it when we file your income tax return."],
  ["I sell from more than one state. What do I need?", "Stock kept in another state's warehouse usually needs a registration or an additional place of business in that state. We check this with you before you send stock."],
  ["How do you handle returns and cancellations?", "We reduce sales for returns using credit notes, based on the marketplace's reports, so your tax is not overpaid."],
  ["Do you also handle my income tax?", "Yes. Sellers file as an individual, proprietor, partnership, LLP or company. We prepare the return and keep it consistent with your GST returns."],
];

export default function Page() {
  const ld = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <InfoPage
      eyebrow="For online sellers"
      h1="GST and tax filing for online sellers in Kolkata"
      lead="Registration, monthly returns, marketplace reconciliation and income tax for sellers on Amazon, Flipkart, Meesho and your own website. Made by one, checked by another."
      ctas={
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          <a href="#seller-form" style={{ background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Get a quote in writing</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid var(--navy-300)", color: "var(--white)", fontWeight: 600, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Book a 20-min call</a>
        </div>
      }
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ProblemsSolve items={[
        { q: "Payout does not match sales?", a: "We reconcile the settlement reports with your books." },
        { q: "TCS and TDS not showing?", a: "We match both against your GST and tax records." },
        { q: "Returns and cancellations?", a: "Credit notes are prepared from the marketplace reports." },
        { q: "Selling from several states?", a: "We check the registration before you send stock." },
      ]} />
      <Sec h="What we do for sellers">
        <Tiles items={[
          ["GST registration", "For new sellers and for added states. We prepare the application and track it to the GSTIN."],
          ["Monthly or quarterly returns", "GSTR-1 and GSTR-3B from your sales reports, with a check before filing and after."],
          ["Marketplace reconciliation", "Sales, returns, fees, TCS and payouts matched, so the numbers in your return can be explained."],
          ["Income tax and books", "Your return, advance tax and a simple monthly view of profit, kept in line with GST."],
        ]} />
      </Sec>
      <Sec h="What we need from you each month">
        <ul style={{ ...T, paddingLeft: 20, display: "grid", gap: 6 }}>
          <li>Sales, returns and settlement reports from each marketplace, or a login we can use with your approval.</li>
          <li>Invoices for stock, packaging, ads and other business costs.</li>
          <li>Bank statements for the account that receives payouts.</li>
        </ul>
        <p style={{ ...T, marginTop: 10 }}>Send the complete data by the 5th of the month so we can file before the due date. The fee is fixed in writing before we start; government charges are separate. See <Link href="/pricing/gst" style={{ color: "var(--navy-800)", fontWeight: 700 }}>GST prices</Link>.</p>
      </Sec>
      <Sec h="Questions">
        {faqs.map(([q, a]) => (
          <details key={q} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-md)", padding: "12px 16px", marginBottom: 8 }}>
            <summary style={{ cursor: "pointer", minHeight: 44, display: "flex", alignItems: "center", fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--navy-900)" }}>{q}</summary>
            <p style={{ ...T, fontSize: 15, marginTop: 8 }}>{a}</p>
          </details>
        ))}
      </Sec>
      <div id="seller-form" style={{ scrollMarginTop: 90 }}>
        <SimpleLeadForm
          title="Tell us about your online business"
          source="sellers"
          propertyField="platform"
          button="Request a quote"
          fields={[
            { name: "name", label: "Your name", required: true },
            { name: "phone", label: "WhatsApp number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email" },
            { name: "platform", label: "You sell on", type: "select", required: true, options: ["Amazon", "Flipkart", "Meesho", "Own website", "More than one"] },
            { name: "gst", label: "Do you have a GST number?", type: "select", options: ["Yes", "No", "Not sure"] },
            { name: "orders", label: "Orders a month", type: "select", options: ["Up to 100", "100 to 500", "500 to 2,000", "More than 2,000"] },
          ]}
        />
      </div>
      <p style={{ ...T, fontSize: 13, marginTop: 14 }}>Prefer chat? <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>WhatsApp us</a>. Mon–Sat, 10:00–19:00 IST.</p>
    </InfoPage>
  );
}
