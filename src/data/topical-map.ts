/**
 * Complete Topical Map for Car Lift UAE
 * ======================================
 * This map defines the full semantic content architecture.
 * Use it to guide content creation, internal linking, and entity relationships.
 *
 * ENTITY TYPES
 * - Primary Entity:   Car Lift UAE (LocalBusiness, TransportService)
 * - Secondary:        Daily Car Lift, Monthly Car Lift, Ladies Car Lift, Corporate Transport
 * - Geo Entities:     Dubai, Abu Dhabi, Ajman, Business Bay, DXB/DWC/AUH airports, etc.
 * - Route Entities:   Dubai→Abu Dhabi, Ajman→Dubai, etc.
 * - Person Entities:  Verified Drivers, Female Drivers
 * - Competitor:       Uber, Careem, Dubai Metro
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

  // ── CLUSTER 2: Airport Car Lift ────────────────────────────────────────────
  "Airport Car Lift": {
    intent: "local + transactional",
    pillarPage: "/airport-car-lift",
    entities: ["DXB", "DWC", "AUH", "Sharjah Airport (SHJ)", "airport pickup", "airport drop-off"],
    keywords: [
      "airport car lift dubai",
      "car lift to dxb airport",
      "airport transfer dubai abu dhabi",
      "car lift to abu dhabi airport",
      "dwc airport car lift",
      "sharjah airport pickup car lift",
    ],
    supporting: [
      { slug: "/airport-car-lift-dubai-dxb", title: "DXB Airport Car Lift" },
      { slug: "/airport-car-lift-dwc", title: "DWC Airport Car Lift" },
      { slug: "/airport-car-lift-abu-dhabi-auh", title: "AUH Airport Car Lift" },
      { slug: "/airport-car-lift-sharjah-shj", title: "Sharjah Airport (SHJ) Car Lift" },
      { slug: "/services/airport-transfer", title: "Airport Transfer Service" },
    ],
  },

  // ── CLUSTER 3: Business Bay Car Lift ──────────────────────────────────────
  "Business Bay Car Lift": {
    intent: "local + transactional",
    pillarPage: "/routes",
    entities: ["Business Bay", "Dubai", "Executive Towers", "Bay Square", "DIFC"],
    keywords: [
      "car lift business bay",
      "car lift to business bay",
      "car lift from business bay",
      "business bay carpooling",
      "car pool business bay dubai",
    ],
    supporting: [
      { slug: "/routes", title: "All Routes to Business Bay" },
      { slug: "/pricing", title: "Business Bay Car Lift Price" },
      { slug: "/blog/business-bay-parking-cost-vs-car-lift", title: "Parking vs Car Lift" },
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
      "shared ride dubai",
    ],
    supporting: [
      { slug: "/car-lift-dubai", title: "Car Lift Dubai Hub" },
      { slug: "/car-lift-from-international-city", title: "International City Route" },
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
    ],
    supporting: [
      { slug: "/blog/car-lift-pricing-uae-complete-guide", title: "Pricing Guide" },
      { slug: "/blog/business-bay-parking-cost-vs-car-lift", title: "Parking vs Car Lift" },
      { slug: "/blog/monthly-car-lift-worth-it-uae", title: "Monthly Package Review" },
    ],
  },

  // ── CLUSTER 7: Ladies Car Lift ────────────────────────────────────────────
  "Ladies Car Lift": {
    intent: "local + informational + commercial",
    pillarPage: "/ladies-car-lift-ajman-to-dubai",
    entities: ["ladies car lift", "female driver", "women transport", "safety"],
    keywords: [
      "ladies car lift uae",
      "ladies car lift dubai",
      "female car lift service uae",
      "women car lift uae",
      "ladies only car lift",
      "safe car lift for ladies",
    ],
    supporting: [
      { slug: "/blog/ladies-car-lift-uae-safety-guide", title: "Ladies Safety Guide" },
    ],
  },

  // ── CLUSTER 8: Corporate Transport ────────────────────────────────────────
  "Corporate Car Lift": {
    intent: "commercial + B2B",
    pillarPage: "/services",
    entities: ["corporate transport", "employee transport", "staff shuttle", "HR benefit"],
    keywords: [
      "corporate car lift uae",
      "corporate transport dubai",
      "employee car lift uae",
      "staff transport service uae",
      "office car lift dubai",
    ],
    supporting: [
      { slug: "/blog/corporate-car-lift-benefits-uae-companies", title: "Corporate Benefits" },
    ],
  },

  // ── CLUSTER 9: Daily Car Lift ─────────────────────────────────────────────
  "Daily Car Lift": {
    intent: "commercial + transactional",
    pillarPage: "/daily-car-lift-dubai",
    entities: ["daily commute", "guaranteed seat", "daily car lift dubai", "daily car lift abu dhabi"],
    keywords: [
      "daily car lift uae",
      "daily car lift dubai",
      "daily car lift abu dhabi",
      "daily car lift dubai to abu dhabi",
    ],
    supporting: [
      { slug: "/daily-car-lift-abu-dhabi", title: "Daily Car Lift Abu Dhabi" },
      { slug: "/car-lift-dubai-to-abu-dhabi", title: "Dubai to Abu Dhabi Daily" },
      { slug: "/pricing", title: "Daily Fare Pricing" },
      { slug: "/blog/car-lift-pricing-uae-complete-guide", title: "Pricing Guide" },
    ],
  },

  // ── CLUSTER 10: UAE Transport Comparisons ────────────────────────────────
  "UAE Transport Comparisons": {
    intent: "informational + commercial",
    pillarPage: "/blog/complete-guide-car-lift-service-uae",
    entities: ["Uber", "Careem", "Dubai Metro", "driving"],
    keywords: [
      "car lift vs uber uae",
      "car lift vs careem",
      "car lift vs metro uae",
      "car lift vs driving dubai",
      "best commute option uae",
    ],
    supporting: [
      { slug: "/blog/car-lift-vs-uber-uae-comparison", title: "Car Lift vs Uber" },
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
    { name: "Dubai", type: "City", region: "Emirate of Dubai" },
    { name: "Ajman", type: "City", region: "Emirate of Ajman" },
    { name: "Business Bay", type: "Neighborhood", city: "Dubai" },
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
    "Business Bay Metro", "GPS Tracking", "WhatsApp Booking",
  ],
};

// ── AEO ANSWER BLOCKS ─────────────────────────────────────────────────────
export const AEO_ANSWERS = {
  "What is car lift service in UAE?": {
    answer:
      "A car lift service in UAE is a shared daily commute service where 3-4 passengers share a private vehicle to travel from their residential area (like Ajman) to their workplace (like Business Bay or DIFC in Dubai), or between Dubai and Abu Dhabi. It is cheaper than Uber, more comfortable than a taxi queue, and avoids parking stress.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
  "How much does car lift from Ajman to Business Bay cost?": {
    answer:
      "A car lift from Ajman to Business Bay costs AED 200 private per trip. Monthly packages are also available — WhatsApp +971 54 330 8261 for your exact rate.",
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
      "To book a car lift in UAE, WhatsApp Car Lift UAE at +971 54 330 8261. Provide your pickup location, drop-off, and preferred timing. For monthly packages, book at least 2-3 days before your start date.",
    speakable: true,
    targetFeaturedSnippet: true,
  },
};
