"use client";
import { useBP } from "@/lib/useBP";
import { WhatsAppIcon } from "@/components/shared/icons";
import { WHATSAPP_URL, BOOKING_URL, PHONE_HREF } from "@/data/content";

// Sticky Call / WhatsApp / Book bar, phones only. Click tracking is handled by the delegated listener in Analytics.
export function MobileActionBar() {
  const bp = useBP();
  if (!bp.mobile) return null;
  const item = { flex: 1, minHeight: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none", color: "var(--white)" };
  return (
    <nav aria-label="Quick contact" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 85, display: "flex", background: "var(--navy-900)", borderTop: "1px solid var(--navy-700)", paddingBottom: "env(safe-area-inset-bottom)" }}>
      <a href={PHONE_HREF} style={item}>Call</a>
      <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" style={{ ...item, background: "#0B6E5A" }}>
        <WhatsAppIcon size={18} color="var(--white)" /> WhatsApp
      </a>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ ...item, background: "var(--gold-500)", color: "var(--navy-900)" }}>Book a call</a>
    </nav>
  );
}
