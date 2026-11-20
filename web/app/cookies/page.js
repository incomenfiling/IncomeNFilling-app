import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

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
      <P>Essential storage that keeps forms and your chosen services working during a visit. Analytics tools (Google Analytics) that count visits and show which pages are useful, without naming you. Advertising tags, when we run campaigns, that tell us which advertisement brought a visit. A chat widget that lets you message us from the site.</P>
      <H>Your choices</H>
      <P>You can block or delete cookies in your browser settings. The website still works, but some features, such as remembering your selected services, may not. You can also install a Google Analytics opt-out add-on from Google.</P>
      <H>Questions</H>
      <P>Write to us at support@incomenfiling.com or call 078905 94600 (Monday to Saturday, 10:00 to 19:00 IST). Our office is Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kasba, Kolkata 700039.</P>
    </LegalShell>
  );
}
