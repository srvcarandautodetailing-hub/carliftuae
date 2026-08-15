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
  name: "MJ Car Lift Service",
  tagline: "Car Lift & Carpool Service – Dubai, Abu Dhabi, Sharjah & Ajman",
  phone: "+971 56 228 6455",
  whatsapp: "+971562286455",
  email: "info@carlift.ae",
  website: "https://www.carliftuae.com",
  address: {
    street: "UAE",
    city: "Abu Dhabi",
    state: "Abu Dhabi",
    country: "UAE",
  },
  coordinates: {
    lat: 24.4539,
    lng: 54.3773,
  },
  hours: {
    weekdays: "6:00 AM – 10:00 PM",
    friday: "7:00 AM – 10:00 PM",
    saturday: "6:00 AM – 10:00 PM",
  },
  rating: 4.9,
  reviewCount: 150,
  foundedYear: 2019,
  serviceAreas: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
} as const;
