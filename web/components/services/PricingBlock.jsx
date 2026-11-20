"use client";
import { ProblemsSolve } from "@/components/ui/ProblemsSolve";
import { useBP } from "@/lib/useBP";

const H2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "40px 0 16px" };
const H3 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-lg)", color: "var(--navy-900)", margin: "24px 0 12px" };
const T = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 };
const TAG = { background: "var(--gold-050)", color: "var(--navy-900)", border: "1px solid var(--gold-500)", borderRadius: 6, padding: "1px 8px", fontWeight: 600, fontSize: 12 };

function Cell({ v }) {
  if (v === "Included") return <span style={{ color: "var(--status-positive)", fontWeight: 600 }}>Included</span>;
  if (v === "Not included") return <span style={{ color: "var(--ink-300)" }}>Not included</span>;
  return <span style={TAG}>{v}</span>;
}

export function PricingBlock({ p }) {
  const bp = useBP();
  return (
    <section aria-label="Prices">
      <h2 style={H2}>Prices</h2>
      <div style={{ background: "var(--navy-900)", color: "var(--white)", borderRadius: "var(--radius-xl)", padding: bp.mobile ? 20 : 28 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--navy-300)" }}>From</div>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--gold-400)" }}>{p.from} <span style={{ fontSize: 16, color: "var(--white)" }}>+ 18% GST</span></div>
        <p style={{ ...T, color: "var(--navy-300)", marginTop: 6 }}>{p.fromNote}</p>
      </div>
      <p style={{ ...T, marginTop: 14 }}>{p.intro}</p>

      <ProblemsSolve items={p.solve} mobile={bp.mobile} />

      {p.groups.map((g) => (
        <div key={g.title}>
          <h3 style={H3}>{g.title}</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 12 }}>
            {g.plans.map((pl) => (
              <div key={pl.name} style={{ background: "var(--white)", border: pl.recommended ? "2px solid var(--gold-500)" : "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 14 }}>
                {pl.recommended && <span style={{ ...TAG, fontSize: 11 }}>Recommended</span>}
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy-900)", marginTop: pl.recommended ? 6 : 0 }}>{pl.name}</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, color: "var(--navy-900)" }}>{pl.total}</div>
                <div style={{ ...T, fontSize: 12 }}>incl. GST · {pl.base}</div>
              </div>
            ))}
          </div>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 14, background: "var(--white)" }}>
              <caption style={{ position: "absolute", left: -9999 }}>{g.title} plan comparison</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ textAlign: "left", padding: "8px 10px", color: "var(--ink-500)", fontWeight: 500 }}>What you get</th>
                  <th scope="col" style={{ padding: "8px 10px", color: "var(--navy-900)" }}>{g.plans[0].name}</th>
                  <th scope="col" style={{ padding: "8px 10px", color: "var(--navy-900)" }}>Complete</th>
                </tr>
              </thead>
              <tbody>
                {g.rows.map((r) => (
                  <tr key={r[0]} style={{ borderTop: "1px solid var(--ink-100)" }}>
                    <th scope="row" style={{ textAlign: "left", fontWeight: 400, padding: "9px 10px", color: "var(--ink-500)" }}>{r[0]}</th>
                    <td style={{ textAlign: "center", padding: "9px 6px" }}><Cell v={r[1]} /></td>
                    <td style={{ textAlign: "center", padding: "9px 6px" }}><Cell v={r[2]} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 12 }}>
        {p.footnotes.map((f) => <p key={f} style={{ ...T, fontSize: 13, marginBottom: 6 }}>{f}</p>)}
      </div>

      <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 16, marginTop: 20 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy-900)", marginBottom: 6 }}>Why choose Complete</div>
        <p style={T}>{p.why}</p>
      </div>

      <h3 style={H3}>Add-on</h3>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 14 }}>
        <div><div style={{ fontWeight: 600, color: "var(--navy-900)", fontFamily: "var(--font-display)" }}>{p.addon.name}</div><div style={{ ...T, fontSize: 13 }}>{p.addon.desc}</div></div>
        <div style={{ textAlign: "right", whiteSpace: "nowrap" }}><div style={{ fontWeight: 700, color: "var(--navy-900)" }}>{p.addon.total}</div><div style={{ ...T, fontSize: 12 }}>{p.addon.fee}</div></div>
      </div>

      <h3 style={H3}>What we need from you</h3>
      <ul style={{ margin: 0, paddingLeft: 22 }}>{p.need.map((t) => <li key={t} style={{ ...T, marginBottom: 6 }}>{t}</li>)}</ul>

      <h3 style={H3}>Terms</h3>
      <ul style={{ margin: 0, paddingLeft: 22 }}>{p.terms.map((t) => <li key={t} style={{ ...T, marginBottom: 6 }}>{t}</li>)}</ul>
    </section>
  );
}
