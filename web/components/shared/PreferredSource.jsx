"use client";
import { track } from "@/lib/track";

// Google's "preferred sources" deeplink (Search Central). No Google script is loaded, so no extra consent is needed.
export const PREFERRED_SOURCE_URL = "https://www.google.com/preferences/source?q=incomenfiling.com";

export function PreferredSource({ source = "footer", dark = false }) {
  return (
    <a
      href={PREFERRED_SOURCE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("preferred_source_click", { source })}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", borderRadius: 999, minHeight: 44, textDecoration: "none", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600,
        background: dark ? "var(--white)" : "var(--navy-900)", color: dark ? "var(--navy-900)" : "var(--white)", border: "1px solid var(--navy-300)" }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.8 5.8 21.2l1.6-7L2 9.5l7.1-.6z" /></svg>
      Add as a preferred source on Google
    </a>
  );
}
