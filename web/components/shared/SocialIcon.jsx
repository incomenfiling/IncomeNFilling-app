"use client";
import { useState } from "react";

export function SocialIcon({ d, label, href }) {
  const [h, setH] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer me"
      aria-label={`${label} (opens in a new tab)`}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        width: 44, height: 44, borderRadius: "50%", border: "1px solid " + (h ? "var(--gold-500)" : "rgba(255,255,255,.18)"),
        background: h ? "var(--gold-500)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center",
        textDecoration: "none", transform: h ? "translateY(-3px)" : "none", transition: "all .18s var(--ease-standard)",
      }}
    >
      <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" width="17" height="17" fill={h ? "var(--navy-950)" : "var(--white)"}>{d}</svg>
    </a>
  );
}
