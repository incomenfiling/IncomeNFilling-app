"use client";
import { useBP } from "@/lib/useBP";
import { WhatsAppIcon } from "@/components/shared/icons";
import { WHATSAPP_URL } from "@/data/content";

// Floating WhatsApp shortcut used on every page except Home.
export function WhatsAppButton({ bottom }) {
  const bp = useBP();
  if (bp.mobile) return null; // phones use the sticky action bar
  return (
    <a
      href={WHATSAPP_URL}
      aria-label="Chat with Income N Filing on WhatsApp (opens in a new tab)"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed", bottom: bottom ?? (bp.ltDesktop ? 16 : 26), right: bp.ltDesktop ? 16 : 26,
        width: bp.ltDesktop ? 48 : 56, height: bp.ltDesktop ? 48 : 56, borderRadius: "50%",
        background: "var(--whatsapp-green)", display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "var(--shadow-lg)", zIndex: 80, textDecoration: "none",
      }}
    >
      <span aria-hidden="true" className="fab-pulse" style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid var(--whatsapp-green)", animation: "pulse-ring 2s infinite" }} />
      <WhatsAppIcon aria-hidden="true" size={28} color="var(--white)" />
    </a>
  );
}
