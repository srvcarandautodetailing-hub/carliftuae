export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: number;
  intent: "informational" | "commercial" | "transactional" | "navigational" | "local";
  pillar?: string;
  keywords: string[];
  featured?: boolean;
}

export const BLOG_CATEGORIES = [
  "Car Lift Tips",
  "Routes & Commute",
  "Pricing & Savings",
  "Safety & Travel",
  "UAE Transport",
  "Ladies Transport",
  "Corporate Transport",
  "Neighborhoods",
  "Comparisons",
  "News & Updates",
];

export const BLOG_POSTS: BlogPost[] = [
  // PILLAR PAGES
  {
    slug: "complete-guide-car-lift-service-uae",
    title: "Car Lift Service UAE – Complete Guide",
    excerpt: "Everything you need to know about car lift services in UAE – what it is, how it works, costs, safety, booking, and finding the best service near you.",
    category: "Car Lift Tips",
    tags: ["car lift uae", "guide", "how it works"],
    publishDate: "2025-01-15",
    readTime: 18,
    intent: "informational",
    pillar: "Car Lift UAE",
    keywords: ["car lift uae", "car lift service uae", "what is car lift uae"],
    featured: true,
  },
  {
    slug: "car-lift-pricing-uae-complete-guide",
    title: "Car Lift Price UAE – Cost Guide",
    excerpt: "Comprehensive pricing guide for car lift services across UAE. Compare daily vs monthly rates, Dubai to Abu Dhabi prices, and how to get the best deal.",
    category: "Pricing & Savings",
    tags: ["pricing", "cost", "monthly car lift"],
    publishDate: "2025-02-01",
    readTime: 12,
    intent: "commercial",
    pillar: "Car Lift Pricing",
    keywords: ["car lift price uae", "car lift cost dubai", "monthly car lift price"],
    featured: true,
  },
  {
    slug: "ladies-car-lift-uae-safety-guide",
    title: "Ladies Car Lift UAE – Safety Guide",
    excerpt: "A guide for women seeking safe car lift services in UAE. Female-only options, driver verification, safety features, and best practices.",
    category: "Ladies Transport",
    tags: ["ladies car lift", "women safety", "female transport"],
    publishDate: "2025-02-10",
    readTime: 14,
    intent: "local",
    pillar: "Ladies Car Lift",
    keywords: ["ladies car lift uae", "women car lift dubai", "safe car lift ladies"],
    featured: true,
  },
  // SUPPORTING ARTICLES
  {
    slug: "car-lift-vs-uber-uae-comparison",
    title: "Car Lift vs Uber UAE – Compared",
    excerpt: "Honest comparison of car lift services vs Uber/Careem for UAE daily commuters. Price, convenience, reliability, and when to use each.",
    category: "Comparisons",
    tags: ["uber vs car lift", "comparison", "careem"],
    publishDate: "2025-03-01",
    readTime: 9,
    intent: "commercial",
    keywords: ["car lift vs uber uae", "car lift vs careem", "best commute option uae"],
  },
  {
    slug: "monthly-car-lift-worth-it-uae",
    title: "Monthly Car Lift – Worth It?",
    excerpt: "Should you commit to a monthly car lift package or stick to daily bookings? We break down the math and real-world experience for UAE commuters.",
    category: "Pricing & Savings",
    tags: ["monthly car lift", "worth it", "review"],
    publishDate: "2025-03-10",
    readTime: 8,
    intent: "commercial",
    keywords: ["monthly car lift uae worth it", "car lift monthly package review"],
  },
  {
    slug: "car-lift-safety-tips-uae",
    title: "10 Car Lift Safety Tips UAE",
    excerpt: "Stay safe when using car lift services in UAE. Essential tips for verifying drivers, sharing rides safely, and what to do in emergencies.",
    category: "Safety & Travel",
    tags: ["safety", "tips", "passengers"],
    publishDate: "2025-03-20",
    readTime: 8,
    intent: "informational",
    keywords: ["car lift safety uae", "safe car lift tips"],
  },
  {
    slug: "ajman-to-dubai-car-lift-guide",
    title: "Ajman to Dubai Car Lift Guide",
    excerpt: "Complete guide for Ajman residents commuting to Dubai by car lift. All routes, pickup points, timing options, and how to save on the long commute.",
    category: "Routes & Commute",
    tags: ["ajman", "dubai", "route"],
    publishDate: "2025-03-25",
    readTime: 11,
    intent: "local",
    keywords: ["ajman to dubai car lift", "car lift ajman dubai cost"],
  },
  {
    slug: "business-bay-parking-cost-vs-car-lift",
    title: "Business Bay Parking vs Car Lift",
    excerpt: "Business Bay parking fees are among Dubai's highest. Compare monthly parking costs vs car lift packages and see exactly how much you can save.",
    category: "Pricing & Savings",
    tags: ["business bay", "parking", "savings"],
    publishDate: "2025-04-01",
    readTime: 7,
    intent: "commercial",
    keywords: ["business bay parking cost", "car lift vs parking dubai"],
  },
  {
    slug: "corporate-car-lift-benefits-uae-companies",
    title: "Corporate Car Lift – 7 Reasons",
    excerpt: "UAE businesses are discovering the HR, cost, and productivity benefits of corporate car lift programs. Is it time your company joined the trend?",
    category: "Corporate Transport",
    tags: ["corporate", "companies", "hr benefits"],
    publishDate: "2025-04-05",
    readTime: 10,
    intent: "commercial",
    keywords: ["corporate car lift uae", "employee transport benefits uae"],
  },
  {
    slug: "car-lift-for-new-residents-uae",
    title: "New to UAE? Car Lift Services Explained",
    excerpt: "Freshly arrived in UAE and confused about car lifts? This beginner's guide explains everything – what it is, how to join, costs, and staying safe.",
    category: "Car Lift Tips",
    tags: ["new residents", "beginners", "expats"],
    publishDate: "2025-04-20",
    readTime: 10,
    intent: "informational",
    keywords: ["car lift uae for expats", "new to uae transport guide"],
  },
  {
    slug: "car-lift-jvc-to-business-bay",
    title: "Car Lift JVC to Business Bay",
    excerpt: "JVC to Business Bay car lift guide. Find pickup points, departure times, monthly costs, and how to book a reliable shared ride.",
    category: "Neighborhoods",
    tags: ["jvc", "business bay", "route"],
    publishDate: "2025-05-01",
    readTime: 7,
    intent: "local",
    keywords: ["car lift jvc business bay", "jvc to business bay car lift"],
  },
  {
    slug: "ridesharing-vs-car-lift-uae",
    title: "Ridesharing vs Car Lift UAE",
    excerpt: "Many confuse ridesharing apps with car lift services. Key differences, why car lifts are popular in UAE, and which one suits you.",
    category: "Comparisons",
    tags: ["ridesharing", "car lift", "difference"],
    publishDate: "2025-05-05",
    readTime: 8,
    intent: "informational",
    keywords: ["ridesharing vs car lift uae", "car pool vs car lift uae"],
  },
  // More articles to reach 100+ total
  {
    slug: "silicon-oasis-to-business-bay-car-lift",
    title: "Silicon Oasis to Business Bay Guide",
    excerpt: "Tech professionals in Silicon Oasis can now commute to Business Bay easily. Routes, timings, prices, and how to book your daily car lift.",
    category: "Neighborhoods",
    tags: ["silicon oasis", "business bay", "tech commute"],
    publishDate: "2025-05-10",
    readTime: 7,
    intent: "local",
    keywords: ["silicon oasis to business bay car lift", "dso car lift dubai"],
  },
  {
    slug: "deira-to-business-bay-car-lift",
    title: "Deira to Business Bay Car Lift",
    excerpt: "From Deira's Gold Souk area to Business Bay towers – find the fastest car lift routes, best pickup points, and cheapest monthly packages.",
    category: "Neighborhoods",
    tags: ["deira", "business bay", "route"],
    publishDate: "2025-05-25",
    readTime: 7,
    intent: "local",
    keywords: ["deira to business bay car lift", "car lift deira"],
  },
  {
    slug: "how-car-lift-works-uae",
    title: "How Car Lift Works in UAE",
    excerpt: "New to the concept of car lift in UAE? We explain exactly how it works, from finding a seat to payment, in plain simple terms.",
    category: "Car Lift Tips",
    tags: ["how it works", "beginners"],
    publishDate: "2025-06-01",
    readTime: 6,
    intent: "informational",
    keywords: ["how does car lift work uae", "car lift explained uae"],
  },
  {
    slug: "car-lift-etiquette-uae",
    title: "Car Lift Etiquette – 8 Rules",
    excerpt: "Sharing a car lift in UAE comes with unspoken rules. Learn proper car lift etiquette to make every ride pleasant for you and your fellow passengers.",
    category: "Car Lift Tips",
    tags: ["etiquette", "rules", "passengers"],
    publishDate: "2025-06-10",
    readTime: 7,
    intent: "informational",
    keywords: ["car lift etiquette uae", "car lift rules passengers"],
  },
  {
    slug: "working-from-car-lift-productivity",
    title: "Productive Car Lift Commute Tips",
    excerpt: "Stop wasting commute time. Discover how UAE professionals maximize their car lift commute with these 12 productivity strategies.",
    category: "Car Lift Tips",
    tags: ["productivity", "commute", "tips"],
    publishDate: "2025-06-20",
    readTime: 8,
    intent: "informational",
    keywords: ["productive car lift commute uae", "work during commute uae"],
  },
  {
    slug: "environmental-benefits-car-lift-uae",
    title: "Car Lift Cuts UAE Carbon Emissions",
    excerpt: "Car lift services aren't just affordable – they're green. Learn how shared rides reduce traffic, emissions, and your personal carbon footprint in UAE.",
    category: "UAE Transport",
    tags: ["environment", "sustainability", "carbon"],
    publishDate: "2025-07-01",
    readTime: 8,
    intent: "informational",
    keywords: ["car lift environment uae", "sustainable transport dubai", "reduce emissions uae"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getFeaturedPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.featured);
}

export function getPillarPosts(): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.pillar);
}

// Topical clusters for internal linking
export const TOPICAL_CLUSTERS = {
  "Car Lift UAE": {
    pillar: "complete-guide-car-lift-service-uae",
    supporting: [
      "how-car-lift-works-uae",
      "car-lift-etiquette-uae",
      "car-lift-safety-tips-uae",
      "car-lift-for-new-residents-uae",
      "ridesharing-vs-car-lift-uae",
      "car-lift-vs-uber-uae-comparison",
      "working-from-car-lift-productivity",
      "environmental-benefits-car-lift-uae",
    ],
  },
  "Airport Car Lift": {
    pillar: "complete-guide-car-lift-service-uae",
    supporting: [
      "car-lift-pricing-uae-complete-guide",
      "car-lift-safety-tips-uae",
      "car-lift-for-new-residents-uae",
    ],
  },
  "Car Lift Pricing": {
    pillar: "car-lift-pricing-uae-complete-guide",
    supporting: [
      "business-bay-parking-cost-vs-car-lift",
      "monthly-car-lift-worth-it-uae",
    ],
  },
  "Ladies Car Lift": {
    pillar: "ladies-car-lift-uae-safety-guide",
    supporting: [],
  },
};
