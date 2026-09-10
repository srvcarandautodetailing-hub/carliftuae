export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  keywords: string[];
  price: string;
  priceNote: string;
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "car-lift-service",
    name: "Car Lift & Carpool Service",
    shortName: "Car Lift",
    icon: "Car",
    description:
      "Private car lift and carpool service covering Dubai ↔ Abu Dhabi, Abu Dhabi ↔ Sharjah, and Abu Dhabi ↔ Ajman. Book by phone or WhatsApp.",
    longDescription:
      "Quick Car Lift Service UAE provides reliable private car lift and carpool rides on confirmed inter-emirate routes. Whether you're travelling from Dubai to Abu Dhabi or from Sharjah to Abu Dhabi, we offer a comfortable, affordable ride. Contact us by phone or WhatsApp to book.",
    features: [
      "Dubai ↔ Abu Dhabi route",
      "Abu Dhabi ↔ Sharjah route",
      "Abu Dhabi ↔ Ajman route",
      "Private and shared ride options",
      "Air-conditioned vehicle",
      "Book by phone or WhatsApp",
    ],
    keywords: [
      "car lift uae",
      "carpool service uae",
      "car lift dubai abu dhabi",
      "car lift abu dhabi sharjah",
      "car lift abu dhabi ajman",
    ],
    price: "From AED 100 sharing / AED 170 private",
    priceNote: "per trip (one way) · 24/7 service",
    faqs: [
      {
        question: "How do I book a car lift?",
        answer:
          "Contact Quick Car Lift Service UAE by phone or WhatsApp at +971 54 330 8261. Share your pickup location, destination, and preferred timing and we will confirm your booking.",
      },
      {
        question: "What routes does Quick Car Lift Service UAE cover?",
        answer:
          "We cover Dubai ↔ Abu Dhabi (AED 100 sharing / AED 170 private), Abu Dhabi ↔ Sharjah (AED 130 sharing / AED 200 private), and Abu Dhabi ↔ Ajman (AED 130 sharing / AED 200 private).",
      },
    ],
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer Service",
    shortName: "Airport Transfer",
    icon: "Plane",
    description:
      "Airport transfer service on all confirmed routes. Dubai ↔ Abu Dhabi from AED 170 private, Abu Dhabi ↔ Sharjah/Ajman from AED 200 private. Available 24/7.",
    longDescription:
      "Quick Car Lift Service UAE provides luxury airport transfers on all confirmed routes. Book in advance by phone or WhatsApp to ensure availability for your flight.",
    features: [
      "Dubai ↔ Abu Dhabi airport transfer – AED 170 private",
      "Abu Dhabi ↔ Sharjah airport transfer – AED 200 private",
      "Abu Dhabi ↔ Ajman airport transfer – AED 200 private",
      "Pre-booked service · Available 24/7",
      "Luxury air-conditioned vehicle",
      "Book by phone or WhatsApp +971 54 330 8261",
    ],
    keywords: [
      "airport transfer uae",
      "airport transfer dubai abu dhabi",
      "airport transfer abu dhabi sharjah",
      "airport transfer abu dhabi ajman",
    ],
    price: "From AED 250",
    priceNote: "per trip (one way)",
    faqs: [
      {
        question: "Do you provide airport transfers?",
        answer:
          "Yes. Quick Car Lift Service UAE provides airport transfers on all confirmed routes at slightly higher rates than normal private rides.",
      },
      {
        question: "How far in advance should I book an airport transfer?",
        answer:
          "We recommend booking as early as possible, at least a day in advance, to ensure availability.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
