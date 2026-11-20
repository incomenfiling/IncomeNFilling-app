// Inclusions, exclusions, needs and terms for each priced service on /pricing.
// Source: the 14 branded quotations. No bank or payment details here. Keep it in step with data/pricing.js.
import { PRICING } from "@/data/pricing";

const Y = "✓";
const N = "✗";
const solve = (...p) => p.map(([q, a]) => ({ q, a }));
const COMMON_TERMS = [
  "Fees are professional fees only. Government fees, tax, interest and late fees, if any, are not included.",
];

const reg = PRICING["gst-registration"];
const tick = (v) => (v === "Included" ? Y : v === "Not included" ? N : v);

const MONTHLY_MATRIX = {
  plans: ["A · Ready Excel", "B · Reconciliation", "C · Tally and Control"],
  recommended: 1,
  groups: [
    { h: "Filing", rows: [["GSTR-1 and GSTR-3B filing", Y, Y, Y]] },
    { h: "Sales and outward checks", rows: [
      ["Sales register vs GSTR-1 reconciliation", N, Y, Y],
      ["E-invoice vs GSTR-1 matching", N, Y, Y],
      ["Eligible invoice: e-invoice made or not", N, Y, Y],
      ["Eligible debit/credit note: e-invoice made or not", N, Y, Y],
      ["E-way bill vs GSTR-1 matching", N, Y, Y],
      ["Required e-way bill made or not", N, Y, Y],
      ["Debit/credit note: e-way bill applicable or not", N, Y, Y],
    ] },
    { h: "Purchase and inward checks", rows: [
      ["Purchase register vs GSTR-2B (invoice-wise)", N, Y, Y],
      ["RCM (reverse charge) reconciliation", N, Y, Y],
      ["Supporting invoice soft copy (PDF) check", N, N, Y],
    ] },
    { h: "ITC and reversal checks", rows: [
      ["ITC claimed in GSTR-3B", "As per GSTR-2B, no review", "Reviewed", "Reviewed"],
      ["GSTR-2B ITC vs ITC claimed in GSTR-3B", N, Y, Y],
      ["Capital goods ITC kept apart from regular inputs", N, Y, Y],
      ["Blocked credit (Section 17(5)) checked and kept apart", N, Y, Y],
      ["ITC time limit check (Section 16(4))", N, Y, Y],
      ["Supplier not paid in 180 days (Rule 37)", N, Y, Y],
      ["Exempt or common credit reversal (Rules 42, 43)", N, Y, Y],
      ["ITC reversal on credit notes", N, Y, Y],
      ["Ineligible ITC shown in GSTR-2B", N, Y, Y],
      ["Reversal entry prepared in Tally", N, N, Y],
    ] },
    { h: "Accounting and vendor control", rows: [
      ["Tally voucher-level GST review", N, N, Y],
      ["Vendor email follow-up (up to 15)", N, N, Y],
    ] },
    { h: "Reporting", rows: [
      ["Mismatch report", "No", "This month", "Every month, cumulative"],
      ["Backlog of several past months", "Quoted separately", "Quoted separately", "Quoted separately"],
    ] },
  ],
};

export const PRICE_DETAILS = {
  "GST Registration": {
    solve: reg.solve,
    matrices: reg.groups.map((g) => ({
      title: g.title,
      plans: g.plans.map((p) => p.name),
      recommended: g.plans.findIndex((p) => p.recommended),
      groups: [{ h: "", rows: g.rows.map((r) => [r[0], ...r.slice(1).map(tick)]) }],
    })),
    notes: reg.footnotes,
    extras: [
      { h: "Why choose Complete", p: [reg.why] },
      { h: "Add-on", p: [`${reg.addon.name}: ${reg.addon.desc} ${reg.addon.fee} (total ${reg.addon.total}).`] },
    ],
    need: reg.need,
    terms: reg.terms.filter((t) => !/working hours|rates on the day|Fees are professional/.test(t)),
  },

  "GST Monthly Filing": {
    solve: solve(
      ["Data ready, no time?", "We file your returns."],
      ["Mismatch worry?", "We reconcile it, in Plans B and C."],
      ["Missing supplier bills?", "Exception report, in Plans B and C."],
      ["Chasing vendors?", "Plan C emails up to 15."],
    ),
    matrices: [MONTHLY_MATRIX],
    notes: ["Plan A files your Excel as it is, with no checks. Plan C GST is rounded to the nearest rupee."],
    extras: [
      { h: "More than 300 documents?", table: { head: ["Own documents / month", "Plan A", "Plan B", "Plan C"], rows: [
        ["Up to 300", "₹1,200", "₹5,000", "₹9,999"],
        ["Up to 600", "₹2,100", "₹8,000", "₹14,499"],
        ["Up to 1,000", "₹3,300", "₹12,000", "₹20,499"],
        ["Above 1,000", "Custom", "Custom", "Custom"],
      ] }, p: ["Prices + 18% GST. Only your own invoices, debit notes and credit notes count. Marketplace orders and exports do not. If your documents go above a slab, the next slab applies: 301 to 600 documents are billed at the 600 slab rate."] },
      { h: "Add if you need", table: { head: ["Add-on", "Fee (before GST)", "Total"], rows: [
        ["Marketplace Add-On: 3 platforms, 500 orders", "₹799", "₹943"],
        ["Marketplace Add-On: 8 platforms, 1,000 orders", "₹999", "₹1,179"],
      ] }, p: ["Over 1,000 marketplace orders a month: custom quote. Example: Plan B + Marketplace (3 platforms) = ₹5,799 + GST (₹6,843). Selling exports, or need only reconciliation? See Export Compliance and Reconciliation only on this page."] },
      { h: "Not sure which plan?", p: ["Need reconciliation? Plan B. Tally and vendor follow-up? Plan C. Otherwise Plan A."] },
    ],
    need: [
      "Your data in our standard Excel format, or a fully posted Tally backup.",
      "In Tally, the supplier's original bill number in the \"Supplier Invoice No.\" field.",
      "Missing GSTINs, duplicates or wrong dates: we tell you. You correct and resend, or ask for a one-time Data Clean-up quoted in writing first.",
    ],
    terms: [
      ...COMMON_TERMS,
      "Plans B and C are tax reconciliation, not bookkeeping.",
      "In Plan A we claim ITC exactly as shown in GSTR-2B. We do not check eligibility, blocked credit or reversal. Any ineligible ITC, interest or penalty is the client's responsibility. These checks are in Plans B and C. Please confirm the quotation in writing (WhatsApp is fine) before payment.",
      "Complete data must reach us by the 5th of every month.",
      "Late fees or interest caused by late or incorrect data are the client's responsibility.",
      "A backlog of several past months is quoted separately.",
    ],
  },

  "GST NIL Return Filing": {
    solve: solve(
      ["Late fees worry?", "We track every due date."],
      ["Is it really NIL?", "We check the portal."],
      ["Dormant GSTIN?", "We keep it filed."],
      ["No proof of filing?", "ARN on WhatsApp."],
    ),
    include: [
      "Check that your portal shows zero sales, purchases, RCM and ITC.",
      "Filing of GSTR-1 and GSTR-3B using OTP or DSC.",
      "Acknowledgement (ARN) on WhatsApp or email.",
      "Due-date tracking for every filing.",
    ],
    exclude: [
      "Claiming ITC, purchase matching or GSTR-2B reconciliation.",
      "Bank charges, reverse charge (RCM) or e-commerce transactions.",
      "Notice replies, past backlog returns or revoking a cancelled registration.",
    ],
    need: [
      "Your GSTIN and the mobile number registered on the GST portal, for the OTP.",
      "Confirmation before each filing: no sales, purchases or reverse charge.",
      "For a company or LLP, your DSC for the filing.",
    ],
    terms: [
      ...COMMON_TERMS.slice(0, 1),
      "GST at 18% is added to every fee, and the totals include it.",
      "Advance plans are paid upfront before filing starts.",
      "This covers NIL returns only. If a period has any sale, purchase or RCM, tell us before filing. Such returns are filed at our standard filing rates, which start at ₹1,200 + 18% GST per month (see GST Monthly Filing above).",
    ],
  },

  "GST Reconciliation only": {
    solve: solve(
      ["Your own filer files, who checks the data?", "We compare your books with GSTR-1 and GSTR-2B."],
      ["Mismatch before a notice?", "We list every difference, invoice by invoice."],
      ["Wrong or missing ITC?", "We check blocked credit, time limit and reversals."],
      ["Missing e-invoice or e-way bill?", "We flag the invoices where they were not made."],
    ),
    includeNote: "The same checks as Plan B in GST Monthly Filing, without the filing.",
    includeGroups: [
      { h: "Sales and outward checks", items: [
        "Sales register vs GSTR-1 reconciliation", "E-invoice vs GSTR-1 matching", "Eligible invoice: e-invoice made or not",
        "Eligible debit/credit note: e-invoice made or not", "E-way bill vs GSTR-1 matching", "Required e-way bill made or not",
        "Debit/credit note: e-way bill applicable or not" ] },
      { h: "Purchase and inward checks", items: ["Purchase register vs GSTR-2B (invoice-wise)", "RCM (reverse charge) reconciliation"] },
      { h: "ITC and reversal checks", items: [
        "GSTR-2B ITC vs ITC claimed in GSTR-3B", "Blocked credit check (Section 17(5))", "ITC time limit check (Section 16(4))",
        "Supplier not paid in 180 days (Rule 37)", "Exempt or common credit reversal (Rules 42, 43)", "ITC reversal on credit notes",
        "Ineligible ITC shown in GSTR-2B" ] },
      { h: "Reporting", items: ["Mismatch report for the month, for you or your filer to act on"] },
    ],
    exclude: [
      "Filing of GSTR-1 and GSTR-3B (filing is in Plans A, B and C of GST Monthly Filing).",
      "Reversal entry prepared in Tally.",
      "Supporting invoice soft copy (PDF) check.",
      "Tally voucher-level GST review.",
      "Vendor email follow-up.",
      "Backlog of several past months (quoted separately).",
      "Daily reconciliation (custom quote).",
    ],
    need: ["Your sales and purchase data in Excel or a posted Tally backup."],
    terms: [...COMMON_TERMS.slice(0, 1), "This is tax reconciliation, not bookkeeping.", "Complete data must reach us by the 5th of every month."],
  },

  "E-commerce GST Filing": {
    solve: solve(
      ["Selling on many platforms?", "One GST return covers all your marketplaces together."],
      ["Marketplace tax deducted (TCS)?", "We claim your GSTR-8 TCS credit every month."],
      ["Returns and cancellations?", "We adjust them in the month's GSTR-1."],
      ["Worried about ITC?", "We claim it as per GSTR-2B, after your invoice actions in IMS."],
    ),
    include: [
      "Automated GST data run through our internal software.",
      "GSTR-1 and GSTR-3B preparation and filing.",
      "Basic 2B ITC review.",
      "Monthly TCS (GSTR-8) credit acceptance or claim.",
      "B2C tiers: state-wise tax classification for website sales and return adjustments.",
    ],
    exclude: [
      "Settlement reconciliation and items not listed above.",
      "ITC beyond what is in GSTR-2B. We claim ITC only as per GSTR-2B after invoice actions in IMS.",
      "One-to-one reconciliation of purchases, or following up with vendors who have not filed.",
      "GSTR-9 and GSTR-9C annual returns.",
      "Connecting to your website software, or cleaning website data that is incomplete or not in our Excel format.",
    ],
    extras: [{ h: "How orders are counted", p: ["One order means one sale or one return entry, across all platforms and your website, in a month. If your orders go above your tier during a month, we still file that month at the tier you chose. You move to the next tier from the following month, and we tell you before the change."] }],
    need: ["Your complete sales data for the month, in our Excel format, by the 5th."],
    terms: [
      ...COMMON_TERMS,
      "Fees are charged per month, for the tier you choose.",
      "Send your complete data by the 5th of every month.",
      "Late fees or interest caused by late, incomplete or incorrect data are the client's responsibility.",
    ],
  },

  "GST Export Compliance": {
    solve: solve(
      ["Export refund stuck?", "We keep capital goods and blocked credit apart."],
      ["Shipping bill mismatch?", "We match exports with ICEGATE records."],
      ["FIRC or e-BRC doubts?", "Plan B checks them against bank status."],
      ["E-invoice and e-way bill?", "Plan B generates them."],
    ),
    matrices: [{
      plans: ["A · Export GST Core", "B · Export GST Pro and Recon"], recommended: 1,
      groups: [
        { h: "Monthly filing", rows: [["GSTR-1 filing", Y, Y], ["GSTR-3B filing", Y, Y], ["IMS action and GSTR-2B ITC claim (eligible ITC)", Y, Y]] },
        { h: "ITC checks", rows: [
          ["Capital goods ITC kept apart from regular inputs", Y, Y],
          ["Blocked credit (Section 17(5)) kept apart from regular inputs", Y, Y],
          ["GSTR-2B ITC vs ITC claimed in GSTR-3B", N, Y],
          ["ITC time limit check (Section 16(4))", N, Y],
          ["Supplier not paid in 180 days (Rule 37)", N, Y],
          ["Exempt or common credit reversal (Rules 42, 43)", N, Y],
          ["ITC reversal on credit notes", Y, Y],
          ["Ineligible ITC shown in GSTR-2B", Y, Y],
        ] },
        { h: "Operations and checks", rows: [
          ["E-invoice and e-way bill generation and compliance", N, Y],
          ["Purchase register vs GSTR-2B and IMS, invoice-wise", N, Y],
          ["Export vs shipping bill check (goods), monthly against ICEGATE", Y, Y],
          ["FIRC / e-BRC check, monthly against bank status", N, Y],
        ] },
      ],
    }],
    extras: [
      { h: "Who should choose which plan", p: [
        "Plan A: for IT and SaaS companies and low-volume exporters who make their own e-invoices and want careful filing with refund-ready ITC segregation.",
        "Plan B: for goods and merchant exporters and growing agencies. You do not need Tally. You fill our standard Excel template. It adds the ITC review, e-invoice and e-way bill generation, 3-way reconciliation (books vs IMS, exports vs FIRC or shipping bill, GSTR-1 vs GSTR-3B), a vendor default tracker and the FIRC / e-BRC check.",
      ] },
      { h: "Why exporters choose us", p: ["Exports under LUT are zero-rated supplies. Two mistakes cause most of the trouble: mixing capital goods or blocked credit with regular inputs in GSTR-3B, which can weaken a later cash refund claim; and not matching export invoices with ICEGATE shipping bills or bank FIRC / e-BRC records, which can lead to an IGST demand with penalty. We handle both through remote, Excel-based compliance."] },
    ],
    need: ["Your data in our Excel template (up to 300 documents a month) and a Tally backup, by the 5th of every month."],
    terms: [
      ...COMMON_TERMS.slice(0, 1),
      "Monthly billing, 100% in advance, before return preparation. No lock-in.",
      "Not refundable once monthly data review or return preparation begins.",
      "Excel data must reach us by the 5th of every month. In Plan B, e-way bill and e-invoice requests need 4 working hours of notice.",
    ],
  },

  "GST LUT Filing": {
    solve: solve(
      ["Exporting without paying IGST?", "The LUT lets you export without paying IGST first."],
      ["Portal and DSC/EVC hassle?", "We prepare Form RFD-11 and file it for you."],
      ["Need proof of filing?", "You get the LUT ARN and acknowledgement copy."],
      ["Invoice or FIRC doubts? (Plan 2)", "One-page export invoice checklist and FIRC PDF guide."],
    ),
    matrices: [{
      plans: ["1 · LUT Filing", "2 · LUT + Export Invoice Pack"], recommended: 1,
      groups: [
        { h: "LUT filing", rows: [
          ["Form RFD-11 prepared for the correct financial year", Y, Y],
          ["Filed on the GST portal with DSC or EVC", Y, Y],
          ["LUT ARN and acknowledgement copy", Y, Y],
        ] },
        { h: "Export invoice pack", rows: [
          ["One-page list of what an export invoice must carry", N, Y],
          ["PDF guide: how to get the foreign remittance certificate (FIRC) from your bank", N, Y],
        ] },
      ],
    }],
    notes: ["Plan 2 GST is rounded to the nearest rupee."],
    exclude: [
      "Drafting your actual export invoices.",
      "Getting the FIRC or e-BRC issued by your bank.",
      "Customs clearance, shipping bill or freight for goods.",
      "FEMA notices from the RBI.",
      "Export refund (see GST Refund on this page).",
      "Each extra GSTIN: charged separately.",
    ],
    need: [
      "GST login, or OTP help while we file.",
      "Aadhaar and PAN of the person who signs. Companies and LLPs need a DSC; others can use EVC (OTP).",
      "Your GSTIN and the financial year you need.",
    ],
    terms: [
      "Fees are professional fees only. No government fee applies to LUT.",
      "An LUT is valid for one financial year and must be filed again each year.",
      "A service counts as an export only when you are paid in foreign currency, or in rupees where the RBI allows it.",
      "100% advance. Not refundable once Form RFD-11 is filed and the ARN is generated.",
      "The checklist and guide are general information, not legal advice, and do not promise any result.",
    ],
  },

  "E-invoice and E-way Bill Desk": {
    solve: solve(
      ["Wrong e-way bill details?", "We check vehicle number, PIN code and distance before we generate."],
      ["Invoice without IRN?", "We generate the IRN and QR code for your B2B invoice."],
      ["Truck broke down on the way?", "We extend validity and update the vehicle, where the rules allow."],
      ["Dispatching after hours?", "Possible after you talk to our team."],
    ),
    include: [
      "IRN and QR code generation (e-invoice).",
      "Distance validation and Part A and Part B (e-way bill).",
      "Validity extension, for example if a truck breaks down.",
      "Transshipment update, when the vehicle changes.",
      "Cancellation within 24 hours.",
    ],
    exclude: [
      "Penalty or seizure that comes from wrong data you gave us, such as a wrong vehicle number or invoice value.",
      "Drafting commercial invoices. You give us the raw bill.",
      "Monthly GST returns (GSTR-1 and GSTR-3B).",
      "Refund of unused documents.",
    ],
    extras: [
      { h: "How documents are counted", p: ["Each of these counts as one document: generating an e-invoice, generating an e-way bill, extending validity, updating the vehicle, and cancelling. If a mistake is ours, we redo that work without counting it."] },
      { h: "Wallet rules", p: ["When your documents finish or the validity ends, renew the plan. Unused documents lapse and are not refunded. Plan C documents do not carry over to the next month. If you need more than 100 documents in a month, add a Standard Wallet (Plan B) or talk to us for a custom plan."] },
      { h: "Working hours and night dispatch", p: ["Standard hours: 10:00 to 19:00 IST, Monday to Saturday. Night support is possible only after you talk to our team. An extra charge per document applies, and we tell you the charge before we start. VIP 24x7 Night add-on, for regular or daily night dispatches: priced on your volume."] },
    ],
    need: ["Your invoice details, vehicle number, transporter details and PIN codes for each dispatch."],
    terms: [
      ...COMMON_TERMS,
      "100% advance. Not refundable once paid.",
      "The data you give us is your responsibility. We check what we can, but wrong data you supply remains your liability.",
    ],
  },

  "GST Amendment and Profile Update": {
    solve: solve(
      ["Worried it will be rejected?", "We check your documents before we file."],
      ["Officer raised a question (REG-03)?", "Plans B and C: we file the reply."],
      ["Need an NOC or Board Resolution?", "Plan C: we draft it for you."],
      ["Small change or big change?", "Three plans. Pick the one that fits your change."],
    ),
    matrices: [
      { title: "What we change", plans: ["A · Basic", "B · Filing", "C · Filing + Drafting"], recommended: 2, groups: [{ h: "", rows: [
        ["Bank account, mobile number, email, HSN / SAC codes", Y, Y, Y],
        ["Address of principal or additional place of business", N, Y, Y],
        ["Partners, directors or karta", N, Y, Y],
        ["Trade name or business activity", N, Y, Y],
      ] }] },
      { title: "What we do", plans: ["A · Basic", "B · Filing", "C · Filing + Drafting"], recommended: 2, groups: [{ h: "", rows: [
        ["Your documents checked before filing", Y, Y, Y],
        ["Application filed on the GST portal", Y, Y, Y],
        ["Reply to the officer's clarification notice (REG-03)", N, Y, Y],
        ["Landlord NOC, Board Resolution or Authorisation Letter drafted", N, N, Y],
        ["Application filed again once if it is rejected", N, N, Y],
        ["ARN slip and updated GST certificate", Y, Y, Y],
      ] }] },
    ],
    notes: ["In Plan B, if the application is rejected and must be filed again, the new filing is charged separately and the fee already paid is not refunded. In Plan B you give us your documents ready, including any NOC or resolution."],
    exclude: [
      "Stamp duty and notary charges.",
      "Moving your address to another state, or a change of PAN. These need a fresh registration.",
      "Visits to the GST office or Seva Kendra.",
      "DSC token cost, for companies and LLPs without an active DSC.",
    ],
    need: [
      "GST login, or OTP help while we file.",
      "The documents for your change, for example electricity bill, rent agreement, cancelled cheque or partnership deed.",
    ],
    terms: [
      ...COMMON_TERMS,
      "100% advance. Not refundable once the application is filed and the ARN is generated.",
      "One fee covers one amendment application. Several fields can be changed in one application.",
      "Core changes are approved by the tax officer, and the department decides how long that takes.",
    ],
  },

  "GST Cancellation": {
    solve: solve(
      ["Stock still in hand?", "We work out the ITC to reverse on closing stock and capital goods (Rule 44)."],
      ["Final return (GSTR-10)?", "We file it. A late fee runs every day it is late."],
      ["Returns still pending?", "We check your portal first and list overdue months."],
      ["Notice from the officer?", "We reply once, and it is in your plan."],
    ),
    matrices: [{
      plans: ["A · Clean Closure", "B · With Stock", "C · Bigger case"], recommended: -1,
      groups: [{ h: "", rows: [
        ["Portal check for pending returns and dues", Y, Y, Y],
        ["Cancellation application, Form GST REG-16", Y, Y, Y],
        ["Final return, Form GSTR-10", Y, Y, Y],
        ["Tracking until the cancellation order (REG-19)", Y, Y, Y],
        ["One notice reply, if one comes", Y, Y, Y],
        ["ITC reversal calculation on closing stock and capital goods (Rule 44)", N, Y, Y],
        ["Challan for the ITC reversal", N, Y, Y],
        ["Best for", "No ITC taken on stock or assets", "Stock or machinery", "Bigger or more complex"],
      ] }],
    }],
    extras: [
      { h: "Standard cases and bigger cases", p: ["Plans A and B cover a standard case: one GSTIN, turnover up to ₹2 crore, stock and assets on up to 50 items, and no notice or proceeding pending. Anything bigger is Plan C. We quote it after we see your data, tell you the amount before we start, and you decide whether to go ahead. Notice replies are part of that quote."] },
      { h: "How it works", p: ["1. We check your portal. 2. You choose a plan and pay. 3. We file REG-16. 4. The officer passes the order. 5. We file GSTR-10."] },
      { h: "Visits and out-of-pocket costs", p: ["Visit to the GST office, if the officer needs one and you want us to attend: ₹2,500 + GST per visit, for going and coming. Other costs paid on your behalf (government fee, travel outside the city, courier, notary and stamp): you pay on actuals with the receipt. We tell you before we spend."] },
    ],
    exclude: [
      "Overdue returns. These are charged separately, and we tell you the cost after the portal check.",
      "Government tax, interest, late fees and past dues. You pay these directly.",
      "Building your stock or asset list from old books. If we must reconstruct it, we quote after seeing your data.",
      "Revocation of a registration cancelled by the officer (see GST Revocation on this page).",
    ],
    need: ["GST login, or OTP help while we file.", "Plan B: a list of your closing stock and assets, with values."],
    terms: [
      ...COMMON_TERMS,
      "100% advance. Not refundable once the application is filed and the ARN is generated.",
      "One notice reply is included in Plans A and B. More replies or hearings are quoted separately.",
      "Approval is by the tax officer, and the department decides how long that takes.",
    ],
  },

  "GST Revocation": {
    solve: solve(
      ["Cancelled by the officer?", "We read the order, check your dates and file REG-21."],
      ["Returns still pending?", "We file them first, at a clear price per month. The portal needs them."],
      ["Notice after you apply?", "We reply once to the officer's notice (REG-23) with REG-24."],
      ["Deadline close or gone?", "We check your dates. An extension case is quoted separately."],
    ),
    matrices: [{
      plans: ["A · Revocation", "B · Bigger case"], recommended: -1,
      groups: [{ h: "", rows: [
        ["Review of the order and your dates", Y, Y],
        ["REG-21 reply with reasons", Y, Y],
        ["Filing of Form GST REG-21", Y, Y],
        ["One notice reply (REG-24)", Y, Y],
        ["Tracking until REG-22 order", Y, Y],
        ["Visit to the GST office, if needed", "₹500 to ₹2,500 per visit", "₹500 to ₹2,500 per visit"],
        ["Best for", "A standard case", "Extension, appeal or complex case"],
      ] }],
    }],
    extras: [
      { h: "Pending returns, if any", table: { head: ["Return type", "Fee + GST", "Total incl. GST"], rows: [
        ["NIL return (no sales or purchases)", "₹500 / month", "₹590 / month"],
        ["Return with data (up to 300 documents)", "₹1,200 / month", "₹1,416 / month"],
      ] }, p: ["The portal needs all pending returns filed before the officer can revoke. Example: 6 months of NIL returns = ₹3,999 + ₹3,000 = ₹6,999 + GST. Total ₹8,259."] },
      { h: "Time limits and standard cases", p: ["REG-21 is to be filed within 90 days of the cancellation order. We accept cases inside this window. If your date is close or past, we check it first and quote any extension separately. Plan A covers a standard case: one GSTIN, no appeal or proceeding running. Anything bigger is Plan B. We quote it after we see your papers and tell you the amount before we start."] },
      { h: "How it works", p: ["1. We read your order and check dates. 2. You pay the dues and send documents. 3. We file REG-21, usually within 3 to 5 working days. 4. The officer decides; the department sets the time. 5. After revocation we help you resume filing."] },
      { h: "Follow-up and visits", p: ["Physical visit to the GST office, if needed: ₹500 to ₹2,500 + GST per visit, depending on the office location in Kolkata or outside. Travel is paid on actuals. We tell you the visit fee before the first visit. Some cases need several visits; we cannot fix the number, and you can stop at any time. After each visit we send a short note on what happened. Government fees and any other cost paid on your behalf are on actuals, with the receipt."] },
    ],
    exclude: [
      "Tax, interest and late fees on past returns. You pay these directly to the government.",
      "Visits to the GST office. These are charged per visit, as shown above.",
      "Appeals and extension applications. These are quoted separately.",
    ],
    need: [
      "The cancellation order (REG-19) and any notice you received.",
      "GST login, or OTP help while we file.",
      "For pending months with sales or purchases: your data for each month.",
    ],
    terms: [
      "100% advance. Not refundable once REG-21 is filed and the ARN is generated.",
      "One notice reply is included in Plan A. More replies or hearings are quoted separately.",
      "The officer decides the case. We cannot promise the outcome or timing.",
    ],
  },

  "GST Refund": {
    solve: solve(
      ["Money stuck with the department?", "We check if you can claim a refund, and which type."],
      ["Invoices do not match?", "We match GSTR-1, GSTR-3B and GSTR-2B invoice by invoice before we file."],
      ["Deficiency memo or show-cause notice?", "We reply. One reply is in Plans A and B."],
      ["Two-year limit?", "We check your dates first. Most refunds must be filed within 2 years of the relevant date."],
    ),
    matrices: [{
      plans: ["A · Cash ledger", "B · Export or inverted duty", "C · Notice reply"], recommended: -1,
      groups: [{ h: "", rows: [
        ["Check of refund type and the 2-year time limit", Y, Y, Y],
        ["Invoice-level matching of GSTR-1, 3B and 2B", N, Y, Y],
        ["Refund working and statements", N, Y, Y],
        ["Filing of Form GST RFD-01", Y, Y, N],
        ["One reply to a deficiency memo (RFD-03)", Y, Y, N],
        ["One reply to a show-cause notice (RFD-08)", N, Y, Y],
        ["Tracking until the final order (RFD-06)", Y, Y, Y],
        ["Success fee, when the refund reaches your bank", "None", "2% + GST", "2% + GST"],
        ["Visit to the GST office, if needed", "₹500 to ₹2,500 per visit", "₹500 to ₹2,500 per visit", "₹500 to ₹2,500 per visit"],
        ["Best for", "Extra money in the cash ledger", "Exports, inverted duty", "A notice on a refund filed by someone else"],
      ] }],
    }],
    extras: [
      { h: "How the success fee works (Plans B and C)", p: ["Fixed fee + 2% + GST of the refund the department sanctions, paid when the money reaches your bank. If nothing is sanctioned, there is no success fee. If part is sanctioned, the 2% is on that part. In Plan C, it is on the refund released after your notice. The 2% applies to refunds up to ₹50 lakh. For a refund above ₹50 lakh, we agree the success-fee rate with you before we start. The success fee is not charged on interest. Example (Plan B): a ₹10 lakh refund = ₹4,999 + ₹20,000 = ₹24,999 + GST."] },
      { h: "Bigger claims", p: ["More than 100 invoices, several months in one claim, or a notice with a large dispute: we quote after we see your data, and tell you the amount before we start."] },
      { h: "Certificate for some claims", p: ["For some refund types above ₹2 lakh, the form needs a certificate from a qualified professional (Annexure 2) that the tax was not passed on to others. It is not needed for exports or for refund of unused input tax credit (inverted duty). We tell you at the start if your claim needs it. Its fee is separate."] },
      { h: "What the department does", p: ["It sends an acknowledgement or a deficiency memo within 15 days of your application. The final order is due within 60 days of a complete application, and interest is payable if it is late. The officer decides the claim. We cannot promise the amount or the timing."] },
      { h: "Visits", p: ["Physical visit to the GST office, if needed: ₹500 to ₹2,500 + GST per visit, depending on the office location. Travel is paid on actuals. We tell you the visit fee before the first visit. Some cases need several visits; we cannot fix the number, and you can stop at any time."] },
    ],
    exclude: [
      "The certificate fee, where it is needed.",
      "Tax, interest and late fees. You pay these directly to the government.",
      "Pending returns. The portal needs them filed. We file them at ₹500 a month (NIL) or ₹1,200 a month (with data).",
      "Appeals against a rejection. These are quoted separately.",
    ],
    need: [
      "GST login, or OTP help while we file.",
      "Your sales and purchase invoices for the claim period, in Excel.",
      "Exports: shipping bills, LUT, and BRC or FIRC.",
      "Inverted duty: HSN and rate list of your inputs and your products.",
      "Cash ledger: your ledger statement and the challans.",
      "For a notice: the notice and the refund application already filed.",
    ],
    terms: [
      ...COMMON_TERMS,
      "The fixed fee is paid in advance. The success fee is paid when the refund reaches your bank, on the amount sanctioned.",
      "We start after we receive the fee and your complete data.",
    ],
  },

  "GST Job Work ITC-04": {
    solve: solve(
      ["Goods not back in 1 year?", "We check every challan against the 1-year limit (3 years for capital goods) and tell you which are close."],
      ["Challans all over the place?", "We put them in one list, job worker by job worker."],
      ["Not sure when to file?", "Once a year up to ₹5 crore turnover, twice a year above. We track the date."],
      ["Need proof of filing?", "You get the ARN on WhatsApp."],
    ),
    matrices: [{
      plans: ["A · Small", "B · Regular", "C · High volume"], recommended: -1,
      groups: [{ h: "", rows: [
        ["Challan entries per ITC-04", "Up to 50", "51 to 200", "201 to 500"],
        ["Check of challans sent and received back", Y, Y, Y],
        ["List of goods pending with each job worker", Y, Y, Y],
        ["Check against the 1-year and 3-year limits at filing", Y, Y, Y],
        ["ITC-04 drafted and filed on the portal", Y, Y, Y],
        ["Mid-year check of goods near the time limit", N, Y, Y],
        ["Job-worker-wise matching and summary", N, N, Y],
      ] }],
    }],
    extras: [
      { h: "No Excel?", p: ["We can make it from your delivery challans. Photos, PDFs or diaries: ₹25 + GST per challan, minimum ₹500, on top of the plan fee. We count the challans and tell you the amount before we start. Example: 120 challans in Excel = ₹2,999 + GST. The same 120 from paper challans = ₹2,999 + ₹3,000 = ₹5,999 + GST."] },
      { h: "More than 500 entries", p: ["We quote after we count your entries, and tell you the amount before we start."] },
      { h: "Do you need to file?", p: ["Turnover up to ₹5 crore in the previous year: ITC-04 once a year, by 25 April. Turnover above ₹5 crore: twice a year, by 25 October and 25 April. If nothing moved in the period (no goods sent, and none received back from a job worker), there is nothing to file. Goods received back in the period must be filed, even if you sent nothing new."] },
      { h: "Why the time limit matters", p: ["If inputs do not come back within 1 year, or capital goods within 3 years, they are treated as supplied, from the day they were sent. Tax and interest become payable. Moulds, dies, jigs, fixtures and tools are outside this limit."] },
    ],
    exclude: [
      "Daily delivery challans and e-way bills. These are a separate service.",
      "Tax, interest or any penalty on goods not returned in time. You pay these directly.",
      "Past periods. Each past ITC-04 is filed at the plan fee for its entries.",
    ],
    need: [
      "Your challan list in our Excel format, before we start: job worker name and GSTIN (or state, if the job worker is unregistered), goods, input or capital goods, nature of job work, HSN, quantity, value, challan numbers and dates sent and received.",
      "GST login, or OTP help while we file.",
    ],
    terms: [
      "Fees are professional fees only. Government fees, tax, interest and penalty, if any, are not included.",
      "Fee is paid in advance, before we file.",
      "We start after we receive the fee and your complete data. To file by the due date, send them at least 5 working days before it.",
    ],
  },

  "GST Composition Scheme": {
    solve: solve(
      ["Monthly returns a worry?", "Only a quarterly CMP-08 and one annual GSTR-4."],
      ["Data not ready?", "Give us only your bank statement (Bank-Led)."],
      ["Which rate, how much tax?", "1% traders, 5% restaurants, 6% services. We calculate it."],
      ["Near the turnover limit?", "We warn you before ₹1.5 crore (goods) or ₹50 lakh (services)."],
    ),
    includeGroups: [
      { h: "Summary package includes", items: [
        "4 quarterly Form CMP-08 filings and 1 annual GSTR-4.", "Inward RCM tax calculation.", "Challan generation and filing receipts.",
        "Turnover alert before you cross ₹1.5 crore (goods) or ₹50 lakh (services)." ] },
      { h: "Bank-Led package includes", items: [
        "Everything in Summary.", "Categorising business credits from your bank statements.", "Separating loans, transfers and capital.", "Turnover working and tax liability schedule." ] },
    ],
    includeNote: "Each price covers the whole year: four quarterly CMP-08 filings and one annual GSTR-4. You can also pay per quarter, before each CMP-08. GSTR-4 is filed once all four quarters are paid.",
    exclude: [
      "Daily bookkeeping, Tally work or invoice-level data entry.",
      "ITC reconciliation. Composition dealers cannot claim ITC.",
      "Income tax returns.",
      "Notice replies.",
      "Filing without the data listed above.",
    ],
    need: [
      "Summary: a ready Excel with your sales and also your purchases. GSTR-4 asks for the year's purchases from registered suppliers (with and without reverse charge), from unregistered suppliers and any import of services.",
      "Bank-Led: your bank statements, your purchase details for GSTR-4, and an annual signed declaration of which credits are business turnover and which are personal or capital.",
    ],
    terms: [
      ...COMMON_TERMS,
      "Complete data must reach us in time for each filing due date. Late fees or interest caused by late, incomplete or incorrect data are the client's responsibility.",
      "If your bank statements are very large, we will tell you before we start work.",
    ],
  },

  "Digital Signature Certificate (DSC)": {
    solve: solve(
      ["Token not detected?", "Fixed, free."],
      ["Video KYC stuck?", "We guide you."],
      ["Need it fast?", "About 30 minutes once documents are verified, in working hours."],
      ["PDF signing trouble?", "We show you."],
    ),
    matrices: [{ plans: ["Assisted service", "Basic service"], recommended: 0, groups: [{ h: "", rows: [
      ["Pentasign Class 3 certificate, Hype USB token and key ring (new DSC)", Y, Y],
      ["Document check by us", Y, N],
      ["Video KYC", "With our help", "You complete it"],
      ["Installation", "With our help", "Self-installation"],
      ["Delivery", "Kolkata same day*", "Courier from Kolkata, actual cost"],
      ["Ready in", "About 30 minutes*", "24 to 48 hours"],
      ["DSC support, full certificate life", "Free", "Free"],
      ["Support response", "Same day", "1 to 2 days"],
      ["PDF signing help", "Free", "Free"],
      ["Late-night DSC service", "Extra", "Not available"],
    ] }] }],
    notes: ["* Same day if your documents are verified by 3 PM and our delivery partner is available. About 30 minutes counts once documents are verified and the certifying authority responds, within working hours."],
    extras: [
      { h: "Assisted service prices (final)", table: { head: ["Certificate type", "1 year", "2 years", "3 years"], rows: [
        ["Signature (individual or organisation)", "₹1,890", "₹2,070", "₹2,660"],
        ["Combo: signature and encryption (individual or organisation)", "₹2,900", "₹3,250", "₹4,430"],
        ["DGFT signature", "₹3,130", "₹3,490", "₹4,670"],
        ["Foreign individual, signature", "₹5,900", "₹7,030", "₹9,680"],
        ["Foreign individual, combo", "₹10,090", "₹12,340", "₹17,650"],
      ] }, p: ["Already hold a Hype token (for example, renewing)? Deduct ₹390 from any Assisted price. We do not sell tokens separately; a token comes only with a new certificate."] },
      { h: "Basic service prices (final)", table: { head: ["Certificate type", "1 year", "2 years", "3 years"], rows: [
        ["Signature (individual or organisation)", "₹1,590", "₹1,790", "₹2,390"],
        ["Combo: signature and encryption", "₹2,590", "₹2,990", "₹4,190"],
        ["DGFT signature", "₹2,890", "₹3,190", "₹4,390"],
      ] }, p: ["Foreign individual certificates are available in the Assisted service only."] },
      { h: "Optional services", table: { head: ["Service", "Price"], rows: [
        ["Late-night DSC issuance (9 PM to 8 AM), Kolkata only", "₹1,000 extra"],
        ["DSC technical support: driver, token, signing a PDF, portal problems", "Free for the full life of the certificate"],
        ["Late-night technical support until 2 AM (MCA, GST, Income Tax, EPFO), per incident", "₹1,000"],
      ] }, p: ["Technical support is by phone or screen share. Response is within 1 to 2 working days in Basic and the same working day in Assisted. Late-night services depend on our team's availability: confirm with us before your deadline, because we start only after we confirm. Problems unrelated to the DSC, such as your computer or internet, are ₹500 per issue."] },
      { h: "Delivery", p: ["Kolkata: porter or courier, the same day if documents are verified by 3 PM and our delivery partner is available, otherwise the next working day. Other cities: courier from Kolkata. Or collect from our Kolkata office. Courier and porter charges are at actual cost. DSC work is done at our Kolkata office."] },
      { h: "Documents to keep ready: Proprietorship", items: [
        "With GST registration: applicant photo, PAN card and Aadhaar card; GST registration certificate.",
        "Without GST registration: applicant photo, PAN card and Aadhaar card; MSME certificate or any proprietorship business proof; bank statement (latest, within 3 months)." ] },
      { h: "Documents to keep ready: Partnership firm", items: [
        "With GST registration: applicant photo, PAN card and Aadhaar card; GST registration certificate; partnership deed.",
        "Without GST registration: applicant photo, PAN card and Aadhaar card; partnership deed; firm PAN card; firm bank statement (latest, within 3 months).",
        "If the applicant is not a partner: an authority letter signed by any one partner named in the deed." ] },
      { h: "Documents to keep ready: Company", items: [
        "With GST registration: applicant photo, PAN card and Aadhaar card; GST registration certificate.",
        "Without GST registration: applicant photo, PAN card and Aadhaar card; company PAN card; company bank statement (latest, within 3 months); incorporation certificate.",
        "If the applicant is not a director: an authority letter signed by a director or the company secretary on the MCA site, with that person's PAN card." ] },
      { h: "Documents to keep ready: AOP / BOI", items: [
        "With GST registration: applicant photo, PAN card and Aadhaar card; GST registration certificate; memorandum copy with member list.",
        "Without GST registration: applicant photo, PAN card and Aadhaar card; association PAN card; registration certificate; association bank statement (latest, within 3 months); memorandum copy with member list.",
        "If the applicant is not a member: an authority letter signed by a member, with that member's PAN card." ] },
      { h: "Documents to keep ready: NGO / Trust / Society", items: [
        "With GST registration: applicant photo, PAN card and Aadhaar card; GST registration certificate; society bye-laws, trust deed or memorandum copy with member list.",
        "Without GST registration: applicant photo, PAN card and Aadhaar card; trust or society PAN card; registration certificate; trust or society bank statement (latest, within 3 months); bye-laws, trust deed or memorandum copy with member list.",
        "If the applicant is not a member or trustee: an authority letter signed by a member or trustee, with that person's PAN card." ] },
      { h: "Documents to keep ready: other cases", items: [
        "Government DSC (authorised signatory): applicant photo, PAN card, government ID card, department PAN card copy. Video: speak the script shown and show the original PAN and ID card.",
        "Government DSC (employee account): applicant photo, PAN card and government ID card; the authorising person's photo, PAN card and government ID card; department PAN card copy; an authority letter in the applicant's name, signed and stamped by the authorising person; the same video.",
        "Company DSC where neither the applicant nor the authorising person is a director: Board Resolution or Power of Attorney in the authorising person's name, signed and stamped by a director or CS, with that director's or CS's PAN card.",
        "Organisation DSC video: speak the script shown, show your original PAN card and any proof of the organisation.",
        "Foreign company: applicant photo, passport and address proof; MOA and registration certificate; company bank statement (latest, within 3 months); list of directors on letterhead with stamp and signature; authority letter signed by a director if the applicant is not one. Video with original passport, address proof and any proof of the organisation.",
        "Foreign individual: video with original passport and address proof (water, telephone or electricity bill, or OCI card; latest, within 3 months).",
        "Individual DSC with PAN KYC: video with original PAN card and address proof (Aadhaar card, voter ID, driving licence or electricity bill).",
        "DGFT DSC: upload the IEC certificate with your documents and show it in the video. Other documents are the same as for your organisation type." ] },
      { h: "Good to know", items: ["Documents must be clear, complete and the latest.", "Where a video is needed, speak the script exactly as shown and keep your original documents in hand.", "We check your documents before we apply, so the application is not rejected for a missing paper."] },
    ],
    need: ["PAN, Aadhaar, photo, email and mobile number of the applicant, plus the documents for your organisation type above."],
    terms: [
      "Final price. Government fees, if any, are not included.",
      "Payment is made in advance for every order.",
      "The certificate is issued on your own documents, after video KYC by the certificate holder. The time taken depends on the provider and on complete documents.",
      "A lost token or a forgotten password needs a new DSC. That is a new application.",
      "Times such as \"within 30 minutes\" count within working hours.",
      "Orders cancelled after the KYC link is sent are not refunded.",
    ],
    ratesLine: "These are the rates on the day you read this page. If a rate changes before you pay, including a change by our certificate provider, we will update you first. An order that is already paid keeps the rate it was paid at.",
  },

  "Accounting and Cash-Flow Desk": {
    solve: solve(
      ["Cash stuck with customers?", "Every month you see who owes you, and for how many days."],
      ["Party ledgers not agreeing?", "We match your books with your bank and GSTR-2B, so differences show up early."],
      ["Unknown bank entries?", "One query sheet by the 10th. Once you answer, the books are locked."],
      ["Returns and TDS taking your time?", "We prepare GSTR-1, GSTR-3B and TDS from your books and file them once you approve."],
    ),
    matrices: [{ plans: ["A · Starter", "B · Business", "C · Growth", "D · Large"], recommended: 2, groups: [["Plan size", [["Entries per month", "Up to 120", "Up to 300", "Up to 600", "Up to 1,000"], ["Bank accounts included", "1", "3", "5", "8"], ["One-time setup fee (before GST)", "₹5,000", "₹10,000", "₹18,000", "₹25,000"]]], ["Your books", [["Books in Tally from your soft copies", "✓", "✓", "✓", "✓"], ["Bank reconciliation", "✓", "✓", "✓", "✓"], ["Query sheet for unknown entries by the 10th", "✓", "✓", "✓", "✓"], ["Senior accountant check, books locked by the 15th", "✓", "✓", "✓", "✓"]]], ["GST", [["GSTR-1 and GSTR-3B working and filing", "✓", "✓", "✓", "✓"], ["GSTR-2B matching", "✓", "✓", "✓", "✓"], ["Extra GSTIN", "Add-on", "Add-on", "Add-on", "Add-on"], ["GSTR-9 annual return", "Add-on", "Add-on", "Add-on", "Add-on"], ["GST refund, notices and replies", "Add-on", "Add-on", "Add-on", "Add-on"]]], ["TDS and advance tax", [["TDS working and quarterly return filing (26Q)", "✓", "✓", "✓", "✓"], ["TDS certificates (Form 16A) for your parties", "✓", "✓", "✓", "✓"], ["TDS credit matched with Form 26AS", "✓", "✓", "✓", "✓"], ["Correction of our own mistakes in your TDS return", "✓", "✓", "✓", "✓"], ["Advance tax calculation every quarter", "✓", "✓", "✓", "✓"], ["Salary TDS return (24Q) and Form 16", "✓", "✓", "✓", "✓"], ["Replies to TDS notices on returns we filed", "✓", "✓", "✓", "✓"], ["TDS notices for periods before we started, income tax return", "Add-on", "Add-on", "Add-on", "Add-on"]]], ["Reports you receive", [["Debtor and creditor ageing", "✓", "✓", "✓", "✓"], ["Sales and expense breakup", "✓", "✓", "✓", "✓"], ["Cash-flow and money-stuck report", "✓", "✓", "✓", "✓"], ["Monthly P&L and Balance Sheet", "✓", "✓", "✓", "✓"], ["Detailed MIS: branch, product or party wise", "✗", "✗", "✓", "✓"]]], ["Add-on services", [["Payroll: salary, payslips, PF and ESIC returns", "Add-on", "Add-on", "Add-on", "Add-on"], ["Invoices, e-invoices and e-way bills prepared by us", "Add-on", "Add-on", "Add-on", "Add-on"], ["Extra bank accounts, payment gateways, handwritten books, bill typing", "Add-on", "Add-on", "Add-on", "Add-on"], ["ROC filings, registrations, old books (backlog)", "Add-on", "Add-on", "Add-on", "Add-on"]]]].map(([h, rows]) => ({ h, rows })) }],
    notes: ["Add-on means it is not in the plan fee. We tell you the fee in writing before we start, and nothing is charged without your yes. Filing means we file once you approve the draft and the tax is paid. Starter filing covers 1 GSTIN. Above 1,000 entries: custom plan, quoted after a short call."],
    extras: [
      { h: "How we work", items: [
        "Our team works in the background. We keep your books in Tally, on our own secure server. We do not need to visit you.",
        "You send soft copies of bills, bank statements and sales and purchase files by email, WhatsApp or Google Drive, by the 7th of each month.",
        "We confirm in writing what we received, so nothing gets lost on WhatsApp.",
        "By the 10th we send one query sheet for unknown entries. By the 15th, once you answer, we lock the books and send your reports.",
        "A senior accountant checks your books before they are locked.",
        "Your data stays yours and confidential. On request, we hand back your Tally data." ] },
      { h: "Which plan fits, and what counts as an entry", p: [
        "Typical fit: freelancers and small service firms 60 to 120 entries, shops 200 to 300, traders 450 to 600, wholesalers and manufacturers 800 to 1,000. Before we start, we count your last 3 months and tell you the plan.",
        "One entry is one bill, one bank line, one payment or receipt, or one adjustment. Items inside a normal bill do not count, so a bill with 20 items is one entry. For UPI, card and gateway money, each settlement is one entry, not each customer payment." ] },
      { h: "If your business also has", table: { head: ["Your business", "What we do", "Fee + GST"], rows: [
        ["You sell on Amazon, Flipkart, Meesho, Shopify or similar", "Match every payout to your orders, check commission, shipping and TCS, list returns and short payments", "₹3,000 a month for each platform, up to 500 orders"],
        ["Restaurant, cloud kitchen or several outlets", "Daily sales, delivery-app settlements, outlet-wise profit", "Quoted after a short call"],
        ["Exporter, payment gateway, extra GSTIN or extra bank accounts", "Set up and booked as part of your plan", "Quoted after we see your data"],
      ] }, p: ["Large business, PO work, bills with many item lines, TDS-heavy files, handwritten books, or more than 1,000 entries? Send us a sample of your data. We study it and send a written quote within 2 working days. Larger businesses can also have a named team of a senior and a junior accountant with backup. Nothing is charged without your written yes.", "Example: an online seller on 2 platforms with about 120 other entries. Starter ₹7,999 + 2 platforms ₹6,000 = ₹13,999 + GST ₹2,520 = ₹16,519 a month, with setup ₹5,000 + GST once."] },
    ],
    exclude: ["Collecting payments from your parties, calls or visits to them, cash handling and bank visits.", "Stock valuation, budgeting and forecasting."],
    need: ["Soft copies of bills, bank statements and sales and purchase files, by the 7th of each month.", "For salary TDS: the salary sheet and your employees' investment declarations (Form 12BB) before each quarter ends."],
    terms: [
      "Fees are professional fees, before 18% GST. Government fees, tax, interest and late fees are not included.",
      "There is no minimum period. The monthly fee is paid in advance, before the month starts, and we start work after payment. The one-time setup fee is paid before we start and is not refunded.",
      "To stop, tell us in writing before the 25th. We stop from the next month. A month already paid is not refunded.",
      "If your data reaches us after the 7th, we cannot promise your filing before the due date. Any late fee is yours.",
      "Your plan is set by your busiest month in the last 3 months. Above your plan, each extra entry is ₹30 + GST, never more than the next plan, and we tell you before the month ends.",
      "Wrong declarations for salary TDS are the employee's and your responsibility.",
      "Re-work because of wrong or late data, and changes after the books are locked, are ₹750 per hour.",
    ],
  },

  "Private Limited Company Registration": {
    solve: solve(
      ["Not sure what you will pay?", "Our fee, digital signatures and government charges are on separate lines, in writing before you pay."],
      ["Worried your name will be rejected?", "We check name options first. If MCA rejects one, we apply again with up to 2 new names at no extra professional fee."],
      ["What comes after the certificate?", "A dated checklist: first board meeting, share certificates, first auditor, bank account and the commencement filing within 180 days."],
      ["Papers scattered across emails?", "All your company documents in one organised folder, with a note on each."],
    ),
    includeNote: "Our fee covers the work below. The numbers for PAN, TAN, EPFO and ESIC are issued by the departments.",
    include: [
      "Director Identification Number (DIN) for 2 directors.",
      "Class 3 Digital Signature Certificates with USB token for the 2 directors and the witness, if you take them from us.",
      "Name check before you pay, and name approval with MCA.",
      "MOA and AOA, drafted for your business objects.",
      "SPICe+ and all linked forms prepared by our team and certified by a practising professional.",
      "Certificate of Incorporation, company PAN and TAN.",
      "EPFO and ESIC registration, and Professional Tax registration where it applies.",
      "Support to open the company current account: first board resolution and the list of documents the bank asks for.",
      "Complimentary: Udyam (MSME) registration, worth ₹999, once your PAN is issued.",
      "Complimentary: incorporation master file and a post-incorporation checklist with due dates.",
      "One WhatsApp contact and a status message at every stage.",
    ],
    extras: [
      { h: "Our charges", table: { head: ["Item", "Amount"], rows: [
        ["Our fee: name check and approval, MOA and AOA, SPICe+ and linked forms, certification, PAN and TAN, EPFO and ESIC, bank support", "₹9,000"],
        ["GST @ 18% on our fee", "₹1,620"],
        ["Our fee including GST", "₹10,620"],
        ["Digital signatures, Class 3 with USB token, 2 years: each Indian resident director ₹1,600 (2 directors)", "₹3,200"],
        ["Digital signature for the witness to the MOA and AOA (1 person)", "₹1,600"],
        ["Total before government charges (our fee with GST + digital signatures)", "₹15,420"],
      ] }, p: ["Optional: you may buy the Class 3 DSC yourself from any certifying authority, in each signer's own name, and send it to us. Then the digital signature charge does not apply, and the total is ₹10,620 plus government charges.", "Government charges, paid at actuals with receipt: stamp duty on MOA and AOA, MCA fees and name approval fee. Indicative for West Bengal, authorised capital up to ₹15 lakh: ₹500 to ₹1,700. We confirm the exact amount before you pay."] },
      { h: "How long it takes", p: ["About 7 to 15 working days from the day we receive complete documents and OTPs. MCA processing time is outside our control."] },
      { h: "Quoted separately, if you want it", items: ["Commencement of business filing (INC-20A), first auditor appointment (ADT-1), share certificates, GST registration, annual ROC filings, accounting and income tax.", "Statutory audit, done by an independent professional who sets their own fee."] },
    ],
    need: [
      "For each director: PAN, Aadhaar, passport size photo, email and mobile number.",
      "Address proof of each director: bank statement or utility bill, not older than 2 months.",
      "Registered office: rent agreement or ownership paper, owner NOC, and a latest utility bill.",
      "2 to 5 name options, what your company will do, authorised capital and how the shares will be held.",
      "Witness: PAN and identity proof.",
    ],
    terms: [
      "Our fee is for professional work. Government charges are paid at actuals and you get every receipt.",
      "Our fee, the DSC charges and the estimated government charges are paid in full, in advance, before we start.",
      "Once a DSC is generated or a name is applied, those charges cannot be refunded.",
      "A DSC from outside must be Class 3, valid, in the signer's own name, with details matching PAN and Aadhaar. We cannot be responsible for delays caused by it.",
      "Prices assume authorised capital up to ₹15 lakh, Indian resident directors and a registered office in West Bengal. For anything different (more directors, capital above ₹15 lakh, NRI or foreign directors, another state) we quote before we start.",
    ],
  },

  "Private Limited ROC Annual Compliance": {
    solve: solve(
      ["Afraid of missing a deadline?", "You get a dated calendar for the year, and we remind you before each date."],
      ["Not sure which filings apply to you?", "We tell you which ones apply and which do not. You do not pay for a filing you do not need."],
      ["Fear of surprise bills?", "One fee a year for the regular filings. Event filings have a price list."],
      ["Minutes and registers pending?", "We draft the notices, minutes and registers, and keep them updated."],
    ),
    includeNote: "One yearly fee covers: board meetings and AGM paperwork, AOC-4 and MGT-7A, auditor appointment (ADT-1), DIR-3 KYC for 2 directors, director disclosures and statutory registers. In the first year also: first board meeting, first auditor, share certificates and INC-20A.",
    extras: [
      { h: "Event filings: when something changes", table: { head: ["Event", "Our fee + 18% GST"], rows: [
        ["Board resolution, each", "₹750"], ["DIR-3 KYC for an extra director, each", "₹1,499"], ["Share transfer", "₹2,499"],
        ["Change of registered office within the same ROC", "₹3,499"], ["Appointment or resignation of a director", "₹4,499"],
        ["Increase in authorised capital", "₹5,499"], ["Allotment of shares", "₹4,999"],
        ["Increase in authorised capital and allotment of shares, together", "₹8,999"], ["Loan charge creation (CHG-1)", "₹4,999"],
        ["Change in MOA, AOA, company name or object", "₹5,499"],
      ] }, p: ["Government fees are extra, at actuals. Where a practising professional must sign, that cost is inside our fee. Your plan includes 2 event filings a year at no fee from us. After that, 20% off these rates."] },
      { h: "What we do for you, and when", table: { head: ["Filing or task", "When it is due", "If missed"], rows: [
        ["Board meetings: notice, agenda and minutes", "During the year", "Fine on the company and directors"],
        ["Annual General Meeting: notice, minutes and attendance register", "First AGM within 9 months of the financial year end; later AGMs within 6 months", "Fine on the company and directors"],
        ["AOC-4 (financial statements) and MGT-7A (annual return)", "AOC-4 within 30 days of the AGM; MGT-7A within 60 days", "₹100 per day extra fee on each form"],
        ["Auditor appointment form ADT-1 at each AGM", "Within 15 days of the AGM", "Fine on the company"],
        ["DIR-3 KYC for 2 directors", "By 30 September each year", "₹5,000 per director"],
        ["Director interest disclosure (MBP-1) and statutory registers", "Each financial year", "Fine on the company and directors"],
        ["First year: first board meeting", "Within 30 days of incorporation", "Fine on the company and directors"],
        ["First year: first auditor appointment", "Board within 30 days; ADT-1 within 15 days after", "Fine on the company"],
        ["First year: share certificates for every shareholder", "Within 60 days of incorporation", "Fine on the company and directors"],
        ["First year: commencement of business filing (INC-20A)", "Within 180 days of incorporation", "₹50,000 on the company, and ₹1,000 a day on each officer"],
        ["MSME-1, only if you owe a micro or small supplier for more than 45 days", "30 April and 31 October", "Penalty under the MSMED Act"],
        ["DPT-3, only if the company has loans or deposits to report", "By 30 June", "Fine and extra fee"],
      ] }, p: ["For AOC-4 and MGT-7A we need your audited financial statements. We file within the due date once you give them to us. If they come late, the late fee is on the company. We tell you which of the \"only if it applies\" filings apply to you."] },
    ],
    exclude: [
      "Writing your books and finalising accounts (see Accounting and Cash-Flow Desk).",
      "Statutory audit and tax audit under section 44AB: done by an independent professional who sets their own fee.",
      "Company income tax return (ITR-6).",
      "GST registration and returns, TDS and payroll.",
      "Funding, ESOP, valuation and share restructuring work.",
      "Government fees, stamp duty, late fees and penalties. The company pays these at actuals.",
      "Companies that are not small companies (paid-up capital above ₹4 crore or turnover above ₹40 crore).",
    ],
    need: ["Your audited financial statements and documents on time, so we can file within the due dates."],
    terms: [
      "The annual fee is paid in full, in advance. It is not refunded once the plan year starts.",
      "The fee stays ₹11,999 + GST each year. We give 30 days notice before any change.",
      "DIR-3 KYC is covered for 2 directors. Each extra director is ₹1,499.",
      "Our fee does not include government fees, stamp duty or late fees.",
      "You send documents and audited statements on time. We cannot be responsible for late fees that come from late documents.",
    ],
  },

  "LLP Registration": {
    solve: solve(
      ["Not sure what you will pay?", "Our fee, digital signatures and government charges are on separate lines, in writing before you pay."],
      ["Worried your name will be rejected?", "We check name options first. If MCA rejects one, we apply again with up to 2 new names at no extra professional fee."],
      ["What comes after the certificate?", "A dated checklist: LLP agreement filing within 30 days, bank account, and the yearly Form 11 and Form 8 dates."],
      ["Papers scattered across emails?", "All your LLP documents in one organised folder, with a note on each."],
    ),
    includeNote: "Our fee covers the work below. LLP PAN and TAN are issued by the departments.",
    include: [
      "Designated Partner Identification Number (DIN) for 2 designated partners.",
      "Class 3 Digital Signature Certificates with USB token for the 2 designated partners, if you take them from us.",
      "Name check before you pay, and name approval with MCA.",
      "LLP agreement drafted for your business, signed and filed with MCA (Form 3) within 30 days.",
      "FiLLiP and all linked forms prepared by our team and certified by a practising professional.",
      "Certificate of Incorporation, LLP PAN and TAN.",
      "Complimentary: Udyam (MSME) registration, worth ₹999, once your PAN is issued.",
      "Complimentary: incorporation master file and a post-incorporation checklist with due dates.",
      "Bank account support, and one WhatsApp contact with a status message at every stage.",
    ],
    extras: [
      { h: "Our charges", table: { head: ["Item", "Amount"], rows: [
        ["Our fee: name check and approval, LLP agreement drafted and filed (Form 3), FiLLiP, certification, LLP PAN and TAN, bank support", "₹7,999"],
        ["GST @ 18% on our fee", "₹1,440"],
        ["Our fee including GST", "₹9,439"],
        ["Digital signatures, Class 3 with USB token, 2 years: ₹1,600 for each designated partner (2 partners). No witness is needed for an LLP", "₹3,200"],
        ["Total before government charges (our fee with GST + digital signatures)", "₹12,639"],
      ] }, p: ["Optional: you may buy the Class 3 DSC yourself from any certifying authority, in each partner's own name, and send it to us. Then the digital signature charge does not apply, and the total is ₹9,439 plus government charges.", "Government charges, paid at actuals with receipt: name reservation ₹200, FiLLiP fee, Form 3 fee and stamp duty on the LLP agreement. Indicative for West Bengal, contribution up to ₹1 lakh: ₹900 to ₹1,100. The FiLLiP fee rises with contribution: ₹2,000 (₹1 to 5 lakh), ₹4,000 (₹5 to 10 lakh), ₹5,000 (above ₹10 lakh). We confirm the exact amount before you pay."] },
      { h: "Quoted separately, if you want it", items: [
        "Yearly ROC filings (Form 11, Form 8) and DIR-3 KYC: see LLP ROC Annual Compliance, ₹5,999 + GST a year.",
        "LLP income tax return (ITR-5): from ₹4,999 + GST when your accounts are ready. GST registration, accounting and TDS: see their prices.",
        "LLP audit, done by an independent professional with their own fee. It is needed if turnover is above ₹40 lakh or contribution above ₹25 lakh.",
        "Each additional designated partner: DSC ₹1,600, and no extra fee for the DIN. NRI or foreign partner, including apostille and notarisation: from ₹9,999 + GST.",
        "A custom LLP agreement with special profit-sharing or exit clauses: ₹1,500 + GST. Applying again after the 2 free new names: ₹500 + GST each time.",
      ] },
    ],
    need: [
      "For each partner: PAN, Aadhaar, passport size photo, email and mobile number.",
      "Address proof of each designated partner: bank statement or utility bill, not older than 2 months.",
      "Registered office: rent agreement or ownership paper, owner NOC, and a latest utility bill.",
      "2 to 5 name options, what the LLP will do, how much each partner puts in, and how profit will be shared.",
    ],
    terms: [
      "Our fee is for professional work. Government charges are paid at actuals and you get every receipt.",
      "Our fee, the DSC charges and the estimated government charges are paid in full, in advance, before we start.",
      "Once a DSC is generated or a name is applied, those charges cannot be refunded.",
      "A DSC from outside must be Class 3, valid, in the partner's own name, with details matching PAN and Aadhaar. We cannot be responsible for delays caused by it.",
      "Prices assume 2 Indian resident designated partners and a registered office in West Bengal. For anything different we quote before we start.",
      "If MCA returns a form more than 2 times because documents are unclear, old or incomplete, a re-processing fee of ₹1,499 + GST applies.",
      "It takes about 7 to 15 working days from the day we receive complete documents and OTPs. MCA processing time is outside our control.",
    ],
  },

  "LLP ROC Annual Compliance": {
    solve: solve(
      ["Afraid of missing a deadline?", "You get a dated calendar for the year, and we remind you before each date."],
      ["Worried about strike-off or a blocked DIN?", "An LLP that does not file Form 8 and Form 11 for 2 years can be struck off. A missed DIR-3 KYC deactivates the DIN. We track both."],
      ["Fear of surprise bills?", "One fee a year for the regular filings. Event filings have a price list."],
      ["Not sure which forms apply?", "We tell you which forms fall due for your LLP and when, based on your incorporation date."],
    ),
    includeNote: "One yearly fee covers: Form 11 (annual return), Form 8 (statement of account and solvency), DIR-3 KYC for 2 designated partners when it falls due, a dated filing calendar with reminders, and 1 event filing from the list below at no fee from us.",
    extras: [
      { h: "Event filings: when something changes", table: { head: ["Event", "Our fee + 18% GST"], rows: [
        ["DIR-3 KYC for an extra designated partner, each", "₹1,499"], ["Change of registered office (Form 15)", "₹2,999"],
        ["Appointment, resignation or change of a partner or designated partner (Form 4)", "₹3,499"],
        ["Change in the LLP agreement or capital contribution (Form 3)", "₹3,499"], ["Change of LLP name (Form 5)", "₹3,999"],
      ] }, p: ["Government fees are extra, at actuals. Where a practising professional must sign, that cost is inside our fee. Your plan includes 1 event filing a year at no fee from us. After that, 20% off these rates."] },
      { h: "What we do for you, and when", table: { head: ["Filing or task", "When it is due", "If missed"], rows: [
        ["Form 11: annual return", "By 30 May, for the year ended 31 March", "Late fee, a multiple of the normal fee that grows with every delay"],
        ["Form 8: statement of account and solvency", "By 30 October", "Late fee, a multiple of the normal fee that grows with every delay"],
        ["DIR-3 KYC for 2 designated partners", "Once every 3 years, by 30 June of the due year", "₹5,000 per partner, and the DIN is deactivated"],
        ["Any change in partners or in the LLP agreement", "Within 30 days of the change", "Late fee"],
        ["Form 11 and Form 8 in your first year", "Depends on your incorporation date. We tell you which fall due", "None, if not due"],
      ] }, p: ["The LLP agreement filing (Form 3) is part of your incorporation, not this plan. For Form 8 we need your finalised accounts. If your turnover is above ₹40 lakh or contribution above ₹25 lakh, the accounts must be audited first by an independent professional. We file within the due date once you give them to us. If they come late, the late fee is on the LLP."] },
    ],
    exclude: [
      "Writing your books and finalising accounts (see Accounting and Cash-Flow Desk).",
      "LLP audit and tax audit under section 44AB: done by an independent professional who sets their own fee. LLP audit is needed if turnover is above ₹40 lakh or contribution above ₹25 lakh.",
      "LLP income tax return (ITR-5): from ₹4,999 + GST when your accounts are ready.",
      "GST registration and returns, TDS and payroll.",
      "Government fees, late fees and penalties. The LLP pays these at actuals.",
      "Form 11 where a practising Company Secretary must certify (turnover above ₹5 crore or contribution above ₹50 lakh). Quoted separately.",
      "Closure or strike-off of the LLP, and conversion to a company.",
    ],
    need: ["Your finalised accounts, and the audit report if audit applies, on time."],
    terms: [
      "The annual fee is paid in full, in advance. It is not refunded once the plan year starts.",
      "The fee stays ₹5,999 + GST each year. We give 30 days notice before any change.",
      "DIR-3 KYC is covered for 2 designated partners. Each extra partner is ₹1,499.",
      "Our fee does not include government fees or late fees.",
      "We cannot be responsible for late fees that come from late documents.",
    ],
  },

  "Partnership Firm Services": {
    solve: solve(
      ["Not sure what you will pay?", "Our fee, the stamp and notary cost and the government fee are on separate lines, in writing before you pay."],
      ["Worried partners will argue later?", "We draft a clear deed: profit share, capital, salary, interest, how a partner can leave, and what happens on closing."],
      ["Partner joining or leaving?", "A short checklist for the bank, PAN, GST and Udyam, so nothing stays in the old partners' names."],
      ["Closing a firm but tax and GST stay open?", "Dissolution includes the deed, the notice to the Registrar and the public notice. GST cancellation and the final ITR-5 are listed with their price."],
    ),
    include: [
      "Registration: partnership deed drafted for up to 3 partners, firm PAN, application to the West Bengal Registrar of Firms and follow-up until the certificate, bank account support, and a checklist for GST and Udyam. Udyam registration is complimentary.",
      "Adding a partner: supplementary deed of admission, intimation to the Registrar of Firms, and a checklist to update the bank, PAN and GST.",
      "Partner leaving: deed of retirement or removal with the settlement of capital and dues written down, intimation to the Registrar of Firms, the same update checklist, and public notice wording.",
      "Dissolution: dissolution deed, notice to the Registrar of Firms, public notice wording, and a closing checklist for the bank, GST and income tax.",
      "For every service: the final signed documents, filing receipts and one WhatsApp contact with a status message at every stage.",
    ],
    extras: [
      { h: "If you want these as well", table: { head: ["Item", "Our fee + 18% GST"], rows: [
        ["GST cancellation (REG-16) and final GST return (GSTR-10), on dissolution", "₹2,999"],
        ["Final income tax return (ITR-5) for the firm, with ready accounts", "₹4,999"],
        ["Deed for more than 3 partners, each extra partner", "₹500"],
        ["Special clauses in the deed (for example, a partner's exit formula, or a non-compete)", "₹1,500"],
      ] }, p: ["Government and other charges are extra, at actuals, with receipt: stamp paper for the deed, notary or registration of the deed, and the Registrar of Firms fee (₹300 for registration in West Bengal). We confirm the exact amount before you pay."] },
    ],
    exclude: [
      "Trade licence. The West Bengal Registrar of Firms needs it. We guide you, but the licence is applied for separately.",
      "Writing your books and finalising accounts (see Accounting and Cash-Flow Desk).",
      "Tax audit and other audit work, if your turnover needs it.",
      "Court dissolution or any dispute between partners. We do not appear in court.",
      "Valuation of goodwill or assets of the firm.",
      "Government charges, late fees and penalties. You pay these at actuals.",
    ],
    need: [
      "For each partner: PAN, Aadhaar, passport size photo and specimen signature, email and mobile number.",
      "Firm name options, business activity, capital of each partner and the profit-sharing ratio.",
      "Principal place of business: rent agreement or ownership paper, owner NOC and a latest utility bill. West Bengal also asks for the trade licence of that place.",
      "For adding, leaving or closing: the existing deed, the Registrar of Firms certificate and the latest ITR-5 and balance sheet, if any.",
      "For leaving or closing: the accounts, or a settlement figure agreed by all partners.",
    ],
    terms: [
      "Our fee is for professional work. Stamp, notary and government charges are paid at actuals, and you get every receipt.",
      "Our fee and the estimated charges are paid in full, in advance, before we start. It is not refunded once the deed is drafted or the application is made.",
      "Every deed must be signed by all partners, on stamp paper of the right value, and notarised or registered. We tell you the exact steps.",
      "Registration with the Registrar of Firms is not compulsory, but an unregistered firm cannot file a suit against a third party to enforce a contract. We tell you this before you decide.",
      "The Registrar of Firms in West Bengal has up to 30 days to issue the certificate. That time is outside our control.",
      "A partnership firm has no limited liability. Every partner is personally liable for the firm. An LLP or a private limited company gives limited liability: ask us about those.",
    ],
  },
};
