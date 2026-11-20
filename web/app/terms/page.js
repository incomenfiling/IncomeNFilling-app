import { LegalShell, H, P, ConsentBox } from "@/components/legal/LegalShell";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms that govern use of the Income N Filing website and services: fees, documents you share, working hours, our responsibilities and yours.",
  alternates: { canonical: "/terms" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/terms", title: "Terms & Conditions", description: "Terms that govern use of the Income N Filing website and services." },
};

export default function Page() {
  return (
    <LegalShell title="Terms & Conditions">
      <P>These Terms &amp; Conditions govern your use of Income N Filing&apos;s website and services. By using our services or submitting your details, you agree to the terms set out below.</P>
      <H>Communication consent</H>
      <ConsentBox />
      <H>Scope of services</H>
      <P>All services are provided on a best-effort professional basis in accordance with applicable laws and regulations. Timelines and deliverables are scoped during your consultation.</P>
      <H>Limitation of liability</H>
      <P>Income N Filing is not liable for delays or outcomes arising from incomplete, inaccurate, or delayed information provided by the client, or from changes in statutory requirements beyond our control.</P>
    </LegalShell>
  );
}
