import { LegalShell, H, P } from "@/components/legal/LegalShell";

export const metadata = {
  title: 'Cookie Policy',
  description: 'What cookies and similar tools incomenfiling.com uses, why, and how to control or switch them off in your browser.',
  alternates: { canonical: "/cookies" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/cookies", title: 'Cookie Policy', description: 'What cookies and similar tools incomenfiling.com uses, why, and how to control or switch them off in your browser.' },
};

export default function Page() {
  return (
    <LegalShell title='Cookie Policy'>
      <P>Cookies are small files a website stores in your browser. We use few of them.</P>
      <H>What we use</H>
      <P>Essential storage that keeps forms and your chosen services working during a visit. Analytics tools (Google Analytics and Microsoft Clarity) that count visits and show which pages are useful and how visitors move around the site, which can include anonymous session recordings. We do not use these tools to name you.</P>
      <H>Your choices</H>
      <P>When you first visit, a notice asks whether to allow analytics and the chat widget. If you choose Essential only, Microsoft Clarity and the chat widget do not load and Google Analytics runs without storing cookies. You can change your mind by clearing this site&apos;s data in your browser. </P>
      <P>You can block or delete cookies in your browser settings. The website still works, but some features, such as remembering your selected services, may not. You can also install the Google Analytics opt-out add-on from Google.</P>
      <H>Questions</H>
      <P>Write to us at support@incomenfiling.com or call 078905 94600 (Monday to Saturday, 10:00 to 19:00 IST). Our office is Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kasba, Kolkata 700039.</P>
    </LegalShell>
  );
}
