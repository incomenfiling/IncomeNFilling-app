import { HUB_CATEGORIES } from "@/data/categories";
import { MODULE_SLUGS } from "@/data/serviceSlugs";
import { SERVICE_PAGES } from "@/data/servicePages";
import { POSTS } from "@/data/posts";

const SITE = "https://incomenfiling.com";

export default function sitemap() {
  // Real last-edit date for static pages. Update this when page content changes; do not use the build time.
  const now = new Date("2026-11-20");
  const modules = HUB_CATEGORIES.map((m) => ({ url: `${SITE}/services/${MODULE_SLUGS[m.title]}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const services = SERVICE_PAGES.map((s) => ({ url: `${SITE}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  const blog = POSTS.length ? [{ url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 }, ...POSTS.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: new Date(p.updated || p.date), changeFrequency: "monthly", priority: 0.6 }))] : [];
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/services/itr-filing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/gst`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/dsc`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/accounting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kolkata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, lastModified: new Date("2026-11-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: new Date("2026-11-18"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/terms`, lastModified: new Date("2026-11-18"), changeFrequency: "yearly", priority: 0.2 },
    ...modules,
    ...services,
    ...blog,
  ];
}
