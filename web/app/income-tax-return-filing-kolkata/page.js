import { CityLanding } from "@/components/landing/CityLanding";

const path = "/income-tax-return-filing-kolkata";
const title = "ITR Filing in Kolkata from ₹799 + GST | Income N Filing";
const description = "ITR filing in Kolkata for salaried people, investors, traders and small businesses. Fixed fee in writing, made by one and checked by another. Office in Kasba.";

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: path, title: "Income tax return filing in Kolkata", description },
};

const faqs = [
  ["Who must file an income tax return?", "Anyone whose income is above the basic exemption limit for their regime must file. Some people must file even with lower income, for example to claim a refund, to report foreign assets or because of high bank deposits. Tell us your situation and we confirm it before we start."],
  ["Which ITR form applies to me?", "ITR-1 is for most salaried people with simple income. ITR-2 is for capital gains and investors. ITR-3 is for business income and traders. ITR-4 is for presumptive income under the small-business and professional schemes. ITR-5 is for firms and LLPs. We choose the form after we look at your income sources."],
  ["What documents do I need?", "PAN, Aadhaar, Form 16 if you are salaried, bank statements or interest certificates, investment and deduction proofs, and broker or capital gain reports if you trade. We check your AIS and 26AS against what you send."],
  ["Old regime or new regime?", "It depends on your deductions and income. Our Tax Optimization Pack compares both for your numbers before you choose."],
  ["I missed the due date. Can I still file?", "In many cases a belated or revised return is still possible, with a late fee and interest where they apply. Message us with the assessment year and we tell you the options."],
  ["Do you also handle income tax notices?", "Yes. We read the notice, check it against your records and prepare the reply. Fees for notices are quoted in writing after we see the papers."],
  ["Do I have to come to your Kolkata office?", "No. Most work is done by phone, WhatsApp and shared folders. You are welcome to visit our office in Kasba, Monday to Saturday, 10:00 to 19:00 IST."],
];

export default function Page() {
  return (
    <CityLanding
      path={path}
      name="Income Tax Return Filing in Kolkata"
      description={description}
      eyebrow="Income tax · Kolkata"
      h1="Income tax return filing in Kolkata"
      lead="For salaried people, investors, traders and small businesses. Your return is prepared by one person and checked by another, before and after filing."
      problems={[
        { q: "Not sure which ITR?", a: "We pick the right form from your income." },
        { q: "Form 16 and AIS differ?", a: "We cross-check them before filing." },
        { q: "Old or new regime?", a: "We compare both on your numbers." },
        { q: "Got a notice?", a: "We read it and prepare the reply." },
      ]}
      tilesTitle="Returns we file"
      tiles={[
        ["ITR-1, salaried", "Salary, pension, one house property and bank interest."],
        ["ITR-2, investors", "Capital gains, mutual funds, shares, crypto and foreign assets."],
        ["ITR-3 and ITR-4", "Business, professional and presumptive income, with books if you need them."],
        ["Firms and LLPs", "ITR-5 for partnership firms and LLPs with ready statements."],
      ]}
      steps={[
        "Book a call or send your details. We confirm the form, documents and fee in writing.",
        "You share documents on WhatsApp or a shared folder.",
        "One person prepares the return. A second person checks it.",
        "You approve the figures. We file and e-verify.",
      ]}
      priceNote="Salaried returns start from ₹799 + 18% GST (₹943 in total). Capital gains, business and firm returns are priced by plan."
      faqs={faqs}
      formTitle="Get your ITR quote"
      source="itr-kolkata"
      serviceOptions={["ITR for salary", "ITR with capital gains", "ITR for business or trading", "ITR for a firm or LLP", "Belated or revised return", "Income tax notice", "Not sure"]}
    />
  );
}
