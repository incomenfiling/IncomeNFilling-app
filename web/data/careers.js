// Fallback openings, used when the Google Sheet "INF Careers Openings (website)" cannot be read.
// The live list is edited in that Sheet (see lib/careers.js). Keep both in step when roles change.
const common = { type: "Full time", experience: "", email: "hr@incomenfiling.com", active: true };
const acc = ["Enter and reconcile client transactions in Tally", "Prepare GST and TDS working for review", "Reconcile bank and party balances", "Deliver monthly reports on time to the team lead"];
const accReq = ["Commerce background", "Working knowledge of Tally and Excel", "Understanding of GST and TDS basics"];
const hr = ["Post openings and screen candidates", "Schedule interviews and update the hiring tracker", "Prepare onboarding documents and attendance records", "Follow up with candidates in writing"];
export const FALLBACK_OPENINGS = [
  { ...common, slug: "sales-executive-wfh", role: "Sales Executive", department: "Sales", city: "India", mode: "WFH",
    summary: "Talk to people who enquire about our tax and compliance services, explain the process and fees, and follow up until they decide.",
    responsibilities: ["Call and follow up enquiries from the website, ads and WhatsApp", "Explain services and fees exactly as quoted in writing", "Update every lead in the tracker the same day", "Share quotations approved by the team"],
    requirements: ["Clear spoken English and Hindi", "Own laptop or phone and a stable internet connection", "Basic understanding of tax or compliance services is a plus"] },
  { ...common, slug: "hr-executive-kolkata", role: "HR Executive", department: "HR", city: "Kolkata", mode: "WFO",
    summary: "Run hiring and day-to-day people work for our Kolkata team from the Kasba office.", responsibilities: hr,
    requirements: ["Good communication in English and Hindi", "Comfort with Google Sheets and email", "Ability to keep clean records"] },
  { ...common, slug: "hr-executive-bengaluru", role: "HR Executive", department: "HR", city: "Bengaluru", mode: "WFO",
    summary: "Run hiring and day-to-day people work for our Bengaluru team.", responsibilities: hr,
    requirements: ["Good communication in English", "Comfort with Google Sheets and email", "Ability to keep clean records"] },
  { ...common, slug: "accountant-kolkata", role: "Accountant", department: "Accounts", city: "Kolkata", mode: "WFO",
    summary: "Maintain client books in Tally and support GST and TDS work at our Kolkata office. One person prepares and another checks every file.", responsibilities: acc, requirements: accReq },
  { ...common, slug: "accountant-bengaluru", role: "Accountant", department: "Accounts", city: "Bengaluru", mode: "WFO",
    summary: "Maintain client books in Tally and support GST and TDS work at our Bengaluru team. One person prepares and another checks every file.", responsibilities: acc, requirements: accReq },
];
