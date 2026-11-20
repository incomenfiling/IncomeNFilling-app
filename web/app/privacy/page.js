import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Income N Filing collects, uses, stores and protects your personal data, who we share it with, how long we keep it, and how to reach our grievance contact.',
  alternates: { canonical: "/privacy" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/privacy", title: 'Privacy Policy', description: 'How Income N Filing collects, uses, stores and protects your personal data, who we share it with, how long we keep it, and how to reach our grievance contact.' },
};

export default function Page() {
  return (
    <LegalShell title='Privacy Policy'>
      <P>This Privacy Policy explains how Income N Filing (&quot;we&quot;, &quot;us&quot;) handles personal data when you use our website, fill in a form, call or message us, or use our services. We follow the Digital Personal Data Protection Act, 2023 and other Indian law that applies to us.</P>
      <H>What we collect</H>
      <P>Details you give us: name, phone number, email address, the service you ask about, your message, and the documents you share so we can do the work (for example PAN, Aadhaar, bank, GST and income details). From your browser: the page you submitted a form on, the page or advertisement that brought you, device and browser type, and anonymous usage statistics.</P>
      <H>Why we use it, and your consent</H>
            <ConsentBox />
      <P>We use your details to reply to your enquiry, prepare quotations, deliver the services you ask for, send you status updates, meet legal duties, and improve our website. We do not sell your personal data.</P>
      <H>Who we share it with</H>
      <P>Only with those who help us deliver the service: Google (Sheets, Drive, Gmail and Analytics) to store records and measure usage, Cloudflare to host the website, WhatsApp for messaging, and government portals (for example the GST, Income Tax and MCA portals) when we file on your behalf. Online payment providers will be added here when we start taking online payments. We may share data when the law requires it.</P>
      <H>How long we keep it</H>
      <P>Enquiry details are kept for up to 24 months after our last contact. Client records and documents are kept for as long as the law requires for the service we did, and for the period we need them to answer notices or queries about that work. After that we delete them or make them anonymous.</P>
      <H>How we protect it</H>
      <P>Documents are stored in Google Drive and on our own server. Access is limited to the people who work on your file, and one person prepares the work while another checks it. No system is perfectly secure, but we take reasonable steps to protect your data.</P>
      <H>Your rights</H>
      <P>You can ask us to show you the data we hold about you, correct it, delete it, or stop contacting you, and you can withdraw your consent at any time. Withdrawing consent does not affect work already done. We answer within a reasonable time.</P>
      <H>Children</H>
      <P>Our services are for adults. We do not knowingly collect data from anyone under 18 without a parent or guardian.</P>
      <H>Cookies</H>
      <P>See our Cookie Policy for what we use and how to control it.</P>
      <H>Grievance contact</H>
      <P>For any concern about your data, write to us at support@incomenfiling.com or call 078905 94600 (Monday to Saturday, 10:00 to 19:00 IST). Our office is Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kasba, Kolkata 700039. We will acknowledge your message and reply with what we have done.</P>
      <H>Changes</H>
      <P>We may update this policy. The date at the top shows when it was last changed.</P>
    </LegalShell>
  );
}
