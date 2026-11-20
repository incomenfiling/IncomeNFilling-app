import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

export const metadata = {
  title: "Privacy Policy",
  description: "How Income N Filing collects, uses and protects the information you share with us through our website, forms, calls and WhatsApp, and how you can contact us.",
  alternates: { canonical: "/privacy" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/privacy", title: "Privacy Policy", description: "How Income N Filing collects, uses and protects the information you share with us." },
};

export default function Page() {
  return (
    <LegalShell title="Privacy Policy">
      <P>This Privacy Policy explains how Income N Filing collects, uses, and protects the information you share with us when you use our services or contact us.</P>
      <H>Information we collect &amp; your consent</H>
      <ConsentBox />
      <H>How we use your information</H>
      <P>Your details are used solely to respond to your enquiry, deliver the services you request, and keep you informed about the status of your engagement. We do not sell your personal information to third parties.</P>
      <H>Data security</H>
      <P>Documents you share are stored in Google Drive and on our own server. Access is restricted to authorised personnel only.</P>
    </LegalShell>
  );
}
