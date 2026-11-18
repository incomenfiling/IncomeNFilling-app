"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBP } from "@/lib/useBP";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Button } from "@/components/ui/Button";

const H2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "40px 0 16px" };
const P = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-base)", lineHeight: "var(--leading-base)", margin: 0 };
const LI = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-base)", lineHeight: "var(--leading-base)", marginBottom: 8 };

function List({ items }) {
  return (
    <ul style={{ margin: 0, paddingLeft: 22 }}>
      {items.map((t) => <li key={t} style={LI}>{t}</li>)}
    </ul>
  );
}

// data: { kind: "module" | "service", name, intro, whoNeeds?, included?, docs?, deliverables?, turnaround?,
//         group?, services?: [{name, href?}], faqs?: [{q,a}], parent?: {name, href}, related?: [{name, href}] }
export function ServicePageView({ data }) {
  const router = useRouter();
  const bp = useBP();
  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    ...(data.parent ? [data.parent] : []),
    { name: data.name },
  ];
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="services" />
      <section style={{ padding: bp.mobile ? "32px 20px 64px" : "56px 32px 90px", maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", color: "var(--ink-500)", marginBottom: 16 }}>
          {crumbs.map((c, i) => (
            <span key={c.name}>
              {i > 0 && " / "}
              {c.href ? <Link href={c.href} style={{ color: "var(--ink-500)" }}>{c.name}</Link> : <span style={{ color: "var(--navy-900)" }}>{c.name}</span>}
            </span>
          ))}
        </nav>
        <div style={{ display: "grid", gridTemplateColumns: bp.ltDesktop ? "1fr" : "1.5fr 1fr", gap: 40, alignItems: "start" }}>
          <article>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-4xl)", color: "var(--navy-900)", margin: "0 0 16px" }}>{data.name}</h1>
            <p style={{ ...P, maxWidth: 640 }}>{data.intro}</p>

            {data.whoNeeds && (<><h2 style={H2}>Who needs this</h2><List items={data.whoNeeds} /></>)}
            {data.included && (<><h2 style={H2}>What we do</h2><List items={data.included} /></>)}

            {data.services && (
              <>
                <h2 style={H2}>Services in this category</h2>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  {data.services.map((s) => (
                    <li key={s.name} style={LI}>
                      {s.href ? <Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 600 }}>{s.name}</Link> : s.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            {data.docs && (<><h2 style={H2}>Documents usually needed</h2><List items={data.docs} /></>)}
            {data.deliverables && (<><h2 style={H2}>What you receive</h2><List items={data.deliverables} /></>)}
            {data.turnaround && (<><h2 style={H2}>Typical timeline</h2><p style={P}>{data.turnaround}. The exact time depends on how quickly documents are ready and on the authority concerned.</p></>)}

            {data.faqs && data.faqs.length > 0 && (
              <>
                <h2 style={H2}>Frequently asked questions</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {data.faqs.map((f) => (
                    <details key={f.q} open style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "16px 20px" }}>
                      <summary style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", cursor: "pointer" }}>{f.q}</summary>
                      <p style={{ ...P, marginTop: 10 }}>{f.a}</p>
                    </details>
                  ))}
                </div>
              </>
            )}

            {data.related && data.related.length > 0 && (
              <>
                <h2 style={H2}>Related services</h2>
                <ul style={{ margin: 0, paddingLeft: 22 }}>
                  {data.related.map((r) => (
                    <li key={r.href} style={LI}><Link href={r.href} style={{ color: "var(--navy-800)", fontWeight: 600 }}>{r.name}</Link></li>
                  ))}
                </ul>
              </>
            )}
          </article>
          <aside style={{ position: bp.ltDesktop ? "static" : "sticky", top: 24, background: "var(--navy-900)", borderRadius: "var(--radius-xl)", padding: bp.mobile ? 24 : 32, color: "var(--white)" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "var(--tracking-widest)", textTransform: "uppercase", color: "var(--gold-400)", marginBottom: 10 }}>Get started</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-xl)", marginBottom: 14 }}>Talk to an advisor about {data.name}</div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "var(--text-sm)", color: "var(--navy-300)", lineHeight: "var(--leading-sm)", marginBottom: 24 }}>First consultation. Tell us what you need and we will scope it with you.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <Button variant="primary" fullWidth onClick={() => router.push("/contact")}>Request a Consultation</Button>
              <Button variant="secondary" fullWidth onClick={() => router.push("/chat")}>Chat With an Advisor</Button>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
    </div>
  );
}
