import Link from "next/link";
import { InfoPage, Sec, Tiles, T } from "@/components/layout/InfoPage";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";
import { getOpenings, modeLabel } from "@/lib/careers";

export const dynamic = "force-dynamic";

export const metadata = {
  title: { absolute: "Careers at Income N Filing: Sales, HR and Accountant Jobs" },
  description: "Open roles at Income N Filing: Sales Executive (work from home), HR Executive and Accountant in Kolkata and Bengaluru. Apply online or email hr@incomenfiling.com.",
  alternates: { canonical: "/careers" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/careers", title: "Careers | Income N Filing", description: "Sales, HR and Accountant roles in Kolkata, Bengaluru and work from home." },
};

export const Chip = ({ children, gold }) => (
  <span style={{ background: gold ? "var(--gold-050)" : "var(--paper)", border: "1px solid " + (gold ? "var(--gold-200)" : "var(--ink-100)"), color: "var(--navy-800)", fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, padding: "3px 10px", borderRadius: 999 }}>{children}</span>
);

export default async function Page() {
  const openings = await getOpenings();
  return (
    <InfoPage
      eyebrow="Careers"
      h1="Work with Income N Filing"
      lead="We are a tax and compliance firm in Kolkata with teams in Bengaluru and other cities. Every file is made by one person and checked by another."
      ctas={<a href="#roles" style={{ display: "inline-block", marginTop: 20, background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>See open roles</a>}
    >
      <div id="roles" style={{ scrollMarginTop: 90 }}>
        <Sec h={`Open roles (${openings.length})`}>
          <div style={{ display: "grid", gap: 12 }}>
            {openings.map((o) => (
              <Link key={o.slug} href={`/careers/${o.slug}`} style={{ textDecoration: "none", background: "var(--white)", border: "1px solid var(--ink-100)", borderLeft: "4px solid var(--navy-900)", borderRadius: "var(--radius-md)", padding: 16, display: "grid", gap: 8 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--navy-900)" }}>{o.role}</span>
                  <span style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    <Chip>{o.city}</Chip>
                    <Chip gold={o.mode === "WFH"}>{modeLabel(o.mode)}</Chip>
                    <Chip>{o.type}</Chip>
                  </span>
                </div>
                <span style={{ ...T, fontSize: 14.5 }}>{o.summary}</span>
                <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, color: "var(--navy-800)", fontSize: 14 }}>View role and apply →</span>
              </Link>
            ))}
          </div>
        </Sec>
      </div>
      <Sec h="How we work">
        <Tiles items={[["One prepares, another checks", "Every file is made by one person and checked by another. You learn from a review on every job."], ["Fixed process", "Clear steps, due dates tracked and clients updated in writing."], ["Learn tax and compliance", "GST, income tax, TDS, ROC, accounting in Tally and digital signatures."]]} />
      </Sec>
      <Sec h="How to apply">
        <p style={T}>Open a role and fill in the short form, or email your resume to <a href="mailto:hr@incomenfiling.com" style={{ color: "var(--navy-800)", fontWeight: 700 }}>hr@incomenfiling.com</a> with the role name in the subject. We call shortlisted candidates during working hours, Monday to Saturday, 10:00 to 19:00 IST. We never ask a candidate for money.</p>
      </Sec>
      <SimpleLeadForm
        title="Not seeing your role? Send a general application"
        source="career"
        propertyField="role"
        button="Send application"
        doneText="We have your application and will call you if a role matches, during working hours."
        fields={[
          { name: "name", label: "Full name", required: true },
          { name: "phone", label: "Mobile number", type: "tel", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "role", label: "Area you want to work in", type: "select", required: true, options: ["Sales", "HR", "Accountant", "Income tax and TDS", "GST", "ROC and company work", "Other"] },
          { name: "experience", label: "Experience", type: "select", required: true, options: ["Fresher", "Under 1 year", "1 to 3 years", "3 to 5 years", "More than 5 years"] },
          { name: "city", label: "Current city", required: true },
          { name: "resume", label: "Resume link (Google Drive or LinkedIn)", type: "url" },
          { name: "about", label: "Anything you want us to know", type: "textarea" },
        ]}
      />
    </InfoPage>
  );
}
