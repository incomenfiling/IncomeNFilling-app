import { PRICE_DETAILS } from "@/data/pricingDetails";

const T = { fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--ink-500)", margin: 0 };
const H = { fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--navy-900)", margin: "0 0 10px" };
const box = { border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 16, background: "var(--white)" };

function Cell({ v }) {
  if (v === "✓") return <span aria-label="Included" style={{ color: "#0B6E5A", fontWeight: 700, fontSize: 16 }}>✓</span>;
  if (v === "✗") return <span aria-label="Not included" style={{ color: "#8A94A3", fontSize: 16 }}>✗</span>;
  if (/^(FREE|50% OFF)/.test(v)) return <span style={{ background: "var(--gold-050)", border: "1px solid var(--gold-500)", color: "var(--navy-900)", fontSize: 12, fontWeight: 700, padding: "1px 8px", borderRadius: 6 }}>{v}</span>;
  return <span style={{ fontSize: 13, color: "var(--ink-700)" }}>{v}</span>;
}

function Matrix({ m }) {
  const th = { padding: "10px 12px", textAlign: "center", fontSize: 13, fontWeight: 700, color: "var(--white)", background: "var(--navy-900)", verticalAlign: "bottom" };
  return (
    <div style={{ marginBottom: 18 }}>
      {m.title && <h5 style={{ ...H, fontSize: 15 }}>{m.title}</h5>}
      <div style={{ overflowX: "auto", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)" }}>
        <table style={{ width: "100%", minWidth: 480, borderCollapse: "collapse", fontFamily: "var(--font-body)" }}>
          <thead>
            <tr>
              <th style={{ ...th, textAlign: "left" }}>What you get</th>
              {m.plans.map((p, i) => (
                <th key={p} style={{ ...th, borderBottom: i === m.recommended ? "3px solid var(--gold-500)" : "3px solid transparent" }}>
                  {p}
                  {i === m.recommended && <div style={{ fontSize: 11, color: "var(--gold-500)", fontWeight: 600 }}>Recommended</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {m.groups.map((g, gi) => [
              g.h ? (
                <tr key={`h${gi}`}><td colSpan={m.plans.length + 1} style={{ background: "var(--paper)", padding: "8px 12px", fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-800)" }}>{g.h}</td></tr>
              ) : null,
              ...g.rows.map((r, ri) => (
                <tr key={`${gi}-${ri}`} style={{ borderTop: "1px solid var(--ink-100)" }}>
                  <td style={{ padding: "9px 12px", fontSize: 13, color: "var(--ink-700)" }}>{r[0]}</td>
                  {r.slice(1).map((v, vi) => <td key={vi} style={{ padding: "9px 8px", textAlign: "center" }}><Cell v={v} /></td>)}
                </tr>
              )),
            ])}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function List({ title, items, mark, color }) {
  return (
    <div style={box}>
      <h4 style={H}>{title}</h4>
      <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 8 }}>
        {items.map((t) => (
          <li key={t} style={{ ...T, display: "flex", gap: 8 }}><span aria-hidden="true" style={{ color, fontWeight: 700 }}>{mark}</span><span>{t}</span></li>
        ))}
      </ul>
    </div>
  );
}

export function PriceDetails({ name }) {
  const d = PRICE_DETAILS[name];
  if (!d) return null;
  return (
    <details className="price-details" style={{ marginTop: 16, border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", background: "var(--paper)" }}>
      <summary style={{ cursor: "pointer", padding: "14px 16px", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--navy-900)", listStyle: "revert" }}>
        View inclusions, exclusions, what we need and terms
      </summary>
      <div style={{ padding: "4px 16px 18px", display: "grid", gap: 18 }}>
        {d.solve && (
          <div>
            <h4 style={H}>Problems we solve</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 10 }}>
              {d.solve.map((s) => (
                <div key={s.q} style={{ ...box, padding: 12 }}>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "var(--navy-900)" }}>{s.q}</div>
                  <div style={{ ...T, fontSize: 13, marginTop: 4 }}>{s.a}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        {d.matrices && <div>{d.matrices.map((m, i) => <Matrix key={i} m={m} />)}</div>}
        {d.notes && d.notes.map((n) => <p key={n} style={{ ...T, fontSize: 13 }}>{n}</p>)}
        {d.includeGroups && (
          <div style={box}>
            <h4 style={H}>What is included</h4>
            {d.includeNote && <p style={{ ...T, marginBottom: 10 }}>{d.includeNote}</p>}
            {d.includeGroups.map((g) => (
              <div key={g.h} style={{ marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: "var(--navy-800)", margin: "6px 0" }}>{g.h}</div>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 6 }}>
                  {g.items.map((t) => <li key={t} style={{ ...T, display: "flex", gap: 8 }}><span aria-hidden="true" style={{ color: "#0B6E5A", fontWeight: 700 }}>✓</span><span>{t}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        )}
        {(d.include || d.exclude) && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {d.include && <List title="What is included" items={d.include} mark="✓" color="#0B6E5A" />}
            {d.exclude && !d.includeGroups && <List title="What is not included" items={d.exclude} mark="✗" color="#8A94A3" />}
          </div>
        )}
        {d.includeGroups && d.exclude && <List title="What is not included" items={d.exclude} mark="✗" color="#8A94A3" />}
        {!d.include && !d.includeGroups && d.exclude && <List title="What is not included" items={d.exclude} mark="✗" color="#8A94A3" />}
        {d.extras && d.extras.map((e) => (
          <div key={e.h} style={box}>
            <h4 style={H}>{e.h}</h4>
            {e.table && (
              <div style={{ overflowX: "auto", marginBottom: 10 }}>
                <table style={{ width: "100%", minWidth: 360, borderCollapse: "collapse", fontFamily: "var(--font-body)", fontSize: 13 }}>
                  <thead><tr>{e.table.head.map((h) => <th key={h} style={{ textAlign: "left", padding: "8px 10px", background: "var(--paper)", color: "var(--navy-900)" }}>{h}</th>)}</tr></thead>
                  <tbody>{e.table.rows.map((r, i) => <tr key={i} style={{ borderTop: "1px solid var(--ink-100)" }}>{r.map((c, j) => <td key={j} style={{ padding: "8px 10px", color: "var(--ink-700)", fontWeight: j ? 600 : 400 }}>{c}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
            {e.p && e.p.map((p) => <p key={p} style={{ ...T, marginBottom: 6 }}>{p}</p>)}
          </div>
        ))}
        {d.need && <List title="What we need from you" items={d.need} mark="•" color="var(--navy-800)" />}
        <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderRadius: "var(--radius-lg)", padding: 16 }}>
          <h4 style={H}>Terms</h4>
          <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 6 }}>
            {[...d.terms, "Our working hours are 10:00 to 19:00 IST, Monday to Saturday.", "These are the rates on the day you read this page. If a rate changes before we start work, we will update you."].map((t) => <li key={t} style={T}>{t}</li>)}
          </ul>
        </div>
      </div>
    </details>
  );
}
