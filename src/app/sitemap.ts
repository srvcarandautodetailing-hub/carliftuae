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
      url: `${BASE_URL}`,
      lastModified: TODAY,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1.0,
      images: [
        `${BASE_URL}/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-honda-civic-white-rear-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-side-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-rear-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp`,
      ],
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
      images: [
        `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp`,
        `${BASE_URL}/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp`,
      ],
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
      loc.slug === "business-bay"
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
      ["daily-car-lift", "ladies-car-lift"].includes(svc.slug)
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
    { slug: "car-lift-abu-dhabi", priority: 0.92 },
    { slug: "car-lift-ajman", priority: 0.90 },
    // High-traffic intercity routes
    { slug: "car-lift-dubai-to-abu-dhabi", priority: 0.92 },
    { slug: "car-lift-abu-dhabi-to-dubai", priority: 0.90 },
    { slug: "car-lift-ajman-to-dubai", priority: 0.88 },
    { slug: "car-lift-dubai-to-ajman", priority: 0.85 },
    // Area-specific Dubai routes
    { slug: "car-lift-from-international-city", priority: 0.82 },
    // Airport car lift pages
    { slug: "airport-car-lift", priority: 0.90 },
    { slug: "airport-car-lift-dubai-dxb", priority: 0.88 },
    { slug: "airport-car-lift-dwc", priority: 0.85 },
    { slug: "airport-car-lift-abu-dhabi-auh", priority: 0.88 },
    { slug: "airport-car-lift-sharjah-shj", priority: 0.82 },
    { slug: "airport-car-lift-ras-al-khaimah-rkt", priority: 0.78 },
    { slug: "airport-car-lift-fujairah-fjr", priority: 0.78 },
    // Service-type pages
    { slug: "carpool-dubai", priority: 0.82 },
    { slug: "pick-and-drop-service", priority: 0.82 },
    { slug: "pick-and-drop-service-dubai", priority: 0.80 },
    { slug: "private-car-lift-dubai", priority: 0.80 },
    { slug: "daily-car-lift-dubai", priority: 0.82 },
    { slug: "daily-car-lift-abu-dhabi", priority: 0.82 },
    { slug: "ladies-car-lift-ajman-to-dubai", priority: 0.80 },
    // Long-distance / intercity
    { slug: "car-lift-dubai-to-al-ain", priority: 0.78 },
    { slug: "car-lift-umm-al-quwain", priority: 0.77 },
  ];

  const ROUTE_FLEET_IMAGES: Record<string, string[]> = {
    "car-lift-dubai": [
      `${BASE_URL}/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-honda-civic-white-rear-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp`,
    ],
    "car-lift-abu-dhabi": [
      `${BASE_URL}/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp`,
    ],
    "airport-car-lift": [
      `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-side-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-lexus-es-rear-quick-car-lift-uae.webp`,
    ],
    "daily-car-lift-dubai": [
      `${BASE_URL}/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp`,
    ],
    "daily-car-lift-abu-dhabi": [
      `${BASE_URL}/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp`,
      `${BASE_URL}/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp`,
    ],
  };

  const routePages: MetadataRoute.Sitemap = routeSlugs.map(({ slug, priority }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: TODAY,
    changeFrequency: "daily" as ChangeFrequency,
    priority,
    ...(ROUTE_FLEET_IMAGES[slug] ? { images: ROUTE_FLEET_IMAGES[slug] } : {}),
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
