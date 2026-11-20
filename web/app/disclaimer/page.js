import { LegalShell, H, P } from "@/components/legal/LegalShell";

export const metadata = {
  title: 'Disclaimer',
  description: 'Income N Filing is a private professional firm, not a government body. Website information is general, not advice for your case, and outcomes depend on authorities.',
  alternates: { canonical: "/disclaimer" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/disclaimer", title: 'Disclaimer', description: 'Income N Filing is a private professional firm, not a government body. Website information is general, not advice for your case, and outcomes depend on authorities.' },
};

export default function Page() {
  return (
    <LegalShell title='Disclaimer'>
      <P>Income N Filing is a private firm. We are not a government department and we are not part of the GST Network, the Income Tax Department, the Ministry of Corporate Affairs or any other authority. Names of portals, forms and departments are used only to describe the work we do for clients.</P>
      <H>General information only</H>
      <P>Content on this website, including blog posts, price pages and due dates, is general information. Tax and compliance rules, rates and dates change. Please confirm your own case with us before you act on anything you read here.</P>
      <H>No guarantee</H>
      <P>We do not guarantee approvals, refunds, registrations or the result of any notice or proceeding. These depend on the authority concerned and on the facts and documents.</P>
      <H>Reviews and testimonials</H>
      <P>Reviews are shown as customers wrote them. They describe individual experiences and are not a promise of the same result for you. To have a review removed, write to support@incomenfiling.com.</P>
      <H>Third-party links</H>
      <P>Links to other websites are for convenience. We are not responsible for their content.</P>
    </LegalShell>
  );
}
