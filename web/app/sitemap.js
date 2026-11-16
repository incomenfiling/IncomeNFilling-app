const SITE = "https://incomenfiling.com";

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/services/itr-filing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE}/legal`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];
}
