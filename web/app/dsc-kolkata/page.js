import { CityLanding } from "@/components/landing/CityLanding";

const path = "/dsc-kolkata";
const title = "Digital Signature Certificate (DSC) in Kolkata | Class 3, From ₹1,590 | Income N Filing";
const description = "Class 3 digital signature certificate in Kolkata for GST, MCA, income tax and tenders. Hype USB token included, final price, assisted or self-service. Office in Kasba.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: path, title: "Digital signature certificate in Kolkata", description },
};

const faqs = [
  ["Which DSC class do I need?", "Only Class 3 certificates are issued now. Class 2 certificates ended on 1 January 2021. A Class 3 certificate works for GST, MCA company filings, income tax and e-tenders."],
  ["What does the DSC price include?", "The certificate, a Hype USB token, a key ring for a new DSC and our fee. It is a final price, with no GST added on top. Already hold a Hype token? Deduct ₹390 from any Assisted price."],
  ["What is the difference between Assisted and Basic?", "With Assisted we handle the steps with you, from the form to the activation. With Basic you complete the steps yourself. Assisted starts at ₹1,890 and Basic at ₹1,590, by certificate type and validity."],
  ["What documents are needed?", "PAN, Aadhaar, a photograph, mobile number and email linked to the applicant. A company or LLP signer may need extra papers. We confirm the list for your case before you start."],
  ["How long does a DSC take?", "It depends on the verification step, which we do not control. Once your documents are complete, we guide you through each step and tell you the status."],
  ["Can I get it without visiting Kolkata?", "Yes. Most of the work is done online and by WhatsApp. The token is sent to you, or you can collect it from our Kasba office, Monday to Saturday, 10:00 to 19:00 IST."],
];

export default function Page() {
  return (
    <CityLanding
      path={path}
      name="Digital Signature Certificate in Kolkata"
      description={description}
      eyebrow="Digital signature · Kolkata"
      h1="Digital signature certificate (DSC) in Kolkata"
      lead="Class 3 DSC with a Hype USB token for GST, MCA, income tax and tenders. A final price, with the steps handled for you if you choose Assisted."
      problems={[
        { q: "Which class?", a: "Only Class 3 is issued now." },
        { q: "Hidden extras?", a: "Certificate, token and our fee are in one price." },
        { q: "Too many steps?", a: "Choose Assisted and we do them with you." },
        { q: "Have a Hype token?", a: "Deduct ₹390 from any Assisted price." },
      ]}
      tilesTitle="Where a DSC is used"
      tiles={[
        ["GST portal", "Registration and return filing for companies and LLPs."],
        ["MCA and ROC", "Director and company filings."],
        ["Income tax", "Returns and audit reports that need a signature."],
        ["Tenders", "E-tendering and portal bids."],
      ]}
      steps={[
        "Book a call or message us. We confirm certificate type, validity and price in writing.",
        "You share documents on WhatsApp.",
        "One person prepares the application. A second person checks it.",
        "You complete verification, and we help you activate and test the token.",
      ]}
      priceNote="Assisted service from ₹1,890 and Basic service from ₹1,590. Both are final prices, with the certificate, Hype USB token and our fee included."
      faqs={faqs}
      formTitle="Get your DSC quote"
      source="dsc-kolkata"
      pricingHref="/pricing/dsc"
      pricingLabel="See all DSC prices"
      serviceOptions={["New DSC, individual", "New DSC, company or LLP signer", "DSC renewal", "Token help", "Not sure"]}
    />
  );
}
