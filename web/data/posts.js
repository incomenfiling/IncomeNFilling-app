// Blog posts. Add a new object at the TOP of the array to publish. The blog index and sitemap switch on automatically
// once at least one post exists. `body` is an ordered list of blocks:
//   { h2: "Heading" } | { p: "Paragraph" } | { ul: ["item", "item"] } | { faq: [{ q, a }] }
// Keep facts general (no fixed prices/deadlines that change by year) and add `updated` when revising.
export const POSTS = [
{
  slug: "gst-rule-14a-simplified-registration-explained",
  title: "GST Rule 14A: 3-Day Simplified Registration Explained",
  description: "Rule 14A lets small taxpayers get GST registration within three working days after Aadhaar authentication. Who qualifies, who should not opt in, and what to keep ready.",
  date: "2026-11-20",
  updated: "2026-11-20",
  service: "gst-registration",
  body: [
    { p: "Since 1 November 2025, small taxpayers can choose a simplified GST registration route under Rule 14A of the CGST Rules, 2017. If you qualify, registration is granted electronically within three working days of the application reference number (ARN), after successful Aadhaar authentication. It is optional, and not every business should choose it." },
    { h2: "Who can use Rule 14A?" },
    { ul: [
      "Your monthly output tax liability on supplies to registered persons (B2B) must not exceed ₹2.5 lakh, counting CGST, SGST or UTGST, IGST and cess together.",
      "You must complete Aadhaar authentication for the primary authorised signatory and at least one promoter or partner.",
      "Your application must pass the portal's risk checks. If it is flagged, it can go to an officer and take longer.",
      "The scheme is optional. You can still apply through the regular route."
    ] },
    { h2: "Does the ₹2.5 lakh limit apply to turnover?" },
    { p: "No. The limit applies to your expected monthly output tax on B2B supplies, not to your total turnover. A business with large turnover but mostly sales to consumers can still be within the limit. Check your own numbers carefully before you choose this route." },
    { h2: "When should you not opt for Rule 14A?" },
    { ul: [
      "If your monthly B2B output tax is likely to cross ₹2.5 lakh.",
      "If your Aadhaar-linked mobile number is not active, because the three working days cannot start without OTP authentication.",
      "If your PAN, Aadhaar or business details do not match, because the application can be rejected or delayed."
    ] },
    { h2: "What if my business grows?" },
    { p: "If your tax liability goes above the limit, you must move out of the scheme. You can also withdraw from it, but only after meeting the conditions, including filing the returns that are due. We explain these before you opt in." },
    { h2: "What it is not" },
    { p: "Rule 14A is not the composition scheme and it does not lower your tax rate. It only changes how quickly and how simply the registration is granted." },
    { h2: "What to keep ready" },
    { ul: [
      "PAN of the business and of the proprietor, partners or directors.",
      "Aadhaar of the authorised signatory and promoters, with the mobile number linked for OTP.",
      "Proof of the business address and a bank account.",
      "A realistic estimate of your monthly B2B output tax."
    ] },
    { h2: "How we help at Income N Filing" },
    { p: "We check whether you qualify, tell you before we opt you in, and prepare the application. One person prepares it and another checks it before submission. We confirm the scope and fee in writing first, and government charges, if any, are separate. Our office is in Kasba, Kolkata, and we register businesses across India." },
    { faq: [
      { q: "How long does GST registration take under Rule 14A?", a: "Registration is to be granted electronically within three working days of the ARN, after successful Aadhaar authentication, if the application clears the portal's checks." },
      { q: "Is Rule 14A compulsory?", a: "No. It is an optional route. You can apply through the regular process instead." },
      { q: "What if I do not qualify?", a: "Your application goes through the regular route. That can take longer and may involve queries from the officer." }
    ] }
  ],
},
{
  slug: "income-tax-notice-received-what-to-do-first",
  title: "Income Tax Notice Received? What to Do First",
  description: "Got a notice from the Income Tax Department? Steps to verify it, find out which section it is under, and reply on the e-filing portal before the date in the notice.",
  date: "2026-11-20",
  updated: "2026-11-20",
  service: "income-tax-notice-handling",
  body: [
    { p: "An income tax notice is not always a sign of trouble. Many are routine, such as an intimation after your return is processed. Whatever it is, do not ignore it. Each notice states what the department wants and by when." },
    { h2: "Step 1: Read it fully" },
    { p: "Note the section, the assessment year, what is being asked, and the date by which you must reply. Keep the original and any attachments." },
    { h2: "Step 2: Check that it is genuine" },
    { p: "Log in to the income tax e-filing portal and look under Pending Actions and then e-Proceedings. You can also use the option to authenticate a notice or order, using the Document Identification Number (DIN) printed on it. If the notice does not appear on your account or the DIN does not match, be careful before you reply or pay." },
    { h2: "Step 3: Find out what kind of notice it is" },
    { ul: [
      "Section 143(1): an intimation after your return is processed. It may show a refund, a demand, or a difference from your return.",
      "Section 142(1): the officer is asking for information or documents before assessment.",
      "Section 143(2): your return has been selected for scrutiny and needs a detailed reply with records.",
      "Section 148: a notice that the department believes income may have escaped assessment.",
      "Section 156: a notice of demand asking you to pay tax."
    ] },
    { h2: "Step 4: Gather your records" },
    { ul: [
      "A copy of the return you filed and its acknowledgement.",
      "Form 26AS, AIS and TIS for the year.",
      "Bank statements, invoices and proofs for the points raised.",
      "Previous correspondence on the same matter."
    ] },
    { h2: "Step 5: Reply on the portal before the date" },
    { p: "Most replies are submitted through e-Proceedings on the portal. Explain your position clearly, attach supporting documents, and keep the acknowledgement. If you agree with the department, say so; if you disagree, give reasons with proof." },
    { h2: "What happens if you do not reply?" },
    { p: "Ignoring a notice can lead to an assessment made without your input, and for some notices a separate penalty can apply for not complying. The consequences depend on the section, which is why the date and the section matter." },
    { h2: "What we do at Income N Filing" },
    { p: "We read the notice, check it against your return and records, and tell you in writing what is being asked and what we need from you. One person prepares the reply and another checks it before it is submitted. No one can promise the outcome of a notice, because it depends on the facts and the department's view. We are in Kasba, Kolkata, and we reply to notices for clients across India." },
    { faq: [
      { q: "Should I pay the demand straight away?", a: "Not before you have understood it. Check whether the demand is correct against your return and records. If it is wrong, reply with proof. If it is right, pay by the date stated." },
      { q: "Can I reply without visiting an office?", a: "Yes. Most replies are submitted online through e-Proceedings on the e-filing portal." },
      { q: "How much time do I have to reply?", a: "Each notice states its own date. Follow the date written in your notice." }
    ] }
  ],
},
{
  slug: "missed-itr-deadline-belated-return-31-december-2026",
  title: "Missed the ITR Deadline? File a Belated Return by 31 Dec 2026",
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
];

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]));
