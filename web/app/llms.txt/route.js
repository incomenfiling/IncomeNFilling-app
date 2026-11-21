import { SERVICE_PAGES } from "@/data/servicePages";
import { POSTS } from "@/data/posts";
import { GOOGLE_REVIEWS } from "@/data/reviews";
import { PRICE_LIST } from "@/data/pricing";

export const dynamic = "force-static";
const SITE = "https://incomenfiling.com";

export function GET() {
  const services = SERVICE_PAGES.map((s) => `- [${s.name}](${SITE}/services/${s.slug}): ${s.metaDescription}`).join("\n");
  const posts = POSTS.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`).join("\n");
  const clean = (l) => l.replace(/\s*\(?recommended\)?/i, "").trim();
  const prices = PRICE_LIST.map((p) => `- ${p.name} (${p.per}): ` + p.rows.slice(0, 6).map((r) => `${clean(r[0])} ${r[1]}${r[2] === "Final price" ? " (final price)" : ""}`).join("; ")).join("\n");
  const body = `# Income N Filing

> Income N Filing is a tax and compliance firm in Kasba, Kolkata, West Bengal, India, serving individuals and businesses across India. Founded by Anish Jhunjhunwala. Services: income tax return (ITR) filing, income tax notice reply support, GST registration and filing, TDS, company/LLP registration, ROC filing, bookkeeping and related compliance. Rated ${GOOGLE_REVIEWS.rating} from ${GOOGLE_REVIEWS.count} Google reviews.

## Contact
- Website: ${SITE}
- Address: Suite 1A, Kaberi Apartment, 38 M/1 New Ballygunge Palace, Ground Floor, Kolkata 700039, India
- Phone / WhatsApp: +91 78905 94600
- Email: support@incomenfiling.com
- Hours: Monday to Saturday, 10:00 to 19:00 IST

## Services
- [All services](${SITE}/services): full list of 71 services across GST, income tax, incorporation and compliance
- [ITR Filing](${SITE}/services/itr-filing): income tax return filing for individuals, professionals and businesses
${services}

## Blog
${posts || "- Coming soon"}

## Prices (rupees; fee before 18% GST unless marked final price; government charges are separate and the fee is fixed in writing before work starts)
${prices}
Full tables with what each plan includes: ${SITE}/pricing

## Tools and guides
- [GST late fee calculator](${SITE}/tools/gst-late-fee-calculator)
- [TDS rate chart FY 2026-27](${SITE}/tools/tds-rate-chart)
- [Which DSC do I need](${SITE}/tools/dsc-class-guide)
- [Tax and compliance due dates](${SITE}/tools/due-date-calendar)
- [GST and tax filing for online sellers](${SITE}/ecommerce-sellers)

## Official sources we rely on
- GST portal: https://www.gst.gov.in
- Income Tax Department: https://incometaxindia.gov.in
- Ministry of Corporate Affairs: https://www.mca.gov.in
- Controller of Certifying Authorities: https://cca.gov.in

## About and policies
- [Prices overview](${SITE}/pricing)
- [GST service prices](${SITE}/pricing/gst)
- [DSC prices](${SITE}/pricing/dsc)
- [Accounting prices](${SITE}/pricing/accounting)
- [Income tax return prices](${SITE}/pricing/income-tax)
- [Incorporation prices](${SITE}/pricing/incorporation)
- [Professional tax prices, West Bengal](${SITE}/pricing/professional-tax)
- [ROC annual compliance prices](${SITE}/pricing/roc)
- [Kolkata office and services](${SITE}/kolkata)
- [Contact](${SITE}/contact)
- [About Income N Filing](${SITE}/about)
- [Partner program for accountants and tax professionals](${SITE}/partners)
- [Careers](${SITE}/careers)
- [Privacy Policy](${SITE}/privacy)
- [Terms and Conditions](${SITE}/terms)
- [Refund and Cancellation Policy](${SITE}/refund-policy)
- [Disclaimer](${SITE}/disclaimer)
- [Cookie Policy](${SITE}/cookies)
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
