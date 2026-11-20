"use client";
import Image from "next/image";
import { track } from "@/lib/track";
import { WHATSAPP_URL, BOOKING_URL, MAPS_URL, EMAIL } from "@/data/content";

// Verbatim Google reviews (wording and spelling unchanged). No review schema on purpose.
const REVIEWS = [
  { name: "Aman Mishra", photo: "aman-mishra.jpg", text: "We are very much satisfied with there services. Specially, Anish has always been on his toes to help us whenever needed, he personally tracks all the progress and provides on time updates and solutions. A big shoot out to his team. Great work! Highly recommended to people new in business and startups." },
  { name: "Vaibhav Gupta", photo: "vaibhav-gupta.jpg", text: "I have met with several firms, but this firm outperforms each one of them by miles!! Crazy team, superb follow up and assistance. Would recommend it to all. Thanks Anish ji & team" },
  { name: "Ajay Choudhary", photo: "ajay-choudhary.jpg", text: "The practice has been long established and well organized and each member of staff is very helpful. Mr. Anish, the founder of is very friendly, warm & highly experienced individual and offers useful guidance and advices me. highly recommend Accounting practice, ITR, GST, company's Audit, financial advisory services." },
  { name: "Sagar Gidwani", photo: "sagar-gidwani.jpg", text: "Thank you so much Mr. Jhunjhunwala for making every process smooth and getting our documents ready within few days and the way you explain the things in easy language is impressive. So highly recommended to everyone and All the best to Anish ji and his team" },
  { name: "Wheelectric Hybrid EV Kits", photo: "wheelectric.jpg", text: "Valuable service and management." },
  { name: "SUNNY Choudhary", when: "2026", text: "\"Extremely fast and reliable service! I received my GST number faster than expected. Their experts answered all queries clearly. I would recommend them if you want a hassle-free GST registration.\"" },
  { name: "SURAJ KUMAR", when: "2026", text: "I recently contacted this firm, and I was impressed by their quick and professional service. They collected all the required information and delivered the computation the very next day. The entire process was smooth and hassle-free. I am very satisfied with their service and would highly recommend them to anyone looking for fast and reliable support." },
  { name: "Sandeep Sharma", when: "2026", text: "Its a great experience wid income N filing. Anish dada is so cooperative nd his team working fabulous. If any one ask! I wll refer you guys.. Thankyou so muchh.." },
];

const pill = { display: "inline-flex", alignItems: "center", padding: "12px 22px", borderRadius: 999, fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 14, textDecoration: "none" };

export function ReviewsSection() {
  return (
    <section id="testimonials" style={{ background: "var(--navy-050)", padding: "64px 0" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, color: "var(--navy-900)" }}>4.9★ · 162 Google reviews</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-500)", marginTop: 6 }}>Selected Google reviews, shown as written</div>
        </div>
        <div style={{ display: "flex", gap: 16, overflowX: "auto", scrollSnapType: "x mandatory", paddingBottom: 12, flexWrap: "nowrap" }}>
          {REVIEWS.map((r) => (
            <figure key={r.name} style={{ margin: 0, flex: "0 0 min(320px, 82vw)", scrollSnapAlign: "start", background: "var(--white)", border: "1px solid var(--ink-100)", borderRadius: "var(--radius-lg)", padding: 18, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ color: "var(--gold-500)", fontSize: 14 }} aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.55, color: "var(--ink-700)" }}>{r.text}</blockquote>
              <figcaption style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-500)" }}>
                {r.photo ? (
                  <span style={{ width: 40, height: 40, borderRadius: "50%", overflow: "hidden", flexShrink: 0, display: "block", position: "relative", border: "2px solid var(--gold-500)" }}>
                    <Image src={`/images/reviewers/${r.photo}`} alt={`Photo of ${r.name}`} fill sizes="40px" style={{ objectFit: "cover", transform: "scale(1.2)" }} />
                  </span>
                ) : (
                  <span aria-hidden="true" style={{ width: 40, height: 40, borderRadius: "50%", flexShrink: 0, background: "var(--navy-050)", color: "var(--navy-800)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 14 }}>{r.name.trim()[0]}</span>
                )}
                <span>
                <strong style={{ color: "var(--navy-900)" }}>{r.name}</strong> · Google review{r.when ? `, ${r.when}` : ""}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--link)" }}>Read all 162 reviews on Google</a>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--ink-300)", marginTop: 8 }}>
            Want your review removed from this page? Write to <a href={`mailto:${EMAIL}`} style={{ color: "inherit" }}>{EMAIL}</a>.
          </div>
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("whatsapp_click", { source: "reviews" })} style={{ ...pill, background: "#25D366", color: "#fff" }}>Chat on WhatsApp</a>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => track("booking_click", { source: "reviews" })} style={{ ...pill, background: "var(--gold-500)", color: "var(--navy-950)" }}>Book a 20-min call</a>
        </div>
        <p style={{ textAlign: "center", fontSize: 14, marginTop: 12, opacity: 0.85 }}>Tell us your service and we will explain the process, documents and fees.</p>
      </div>
    </section>
  );
}
