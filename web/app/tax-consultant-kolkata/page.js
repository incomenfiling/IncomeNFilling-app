import { CityLanding } from "@/components/landing/CityLanding";

const path = "/tax-consultant-kolkata";
const title = "Tax Consultant in Kolkata | Tax & GST Filing Near You | Income N Filing";
const description = "Tax consultant in Kolkata for income tax, GST, TDS, company and LLP filings. Office in Kasba, fixed fee in writing, made by one and checked by another. Since 2017.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: path, title: "Tax consultant in Kolkata", description },
};

const faqs = [
  ["Where is your office?", "Our head office is in Kasba, Kolkata: Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kolkata, West Bengal 700039. We are open Monday to Saturday, 10:00 to 19:00 IST."],
  ["What does a tax consultant do for me?", "We prepare and file your income tax return, GST registration and returns, TDS returns and company or LLP filings, and we reply to notices. We also tell you what is due and when."],
  ["How do you charge?", "The fee is fixed in writing before we start. Government charges are separate. Prices for standard services are on our pricing pages."],
  ["Do I need to visit the office?", "No. Most of the work is done by phone, WhatsApp and shared folders. You can visit the Kasba office if you prefer."],
  ["How is my work checked?", "Every file is prepared by one person and checked by another, before and after filing."],
  ["Do you work with clients outside Kolkata?", "Yes. We serve clients across India online."],
];

export default function Page() {
  return (
    <CityLanding
      path={path}
      name="Tax Consultant in Kolkata"
      description={description}
      eyebrow="Kasba, Kolkata · Since 2017"
      h1="Tax consultant in Kolkata"
      lead="Income tax, GST, TDS and company filings from a Kolkata office. Fees fixed in writing. Every file made by one person and checked by another."
      problems={[
        { q: "Unsure what is due?", a: "We list your filings and dates." },
        { q: "Need GST registered?", a: "We prepare and track the application." },
        { q: "Missed a filing?", a: "We check the options and fees." },
        { q: "Want one team?", a: "Tax, GST and ROC under one roof." },
      ]}
      tilesTitle="What we handle"
      tiles={[
        ["Income tax", "Returns for individuals, investors, traders, firms and LLPs, plus notice replies."],
        ["GST", "Registration, monthly or quarterly returns, amendments and notices."],
        ["TDS and bookkeeping", "TDS returns, monthly books and simple profit reports."],
        ["Company and LLP", "Registration and yearly ROC filings."],
      ]}
      steps={[
        "Call, WhatsApp or book a 20-minute call and tell us what you need.",
        "We confirm the scope, documents and fee in writing.",
        "One person prepares the work. A second person checks it.",
        "You approve. We file and send you the acknowledgement.",
      ]}
      priceNote="Salaried income tax returns start from ₹799 + 18% GST. GST and company prices are on their own pages."
      faqs={faqs}
      formTitle="Talk to a tax consultant"
      source="tax-consultant-kolkata"
      serviceOptions={["Income tax return", "GST registration", "GST returns", "TDS", "Company or LLP", "Notice reply", "Not sure"]}
    />
  );
}
