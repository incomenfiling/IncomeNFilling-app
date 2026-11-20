import { InfoPage, Sec, Tiles, T } from "@/components/layout/InfoPage";
import { SimpleLeadForm } from "@/components/forms/SimpleLeadForm";

export const metadata = {
  title: { absolute: "Careers at Income N Filing, Kolkata" },
  description: "Work in tax and compliance at Income N Filing, Kasba, Kolkata. Send a general application for accounting, tax, GST, ROC and client support roles.",
  alternates: { canonical: "/careers" },
  openGraph: { images: [{ url: "/og/default.png", width: 1200, height: 630 }], url: "/careers", title: "Careers | Income N Filing", description: "Send a general application to work with Income N Filing, Kolkata." },
};

export default function Page() {
  return (
    <InfoPage
      eyebrow="Careers"
      h1="Work with Income N Filing"
      lead="We are a tax and compliance firm in Kasba, Kolkata. We learn the work properly, check each other's work and keep our clients informed."
      ctas={<a href="#apply" style={{ display: "inline-block", marginTop: 20, background: "var(--gold-500)", color: "var(--navy-900)", fontWeight: 700, padding: "12px 22px", borderRadius: 999, textDecoration: "none" }}>Send your application</a>}
    >
      <Sec h="How we work">
        <Tiles items={[["One prepares, another checks", "Every file is made by one person and checked by another. You learn from a review on every job."], ["Fixed process", "Clear steps, due dates tracked and clients updated in writing."], ["Learn tax and compliance", "GST, income tax, TDS, ROC, accounting in Tally and digital signatures."]]} />
      </Sec>
      <Sec h="Areas we hire for">
        <p style={T}>Accounting in Tally, income tax and TDS, GST, ROC and company work, digital signature support, and client calling and support. Tell us where you want to work in the form. We do not list a fixed opening on this page, and we contact you when a role matches.</p>
      </Sec>
      <Sec h="How to apply">
        <p style={T}>Fill in the short form with a link to your resume (a Google Drive or LinkedIn link). We read every application and call shortlisted candidates during working hours, Monday to Saturday, 10:00 to 19:00 IST. We never ask a candidate for money.</p>
      </Sec>
      <div id="apply" style={{ scrollMarginTop: 90 }}>
        <SimpleLeadForm
          title="Send your application"
          source="career"
          propertyField="role"
          button="Send application"
          doneText="We have your application and will call you if a role matches, during working hours."
          fields={[
            { name: "name", label: "Full name", required: true },
            { name: "phone", label: "Mobile number", type: "tel", required: true },
            { name: "email", label: "Email", type: "email", required: true },
            { name: "role", label: "Area you want to work in", type: "select", required: true, options: ["Accounting (Tally)", "Income tax and TDS", "GST", "ROC and company work", "Digital signature support", "Client calling and support", "Other"] },
            { name: "experience", label: "Experience", type: "select", required: true, options: ["Fresher", "Under 1 year", "1 to 3 years", "3 to 5 years", "More than 5 years"] },
            { name: "city", label: "Current city", required: true },
            { name: "resume", label: "Resume link (Google Drive or LinkedIn)", type: "url" },
            { name: "about", label: "Anything you want us to know", type: "textarea" },
          ]}
        />
      </div>
    </InfoPage>
  );
}
