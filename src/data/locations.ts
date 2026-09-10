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
      "Car lift service between Dubai and Abu Dhabi. Normal/private rides AED 200. Airport transfers AED 170.",
    longDescription:
      "Quick Car Lift Service UAE connects Dubai and Abu Dhabi in both directions. Whether you are travelling from Dubai to Abu Dhabi or returning, our car lift service offers comfortable, air-conditioned private rides at a fixed rate of AED 200 per trip. Airport transfers are available at AED 170.",
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
        answer: "A car lift from Dubai to Abu Dhabi costs AED 200 for a normal/private ride.",
      },
      {
        question: "How much is an airport transfer from Dubai to Abu Dhabi?",
        answer: "An airport transfer from Dubai to Abu Dhabi costs AED 170.",
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
      "Abu Dhabi is the hub for all Quick Car Lift Service UAE routes. We provide car lift and carpool rides from Abu Dhabi to Dubai (AED 200), Abu Dhabi to Sharjah (AED 130 sharing), and Abu Dhabi to Ajman (AED 130 sharing). Airport transfers are also available on all routes at slightly higher rates.",
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
          "Quick Car Lift Service UAE operates from Abu Dhabi to Dubai (AED 200), Abu Dhabi to Sharjah (AED 130 sharing), and Abu Dhabi to Ajman (AED 130 sharing).",
      },
      {
        question: "Are airport transfers available from Abu Dhabi?",
        answer:
          "Yes. Airport transfers from Abu Dhabi are available on all routes. Dubai route: AED 170. Sharjah route: AED 130 sharing. Ajman route: AED 200.",
      },
    ],
  },
  {
    slug: "sharjah",
    name: "Sharjah",
    emirate: "sharjah",
    description:
      "Car lift service between Sharjah and Abu Dhabi. Normal/private rides AED 130 sharing. Airport transfers AED 130 sharing.",
    longDescription:
      "Quick Car Lift Service UAE connects Sharjah and Abu Dhabi in both directions. A normal/private car lift ride on this route costs AED 130 sharing. Airport transfers are available at AED 130 sharing.",
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
        answer: "A car lift from Sharjah to Abu Dhabi costs AED 130 sharing for a normal/private ride.",
      },
      {
        question: "How much is an airport transfer on the Sharjah–Abu Dhabi route?",
        answer: "An airport transfer on the Sharjah–Abu Dhabi route costs AED 130 sharing.",
      },
    ],
  },
  {
    slug: "ajman",
    name: "Ajman",
    emirate: "ajman",
    description:
      "Car lift service between Ajman and Abu Dhabi. Normal/private rides AED 130 sharing. Airport transfers AED 200.",
    longDescription:
      "Quick Car Lift Service UAE connects Ajman and Abu Dhabi in both directions. A normal/private car lift ride on this route costs AED 130 sharing. Airport transfers are available at AED 200.",
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
        answer: "A car lift from Ajman to Abu Dhabi costs AED 130 sharing for a normal/private ride.",
      },
      {
        question: "How much is an airport transfer on the Ajman–Abu Dhabi route?",
        answer: "An airport transfer on the Ajman–Abu Dhabi route costs AED 200.",
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
