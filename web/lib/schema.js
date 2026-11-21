import { SITE_URL, ORG_ID, jsonLd } from "@/lib/site";

// Shared JSON-LD builders. Organization, LocalBusiness data, Person, ContactPoint, address, geo,
// opening hours and WebSite live in lib/site.js. Review and AggregateRating are left out on purpose
// (self-serving review markup is ignored by Google and can cause a manual action).
export const ldScript = (graph) => ({ __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }) });

export const webPage = (path, name, description, type = "WebPage") => ({
  "@type": type, "@id": `${SITE_URL}${path}#webpage`, url: `${SITE_URL}${path}`, name, description,
  inLanguage: "en-IN", isPartOf: { "@id": `${SITE_URL}/#website` }, about: { "@id": ORG_ID },
});

export const itemList = (name, items) => ({
  "@type": "ItemList", name, numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, url: it.url.startsWith("http") ? it.url : `${SITE_URL}${it.url}` })),
});

const rupees = (v) => { const m = /^₹([\d,]+)$/.exec(String(v || "").trim()); return m ? Number(m[1].replace(/,/g, "")) : null; };

// Rows are [label, fee, total, note]. Only rows with a numeric total become Offers; "Quoted" rows are skipped.
export function priceCatalog(path, name, items) {
  const offers = [];
  for (const it of items) for (const r of it.rows || []) {
    const total = rupees(r[2]) ?? rupees(r[1]);
    if (total === null) continue;
    const fee = rupees(r[1]);
    offers.push({ "@type": "Offer", name: r[0], priceCurrency: "INR", price: total, availability: "https://schema.org/InStock",
      ...(fee && rupees(r[2]) ? { description: `Our fee ₹${fee.toLocaleString("en-IN")} + 18% GST. Total ₹${total.toLocaleString("en-IN")}.` } : {}) });
  }
  return {
    "@type": "Service", "@id": `${SITE_URL}${path}#service`, name, provider: { "@id": ORG_ID },
    areaServed: { "@type": "Country", name: "India" },
    hasOfferCatalog: { "@type": "OfferCatalog", name: `${name} prices`, itemListElement: offers },
  };
}
