const H2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "36px 0 14px" };
const P = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-base)", lineHeight: 1.75, margin: "0 0 16px" };

export function PostBody({ blocks }) {
  return blocks.map((b, i) => {
    if (b.h2) return <h2 key={i} style={H2}>{b.h2}</h2>;
    if (b.p) return <p key={i} style={P}>{b.p}</p>;
    if (b.ul) return <ul key={i} style={{ margin: "0 0 16px", paddingLeft: 22 }}>{b.ul.map((t) => <li key={t} style={{ ...P, margin: "0 0 8px" }}>{t}</li>)}</ul>;
    if (b.takeaways) return (
      <aside key={i} aria-label="Key takeaways" style={{ margin: "0 0 28px", padding: "16px 20px", background: "var(--white)", border: "1px solid var(--gold-200)", borderLeft: "4px solid var(--navy-900)", borderRadius: 10 }}>
        <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, color: "var(--navy-900)", marginBottom: 8 }}>Key takeaways</div>
        <ul style={{ margin: 0, paddingLeft: 20 }}>{b.takeaways.map((t) => <li key={t} style={{ ...P, margin: "0 0 6px" }}>{t}</li>)}</ul>
      </aside>
    );
    if (b.table) return (
      <div key={i} style={{ margin: "0 0 20px", overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 480, fontFamily: "var(--font-body)", fontSize: 15 }}>
          {b.table.caption && <caption style={{ textAlign: "left", fontWeight: 600, color: "var(--navy-900)", paddingBottom: 8 }}>{b.table.caption}</caption>}
          <thead><tr>{b.table.head.map((h) => <th key={h} scope="col" style={{ textAlign: "left", padding: "8px 10px", background: "var(--navy-900)", color: "var(--white)", fontWeight: 600 }}>{h}</th>)}</tr></thead>
          <tbody>{b.table.rows.map((r, ri) => <tr key={ri}>{r.map((c, ci) => <td key={ci} style={{ padding: "8px 10px", borderBottom: "1px solid var(--ink-100)", color: "var(--ink-500)", verticalAlign: "top" }}>{c}</td>)}</tr>)}</tbody>
        </table>
      </div>
    );
    if (b.sources) return (
      <div key={i} style={{ margin: "28px 0 0" }}>
        <h2 style={{ ...H2, fontSize: "var(--text-lg)", margin: "0 0 8px" }}>Official sources</h2>
        <ul style={{ margin: 0, paddingLeft: 22 }}>{b.sources.map((s) => <li key={s.url} style={{ ...P, margin: "0 0 6px" }}><a href={s.url} rel="noopener noreferrer" target="_blank" style={{ color: "var(--navy-800)" }}>{s.name}</a></li>)}</ul>
      </div>
    );
    if (b.faq) return <div key={i}>{b.faq.map((f) => <div key={f.q}><h3 style={{ ...H2, fontSize: "var(--text-lg)", margin: "24px 0 8px" }}>{f.q}</h3><p style={P}>{f.a}</p></div>)}</div>;
    return null;
  });
}
