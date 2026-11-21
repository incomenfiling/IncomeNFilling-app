// Blog posts. Add a new object at the TOP of the array to publish. The blog index and sitemap switch on automatically
// once at least one post exists. `body` is an ordered list of blocks:
//   { h2: "Heading" } | { p: "Paragraph" } | { ul: ["item", "item"] } | { faq: [{ q, a }] }
//   { takeaways: ["4-5 short facts"] }  (put first)  |  { table: { caption, head: [..], rows: [[..],[..]] } }
//   { sources: [{ name: "Income Tax Department", url: "https://..." }] }  (put before the FAQ; official sites only)
// Keep facts general (no fixed prices/deadlines that change by year) and add `updated` when revising.
export const POSTS = [
{
  slug: "west-bengal-professional-tax-new-slabs-october-2026",
  title: "West Bengal Professional Tax: New Slabs From 1 October 2026",
  metaTitle: "West Bengal Professional Tax New Slabs 2026 | Income N Filing",
  description: "West Bengal now exempts salaries up to ₹20,000 a month from professional tax. New slabs, flat ₹2,500 categories, due dates and employer checks.",
  date: "2026-11-20",
  updated: "2026-11-20",
  body: [
    { takeaways: [
      "From 1 October 2026, employees earning up to ₹20,000 a month pay no professional tax in West Bengal. The old limit was ₹10,000.",
      "Above that, the monthly tax is ₹100, ₹140, ₹170 or ₹208, depending on the salary band. The most anyone pays on salary is ₹2,496 a year.",
      "A flat ₹2,500 a year applies to a listed set of businesses and professions, including companies, directors and several consulting and digital professions.",
      "Self-employed people and traders move to income and turnover bands from the financial year starting 1 April 2027.",
      "Registered employers pay by the 21st of the following month. Late payment carries interest of 1% for each month or part of a month."
    ] },
    { p: "If you run payroll in Kolkata, your October salary was the first one under a new professional tax table. West Bengal replaced its schedule from 1 October 2026, the first full rewrite since 2014. Many pages that still rank on Google show the old ₹110 to ₹200 slabs, so check the date on whatever you are reading." },
    { p: "This guide covers what changed, who it affects, and what an employer should look at this month." },
    { h2: "What are the new professional tax slabs for salaried employees?" },
    { p: "From 1 October 2026, an employee earning up to ₹20,000 a month pays no professional tax in West Bengal. Above that, the tax is ₹100, ₹140, ₹170 or ₹208 a month, depending on the band. Before this, the exemption stopped at ₹10,000." },
    { table: { caption: "Professional tax on monthly salary, West Bengal", head: ["Monthly salary", "Until September 2026", "From October 2026"], rows: [
      ["Up to ₹10,000", "Nil", "Nil"],
      ["₹10,001 to ₹15,000", "₹110", "Nil"],
      ["₹15,001 to ₹20,000", "₹130", "Nil"],
      ["₹20,001 to ₹25,000", "₹130", "₹100"],
      ["₹25,001 to ₹30,000", "₹150", "₹100"],
      ["₹30,001 to ₹40,000", "₹150", "₹140"],
      ["₹40,001 to ₹50,000", "₹200", "₹140"],
      ["₹50,001 to ₹1,00,000", "₹200", "₹170"],
      ["Above ₹1,00,000", "₹200", "₹208"]
    ] } },
    { p: "Two quick examples of the arithmetic. An employee on ₹45,000 a month paid ₹200 before and pays ₹140 now, ₹60 less each month. An employee on ₹1,50,000 pays ₹208 now, ₹8 more than before. These are our own calculations from the table above." },
    { p: "Salary for September 2026 and earlier months stays on the old table." },
    { h2: "Who pays a flat ₹2,500 a year?" },
    { p: "Some categories pay ₹2,500 a year whatever their income or turnover. The new schedule lists 25 of them, and the list now names several consulting and digital professions along with older entries such as companies and directors. From the schedule, as we read it:" },
    { ul: [
      "Companies registered under the Companies Act, and their directors (other than government nominees).",
      "Banks, factories, jute and rice mills, chit fund operators, licensed money lenders.",
      "Hospitals, nursing homes, diagnostic centres and IVF centres.",
      "Air-conditioned restaurants, hotels, gyms and beauty parlours.",
      "Management, financial, strategy, IT, marketing, sales and HR consultants.",
      "Independent professionals in areas like cloud computing, data science, cyber security, UI/UX design and product management.",
      "Online educators, EdTech founders and digital marketing agency owners.",
      "Production houses that make content for films, advertisements, OTT and television."
    ] },
    { p: "If a person falls under more than one entry, the higher rate applies. The entries are worded at length, so read the exact entry before you assume it does or does not cover you." },
    { h2: "What changes for self-employed people and traders?" },
    { p: "The income and turnover bands for self-employed professionals and traders start from the financial year beginning 1 April 2027, not from 1 October 2026. Anyone in the flat ₹2,500 list pays that amount instead of the band rate." },
    { table: { caption: "Individuals in a profession, by annual gross income", head: ["Annual gross income", "Tax per year"], rows: [
      ["Up to ₹2,50,000", "Nil"],
      ["₹2,50,001 to ₹5,00,000", "₹1,000"],
      ["₹5,00,001 to ₹10,00,000", "₹2,000"],
      ["Above ₹10,00,000", "₹2,500"]
    ] } },
    { table: { caption: "Traders and service providers, by annual gross turnover", head: ["Annual gross turnover", "Tax per year"], rows: [
      ["Up to ₹10,00,000", "Nil"],
      ["₹10,00,001 to ₹20,00,000", "₹1,000"],
      ["₹20,00,001 to ₹40,00,000", "₹1,500"],
      ["Above ₹40,00,000", "₹2,500"]
    ] } },
    { p: "The bands use the previous year's income or turnover from West Bengal. For a firm or company, all its branches in the state are added together, and each branch pays at the same rate." },
    { h2: "When is professional tax due, and what happens if you pay late?" },
    { p: "A registered employer pays the tax by the 21st of the month after the salary is paid, through the state's GRIPS payment system. Late payment attracts simple interest of 1% for each month or part of a month." },
    { table: { caption: "Who pays, and when", head: ["Who", "What to do", "When"], rows: [
      ["Registered employer", "Deduct from salary, pay through GRIPS", "By the 21st of the following month"],
      ["Registered employer", "File the annual return", "The department's FAQ says April, for the previous year. Check the portal for the current date."],
      ["Enrolled person (self-employed, company)", "Pay the year's tax", "On or before 31 July of that year (Section 8(2) of the Act)"],
      ["Anyone newly liable", "Apply for registration or enrolment", "Within 90 days of becoming liable (Section 5)"]
    ] } },
    { p: "So tax on October's salary is due on 21 November, and November's is due on 21 December." },
    { p: "The Act also allows a penalty of up to 50% of the tax if you do not pay after a demand notice (Section 10), and a late fee for returns. The department's FAQ mentions ₹200 for the first month and ₹100 for each month after. Amounts can change, so confirm on the portal before you pay." },
    { h2: "What should an employer check this month?" },
    { p: "Check that your payroll uses the new table, that nobody earning ₹20,000 or less is still being charged, and that your registration and enrolment are both in place." },
    { ul: [
      "Update the professional tax table in your payroll software. If it still shows the ₹110 to ₹200 slabs, October's deductions may be wrong.",
      "Look at every employee near a band edge, such as ₹20,000, ₹30,000 and ₹50,000. A rupee over a limit moves the whole amount.",
      "If October was deducted on the old table, check on the portal how to correct it before the next payment.",
      "An employer who is also liable as a person needs a Certificate of Enrolment before the system will issue the Certificate of Registration. A company with staff in Kolkata usually needs both.",
      "Keep every GRIPS challan with the month it belongs to."
    ] },
    { h2: "How we help at Income N Filing" },
    { p: "We check whether your business needs registration, enrolment or both, set up the payments, and flag where your payroll table is out of date. One person prepares the work and another checks it before submission. We confirm the scope and fee in writing first, and government charges are separate. Our office is in Kasba, Kolkata." },
    { h2: "How we checked this" },
    { p: "Rates come from the West Bengal notifications: the draft schedule (No. 1407-F.T., 18 August 2026) and the final one (No. 1607-F.T., 16 September 2026). We could not find the final Gazette copy on the department websites on 20 November 2026. The rates we have match the official draft and the summaries published by several practitioners. Due dates, interest and registration rules come from the Act and the department's FAQ. This is general information, so confirm the current position on the portal before you act." },
    { sources: [
      { name: "West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979 (Finance Department)", url: "https://finance.wb.gov.in/writereaddata/PT_Act.pdf" },
      { name: "Directorate of Commercial Taxes, Profession Tax FAQs", url: "https://egov.wbcomtax.gov.in/PT_Registration/uploads/FAQs-ptax.pdf" },
      { name: "Profession Tax Rules, Directorate of Commercial Taxes", url: "https://comtax.wb.gov.in/Act_Rule_Schedule_Form/PT_Rule.pdf" },
      { name: "Previous schedule, in force until 30 September 2026", url: "https://comtax.wb.gov.in/Ptax-Schedule-New_(w.e.f._1-4-2014).pdf" }
    ] },
    { faq: [
      { q: "Do I pay professional tax if my salary is ₹18,000 a month?", a: "No, not from October 2026. Salary up to ₹20,000 a month is exempt. Earlier months were taxed at ₹130 on this salary." },
      { q: "Is professional tax compulsory for freelancers in Kolkata?", a: "It depends on the work you do. Independent digital professionals, such as software, data science or UI/UX work, appear in the flat ₹2,500 list. Other individuals in a profession move to income bands from 1 April 2027. Read the exact entry for your work." },
      { q: "Can professional tax be more than ₹2,500 a year?", a: "No. The constitutional ceiling is ₹2,500 a year. The top salary slab of ₹208 a month comes to ₹2,496." },
      { q: "Does a company with no employees pay professional tax?", a: "Companies registered under the Companies Act appear in the flat ₹2,500 list, and the entry does not depend on income or turnover. Confirm enrolment and the payment date on the portal." },
      { q: "How long do I have to register after becoming liable?", a: "Ninety days from the date you become liable, under Section 5 of the Act. Missing it can lead to a penalty." },
      { q: "What about salary for September 2026 and earlier?", a: "Those months stay on the old slabs. Only salary from October 2026 onward uses the new table." }
    ] }
  ],
},
{
  slug: "gst-rule-14a-simplified-registration-explained",
  title: "GST Rule 14A: 3-Day Simplified Registration Explained",
    metaTitle: "GST Rule 14A: 3-Day Registration Explained | Income N Filing",
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
    metaTitle: "Missed ITR Deadline? File a Belated Return | Income N Filing",
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
