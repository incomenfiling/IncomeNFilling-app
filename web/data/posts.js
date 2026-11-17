// Blog posts. Add a new object at the TOP of the array to publish. The blog index and sitemap switch on automatically
// once at least one post exists. `body` is an ordered list of blocks:
//   { h2: "Heading" } | { p: "Paragraph" } | { ul: ["item", "item"] } | { faq: [{ q, a }] }
// Keep facts general (no fixed prices/deadlines that change by year) and add `updated` when revising.
export const POSTS = [
  // {
  //   slug: "what-to-do-on-getting-income-tax-notice",
  //   title: "Income Tax Notice Received? What to Do First",
  //   description: "Plain-language steps to read, verify and reply to an income tax notice.",
  //   date: "2026-11-20",
  //   updated: "2026-11-20",
  //   service: "income-tax-notice-handling",
  //   body: [{ p: "..." }, { h2: "..." }, { ul: ["..."] }],
  // },
];

export const POST_BY_SLUG = Object.fromEntries(POSTS.map((p) => [p.slug, p]));
