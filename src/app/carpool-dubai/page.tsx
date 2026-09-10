import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Clock,
  DollarSign,
  MapPin,
  CheckCircle,
  MessageCircle,
  Phone,
  ArrowRight,
  ChevronDown,
  Users,
  Star,
  Shield,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
  primaryImageOfPageSchema,
} from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Carpool Dubai – Shared Rides from AED 100 | Dubai to Abu Dhabi Carpool | +971 54 330 8261",
  description:
    "Carpool service in Dubai. Shared rides from AED 100 per trip. Dubai ↔ Abu Dhabi, Sharjah ↔ Dubai, Ajman ↔ Dubai. GPS-tracked, air-conditioned vehicles. WhatsApp +971 54 330 8261.",
  keywords:
    "carpool dubai, car pool dubai, carpooling dubai, carpool dubai to abu dhabi, carpool uae, car pooling, carpool near me",
  alternates: {
    canonical: "https://www.carliftuae.com/carpool-dubai",
  },
  openGraph: {
    title: "Carpool Dubai – Shared Rides from AED 100 | Dubai to Abu Dhabi Carpool | +971 54 330 8261",
    description:
      "Organised carpool service in Dubai from AED 100 sharing per trip. All inter-emirate routes. GPS-tracked, verified drivers.",
  },
};

const PAGE_FAQS = [
  {
    question: "What is carpool in Dubai?",
    answer:
      "Carpooling (also called car lift or sharing) in Dubai means sharing a vehicle with other passengers travelling in the same direction, splitting the cost. Quick Car Lift Service UAE provides organised, pre-booked carpool rides on fixed inter-emirate routes with verified drivers.",
  },
  {
    question: "How much does carpooling cost in Dubai?",
    answer:
      "Carpool pricing in Dubai starts from AED 100 per trip sharing (Abu Dhabi to Dubai). Sharjah to Dubai carpool is AED 130 sharing per trip. Ajman to Dubai sharing is also AED 130 per trip. Monthly packages are available at reduced per-trip rates.",
  },
  {
    question: "Is carpooling legal in UAE?",
    answer:
      "Yes. Licensed carpool operators like Quick Car Lift Service UAE can legally provide shared transport services in the UAE. Our drivers are verified, our vehicles are registered, and our service is compliant with UAE transport regulations.",
  },
  {
    question: "How do I book a carpool from Dubai to Abu Dhabi?",
    answer:
      "WhatsApp +971 54 330 8261 with your pickup location (Dubai), destination in Abu Dhabi, and preferred timing. We confirm your seat within the hour. No app download needed.",
  },
  {
    question: "What routes does the Dubai carpool service cover?",
    answer:
      "We cover: Dubai ↔ Abu Dhabi (AED 100 sharing / AED 170 private), Sharjah ↔ Dubai (AED 130 sharing / AED 200 private), and Ajman ↔ Dubai (AED 130 sharing / AED 200 private). All routes serve both directions.",
  },
  {
    question: "Are carpool vehicles air-conditioned in UAE?",
    answer:
      "Yes. All Quick Car Lift Service UAE vehicles are luxury, air-conditioned cars and vans. No public-bus-style transport — you travel in comfort with a small group of fellow professionals.",
  },
];

const ROUTES = [
  { route: "Dubai ↔ Abu Dhabi", sharing: "AED 100", private: "AED 170" },
  { route: "Sharjah ↔ Dubai", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman ↔ Dubai", sharing: "AED 130", private: "AED 200" },
];

const BENEFITS = [
  "Save up to 70% vs solo driving",
  "GPS-tracked vehicles",
  "Verified, licensed drivers",
  "Air-conditioned luxury vehicles",
  "Fixed timings, no waiting",
  "Up to 4 passengers per ride",
  "WhatsApp booking in 60 seconds",
  "Monthly packages available",
];

export default function CarpoolDubaiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a carpool ride in Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Carpool Dubai",
      description:
        "Organised carpool service in Dubai. Shared rides from AED 100 per trip. All inter-emirate routes — Dubai to Abu Dhabi, Sharjah to Dubai, Ajman to Dubai. GPS-tracked, verified drivers.",
      url: "/carpool-dubai",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Carpool Dubai", url: "/carpool-dubai" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-daily-commuters-interior.webp",
      pageUrl: "/carpool-dubai",
      caption: "Carpool Dubai – shared rides for daily commuters across UAE inter-emirate routes",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #042f2e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Carpool Dubai" }]}
            className="mb-6 [&_*]:text-teal-300 [&_a]:text-teal-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 text-sm text-teal-300 font-semibold mb-5">
                <Users className="h-4 w-4" aria-hidden="true" />
                Carpool Dubai
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Carpool Dubai – Shared Car Lift &amp; Carpooling UAE
              </h1>
              <p className="text-teal-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Organised carpool rides across all UAE inter-emirate routes. Share a clean, air-conditioned vehicle with fellow professionals and save up to 70% compared to driving solo.
              </p>
              <p className="text-teal-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                From AED 100 sharing per trip. All routes covered: Dubai ↔ Abu Dhabi, Sharjah ↔ Dubai, Ajman ↔ Dubai. Verified drivers, GPS tracking.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key carpool stats">
                {[
                  { icon: DollarSign, label: "AED 100 from", sub: "Sharing price" },
                  { icon: Users, label: "4 Passengers", sub: "Max per ride" },
                  { icon: Shield, label: "GPS Tracked", sub: "All vehicles" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-teal-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-teal-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book carpool Dubai via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {BUSINESS.phone}
                  </a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Carpool benefits">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-teal-400" aria-hidden="true" />
                Carpool Benefits
              </p>
              <ul className="space-y-3" role="list">
                {BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-teal-400 shrink-0" aria-hidden="true" />
                    <span className="text-teal-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Route Pricing ─────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Carpool Dubai Route Prices
            </h2>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm" aria-label="Carpool Dubai route pricing">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Route</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Private</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((row, i) => (
                  <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">{row.route}</td>
                    <td className="px-4 py-3 text-center font-extrabold text-teal-600">{row.sharing}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-slate-700">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Book Your Carpool Seat Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Carpool Dubai – Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <dd className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                  {faq.answer}
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Related pages ────────────────────────────────────────────────── */}
      <section aria-label="Related car lift pages" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All Dubai routes hub page" },
              { href: "/car-lift-dubai-to-abu-dhabi", label: "Car Lift Dubai to Abu Dhabi", desc: "AED 100 sharing / AED 170 private" },
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "AED 130 sharing / AED 200 private" },
              { href: "/private-car-lift-dubai", label: "Private Car Lift Dubai", desc: "Exclusive vehicle, no strangers" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-teal-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-teal-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-teal-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book your carpool Dubai" className="py-14 bg-teal-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Carpool Seat in Dubai Today
          </h2>
          <p className="text-teal-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Join the smarter commute — WhatsApp now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-teal-700 hover:bg-teal-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book carpool Dubai via WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Now
              </a>
            </Button>
            <Button asChild size="xl" className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20">
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
