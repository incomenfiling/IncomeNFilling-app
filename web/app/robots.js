// AI search / answer / training crawlers are explicitly welcome so the business can be cited in AI answers.
const AI_BOTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Googlebot", "Bingbot",
  "Applebot", "Applebot-Extended",
  "CCBot", "Amazonbot", "Meta-ExternalAgent", "DuckAssistBot", "cohere-ai", "MistralAI-User",
];

export default function robots() {
  const rule = { allow: "/", disallow: ["/api/"] };
  return {
    rules: [{ userAgent: "*", ...rule }, ...AI_BOTS.map((userAgent) => ({ userAgent, ...rule }))],
    sitemap: "https://incomenfiling.com/sitemap.xml",
    host: "https://incomenfiling.com",
  };
}
