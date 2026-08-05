/**
 * Complete Topical Map for Car Lift UAE
 * ======================================
 * This map defines the full semantic content architecture.
 * Use it to guide content creation, internal linking, and entity relationships.
 *
 * ENTITY TYPES
 * - Primary Entity:   Car Lift UAE (LocalBusiness, TransportService)
 * - Secondary:        Daily Car Lift, Monthly Car Lift, Ladies Car Lift, Corporate Transport
 * - Geo Entities:     Sharjah, Dubai, Business Bay, Ajman, Al Nahda, etc.
 * - Route Entities:   Sharjah→Business Bay, Ajman→Dubai, etc.
 * - Person Entities:  Verified Drivers, Female Drivers
 * - Competitor:       Uber, Careem, RTA Bus, Dubai Metro
 */

export const TOPICAL_MAP = {
  // ── CLUSTER 1: Car Lift UAE (Primary Hub) ──────────────────────────────────
  "Car Lift UAE": {
    intent: "navigational + informational",
    pillarPage: "/",
    entities: ["Car Lift UAE", "UAE transport", "shared ride", "carpooling UAE"],
    keywords: [
      "car lift uae",
      "car lift service uae",
      "daily car lift uae",
      "car lift booking uae",
      "car lift near me uae",
      "best car lift service uae",
    ],
    supporting: [
      { slug: "/about", title: "About Car Lift UAE" },
      { slug: "/services", title: "All Car Lift Services" },
      { slug: "/pricing", title: "Car Lift Pricing" },
      { slug: "/faqs", title: "Car Lift FAQ" },
      { slug: "/contact", title: "Book a Car Lift" },
      { slug: "/blog/complete-guide-car-lift-service-uae", title: "Complete Guide" },
      { slug: "/blog/how-car-lift-works-uae", title: "How Car Lift Works" },
      { slug: "/blog/car-lift-etiquette-uae", title: "Car Lift Etiquette" },
      { slug: "/blog/car-lift-safety-tips-uae", title: "Safety Tips" },
      { slug: "/blog/car-lift-for-new-residents-uae", title: "For New Residents" },
    ],
  },

  // ── CLUSTER 2: Sharjah Car Lift ────────────────────────────────────────────
  "Sharjah Car Lift": {
    intent: "local + commercial",
    pillarPage: "/locations/sharjah",
    entities: ["Sharjah", "Al Majaz", "Muweilah", "Al Nahda", "Al Khan", "Al Taawun"],
    keywords: [
      "car lift sharjah",
      "car lift sharjah to dubai",
      "car lift sharjah to business bay",
      "sharjah to business bay car lift",
      "daily car lift sharjah",
      "monthly car lift sharjah",
      "car lift service sharjah",
      "best car lift sharjah",
      "car lift sharjah price",
    ],
    supporting: [
      { slug: "/locations/al-nahda", title: "Car Lift Al Nahda" },
      { slug: "/locations/al-khan", title: "Car Lift Al Khan" },
      { slug: "/locations/al-majaz", title: "Car Lift Al Majaz" },
      { slug: "/locations/al-taawun", title: "Car Lift Al Taawun" },
      { slug: "/locations/muweilah", title: "Car Lift Muweilah" },
      { slug: "/blog/sharjah-to-business-bay-car-lift-guide", title: "Route Guide" },
      { slug: "/blog/best-pickup-points-sharjah-car-lift", title: "Pickup Points" },
      { slug: "/blog/how-to-find-car-lift-sharjah", title: "How to Find Car Lift" },
      { slug: "/blog/sharjah-dubai-traffic-avoid-guide", title: "Traffic Guide" },
      { slug: "/blog/sharjah-dubai-salik-toll-guide", title: "Salik Guide" },
      { slug: "/blog/top-10-areas-car-lift-sharjah", title: "Top 10 Areas" },
    ],
  },

  // ── CLUSTER 3: Business Bay Car Lift ──────────────────────────────────────
  "Business Bay Car Lift": {
    intent: "local + transactional",
    pillarPage: "/locations/business-bay",
    entities: ["Business Bay", "Dubai", "Executive Towers", "Bay Square", "DIFC"],
    keywords: [
      "car lift business bay",
      "car lift to business bay",
      "sharjah to business bay car lift",
      "car lift from business bay",
      "business bay carpooling",
      "car pool business bay dubai",
    ],
    supporting: [
      { slug: "/routes", title: "All Routes to Business Bay" },
      { slug: "/pricing", title: "Business Bay Car Lift Price" },
      { slug: "/blog/business-bay-parking-cost-vs-car-lift", title: "Parking vs Car Lift" },
      { slug: "/blog/sharjah-to-business-bay-car-lift-guide", title: "Sharjah Route Guide" },
    ],
  },

  // ── CLUSTER 4: Dubai Car Lift ─────────────────────────────────────────────
  "Dubai Car Lift": {
    intent: "local + commercial",
    pillarPage: "/locations/dubai",
    entities: ["Dubai", "Deira", "Bur Dubai", "JVC", "JLT", "Dubai Marina", "Silicon Oasis", "Al Qusais", "Al Qouz"],
    keywords: [
      "car lift dubai",
      "car lift service dubai",
      "daily car lift dubai",
      "car lift dubai to sharjah",
      "shared ride dubai",
    ],
    supporting: [
      { slug: "/locations/deira", title: "Car Lift Deira" },
      { slug: "/locations/bur-dubai", title: "Car Lift Bur Dubai" },
      { slug: "/locations/jvc", title: "Car Lift JVC" },
      { slug: "/locations/jlt", title: "Car Lift JLT" },
      { slug: "/locations/dubai-marina", title: "Car Lift Dubai Marina" },
      { slug: "/locations/al-qusais", title: "Car Lift Al Qusais" },
      { slug: "/locations/silicon-oasis", title: "Car Lift Silicon Oasis" },
      { slug: "/locations/al-qouz", title: "Car Lift Al Qouz" },
      { slug: "/blog/deira-to-business-bay-car-lift", title: "Deira Route" },
      { slug: "/blog/silicon-oasis-to-business-bay-car-lift", title: "Silicon Oasis Route" },
      { slug: "/blog/car-lift-jvc-to-business-bay", title: "JVC Route" },
    ],
  },

  // ── CLUSTER 5: Ajman Car Lift ─────────────────────────────────────────────
  "Ajman Car Lift": {
    intent: "local + commercial",
    pillarPage: "/locations/ajman",
    entities: ["Ajman", "Al Nuaimiya", "Al Rashidiya", "Ajman Free Zone"],
    keywords: [
      "car lift ajman",
      "car lift ajman to dubai",
      "car lift ajman to business bay",
      "ajman dubai car lift price",
      "daily car lift ajman",
    ],
    supporting: [
      { slug: "/blog/ajman-to-dubai-car-lift-guide", title: "Ajman Route Guide" },
      { slug: "/blog/ajman-sharjah-dubai-car-lift-route", title: "Ajman-Sharjah-Dubai Route" },
    ],
  },

  // ── CLUSTER 6: Car Lift Pricing ───────────────────────────────────────────
  "Car Lift Pricing": {
    intent: "commercial + transactional",
    pillarPage: "/pricing",
    entities: ["monthly car lift", "daily car lift rate", "AED", "Salik toll"],
    keywords: [
      "car lift price uae",
      "car lift cost dubai",
      "monthly car lift price",
      "car lift per month price",
      "how much is car lift uae",
      "car lift price sharjah to business bay",
    ],
    supporting: [
      { slug: "/blog/car-lift-pricing-uae-complete-guide", title: "Pricing Guide" },
      { slug: "/blog/sharjah-to-dubai-commute-cost-comparison", title: "Cost Comparison" },
      { slug: "/blog/business-bay-parking-cost-vs-car-lift", title: "Parking vs Car Lift" },
      { slug: "/blog/monthly-car-lift-worth-it-uae", title: "Monthly Package Review" },
    ],
  },

  // ── CLUSTER 7: Ladies Car Lift ────────────────────────────────────────────
  "Ladies Car Lift": {
    intent: "local + informational + commercial",
    pillarPage: "/services/ladies-car-lift",
    entities: ["ladies car lift", "female driver", "women transport", "safety"],
    keywords: [
      "ladies car lift uae",
      "ladies car lift sharjah",
      "ladies car lift dubai",
      "female car lift service uae",
      "women car lift uae",
      "ladies only car lift",
      "safe car lift for ladies",
    ],
    supporting: [
      { slug: "/blog/ladies-car-lift-uae-safety-guide", title: "Ladies Safety Guide" },
      { slug: "/blog/ladies-only-car-lift-sharjah-dubai", title: "Ladies Only Routes" },
    ],
  },

  // ── CLUSTER 8: Corporate Transport ────────────────────────────────────────
  "Corporate Car Lift": {
    intent: "commercial + B2B",
    pillarPage: "/services/corporate-transport",
    entities: ["corporate transport", "employee transport", "staff shuttle", "HR benefit"],
    keywords: [
      "corporate car lift uae",
      "corporate transport dubai",
      "employee car lift uae",
      "staff transport service uae",
      "office car lift dubai",
    ],
    supporting: [
      { slug: "/services/office-transport", title: "Office Transport" },
      { slug: "/services/staff-transport", title: "Staff Transport" },
      { slug: "/blog/corporate-car-lift-benefits-uae-companies", title: "Corporate Benefits" },
    ],
  },

  // ── CLUSTER 9: Monthly Car Lift ───────────────────────────────────────────
  "Monthly Car Lift": {
    intent: "commercial + transactional",
    pillarPage: "/services/monthly-car-lift",
    entities: ["monthly subscription", "commuter pass", "reserved seat"],
    keywords: [
      "monthly car lift uae",
      "monthly car lift sharjah",
      "car lift monthly package",
      "monthly shared ride dubai",
      "car lift subscription uae",
    ],
    supporting: [
      { slug: "/pricing", title: "Monthly Package Pricing" },
      { slug: "/blog/monthly-car-lift-worth-it-uae", title: "Is Monthly Worth It?" },
      { slug: "/blog/car-lift-pricing-uae-complete-guide", title: "Pricing Guide" },
    ],
  },

  // ── CLUSTER 10: UAE Transport Comparisons ────────────────────────────────
  "UAE Transport Comparisons": {
    intent: "informational + commercial",
    pillarPage: "/blog/complete-guide-car-lift-service-uae",
    entities: ["Uber", "Careem", "RTA Bus", "Dubai Metro", "driving"],
    keywords: [
      "car lift vs uber uae",
      "car lift vs careem",
      "car lift vs metro uae",
      "car lift vs driving dubai",
      "best commute option uae",
    ],
    supporting: [
      { slug: "/blog/car-lift-vs-uber-uae-comparison", title: "Car Lift vs Uber" },
      { slug: "/blog/car-lift-vs-public-bus-uae", title: "Car Lift vs Bus" },
      { slug: "/blog/sharjah-to-dubai-commute-cost-comparison", title: "Cost Comparison" },
      { slug: "/blog/ridesharing-vs-car-lift-uae", title: "Ridesharing vs Car Lift" },
    ],
  },
} as const;

// ── ENTITY MAP for Google NLP / Knowledge Graph ────────────────────────────
export const ENTITY_MAP = {
  primaryEntity: {
    type: "LocalBusiness",
    name: "Car Lift UAE",
    sameAs: ["https://g.co/carliftUAE"],
    services: ["DailyCarLift", "MonthlyCarLift", "LadiesCarLift", "CorporateTransport"],
  },
  geoEntities: [
    { name: "Sharjah", type: "City", region: "Emirate of Sharjah" },
    { name: "Dubai", type: "City", region: "Emirate of Dubai" },
    { name: "Ajman", type: "City", region: "Emirate of Ajman" },
    { name: "Business Bay", type: "Neighborhood", city: "Dubai" },
    { name: "Al Nahda", type: "Neighborhood", city: "Sharjah" },
    { name: "Al Majaz", type: "Neighborhood", city: "Sharjah" },
    { name: "Muweilah", type: "Neighborhood", city: "Sharjah" },
    { name: "JVC", type: "Neighborhood", city: "Dubai" },
    { name: "JLT", type: "Neighborhood", city: "Dubai" },
    { name: "Dubai Marina", type: "Neighborhood", city: "Dubai" },
    { name: "Silicon Oasis", type: "Neighborhood", city: "Dubai" },
    { name: "Deira", type: "Neighborhood", city: "Dubai" },
    { name: "Bur Dubai", type: "Neighborhood", city: "Dubai" },
  ],
  serviceEntities: [
    "Daily Car Lift",
    "Monthly Car Lift",
    "Ladies Car Lift",
    "Office Transport",
    "Corporate Transport",
    "Airport Transfer",
    "School Transport",
    "Private Car Lift",
    "Staff Transport",
    "Family Car Lift",
  ],
  transportEntities: [
    "Salik Toll", "Sheikh Zayed Road", "Emirates Road", "Dubai Metro",
    "Business Bay Metro", "Al Nahda Metro", "GPS Tracking", "WhatsApp Booking",
  ],
};

// ── AEO ANSWER BLOCKS ─────────────────────────────────────────────────────
export const AEO_ANSWERS = {
  "What is car lift service in UAE?": {
    answer:
      "A car lift service in UAE is a shared daily commute service where 3-4 passengers share a private vehicle to travel from their residential area (like Sharjah or Ajman) to their workplace (like Business Bay or DIFC in Dubai). It is cheaper than Uber, more comfortable than public buses, and avoids parking stress.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
  "How much does car lift from Sharjah to Business Bay cost?": {
    answer:
      "A monthly car lift from Sharjah to Business Bay costs between AED 300 and AED 400 per month depending on your pickup area. Daily rates are AED 25-35 per trip. This includes Salik tolls and both morning and evening rides.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
  "Is car lift safe in UAE?": {
    answer:
      "Yes. Car lift services from reputable providers like Car Lift UAE are safe. All drivers are UAE-licensed, background-checked, and GPS-tracked. Vehicles carry comprehensive insurance. Ladies-only options with female drivers are also available.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
  "How do I book a car lift in UAE?": {
    answer:
      "To book a car lift in UAE, WhatsApp Car Lift UAE at +971 50 123 4567. Provide your pickup location, drop-off, and preferred timing. For monthly packages, book at least 2-3 days before your start date.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
};
