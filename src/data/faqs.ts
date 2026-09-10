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
      "A car lift from Dubai to Abu Dhabi costs AED 100 sharing or AED 170 private. Call or WhatsApp +971 54 330 8261 to book.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Dubai?",
    answer:
      "A car lift from Abu Dhabi to Dubai costs AED 100 sharing or AED 170 private. Available 24/7 — WhatsApp +971 54 330 8261.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Sharjah?",
    answer:
      "A car lift from Abu Dhabi to Sharjah costs AED 130 sharing or AED 200 private. WhatsApp +971 54 330 8261 to book.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Sharjah to Abu Dhabi?",
    answer:
      "A car lift from Sharjah to Abu Dhabi costs AED 130 sharing or AED 200 private. Call or WhatsApp +971 54 330 8261.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Abu Dhabi to Ajman?",
    answer:
      "A car lift from Abu Dhabi to Ajman costs AED 130 sharing or AED 200 private. WhatsApp +971 54 330 8261 to confirm.",
  },
  {
    category: "Pricing",
    question: "How much is a car lift from Ajman to Abu Dhabi?",
    answer:
      "A car lift from Ajman to Abu Dhabi costs AED 130 sharing or AED 200 private. Available 24/7 — call +971 54 330 8261.",
  },
  {
    category: "Pricing",
    question: "What is the difference between sharing and private car lift?",
    answer:
      "Sharing means you share the vehicle with other passengers going the same direction — lower cost (AED 100–130). Private means the vehicle is exclusively for you and your group (AED 170–200). Both options use luxury air-conditioned vehicles.",
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
