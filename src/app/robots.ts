import type { MetadataRoute } from "next";

const BASE_URL = "https://www.carliftuae.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // Allow all major AI/search crawlers explicitly
      { userAgent: "Googlebot",        allow: "/" },
      { userAgent: "Googlebot-Image",  allow: "/" },
      { userAgent: "GPTBot",           allow: "/" },
      { userAgent: "Google-Extended",  allow: "/" },
      { userAgent: "anthropic-ai",     allow: "/" },
      { userAgent: "ClaudeBot",        allow: "/" },
      { userAgent: "PerplexityBot",    allow: "/" },
      { userAgent: "Bingbot",          allow: "/" },
      { userAgent: "Applebot",         allow: "/" },
      { userAgent: "Amazonbot",        allow: "/" },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
