// Blog posts. Add a new object at the TOP of the array to publish. The blog index and sitemap switch on automatically
// once at least one post exists. `body` is an ordered list of blocks:
//   { h2: "Heading" } | { p: "Paragraph" } | { ul: ["item", "item"] } | { faq: [{ q, a }] }
//   { takeaways: ["4-5 short facts"] }  (put first)  |  { table: { caption, head: [..], rows: [[..],[..]] } }
//   { sources: [{ name: "Income Tax Department", url: "https://..." }] }  (put before the FAQ; official sites only)
// Keep facts general (no fixed prices/deadlines that change by year) and add `updated` when revising.
export const POSTS = [
{
  slug: "gst-late-fee-and-interest-gstr-3b-gstr-1-explained",
  title: "GST Late Fee and Interest for GSTR-3B and GSTR-1: How Much, and How to Limit It",
  metaTitle: "GST Late Fee Calculator Rules: GSTR-3B, GSTR-1 | Income N Filing",
  description: "GST late fee is ₹50 a day (₹20 for nil returns), with a cap by turnover, plus 18% interest on late tax. See the table, an example and how to limit it.",
  date: "2026-11-23",
  updated: "2026-11-23",
  service: "late-gst-return-filing",
  body: [
    { takeaways: [
      "A late GSTR-3B or GSTR-1 costs ₹50 a day (₹25 CGST plus ₹25 SGST). A nil return costs ₹20 a day (₹10 plus ₹10).",
      "Each return has a maximum: ₹500 for a nil return, then ₹2,000, ₹5,000 or ₹10,000 by turnover.",
      "Interest is separate. It is 18% a year on tax paid late in GSTR-3B. GSTR-1 has a late fee but no interest.",
      "The late fee applies even when you owe no tax, so file a nil return on time.",
      "A waiver exists only when the government notifies one for a period."
    ] },
    { p: "If you missed a GST return, two charges can build up: a late fee that runs every day, and interest on any tax you paid late. They are separate, and both are payable. This guide shows the rates, an example, and what to do first." },
    { h2: "What is the late fee for GSTR-3B and GSTR-1?" },
    { p: "The late fee is ₹50 a day when the return has tax or sales, split as ₹25 CGST and ₹25 SGST. For a nil return it is ₹20 a day, split as ₹10 and ₹10. The fee stops when you file, up to the maximum for that return." },
    { table: { caption: "Late fee per return", head: ["Case", "Per day", "Maximum per return"], rows: [
      ["Nil return", "₹20 (₹10 + ₹10)", "₹500"],
      ["Turnover up to ₹1.5 crore", "₹50 (₹25 + ₹25)", "₹2,000"],
      ["₹1.5 crore to ₹5 crore", "₹50 (₹25 + ₹25)", "₹5,000"],
      ["Above ₹5 crore", "₹50 (₹25 + ₹25)", "₹10,000"]
    ] } },
    { p: "Example from our own arithmetic: a business with turnover under ₹1.5 crore files a GSTR-3B with tax 12 days late. The late fee is 12 × ₹50 = ₹600, below the ₹2,000 maximum. Interest is charged on top." },
    { h2: "How is GST interest calculated?" },
    { p: "Interest is 18% a year on the tax paid late in GSTR-3B, counted for the number of days the tax was late. It applies only to the unpaid tax, not to the late fee. GSTR-1 reports sales and carries no tax payment, so it has a late fee and no interest." },
    { h2: "Do I pay a late fee if I owe no tax?" },
    { p: "Yes. A nil GSTR-3B filed after the due date still attracts the nil-return late fee of ₹20 a day, up to ₹500. This surprises many small businesses, so file the nil return on time." },
    { h2: "Can the GST late fee be waived?" },
    { p: "Only when the government notifies a waiver or amnesty scheme for a period. Check the GST portal notifications before you assume one applies to your returns." },
    { h2: "What should you do if several returns are pending?" },
    { ul: [
      "List every pending period and its due date before you file anything.",
      "File the older periods first, in order, and pay the tax early to keep the interest down.",
      "Check whether the pending return is a nil return, since the fee is lower.",
      "Keep the acknowledgement for each return.",
      "If a notice has arrived, read it before you reply and check the dates it names."
    ] },
    { h2: "How we help at Income N Filing" },
    { p: "We list your pending returns, tell you the late fee and interest for each, and file them in order. One person prepares the work and another checks it. The fee is fixed in writing before we start, and government charges are separate. You can also use our GST late fee calculator for an estimate." },
    { h2: "How we checked this" },
    { p: "Rates and caps match the figures on our GST late fee calculator, last checked in November 2026. Confirm the current position on the GST portal before you pay. This is general information and not advice for your case." },
    { sources: [
      { name: "GST Portal", url: "https://www.gst.gov.in" },
      { name: "CBIC", url: "https://www.cbic.gov.in" }
    ] },
    { faq: [
      { q: "What is the late fee for a nil GSTR-3B?", a: "₹20 a day, split as ₹10 CGST and ₹10 SGST, up to a maximum of ₹500." },
      { q: "What is the maximum late fee for a regular return?", a: "₹2,000 up to ₹1.5 crore turnover, ₹5,000 from ₹1.5 crore to ₹5 crore, and ₹10,000 above ₹5 crore." },
      { q: "Is interest charged on GSTR-1?", a: "No. GSTR-1 carries a late fee but no interest, because the tax is paid through GSTR-3B." },
      { q: "Is the interest rate 18% for every case?", a: "18% a year is the general rate on tax paid late in GSTR-3B. Some cases have their own rule, so confirm yours." },
      { q: "Do late fee and interest both apply?", a: "Yes. They are separate and both are payable." },
      { q: "Can I use a calculator for this?", a: "Yes. Our GST late fee calculator gives an estimate from your due date and filing date." }
    ] }
  ],
},
{
  slug: "tds-rate-chart-fy-2026-27-income-tax-act-2025",
  title: "TDS Rate Chart FY 2026-27: Sections, Rates and Limits Under the Income-tax Act, 2025",
  metaTitle: "TDS Rate Chart FY 2026-27 | Sections 392, 393 | Income N Filing",
  description: "TDS rates and limits for FY 2026-27 with the old and new section numbers: contractors, rent, professional fees, commission, interest and more.",
  date: "2026-11-23",
  updated: "2026-11-23",
  service: "tds-return-filing",
  body: [
    { takeaways: [
      "From 1 April 2026, the Income-tax Act, 2025 applies. Section 392 covers TDS on salary, section 393 covers TDS on other payments, and section 394 covers TCS.",
      "Common rates are 10% on professional fees and rent of land or building, 2% on contractors (other than individuals and HUF) and commission, and 1% on contractors who are individuals or HUF.",
      "Limits apply per payee and per year, so track each person separately.",
      "TDS is deposited by the 7th of the next month. For March, the date is 30 April.",
      "A higher rate generally applies when the PAN is missing or invalid."
    ] },
    { p: "TDS rules moved to new section numbers from 1 April 2026. Your books, your TDS software and your return forms may still show the old sections, so this guide puts both side by side for the payments most businesses make." },
    { h2: "Which TDS rates apply in FY 2026-27?" },
    { table: { caption: "Common TDS rates and limits, FY 2026-27", head: ["Payment", "Old section", "New section", "Rate", "Limit"], rows: [
      ["Salary", "192", "392", "Slab rates", "Basic exemption limit"],
      ["Interest from a bank or post office", "194A", "393(1)", "10%", "₹50,000 a year (₹1,00,000 for senior citizens)"],
      ["Interest from others", "194A", "393(1)", "10%", "₹10,000 a year"],
      ["Contractors: individual or HUF", "194C", "393(1)", "1%", "₹30,000 single, ₹1,00,000 a year"],
      ["Contractors: others", "194C", "393(1)", "2%", "₹30,000 single, ₹1,00,000 a year"],
      ["Commission or brokerage", "194H", "393(1)", "2%", "₹20,000 a year"],
      ["Rent: plant and machinery", "194I", "393(1)", "2%", "₹6,00,000 a year"],
      ["Rent: land, building, furniture", "194I", "393(1)", "10%", "₹6,00,000 a year"],
      ["Professional fees", "194J", "393(1)", "10%", "₹50,000 a year"],
      ["Technical services, call centre", "194J", "393(1)", "2%", "₹50,000 a year"],
      ["Purchase of immovable property", "194IA", "393(1)", "1%", "₹50 lakh and above"],
      ["Rent paid by individual or HUF not covered above", "194IB", "393(1)", "2%", "Rent above ₹50,000 a month"],
      ["Purchase of goods", "194Q", "393(1)", "0.1%", "Above ₹50 lakh a year with the same seller"],
      ["Payment to partner (salary, interest, bonus)", "194T", "393(3)", "10%", "₹20,000 a year"]
    ] } },
    { p: "This table covers the payments most businesses meet. It is not every case, so check your payment before you deduct." },
    { h2: "What changed with the Income-tax Act, 2025?" },
    { p: "The Act mainly renumbers and regroups the sections into tables. Payments before 1 April 2026 follow the 1961 Act. The rates and limits above are the ones in force for FY 2026-27." },
    { h2: "When is TDS deposited and which returns report it?" },
    { ul: [
      "Deposit: by the 7th of the next month. For March, by 30 April.",
      "TDS on salary is reported in Form 138, each quarter.",
      "TDS on other payments is reported in Form 140, each quarter."
    ] },
    { h2: "What mistakes do businesses make with TDS?" },
    { ul: [
      "Deducting at the wrong rate because the payee type, such as individual or company, was not checked.",
      "Missing the deposit date of the 7th.",
      "Filing the quarterly return with a wrong PAN, so the payee does not see the credit.",
      "Not deducting once the yearly limit is crossed in the middle of the year."
    ] },
    { h2: "How we help at Income N Filing" },
    { p: "We check the section and rate for each payment, prepare the challans and the quarterly TDS returns, and match them with your books. One person prepares the work and another checks it. The fee is fixed in writing, and government charges are separate. Our TDS rate chart tool carries the same table." },
    { h2: "How we checked this" },
    { p: "The table matches our TDS rate chart tool, last checked in November 2026 against the Income Tax Department's published rates. Confirm a specific case before you deduct. This is general information." },
    { sources: [ { name: "Income Tax Department", url: "https://incometaxindia.gov.in" } ] },
    { faq: [
      { q: "Which law applies to TDS from 1 April 2026?", a: "The Income-tax Act, 2025. Section 392 covers salary, section 393 covers other payments and section 394 covers TCS." },
      { q: "What is the TDS rate on professional fees?", a: "10%, once payments to one person cross ₹50,000 in a year. Technical services and call centre fees are at 2%." },
      { q: "What is the TDS rate on rent?", a: "10% on land, building and furniture, and 2% on plant and machinery, once rent crosses ₹6,00,000 a year." },
      { q: "What if the payee has no PAN?", a: "A higher rate generally applies. Collect the PAN before you pay." },
      { q: "When is TDS deposited?", a: "By the 7th of the next month, and by 30 April for March." },
      { q: "Which forms report TDS now?", a: "Form 138 for salary and Form 140 for other payments, each quarter." }
    ] }
  ],
},
{
  slug: "digital-signature-certificate-dsc-kolkata-class-3-guide",
  title: "Digital Signature Certificate (DSC) in Kolkata: Which One, What You Need, How Long",
  metaTitle: "DSC in Kolkata: Class 3 Guide, Documents | Income N Filing",
  description: "Which DSC do you need? Why Class 3 is the one issued today, signing vs encryption, individual vs organisation, documents to apply, and DGFT.",
  date: "2026-11-23",
  updated: "2026-11-23",
  body: [
    { takeaways: [
      "Class 3 is the digital signature class issued today. Class 2 certificates were discontinued from 1 January 2021.",
      "A signing certificate is enough for GST, income tax and MCA filings. E-tenders usually need signing plus encryption, called a combo.",
      "An organisation certificate carries the company's name as well as yours. Use it when a portal asks you to sign on its behalf.",
      "Validity is commonly one, two or three years, chosen when you apply.",
      "A lost token or a forgotten password means a new certificate has to be applied for."
    ] },
    { p: "A digital signature certificate, or DSC, is the electronic signature you use to file on the GST, MCA and income tax portals, and to bid on e-tenders. This guide explains which one to pick and what to keep ready before you apply." },
    { h2: "Which DSC class do I need?" },
    { p: "Class 3. Class 1 is not used for filings, and Class 2 ended on 1 January 2021. Class 3 is accepted on the MCA, GST, income tax, DGFT and e-tender portals." },
    { table: { caption: "DSC classes", head: ["Class", "Status", "Where it works"], rows: [
      ["Class 1", "Not used for filings", "Basic identity, such as email"],
      ["Class 2", "Discontinued from 1 January 2021", "Replaced by Class 3"],
      ["Class 3", "Issued today", "MCA, GST, income tax, DGFT, ICEGATE, e-tenders"]
    ] } },
    { h2: "Signing, or signing plus encryption?" },
    { p: "Signing is enough for MCA, GST and income tax filings. Government e-tenders usually ask for signing plus encryption, which is sold as a combo. Check what the tender or portal asks for before you apply." },
    { h2: "Individual or organisation certificate?" },
    { p: "An individual certificate carries only your name. An organisation certificate also carries the organisation's name, and is used when the portal asks you to sign on behalf of a company or LLP. Each director or partner who signs needs a certificate in their own name." },
    { h2: "What documents do I need?" },
    { ul: [
      "PAN and Aadhaar of the signer, with the mobile number linked to Aadhaar.",
      "A recent photograph and a working email address.",
      "For an organisation certificate: the organisation's PAN and proof of the signer's link to it.",
      "For DGFT: the IEC and the documents the certifying authority lists."
    ] },
    { p: "The exact list depends on the certificate type, so confirm it before you start." },
    { h2: "How long does a DSC take, and how is it verified?" },
    { p: "Verification is usually done by video call after you upload your documents. The time depends on that verification step. Some certificate types, such as the DGFT type, need extra steps." },
    { h2: "What happens if I lose the token or forget the password?" },
    { p: "A lost token or a forgotten password means a new certificate has to be applied for. Keep the password safe and do not share the token." },
    { h2: "How we help at Income N Filing" },
    { p: "We apply, guide you through the video verification, set up the token on your computer and show you how to sign a PDF. Our DSC price is a final price, with the certificate, a Hype USB token and our fee included, and it is on our pricing page. Our office is in Kasba, Kolkata." },
    { h2: "How we checked this" },
    { p: "The class status and certificate types match our DSC class guide, last checked in November 2026 and based on the Controller of Certifying Authorities. Confirm the current rules before you apply. This is general information." },
    { sources: [ { name: "Controller of Certifying Authorities", url: "https://cca.gov.in" } ] },
    { faq: [
      { q: "Is Class 2 DSC still available?", a: "No. Class 2 certificates were discontinued from 1 January 2021. Class 3 is the class issued today." },
      { q: "Do I need signing or signing plus encryption?", a: "Signing is enough for MCA, GST and income tax. E-tenders usually need signing plus encryption." },
      { q: "How long is a DSC valid?", a: "Commonly one, two or three years, depending on what you choose when you apply." },
      { q: "Can a company director use a personal DSC?", a: "Each director needs a certificate in their own name. Use an organisation certificate where the portal asks you to sign for the company." },
      { q: "Can I get a DSC without visiting an office?", a: "Verification is usually done by video call after you upload your documents. Some types need extra steps." },
      { q: "What if I lose my token?", a: "A new certificate has to be applied for." }
    ] }
  ],
},
{
  slug: "freelancer-in-kolkata-which-taxes-apply-2026-27",
  title: "Freelancer in Kolkata: Which Taxes Apply in 2026-27?",
  metaTitle: "Freelancer Tax in Kolkata 2026-27 | Income N Filing",
  description: "Freelancing from Kolkata? See which taxes apply: income tax, advance tax, GST at ₹20 lakh, TDS, professional tax and the new export form.",
  date: "2026-11-23",
  updated: "2026-11-23",
  body: [
    { takeaways: [
      "There is no separate freelancer tax. Your fees are taxed as business or professional income, and the rules depend on the work you do.",
      "Some professions can declare 50% of receipts as income and skip books, up to ₹50 lakh of receipts (₹75 lakh if cash receipts are 5% or less). The list is closed, and many creative freelancers are not on it.",
      "On that 50% route, advance tax is one payment by 15 March. Everyone else pays in four instalments: 15 June, 15 September, 15 December and 15 March.",
      "GST registration is compulsory only above ₹20 lakh of total turnover in a year, and export receipts count towards that total.",
      "From 1 October 2026, anyone exporting services must declare the exports to their bank on the new Export Declaration Form. The old SOFTEX form is gone."
    ] },
    { p: "Many Kolkata freelancers ask one question first: do I even have to pay tax separately? You do, but it is a short list. This guide goes through each tax, what triggers it, and what to do about it for the 2026-27 financial year." },
    { p: "Law references here use the Income-tax Act, 2025, which applies from 1 April 2026. Most pages you will find online still quote the old section numbers." },
    { h2: "Which taxes can apply to a freelancer?" },
    { p: "Income tax always applies. Advance tax, TDS, GST, the export declaration and professional tax apply only in certain situations, listed below." },
    { table: { caption: "Taxes and filings a freelancer may face", head: ["Tax or filing", "Applies when", "What you do"], rows: [
      ["Income tax", "Always, on net income above the exemption limit", "File ITR-3 or ITR-4 after the year ends"],
      ["Advance tax", "Tax after TDS is ₹10,000 or more for the year", "Pay in instalments, or once by 15 March on the 50% route"],
      ["TDS deducted by clients", "A company or firm pays you professional fees above ₹50,000 in a year", "Check it shows in Form 26AS and AIS, and claim the credit"],
      ["GST", "Total turnover above ₹20 lakh in a year", "Register, charge 18%, file returns"],
      ["Export declaration", "You bill clients outside India (from 1 October 2026)", "Declare to your bank, monthly"],
      ["Professional tax (West Bengal)", "Depends on your work", "See our professional tax guide"]
    ] } },
    { h2: "Can I use the 50% scheme as a freelancer?" },
    { p: "Only if your profession is on the specified list. Under Section 62(4) of the Income-tax Act, 2025, that list is legal, medical, engineering, architectural, accountancy, technical consultancy, interior decoration, information technology and company secretary, plus any profession the Board notifies. Presumptive income is 50% of gross receipts, for receipts up to ₹50 lakh, or ₹75 lakh where cash receipts are 5% or less. Section 58 of the 2025 Act replaces the old Section 44ADA." },
    { p: "An illustration, using our own arithmetic: a software developer in Kolkata bills ₹18,00,000 in a year, all through the bank. Presumptive income is ₹9,00,000. No books of account are needed, and tax is then worked out on that figure at the applicable slab." },
    { p: "If you declare less than 50% and your income is above the basic exemption limit, books and a tax audit come into play. If your work is not on the list, for example some writers, designers and content creators, the 50% relief may not apply to you. The tax department has not settled this for content creation, so check before you choose a route." },
    { h2: "When do I pay advance tax?" },
    { p: "On the 50% route, you pay the whole advance tax once, by 15 March. Under the normal books route you pay in four instalments." },
    { table: { caption: "Advance tax due dates for a freelancer", head: ["Route", "Due dates"], rows: [
      ["50% presumptive route", "100% by 15 March (payment made by 31 March is also treated as advance tax)"],
      ["Normal books route", "15% by 15 June, 45% by 15 September, 75% by 15 December, 100% by 15 March"]
    ] } },
    { p: "If you are on the normal route, the 15 December instalment is close. Missing an instalment leads to interest. Salaried people with freelance income often forget this and pay only when they file." },
    { h2: "Do I need GST registration?" },
    { p: "Not unless your total turnover for the year crosses ₹20 lakh. Notification 10/2017-Integrated Tax exempts service providers below that limit, even when they work for clients in other states. The total counts all clients together and includes export receipts. West Bengal uses the ₹20 lakh limit." },
    { p: "Above ₹20 lakh, you register, charge 18% GST to Indian clients and file returns. Services to clients outside India are exports and zero-rated, and you usually file a Letter of Undertaking (LUT) to export without paying IGST. Some freelancers below the limit register on their own to claim input tax credit. That is a choice, not a rule." },
    { h2: "What about TDS deducted by my clients?" },
    { p: "Companies and firms usually deduct 10% on professional fees (2% on some technical services) once payments to you cross ₹50,000 in the year. Under the 2025 Act this sits in Section 393 instead of the old Section 194J. Individual clients often do not deduct." },
    { p: "Check Form 26AS and AIS every quarter. If a client deducted tax but it does not show there, the credit is at risk when you file." },
    { h2: "New from 1 October 2026: the export declaration" },
    { p: "RBI's new export rules require service exporters to furnish an Export Declaration Form to their bank. One monthly declaration can cover all invoices raised in that month. SOFTEX for software exports is replaced by the same form. Ask your bank how it wants this submitted, since practice differs between banks." },
    { h2: "Professional tax in West Bengal" },
    { p: "Some independent digital professions, such as software, data science and UI/UX, appear in the flat ₹2,500-a-year list. Other individuals in a profession move to income bands from 1 April 2027. Read the exact entry for your work in our West Bengal professional tax guide." },
    { h2: "Mistakes worth avoiding" },
    { ul: [
      "Treating freelancer as a tax category and picking ITR-4 without checking whether your work is on the list.",
      "Counting only Indian clients when checking the ₹20 lakh GST limit.",
      "Ignoring advance tax because TDS is already cut.",
      "Not matching Form 26AS and AIS with your invoices before filing.",
      "Receiving foreign payments without a record of the invoice, the purpose and the bank declaration."
    ] },
    { h2: "Documents to keep ready" },
    { ul: [
      "PAN and Aadhaar.",
      "Invoices and bank statements.",
      "Form 26AS and AIS.",
      "Foreign remittance advice, such as a FIRC or bank credit advice.",
      "Expense bills, if you are on the books route.",
      "GST login, if you are registered."
    ] },
    { h2: "How we help at Income N Filing" },
    { p: "We check which route fits your work, estimate advance tax, file ITR-3 or ITR-4, and register you for GST when you cross the limit. One person prepares the work and another checks it before submission. We confirm the scope and fee in writing first, and government charges are separate. Our office is in Kasba, Kolkata." },
    { h2: "How we checked this" },
    { p: "Specified professions come from Section 62(4) of the Income-tax Act, 2025. Advance tax dates come from Section 408 and the department's advance tax FAQ. TDS thresholds come from Section 393 as summarised by several practitioners. The GST threshold relies on Notification 10/2017-Integrated Tax. The export declaration comes from RBI's FEMA (Export and Import of Goods and Services) Regulations, 2026. We could not open the official Section 58 page on the department site on 21 November 2026, so the presumptive limits rest on the department's ITR-4 FAQ and published analysis. This is general information, so confirm on the portal before you act." },
    { sources: [
      { name: "Income-tax Act, 2025, Section 62(4): specified professions (text of the Act)", url: "https://future.indiankanoon.org/doc/153095482" },
      { name: "Income Tax Department: FAQ on Advance Tax", url: "https://www.incometaxindia.gov.in/documents/d/guest/faq-on-advance-tax" },
      { name: "Income Tax Department: ITR-4 eligibility (AY 2026-27)", url: "https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/itr-4" },
      { name: "CBIC: Integrated Tax notifications (10/2017)", url: "https://cbic-gst.gov.in/hindi/integrated-tax.html" },
      { name: "RBI: Foreign Exchange Management (Export and Import of Goods and Services) Regulations, 2026", url: "https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=13277" }
    ] },
    { faq: [
      { q: "Do I pay tax if my freelance income is below ₹20 lakh?", a: "Income tax depends on your net income and the exemption limit, not on ₹20 lakh. The ₹20 lakh figure is only the GST registration limit." },
      { q: "Is GST compulsory if I have foreign clients?", a: "Not by itself. Below ₹20 lakh of total turnover, registration is not compulsory, even for exports. Above it, you register and file an LUT." },
      { q: "Which ITR form does a freelancer file?", a: "ITR-4 if you are eligible for the presumptive route, otherwise ITR-3. The right form depends on your work and income, not on the word freelancer." },
      { q: "When is the return for FY 2026-27 due?", a: "For non-audit business or professional income, the date is 31 August 2027, as we read the Finance Act 2026. Confirm on the portal closer to the date." },
      { q: "Do I need to pay advance tax on the 50% route?", a: "Yes, if your tax after TDS is ₹10,000 or more, but in one payment by 15 March." },
      { q: "Can a salaried person with freelance income use the 50% scheme?", a: "The scheme applies to the professional income if the profession is on the list. Salary is taxed separately." }
    ] }
  ],
},
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
