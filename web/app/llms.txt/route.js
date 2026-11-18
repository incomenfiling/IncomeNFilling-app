import { SERVICE_PAGES } from "@/data/servicePages";
import { POSTS } from "@/data/posts";

export const dynamic = "force-static";
const SITE = "https://incomenfiling.com";

export function GET() {
  const services = SERVICE_PAGES.map((s) => `- [${s.name}](${SITE}/services/${s.slug}): ${s.metaDescription}`).join("\n");
  const posts = POSTS.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`).join("\n");
  const body = `# Income N Filing

> Income N Filing is a tax and compliance firm in Kasba, Kolkata, West Bengal, India, serving individuals and businesses across India. Founded by Anish Jhunjhunwala. Services: income tax return (ITR) filing, income tax notice reply support, GST registration and filing, TDS, company/LLP registration, ROC filing, bookkeeping and related compliance. Rated 4.9 from 162 Google reviews.

## Contact
- Website: ${SITE}
- Address: Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kolkata 700039, India
- Phone / WhatsApp: +91 78905 94600
- Email: support@incomenfiling.com
- Hours: Monday to Saturday, 10:00 to 19:00 IST

## Services
- [All services](${SITE}/services): full list of 94 services across GST, income tax, incorporation and compliance
${services}

## Blog
${posts || "- Coming soon"}

## About and policies
- [Contact](${SITE}/contact)
- [About Income N Filing](${SITE}/about)
- [Privacy Policy](${SITE}/privacy)
- [Terms and Conditions](${SITE}/terms)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
