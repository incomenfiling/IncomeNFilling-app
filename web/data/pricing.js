// Published prices. Source: the GST Registration quotation. Fees are before 18% GST unless stated.
// Keep one source here, and update the quotation PDF and Google listing in the same change.
export const PRICING = {
  "gst-registration": {
    from: "₹999",
    fromNote: "+ 18% GST (₹1,179 in total) for individuals and proprietors. Fee fixed in writing before we start.",
    intro: "Choose Essential or Launchpad (Complete) for your business type. Fee + 18% GST. Totals shown include GST.",
    solve: [
      { q: "Documents unclear?", a: "We check them first." },
      { q: "Notice or query?", a: "Reply included." },
      { q: "GSTIN at risk?", a: "Rule 10A bank updation, in Complete." },
      { q: "Where is my ARN?", a: "We track it." },
    ],
    groups: [
      {
        title: "A. Individual / Proprietorship",
        plans: [
          { name: "Essential", total: "₹1,179", base: "₹999 + 18% GST" },
          { name: "Business Launchpad (Complete)", total: "₹2,949", base: "₹2,499 + 18% GST", recommended: true },
        ],
        rows: [
          ["Application filing (1 application)", "Included", "Included"],
          ["Document review", "Included", "Included"],
          ["ARN tracking", "Included", "Included"],
          ["Notice Reply Certificate download", "Included", "Included"],
          ["Routine notice reply (REG-04)", "Included", "Included"],
          ["Rule 10A bank updation", "Not included", "Included"],
          ["Re-filing backup", "Not included", "Included"],
          ["Udyam / MSME registration", "Not included", "FREE*"],
          ["Month-1 return", "Not included", "50% OFF**"],
        ],
      },
      {
        title: "B. Partnership / LLP / Pvt Ltd",
        plans: [
          { name: "Corporate Essential", total: "₹1,769", base: "₹1,499 + 18% GST" },
          { name: "Corporate Launchpad (Complete)", total: "₹4,129", base: "₹3,499 + 18% GST", recommended: true },
        ],
        rows: [
          ["Application filing (1 application)", "Included", "Included"],
          ["Multi-director / partner data entry", "Included", "Included"],
          ["DSC filing", "Included", "Included"],
          ["ARN tracking", "Included", "Included"],
          ["Document review", "Included", "Included"],
          ["Routine notice reply", "Included", "Included"],
          ["Authorised Signatory Format", "Not included", "Included"],
          ["Rule 10A bank updation", "Not included", "Included"],
          ["Re-filing backup", "Not included", "Included"],
          ["Udyam / MSME registration", "Not included", "FREE*"],
          ["Month-1 return", "Not included", "50% OFF**"],
        ],
      },
    ],
    footnotes: [
      "* Udyam / MSME registration: no professional fee when you take Complete. Udyam has no government fee.",
      "** Month-1 return: 50% off the monthly fee of whichever GST Monthly Filing plan you choose. Plan A ₹1,200 becomes ₹600, Plan B ₹5,000 becomes ₹2,500, and Plan C ₹9,999 becomes ₹4,999.50 (each + 18% GST).",
    ],
    why: "Complete costs ₹1,500 more for individuals and ₹2,000 more for firms and companies. It adds Rule 10A bank updation, re-filing backup, free Udyam registration and 50% off your Month-1 return (corporate also adds the Authorised Signatory Format). If you add bank updation to Essential at ₹499, Complete costs only ₹1,001 more for individuals or ₹1,501 more for corporates. Amounts before GST.",
    addon: { name: "Rule 10A bank updation", desc: "Bank details submitted after registration is granted, which prevents GSTIN cancellation.", fee: "₹499 + 18% GST", total: "₹589" },
    need: [
      "PAN and Aadhaar of the proprietor, partners or directors, with a recent photo.",
      "Proof of business address (electricity bill or rent agreement, plus a no-objection letter if rented).",
      "Bank proof (cancelled cheque or first page of the passbook).",
      "Partnership deed, LLP agreement or incorporation certificate for firms and companies.",
    ],
    terms: [
      "Fees are professional fees only. Government fees, if any, are not included.",
      "GST at 18% is added to every fee, and the totals on this page include it.",
      "Rule 10A bank updation must be completed after registration is granted, so the GSTIN is not cancelled.",
      "Timeline: we file your application within 24 to 48 working hours after we receive complete documents. The GST department then processes it; that time is outside our control.",
      "Our working hours are 10:00 to 19:00 IST, Monday to Saturday.",
      "These are the rates on the day we send this quotation. If a rate changes before we start work, we will update you.",
    ],
  },
};

// Full price list shown on /pricing. Source: the 14 branded quotations. Fee is before 18% GST; total includes it.
export const PRICE_LIST = [
  { name: "GST Registration", href: "/services/gst-registration", per: "one application", rows: [
    ["Essential (individual / proprietor)", "₹999", "₹1,179"], ["Launchpad Complete (individual / proprietor) (recommended)", "₹2,499", "₹2,949"],
    ["Corporate Essential (partnership, LLP, Pvt Ltd)", "₹1,499", "₹1,769"], ["Corporate Launchpad Complete (recommended)", "₹3,499", "₹4,129"] ] },
  { name: "GST Monthly Filing", per: "per month, up to 300 documents", rows: [
    ["A · Ready Excel", "₹1,200", "₹1,416"], ["B · Reconciliation (recommended)", "₹5,000", "₹5,900"], ["C · Tally and Control", "₹9,999", "₹11,799"] ] },
  { name: "GST NIL Return Filing", per: "pay in advance for the lowest rate", rows: [
    ["Monthly NIL return, annual", "₹3,600 / year", "₹4,248 (₹300 / month)"], ["Monthly NIL return, quarterly", "₹1,200 / quarter", "₹1,416"],
    ["Monthly NIL return, month to month", "₹500 / month", "₹590"], ["Quarterly (QRMP) NIL return, annual", "₹2,000 / year", "₹2,360"],
    ["Quarterly (QRMP) NIL return, quarter by quarter", "₹600 / quarter", "₹708"] ] },
  { name: "GST Reconciliation only", per: "per month, without filing", rows: [
    ["Reconciliation-only", "₹3,500", "₹4,130"], ["Extra documents", "₹800", "₹944"] ] },
  { name: "E-commerce GST Filing", per: "per month, for marketplace sellers", rows: [
    ["Marketplace Standard (3 platforms, 500 orders)", "₹799", "₹943"], ["Marketplace Pro (8 platforms, 1,000 orders)", "₹999", "₹1,179"],
    ["Marketplace + B2C Sales (3 platforms, 1,000 orders)", "₹1,199", "₹1,415"], ["Marketplace Pro + B2C Sales (8 platforms, 2,000 orders)", "₹1,399", "₹1,651"],
    ["Growth (5 platforms + 1 website, 4,000 orders)", "₹3,499", "₹4,129"], ["Enterprise (more than 5 platforms or 4,000 orders)", "From ₹4,999", "Custom quote"] ] },
  { name: "GST Export Compliance", per: "per month, up to 300 documents", rows: [
    ["A · Export GST Core", "₹3,500", "₹4,130"], ["B · Export GST Pro and Recon (recommended)", "₹5,000", "₹5,900"] ] },
  { name: "GST LUT Filing", per: "once a year", rows: [
    ["1 · LUT Filing", "₹1,499", "₹1,769"], ["2 · LUT + Export Invoice Pack (recommended)", "₹2,999", "₹3,539"] ] },
  { name: "E-invoice and E-way Bill Desk", per: "per plan", rows: [
    ["A · Micro Wallet (12 documents, 6 months)", "₹999", "₹1,179"], ["B · Standard Wallet (30 documents, 6 months)", "₹1,499", "₹1,769"],
    ["C · Monthly Desk (100 documents every month, recommended)", "₹2,999", "₹3,539"] ] },
  { name: "GST Amendment and Profile Update", per: "one amendment application", rows: [
    ["A · Basic", "₹499", "₹589"], ["B · Filing", "₹1,499", "₹1,769"], ["C · Filing + Drafting (recommended)", "₹2,500", "₹2,950"] ] },
  { name: "GST Cancellation", per: "one case", rows: [
    ["A · Clean Closure", "₹1,999", "₹2,359"], ["B · With Stock", "₹3,999", "₹4,719"], ["C · Bigger case", "Quoted separately", "We tell you before we start"] ] },
  { name: "GST Revocation", per: "one case", rows: [
    ["A · Revocation", "₹3,999", "₹4,719"], ["B · Bigger case", "Quoted separately", "We tell you before we start"] ] },
  { name: "GST Refund", per: "per refund application", rows: [
    ["A · Cash ledger", "₹2,999", "₹3,539"], ["B · Export or inverted duty (plus 2% + GST success fee)", "₹4,999", "₹5,899"],
    ["C · Notice reply (plus 2% + GST success fee)", "₹7,999", "₹9,439"] ], note: "The success fee applies only when the refund reaches your bank. No result is promised." },
  { name: "GST Job Work ITC-04", per: "per ITC-04 filed", rows: [
    ["A · Small (up to 50 challan entries)", "₹1,499", "₹1,769"], ["B · Regular (51 to 200 entries)", "₹2,999", "₹3,539"], ["C · High volume (201 to 500 entries)", "₹5,999", "₹7,079"] ] },
  { name: "GST Composition Scheme", per: "per year (four CMP-08 filings and one GSTR-4)", rows: [
    ["Composition Summary (you give a ready Excel)", "₹6,000", "₹7,080 (or ₹1,770 per quarter)"], ["Composition Bank-Led (you give bank statements)", "₹10,000", "₹11,800 (or ₹2,950 per quarter)"] ] },
  { group: "DSC", name: "Digital Signature Certificate (DSC)", per: "final price: certificate, Hype USB token, key ring (new DSC) and our fee", final: true, rows: [
    ["Assisted service (recommended): we handle the steps with you, from", "₹1,890", "Final price"],
    ["Basic service: you complete the steps yourself, from", "₹1,590", "Final price"] ],
    note: "Prices by certificate type and validity are in the details below. Already hold a Hype token? Deduct ₹390 from any Assisted price." },
  { group: "Accounting", name: "Accounting and Cash-Flow Desk", href: "/services/monthly-bookkeeping", per: "per month in Tally, plus a one-time setup fee", rows: [
    ["A · Starter (up to 120 entries, 1 bank account)", "₹7,999", "₹9,439"], ["B · Business (up to 300 entries, 3 bank accounts)", "₹13,999", "₹16,519"],
    ["C · Growth (up to 600 entries, 5 bank accounts, recommended)", "₹24,999", "₹29,499"], ["D · Large (up to 1,000 entries, 8 bank accounts)", "₹37,999", "₹44,839"] ],
    note: "One-time setup fee (before GST): A ₹5,000, B ₹10,000, C ₹18,000, D ₹25,000. Above 1,000 entries: custom plan after a short call." },
  { group: "Incorporation", name: "Private Limited Company Registration", href: "/services/private-limited-company-registration", per: "one incorporation, our fee before digital signatures and government charges", rows: [
    ["Our professional fee (2 directors)", "₹9,000", "₹10,620"], ["Digital signatures for 2 directors and 1 witness (optional, 2 years)", "₹4,800", "Final price"] ],
    note: "Government charges (stamp duty, MCA and name fees) are paid at actuals, with receipt. Total with our fee and digital signatures: ₹15,420, before government charges." },
  { group: "ROC", name: "Private Limited ROC Annual Compliance", per: "per year, ROC filings only", rows: [
    ["Annual plan: every regular ROC filing", "₹11,999", "₹14,159"] ],
    note: "Same fee every year. Event filings (director change, share allotment and more) are priced separately. Government fees at actuals." },
  { group: "Incorporation", name: "LLP Registration", href: "/services/llp-registration", per: "one incorporation, our fee before digital signatures and government charges", rows: [
    ["Our professional fee (2 designated partners)", "₹7,999", "₹9,439"], ["Digital signatures for 2 designated partners (optional, 2 years)", "₹3,200", "Final price"] ],
    note: "Government charges are paid at actuals, with receipt. Total with our fee and digital signatures: ₹12,639, before government charges." },
  { group: "ROC", name: "LLP ROC Annual Compliance", per: "per year, ROC filings only", rows: [
    ["Annual plan: Form 11, Form 8 and DIR-3 KYC", "₹5,999", "₹7,079"] ],
    note: "Same fee every year. Event filings are priced separately. Government fees at actuals." },
  { group: "Incorporation", name: "Partnership Firm Services", per: "per service, deed and filing", rows: [
    ["Partnership firm registration", "₹5,999", "₹7,079"], ["Adding a partner", "₹2,500", "₹2,950"],
    ["Partner leaving (retirement or removal)", "₹2,500", "₹2,950"], ["Dissolution of the firm", "₹5,999", "₹7,079"] ],
    note: "Stamp paper, notary or registration of the deed and the Registrar of Firms fee are extra, at actuals, with receipt." },
  { group: "Income Tax", name: "ITR-1 Salaried", per: "one return", rows: [
    ["Starter Salary", "₹799", "₹943", "AIS, TIS and 26AS cross-check, Form 16 check, filing and e-verification. For one Form 16, pension, 1 house property, bank interest (income up to ₹50 lakh)"],
    ["Tax Optimization Pack (recommended)", "₹1,199", "₹1,415", "Starter, plus Old vs New Regime analysis and deductions review. For many deductions or high tax"],
    ["Bank Summary Pack", "₹1,499", "₹1,769", "Tax Optimization, plus review of up to 3 bank accounts. For several bank accounts or high-value items"] ] },
  { group: "Income Tax", name: "ITR-2 Capital Gains and Investors", per: "one return", rows: [
    ["Standard Capital Gains", "₹1,499", "₹1,769", "Capital gains schedule, dividend matching, 1 broker report. For more than 1 house property, mutual funds, delivery trades (under 25)"],
    ["Active Investor and Crypto (VDA)", "₹2,499", "₹2,949", "Up to 2 brokers (150 trades), crypto tax at 30%, Schedule FA. For active investors, ESOP holders, crypto, unlisted directors"],
    ["Heavy Portfolio", "₹3,499", "₹4,129", "3 or more broker reports, set-off and carry-forward check. For high net worth, many asset types"] ] },
  { group: "Income Tax", name: "ITR-3 Business and Traders", per: "one return", rows: [
    ["Business: Ready Books", "₹2,499", "₹2,949", "Filing from finalised P&L and balance sheet, depreciation schedule. For professionals and proprietors with finalised books"],
    ["Derivative Trader (F&O, intraday)", "₹3,499", "₹4,129", "Turnover calculation, speculative mapping, loss register. For F&O and intraday traders"],
    ["Full Book Rebuild and Filing Pack", "₹4,999", "₹5,899", "Rebuild from bank statement (300 lines), P&L, balance sheet, ITR-3. For no books, only bank statements"] ] },
  { group: "Income Tax", name: "ITR-4 Presumptive Income", per: "one return", rows: [
    ["Standard Sugam", "₹999", "₹1,179", "Presumptive income declaration, 4 financial indicators. For Section 44AD business or 44ADA professionals"],
    ["Sugam + Bank Rebuild", "₹1,999", "₹2,359", "12-month bank turnover check (300 lines), personal and business split. For unsure of digital vs cash turnover"] ],
    note: "ITR-4 is for turnover up to ₹2 crore, or ₹3 crore if cash receipts are 5% or less. Declaring a lower profit may need ITR-3 and a tax audit." },
  { group: "Income Tax", name: "ITR-5 Firms and LLPs", per: "one return", rows: [
    ["Standard Firm Filing", "₹4,999", "₹5,899", "Filing from ready statements, partner salary check (Section 40(b)). For partnership firms and LLPs with ready books"],
    ["Full Firm Rebuild and Filing Pack", "₹7,499", "₹8,849", "Balance sheet rebuild, partner capital reconciliation. For firms and LLPs with no accounts"] ],
    note: "Add-on: financial statements made from your raw bank statements, for tax filing, a bank loan or a visa: ₹2,500 + GST = ₹2,950." },
  { group: "Professional Tax", name: "Professional Tax Registration (PTRC / PTEC)", href: "/services/professional-tax", per: "one time, West Bengal", rows: [
    ["Registration, any type of person (PTRC or PTEC)", "₹1,499", "₹1,769", "Company, firm, LLP, proprietor, professional or employer"] ],
    note: "Government charges, if any, are at actuals." },
  { group: "Professional Tax", name: "PTRC Yearly Plan: Monthly Payment and Form III", per: "per year, by number of employees", rows: [
    ["Up to 10 employees", "₹6,999", "₹8,259"], ["11 to 25 employees (recommended)", "₹9,999", "₹11,799"], ["26 to 50 employees", "₹14,999", "₹17,699"],
    ["51 to 100 employees", "₹23,999", "₹28,319"], ["More than 100 employees", "Quoted", "Quoted"] ],
    note: "Only some months? Month by month: up to 10 employees ₹499, 11 to 25 ₹799, 26 to 50 ₹1,199, 51 to 100 ₹1,999, each + 18% GST per month. The annual Form III alone is ₹1,499 + GST." },
  { group: "Professional Tax", name: "PTEC Yearly Payment", per: "per year, due by 31 July", rows: [
    ["Yearly PTEC payment on the portal, with challan and GRN", "₹499", "₹589"] ] },
  { group: "Professional Tax", name: "Professional Tax Other Services", per: "per service", rows: [
    ["Old months or old Form III pending, per year cleared", "₹1,999", "₹2,359"], ["Cancellation of PTRC or PTEC", "₹1,999", "₹2,359"],
    ["Reply to a professional tax notice", "Quoted", "Quoted"] ] },
  { group: "Udyam (MSME)", name: "Udyam (MSME) Registration", href: "/services/msme-udyam-registration", per: "per application", rows: [
    ["New Udyam registration: application, NIC activity code, Udyam number and certificate", "₹999", "₹1,179"],
    ["Update of your Udyam: address, activity, partners, bank, investment or turnover, up to 3 changes in one application", "₹799", "₹943"],
    ["Lost number or reprint: recover your Udyam number and reprint the certificate", "₹399", "₹471"],
    ["Closing or cancelling an Udyam", "₹799", "₹943"],
    ["Help with schemes after registration (NSIC, CGTMSE, MSME loan): we first tell you if you qualify", "Quoted", "Quoted"] ],
    note: "Government fee for Udyam: ₹0. The Udyam portal does not charge for registration or update. Our fee is only for our work." },
];
