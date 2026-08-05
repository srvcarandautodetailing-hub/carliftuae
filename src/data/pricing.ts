export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  ctaText: string;
  routeExample: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "daily",
    name: "Daily Ride",
    price: 25,
    period: "per trip",
    description: "Pay as you go. No commitment. Book the night before.",
    features: [
      "Book 1 day in advance",
      "Flexible timing",
      "Air-conditioned vehicle",
      "GPS-tracked ride",
      "WhatsApp booking",
      "Salik tolls included",
    ],
    ctaText: "Book via WhatsApp",
    routeExample: "Sharjah → Business Bay",
  },
  {
    id: "monthly-shared",
    name: "Monthly Shared",
    price: 350,
    period: "per month",
    description: "Best value. Reserved seat every working day. Most popular choice.",
    features: [
      "Reserved seat guarantee",
      "Mon–Sat coverage",
      "Fixed pickup time",
      "Morning + Evening included",
      "Salik tolls included",
      "Priority support",
      "Invoice provided",
    ],
    highlight: true,
    badge: "Most Popular",
    ctaText: "Book Monthly Package",
    routeExample: "Sharjah → Business Bay → Sharjah",
  },
  {
    id: "monthly-ladies",
    name: "Ladies Monthly",
    price: 380,
    period: "per month",
    description: "Ladies-only vehicle with optional female driver. Safe and exclusive.",
    features: [
      "Ladies-only vehicle",
      "Female driver available",
      "GPS monitoring",
      "Emergency contact system",
      "Mon–Sat coverage",
      "Both ways included",
      "Verified passengers only",
    ],
    badge: "Ladies Special",
    ctaText: "Book Ladies Package",
    routeExample: "Sharjah → Business Bay → Sharjah",
  },
  {
    id: "private",
    name: "Private Monthly",
    price: 1200,
    period: "per month",
    description: "Exclusive vehicle for you only. Maximum privacy and comfort.",
    features: [
      "Exclusive vehicle for you",
      "Professional driver",
      "Wi-Fi available",
      "Flexible timing",
      "Phone charger included",
      "Work in peace",
      "Priority booking",
      "Executive sedan/SUV",
    ],
    ctaText: "Book Private Package",
    routeExample: "Any UAE route",
  },
];

export interface RoutePrice {
  from: string;
  to: string;
  monthlyShared: number;
  monthlyPrivate: number;
  dailyRate: number;
}

export const ROUTE_PRICES: RoutePrice[] = [
  { from: "Sharjah (Al Majaz)", to: "Business Bay", monthlyShared: 340, monthlyPrivate: 1200, dailyRate: 30 },
  { from: "Sharjah (Al Nahda)", to: "Business Bay", monthlyShared: 300, monthlyPrivate: 1100, dailyRate: 27 },
  { from: "Sharjah (Muweilah)", to: "Business Bay", monthlyShared: 360, monthlyPrivate: 1250, dailyRate: 32 },
  { from: "Ajman", to: "Business Bay", monthlyShared: 420, monthlyPrivate: 1400, dailyRate: 38 },
  { from: "Deira", to: "Business Bay", monthlyShared: 210, monthlyPrivate: 900, dailyRate: 19 },
  { from: "Bur Dubai", to: "Business Bay", monthlyShared: 200, monthlyPrivate: 850, dailyRate: 18 },
  { from: "Al Qusais", to: "Business Bay", monthlyShared: 220, monthlyPrivate: 950, dailyRate: 20 },
  { from: "JVC", to: "Business Bay", monthlyShared: 250, monthlyPrivate: 1000, dailyRate: 23 },
  { from: "JLT / Dubai Marina", to: "Business Bay", monthlyShared: 280, monthlyPrivate: 1050, dailyRate: 25 },
  { from: "Silicon Oasis", to: "Business Bay", monthlyShared: 290, monthlyPrivate: 1100, dailyRate: 26 },
];
