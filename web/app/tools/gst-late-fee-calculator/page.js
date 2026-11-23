import { ToolShell, tableWrap, th, td } from "@/components/tools/ToolShell";
import { GstLateFeeCalc } from "@/components/tools/GstLateFeeCalc";
import { Sec, T } from "@/components/layout/InfoPage";

export const metadata = {
  title: { absolute: "GST Late Fee and Interest Calculator | Income N Filing" },
  description: "Estimate the late fee and interest for a delayed GSTR-3B or GSTR-1: per-day rate, nil return rate, turnover-based maximum and 18% interest. By Income N Filing, Kolkata.",
  alternates: { canonical: "/tools/gst-late-fee-calculator" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/tools/gst-late-fee-calculator", title: "GST Late Fee Calculator | Income N Filing", description: "Estimate the late fee and interest on a delayed GSTR-3B or GSTR-1." },
};

const faqs = [
  ["What is the GST late fee for GSTR-3B and GSTR-1?", "₹50 a day (₹25 CGST and ₹25 SGST) when the return has tax or sales, and ₹20 a day (₹10 and ₹10) for a nil return. A maximum applies per return."],
  ["What is the maximum late fee?", "₹500 for a nil return. Otherwise ₹2,000 up to ₹1.5 crore turnover, ₹5,000 from ₹1.5 crore to ₹5 crore, and ₹10,000 above ₹5 crore."],
  ["Is interest charged as well?", "Yes, on tax paid late in GSTR-3B. Interest is 18% a year, counted for the days the tax was late. GSTR-1 carries a late fee but no interest."],
  ["Does the late fee apply even when I owe no tax?", "Yes. A nil GSTR-3B filed after the due date still attracts the nil-return late fee."],
  ["Can the late fee be waived?", "Only when the government notifies a waiver or amnesty scheme. Check the GST portal notifications for the period."],
];

export default function Page() {
  return (
    <ToolShell slug="gst-late-fee-calculator" name="GST late fee calculator" h1="GST late fee and interest calculator" lead="Enter the due date and the date you filed. See the estimated late fee, its CGST and SGST split, and interest on tax paid late." updated="November 2026" faqs={faqs} sources={[["GST portal", "https://www.gst.gov.in"], ["CBIC", "https://www.cbic.gov.in"]]}>
      <GstLateFeeCalc />
      <Sec h="The rates this calculator uses">
        <div style={tableWrap}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 480 }}>
            <thead><tr><th style={th}>Case</th><th style={th}>Per day</th><th style={th}>Maximum per return</th></tr></thead>
            <tbody>
              <tr><td style={td}>Nil return</td><td style={td}>₹20 (₹10 + ₹10)</td><td style={td}>₹500</td></tr>
              <tr><td style={td}>Turnover up to ₹1.5 crore</td><td style={td}>₹50 (₹25 + ₹25)</td><td style={td}>₹2,000</td></tr>
              <tr><td style={td}>₹1.5 crore to ₹5 crore</td><td style={td}>₹50 (₹25 + ₹25)</td><td style={td}>₹5,000</td></tr>
              <tr><td style={td}>Above ₹5 crore</td><td style={td}>₹50 (₹25 + ₹25)</td><td style={td}>₹10,000</td></tr>
            </tbody>
          </table>
        </div>
        <p style={T}>Interest is 18% a year on the tax paid late, counted per day. Late fee and interest are separate and both are payable. Other returns, such as the annual return, have their own late fee.</p>
      </Sec>
      <Sec h="Do not let it build up">
        <p style={T}>The fee runs every day until you file. If returns are pending for several months, filing them in order and paying the tax early keeps the interest down. Our team tracks every due date for the returns we file.</p>
      </Sec>
    </ToolShell>
  );
}
