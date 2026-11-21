import { PreferredSource } from "@/components/shared/PreferredSource";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { PostBody } from "@/components/blog/PostBody";
import { POSTS, POST_BY_SLUG } from "@/data/posts";
import { SERVICE_BY_SLUG } from "@/data/servicePages";
import { SITE_URL, ORG_ID, jsonLd } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  // Next requires at least one param for a dynamic route with dynamicParams=false.
  return POSTS.length ? POSTS.map((p) => ({ slug: p.slug })) : [{ slug: "_none" }];
}

export function generateMetadata({ params }) {
  return params.then(({ slug }) => {
    const p = POST_BY_SLUG[slug];
    if (!p) return { robots: { index: false } };
    return {
      title: p.metaTitle ? { absolute: p.metaTitle } : p.title,
      description: p.description,
      alternates: { canonical: `/blog/${p.slug}` },
      openGraph: { type: "article", title: p.title, description: p.description, url: `/blog/${p.slug}`, publishedTime: p.date, modifiedTime: p.updated || p.date, authors: ["Anish Jhunjhunwala"] },
    };
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const p = POST_BY_SLUG[slug];
  if (!p) notFound();
  const svc = p.service && SERVICE_BY_SLUG[p.service];
  const url = `${SITE_URL}/blog/${p.slug}`;
  const faqs = p.body.filter((b) => b.faq).flatMap((b) => b.faq);
  const graph = [
    {
      "@type": "BlogPosting",
      "@id": `${url}#post`,
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      dateModified: p.updated || p.date,
      mainEntityOfPage: url,
      inLanguage: "en-IN",
      author: { "@type": "Person", name: "Anish Jhunjhunwala", jobTitle: "Founder, Income N Filing" },
      publisher: { "@id": ORG_ID },
      image: `${SITE_URL}/logo.jpg`,
    },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: p.title, item: url },
    ] },
    ...(faqs.length ? [{ "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
  ];
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd({ "@context": "https://schema.org", "@graph": graph }) }} />
      <NavBar />
      <article style={{ padding: "40px 20px 80px", maxWidth: 760, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-500)", marginBottom: 16 }}>
          <Link href="/">Home</Link> / <Link href="/blog">Blog</Link>
        </nav>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: "0 0 12px", lineHeight: 1.2 }}>{p.title}</h1>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--ink-500)", marginBottom: 28 }}>
          By Anish Jhunjhunwala, Founder, Income N Filing · <time dateTime={p.date}>{p.date}</time>{p.updated && p.updated !== p.date ? <> · Updated <time dateTime={p.updated}>{p.updated}</time></> : null}
        </div>
        <PostBody blocks={p.body} />
        {svc && (
          <div style={{ marginTop: 40, padding: 20, border: "1px solid var(--gold-200)", borderRadius: 14, background: "var(--white)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy-900)", marginBottom: 6 }}>Need help with this?</div>
            <Link href={`/services/${svc.slug}`} style={{ fontFamily: "var(--font-body)", color: "var(--gold-600)" }}>See how we handle {svc.name} →</Link>
          </div>
        )}
        {POSTS.some((o) => o.slug !== p.slug) && (
          <nav aria-label="More guides" style={{ marginTop: 32 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy-900)", marginBottom: 8 }}>More guides</div>
            <ul style={{ margin: 0, paddingLeft: 22 }}>
              {POSTS.filter((o) => o.slug !== p.slug).slice(0, 3).map((o) => (
                <li key={o.slug} style={{ marginBottom: 6 }}><Link href={`/blog/${o.slug}`} style={{ fontFamily: "var(--font-body)", color: "var(--navy-800)" }}>{o.title}</Link></li>
              ))}
            </ul>
          </nav>
        )}
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-400)", marginTop: 32 }}>General information, not legal or tax advice for your specific case. Rules and due dates change; confirm current details before acting.</p>
        <div style={{ marginTop: 24 }}><PreferredSource source="blog" /></div>
      </article>
      <Footer />
    </div>
  );
}
