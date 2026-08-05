import type { MetadataRoute } from "next";
import { LOCATIONS } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";

const BASE_URL = "https://www.carlift.ae";

type ChangeFrequency = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fixed dates: use the site launch date for stable pages so crawlers
  // can distinguish genuinely updated pages from unchanged ones.
  const LAUNCH_DATE = "2025-01-01";
  const LAST_UPDATED = "2026-08-05";

  // Static core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: LAST_UPDATED,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/locations`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/routes`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: LAST_UPDATED,
      changeFrequency: "weekly" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_UPDATED,
      changeFrequency: "daily" as ChangeFrequency,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "monthly" as ChangeFrequency,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: LAUNCH_DATE,
      changeFrequency: "yearly" as ChangeFrequency,
      priority: 0.3,
    },
  ];

  // Location pages — high SEO value
  const locationPages: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: loc.slug === "sharjah" || loc.slug === "business-bay" ? 0.95 : 0.85,
  }));

  // Service pages
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((svc) => ({
    url: `${BASE_URL}/services/${svc.slug}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.85,
  }));

  // Blog posts — use each post's own publish date
  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishDate,
    changeFrequency: "monthly" as ChangeFrequency,
    priority: post.featured ? 0.8 : 0.7,
  }));

  // Blog category pages
  const blogCategoryPages: MetadataRoute.Sitemap = BLOG_CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/blog/category/${cat.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`,
    lastModified: LAST_UPDATED,
    changeFrequency: "weekly" as ChangeFrequency,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...locationPages,
    ...servicePages,
    ...blogPages,
    ...blogCategoryPages,
  ];
}
