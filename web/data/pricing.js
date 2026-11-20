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
      "These are the rates on the day we send this quotation. If a rate changes before we start work, we will update you.",
    ],
  },
};
