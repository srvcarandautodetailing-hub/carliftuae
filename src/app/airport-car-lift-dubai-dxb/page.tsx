import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "DXB Airport Car Lift – Dubai",
  description: "Pre-booked private car lift at Dubai International Airport (DXB). Terminals 1, 2 & 3 pickup. Fixed fare, no queues. Call or WhatsApp +971 54 330 8261.",
  keywords: "dxb airport car lift, dubai airport pickup, car lift dubai airport, dxb terminal 1 2 3 pickup",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-dubai-dxb" },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, UAE",
  },
  openGraph: {
    title: "DXB Airport Car Lift – Dubai Pickup | +971 54 330 8261",
    description: "Pre-booked private car lift at Dubai International Airport (DXB). Terminals 1, 2 & 3 pickup. Fixed fare, no queues. Call or WhatsApp +971 54 330 8261.",
  },
};

export default function AirportDXBPage() {
  const airport = getAirportBySlug("airport-car-lift-dubai-dxb");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "DXB Airport Car Lift", description: "Pre-booked private car lift at Dubai International Airport (DXB) – Terminals 1, 2 & 3 pickup and drop-off.", url: "/airport-car-lift-dubai-dxb", price: "180" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "DXB Airport Car Lift", url: "/airport-car-lift-dubai-dxb" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp", pageUrl: "/airport-car-lift-dubai-dxb", caption: "DXB Airport car lift – pre-booked private pickup at Dubai International Airport Terminals 1, 2 and 3" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
