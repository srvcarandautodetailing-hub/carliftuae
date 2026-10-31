import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "RKT Airport Car Lift – RAK",
  description: "Pre-booked private car lift at Ras Al Khaimah Airport (RKT). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
  keywords: "rkt airport car lift, ras al khaimah airport pickup, ras al khaimah airport transfer",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-ras-al-khaimah-rkt" },
  other: {
    "geo.region": "AE-RK",
    "geo.placename": "Ras Al Khaimah, UAE",
  },
  openGraph: {
    title: "RKT Airport Car Lift – Ras Al Khaimah | +971 54 330 8261",
    description: "Pre-booked private car lift at Ras Al Khaimah Airport (RKT). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
  },
};

export default function AirportRKTPage() {
  const airport = getAirportBySlug("airport-car-lift-ras-al-khaimah-rkt");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Ras Al Khaimah Airport Car Lift", description: "Pre-booked private car lift at Ras Al Khaimah International Airport (RKT) – airport pickup and drop-off.", url: "/airport-car-lift-ras-al-khaimah-rkt" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "Ras Al Khaimah Airport Car Lift", url: "/airport-car-lift-ras-al-khaimah-rkt" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp", pageUrl: "/airport-car-lift-ras-al-khaimah-rkt", caption: "RKT Airport car lift – pre-booked private pickup and drop-off at Ras Al Khaimah International Airport" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
