// Deterministic rule-based intent matcher for Ira, the compliance concierge.
// No live backend — matched topics hand off to a real advisor on WhatsApp.

const KB = [
  { id: "gst", title: "GST Registration & Returns", emoji: "🧾", kw: ["gst", "goods and service", "gstr", "return", "refund", "e-way", "einvoice", "e-invoice", "itc", "input tax", "gst number", "gst registration"], reply: "Sure! 🧾 We handle everything GST — new registration, monthly GSTR-1 & 3B, annual returns, reconciliation and refunds. What kind of business is it?" },
  { id: "itr", title: "Income Tax / ITR Filing", emoji: "💰", kw: ["itr", "income tax", "tax return", "file tax", "salary", "capital gain", "tds", "tcs", "form 16", "advance tax", "return file", "tax bharna", "tax bharni"], reply: "Happy to help you file! 💰 We do all ITR types — salaried, capital gains, business and presumptive — plus TDS. What’s your main income source?" },
  { id: "inc", title: "Company / LLP Incorporation", emoji: "🏢", kw: ["company", "incorporat", "register a", "pvt ltd", "private limited", "llp", "opc", "startup", "partnership", "proprietor", "section 8"], reply: "Exciting! 🏢 We register Pvt Ltd, LLP, OPC and more — with PAN, TAN, DSC and GST all set up for you. Which type were you thinking of?" },
  { id: "roc", title: "ROC & Corporate Compliance", emoji: "📋", kw: ["roc", "annual return", "mgt", "aoc", "director", "din", "kyc", "share transfer", "board resolution", "auditor"], reply: "We’ve got your ROC compliance covered 📋 — annual returns (MGT-7, AOC-4), director changes, DIR-3 KYC and more. What’s coming up for you?" },
  { id: "acc", title: "Accounting & Bookkeeping", emoji: "📊", kw: ["account", "bookkeep", "payroll", "mis", "ledger", "balance sheet", "reconcil", "cfo", "books"], reply: "Absolutely 📊 — monthly bookkeeping, payroll, MIS reports and audit support, even virtual CFO. Roughly how many transactions a month?" },
  { id: "lic", title: "Licenses & Registrations", emoji: "📜", kw: ["license", "licence", "msme", "udyam", "fssai", "iec", "import export", "trade license", "pf", "esi", "shop act", "trademark", "iso", "dsc", "professional tax", "digital signature"], reply: "Yes! 📜 MSME/Udyam, FSSAI, IEC, PF/ESI, trade and shop licenses — all available. Which one do you need?" },
  { id: "notice", title: "Tax Notices & Advisory", emoji: "🛡️", kw: ["notice", "scrutiny", "assessment", "appeal", "advisory", "nri", "penalty", "defective", "demand"], reply: "Don’t worry — we handle this every day 🛡️. Income-tax & GST notices, scrutiny, appeals and NRI advisory. Do you have the notice with you?" },
];

// Whole-word match (short keywords like "pf", "mis", "ok" must not match inside other words).
// Keywords ending with a partial stem (e.g. "incorporat") still match as prefixes.
const STEMS = new Set(["incorporat", "bookkeep", "reconcil", "goods and service"]);
function has(s, w) {
  const e = w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp("(^|[^a-z0-9])" + e + (STEMS.has(w) ? "" : "s?") + "($|[^a-z0-9])", "i").test(s) || (STEMS.has(w) && s.includes(w));
}
function findKB(t) {
  const s = t.toLowerCase();
  return KB.find((k) => k.kw.some((w) => has(s, w)));
}

export function botReply(text) {
  const s = text.toLowerCase().trim();
  if (/^(hi|hey|hello|good (morning|evening|afternoon)|namaste|hii?|start)\b/.test(s) || s === "") {
    return { text: "Hello! 👋 Welcome to Income N Filing. How can we help you today? Just tap a topic or type your question 😊", chips: ["GST registration", "File my ITR", "Start a company", "I got a tax notice"] };
  }
  if (/\b(address|location|office|where|kahan|kaha|map)\b/.test(s)) {
    return { text: "📍 We’re in Kasba, Kolkata: Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kolkata 700039. We serve clients across India online.", chips: ["Book a call", "Chat on WhatsApp"] };
  }
  if (/\b(time|timing|timings|hours|open|khula|khule)\b/.test(s)) {
    return { text: "🕙 We’re available Monday to Saturday, 10 AM – 7 PM. Message us anytime and we’ll reply in working hours.", chips: ["Book a call", "Chat on WhatsApp"] };
  }
  if (/\b(documents?|docs?|papers?|kagaz|kagzat)\b/.test(s)) {
    return { text: "📄 Documents depend on the service (usually PAN, Aadhaar, address proof and bank details). Tell us what you need and our advisor will share the exact checklist.", chips: ["GST registration", "File my ITR", "Start a company", "Chat on WhatsApp"] };
  }
  if (/\b(price|prices|pricing|cost|fees?|charges?|quote|how much|rate|rates|kitna|kitne|paisa|paise)\b/.test(s)) {
    return { text: "Great question! 😊 We don’t have fixed prices — every case is different, so we scope it on a free call and you only pay for what you need. Shall I set that up?", wa: true, lead: true, chips: ["Yes, book a free call", "See all services"] };
  }
  if (s.split(/\s+/).length <= 4 && /\b(thank|thanks|thx|ok|okay|cool|got it|nice|shukriya|dhanyavad)\b/.test(s)) {
    return { text: "You’re most welcome! 🙏 Whenever you’re ready, tap the green button and our advisor will continue with you on WhatsApp.", wa: true };
  }
  if (/\b(human|advisor|agent|person|talk to|call me|whatsapp|expert|baat|call)\b/.test(s)) {
    return { text: "Of course! 👩‍💼 Our advisors usually reply within a few working hours. Let me connect you on WhatsApp.", wa: true, lead: true, chips: ["Chat on WhatsApp"] };
  }
  const kb = findKB(s);
  if (kb) return { text: kb.reply, service: kb, wa: true, lead: true, chips: ["Book a free call", "Ask about something else"] };
  return { text: "Got it 👍 We help with GST, income tax, starting a company, accounting, licenses and tax notices. Pick one below or tell me in your own words!", chips: ["GST registration", "File my ITR", "Start a company", "Accounting help", "Tax notice"] };
}

export function nowTime() {
  const d = new Date();
  let h = d.getHours();
  const m = d.getMinutes();
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return `${h}:${String(m).padStart(2, "0")} ${ap}`;
}

export const TILES = [
  { emoji: "🧾", title: "GST Registration & Returns", sub: "New GSTIN, GSTR-1 & 3B, refunds", send: "GST registration" },
  { emoji: "💰", title: "Income Tax / ITR Filing", sub: "Salaried, capital gains, business", send: "File my ITR" },
  { emoji: "🏢", title: "Start a Company", sub: "Pvt Ltd, LLP, OPC — fully set up", send: "Start a company" },
  { emoji: "🛡️", title: "I Got a Tax Notice", sub: "Scrutiny, appeals, advisory", send: "I got a tax notice" },
];
