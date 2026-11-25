import Link from "next/link";
import { notFound } from "next/navigation";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { PRICE_GROUPS } from "@/components/pricing/PriceGroupPage";
import { PriceDetails } from "@/components/pricing/PriceDetails";
import { PlanCheckout } from "@/components/pricing/PlanCheckout";
import { BOOKING_URL, WHATSAPP_URL } from "@/data/content";
import { findPlan, planLabel, planHref } from "@/lib/plans";

// Plan page: "Choose this plan" lands here. Shows the chosen plan, its inclusions and terms, then pay online or talk first.
export const metadata = { title: { absolute: "Your plan | Income N Filing" }, robots: { index: false, follow: true } };

const T = { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };
const inr = (n) => "₹" + n.toLocaleString("en-IN");

export default async function Page({ params, searchParams }) {
  const { group } = await params;
  const q = await searchParams;
  const g = PRICE_GROUPS[group];
  if (!g) notFound();
  const p = findPlan(g.group, String(q.service || ""), String(q.plan || ""));
  if (!p || !p.r) notFound();
  const { s } = p;
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <WhatsAppButton />
      <NavBar active="pricing" />
      <section style={{ background: "var(--navy-900)", padding: "clamp(28px,5vw,48px) 20px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <Link href={`/pricing/${group}#${s.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} style={{ ...T, color: "var(--navy-300)", textDecoration: "none", fontSize: 13 }}>← All {s.name} plans</Link>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(24px,4vw,36px)", color: "var(--white)", margin: "10px 0 6px" }}>{s.name}: {p.label}</h1>
          <p style={{ ...T, color: "var(--navy-300)" }}>{s.per}{p.r[3] ? ` · ${p.r[3]}` : ""}</p>
        </div>
      </section>
      <main style={{ maxWidth: 1000, margin: "0 auto", padding: "24px 20px 96px", display: "grid", gap: 24 }}>
        <div className="plan-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, alignItems: "start" }}>
          <div style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 22, minWidth: 0 }}>
            {p.recommended && <span style={{ background: "var(--navy-900)", color: "var(--gold-400)", fontSize: 11, fontWeight: 700, padding: "2px 9px", borderRadius: 999 }}>Recommended</span>}
            <div style={{ ...T, fontSize: 12, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-800)", marginTop: 8 }}>Your plan</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, color: "var(--navy-900)", margin: "6px 0 2px" }}>{p.fee}</div>
            <p style={T}>{p.final ? "Final price" : p.quoted ? "Quoted in writing after we see your details" : `+ 18% GST · total ${inr(p.total)}`}</p>
            {s.note && <p style={{ ...T, fontSize: 13, marginTop: 10 }}>{s.note}</p>}
            {s.rows.length > 1 && (
              <div style={{ marginTop: 16 }}>
                <div style={{ ...T, fontSize: 13, fontWeight: 700, color: "var(--navy-800)", marginBottom: 8 }}>Switch plan</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.rows.map((r) => {
                    const l = planLabel(r[0]);
                    const on = l === p.label;
                    return <Link key={l} href={planHref(group, s.name, l)} aria-current={on ? "page" : undefined} style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, padding: "6px 12px", borderRadius: 999, textDecoration: "none", background: on ? "var(--navy-900)" : "var(--paper)", color: on ? "var(--white)" : "var(--navy-800)", border: "1px solid var(--ink-100)" }}>{l.split(" (")[0]} · {r[1]}</Link>;
                  })}
                </div>
              </div>
            )}
          </div>
          <PlanCheckout group={group} service={s.name} plan={p.label} total={p.total} quoted={p.quoted} />
        </div>
        <section style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 20, minWidth: 0 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--text-xl)", color: "var(--navy-900)", margin: 0 }}>What this plan includes, what it does not, and terms</h2>
          <PriceDetails name={s.name} open />
          {g.detailsName && <PriceDetails name={g.detailsName} open />}
          {s.href && <p style={{ ...T, marginTop: 12 }}><Link href={s.href} style={{ color: "var(--navy-800)", fontWeight: 700 }}>Read the full {s.name} guide →</Link></p>}
        </section>
        <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 18 }}>
          <p style={T}>Fees are professional fees only. Government fees, if any, are separate. Not sure this plan fits? <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>Book a 20-min call</a> or <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>WhatsApp us</a>. Refunds follow our <Link href="/refund-policy" style={{ color: "var(--navy-800)", fontWeight: 700 }}>refund policy</Link>.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
