import type { Metadata } from "next";
import Link from "next/link";
import {
  Plane,
  MessageCircle,
  Phone,
  ChevronDown,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import FleetGallery from "@/components/sections/fleet-gallery";
import { FLEET_PHOTOS } from "@/data/fleet";
import { imageObjectSchema } from "@/lib/schema";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
  primaryImageOfPageSchema,
  speakableSchema,
} from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";
import { AIRPORTS } from "@/data/airports";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Airport Car Lift UAE – DXB, DWC, AUH",
  description:
    "Pre-booked private airport car lift at DXB, DWC, AUH and Sharjah Airport (SHJ). Fixed fare, 24/7 pickup & drop-off. Call or WhatsApp +971 54 330 8261.",
  keywords:
    "airport car lift uae, dxb airport pickup, dubai airport car lift, auh airport car lift, sharjah airport car lift",
  alternates: { canonical: "https://www.carliftuae.com/airport-car-lift" },
  other: {
    "geo.region": "AE",
    "geo.placename": "United Arab Emirates",
  },
  openGraph: {
    title: "Airport Car Lift UAE – DXB, DWC, AUH | +971 54 330 8261",
    description:
      "Pre-booked private airport car lift at all UAE airports. Fixed fare, 24/7. Call or WhatsApp +971 54 330 8261.",
  },
};

const PAGE_FAQS = [
  {
    question: "Which UAE airports do you serve?",
    answer:
      "We offer pre-booked private car lift pickup and drop-off at Dubai International (DXB), Al Maktoum (DWC), Zayed International Abu Dhabi (AUH), Sharjah International (SHJ), Ras Al Khaimah (RKT) and Fujairah (FJR) airports. Note: SHJ is airport service only — we do not operate city routes in Sharjah.",
  },
  {
    question: "How do I book an airport car lift?",
    answer:
      "WhatsApp +971 54 330 8261 with your flight number, arrival time and destination. We confirm your driver, pickup terminal and fixed fare before you land. You can also call the same number.",
  },
  {
    question: "Is airport car lift available 24/7?",
    answer:
      "Yes. Airport pickups and drop-offs are available 24/7. Pre-booking is recommended, especially for late-night and early-morning flights, so a driver is assigned in advance.",
  },
  {
    question: "What are the airport car lift fares?",
    answer:
      "Fares are fixed per trip with no surge pricing — for example, DXB to Abu Dhabi is AED 180 private. WhatsApp us your exact pickup and drop-off for a fixed quote.",
  },
];

export default function AirportCarLiftHubPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I need an airport car lift. My flight details are: "
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);
const AIRPORT_FLEET = FLEET_PHOTOS.filter((f) =>
  f.src.includes("lexus-es-side") ||
  f.src.includes("lexus-es-rear")
);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Airport Car Lift UAE",
      description:
        "Pre-booked private airport car lift at DXB, DWC, AUH and Sharjah Airport (SHJ). Fixed fare, 24/7 pickup and drop-off.",
      url: "/airport-car-lift",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Airport Car Lift", url: "/airport-car-lift" },
    ]),
    ...imageObjectSchema(AIRPORT_FLEET),
    primaryImageOfPageSchema({
      imageUrl: "/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp",
      pageUrl: "/airport-car-lift",
      caption: "Airport car lift UAE – pre-booked private pickup and drop-off at DXB, DWC, AUH and Sharjah Airport",
    }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      {/* ── Hero ── */}
      <section
        aria-labelledby="hub-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Airport Car Lift" }]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
            <Plane className="h-4 w-4" aria-hidden="true" />
            DXB · DWC · AUH · SHJ · RKT · FJR
          </div>
          <h1
            id="hub-hero-heading"
            className="speakable-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Airport Car Lift UAE – Pre-Booked Pickup &amp; Drop-off
          </h1>
          <p className="speakable-desc text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Daily private car lift at all major UAE airports. Share your flight number
            on WhatsApp, and your driver meets you at arrivals — fixed fare, no surge
            pricing, no taxi queues.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="whatsapp" size="lg" className="min-h-[52px]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book airport car lift via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Airport Ride
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="min-h-[52px] border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Airport cards ── */}
      <section aria-labelledby="airports-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Choose Your Airport
            </p>
            <h2
              id="airports-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              UAE Airports We Serve
            </h2>
          </div>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none"
            role="list"
          >
            {AIRPORTS.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${a.slug}`}
                  className="group flex flex-col gap-2 p-6 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-lg transition-all h-full min-h-[120px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Plane className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 block text-base">
                        {a.code} – {a.name}
                      </span>
                      <span className="text-slate-500 text-xs">{a.terminals}</span>
                    </div>
                  </div>
                  <span className="text-slate-600 text-sm flex-1 leading-relaxed">
                    {a.driveNote}
                  </span>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 mt-2">
                    View {a.code} airport page{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Why book with us ── */}
      <section aria-labelledby="why-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Book With Us
            </p>
            <h2
              id="why-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Airport Rides, Made Simple
            </h2>
          </div>
          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto"
            role="list"
          >
            {[
              {
                icon: CheckCircle,
                title: "Fixed fare, confirmed",
                desc: "Your fare is confirmed on WhatsApp before you land — no surge pricing.",
              },
              {
                icon: Clock,
                title: "24/7 availability",
                desc: "Late-night and early-morning flights covered with pre-booking.",
              },
              {
                icon: Shield,
                title: "Flight-coordinated pickup",
                desc: "Share your flight details on WhatsApp or call, and we coordinate pickup around your arrival.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 text-sm text-slate-500">
            Need a city-to-city ride instead? See our{" "}
            <Link
              href="/services/airport-transfer"
              className="text-blue-600 font-semibold hover:underline"
            >
              airport transfer service
            </Link>{" "}
            and{" "}
            <Link
              href="/routes"
              className="text-blue-600 font-semibold hover:underline"
            >
              daily car lift routes
            </Link>
            .
          </p>
        </div>
      </section>

      <FleetGallery
        photos={AIRPORT_FLEET}
        heading="Premium Airport Rides – Our Fleet"
        subheading="Comfortable, air-conditioned cars for stress-free airport pickups and drop-offs."
        id="fleet-airport"
      />
      {/* ── FAQ ── */}
      <section aria-labelledby="hub-faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="hub-faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Airport Car Lift – Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden min-h-[56px]">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown
                    className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <dd className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                  {faq.answer}
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section aria-label="Book airport car lift" className="py-14 bg-blue-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Plane className="h-8 w-8 text-blue-200 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Airport Pickup
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            DXB · DWC · AUH · SHJ · RKT · FJR — fixed fare confirmed before you land.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold min-h-[56px]"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book airport car lift via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Now
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="min-h-[56px] border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
