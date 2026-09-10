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

  // ── Programmatic route pages ──────────────────────────────────────────────
  const routeSlugs = [
    // Hub pages – highest priority
    { slug: "car-lift-dubai", priority: 0.92 },
    { slug: "car-lift-sharjah", priority: 0.92 },
    { slug: "car-lift-abu-dhabi", priority: 0.92 },
    { slug: "car-lift-ajman", priority: 0.90 },
    // High-traffic intercity routes
    { slug: "car-lift-sharjah-to-dubai", priority: 0.90 },
    { slug: "car-lift-dubai-to-sharjah", priority: 0.88 },
    { slug: "car-lift-from-sharjah-to-abu-dhabi", priority: 0.87 },
    { slug: "car-lift-sharjah-to-ajman", priority: 0.85 },
    { slug: "car-lift-ajman-to-sharjah", priority: 0.85 },
    { slug: "car-lift-dubai-to-ajman", priority: 0.85 },
    // Area-specific Dubai routes
    { slug: "car-lift-sharjah-to-al-barsha", priority: 0.83 },
    { slug: "car-lift-sharjah-to-al-quoz", priority: 0.83 },
    { slug: "car-lift-sharjah-to-jebel-ali", priority: 0.82 },
    { slug: "car-lift-from-international-city", priority: 0.82 },
    { slug: "car-lift-international-city-to-business-bay", priority: 0.81 },
    { slug: "car-lift-silicon-oasis-to-business-bay", priority: 0.81 },
    // Service-type pages
    { slug: "carpool-dubai", priority: 0.82 },
    { slug: "pick-and-drop-service", priority: 0.82 },
    { slug: "pick-and-drop-service-dubai", priority: 0.80 },
    { slug: "pick-and-drop-service-sharjah", priority: 0.80 },
    { slug: "private-car-lift-dubai", priority: 0.80 },
    { slug: "car-lift-dubai-monthly", priority: 0.80 },
    { slug: "monthly-pick-and-drop-service-abu-dhabi", priority: 0.79 },
    { slug: "ladies-car-lift-ajman-to-dubai", priority: 0.80 },
    // Long-distance / intercity
    { slug: "car-lift-sharjah-to-ras-al-khaimah", priority: 0.78 },
    { slug: "car-lift-dubai-to-al-ain", priority: 0.78 },
    { slug: "car-lift-umm-al-quwain", priority: 0.77 },
  ];

  const routePages: MetadataRoute.Sitemap = routeSlugs.map(({ slug, priority }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: TODAY,
    changeFrequency: "daily" as ChangeFrequency,
    priority,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...blogPages,
    ...blogCategoryPages,
    ...routePages,
  ];
}
