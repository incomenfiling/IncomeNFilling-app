import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

export const metadata = {
  title: 'Refund and Cancellation Policy',
  description: 'When Income N Filing refunds a fee and when it does not, how to cancel a service, and how government and third-party charges are treated.',
  alternates: { canonical: "/refund-policy" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/refund-policy", title: 'Refund and Cancellation Policy', description: 'When Income N Filing refunds a fee and when it does not, how to cancel a service, and how government and third-party charges are treated.' },
};

export default function Page() {
  return (
    <LegalShell title='Refund and Cancellation Policy'>
      <P>This policy explains cancellation and refunds for services bought from Income N Filing. If your written quotation says something different, the quotation applies.</P>
      <H>Before we start work</H>
      <P>If you cancel in writing before we begin work on your file, we refund the fee you paid, less any government or third-party charge already paid on your behalf.</P>
      <H>After work has started</H>
      <P>Once work has started, the fee for the work already done is kept. We refund any part of the fee that covers work not yet done, less charges already paid to third parties.</P>
      <H>Items that are not refunded</H>
            <P>Government fees and charges paid to a department, portal or authority. A one-time setup fee for accounting, once the books are set up. A digital signature order cancelled after the video KYC link has been sent. Courier and porter charges already incurred.</P>
      <H>Our errors</H>
      <P>If we make a mistake in work we prepared, we correct it at no extra fee. If we cannot deliver a service we agreed to, we refund the fee for that part.</P>
      <H>How to cancel or ask for a refund</H>
      <P>Write to us at support@incomenfiling.com or call 078905 94600 (Monday to Saturday, 10:00 to 19:00 IST). Our office is Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kasba, Kolkata 700039. Give your name, the service and the payment details. We reply within 3 working days. Approved refunds go back to the account or method you paid from, usually within 7 to 10 working days.</P>
    </LegalShell>
  );
}
