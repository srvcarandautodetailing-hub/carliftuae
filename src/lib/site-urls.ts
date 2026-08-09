// Single source of truth for every indexable URL on the site.
// Used by instrumentation.ts (cold-start ping) and /api/reindex (cron + manual).
// Order matters: highest-commercial-intent pages first so search engines
// process them before hitting any per-day quota limit.

const BASE_URL = "https://www.carliftuae.com";

export const ALL_SITE_URLS: string[] = [
  // ── Tier 1: GSC money pages ───────────────────────────────────────────────
  `${BASE_URL}/`,
  `${BASE_URL}/car-lift-from-sharjah-to-business-bay`,
  `${BASE_URL}/carlift-sharjah-to-dubai-business-bay`,
  `${BASE_URL}/bus-car-lift-sharjah-to-business-bay`,
  `${BASE_URL}/bus-car-lift-service-from-sharjah-sheikh-zayed`,

  // ── Tier 2: core navigation pages ────────────────────────────────────────
  `${BASE_URL}/services`,
  `${BASE_URL}/locations`,
  `${BASE_URL}/routes`,
  `${BASE_URL}/pricing`,
  `${BASE_URL}/faqs`,
  `${BASE_URL}/blog`,
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,

  // ── Tier 3: location pages (17) ──────────────────────────────────────────
  `${BASE_URL}/locations/sharjah`,
  `${BASE_URL}/locations/business-bay`,
  `${BASE_URL}/locations/dubai`,
  `${BASE_URL}/locations/ajman`,
  `${BASE_URL}/locations/al-nahda`,
  `${BASE_URL}/locations/al-qusais`,
  `${BASE_URL}/locations/al-khan`,
  `${BASE_URL}/locations/al-majaz`,
  `${BASE_URL}/locations/al-taawun`,
  `${BASE_URL}/locations/muweilah`,
  `${BASE_URL}/locations/al-qouz`,
  `${BASE_URL}/locations/dubai-marina`,
  `${BASE_URL}/locations/jvc`,
  `${BASE_URL}/locations/jlt`,
  `${BASE_URL}/locations/deira`,
  `${BASE_URL}/locations/bur-dubai`,
  `${BASE_URL}/locations/silicon-oasis`,

  // ── Tier 4: service pages (10) ───────────────────────────────────────────
  `${BASE_URL}/services/daily-car-lift`,
  `${BASE_URL}/services/monthly-car-lift`,
  `${BASE_URL}/services/ladies-car-lift`,
  `${BASE_URL}/services/office-transport`,
  `${BASE_URL}/services/staff-transport`,
  `${BASE_URL}/services/family-car-lift`,
  `${BASE_URL}/services/airport-transfer`,
  `${BASE_URL}/services/corporate-transport`,
  `${BASE_URL}/services/private-car-lift`,
  `${BASE_URL}/services/school-transport`,

  // ── Tier 5: blog posts (31) ──────────────────────────────────────────────
  `${BASE_URL}/blog/complete-guide-car-lift-service-uae`,
  `${BASE_URL}/blog/sharjah-to-business-bay-car-lift-guide`,
  `${BASE_URL}/blog/car-lift-pricing-uae-complete-guide`,
  `${BASE_URL}/blog/ladies-car-lift-uae-safety-guide`,
  `${BASE_URL}/blog/sharjah-to-dubai-commute-cost-comparison`,
  `${BASE_URL}/blog/best-pickup-points-sharjah-car-lift`,
  `${BASE_URL}/blog/car-lift-vs-uber-uae-comparison`,
  `${BASE_URL}/blog/how-to-find-car-lift-sharjah`,
  `${BASE_URL}/blog/monthly-car-lift-worth-it-uae`,
  `${BASE_URL}/blog/sharjah-dubai-traffic-avoid-guide`,
  `${BASE_URL}/blog/car-lift-safety-tips-uae`,
  `${BASE_URL}/blog/ajman-to-dubai-car-lift-guide`,
  `${BASE_URL}/blog/business-bay-parking-cost-vs-car-lift`,
  `${BASE_URL}/blog/corporate-car-lift-benefits-uae-companies`,
  `${BASE_URL}/blog/al-nahda-sharjah-dubai-commute-guide`,
  `${BASE_URL}/blog/sharjah-dubai-salik-toll-guide`,
  `${BASE_URL}/blog/car-lift-for-new-residents-uae`,
  `${BASE_URL}/blog/ladies-only-car-lift-sharjah-dubai`,
  `${BASE_URL}/blog/car-lift-jvc-to-business-bay`,
  `${BASE_URL}/blog/ridesharing-vs-car-lift-uae`,
  `${BASE_URL}/blog/silicon-oasis-to-business-bay-car-lift`,
  `${BASE_URL}/blog/car-lift-vs-public-bus-uae`,
  `${BASE_URL}/blog/muweilah-sharjah-to-dubai-commute`,
  `${BASE_URL}/blog/deira-to-business-bay-car-lift`,
  `${BASE_URL}/blog/how-car-lift-works-uae`,
  `${BASE_URL}/blog/top-10-areas-car-lift-sharjah`,
  `${BASE_URL}/blog/car-lift-etiquette-uae`,
  `${BASE_URL}/blog/ajman-sharjah-dubai-car-lift-route`,
  `${BASE_URL}/blog/working-from-car-lift-productivity`,
  `${BASE_URL}/blog/environmental-benefits-car-lift-uae`,
  `${BASE_URL}/blog/school-transport-sharjah-dubai`,

  // ── Tier 6: blog category pages (10) ─────────────────────────────────────
  `${BASE_URL}/blog/category/car-lift-tips`,
  `${BASE_URL}/blog/category/routes-commute`,
  `${BASE_URL}/blog/category/pricing-savings`,
  `${BASE_URL}/blog/category/safety-travel`,
  `${BASE_URL}/blog/category/uae-transport`,
  `${BASE_URL}/blog/category/ladies-transport`,
  `${BASE_URL}/blog/category/corporate-transport`,
  `${BASE_URL}/blog/category/neighborhoods`,
  `${BASE_URL}/blog/category/comparisons`,
  `${BASE_URL}/blog/category/news-updates`,

  // ── Tier 7: legal ────────────────────────────────────────────────────────
  `${BASE_URL}/privacy`,
  `${BASE_URL}/terms`,

  // ── Tier 8: new local SEO pages ──────────────────────────────────────────
  `${BASE_URL}/monthly-pick-and-drop-service-sharjah`,
  `${BASE_URL}/carlift-sharjah-to-difc`,
  `${BASE_URL}/ladies-car-lift-sharjah-to-dubai`,
  `${BASE_URL}/car-lift-ajman-to-dubai`,
  `${BASE_URL}/carlift-sharjah-to-jlt`,
  `${BASE_URL}/car-lift-dubai-to-abu-dhabi`,
];
