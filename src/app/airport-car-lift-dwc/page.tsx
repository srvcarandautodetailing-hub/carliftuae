import type { Metadata } from "next";
import AirportPageTemplate from "@/components/sections/airport-page-template";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema, speakableSchema } from "@/lib/schema";
import { getAirportBySlug } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "DWC Airport Car Lift – Dubai South",
  description: "Pre-booked private car lift at Al Maktoum Airport (DWC), Dubai South. 24/7 pickup & drop-off. Call or WhatsApp +971 54 330 8261.",
  keywords: "dwc airport car lift, al maktoum airport pickup, dubai south airport car lift",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift-dwc" },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai South, UAE",
  },
  openGraph: {
    title: "DWC Airport Car Lift – Dubai South | +971 54 330 8261",
    description: "Pre-booked private car lift at Al Maktoum Airport (DWC), Dubai South. 24/7 pickup & drop-off. Call or WhatsApp +971 54 330 8261.",
  },
};

export default function AirportDWCPage() {
  const airport = getAirportBySlug("airport-car-lift-dwc");
  if (!airport) return null;
  const PAGE_FAQS = airport.faqs;
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "DWC Airport Car Lift", description: "Pre-booked private car lift at Al Maktoum International Airport (DWC), Dubai South – 24/7 pickup and drop-off.", url: "/airport-car-lift-dwc" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
      { name: "DWC Airport Car Lift", url: "/airport-car-lift-dwc" },
    ]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-easy-booking-dubai.webp", pageUrl: "/airport-car-lift-dwc", caption: "DWC Airport car lift – pre-booked private pickup at Al Maktoum International Airport, Dubai South" }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];
  return (
    <>
      <SchemaScript schema={schemas} />
      <AirportPageTemplate airport={airport} />
    </>
  );
}
