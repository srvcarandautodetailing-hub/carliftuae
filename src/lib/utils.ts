import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function formatPrice(price: number, currency = "AED"): string {
  return `${currency} ${price.toLocaleString()}`;
}

export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function formatWhatsAppHref(phone: string, message?: string): string {
  const cleaned = phone.replace(/[^\d]/g, "");
  const base = `https://wa.me/${cleaned}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const BUSINESS = {
  name: "Car Lift UAE",
  tagline: "Daily Car Lift Service – Sharjah to Dubai & Beyond",
  phone: "+971 50 123 4567",
  whatsapp: "+971501234567",
  email: "info@carlift.ae",
  website: "https://www.carlift.ae",
  address: {
    street: "Al Majaz Area",
    city: "Sharjah",
    state: "Sharjah",
    country: "UAE",
  },
  coordinates: {
    lat: 25.3573,
    lng: 55.3850,
  },
  hours: {
    weekdays: "6:00 AM – 10:00 PM",
    friday: "7:00 AM – 10:00 PM",
    saturday: "6:00 AM – 10:00 PM",
  },
  rating: 4.9,
  reviewCount: 247,
  foundedYear: 2019,
  serviceAreas: [
    "Sharjah", "Dubai", "Business Bay", "Ajman",
    "Al Nahda", "Al Qusais", "Al Khan", "Al Majaz",
    "Al Taawun", "Muweilah", "Al Qouz", "Dubai Marina",
    "JVC", "JLT", "Deira", "Bur Dubai", "Silicon Oasis",
  ],
} as const;
