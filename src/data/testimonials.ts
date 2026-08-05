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
  {
    id: "1",
    name: "Ahmed Al Mansouri",
    role: "Financial Analyst",
    location: "Al Majaz, Sharjah",
    rating: 5,
    review:
      "I've been using Car Lift UAE for 14 months now. The punctuality is unmatched – my driver has been late only once the entire time. Saved me over AED 8,000 in fuel and parking fees compared to driving myself.",
    date: "2025-07-15",
    verified: true,
  },
  {
    id: "2",
    name: "Priya Nair",
    role: "Marketing Manager",
    location: "Al Nahda, Sharjah",
    rating: 5,
    review:
      "The ladies car lift service is a blessing. I feel completely safe and comfortable every morning. The driver is professional and the vehicle is always clean. Highly recommend to all working women in Sharjah!",
    date: "2025-07-10",
    verified: true,
  },
  {
    id: "3",
    name: "Mohammed Rashid",
    role: "IT Engineer",
    location: "Muweilah, Sharjah",
    rating: 5,
    review:
      "Best decision I made was switching from driving to car lift. The stress of Sharjah-Dubai traffic is gone. I use the commute time to catch up on emails or just relax. The monthly rate is very fair.",
    date: "2025-07-05",
    verified: true,
  },
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
    id: "5",
    name: "Fatima Al Zaabi",
    role: "Teacher",
    location: "Al Khan, Sharjah",
    rating: 5,
    review:
      "I was worried about finding a safe car lift as a lady traveling alone. Car Lift UAE has been amazing. The driver is respectful, the car is clean, and I always feel safe. My family is happy too!",
    date: "2025-06-20",
    verified: true,
  },
  {
    id: "6",
    name: "Ravi Kumar",
    role: "Accountant",
    location: "Al Taawun, Sharjah",
    rating: 5,
    review:
      "Joining the car lift was the best financial decision of the year. My monthly commute cost dropped from AED 1,200 (fuel + parking + Salik) to just AED 350. The math speaks for itself!",
    date: "2025-06-15",
    verified: true,
  },
  {
    id: "7",
    name: "Hana Al Qasimi",
    role: "Lawyer",
    location: "Business Bay, Dubai",
    rating: 5,
    review:
      "I live in Sharjah and work in Business Bay. The car lift is absolutely essential for my daily life. Always on time, clean vehicles, professional drivers. Cannot imagine my commute without it.",
    date: "2025-06-10",
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
