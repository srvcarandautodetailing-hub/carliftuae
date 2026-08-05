export interface Location {
  slug: string;
  name: string;
  emirate: "sharjah" | "dubai" | "ajman";
  description: string;
  longDescription: string;
  keywords: string[];
  coordinates: { lat: number; lng: number };
  pickupPoints: string[];
  landmarks: string[];
  nearbyMetro: string[];
  drivingTime: string; // to Business Bay
  distance: string; // to Business Bay
  monthlyPrice: number;
  faqs: { question: string; answer: string }[];
}

export const LOCATIONS: Location[] = [
  {
    slug: "sharjah",
    name: "Sharjah",
    emirate: "sharjah",
    description:
      "Daily car lift service from Sharjah to Business Bay, Dubai. Safe, affordable shared rides every morning. Book monthly from AED 350.",
    longDescription:
      "Sharjah is home to thousands of professionals who commute daily to Dubai's Business Bay, DIFC, and Downtown. Our car lift service from Sharjah covers all major areas including Al Majaz, Al Nahda, Al Qusais, Muweilah, and Al Taawun, providing a reliable, cost-effective alternative to individual driving on the busy Sharjah–Dubai corridor.",
    keywords: [
      "car lift sharjah",
      "car lift sharjah to dubai",
      "car lift sharjah to business bay",
      "sharjah to business bay car lift",
      "car lift service sharjah",
      "daily car lift sharjah",
      "shared ride sharjah dubai",
    ],
    coordinates: { lat: 25.3573, lng: 55.385 },
    pickupPoints: [
      "Al Majaz Waterfront",
      "Al Nahda (Sharjah side)",
      "Al Qasimia",
      "Rolla Square",
      "Al Taawun",
      "Muweilah",
      "University City",
      "Al Khan",
      "Al Qasba",
      "Abu Shagara",
    ],
    landmarks: [
      "Sharjah City Centre",
      "Al Majaz Amphitheatre",
      "Sharjah Museum of Islamic Civilization",
      "Al Qasba Canal",
      "Sharjah Aquarium",
      "Sharjah International Airport",
    ],
    nearbyMetro: ["Al Nahda Metro (Dubai side)", "Stadium Metro"],
    drivingTime: "30–50 min",
    distance: "25 km",
    monthlyPrice: 350,
    faqs: [
      {
        question: "What is the best car lift service from Sharjah to Business Bay?",
        answer:
          "Car Lift UAE offers the most reliable and affordable daily car lift from Sharjah to Business Bay. We operate 6 days a week with pickup from all major Sharjah areas at flexible timings.",
      },
      {
        question: "How much does a car lift from Sharjah to Dubai cost?",
        answer:
          "Our monthly car lift package from Sharjah to Dubai starts at AED 350 per month. Daily rates start from AED 25 per trip. This is significantly cheaper than fuel, parking, and Salik tolls.",
      },
      {
        question: "What time do car lifts from Sharjah to Business Bay depart?",
        answer:
          "Morning pickup times are typically 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Evening return trips depart from Business Bay at 5:00 PM, 5:30 PM, 6:00 PM, and 6:30 PM.",
      },
      {
        question: "Is the car lift safe for ladies traveling alone from Sharjah?",
        answer:
          "Yes. We offer dedicated ladies-only car lift options with female drivers. All vehicles are tracked via GPS, and our team is background-checked and verified.",
      },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    emirate: "dubai",
    description:
      "Car lift service across Dubai – connecting all major areas to Business Bay, DIFC, and Downtown Dubai. Reliable daily rides from AED 200/month.",
    longDescription:
      "Dubai is the UAE's commercial heart, and our car lift network spans the entire emirate. Whether you're in Deira, Bur Dubai, Dubai Marina, JVC, or Silicon Oasis, we connect you to Business Bay and other key business districts with professional, punctual drivers.",
    keywords: [
      "car lift dubai",
      "car lift service dubai",
      "daily car lift dubai",
      "car lift dubai business bay",
      "shared ride dubai",
      "car lift dubai to sharjah",
    ],
    coordinates: { lat: 25.2048, lng: 55.2708 },
    pickupPoints: [
      "Business Bay Metro",
      "BurJuman Metro",
      "Dubai Mall",
      "Deira City Centre",
      "JBR Walk",
      "Silicon Oasis main gate",
      "JVC Circle Mall",
      "JLT Cluster",
    ],
    landmarks: [
      "Burj Khalifa",
      "Dubai Mall",
      "Business Bay Canal",
      "Dubai Frame",
      "Dubai Creek",
      "Gold Souk",
    ],
    nearbyMetro: [
      "Business Bay Metro (Red Line)",
      "BurJuman Metro",
      "DMCC Metro",
    ],
    drivingTime: "10–30 min",
    distance: "5–30 km",
    monthlyPrice: 250,
    faqs: [
      {
        question: "Do you offer car lift within Dubai?",
        answer:
          "Yes, we provide intra-Dubai car lift routes connecting areas like Deira, Bur Dubai, Dubai Marina, JVC, JLT, and Silicon Oasis to Business Bay and Downtown Dubai.",
      },
      {
        question: "What is the monthly price for a car lift in Dubai?",
        answer:
          "Monthly car lift packages within Dubai start from AED 200 per month depending on your route and distance.",
      },
    ],
  },
  {
    slug: "business-bay",
    name: "Business Bay",
    emirate: "dubai",
    description:
      "Car lift to and from Business Bay Dubai. Perfect for professionals working in the towers. Daily pickup and drop-off from AED 25/trip.",
    longDescription:
      "Business Bay is Dubai's fastest-growing business district, home to over 240 towers and thousands of professionals. Our car lift service to Business Bay is the most popular route, connecting residents from Sharjah, Ajman, Deira, Bur Dubai, and all major Dubai areas to their offices daily.",
    keywords: [
      "car lift business bay",
      "car lift to business bay",
      "car lift business bay dubai",
      "sharjah to business bay car lift",
      "car lift from business bay",
      "business bay car pool",
    ],
    coordinates: { lat: 25.1866, lng: 55.2629 },
    pickupPoints: [
      "Business Bay Metro Station",
      "The Oberoi Dubai",
      "JW Marriott Marquis",
      "Executive Towers",
      "Bay Square",
      "Damac Towers",
      "Opus by Zaha Hadid",
      "Control Tower",
    ],
    landmarks: [
      "Business Bay Metro Station",
      "Burj Khalifa",
      "Dubai Canal",
      "Bay Square Mall",
      "Executive Towers",
      "JW Marriott Marquis",
    ],
    nearbyMetro: ["Business Bay Metro (Red Line)"],
    drivingTime: "0 min",
    distance: "0 km",
    monthlyPrice: 300,
    faqs: [
      {
        question: "Which areas does the Business Bay car lift cover?",
        answer:
          "Our Business Bay car lift picks up from Sharjah (all areas), Ajman, Al Nahda, Al Qusais, Deira, Bur Dubai, and surrounding areas. Multiple pickup timings are available.",
      },
      {
        question: "How do I find a car lift to Business Bay from Sharjah?",
        answer:
          "Simply contact Car Lift UAE via WhatsApp at +971 50 123 4567. We'll match you with available seats on existing routes or create a new route based on demand.",
      },
    ],
  },
  {
    slug: "ajman",
    name: "Ajman",
    emirate: "ajman",
    description:
      "Affordable daily car lift from Ajman to Dubai Business Bay and Sharjah. Long-route specialists with comfortable vehicles from AED 400/month.",
    longDescription:
      "Ajman residents face one of the longest daily commutes in the UAE. Our car lift from Ajman to Business Bay and Dubai covers all major Ajman areas including Al Rashidiya, Al Nuaimiya, Al Jurf, and Al Hamidiyah, offering a comfortable, air-conditioned shared ride that saves you time, fuel, and stress.",
    keywords: [
      "car lift ajman",
      "car lift ajman to dubai",
      "car lift ajman to business bay",
      "car lift ajman sharjah",
      "daily car lift ajman",
      "shared ride ajman dubai",
    ],
    coordinates: { lat: 25.4052, lng: 55.5136 },
    pickupPoints: [
      "Ajman City Centre",
      "Al Rashidiya",
      "Al Nuaimiya",
      "Ajman Corniche",
      "Al Jurf",
      "Al Hamidiyah",
      "Al Rawda",
      "Ajman Free Zone",
    ],
    landmarks: [
      "Ajman Museum",
      "Ajman City Centre",
      "Ajman Corniche",
      "Ajman Free Zone",
      "Ajman University",
    ],
    nearbyMetro: ["Al Rashidiya Metro (Sharjah-adjacent)"],
    drivingTime: "45–70 min",
    distance: "40 km",
    monthlyPrice: 420,
    faqs: [
      {
        question: "Is there a car lift from Ajman to Business Bay?",
        answer:
          "Yes! Car Lift UAE operates a dedicated Ajman–Business Bay route. The journey typically takes 45–70 minutes depending on traffic. Monthly package is AED 420.",
      },
      {
        question: "What time does the car lift from Ajman to Dubai leave?",
        answer:
          "Ajman departures are at 6:00 AM, 6:30 AM, and 7:00 AM to reach Business Bay before 8:00 AM. Evening returns depart at 5:30 PM and 6:30 PM.",
      },
    ],
  },
  {
    slug: "al-nahda",
    name: "Al Nahda",
    emirate: "sharjah",
    description:
      "Car lift from Al Nahda Sharjah to Business Bay Dubai. Prime location on the Sharjah-Dubai border. Fastest pickup times from AED 300/month.",
    longDescription:
      "Al Nahda is strategically located on the Sharjah-Dubai border, making it one of the most convenient pickup points for car lifts to Business Bay. With easy highway access and multiple landmarks, our drivers can quickly pick you up and get you to your Dubai destination.",
    keywords: [
      "car lift al nahda sharjah",
      "car lift al nahda to business bay",
      "al nahda sharjah car lift",
      "car lift al nahda dubai",
    ],
    coordinates: { lat: 25.3118, lng: 55.3953 },
    pickupPoints: [
      "Al Nahda Pond Park",
      "Al Nahda 1",
      "Al Nahda 2",
      "Sahara Centre",
      "Al Mamzar border area",
      "Nesto Hypermarket Al Nahda",
    ],
    landmarks: ["Sahara Centre Mall", "Al Nahda Pond Park", "Al Mamzar Beach"],
    nearbyMetro: ["Al Nahda Metro Station"],
    drivingTime: "25–40 min",
    distance: "20 km",
    monthlyPrice: 300,
    faqs: [
      {
        question: "What is the best pickup point for car lift in Al Nahda Sharjah?",
        answer:
          "Popular pickup points in Al Nahda include Sahara Centre, Al Nahda Pond Park, and the Al Nahda 1 and 2 residential areas. Our driver will confirm the exact spot when you book.",
      },
    ],
  },
  {
    slug: "al-qusais",
    name: "Al Qusais",
    emirate: "dubai",
    description:
      "Car lift from Al Qusais to Business Bay and Downtown Dubai. Affordable shared rides for Al Qusais residents from AED 220/month.",
    longDescription:
      "Al Qusais is a densely populated residential area in Dubai with excellent connectivity. Our car lift service from Al Qusais to Business Bay takes 20–35 minutes and connects you to the most sought-after business district in the UAE.",
    keywords: [
      "car lift al qusais",
      "car lift al qusais to business bay",
      "car lift al qusais dubai",
      "shared ride al qusais",
    ],
    coordinates: { lat: 25.2854, lng: 55.3802 },
    pickupPoints: [
      "Al Qusais Metro Station",
      "Al Qusais Industrial Area",
      "Century Mall Al Qusais",
      "Al Twar Centre",
    ],
    landmarks: ["Century Mall", "Al Qusais Industrial Area", "Al Twar Centre"],
    nearbyMetro: ["Al Qusais Metro Station (Green Line)"],
    drivingTime: "20–35 min",
    distance: "18 km",
    monthlyPrice: 220,
    faqs: [
      {
        question: "Is there a car lift from Al Qusais to Business Bay?",
        answer:
          "Yes! We run regular car lift routes from Al Qusais to Business Bay daily. Book your monthly seat for just AED 220.",
      },
    ],
  },
  {
    slug: "al-khan",
    name: "Al Khan",
    emirate: "sharjah",
    description:
      "Daily car lift from Al Khan Sharjah to Business Bay and Dubai. Beachfront pickup points and reliable morning routes from AED 320/month.",
    longDescription:
      "Al Khan is a beautiful coastal area in Sharjah known for its lagoon and proximity to Dubai. Our car lift service from Al Khan provides a scenic and efficient commute to Business Bay, with multiple morning departure times.",
    keywords: [
      "car lift al khan",
      "car lift al khan sharjah",
      "al khan sharjah to dubai car lift",
    ],
    coordinates: { lat: 25.3411, lng: 55.3897 },
    pickupPoints: ["Al Khan Lagoon", "Al Khan Beach", "Al Khan Hypermarket"],
    landmarks: ["Al Khan Lagoon", "Sharjah Aquarium", "Al Majaz Waterfront"],
    nearbyMetro: [],
    drivingTime: "30–45 min",
    distance: "22 km",
    monthlyPrice: 320,
    faqs: [
      {
        question: "Can I get a car lift from Al Khan Sharjah to Business Bay?",
        answer:
          "Absolutely. We pick up from Al Khan Lagoon and nearby areas at 7:00 AM and 7:30 AM for Business Bay arrivals.",
      },
    ],
  },
  {
    slug: "al-majaz",
    name: "Al Majaz",
    emirate: "sharjah",
    description:
      "Car lift from Al Majaz Sharjah to Business Bay Dubai. Waterfront pickup points, punctual drivers, monthly package AED 340.",
    longDescription:
      "Al Majaz is Sharjah's premier residential and leisure area, offering our riders easy pickup from the iconic waterfront. Our Al Majaz to Business Bay route is one of the most popular, with seats filling up quickly each month.",
    keywords: ["car lift al majaz", "al majaz to business bay car lift", "car lift al majaz sharjah"],
    coordinates: { lat: 25.3469, lng: 55.3811 },
    pickupPoints: ["Al Majaz Waterfront", "Al Majaz Park", "Al Qasba", "Al Buhairah Corniche"],
    landmarks: ["Al Majaz Amphitheatre", "Al Qasba Canal", "Sharjah Eye"],
    nearbyMetro: [],
    drivingTime: "30–45 min",
    distance: "23 km",
    monthlyPrice: 340,
    faqs: [
      {
        question: "Where exactly do you pick up from in Al Majaz?",
        answer:
          "We pick up from Al Majaz Waterfront, Al Qasba, and Al Buhairah Corniche. Exact location is confirmed when you book.",
      },
    ],
  },
  {
    slug: "al-taawun",
    name: "Al Taawun",
    emirate: "sharjah",
    description:
      "Car lift from Al Taawun Sharjah to Business Bay and Dubai. Modern residential area with convenient highway access. AED 330/month.",
    longDescription:
      "Al Taawun is one of Sharjah's most popular residential areas, attracting many young professionals working in Dubai. Our car lift from Al Taawun to Business Bay is fast, comfortable, and wallet-friendly.",
    keywords: ["car lift al taawun", "al taawun sharjah to business bay", "car lift al taawun sharjah"],
    coordinates: { lat: 25.3297, lng: 55.4009 },
    pickupPoints: ["Al Taawun Mall", "Al Taawun Street", "Al Taawun residential buildings"],
    landmarks: ["Al Taawun Mall", "Sahara Centre (nearby)"],
    nearbyMetro: [],
    drivingTime: "30–45 min",
    distance: "22 km",
    monthlyPrice: 330,
    faqs: [
      {
        question: "How long does the car lift from Al Taawun to Business Bay take?",
        answer:
          "The journey from Al Taawun to Business Bay typically takes 30–45 minutes depending on traffic conditions and the Sharjah–Dubai border.",
      },
    ],
  },
  {
    slug: "muweilah",
    name: "Muweilah",
    emirate: "sharjah",
    description:
      "Car lift from Muweilah Sharjah to Business Bay and Dubai. University area routes available. Book monthly from AED 350.",
    longDescription:
      "Muweilah is home to University City Sharjah and thousands of residents commuting to Dubai. Our car lift from Muweilah covers all residential compounds and provides seamless connectivity to Business Bay and Downtown Dubai.",
    keywords: ["car lift muweilah", "muweilah sharjah to dubai car lift", "car lift muweilah sharjah"],
    coordinates: { lat: 25.3167, lng: 55.4319 },
    pickupPoints: ["University City Gate", "Muweilah Commercial", "Muweilah residential compounds"],
    landmarks: ["University of Sharjah", "American University of Sharjah", "UOWD"],
    nearbyMetro: [],
    drivingTime: "35–55 min",
    distance: "28 km",
    monthlyPrice: 360,
    faqs: [
      {
        question: "Do you offer car lift for students and staff near University City Sharjah?",
        answer:
          "Yes, we have routes specifically for the Muweilah/University City area heading to Dubai. Many faculty and staff members use our service.",
      },
    ],
  },
  {
    slug: "al-qouz",
    name: "Al Qouz",
    emirate: "dubai",
    description:
      "Car lift from Al Qouz to Business Bay, Downtown, and DIFC Dubai. Industrial and residential routes available. AED 230/month.",
    longDescription:
      "Al Qouz serves both industrial and residential communities in Dubai. Our car lift from Al Qouz to Business Bay is a popular choice for professionals who want to avoid parking costs and traffic stress.",
    keywords: ["car lift al qouz", "al qouz to business bay car lift", "car lift al qouz dubai"],
    coordinates: { lat: 25.1588, lng: 55.2256 },
    pickupPoints: ["Al Qouz Mall", "Spinney's Al Qouz", "Al Qouz Industrial Area", "Times Square Centre"],
    landmarks: ["Alserkal Avenue", "Times Square Centre", "Al Qouz Pond Park"],
    nearbyMetro: ["First Abu Dhabi Bank Metro"],
    drivingTime: "15–25 min",
    distance: "12 km",
    monthlyPrice: 230,
    faqs: [
      {
        question: "What routes does the Al Qouz car lift cover?",
        answer:
          "From Al Qouz, we go to Business Bay, DIFC, Downtown Dubai, and Jumeirah. Travel time is 15–25 minutes.",
      },
    ],
  },
  {
    slug: "dubai-marina",
    name: "Dubai Marina",
    emirate: "dubai",
    description:
      "Car lift from Dubai Marina to Business Bay and DIFC. Waterfront pickup points in JBR and Marina Walk. From AED 270/month.",
    longDescription:
      "Dubai Marina is one of the world's largest man-made marinas, home to tens of thousands of professionals. Our car lift from Dubai Marina connects you to Business Bay, DIFC, and Downtown via the Sheikh Zayed Road.",
    keywords: ["car lift dubai marina", "dubai marina to business bay car lift", "car lift jbr dubai"],
    coordinates: { lat: 25.0774, lng: 55.1393 },
    pickupPoints: ["Dubai Marina Mall", "JBR Walk", "Marina Walk", "DMCC Metro Station"],
    landmarks: ["Marina Towers", "JBR Beach", "Dubai Eye (Ain Dubai)", "DMCC Free Zone"],
    nearbyMetro: ["DMCC Metro Station (Red Line)", "Jumeirah Lakes Towers Metro"],
    drivingTime: "30–50 min",
    distance: "28 km",
    monthlyPrice: 280,
    faqs: [
      {
        question: "Does the car lift from Dubai Marina go to Business Bay?",
        answer:
          "Yes. We run a daily route from Dubai Marina/JBR to Business Bay via Sheikh Zayed Road. Journey time is approximately 30–50 minutes.",
      },
    ],
  },
  {
    slug: "jvc",
    name: "JVC (Jumeirah Village Circle)",
    emirate: "dubai",
    description:
      "Car lift from JVC to Business Bay, Downtown, and DIFC Dubai. Affordable monthly packages for JVC residents. From AED 240/month.",
    longDescription:
      "Jumeirah Village Circle (JVC) is a rapidly growing community in Dubai with thousands of professionals commuting to Business Bay and DIFC daily. Our JVC car lift service provides cost-effective, reliable shared rides every morning.",
    keywords: ["car lift jvc", "jumeirah village circle car lift", "jvc to business bay car lift", "car lift jvc dubai"],
    coordinates: { lat: 25.0641, lng: 55.2087 },
    pickupPoints: ["Circle Mall JVC", "JVC main entrance", "Al Barsha Junction nearby"],
    landmarks: ["Circle Mall", "Halcon Hotel JVC", "JVC Park"],
    nearbyMetro: [],
    drivingTime: "25–40 min",
    distance: "20 km",
    monthlyPrice: 250,
    faqs: [
      {
        question: "Is there a reliable car lift from JVC to Business Bay?",
        answer:
          "Yes! Our JVC to Business Bay car lift runs Monday to Saturday. Pickup from Circle Mall or main JVC entrance at 7:00 AM and 7:30 AM.",
      },
    ],
  },
  {
    slug: "jlt",
    name: "JLT (Jumeirah Lake Towers)",
    emirate: "dubai",
    description:
      "Car lift from JLT to Business Bay and Downtown Dubai. Cluster-by-cluster pickup across JLT. From AED 260/month.",
    longDescription:
      "Jumeirah Lake Towers (JLT) is Dubai's premier mixed-use community with thousands of residents and businesses. Our car lift from JLT connects you to Business Bay and DIFC in 20–30 minutes.",
    keywords: ["car lift jlt", "jumeirah lake towers car lift", "jlt to business bay car lift"],
    coordinates: { lat: 25.069, lng: 55.1447 },
    pickupPoints: ["DMCC Metro Station", "JLT Cluster A", "JLT Cluster D", "JLT Cluster Q"],
    landmarks: ["DMCC Free Zone", "Jumeirah Lake Towers", "JLT Promenade"],
    nearbyMetro: ["DMCC Metro Station"],
    drivingTime: "20–35 min",
    distance: "22 km",
    monthlyPrice: 260,
    faqs: [
      {
        question: "Can I get a car lift from any cluster in JLT?",
        answer:
          "We pick up from all main clusters in JLT. Just mention your cluster when booking and we'll arrange the closest pickup point.",
      },
    ],
  },
  {
    slug: "deira",
    name: "Deira",
    emirate: "dubai",
    description:
      "Car lift from Deira to Business Bay and Downtown Dubai. Historic Dubai neighborhood with excellent car lift coverage. From AED 210/month.",
    longDescription:
      "Deira is one of Dubai's oldest and most vibrant neighborhoods. Our car lift from Deira to Business Bay covers all major areas including Al Rigga, Port Saeed, Al Muraqqabat, and near the Gold Souk, providing an affordable daily commute solution.",
    keywords: ["car lift deira", "deira to business bay car lift", "car lift deira dubai", "al rigga car lift"],
    coordinates: { lat: 25.2697, lng: 55.3094 },
    pickupPoints: ["Deira City Centre", "Al Rigga Metro", "GGICO Metro", "Gold Souk area"],
    landmarks: ["Deira City Centre", "Gold Souk", "Spice Souk", "Dubai Creek"],
    nearbyMetro: ["Union Metro", "Al Rigga Metro", "GGICO Metro"],
    drivingTime: "20–35 min",
    distance: "16 km",
    monthlyPrice: 210,
    faqs: [
      {
        question: "What is the car lift cost from Deira to Business Bay?",
        answer:
          "Monthly car lift from Deira to Business Bay starts at AED 210. Daily rate is AED 18 per trip. Pickup from Al Rigga, GGICO, or Deira City Centre.",
      },
    ],
  },
  {
    slug: "bur-dubai",
    name: "Bur Dubai",
    emirate: "dubai",
    description:
      "Car lift from Bur Dubai to Business Bay, DIFC, and Downtown. Historic creek-side community with affordable shared rides. From AED 200/month.",
    longDescription:
      "Bur Dubai offers easy connectivity to Business Bay through Al Khail Road and Sheikh Khalifa Bin Zayed Road. Our car lift from Bur Dubai is one of the most affordable options given the short distance to Business Bay.",
    keywords: ["car lift bur dubai", "bur dubai to business bay car lift", "car lift bur dubai"],
    coordinates: { lat: 25.2617, lng: 55.2989 },
    pickupPoints: ["BurJuman Metro", "Meena Bazaar", "Mankhool", "Al Raffa"],
    landmarks: ["BurJuman Mall", "Dubai Museum", "Dubai Creek", "Textile Souk"],
    nearbyMetro: ["BurJuman Metro (Red & Green Line)"],
    drivingTime: "15–25 min",
    distance: "8 km",
    monthlyPrice: 200,
    faqs: [
      {
        question: "How far is Bur Dubai from Business Bay?",
        answer:
          "Bur Dubai is only 8 km from Business Bay, making it one of the closest areas. Car lift takes just 15–25 minutes.",
      },
    ],
  },
  {
    slug: "silicon-oasis",
    name: "Silicon Oasis",
    emirate: "dubai",
    description:
      "Car lift from Dubai Silicon Oasis to Business Bay and Downtown Dubai. Tech community routes with Wi-Fi enabled vehicles. From AED 280/month.",
    longDescription:
      "Dubai Silicon Oasis (DSO) is a free zone and technology hub in Dubai. Our car lift from Silicon Oasis to Business Bay is ideal for tech professionals who want a comfortable, productive commute. Wi-Fi available on select vehicles.",
    keywords: ["car lift silicon oasis", "dubai silicon oasis car lift", "dso to business bay car lift"],
    coordinates: { lat: 25.1212, lng: 55.3773 },
    pickupPoints: ["DSO Main Gate", "Silicon Oasis Hotel", "Souq Extra DSO", "Cedre Villas"],
    landmarks: ["Dubai Silicon Oasis HQ", "Cedre Shopping Centre", "DIAC Courts"],
    nearbyMetro: [],
    drivingTime: "25–40 min",
    distance: "22 km",
    monthlyPrice: 290,
    faqs: [
      {
        question: "Is there a car lift from Silicon Oasis to Business Bay?",
        answer:
          "Yes. We operate a daily car lift from Dubai Silicon Oasis to Business Bay and Downtown. Morning departure at 7:00 AM, 7:30 AM and 8:00 AM.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByEmirate(emirate: Location["emirate"]): Location[] {
  return LOCATIONS.filter((l) => l.emirate === emirate);
}
