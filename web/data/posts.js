// Blog posts. Add a new object at the TOP of the array to publish. The blog index and sitemap switch on automatically
// once at least one post exists. `body` is an ordered list of blocks:
//   { h2: "Heading" } | { p: "Paragraph" } | { ul: ["item", "item"] } | { faq: [{ q, a }] }
// Keep facts general (no fixed prices/deadlines that change by year) and add `updated` when revising.
export const POSTS = [
{
  slug: "missed-itr-deadline-belated-return-31-december-2026",
  title: "Missed the ITR Deadline? File a Belated Return Before 31 December 2026",
  description: "Missed the due date for AY 2026-27? You can still file a belated return until 31 December 2026. What it costs, what you lose, and how to file in Kolkata.",
  date: "2026-11-18",
  updated: "2026-11-18",
  service: "belated-revised-itr-filing",
  body: [
    { p: "If you have not filed your income tax return for AY 2026-27 (income earned in FY 2025-26), the original due dates have passed. The good news is that you can still file a belated return, but only until 31 December 2026 (or until assessment is completed, if that happens earlier). After that, the window closes." },
    { h2: "What is a belated return?" },
    { p: "A belated return is a return filed after the original due date, under Section 139(4) of the Income-tax Act. It uses the same portal and the same ITR forms as a regular return. The difference is the cost and a few benefits you can lose." },
    { h2: "What does it cost?" },
    { ul: [
      "A late filing fee under Section 234F: ₹5,000, or ₹1,000 if your total income is ₹5 lakh or less.",
      "Interest at 1% per month on any tax you still owe, under Section 234A.",
      "The fee and interest are payable before you file, through the e-filing portal."
    ] },
    { h2: "What can you lose by filing late?" },
    { ul: [
      "Some losses may not be carried forward to later years.",
      "Refund can take longer, and interest on a refund may be affected.",
      "Waiting for the last week is risky: portal issues, missing documents or payment failures can push you past the date."
    ] },
    { h2: "What about a revised return?" },
    { p: "If you filed on time but made a mistake, you can file a revised return. A revised return for AY 2026-27 is governed by Section 139(5) of the Income-tax Act, 1961, and a belated return can also be revised. Check the last date for revision on the Income Tax portal before you rely on it." },
    { h2: "What to keep ready" },
    { ul: [
      "PAN and Aadhaar, and your bank account details.",
      "Form 16 (if salaried), Form 26AS and AIS.",
      "Interest certificates, capital gains statements and rent or home loan details.",
      "Details of any advance tax or self-assessment tax already paid."
    ] },
    { h2: "How we handle it at Income N Filing" },
    { p: "Every file is prepared by one person and verified by another, before and after filing. We confirm the scope and fee in writing before we start, and you can see progress as it happens. Our office is in Kasba, Kolkata, and we file for clients across India." },
    { faq: [
      { q: "What is the last date for a belated ITR for AY 2026-27?", a: "31 December 2026, or before assessment is completed, whichever is earlier, as per the Income Tax Department." },
      { q: "Is there a penalty for filing late?", a: "Yes. A fee under Section 234F of ₹5,000, or ₹1,000 if total income is ₹5 lakh or less, plus 1% monthly interest on unpaid tax." },
      { q: "Can I still file after 31 December 2026?", a: "The belated return window closes then. An updated return (ITR-U) may be possible in some cases, subject to its own conditions, so speak to a tax professional before you decide." }
    ] }
  ],
},
  // {
  //   slug: "what-to-do-on-getting-income-tax-notice",
  //   title: "Income Tax Notice Received? What to Do First",
  //   description: "Plain-language steps to read, verify and reply to an income tax notice.",
  //   date: "2026-11-20",
  //   updated: "2026-11-20",
  //   service: "income-tax-notice-handling",
  //   body: [{ p: "..." }, { h2: "..." }, { ul: ["..."] }],
  // },
];

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]));
