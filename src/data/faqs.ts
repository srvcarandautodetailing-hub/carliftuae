export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  // Pricing
  {
    category: "Pricing",
    question: "How much is a car lift from Dubai to Abu Dhabi?",
    answer:
      "A car lift from Dubai to Abu Dhabi costs AED 200 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Dubai?",
    answer:
      "A car lift from Abu Dhabi to Dubai costs AED 200 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is an airport transfer from Dubai to Abu Dhabi?",
    answer:
      "An airport transfer from Dubai to Abu Dhabi costs AED 250.",
  },
  {
    category: "Pricing",
    question: "How much is an airport transfer from Abu Dhabi to Dubai?",
    answer:
      "An airport transfer from Abu Dhabi to Dubai costs AED 250.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Sharjah?",
    answer:
      "A car lift from Abu Dhabi to Sharjah costs AED 280 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Sharjah to Abu Dhabi?",
    answer:
      "A car lift from Sharjah to Abu Dhabi costs AED 280 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is an airport transfer on the Abu Dhabi–Sharjah route?",
    answer:
      "An airport transfer on the Abu Dhabi–Sharjah route (in either direction) costs AED 300.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Ajman?",
    answer:
      "A car lift from Abu Dhabi to Ajman costs AED 300 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Ajman to Abu Dhabi?",
    answer:
      "A car lift from Ajman to Abu Dhabi costs AED 300 for a normal/private ride.",
  },
  {
    category: "Pricing",
    question: "How much is an airport transfer on the Abu Dhabi–Ajman route?",
    answer:
      "An airport transfer on the Abu Dhabi–Ajman route (in either direction) costs AED 320.",
  },

  // Routes
  {
    category: "Routes",
    question: "What routes does Quick Car Lift Service UAE cover?",
    answer:
      "Quick Car Lift Service UAE covers three inter-emirate routes: Dubai ↔ Abu Dhabi, Abu Dhabi ↔ Sharjah, and Abu Dhabi ↔ Ajman. Both directions are available on every route.",
  },

  // Airport Transfers
  {
    category: "Airport Transfers",
    question: "Do you provide airport transfers?",
    answer:
      "Yes. Quick Car Lift Service UAE provides airport transfers on all confirmed routes at slightly higher rates than normal private rides.",
  },

  // Booking
  {
    category: "Booking",
    question: "How do I book a car lift?",
    answer:
      "Contact us by phone or WhatsApp using the number on this page and we will arrange your ride.",
  },
];

export const FAQ_CATEGORIES = [
  "Pricing",
  "Routes",
  "Airport Transfers",
  "Booking",
];
