import type { MetadataRoute } from "next";

const BASE_URL = "https://www.carlift.ae";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/_next/static/",
          "/admin/",
          "/api/",
        ],
      },
      // AI crawlers — allow all for GEO/AEO signal
      { userAgent: "GPTBot",        allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "anthropic-ai",  allow: "/" },
      { userAgent: "ClaudeBot",     allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bingbot",       allow: "/" },
      { userAgent: "Applebot",      allow: "/" },
      { userAgent: "Amazonbot",     allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
