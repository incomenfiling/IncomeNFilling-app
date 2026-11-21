import Link from "next/link";
import { InfoPage, T } from "@/components/layout/InfoPage";

export const metadata = {
  title: { absolute: "Tax and Compliance Tools: GST Late Fee, TDS Chart, DSC Guide | Income N Filing" },
  description: "Calculators and quick guides from Income N Filing, Kolkata: GST late fee calculator, TDS rate chart, DSC class guide and tax due dates.",
  alternates: { canonical: "/tools" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/tools", title: "Tools | Income N Filing", description: "GST late fee calculator, TDS rate chart, DSC guide and due dates." },
};

const TOOLS = [
  ["/tools/gst-late-fee-calculator", "GST late fee calculator", "Late fee and interest for a delayed GSTR-3B or GSTR-1."],
  ["/tools/tds-rate-chart", "TDS rate chart FY 2026-27", "Rates and limits with old and new section numbers."],
  ["/tools/dsc-class-guide", "Which DSC do I need?", "Class 3, signing, encryption, individual or organisation."],
  ["/tools/due-date-calendar", "Tax due dates", "GST, TDS, advance tax, income tax and ROC dates in one list."],
];

export default function Page() {
  return (
    <InfoPage eyebrow="Tools" h1="Tools and quick guides" lead="Short, checked references you can use before you speak to anyone.">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
        {TOOLS.map(([href, t, d]) => (
          <Link key={href} href={href} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderTop: "4px solid var(--navy-900)", borderRadius: "var(--radius-lg)", padding: 18, textDecoration: "none", display: "block" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>{t}</div>
            <p style={{ ...T, fontSize: 14, marginTop: 6 }}>{d}</p>
            <span style={{ display: "inline-block", marginTop: 10, fontWeight: 700, color: "var(--navy-800)", fontSize: 14 }}>Open →</span>
          </Link>
        ))}
      </div>
    </InfoPage>
  );
}
