import type { MetadataRoute } from "next";

// Explicit, readable policy. A missing robots.txt blocks nobody, but it also
// means you cannot prove intent or adapt quickly when a new crawler appears.
export default function robots(): MetadataRoute.Robots {
  const aiSearch = [
    "OAI-SearchBot",     // ChatGPT Search answers — the citation crawler
    "ChatGPT-User",      // a user asking ChatGPT to open the page
    "PerplexityBot",     // Perplexity answers
    "Perplexity-User",
    "Googlebot",         // Google + AI Overviews
    "Google-Extended",   // Gemini / Google AI
    "Bingbot",           // Bing + Copilot, and feeds ChatGPT search
    "Applebot",
    "Applebot-Extended",
    "DuckDuckBot",
    "Amazonbot",
  ];

  const aiTraining = [
    "GPTBot",            // OpenAI model training
    "ClaudeBot",         // Anthropic
    "anthropic-ai",
    "CCBot",             // Common Crawl
    "meta-externalagent",
  ];

  return {
    rules: [
      // Everything public is crawlable by default.
      { userAgent: "*", allow: "/", disallow: ["/thank-you-audit", "/welcome-retainer", "/api/"] },
      // Search and answer crawlers: explicitly welcome.
      { userAgent: aiSearch, allow: "/", disallow: ["/thank-you-audit", "/welcome-retainer", "/api/"] },
      // Training crawlers: allowed too. Flip to `disallow: "/"` if you decide
      // you would rather not have your content used for model training.
      { userAgent: aiTraining, allow: "/" },
    ],
    sitemap: "https://ascendantops.com/sitemap.xml",
    host: "https://ascendantops.com",
  };
}
