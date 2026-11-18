import { SITE_URL, ORG_ID, jsonLd } from "@/lib/site";
import { ITR_FAQ, ITR_META_TITLE, ITR_META_DESC } from "@/data/itrPage";

export const metadata = {
  title: { absolute: ITR_META_TITLE },
  description: ITR_META_DESC,
  alternates: { canonical: "/services/itr-filing" },
  openGraph: {
    url: "/services/itr-filing",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    title: ITR_META_TITLE,
    description: ITR_META_DESC,
  },
};

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services/itr-filing#service`,
      name: "ITR Filing in Kolkata",
      description: "Income tax return filing for individuals, professionals and businesses, prepared by one person and checked by another.",
      url: `${SITE_URL}/services/itr-filing`,
      provider: { "@id": ORG_ID },
      areaServed: [{ "@type": "City", name: "Kolkata" }, { "@type": "Country", name: "India" }],
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
      mainEntity: ITR_FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
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
