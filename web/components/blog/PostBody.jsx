const H2 = { fontFamily: "var(--font-display)", fontWeight: "var(--weight-semibold)", fontSize: "var(--text-2xl)", color: "var(--navy-900)", margin: "36px 0 14px" };
const P = { fontFamily: "var(--font-body)", color: "var(--ink-500)", fontSize: "var(--text-base)", lineHeight: 1.75, margin: "0 0 16px" };

export function PostBody({ blocks }) {
  return blocks.map((b, i) => {
    if (b.h2) return <h2 key={i} style={H2}>{b.h2}</h2>;
    if (b.p) return <p key={i} style={P}>{b.p}</p>;
    if (b.ul) return <ul key={i} style={{ margin: "0 0 16px", paddingLeft: 22 }}>{b.ul.map((t) => <li key={t} style={{ ...P, margin: "0 0 8px" }}>{t}</li>)}</ul>;
    if (b.faq) return <div key={i}>{b.faq.map((f) => <div key={f.q}><h3 style={{ ...H2, fontSize: "var(--text-lg)", margin: "24px 0 8px" }}>{f.q}</h3><p style={P}>{f.a}</p></div>)}</div>;
    return null;
  });
}
