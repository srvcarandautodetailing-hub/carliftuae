export async function register() {
  // Only run on server-side Node.js runtime in production (fires on every cold start / Vercel deploy)
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "production") return;

  const BASE_URL = "https://www.carliftuae.com";
  const INDEXNOW_KEY = "ff124279eb5d6a920886b260c826d7ee";

  const urls = [
    // Core pages — highest priority
    `${BASE_URL}/`,
    `${BASE_URL}/services`,
    `${BASE_URL}/locations`,
    `${BASE_URL}/routes`,
    `${BASE_URL}/pricing`,
    `${BASE_URL}/faqs`,
    `${BASE_URL}/blog`,
    `${BASE_URL}/about`,
    `${BASE_URL}/contact`,
    // GSC high-traffic landing pages
    `${BASE_URL}/car-lift-from-sharjah-to-business-bay`,
    `${BASE_URL}/carlift-sharjah-to-dubai-business-bay`,
    `${BASE_URL}/bus-car-lift-sharjah-to-business-bay`,
    `${BASE_URL}/bus-car-lift-service-from-sharjah-sheikh-zayed`,
    // Location pages
    `${BASE_URL}/locations/sharjah`,
    `${BASE_URL}/locations/dubai`,
    `${BASE_URL}/locations/business-bay`,
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
    // Service pages
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
  ];

  // 1. Ping Google with sitemap URL (signals fresh content)
  fetch(`https://www.google.com/ping?sitemap=${BASE_URL}/sitemap.xml`, {
    method: "GET",
  }).catch(() => {});

  // 2. Submit all URLs to IndexNow (Bing, Yandex — accelerates discovery across engines)
  fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "www.carliftuae.com",
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  }).catch(() => {});

  // 3. Also ping Bing directly (IndexNow spec recommends host-specific endpoints)
  fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: "www.carliftuae.com",
      key: INDEXNOW_KEY,
      keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
      urlList: urls,
    }),
  }).catch(() => {});
}
