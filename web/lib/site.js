export const SITE_URL = "https://incomenfiling.com";
export const SITE_NAME = "Income N Filing";
export const PHONE_E164 = "+917890594600";
export const EMAIL_ADDR = "support@incomenfiling.com";

// Address and coordinates come from the Google Business Profile (Kasba, Kolkata).
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor",
  addressLocality: "Kolkata",
  addressRegion: "West Bengal",
  postalCode: "700039",
  addressCountry: "IN",
};
const GEO = { "@type": "GeoCoordinates", latitude: 22.5234814, longitude: 88.3794836 };
const MAPS_URL = "https://www.google.com/maps?cid=14165944841428699660";

export const ORG_ID = `${SITE_URL}/#organization`;

export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["ProfessionalService", "Organization"],
        "@id": ORG_ID,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.jpg`,
        image: `${SITE_URL}/logo.jpg`,
        description:
          "Income N Filing is a tax and compliance firm in Kasba, Kolkata, founded in 2017 by Anish Jhunjhunwala. Every client file has a maker and a separate checker, reviewed before and after filing. Services: ITR and GST filing, TDS, company registration and accounting for individuals and businesses across India.",
        telephone: PHONE_E164,
        email: EMAIL_ADDR,
        foundingDate: "2017",
        founder: {
          "@type": "Person",
          name: "Anish Jhunjhunwala",
          jobTitle: "Founder",
          sameAs: [
            "https://www.linkedin.com/in/anish-jhunjhunwala",
            "https://www.youtube.com/@anisjhunjhunwala22",
          ],
        },
        areaServed: { "@type": "Country", name: "India" },
        address: ADDRESS,
        geo: GEO,
        hasMap: MAPS_URL,
        sameAs: [
          "https://www.facebook.com/INCOMENFILING",
          "https://www.instagram.com/incomenfiling/",
          "https://www.linkedin.com/company/incomenfiling/",
          "https://www.youtube.com/channel/UCEOCg1sR6gl1nGg5XkytcPg",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: PHONE_E164,
            email: EMAIL_ADDR,
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function jsonLd(obj) {
  // Escape "<" so content can never close the script tag.
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
