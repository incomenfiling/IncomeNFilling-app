import Image from "next/image";
import { CLIENT_LOGOS } from "@/data/clients";

export function ClientLogoGrid() {
  return (
    <ul style={{ listStyle: "none", margin: "0 auto", padding: 0, maxWidth: 1000, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 14 }}>
      {CLIENT_LOGOS.map((c) => (
        <li key={c.name} style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: "16px 12px", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, textAlign: "center" }}>
          <div style={{ position: "relative", width: "100%", height: 72 }}>
            <Image src={`/images/clients/${c.file}`} alt={`${c.name} logo`} fill sizes="150px" style={{ objectFit: "contain" }} />
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontWeight: 500, fontSize: 13, lineHeight: 1.35, color: "var(--navy-900)" }}>{c.name}</span>
        </li>
      ))}
    </ul>
  );
}
