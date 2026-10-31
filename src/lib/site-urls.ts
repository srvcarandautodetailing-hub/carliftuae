// Single source of truth for every indexable URL on the site.
// Used by instrumentation.ts (cold-start ping) and /api/reindex (cron + manual).
// Order matters: highest-commercial-intent pages first so search engines
// process them before hitting any per-day quota limit.
// SYNC: this list must match the sitemap 1:1 (verified by scripts/qa-links.mjs).

const BASE_URL = "https://www.carliftuae.com";

export const ALL_SITE_URLS: string[] = [
  // ── Tier 1: money pages ───────────────────────────────────────────────────
  `${BASE_URL}/`,
  `${BASE_URL}/car-lift-dubai-to-abu-dhabi`,
  `${BASE_URL}/car-lift-abu-dhabi-to-dubai`,
  `${BASE_URL}/car-lift-ajman-to-dubai`,
  `${BASE_URL}/airport-car-lift`,
  `${BASE_URL}/airport-car-lift-dubai-dxb`,
  `${BASE_URL}/airport-car-lift-abu-dhabi-auh`,

  // ── Tier 2: core navigation pages ─────────────────────────────────────────
  `${BASE_URL}/services`,
  `${BASE_URL}/locations`,
  `${BASE_URL}/routes`,
  `${BASE_URL}/pricing`,
  `${BASE_URL}/faqs`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,

  // ── Tier 3: location pages ────────────────────────────────────────────────
  `${BASE_URL}/locations/dubai`,
  `${BASE_URL}/locations/abu-dhabi`,
  `${BASE_URL}/locations/ajman`,

  // ── Tier 4: service pages ─────────────────────────────────────────────────
  `${BASE_URL}/services/car-lift-service`,
  `${BASE_URL}/services/airport-transfer`,

  // ── Tier 5: route pages ───────────────────────────────────────────────────
  `${BASE_URL}/car-lift-dubai`,
  `${BASE_URL}/car-lift-abu-dhabi`,
  `${BASE_URL}/car-lift-ajman`,
  `${BASE_URL}/car-lift-dubai-to-ajman`,
  `${BASE_URL}/car-lift-dubai-to-al-ain`,
  `${BASE_URL}/car-lift-from-international-city`,
  `${BASE_URL}/car-lift-umm-al-quwain`,
  `${BASE_URL}/carpool-dubai`,
  `${BASE_URL}/pick-and-drop-service`,
  `${BASE_URL}/pick-and-drop-service-dubai`,
  `${BASE_URL}/private-car-lift-dubai`,
  `${BASE_URL}/daily-car-lift-dubai`,
  `${BASE_URL}/daily-car-lift-abu-dhabi`,
  `${BASE_URL}/ladies-car-lift-ajman-to-dubai`,
  `${BASE_URL}/airport-car-lift-dwc`,
  `${BASE_URL}/airport-car-lift-sharjah-shj`,
  `${BASE_URL}/airport-car-lift-ras-al-khaimah-rkt`,
  `${BASE_URL}/airport-car-lift-fujairah-fjr`,

  // ── Tier 6: blog posts ────────────────────────────────────────────────────
  `${BASE_URL}/blog/complete-guide-car-lift-service-uae`,
  `${BASE_URL}/blog/car-lift-pricing-uae-complete-guide`,
  `${BASE_URL}/blog/ladies-car-lift-uae-safety-guide`,
  `${BASE_URL}/blog/car-lift-vs-uber-uae-comparison`,
  `${BASE_URL}/blog/monthly-car-lift-worth-it-uae`,
  `${BASE_URL}/blog/car-lift-safety-tips-uae`,
  `${BASE_URL}/blog/ajman-to-dubai-car-lift-guide`,
  `${BASE_URL}/blog/business-bay-parking-cost-vs-car-lift`,
  `${BASE_URL}/blog/corporate-car-lift-benefits-uae-companies`,
  `${BASE_URL}/blog/car-lift-for-new-residents-uae`,
  `${BASE_URL}/blog/car-lift-jvc-to-business-bay`,
  `${BASE_URL}/blog/ridesharing-vs-car-lift-uae`,
  `${BASE_URL}/blog/silicon-oasis-to-business-bay-car-lift`,
  `${BASE_URL}/blog/deira-to-business-bay-car-lift`,
  `${BASE_URL}/blog/how-car-lift-works-uae`,
  `${BASE_URL}/blog/car-lift-etiquette-uae`,
  `${BASE_URL}/blog/working-from-car-lift-productivity`,
  `${BASE_URL}/blog/environmental-benefits-car-lift-uae`,

  // ── Tier 7: blog category pages ───────────────────────────────────────────
  `${BASE_URL}/blog/category/car-lift-tips`,
  `${BASE_URL}/blog/category/routes--commute`,
  `${BASE_URL}/blog/category/pricing--savings`,
  `${BASE_URL}/blog/category/safety--travel`,
  `${BASE_URL}/blog/category/uae-transport`,
  `${BASE_URL}/blog/category/ladies-transport`,
  `${BASE_URL}/blog/category/corporate-transport`,
  `${BASE_URL}/blog/category/neighborhoods`,
  `${BASE_URL}/blog/category/comparisons`,
  `${BASE_URL}/blog/category/news--updates`,

  // ── Tier 8: legal ─────────────────────────────────────────────────────────
  `${BASE_URL}/privacy`,
  `${BASE_URL}/terms`,
];
