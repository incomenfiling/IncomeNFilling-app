import { ToolShell, tableWrap, th, td } from "@/components/tools/ToolShell";
import { Sec, T } from "@/components/layout/InfoPage";

export const metadata = {
  title: { absolute: "TDS Rate Chart FY 2026-27: Sections, Rates, Thresholds | Income N Filing" },
  description: "TDS rates and limits for FY 2026-27 under the Income-tax Act, 2025: salary, interest, contractors, commission, rent, professional fees, property and more, with the old section for each.",
  alternates: { canonical: "/tools/tds-rate-chart" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/tools/tds-rate-chart", title: "TDS Rate Chart FY 2026-27 | Income N Filing", description: "Common TDS rates and limits with the old section for each." },
};

const ROWS = [
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
  ["Payment to partner (salary, interest, bonus)", "194T", "393(3)", "10%", "₹20,000 a year"],
];

const faqs = [
  ["Which law applies from 1 April 2026?", "The Income-tax Act, 2025. Section 392 covers TDS on salary, section 393 covers TDS on other payments, and section 394 covers TCS. Payments before 1 April 2026 follow the 1961 Act."],
  ["Did the rates change with the new Act?", "The Act mainly renumbers and regroups sections into tables. Rates and limits in this chart are the ones in force for FY 2026-27. Confirm a specific case before you deduct."],
  ["What if the person has no PAN?", "A higher rate generally applies when the PAN is missing or invalid. Collect the PAN before you pay."],
  ["Which returns report TDS?", "TDS on salary is reported in Form 138 and TDS on other payments in Form 140, each quarter."],
  ["When is TDS deposited?", "By the 7th of the next month. For March, the date is 30 April."],
];

export default function Page() {
  return (
    <ToolShell slug="tds-rate-chart" name="TDS rate chart" h1="TDS rate chart for FY 2026-27" lead="Common TDS rates and limits, with the old section number next to the new one, so you can match your books and your return." updated="November 2026" faqs={faqs} sources={[["Income Tax Department", "https://incometaxindia.gov.in"]]}>
      <Sec h="Rates and limits at a glance">
        <div style={tableWrap}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
            <thead><tr><th style={th}>Payment</th><th style={th}>Old section</th><th style={th}>New section</th><th style={th}>Rate</th><th style={th}>Limit</th></tr></thead>
            <tbody>
              {ROWS.map((r) => (<tr key={r[0] + r[3]}>{r.map((c, i) => <td key={i} style={{ ...td, fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "var(--navy-900)" : td.color }}>{c}</td>)}</tr>))}
            </tbody>
          </table>
        </div>
        <p style={T}>Limits apply per payee. Higher rates apply where a PAN is not given. This list covers the payments most businesses meet; it is not every case. Ask us if your payment is not here.</p>
      </Sec>
      <Sec h="Common mistakes">
        <ul style={{ ...T, paddingLeft: 20, display: "grid", gap: 6 }}>
          <li>Deducting at the wrong rate because the payee type (individual, company) was not checked.</li>
          <li>Missing the 7th-of-the-month deposit date.</li>
          <li>Filing the quarterly return with a wrong PAN, so the payee does not see the credit.</li>
          <li>Not deducting once the yearly limit is crossed in the middle of the year.</li>
        </ul>
      </Sec>
    </ToolShell>
  );
}
