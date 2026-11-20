// Highlighted "Problems we solve" block. Use this one component everywhere (service pages, /pricing, future pages).
export function ProblemsSolve({ items, mobile = false }) {
  return (
    <div style={{ background: "var(--gold-050)", border: "1px solid var(--gold-200)", borderLeft: "5px solid var(--gold-500)", borderRadius: "var(--radius-lg)", padding: mobile ? 14 : 18, margin: "18px 0" }}>
      <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--navy-900)", margin: "0 0 12px" }}>Problems we solve</h3>
      <div style={{ display: "grid", gridTemplateColumns: mobile ? "1fr 1fr" : "repeat(auto-fit, minmax(190px, 1fr))", gap: 10 }}>
        {items.map((s) => (
          <div key={s.q} style={{ background: "var(--white)", border: "1px solid var(--gold-200)", borderTop: "3px solid var(--navy-900)", borderRadius: "var(--radius-md)", padding: 12 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--navy-900)", fontSize: 14, lineHeight: 1.35 }}>{s.q}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, color: "var(--ink-700)", marginTop: 4 }}>{s.a}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
