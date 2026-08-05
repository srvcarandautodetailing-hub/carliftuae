import type { Metadata } from "next";
import HeroSection from "@/components/sections/hero-section";
import ServicesSection from "@/components/sections/services-section";
import WhyChooseSection from "@/components/sections/why-choose-section";
import RouteSection from "@/components/sections/route-section";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import FaqSection from "@/components/sections/faq-section";
import CtaBanner from "@/components/sections/cta-banner";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, speakableSchema } from "@/lib/schema";
import { FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Car Lift UAE – Carlift Sharjah to Business Bay from AED 300/Month | Carlift Service",
  description:
    "Carlift UAE – Sharjah to Business Bay from AED 300/month. Salik included, GPS-tracked, verified drivers. Ladies car lift available. 4.9★ rated by 247+ riders. Book via WhatsApp +971 56 228 6455 in 60 seconds.",
  keywords:
    "carlift uae, car lift uae, carlift sharjah to business bay, car lift sharjah to business bay, car lift sharjah, car lift service uae, daily car lift sharjah, monthly car lift dubai, car lift ajman, ladies car lift uae, carlift service",
  alternates: { canonical: "https://www.carlift.ae" },
  openGraph: {
    title: "Carlift UAE – Sharjah to Business Bay from AED 300/month | GPS-Tracked",
    description:
      "Join 500+ professionals using Car Lift UAE daily from Sharjah to Business Bay. Salik included, ladies option, GPS-tracked. Book via WhatsApp in 60 seconds.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "Car Lift UAE" }],
  },
};

export const revalidate = 86400;

const HOME_FAQS = FAQS.slice(0, 10);

export default function HomePage() {
  return (
    <>
      <SchemaScript
        schema={[
          localBusinessSchema(),
          faqSchema(HOME_FAQS),
          speakableSchema([".hero-heading", ".hero-description"]),
        ]}
      />
      <HeroSection />
      <ServicesSection />
      <WhyChooseSection />
      <RouteSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
