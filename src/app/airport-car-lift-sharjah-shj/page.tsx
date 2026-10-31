import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Sharjah Airport Car Lift (SHJ)",
  description: "Airport car lift at Sharjah Airport (SHJ) – pickup & drop-off ONLY. No city routes in Sharjah. Call or WhatsApp +971 54 330 8261.",
  keywords: "sharjah airport car lift, shj airport pickup, sharjah airport transfer",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-sharjah-shj" },
  other: {
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah, UAE",
  },
  openGraph: {
    title: "Sharjah Airport Car Lift (SHJ) | +971 54 330 8261",
    description: "Airport car lift at Sharjah Airport (SHJ) – pickup & drop-off ONLY. No city routes in Sharjah. Call or WhatsApp +971 54 330 8261.",
  },
};

export default function AirportSHJPage() {
  const airport = getAirportBySlug("airport-car-lift-sharjah-shj");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Sharjah Airport Car Lift", description: "Airport car lift at Sharjah International Airport (SHJ) – pickup and drop-off only. No city routes in Sharjah.", url: "/airport-car-lift-sharjah-shj" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "Sharjah Airport Car Lift", url: "/airport-car-lift-sharjah-shj" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-daily-commuters-interior.webp", pageUrl: "/airport-car-lift-sharjah-shj", caption: "Sharjah Airport car lift – pickup and drop-off at Sharjah International Airport (SHJ) only" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
