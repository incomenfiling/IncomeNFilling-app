import Link from "next/link";
import { ToolShell, tableWrap, th, td } from "@/components/tools/ToolShell";
import { Sec, Tiles, T } from "@/components/layout/InfoPage";

export const metadata = {
  title: { absolute: "Which DSC Do I Need? Class 3 Guide | Income N Filing" },
  description: "A plain guide to digital signature certificates in India: why Class 3 is the one issued today, signing vs encryption, individual vs organisation, DGFT, validity and the documents needed. Kolkata.",
  alternates: { canonical: "/tools/dsc-class-guide" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/tools/dsc-class-guide", title: "Which DSC do I need? | Income N Filing", description: "Class 3, signing, encryption, individual or organisation: pick the right digital signature." },
};

const faqs = [
  ["Is Class 2 DSC still available?", "No. Class 2 certificates were discontinued from 1 January 2021. Class 3 is the class issued today and it is accepted on the MCA, GST, income tax, DGFT and e-tender portals."],
  ["Do I need signing or signing plus encryption?", "Signing is enough for MCA, GST and income tax filings. E-tenders usually need signing plus encryption, called a combo."],
  ["Individual or organisation certificate?", "An individual certificate carries only your name. An organisation certificate also carries the organisation's name, and is used when the portal asks you to sign on its behalf."],
  ["How long is a DSC valid?", "Commonly one, two or three years, depending on what you choose at the time of application."],
  ["What if I lose the token or forget the password?", "A lost token or a forgotten password means a new certificate has to be applied for."],
  ["Can I get one without visiting an office?", "Verification is usually done by video call after you upload your documents. Some certificate types need extra steps, such as the DGFT type."],
];

export default function Page() {
  return (
    <ToolShell slug="dsc-class-guide" name="DSC class guide" h1="Which digital signature (DSC) do I need?" lead="A plain guide to classes, signing and encryption, individual and organisation certificates, and what you need to apply." updated="November 2026" faqs={faqs} sources={[["Controller of Certifying Authorities", "https://cca.gov.in"]]}>
      <Sec h="Start here">
        <Tiles items={[
          ["Filing GST, income tax or MCA forms", "Class 3 signing certificate. Organisation type if you sign for a company or LLP."],
          ["Bidding on government e-tenders", "Class 3 signing plus encryption (combo)."],
          ["Import and export (DGFT, ICEGATE)", "A DGFT certificate, which needs your IEC details."],
          ["Directors and partners", "A certificate in each signer's name, for the forms that person signs."],
        ]} />
      </Sec>
      <Sec h="The classes, in one table">
        <div style={tableWrap}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 520 }}>
            <thead><tr><th style={th}>Class</th><th style={th}>Status</th><th style={th}>Where it works</th></tr></thead>
            <tbody>
              <tr><td style={td}>Class 1</td><td style={td}>Not used for filings</td><td style={td}>Basic identity, such as email</td></tr>
              <tr><td style={td}>Class 2</td><td style={td}>Discontinued from 1 Jan 2021</td><td style={td}>Replaced by Class 3</td></tr>
              <tr><td style={td}><strong>Class 3</strong></td><td style={td}>Issued today</td><td style={td}>MCA, GST, income tax, DGFT, ICEGATE, e-tenders</td></tr>
            </tbody>
          </table>
        </div>
      </Sec>
      <Sec h="What you need to apply">
        <ul style={{ ...T, paddingLeft: 20, display: "grid", gap: 6 }}>
          <li>PAN and Aadhaar of the signer, with the mobile number linked to Aadhaar.</li>
          <li>A recent photograph and a working email address.</li>
          <li>For an organisation certificate: the organisation&apos;s PAN and proof of the signer&apos;s link to it.</li>
          <li>For DGFT: the IEC and the documents the certifying authority lists.</li>
        </ul>
        <p style={{ ...T, marginTop: 10 }}>The exact list depends on the certificate type. We confirm it with you before we start.</p>
      </Sec>
      <Sec h="How we help">
        <p style={T}>We apply, guide you through the video verification, set up the token on your computer and show you how to sign a PDF. DSC support is free during office hours for the life of the certificate. DSC work is done at our Kolkata office. See <Link href="/pricing/dsc" style={{ color: "var(--navy-800)", fontWeight: 700 }}>DSC prices</Link>.</p>
      </Sec>
    </ToolShell>
  );
}
