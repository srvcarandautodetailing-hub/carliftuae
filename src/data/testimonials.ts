export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  // NOTE (2026-10-31): 6 testimonials removed per owner directive — full Sharjah scrub.
  // Removed entries referenced Sharjah locations/service (Al Majaz, Al Nahda, Muweilah,
  // Al Khan, Al Taawun, and one "I live in Sharjah" review). See docs/claims-needing-verification.md.
  // The 2 remaining testimonials below are UNVERIFIED — owner decision pending (confirm or remove).
  {
    id: "4",
    name: "Sarah Thompson",
    role: "HR Manager",
    location: "Silicon Oasis, Dubai",
    rating: 4,
    review:
      "We arranged a corporate car lift for our team of 8. The service has been reliable and professional. Our team productivity improved because they arrive fresh and unstressed. Good value for corporate accounts.",
    date: "2025-06-28",
    verified: true,
  },
  {
    id: "8",
    name: "Omar Siddiqui",
    role: "Sales Director",
    location: "Ajman",
    rating: 4,
    review:
      "The Ajman–Business Bay route is long but the Car Lift UAE team makes it comfortable. Modern vehicle, good company, and I get to rest before a full day of work. Worth every dirham.",
    date: "2025-06-05",
    verified: true,
  },
];
