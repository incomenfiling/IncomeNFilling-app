import { CityLanding } from "@/components/landing/CityLanding";

const path = "/professional-tax-kolkata";
const title = "Professional Tax Registration in Kolkata, West Bengal | From ₹1,499 + GST | Income N Filing";
const description = "Professional tax registration (PTRC and PTEC) and monthly filing for West Bengal employers, firms and professionals. New slabs from 1 October 2026. Fee fixed in writing. Office in Kasba, Kolkata.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: path, title: "Professional tax registration in Kolkata", description },
};

const faqs = [
  ["What is the difference between PTRC and PTEC?", "PTRC is the enrolment of an employer who deducts professional tax from employees' salary and pays it each month. PTEC is the enrolment of a company, firm or professional who pays the tax in their own name. Some businesses need both. We tell you which applies to you."],
  ["What are the professional tax slabs in West Bengal?", "From 1 October 2026, under Notification No. 1607-F.T. dated 16 September 2026: monthly gross salary up to ₹20,000 is nil, ₹20,001 to ₹30,000 is ₹100, ₹30,001 to ₹50,000 is ₹140, ₹50,001 to ₹1,00,000 is ₹170, and above ₹1,00,000 is ₹208. For salary months up to September 2026 the old slabs apply."],
  ["When must employee professional tax be paid?", "By the 21st of the next month. Late payment carries interest of 1% of the tax for each month of delay. We prepare the challan and remind you before the date."],
  ["When is the PTEC yearly payment due?", "By 31 July each year. The amount depends on your type of business, up to ₹2,500 a year. We tell you the exact amount for your case before you pay."],
  ["What is the annual Form III?", "The yearly return filed by a PTRC holder once the year's tax is paid, due by 30 April. The state sometimes extends the date, and we tell you if it does."],
  ["Do I need to visit your Kolkata office?", "No. Most work is done by phone, WhatsApp and shared folders. You are welcome at our Kasba office, Monday to Saturday, 10:00 to 19:00 IST."],
];

export default function Page() {
  return (
    <CityLanding
      path={path}
      name="Professional Tax Registration in Kolkata"
      description={description}
      eyebrow="Professional tax · Kolkata, West Bengal"
      h1="Professional tax registration in Kolkata"
      lead="PTRC and PTEC registration, monthly deposit and annual Form III for West Bengal. Prepared by one person and checked by another."
      problems={[
        { q: "PTRC or PTEC?", a: "We tell you which you need." },
        { q: "New slabs?", a: "We map each employee to the right slab." },
        { q: "21st every month?", a: "We prepare the challan and remind you." },
        { q: "Old months pending?", a: "We clear them before filing." },
      ]}
      tilesTitle="Who we register"
      tiles={[
        ["Employers", "Businesses that deduct tax from staff salary (PTRC)."],
        ["Companies and LLPs", "Enrolment in the entity's own name (PTEC)."],
        ["Firms and proprietors", "Traders and shops that pay on their own account."],
        ["Professionals", "Individuals who practise a profession in West Bengal."],
      ]}
      steps={[
        "Book a call or send your details. We confirm PTRC, PTEC or both, and the fee, in writing.",
        "You share documents on WhatsApp or a shared folder.",
        "One person prepares the portal application. A second person checks it.",
        "We file, follow up until the certificate, and set up your monthly and yearly dates.",
      ]}
      priceNote="Registration (PTRC or PTEC) from ₹1,499 + 18% GST (₹1,769 in total). PTEC yearly payment ₹499 + GST. PTRC yearly plans start at ₹6,999 + GST for up to 10 employees."
      faqs={faqs}
      formTitle="Get your professional tax quote"
      source="professional-tax-kolkata"
      pricingHref="/pricing/professional-tax"
      pricingLabel="See all professional tax prices"
      serviceOptions={["PTRC registration", "PTEC registration", "PTRC monthly and Form III", "PTEC yearly payment", "Old months pending", "Not sure"]}
    />
  );
}
