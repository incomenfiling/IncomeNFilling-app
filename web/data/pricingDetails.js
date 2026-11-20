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
};
