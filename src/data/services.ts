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
      "MJ Car Lift Service provides reliable private car lift and carpool rides on confirmed inter-emirate routes. Whether you're travelling from Dubai to Abu Dhabi or from Sharjah to Abu Dhabi, we offer a comfortable, affordable ride. Contact us by phone or WhatsApp to book.",
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
    price: "From AED 200",
    priceNote: "per trip (one way)",
    faqs: [
      {
        question: "How do I book a car lift?",
        answer:
          "Contact MJ Car Lift Service by phone or WhatsApp using the number on this page. Share your pickup location, destination, and preferred timing and we will confirm your booking.",
      },
      {
        question: "What routes does MJ Car Lift Service cover?",
        answer:
          "We cover Dubai ↔ Abu Dhabi, Abu Dhabi ↔ Sharjah, and Abu Dhabi ↔ Ajman.",
      },
    ],
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer Service",
    shortName: "Airport Transfer",
    icon: "Plane",
    description:
      "Airport transfer service on all confirmed routes. Dubai ↔ Abu Dhabi from AED 250, Abu Dhabi ↔ Sharjah from AED 300, Abu Dhabi ↔ Ajman from AED 320.",
    longDescription:
      "MJ Car Lift Service provides airport transfers on all confirmed routes at slightly higher rates than standard private rides. Book in advance by phone or WhatsApp to ensure availability for your flight.",
    features: [
      "Dubai ↔ Abu Dhabi airport transfer – AED 250",
      "Abu Dhabi ↔ Sharjah airport transfer – AED 300",
      "Abu Dhabi ↔ Ajman airport transfer – AED 320",
      "Pre-booked service",
      "Air-conditioned vehicle",
      "Book by phone or WhatsApp",
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
          "Yes. MJ Car Lift Service provides airport transfers on all confirmed routes at slightly higher rates than normal private rides.",
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
