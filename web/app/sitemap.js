import { HUB_CATEGORIES } from "@/data/categories";
import { MODULE_SLUGS } from "@/data/serviceSlugs";
import { SERVICE_PAGES } from "@/data/servicePages";
import { POSTS } from "@/data/posts";
import { getOpenings } from "@/lib/careers";

const SITE = "https://incomenfiling.com";

export default async function sitemap() {
  const jobs = (await getOpenings()).map((o) => ({ url: `${SITE}/careers/${o.slug}`, lastModified: new Date("2026-11-22"), changeFrequency: "weekly", priority: 0.5 }));
  // Real last-edit date for static pages. Update this when page content changes; do not use the build time.
  const now = new Date("2026-11-22");
  const modules = HUB_CATEGORIES.map((m) => ({ url: `${SITE}/services/${MODULE_SLUGS[m.title]}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }));
  const services = SERVICE_PAGES.map((s) => ({ url: `${SITE}/services/${s.slug}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 }));
  const blog = POSTS.length ? [{ url: `${SITE}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 }, ...POSTS.map((p) => ({ url: `${SITE}/blog/${p.slug}`, lastModified: new Date(p.updated || p.date), changeFrequency: "monthly", priority: 0.6 }))] : [];
  const all = [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/services/itr-filing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/gst`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/dsc`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/accounting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/income-tax`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/incorporation`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/professional-tax`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/udyam`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/pricing/roc`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/kolkata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/income-tax-return-filing-kolkata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/gst-registration-kolkata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/tax-consultant-kolkata`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/about`, lastModified: new Date("2026-11-18"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/privacy`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/tools`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/tools/gst-late-fee-calculator`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/tools/tds-rate-chart`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/tools/dsc-class-guide`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/tools/due-date-calendar`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/ecommerce-sellers`, lastModified: new Date("2026-11-22"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/partners`, lastModified: new Date("2026-11-20"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE}/careers`, lastModified: new Date("2026-11-20"), changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE}/terms`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/refund-policy`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/disclaimer`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/cookies`, lastModified: new Date("2026-11-20"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE}/professional-tax-kolkata`, lastModified: new Date("2026-11-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/dsc-kolkata`, lastModified: new Date("2026-11-23"), changeFrequency: "monthly", priority: 0.8 },
    ...modules,
    ...services,
    ...blog,
  ];
  // One entry per URL (module and service pages can share a slug).
  const seen = new Set();
  return all.filter((e) => (seen.has(e.url) ? false : (seen.add(e.url), true)));
}
