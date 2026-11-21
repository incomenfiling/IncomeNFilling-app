import { ToolShell, tableWrap, th, td } from "@/components/tools/ToolShell";
import { Sec, T } from "@/components/layout/InfoPage";

export const metadata = {
  title: { absolute: "Tax and Compliance Due Dates: GST, TDS, Advance Tax, ROC | Income N Filing" },
  description: "Recurring GST, TDS, PF, ESI, advance tax, income tax and ROC due dates in one list, with the usual filing form for each. By Income N Filing, Kolkata.",
  alternates: { canonical: "/tools/due-date-calendar" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/tools/due-date-calendar", title: "Tax and compliance due dates | Income N Filing", description: "GST, TDS, advance tax, income tax and ROC due dates at a glance." },
};

const GROUPS = [
  { h: "Every month", rows: [
    ["7th", "TDS and TCS deposit (30 April for March)", "Challan"],
    ["11th", "GSTR-1, sales return (monthly filers)", "GSTR-1"],
    ["13th", "GSTR-1 under QRMP, invoice upload (IFF, optional)", "IFF"],
    ["15th", "PF and ESI contribution", "ECR, ESI challan"],
    ["18th", "Composition scheme payment, quarterly", "CMP-08"],
    ["20th", "GSTR-3B, summary return and payment (monthly filers)", "GSTR-3B"],
  ] },
  { h: "Every quarter", rows: [
    ["31 Jul, 31 Oct, 31 Jan, 31 May", "TDS returns for the quarter ended June, September, December, March", "Form 138 (salary), Form 140 (other)"],
    ["15 Jun, 15 Sep, 15 Dec, 15 Mar", "Advance tax instalments", "Challan 280"],
  ] },
  { h: "Every year", rows: [
    ["30 April", "Composition scheme annual return", "GSTR-4"],
    ["31 July", "Income tax return, individuals and others not needing a separate report", "ITR"],
    ["31 December", "Belated or revised income tax return, with a late fee", "ITR"],
    ["30 May", "LLP annual return", "Form 11"],
    ["30 September", "Director KYC for directors with a DIN", "DIR-3 KYC"],
    ["30 October", "LLP statement of accounts", "Form 8"],
    ["30 days after the AGM", "Company financial statements", "AOC-4"],
    ["60 days after the AGM", "Company annual return", "MGT-7"],
  ] },
];

const faqs = [
  ["Are these dates fixed?", "These are the usual statutory dates. The government often extends a date by notification for a month, a state or a class of taxpayer. Always check the portal for the period you are filing."],
  ["What if a date falls on a holiday?", "For most income tax and GST dates the next working day applies where the law says so. Do not rely on it; file earlier."],
  ["Who tracks these for me?", "For the returns we file, our team tracks the due dates and tells you what we need from you."],
];

export default function Page() {
  return (
    <ToolShell slug="due-date-calendar" name="Tax due dates" h1="Tax and compliance due dates, in one list" lead="Monthly, quarterly and yearly dates for GST, TDS, PF, ESI, advance tax, income tax and ROC filings." updated="November 2026" faqs={faqs} sources={[["GST portal", "https://www.gst.gov.in"], ["Income Tax Department", "https://incometaxindia.gov.in"], ["MCA", "https://www.mca.gov.in"]]}>
      {GROUPS.map((g) => (
        <Sec key={g.h} h={g.h}>
          <div style={tableWrap}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 560 }}>
              <thead><tr><th style={th}>Date</th><th style={th}>What</th><th style={th}>Form</th></tr></thead>
              <tbody>{g.rows.map((r) => (<tr key={r[0] + r[1]}><td style={{ ...td, fontWeight: 700, color: "var(--navy-900)", whiteSpace: "nowrap" }}>{r[0]}</td><td style={td}>{r[1]}</td><td style={td}>{r[2]}</td></tr>))}</tbody>
            </table>
          </div>
        </Sec>
      ))}
      <p style={{ ...T, marginBottom: 28 }}>QRMP filers (small taxpayers who file GSTR-3B every quarter) pay by the 25th in the months between and file GSTR-3B on the 22nd or 24th, depending on the state. Ask us which applies to you.</p>
    </ToolShell>
  );
}
