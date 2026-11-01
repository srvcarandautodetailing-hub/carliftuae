export interface AirportInfo {
  slug: string;
  code: string;
  name: string;
  shortName: string;
  city: string;
  description: string;
  terminals: string;
  driveNote: string;
  pickupPoints: string[];
  faqs: { question: string; answer: string }[];
}

export const AIRPORTS: AirportInfo[] = [
  {
    slug: "airport-car-lift-dubai-dxb",
    code: "DXB",
    name: "Dubai International Airport",
    shortName: "DXB Airport",
    city: "Dubai",
    description:
      "Daily car lift pickup and drop-off at Dubai International Airport (DXB). Pre-booked private rides from DXB to Dubai, Abu Dhabi and Ajman. Call or WhatsApp +971 54 330 8261.",
    terminals: "Terminals 1, 2 & 3",
    driveNote:
      "DXB is 10–15 minutes from Deira and Business Bay, 60–75 minutes from Abu Dhabi, and 45–60 minutes from Ajman depending on traffic.",
    pickupPoints: [
      "Terminal 1 – Arrivals",
      "Terminal 2 – Arrivals",
      "Terminal 3 – Arrivals",
      "DXB Car Park B",
    ],
    faqs: [
      {
        question: "Do you pick up from Dubai International Airport (DXB)?",
        answer:
          "Yes. Quick Car Lift Service UAE offers pre-booked car lift pickup from DXB Terminals 1, 2 and 3. Share your flight number on WhatsApp +971 54 330 8261 and we coordinate your pickup timing.",
      },
      {
        question: "How much is a car lift from DXB to Abu Dhabi?",
        answer:
          "A private car lift from DXB to Abu Dhabi is AED 230 per trip. For exact pricing to other destinations, WhatsApp us your drop-off location.",
      },
      {
        question: "How do I find my driver at DXB?",
        answer:
          "After you share your flight details on WhatsApp, we confirm your pickup terminal and a meeting point. Your driver contacts you when you land.",
      },
      {
        question: "Can I book a DXB airport pickup for someone else?",
        answer:
          "Yes. Share the passenger's name, flight number and arrival time on WhatsApp and we arrange the pickup. Payment can be settled in advance.",
      },
    ],
  },
  {
    slug: "airport-car-lift-dwc",
    code: "DWC",
    name: "Al Maktoum International Airport",
    shortName: "DWC Airport",
    city: "Dubai South",
    description:
      "Daily car lift pickup and drop-off at Al Maktoum International Airport (DWC), Dubai South. Pre-booked private rides. Call or WhatsApp +971 54 330 8261.",
    terminals: "Passenger Terminal",
    driveNote:
      "DWC is 25–35 minutes from Dubai Marina and Jebel Ali, 60–80 minutes from Abu Dhabi, and 75–95 minutes from Ajman depending on traffic.",
    pickupPoints: [
      "DWC Passenger Terminal – Arrivals",
      "DWC Car Park",
      "Dubai South pickup points",
    ],
    faqs: [
      {
        question: "Do you pick up from Al Maktoum Airport (DWC)?",
        answer:
          "Yes. Quick Car Lift Service UAE offers pre-booked car lift pickup from the DWC passenger terminal in Dubai South. WhatsApp +971 54 330 8261 with your flight details.",
      },
      {
        question: "How much is a car lift from DWC to Dubai Marina?",
        answer:
          "DWC to Dubai Marina is approximately 25–35 minutes. WhatsApp us your exact drop-off for a fixed private quote — no surge pricing.",
      },
      {
        question: "How much is a car lift from DWC to Abu Dhabi?",
        answer:
          "A private car lift from DWC to Abu Dhabi is AED 230 per trip. WhatsApp us your flight details for confirmation.",
      },
      {
        question: "Is DWC pickup available late at night?",
        answer:
          "Yes. Our airport car lift is available 24/7. Pre-booking is recommended for late-night and early-morning flights so a driver is assigned in advance.",
      },
      {
        question: "Do you serve DWC for departures (drop-off)?",
        answer:
          "Yes. We drop you at the DWC departures terminal with enough buffer time. Tell us your flight time and we plan the pickup accordingly.",
      },
    ],
  },
  {
    slug: "airport-car-lift-abu-dhabi-auh",
    code: "AUH",
    name: "Zayed International Airport",
    shortName: "AUH Airport",
    city: "Abu Dhabi",
    description:
      "Daily car lift pickup and drop-off at Zayed International Airport (AUH), Abu Dhabi. Pre-booked private rides to Abu Dhabi, Dubai and Ajman. Call or WhatsApp +971 54 330 8261.",
    terminals: "Terminal A",
    driveNote:
      "AUH is 25–35 minutes from central Abu Dhabi, 75–90 minutes from Dubai, and 2–2.5 hours from Ajman depending on traffic.",
    pickupPoints: [
      "Terminal A – Arrivals",
      "AUH Car Park",
      "Khalifa City pickup points",
    ],
    faqs: [
      {
        question: "Do you pick up from Zayed International Airport (AUH)?",
        answer:
          "Yes. Quick Car Lift Service UAE offers pre-booked car lift pickup from Terminal A at Zayed International Airport. Share your flight number on WhatsApp +971 54 330 8261.",
      },
      {
        question: "How much is a car lift from AUH to Dubai?",
        answer:
          "A private car lift from AUH to Dubai is AED 230 per trip. WhatsApp us your exact Dubai drop-off for confirmation.",
      },
      {
        question: "Can I get a shared ride from AUH airport?",
        answer:
          "Airport pickups are private rides so your timing stays flexible around your flight. Sharing options may be available on request — ask on WhatsApp.",
      },
      {
        question: "What if my flight is delayed?",
        answer:
          "Share your flight number when booking. If your schedule changes, message us on WhatsApp and we adjust your pickup time.",
      },
    ],
  },
  {
    slug: "airport-car-lift-sharjah-shj",
    code: "SHJ",
    name: "Sharjah International Airport",
    shortName: "Sharjah Airport (SHJ)",
    city: "Sharjah",
    description:
      "Airport car lift pickup and drop-off at Sharjah International Airport (SHJ) only. We serve the airport — we do not operate city routes in Sharjah. Call or WhatsApp +971 54 330 8261.",
    terminals: "Main Terminal",
    driveNote:
      "SHJ is 15–20 minutes from Sharjah city areas, 30–45 minutes from Dubai, and 2+ hours from Abu Dhabi depending on traffic.",
    pickupPoints: [
      "SHJ Main Terminal – Arrivals",
      "SHJ Car Park",
    ],
    faqs: [
      {
        question: "Do you serve Sharjah Airport (SHJ)?",
        answer:
          "Yes — for airport pickup and drop-off only. We serve Sharjah International Airport (SHJ), but we do not operate city car lift routes in Sharjah. WhatsApp +971 54 330 8261 to book an airport ride.",
      },
      {
        question: "Can I book a car lift from SHJ to Dubai?",
        answer:
          "Yes. Airport pickup from SHJ to Dubai is available as a pre-booked private ride. Share your flight details on WhatsApp for a fixed quote.",
      },
      {
        question: "How much is a car lift from SHJ to Abu Dhabi?",
        answer:
          "A private car lift from SHJ to Abu Dhabi is AED 250 per trip. WhatsApp us your flight details for confirmation.",
      },
      {
        question: "Do you offer city rides inside Sharjah?",
        answer:
          "No. We discontinued city routes in Sharjah. We only serve Sharjah International Airport for pickups and drop-offs.",
      },
      {
        question: "How do I book an SHJ airport pickup?",
        answer:
          "WhatsApp +971 54 330 8261 with your flight number, arrival time and destination. We confirm your driver and pickup point before you land.",
      },
    ],
  },
  {
    slug: "airport-car-lift-ras-al-khaimah-rkt",
    code: "RKT",
    name: "Ras Al Khaimah International Airport",
    shortName: "RKT Airport",
    city: "Ras Al Khaimah",
    description:
      "Pre-booked private car lift at Ras Al Khaimah Airport (RKT). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
    terminals: "Airport Terminal",
    driveNote:
      "Ras Al Khaimah International Airport serves the northern Emirates. Share your destination on WhatsApp for an exact pickup time and a fixed fare quote.",
    pickupPoints: [
      "RKT Arrivals area",
      "RKT Airport parking",
    ],
    faqs: [
      {
        question: "Do you pick up from Ras Al Khaimah Airport (RKT)?",
        answer:
          "Yes. Quick Car Lift Service UAE offers pre-booked private car lift pickup and drop-off at Ras Al Khaimah International Airport. Share your flight details on WhatsApp +971 54 330 8261 or call us.",
      },
      {
        question: "How much is a car lift from RKT airport?",
        answer:
          "A private car lift from RKT to Abu Dhabi is AED 430 per trip. For other destinations, share your pickup and drop-off points on WhatsApp +971 54 330 8261 and we confirm a fixed fare before you travel — no surge pricing.",
      },
      {
        question: "How do I book an RKT airport pickup?",
        answer:
          "Message us on WhatsApp with your flight number, arrival time and destination, or call +971 54 330 8261. We confirm your driver and meeting point in advance.",
      },
    ],
  },
  {
    slug: "airport-car-lift-fujairah-fjr",
    code: "FJR",
    name: "Fujairah International Airport",
    shortName: "FJR Airport",
    city: "Fujairah",
    description:
      "Pre-booked private car lift at Fujairah Airport (FJR). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
    terminals: "Airport Terminal",
    driveNote:
      "Fujairah International Airport serves the UAE's east coast. Share your destination on WhatsApp for an exact pickup time and a fixed fare quote.",
    pickupPoints: [
      "FJR Arrivals area",
      "FJR Airport parking",
    ],
    faqs: [
      {
        question: "Do you pick up from Fujairah Airport (FJR)?",
        answer:
          "Yes. Quick Car Lift Service UAE offers pre-booked private car lift pickup and drop-off at Fujairah International Airport. Share your flight details on WhatsApp +971 54 330 8261 or call us.",
      },
      {
        question: "How much is a car lift from FJR airport?",
        answer:
          "Fares depend on your destination. Share your pickup and drop-off points on WhatsApp +971 54 330 8261 and we confirm a fixed fare before you travel — no surge pricing.",
      },
      {
        question: "Is Fujairah airport pickup available for early morning flights?",
        answer:
          "Yes. Our airport car lift runs 24/7. For early morning or late-night flights at FJR, pre-book on WhatsApp so a driver is assigned in advance.",
      },
    ],
  },
];

export function getAirportBySlug(slug: string): AirportInfo | undefined {
  return AIRPORTS.find((a) => a.slug === slug);
}
