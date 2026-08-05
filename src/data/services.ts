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
    slug: "daily-car-lift",
    name: "Daily Car Lift Service",
    shortName: "Daily Car Lift",
    icon: "Car",
    description:
      "Flexible daily car lift bookings. No monthly commitment. Pay per trip from AED 25. Perfect for occasional commuters.",
    longDescription:
      "Our daily car lift service is ideal for those who need a ride on specific days without committing to a monthly package. Book via WhatsApp the night before and secure your seat. Professional drivers, air-conditioned vehicles, and punctual pickup.",
    features: [
      "No monthly commitment",
      "Book 1 day in advance",
      "Multiple pickup timings",
      "Air-conditioned vehicles",
      "GPS-tracked rides",
      "WhatsApp booking",
    ],
    keywords: [
      "daily car lift uae",
      "daily car lift sharjah",
      "daily car lift service",
      "car lift per day",
      "car lift no contract",
    ],
    price: "AED 25",
    priceNote: "per trip (one way)",
    faqs: [
      {
        question: "How do I book a daily car lift?",
        answer:
          "Simply WhatsApp us at +971 56 228 6455 by 9:00 PM the night before. Confirm your pickup location and preferred timing, and we'll handle the rest.",
      },
      {
        question: "Can I cancel a daily car lift booking?",
        answer:
          "Yes. Cancellations made before 10:00 PM the night before are free. Late cancellations may incur a 50% fee.",
      },
    ],
  },
  {
    slug: "monthly-car-lift",
    name: "Monthly Car Lift Package",
    shortName: "Monthly Car Lift",
    icon: "CalendarCheck",
    description:
      "Best value monthly car lift subscription. Fixed pickup/drop-off times. Pay once, ride every working day. From AED 200/month.",
    longDescription:
      "Our monthly car lift package is the most cost-effective way to commute in the UAE. Pay a fixed monthly fee and get a reserved seat for every working day. No surprise charges, no daily booking hassle – just show up at your pickup point and ride.",
    features: [
      "Reserved seat guarantee",
      "Fixed monthly rate",
      "6-day coverage (Mon–Sat)",
      "Fixed pickup times",
      "Invoice provided",
      "Priority customer support",
    ],
    keywords: [
      "monthly car lift uae",
      "monthly car lift sharjah",
      "car lift monthly package",
      "monthly car pool uae",
      "car lift subscription",
    ],
    price: "From AED 200",
    priceNote: "per month",
    faqs: [
      {
        question: "What does the monthly car lift package include?",
        answer:
          "The monthly package includes a reserved seat in our shared vehicle for all working days (Monday–Saturday). Morning pickup and evening drop-off are both included in the price.",
      },
      {
        question: "Can I freeze my monthly package if I travel?",
        answer:
          "Yes. You can pause your monthly package for up to 7 days per month. Just inform us 48 hours in advance.",
      },
    ],
  },
  {
    slug: "office-transport",
    name: "Office Transport Service",
    shortName: "Office Transport",
    icon: "Building2",
    description:
      "Corporate office transport solutions for businesses. Dedicated vehicles for your team's daily commute. Custom routes, custom timings.",
    longDescription:
      "Our office transport service provides businesses with a dedicated, managed transport solution for their employees. We handle routing, scheduling, driver management, and reporting – so HR doesn't have to. Scalable from 4 to 40+ employees.",
    features: [
      "Dedicated vehicle(s) for your team",
      "Custom pickup routes",
      "Monthly invoicing",
      "Driver background checks",
      "GPS monitoring",
      "HR dashboard available",
    ],
    keywords: [
      "office transport service uae",
      "employee transport dubai",
      "corporate transport sharjah",
      "office shuttle service uae",
    ],
    price: "Custom pricing",
    priceNote: "based on team size & route",
    faqs: [
      {
        question: "What is the minimum team size for office transport?",
        answer:
          "We can arrange office transport for teams of 4 or more. For smaller groups, we recommend our shared monthly car lift packages.",
      },
      {
        question: "Do you provide vehicles for office transport?",
        answer:
          "Yes. We provide well-maintained, GPS-tracked SUVs and vans depending on your team size. All drivers are professionally trained and background-verified.",
      },
    ],
  },
  {
    slug: "staff-transport",
    name: "Staff Transport Service",
    shortName: "Staff Transport",
    icon: "Users",
    description:
      "Organized staff transport for companies across UAE. Safe, reliable, and trackable rides for your workforce. Request a quote.",
    longDescription:
      "Our staff transport service is designed for companies that need to move larger groups of employees. From retail staff to construction workers, we provide comfortable vans and buses with experienced drivers who know the UAE road network.",
    features: [
      "Vans & buses available",
      "Multiple shift timings",
      "Labor camp to office routes",
      "Al Quoz & industrial routes",
      "Compliance documentation",
      "Monthly reporting",
    ],
    keywords: [
      "staff transport uae",
      "staff transport dubai",
      "employee bus service uae",
      "worker transport sharjah",
    ],
    price: "AED 60–120",
    priceNote: "per employee/month",
    faqs: [
      {
        question: "Do you transport blue-collar staff in UAE?",
        answer:
          "Yes. We provide transport for all employee categories including office staff, retail staff, and labor camp residents. Routes cover industrial areas in Sharjah, Ajman, and Dubai.",
      },
    ],
  },
  {
    slug: "ladies-car-lift",
    name: "Ladies Car Lift Service",
    shortName: "Ladies Car Lift",
    icon: "Heart",
    description:
      "Safe, exclusive car lift for ladies. Female drivers available. Verified female-only vehicle. Perfect for ladies commuting to Dubai daily.",
    longDescription:
      "Safety and comfort are our top priorities for female passengers. Our ladies car lift service provides an exclusive environment with optional female drivers, monitored routes, and a vetted passenger list. Many of our female passengers have been riding with us for years.",
    features: [
      "Female driver option available",
      "Ladies-only vehicle available",
      "GPS real-time tracking",
      "Emergency contact system",
      "Passenger verification",
      "24/7 support for emergencies",
    ],
    keywords: [
      "ladies car lift uae",
      "ladies car lift sharjah",
      "ladies car lift to dubai",
      "women car lift service uae",
      "female car lift sharjah",
    ],
    price: "From AED 320",
    priceNote: "per month",
    faqs: [
      {
        question: "Are the ladies car lift vehicles driven by female drivers?",
        answer:
          "We have female drivers for our ladies-only routes. You can request a female driver when booking. All drivers, male or female, are fully verified and background-checked.",
      },
      {
        question: "Is the ladies car lift only for Emirati women?",
        answer:
          "No. Our ladies car lift is available for all women regardless of nationality – Emirati, Arab, South Asian, Filipino, or any other background. All are welcome.",
      },
    ],
  },
  {
    slug: "family-car-lift",
    name: "Family Car Lift Service",
    shortName: "Family Car Lift",
    icon: "HeartHandshake",
    description:
      "Comfortable family car lift for couples and families with children. Larger vehicles, child seat available. Book a private or shared family ride.",
    longDescription:
      "Our family car lift service is designed for families who need to commute together. Whether it's dropping the kids at school and then heading to the office, or a couple sharing a daily commute to the same area, we have flexible solutions.",
    features: [
      "Child seat available on request",
      "Larger SUVs/MPVs available",
      "Flexible pickup timing",
      "School run combination possible",
      "Baby stroller-friendly vehicles",
      "Private family vehicle option",
    ],
    keywords: [
      "family car lift uae",
      "family car lift dubai",
      "car lift for families uae",
      "family ride sharing uae",
    ],
    price: "From AED 400",
    priceNote: "per month per family",
    faqs: [
      {
        question: "Can I take my children in the car lift?",
        answer:
          "Yes! We offer family car lift services where children are welcome. Child seats are available on request. Please mention this when booking.",
      },
    ],
  },
  {
    slug: "airport-transfer",
    name: "Airport Transfer Service",
    shortName: "Airport Transfer",
    icon: "Plane",
    description:
      "Reliable airport transfers to Dubai International, Sharjah, and Al Maktoum airports. Pre-booked, on-time, door-to-door service.",
    longDescription:
      "Never miss a flight again. Our airport transfer service ensures you reach Dubai International Airport (DXB), Sharjah International Airport (SHJ), or Al Maktoum International Airport (DWC) on time. Comfortable vehicles, flight tracking, and professional drivers.",
    features: [
      "Flight tracking included",
      "Meet & greet at arrivals",
      "24/7 availability",
      "All UAE airports covered",
      "Fixed pricing (no surge)",
      "Luggage assistance",
    ],
    keywords: [
      "airport transfer uae",
      "airport transfer dubai",
      "airport transfer sharjah",
      "dubai airport car lift",
      "airport taxi uae fixed price",
    ],
    price: "From AED 80",
    priceNote: "per trip (one way to DXB from Sharjah)",
    faqs: [
      {
        question: "How far in advance should I book an airport transfer?",
        answer:
          "We recommend booking at least 24 hours in advance. For early morning flights (before 7 AM), please book 48 hours ahead.",
      },
      {
        question: "Do you offer airport transfer at 3 AM?",
        answer:
          "Yes. We operate 24/7 for airport transfers. Early morning and late-night pickups are available at no extra charge.",
      },
    ],
  },
  {
    slug: "corporate-transport",
    name: "Corporate Transport Solutions",
    shortName: "Corporate Transport",
    icon: "Briefcase",
    description:
      "Premium corporate transport for UAE businesses. Executive vehicles, professional drivers, monthly invoicing. Trusted by 50+ companies.",
    longDescription:
      "Our corporate transport solutions are trusted by over 50 companies across UAE. We provide executive car services for client meetings, team transport for corporate events, and regular staff shuttle services – all with professional drivers and luxury vehicles.",
    features: [
      "Executive SUVs & sedans",
      "Professional uniformed drivers",
      "Monthly corporate invoicing",
      "Dedicated account manager",
      "Multi-vehicle fleet management",
      "Real-time GPS dashboards",
    ],
    keywords: [
      "corporate transport uae",
      "corporate car service dubai",
      "executive transport uae",
      "business transport dubai",
    ],
    price: "Custom packages",
    priceNote: "from AED 3,000/month for 10 employees",
    faqs: [
      {
        question: "Do you offer corporate accounts for monthly invoicing?",
        answer:
          "Yes. We provide corporate accounts with monthly invoicing, VAT-compliant receipts, and dedicated account management for companies with 10+ employees.",
      },
    ],
  },
  {
    slug: "private-car-lift",
    name: "Private Car Lift Service",
    shortName: "Private Car Lift",
    icon: "Shield",
    description:
      "Exclusive private car lift. No other passengers. Just you and a professional driver. Perfect for privacy-conscious professionals.",
    longDescription:
      "Our private car lift service gives you a dedicated vehicle exclusively for yourself. No shared rides, no strangers – just a professional driver and a comfortable vehicle. Ideal for executives, professionals who work during commutes, or anyone who values privacy.",
    features: [
      "Exclusive vehicle for you only",
      "Professional driver",
      "Wi-Fi available",
      "Work-friendly environment",
      "Flexible pickup/drop-off",
      "Phone charger available",
    ],
    keywords: [
      "private car lift uae",
      "private car service dubai",
      "exclusive car lift uae",
      "private driver uae",
    ],
    price: "From AED 1,200",
    priceNote: "per month",
    faqs: [
      {
        question: "What is the difference between private and shared car lift?",
        answer:
          "In a shared car lift, 3–4 passengers share a vehicle to split the cost. In a private car lift, the vehicle is exclusively for you, providing more comfort and privacy.",
      },
    ],
  },
  {
    slug: "school-transport",
    name: "School Transport Service",
    shortName: "School Transport",
    icon: "GraduationCap",
    description:
      "Safe and punctual school transport for children in UAE. Trained drivers, GPS tracking, parent notifications. From AED 300/month.",
    longDescription:
      "Our school transport service provides parents with peace of mind. All our school transport drivers have undergone child safety training. Vehicles are equipped with GPS, and parents receive real-time notifications when their child boards and exits the vehicle.",
    features: [
      "Child safety trained drivers",
      "Real-time parent notifications",
      "GPS tracking",
      "Female attendant available",
      "Door-to-school service",
      "Dubai & Sharjah schools covered",
    ],
    keywords: [
      "school transport uae",
      "school car lift sharjah",
      "school transport dubai",
      "kids car lift uae",
      "safe school transport uae",
    ],
    price: "From AED 300",
    priceNote: "per month per child",
    faqs: [
      {
        question: "Is the school car lift safe for unaccompanied children?",
        answer:
          "Yes. All school transport drivers are background-checked and child-safety trained. A female attendant can be arranged. Parents receive WhatsApp notifications at pickup and drop-off.",
      },
      {
        question: "Which schools do you cover in Sharjah and Dubai?",
        answer:
          "We cover most major schools in Sharjah and Dubai. Contact us with your school name and home area, and we'll confirm availability within 24 hours.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
