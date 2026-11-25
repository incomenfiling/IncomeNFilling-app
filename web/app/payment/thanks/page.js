import Link from "next/link";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { WHATSAPP_URL } from "@/data/content";

export const metadata = { title: "Payment status | Income N Filing", robots: { index: false, follow: false } };

// Razorpay sends the customer here after a payment link. The signature is checked with the key secret,
// so a typed URL cannot show "payment received".
async function verified(q) {
  const secret = process.env.RAZORPAY_KEY_SECRET;
  const sig = q.razorpay_signature;
  if (!secret || !sig) return false;
  const msg = [q.razorpay_payment_link_id, q.razorpay_payment_link_reference_id, q.razorpay_payment_link_status, q.razorpay_payment_id].join("|");
  const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const mac = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(msg));
  const hex = [...new Uint8Array(mac)].map((x) => x.toString(16).padStart(2, "0")).join("");
  return hex === sig;
}

export default async function Page({ searchParams }) {
  const q = await searchParams;
  const paid = q.razorpay_payment_link_status === "paid" && (await verified(q));
  const T = { fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.6, color: "var(--ink-500)", margin: "0 0 12px" };
  return (
    <div style={{ background: "var(--paper)", minHeight: "100vh" }}>
      <NavBar />
      <main style={{ maxWidth: 640, margin: "0 auto", padding: "56px 20px 96px" }}>
        <div style={{ background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-xl)", padding: 28 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--navy-900)", margin: "0 0 12px" }}>{paid ? "Payment received" : "Payment not confirmed yet"}</h1>
          {paid ? (
            <p style={T}>Thank you. Payment ID {String(q.razorpay_payment_id).slice(0, 40)}. Razorpay will email your receipt. Our team will call you during working hours (Monday to Saturday, 10:00 to 19:00 IST) and share the document list.</p>
          ) : (
            <p style={T}>If money left your account, please do not pay again. Send us the details on WhatsApp and we will check it with Razorpay.</p>
          )}
          <p style={{ ...T, margin: 0 }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ color: "var(--navy-800)", fontWeight: 700 }}>WhatsApp us</a> · <Link href="/pricing" style={{ color: "var(--navy-800)", fontWeight: 700 }}>Back to prices</Link></p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
