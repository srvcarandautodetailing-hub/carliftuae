import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "AUH Airport Car Lift – Abu Dhabi",
  description: "Pre-booked private car lift at Zayed International Airport (AUH), Abu Dhabi. Terminal A pickup, fixed fare. Call or WhatsApp +971 54 330 8261.",
  keywords: "auh airport car lift, zayed international airport pickup, abu dhabi airport car lift",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-abu-dhabi-auh" },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
  },
  openGraph: {
    title: "AUH Airport Car Lift – Abu Dhabi | +971 54 330 8261",
    description: "Pre-booked private car lift at Zayed International Airport (AUH), Abu Dhabi. Terminal A pickup, fixed fare. Call or WhatsApp +971 54 330 8261.",
  },
};

export default function AirportAUHPage() {
  const airport = getAirportBySlug("airport-car-lift-abu-dhabi-auh");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "AUH Airport Car Lift", description: "Pre-booked private car lift at Zayed International Airport (AUH), Abu Dhabi – Terminal A pickup and drop-off.", url: "/airport-car-lift-abu-dhabi-auh", price: "180" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "AUH Airport Car Lift", url: "/airport-car-lift-abu-dhabi-auh" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-boarding-sunset-dubai.webp", pageUrl: "/airport-car-lift-abu-dhabi-auh", caption: "AUH Airport car lift – pre-booked private pickup at Zayed International Airport Terminal A" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
