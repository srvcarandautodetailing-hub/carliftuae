export interface Location {
  slug: string;
  name: string;
  emirate: "dubai" | "abu-dhabi" | "sharjah" | "ajman";
  description: string;
  longDescription: string;
  keywords: string[];
  coordinates: { lat: number; lng: number };
  pickupPoints: string[];
  landmarks: string[];
  nearbyMetro: string[];
  drivingTime: string;
  distance: string;
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "dubai",
    name: "Dubai",
    emirate: "dubai",
    description:
      "Car lift service between Dubai and Abu Dhabi. Sharing rides from AED 100, private rides AED 180. Airport transfers from AED 180 private.",
    longDescription:
      "Quick Car Lift Service UAE connects Dubai and Abu Dhabi in both directions. Whether you are travelling from Dubai to Abu Dhabi or returning, our car lift service offers comfortable, air-conditioned rides from AED 100 sharing, with private rides at a fixed rate of AED 180 per trip. Airport transfers are available from AED 180 private.",
    keywords: [
      "car lift dubai abu dhabi",
      "car lift from dubai to abu dhabi",
      "car lift from abu dhabi to dubai",
      "carpool dubai abu dhabi",
      "airport transfer dubai abu dhabi",
    ],
    coordinates: { lat: 25.2048, lng: 55.2708 },
    pickupPoints: ["Dubai"],
    landmarks: ["Dubai International Airport", "Abu Dhabi International Airport"],
    nearbyMetro: [],
    drivingTime: "Approx. 1.5–2 hours",
    distance: "Approx. 140 km",
    faqs: [
      {
        question: "How much is a car lift from Dubai to Abu Dhabi?",
        answer: "A car lift from Dubai to Abu Dhabi costs AED 100 sharing or AED 180 private per trip.",
      },
      {
        question: "How much is an airport transfer from Dubai to Abu Dhabi?",
        answer: "An airport transfer from Dubai to Abu Dhabi costs AED 180 private.",
      },
    ],
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    emirate: "abu-dhabi",
    description:
      "Car lift service from Abu Dhabi to Dubai, Sharjah, and Ajman. Rides from AED 100 sharing. Airport transfers available.",
    longDescription:
      "Abu Dhabi is the hub for all Quick Car Lift Service UAE routes. We provide car lift and carpool rides from Abu Dhabi to Dubai (AED 100 sharing / AED 180 private), Abu Dhabi to Sharjah (AED 130 sharing / AED 200 private), and Abu Dhabi to Ajman (AED 140 sharing / AED 220 private). Airport transfers are also available on all routes at the private rate.",
    keywords: [
      "car lift abu dhabi",
      "car lift from abu dhabi to dubai",
      "car lift from abu dhabi to sharjah",
      "car lift from abu dhabi to ajman",
      "carpool abu dhabi",
      "airport transfer abu dhabi",
    ],
    coordinates: { lat: 24.4539, lng: 54.3773 },
    pickupPoints: ["Abu Dhabi"],
    landmarks: ["Abu Dhabi International Airport", "Abu Dhabi City"],
    nearbyMetro: [],
    drivingTime: "Varies by destination",
    distance: "Varies by destination",
    faqs: [
      {
        question: "What routes are available from Abu Dhabi?",
        answer:
          "Quick Car Lift Service UAE operates from Abu Dhabi to Dubai (AED 100 sharing / AED 180 private), Abu Dhabi to Sharjah (AED 130 sharing / AED 200 private), and Abu Dhabi to Ajman (AED 140 sharing / AED 220 private).",
      },
      {
        question: "Are airport transfers available from Abu Dhabi?",
        answer:
          "Yes. Airport transfers from Abu Dhabi are available on all routes. Dubai route: AED 180 private. Sharjah route: AED 200 private. Ajman route: AED 220 private.",
      },
    ],
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    emirate: "sharjah",
    description:
      "Car lift service between Sharjah and Abu Dhabi. Sharing rides AED 130, private rides AED 200. Airport transfers from AED 200 private.",
    longDescription:
      "Quick Car Lift Service UAE connects Sharjah and Abu Dhabi in both directions. A car lift ride on this route costs AED 130 sharing or AED 200 private. Airport transfers are available from AED 200 private.",
    keywords: [
      "car lift sharjah abu dhabi",
      "car lift from sharjah to abu dhabi",
      "car lift from abu dhabi to sharjah",
      "carpool sharjah abu dhabi",
      "airport transfer sharjah abu dhabi",
    ],
    coordinates: { lat: 25.3463, lng: 55.4209 },
    pickupPoints: ["Sharjah"],
    landmarks: ["Sharjah International Airport", "Abu Dhabi International Airport"],
    nearbyMetro: [],
    drivingTime: "Approx. 1.5–2 hours",
    distance: "Approx. 150 km",
    faqs: [
      {
        question: "How much is a car lift from Sharjah to Abu Dhabi?",
        answer: "A car lift from Sharjah to Abu Dhabi costs AED 130 sharing or AED 200 private per trip.",
      },
      {
        question: "How much is an airport transfer on the Sharjah–Abu Dhabi route?",
        answer: "An airport transfer on the Sharjah–Abu Dhabi route costs AED 200 private.",
      },
    ],
  },
  {
    slug: "ajman",
    name: "Ajman",
    emirate: "ajman",
    description:
      "Car lift service between Ajman and Abu Dhabi. Sharing rides AED 140, private rides AED 220. Airport transfers from AED 220 private.",
    longDescription:
      "Quick Car Lift Service UAE connects Ajman and Abu Dhabi in both directions. A car lift ride on this route costs AED 140 sharing or AED 220 private. Airport transfers are available from AED 220 private.",
    keywords: [
      "car lift ajman abu dhabi",
      "car lift from ajman to abu dhabi",
      "car lift from abu dhabi to ajman",
      "carpool ajman abu dhabi",
      "airport transfer ajman abu dhabi",
    ],
    coordinates: { lat: 25.4052, lng: 55.5136 },
    pickupPoints: ["Ajman"],
    landmarks: ["Ajman City", "Abu Dhabi International Airport"],
    nearbyMetro: [],
    drivingTime: "Approx. 2–2.5 hours",
    distance: "Approx. 200 km",
    faqs: [
      {
        question: "How much is a car lift from Ajman to Abu Dhabi?",
        answer: "A car lift from Ajman to Abu Dhabi costs AED 140 sharing or AED 220 private per trip.",
      },
      {
        question: "How much is an airport transfer on the Ajman–Abu Dhabi route?",
        answer: "An airport transfer on the Ajman–Abu Dhabi route costs AED 220 private.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getLocationsByEmirate(emirate: Location["emirate"]): Location[] {
  return LOCATIONS.filter((loc) => loc.emirate === emirate);
}
