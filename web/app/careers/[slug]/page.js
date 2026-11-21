import { notFound } from "next/navigation";
import Link from "next/link";
import { InfoPage, Sec, T, Chip, Bullets } from "@/components/layout/InfoPage";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";
import { getOpenings, modeLabel } from "@/lib/careers";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const o = (await getOpenings()).find((x) => x.slug === slug);
  if (!o) return { title: "Role not found", robots: { index: false } };
  const t = `${o.role} (${o.city}, ${modeLabel(o.mode)}) | Careers at Income N Filing`;
  return { title: { absolute: t }, description: `${o.summary} Apply online or email ${o.email}.`.slice(0, 158), alternates: { canonical: `/careers/${o.slug}` }, openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: `/careers/${o.slug}`, title: t } };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const o = (await getOpenings()).find((x) => x.slug === slug);
  if (!o) notFound();
  const wfh = o.mode === "WFH";
  const ld = {
    "@context": "https://schema.org", "@type": "JobPosting", title: o.role,
    description: `<p>${o.summary}</p><ul>${o.responsibilities.map((r) => `<li>${r}</li>`).join("")}</ul>`,
    datePosted: o.posted || "2026-11-21", employmentType: "FULL_TIME", directApply: true,
    hiringOrganization: { "@type": "Organization", name: "Income N Filing", sameAs: "https://incomenfiling.com", logo: "https://incomenfiling.com/og/default.png" },
    ...(wfh
      ? { jobLocationType: "TELECOMMUTE", applicantLocationRequirements: { "@type": "Country", name: "India" } }
      : { jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: o.city, addressCountry: "IN" } } }),
  };
  return (
    <InfoPage eyebrow={`${o.department} · ${o.city}`} h1={`${o.role}, ${wfh ? "work from home" : o.city}`} lead={o.summary}
      ctas={<div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 18 }}><Chip>{o.city}</Chip><Chip gold={wfh}>{modeLabel(o.mode)}</Chip><Chip>{o.type}</Chip>{o.experience && <Chip>{o.experience}</Chip>}</div>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      {o.responsibilities.length > 0 && <Sec h="What you will do"><Bullets items={o.responsibilities} /></Sec>}
      {o.requirements.length > 0 && <Sec h="What we look for"><Bullets items={o.requirements} /></Sec>}
      <Sec h="How to apply">
        <p style={T}>Fill in the form below, or email your resume to <a href={`mailto:${o.email}?subject=${encodeURIComponent(o.role + " - " + o.city)}`} style={{ color: "var(--navy-800)", fontWeight: 700 }}>{o.email}</a> with the role in the subject. We call shortlisted candidates during working hours, Monday to Saturday, 10:00 to 19:00 IST. We never ask a candidate for money.</p>
      </Sec>
      <SimpleLeadForm
        title={`Apply for ${o.role}, ${o.city}`}
        source="career"
        propertyValue={`${o.role} | ${o.city} | ${o.mode}`}
        extraNotes={`Role: ${o.role} | City: ${o.city} | Mode: ${o.mode} | Posting: ${o.slug}`}
        button="Send application"
        doneText="We have your application and will call you if you are shortlisted, during working hours."
        fields={[
          { name: "name", label: "Full name", required: true },
          { name: "phone", label: "Mobile number", type: "tel", required: true },
          { name: "email", label: "Email", type: "email", required: true },
          { name: "experience", label: "Experience", type: "select", required: true, options: ["Fresher", "Under 1 year", "1 to 3 years", "3 to 5 years", "More than 5 years"] },
          { name: "city", label: "Current city", required: true },
          { name: "resume", label: "Resume link (Google Drive or LinkedIn)", type: "url" },
          { name: "about", label: "Anything you want us to know", type: "textarea" },
        ]}
      />
      <p style={{ ...T, marginTop: 18 }}><Link href="/careers" style={{ color: "var(--navy-800)", fontWeight: 700 }}>← All open roles</Link></p>
    </InfoPage>
  );
}
