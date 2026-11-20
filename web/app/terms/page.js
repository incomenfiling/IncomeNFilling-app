import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Terms for using the Income N Filing website and services: scope, fees and payment, client responsibilities, limits of liability, confidentiality, cancellation and governing law.',
  alternates: { canonical: "/terms" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/terms", title: 'Terms & Conditions', description: 'Terms for using the Income N Filing website and services: scope, fees and payment, client responsibilities, limits of liability, confidentiality, cancellation and governing law.' },
};

export default function Page() {
  return (
    <LegalShell title='Terms & Conditions'>
      <P>These Terms &amp; Conditions apply to your use of the Income N Filing website and to the services we provide. By using the website, submitting your details or engaging us, you agree to them.</P>
      <H>Communication consent</H>
            <ConsentBox />
      <H>Scope of services</H>
      <P>We provide tax, compliance, registration, accounting and related services as a professional firm. The scope, documents needed and timeline for each job are set out in a written quotation or message before we start. Work outside that scope is quoted separately.</P>
      <H>Fees and payment</H>
      <P>Our fee is fixed in writing before we start. Government fees, stamp duty, courier and similar third-party charges are separate and are paid at actual cost unless the quotation says otherwise. GST at 18% is added where it applies. Payment is made in advance unless we agree otherwise in writing. We do not start work until payment is received.</P>
      <H>What we need from you</H>
      <P>You must give complete, accurate and timely information and documents, and you are responsible for their correctness. Delays, penalties or interest caused by late, incomplete or wrong information are your responsibility. Where a plan has a data cut-off date, we cannot promise filing before the due date if data arrives after it.</P>
      <H>No guarantee of outcome</H>
      <P>Approvals, refunds, registrations and notices depend on the government departments and portals concerned and on the facts of your case. Timelines we mention are estimates and run within our working hours (Monday to Saturday, 10:00 to 19:00 IST). We do not guarantee any outcome.</P>
      <H>Cancellation and refunds</H>
      <P>See our Refund and Cancellation Policy.</P>
      <H>Confidentiality</H>
      <P>We keep your information and documents confidential and use them only for your work, except where the law requires us to disclose them.</P>
      <H>Our liability</H>
      <P>We are not liable for delays or outcomes caused by incomplete, inaccurate or late information from you, by changes in law, or by the action or delay of any government department, portal or third party. Our total liability for any claim is limited to the fee you paid us for the service concerned.</P>
      <H>Website use</H>
      <P>Information on this website is general and is not advice for your particular case. Please speak to us before you act on it. We may change the website or these terms at any time.</P>
      <H>Governing law</H>
      <P>These terms are governed by the laws of India. Courts in Kolkata have jurisdiction.</P>
      <H>Contact</H>
      <P>Write to us at support@incomenfiling.com or call 078905 94600 (Monday to Saturday, 10:00 to 19:00 IST). Our office is Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kasba, Kolkata 700039.</P>
    </LegalShell>
  );
}
