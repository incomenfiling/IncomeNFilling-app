import { CityLanding } from "@/components/landing/CityLanding";

const path = "/gst-registration-kolkata";
const title = "GST Registration in Kolkata | From ₹999 + GST | Income N Filing";
const description = "GST registration in Kolkata for proprietors, firms, LLPs and companies. Fee fixed in writing, documents checked first, ARN tracked. Office in Kasba.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: path, title: "GST registration in Kolkata", description },
};

const faqs = [
  ["Who needs GST registration?", "Businesses whose turnover crosses the threshold for their state and type of supply, and those who must register whatever the turnover, such as inter-state suppliers of goods in many cases and e-commerce sellers. Tell us what you sell and where, and we confirm whether you need it."],
  ["What documents are needed?", "PAN and Aadhaar of the proprietor, partners or directors, a photograph, proof of the business address (rent agreement and the owner's electricity bill, or ownership proof) and bank account proof. Firms, LLPs and companies also need their deed or incorporation papers. We confirm the exact list for your case."],
  ["What is Rule 14A simplified registration?", "A simplified route on the GST portal for eligible small applicants. Eligibility depends on your output tax liability and your case, so we check it against the current rules before choosing the route."],
  ["How long does it take?", "It depends on the department's verification, which we do not control. Once your documents are complete we file the application, track the ARN and tell you the status at each step."],
  ["What happens if the department raises a query?", "We read it, tell you what it asks and prepare the reply for your approval. A routine registration query reply is part of the plans listed under Fees."],
  ["What is Rule 10A bank updation?", "After registration is granted, the bank account details must be added on the GST portal within the time the rule allows. Without it the GSTIN can be cancelled. It is included in our Business Launchpad plan."],
  ["Do I need to visit your Kolkata office?", "No. Most work is done by phone, WhatsApp and shared folders. You are welcome to visit our office in Kasba, Monday to Saturday, 10:00 to 19:00 IST."],
];

export default function Page() {
  return (
    <CityLanding
      path={path}
      name="GST Registration in Kolkata"
      description={description}
      eyebrow="GST registration · Kolkata"
      h1="GST registration in Kolkata"
      lead="For proprietors, partnership firms, LLPs and companies. Your application is prepared by one person and checked by another, and we track it until the GSTIN is issued."
      problems={[
        { q: "Documents unclear?", a: "We check them before we apply." },
        { q: "Department query?", a: "We read it and prepare the reply." },
        { q: "GSTIN at risk?", a: "Bank updation is in our Launchpad plan." },
        { q: "Where is my ARN?", a: "We track it and tell you." },
      ]}
      tilesTitle="Registrations we handle"
      tiles={[
        ["Proprietors and individuals", "Shops, traders, freelancers and service providers."],
        ["Partnership firms and LLPs", "With the deed or LLP agreement and partner details."],
        ["Private limited companies", "With incorporation papers and director details."],
        ["Online sellers", "Marketplace and e-commerce sellers who need GST to sell."],
      ]}
      steps={[
        "Book a call or send your details. We confirm the route, documents and fee in writing.",
        "You share documents on WhatsApp or a shared folder.",
        "One person prepares the application. A second person checks it.",
        "We file, track the ARN, answer any query and send you the certificate.",
      ]}
      priceNote="Essential from ₹999 + 18% GST (₹1,179 in total) for individuals and proprietors. Business Launchpad ₹2,499 + 18% GST (₹2,949 in total). Firms, LLPs and companies: see the full table on the pricing page."
      faqs={faqs}
      formTitle="Get your GST registration quote"
      source="gst-registration-kolkata"
      pricingHref="/pricing/gst"
      pricingLabel="See all GST prices"
      serviceOptions={["GST registration, proprietor", "GST registration, firm or LLP", "GST registration, company", "Online seller GST", "GST notice or query", "Not sure"]}
    />
  );
}
