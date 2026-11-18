import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { POSTS } from "@/data/posts";

export const metadata = {
  title: "Tax & Compliance Blog",
  description: "Practical guides on income tax, GST and company compliance in India from Income N Filing, Kolkata.",
  alternates: { canonical: "/blog" },
  robots: POSTS.length ? { index: true, follow: true } : { index: false, follow: true },
};

export default function BlogIndex() {
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <NavBar />
      <section style={{ padding: "48px 20px 80px", maxWidth: 820, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-3xl)", color: "var(--navy-900)", margin: "0 0 12px" }}>Tax & Compliance Blog</h1>
        <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-500)", margin: "0 0 32px" }}>Plain-language guides on income tax, GST and company compliance, by Anish Jhunjhunwala and the Income N Filing team in Kolkata.</p>
        {POSTS.length === 0 && <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-500)" }}>Our first guides are coming soon.</p>}
        {POSTS.map((p) => (
          <article key={p.slug} style={{ padding: "20px 0", borderTop: "1px solid var(--ink-100)" }}>
            <h2 style={{ margin: 0 }}><Link href={`/blog/${p.slug}`} style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--navy-900)", textDecoration: "none", fontWeight: 600 }}>{p.title}</Link></h2>
            <p style={{ fontFamily: "var(--font-body)", color: "var(--ink-500)", margin: "8px 0 0" }}>{p.description}</p>
            <time dateTime={p.date} style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-400)" }}>{p.date}</time>
          </article>
        ))}
      </section>
      <Footer />
    </div>
  );
}
