import { PriceGroupPage, PRICE_GROUPS } from "@/components/pricing/PriceGroupPage";

export function generateStaticParams() {
  return Object.keys(PRICE_GROUPS).map((group) => ({ group }));
}

export const dynamicParams = false;

export function generateMetadata({ params }) {
  return params.then(({ group }) => {
    const g = PRICE_GROUPS[group];
    return {
      title: { absolute: g.title },
      description: g.description,
      alternates: { canonical: `/pricing/${group}` },
      openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: `/pricing/${group}`, title: g.title, description: g.description },
    };
  });
}

export default async function Page({ params }) {
  const { group } = await params;
  return <PriceGroupPage groupKey={group} />;
}
