import { SITE_URL, ORG_ID, jsonLd } from "@/lib/site";

export const metadata = {
  title: "ITR Filing — Income Tax Return Services",
  description:
    "File your income tax return with expert help. Income N Filing prepares and files ITRs for salaried individuals, professionals and businesses.",
  alternates: { canonical: "/services/itr-filing" },
  openGraph: {
    url: "/services/itr-filing",
    title: "ITR Filing — Income Tax Return Services",
    description:
      "File your income tax return with expert help. Income N Filing prepares and files ITRs for salaried individuals, professionals and businesses.",
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/itr-filing#service`,
      name: "ITR Filing",
      description: "Income tax return filing for individuals, professionals and businesses.",
      url: `${SITE_URL}/services/itr-filing`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
        { "@type": "ListItem", position: 3, name: "ITR Filing", item: `${SITE_URL}/services/itr-filing` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who needs to file an ITR?",
          acceptedAnswer: { "@type": "Answer", text: "Anyone above the exemption threshold, plus professionals, freelancers, and businesses regardless of income." },
        },
        {
          "@type": "Question",
          name: "Can you handle a delayed or notice case?",
          acceptedAnswer: { "@type": "Answer", text: "Yes — we handle belated returns and respond to scrutiny notices as part of this service." },
        },
      ],
    },
  ],
};

export default function Layout({ children }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
      {children}
    </>
  );
}
