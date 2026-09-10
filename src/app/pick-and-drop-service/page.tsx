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
  title: "Pick and Drop Service UAE – Door-to-Door | AED 100+ | +971 54 330 8261",
  description:
    "Daily pick and drop service in UAE. Door-to-door commuter transport across Dubai, Abu Dhabi, Sharjah, and Ajman. From AED 100 per trip. Book via WhatsApp +971 54 330 8261.",
  keywords:
    "pick and drop service, pick and drop service in dubai, pick and drop, pickup and drop, pick up service, pick up and drop service dubai, daily pick and drop service in dubai, pick and drop sharjah",
  alternates: {
    canonical: "https://www.carliftuae.com/pick-and-drop-service",
  },
  openGraph: {
    title: "Pick and Drop Service UAE – Door-to-Door | AED 100+ | +971 54 330 8261",
    description:
      "Daily pick and drop service across UAE. Door-to-door from AED 100 per trip. Dubai, Abu Dhabi, Sharjah, Ajman. WhatsApp +971 54 330 8261.",
  },
};

const PAGE_FAQS = [
  {
    question: "What is a pick and drop service in UAE?",
    answer:
      "A pick and drop service provides door-to-door transport — the driver picks you up from your home or office and drops you at your destination. Quick Car Lift Service UAE offers daily and monthly pick and drop for inter-emirate commuters across Dubai, Abu Dhabi, Sharjah, and Ajman.",
  },
  {
    question: "How much does pick and drop service cost in UAE?",
    answer:
      "Pick and drop pricing starts from AED 100 sharing per trip for Abu Dhabi to Dubai routes. Sharjah to Dubai and Ajman to Dubai is AED 130 sharing per trip. Monthly packages offer a fixed daily rate with guaranteed seat — contact for monthly pricing.",
  },
  {
    question: "Is pick and drop service available in Dubai?",
    answer:
      "Yes. We cover all major Dubai areas including Business Bay, DIFC, Downtown, JLT, Al Barsha, Al Quoz, Dubai Marina, Deira, and Karama. For pickup within Dubai, WhatsApp us your location.",
  },
  {
    question: "How do I book a pick and drop service near me?",
    answer:
      "WhatsApp +971 54 330 8261 with your pickup address, destination, and preferred timing. We confirm your booking within 60 minutes. No app or registration needed.",
  },
  {
    question: "Is pick and drop service available 24/7?",
    answer:
      "Yes, Quick Car Lift Service UAE operates 24/7. Pre-booking is strongly recommended to guarantee your seat, especially for early morning (6:00–8:00 AM) departures and peak evening (5:00–7:00 PM) slots.",
  },
  {
    question: "Do you offer monthly pick and drop packages in UAE?",
    answer:
      "Yes. Monthly pick and drop packages provide a fixed daily seat with no need to book each day. Monthly packages are available for Sharjah, Ajman, and Abu Dhabi commuters. WhatsApp for a personalised monthly quote.",
  },
];

const SERVICES_LIST = [
  { title: "Daily Pick & Drop", desc: "Per-trip pricing, book anytime via WhatsApp" },
  { title: "Monthly Packages", desc: "Fixed daily seat, reserved monthly timing slot" },
  { title: "Office Pick & Drop", desc: "Daily office commute with guaranteed timing" },
  { title: "School Pick & Drop", desc: "Safe, verified drivers for school runs" },
];

const LOCATIONS = [
  { city: "Dubai", areas: "Business Bay, DIFC, JLT, Al Barsha, Deira" },
  { city: "Abu Dhabi", areas: "Mussafah, Khalifa City, MBZ City, Al Raha" },
  { city: "Sharjah", areas: "Al Nahda, Muweilah, University City, Al Taawun" },
  { city: "Ajman", areas: "Al Nuaimiya, Al Rashidiya, Al Hamidiya" },
];

export default function PickAndDropServicePage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a pick and drop service in UAE."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Pick and Drop Service UAE",
      description:
        "Daily pick and drop service across UAE. Door-to-door transport from AED 100 per trip. Dubai, Abu Dhabi, Sharjah, and Ajman covered. Monthly packages available.",
      url: "/pick-and-drop-service",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Pick and Drop Service", url: "/pick-and-drop-service" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-boarding-sunset-dubai.webp",
      pageUrl: "/pick-and-drop-service",
      caption: "Pick and drop service UAE – door-to-door commuter transport across Dubai, Abu Dhabi, Sharjah and Ajman",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #7c2d12 0%, #ea580c 50%, #431407 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Pick and Drop Service" }]}
            className="mb-6 [&_*]:text-orange-300 [&_a]:text-orange-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 rounded-full px-4 py-1.5 text-sm text-orange-300 font-semibold mb-5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Pick &amp; Drop UAE
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Pick and Drop Service UAE – Daily Commuter Rides
              </h1>
              <p className="text-orange-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Door-to-door pick and drop service for daily commuters across UAE. From your home to your office — across Dubai, Abu Dhabi, Sharjah, and Ajman.
              </p>
              <p className="text-orange-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                From AED 100 per trip. Daily and monthly packages. GPS-tracked vehicles, verified drivers, 24/7 availability.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key pick and drop stats">
                {[
                  { icon: MapPin, label: "Door-to-Door", sub: "Pickup & drop" },
                  { icon: DollarSign, label: "AED 100+", sub: "Per trip" },
                  { icon: Car, label: "All Emirates", sub: "UAE coverage" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-orange-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-orange-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop service via WhatsApp">
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
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Services offered">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-orange-400" aria-hidden="true" />
                Services Available
              </p>
              <ul className="space-y-4" role="list">
                {SERVICES_LIST.map((item) => (
                  <li key={item.title} className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">{item.title}</span>
                    <span className="text-orange-300 text-xs">{item.desc}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Locations ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="locations-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 id="locations-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pick and Drop Locations Across UAE
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOCATIONS.map((loc) => (
              <Card key={loc.city} className="border-slate-200">
                <CardContent className="p-6 pt-6">
                  <h3 className="font-bold text-slate-900 text-base mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-orange-500" aria-hidden="true" />
                    {loc.city}
                  </h3>
                  <p className="text-slate-600 text-sm">{loc.areas}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pick and Drop Service UAE – Common Questions
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
      <section aria-label="Related services" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/pick-and-drop-service-dubai", label: "Pick & Drop Dubai", desc: "Daily door-to-door in Dubai" },
              { href: "/monthly-pick-and-drop-service-sharjah", label: "Monthly Pick & Drop Sharjah", desc: "Fixed monthly rate Sharjah" },
              { href: "/monthly-pick-and-drop-service-abu-dhabi", label: "Monthly Pick & Drop Abu Dhabi", desc: "Abu Dhabi monthly package" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All Dubai routes hub" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-orange-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-orange-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-orange-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book pick and drop service" className="py-14 bg-orange-600">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Pick and Drop Service Today
          </h2>
          <p className="text-orange-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Door-to-door from AED 100. WhatsApp now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop service via WhatsApp">
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
