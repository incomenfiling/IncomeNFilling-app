import { HUB_CATEGORIES } from "@/data/categories";
import { MODULE_SLUGS } from "@/data/serviceSlugs";
import { SERVICE_PAGES } from "@/data/servicePages";

const SITE = "https://incomenfiling.com";

export default function sitemap() {
  const now = new Date();
  const modules = HUB_CATEGORIES.map((m) => ({ url: `${SITE}/services/${MODULE_SLUGS[m.title]}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const services = SERVICE_PAGES.map((s) => ({ url: `${SITE}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/services/itr-filing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ...modules,
    ...services,
  ];
}
