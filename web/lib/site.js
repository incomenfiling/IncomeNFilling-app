export const SITE_URL = "https://incomenfiling.com";
export const SITE_NAME = "Income N Filing";
export const PHONE_E164 = "+917890594600";
export const EMAIL_ADDR = "support@incomenfiling.com";

// Offices already published on the site (data/content.js OFFICES).
const PLACES = [
  {
    "@type": "Place",
    name: "Income N Filing — Kolkata (Kasba)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "38M/1, New Ballygunge Rd, Kasba",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      postalCode: "700039",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 22.5726, longitude: 88.3639 },
  },
  {
    "@type": "Place",
    name: "Income N Filing — Bhagalpur",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Opp. Dr. R N Jha Clinic, Near Head Post Office",
      addressLocality: "Bhagalpur",
      addressRegion: "Bihar",
      postalCode: "812001",
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: 25.2445, longitude: 86.9842 },
  },
];

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
          "GST, income tax return filing, company incorporation, corporate compliance and accounting services for businesses and individuals across India.",
        telephone: PHONE_E164,
        email: EMAIL_ADDR,
        foundingDate: "2017",
        founder: { "@type": "Person", name: "Anish Jhunjhunwala", jobTitle: "Founder" },
        areaServed: { "@type": "Country", name: "India" },
        location: PLACES,
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
