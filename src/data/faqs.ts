export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export const FAQS: FAQ[] = [
  // Booking
  {
    category: "Booking",
    question: "How do I book a car lift in UAE?",
    answer:
      "Booking is simple. WhatsApp us at +971 56 228 6455 with your pickup location, destination, and preferred timing. We'll confirm your seat within an hour. You can also book via our website contact form.",
  },
  {
    category: "Booking",
    question: "How far in advance do I need to book?",
    answer:
      "For daily bookings, we need at least 12 hours advance notice (book by 9 PM for next morning). For monthly packages, you can start on any day of the month.",
  },
  {
    category: "Booking",
    question: "Can I book a car lift for a one-way trip only?",
    answer:
      "Yes. You can book morning only, evening only, or both ways. Monthly packages can be customized for one-way or both-way service.",
  },
  {
    category: "Booking",
    question: "Is there an app to book a car lift?",
    answer:
      "Currently, booking is done via WhatsApp or our website. A mobile app is coming soon. WhatsApp booking is fast and convenient for most of our customers.",
  },

  // Pricing
  {
    category: "Pricing",
    question: "How much does a car lift from Sharjah to Business Bay cost?",
    answer:
      "Monthly car lift from Sharjah to Business Bay costs between AED 300–AED 400 depending on your pickup location. Daily rides are AED 25–35 per trip. This is far cheaper than fuel + Salik + parking in Business Bay.",
  },
  {
    category: "Pricing",
    question: "What is included in the monthly car lift price?",
    answer:
      "The monthly price includes pickup from your agreed location, drop-off at your office, and the return journey in the evening. Salik tolls are included. There are no hidden charges.",
  },
  {
    category: "Pricing",
    question: "Are Salik tolls included in the price?",
    answer:
      "Yes. All Salik toll charges are included in our pricing. You won't pay anything extra for toll crossings.",
  },
  {
    category: "Pricing",
    question: "How do I pay for the car lift?",
    answer:
      "Payment is accepted via cash, bank transfer, or WhatsApp Pay. Monthly packages are paid at the start of each month. We provide a payment receipt for all transactions.",
  },
  {
    category: "Pricing",
    question: "Do you offer a discount for long-term commitments?",
    answer:
      "Yes! We offer a 10% discount for 3-month packages and 15% discount for 6-month commitments. Contact us for details.",
  },

  // Safety
  {
    category: "Safety",
    question: "Are the car lift drivers verified?",
    answer:
      "All our drivers are UAE-licensed professionals with valid UAE driving licenses. Every driver undergoes a thorough background check, document verification, and training before joining our team.",
  },
  {
    category: "Safety",
    question: "Is the car lift vehicle GPS-tracked?",
    answer:
      "Yes. All vehicles in our fleet are equipped with real-time GPS tracking. You can request your live location at any time during the trip via WhatsApp.",
  },
  {
    category: "Safety",
    question: "What if I feel unsafe during a car lift ride?",
    answer:
      "Your safety is our priority. If you ever feel unsafe, you can immediately call our 24/7 support line at +971 56 228 6455. All rides are GPS-tracked, and our operations team monitors all active routes.",
  },
  {
    category: "Safety",
    question: "Are the vehicles insured?",
    answer:
      "Yes. All vehicles in our fleet carry comprehensive insurance coverage. Passengers are covered during the entire journey.",
  },

  // Routes & Timing
  {
    category: "Routes & Timing",
    question: "What routes does Car Lift UAE cover?",
    answer:
      "We cover all major routes between Sharjah, Ajman, and Dubai including the popular Sharjah to Business Bay route. We also serve Al Nahda, Al Qusais, Deira, Bur Dubai, JVC, JLT, Dubai Marina, Silicon Oasis, and more.",
  },
  {
    category: "Routes & Timing",
    question: "What time does the morning car lift depart?",
    answer:
      "Morning departures from Sharjah and Ajman are typically at 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Departure times are confirmed when you book based on your preferred timing.",
  },
  {
    category: "Routes & Timing",
    question: "What time does the evening car lift return from Business Bay?",
    answer:
      "Evening departures from Business Bay are at 5:00 PM, 5:30 PM, 6:00 PM, and 6:30 PM. You choose the timing that suits your work schedule.",
  },
  {
    category: "Routes & Timing",
    question: "Does the car lift operate on Fridays?",
    answer:
      "Friday service is available on request. Many of our routes operate Monday to Saturday. Please specify your preferred days when booking.",
  },
  {
    category: "Routes & Timing",
    question: "What happens if I miss the car lift?",
    answer:
      "If you miss your car lift, our driver will wait up to 5 minutes. If you need to cancel on the day, please WhatsApp us as early as possible. Daily cancellations don't affect monthly package pricing.",
  },

  // Ladies & Families
  {
    category: "Ladies & Families",
    question: "Is there a ladies-only car lift option?",
    answer:
      "Yes! We offer dedicated ladies-only car lift routes with optional female drivers. These are private or semi-private vehicles exclusively for female passengers. Contact us for availability.",
  },
  {
    category: "Ladies & Families",
    question: "Can I bring my child in the car lift?",
    answer:
      "Children are welcome in our family car lift service. We can arrange child seats on request. For regular shared car lifts, children must be seated and accompanied by an adult.",
  },

  // General
  {
    category: "General",
    question: "What type of vehicles do you use?",
    answer:
      "Our fleet consists of well-maintained Toyota Innova, Mitsubishi Montero, Honda Odyssey, and similar vehicles. All vehicles are less than 5 years old, air-conditioned, and regularly serviced.",
  },
  {
    category: "General",
    question: "How many passengers are in a shared car lift?",
    answer:
      "Standard shared car lifts carry 3–4 passengers. We never overload vehicles – every passenger gets a proper seat with a seatbelt.",
  },
  {
    category: "General",
    question: "Can I request the same driver every day?",
    answer:
      "Yes! We assign dedicated drivers to monthly package clients whenever possible. You'll get to know your driver and build a comfortable routine.",
  },
  {
    category: "General",
    question: "What happens during public holidays?",
    answer:
      "Service continues during most public holidays. We announce holiday schedules in advance via our WhatsApp group. If the holiday falls on your regular working day and you don't need the ride, just let us know.",
  },
];

export const FAQ_CATEGORIES = [
  "Booking",
  "Pricing",
  "Safety",
  "Routes & Timing",
  "Ladies & Families",
  "General",
];
