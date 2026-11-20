import { notFound } from "next/navigation";
import { HUB_CATEGORIES } from "@/data/categories";
import { MODULE_SLUGS } from "@/data/serviceSlugs";
import { POSTS } from "@/data/posts";
import { SERVICE_PAGES, SERVICE_BY_SLUG } from "@/data/servicePages";
import { ServicePageView } from "@/components/services/ServicePageView";
import { SITE_URL, ORG_ID, jsonLd } from "@/lib/site";

export const dynamicParams = false;

const MODULES = HUB_CATEGORIES.map((m) => ({ ...m, slug: MODULE_SLUGS[m.title] }));
const MODULE_BY_SLUG = Object.fromEntries(MODULES.map((m) => [m.slug, m]));
const MODULE_BY_TITLE = Object.fromEntries(MODULES.map((m) => [m.title, m]));

export function generateStaticParams() {
  return [...MODULES.map((m) => ({ slug: m.slug })), ...SERVICE_PAGES.map((s) => ({ slug: s.slug }))];
}

function build(slug) {
  const mod = MODULE_BY_SLUG[slug];
  if (mod) {
    const detailByListed = Object.fromEntries(
      SERVICE_PAGES.filter((s) => s.module === mod.title).map((s) => [s.listed, s])
    );
    return {
      kind: "module",
      path: `/services/${slug}`,
      name: mod.title,
      metaTitle: `${mod.title} Services | Income N Filing`,
      metaDescription: `${mod.description} Income N Filing handles ${mod.title.toLowerCase()} for businesses and individuals across India.`,
      intro: `${mod.description} Income N Filing handles this end to end, from collecting your documents to filing and follow-up.`,
      services: mod.services.map((n) => ({
        name: n,
        href: detailByListed[n]
          ? `/services/${detailByListed[n].slug}`
          : mod.title === "Income Tax" && /^ITR-/.test(n)
            ? "/services/itr-filing"
            : undefined,
      })),
      docs: mod.docs,
      deliverables: mod.deliverables,
      turnaround: mod.turnaround,
    };
  }
  const svc = SERVICE_BY_SLUG[slug];
  if (!svc) return null;
  const parent = MODULE_BY_TITLE[svc.module];
  const related = SERVICE_PAGES.filter((s) => s.module === svc.module && s.slug !== svc.slug).map((s) => ({ name: s.name, href: `/services/${s.slug}` }));
  return {
    kind: "service",
    path: `/services/${slug}`,
    name: svc.name,
    h1: svc.h1,
    sections: svc.sections,
    metaTitle: svc.metaTitle,
    metaDescription: svc.metaDescription,
    intro: svc.intro,
    whoNeeds: svc.whoNeeds,
    included: svc.included,
    faqs: svc.faqs.map((f) => ({ q: f.q, a: f.a })),
    parent: { name: parent.title, href: `/services/${parent.slug}` },
    guides: POSTS.filter((b) => b.service === slug).map((b) => ({ name: b.title, href: `/blog/${b.slug}` })),
    related: [{ name: `All ${parent.title} services`, href: `/services/${parent.slug}` }, ...related],
  };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const d = build(slug);
  if (!d) return {};
  return {
    title: { absolute: d.metaTitle },
    description: d.metaDescription,
    alternates: { canonical: d.path },
    openGraph: { url: d.path, title: d.metaTitle, description: d.metaDescription, images: [{ url: `/og/${slug}.png`, width: 1200, height: 630, alt: d.name }] },
    twitter: { card: "summary_large_image", images: [`/og/${slug}.png`] },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const d = build(slug);
  if (!d) notFound();

  const crumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Services", url: `${SITE_URL}/services` },
    ...(d.parent ? [{ name: d.parent.name, url: `${SITE_URL}${d.parent.href}` }] : []),
    { name: d.name, url: `${SITE_URL}${d.path}` },
  ];
  const graph = [
    {
      "@type": "Service",
      "@id": `${SITE_URL}${d.path}#service`,
      name: d.name,
      description: d.metaDescription,
      url: `${SITE_URL}${d.path}`,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "India" },
      ...(d.kind === "module" && {
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.name,
          itemListElement: d.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.name } })),
        },
      }),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: c.url })),
    },
  ];
  if (d.faqs && d.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }) }} />
      <ServicePageView data={d} />
    </>
  );
}
