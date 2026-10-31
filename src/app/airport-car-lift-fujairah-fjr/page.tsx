import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "FJR Airport Car Lift – Fujairah",
  description: "Pre-booked private car lift at Fujairah Airport (FJR). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
  keywords: "fjr airport car lift, fujairah airport pickup, fujairah airport transfer",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-fujairah-fjr" },
  other: {
    "geo.region": "AE-FU",
    "geo.placename": "Fujairah, UAE",
  },
  openGraph: {
    title: "FJR Airport Car Lift – Fujairah | +971 54 330 8261",
    description: "Pre-booked private car lift at Fujairah Airport (FJR). Airport pickup & drop-off. Share flight details on WhatsApp or call +971 54 330 8261.",
  },
};

export default function AirportFJRPage() {
  const airport = getAirportBySlug("airport-car-lift-fujairah-fjr");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Fujairah Airport Car Lift", description: "Pre-booked private car lift at Fujairah International Airport (FJR) – airport pickup and drop-off.", url: "/airport-car-lift-fujairah-fjr" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "Fujairah Airport Car Lift", url: "/airport-car-lift-fujairah-fjr" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp", pageUrl: "/airport-car-lift-fujairah-fjr", caption: "FJR Airport car lift – pre-booked private pickup and drop-off at Fujairah International Airport" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
