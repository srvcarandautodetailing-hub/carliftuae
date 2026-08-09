import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";

const BASE_URL = "https://www.carliftuae.com";

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  const LAUNCH_DATE   = "2025-01-01";
  const CONTENT_DATE  = "2026-08-05";
  const TODAY         = new Date().toISOString().split("T")[0]; // always current date

  // ── Core pages ────────────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/routes`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: TODAY,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: TODAY,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.2,
    },
  ];

  // ── GSC recovery pages (old domain had rankings — highest crawl priority) ─
  // These exact slugs are based on carliftuae.com queries with existing
  // impressions/clicks. Priority set to 0.95 to signal indexing urgency.
  const gscLandingPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/car-lift-from-sharjah-to-business-bay`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.98,
    },
    {
      url: `${BASE_URL}/carlift-sharjah-to-dubai-business-bay`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.96,
    },
    {
      url: `${BASE_URL}/bus-car-lift-sharjah-to-business-bay`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.96,
    },
    {
      url: `${BASE_URL}/bus-car-lift-service-from-sharjah-sheikh-zayed`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.96,
    },
  ];

  // ── Location pages ────────────────────────────────────────────────────────
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: TODAY,
    changeFrequency: "daily" as ChangeFrequency,
    priority:
      loc.slug === "sharjah" || loc.slug === "business-bay"
        ? 0.95
        : loc.slug === "dubai" || loc.slug === "ajman"
        ? 0.88
        : 0.82,
  }));

  // ── Service pages ─────────────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${BASE_URL}/services/${svc.slug}`,
    lastModified: TODAY,
    changeFrequency: "daily" as ChangeFrequency,
    priority:
      ["daily-car-lift", "monthly-car-lift", "ladies-car-lift"].includes(svc.slug)
        ? 0.88
        : 0.80,
  }));

  // ── Blog posts ────────────────────────────────────────────────────────────
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: TODAY,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: post.featured ? 0.78 : 0.65,
  }));

  // ── Blog category pages ───────────────────────────────────────────────────
  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/blog/category/${cat
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")}`,
    lastModified: TODAY,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.55,
  }));

  // Priority order: homepage → GSC pages → locations → services → static → blog
  return [
    ...staticPages,
    ...gscLandingPages,
    ...locationPages,
    ...servicePages,
    ...blogPages,
    ...blogCategoryPages,
  ];
}
