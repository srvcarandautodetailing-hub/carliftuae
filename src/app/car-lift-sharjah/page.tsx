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
  title: "Car Lift Sharjah – AED 130 Sharing / AED 200 Private | All Routes | +971 54 330 8261",
  description:
    "Car lift service in Sharjah covering all routes. Sharjah to Dubai AED 130 sharing / AED 200 private. Sharjah to Abu Dhabi AED 130 sharing / AED 200 private. Al Nahda, Muweilah pickup. 24/7.",
  keywords:
    "car lift sharjah, car lift in sharjah, sharjah car lift, monthly car lift sharjah, car lift services in sharjah, car lift sharjah to dubai",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-sharjah",
  },
  openGraph: {
    title: "Car Lift Sharjah – AED 130 Sharing / AED 200 Private | All Routes | +971 54 330 8261",
    description:
      "Car lift service from Sharjah to Dubai, Abu Dhabi, Ajman, and Jebel Ali. AED 130 sharing / AED 200 private. All Sharjah areas covered.",
  },
};

const PAGE_FAQS = [
  {
    question: "What car lift services are available from Sharjah?",
    answer:
      "Quick Car Lift Service UAE offers daily shared and private rides from all Sharjah areas to Dubai (Business Bay, DIFC, JLT, Marina), Abu Dhabi, Ajman, and Jebel Ali. Monthly packages and airport transfers also available.",
  },
  {
    question: "How much is a car lift from Sharjah?",
    answer:
      "Sharjah to Dubai: AED 130 sharing / AED 200 private per trip. Sharjah to Abu Dhabi: AED 130 sharing / AED 200 private. Sharjah to Jebel Ali: AED 130 sharing / AED 200 private. Monthly packages available at discounted rates.",
  },
  {
    question: "Which areas in Sharjah does the car lift pick up from?",
    answer:
      "We cover Al Nahda, Al Taawun, Al Khan, Al Majaz, Muweilah, University City, Rolla, Al Qasimia, Industrial Area, Al Zahia, and all other Sharjah areas. WhatsApp your location for confirmation.",
  },
  {
    question: "What time does the car lift from Sharjah depart?",
    answer:
      "Morning departures: 6:00 AM, 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Evening return timings: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM. Choose your preferred slot when booking.",
  },
  {
    question: "Is there a ladies-only car lift in Sharjah?",
    answer:
      "Yes. A ladies-only car lift is available from Sharjah to Dubai and within Sharjah. Female driver or ladies-only vehicle on request. WhatsApp +971 54 330 8261 to arrange.",
  },
  {
    question: "Can I get a monthly car lift from Sharjah?",
    answer:
      "Yes. Monthly packages from Sharjah to all destinations are available at fixed rates. You get a guaranteed daily seat with no need to book each day. Contact us for your personalised monthly quote.",
  },
];

const PICKUP_AREAS = [
  "Al Nahda",
  "Al Taawun",
  "Al Khan",
  "Al Majaz",
  "Muweilah",
  "University City",
  "Rolla",
  "Al Qasimia",
  "Industrial Area 1–3",
  "Al Zahia",
  "Al Gharayen",
  "Muwaileh Commercial",
];

const DESTINATIONS = [
  { dest: "Dubai (all areas)", pricing: "AED 130 sharing / AED 200 private" },
  { dest: "Abu Dhabi", pricing: "AED 130 sharing / AED 200 private" },
  { dest: "Jebel Ali / JAFZA", pricing: "AED 130 sharing / AED 200 private" },
  { dest: "Ajman", pricing: "Contact for price" },
];

const TIMINGS = [
  { label: "From Sharjah (Morning)", times: ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM"], color: "bg-violet-700" },
  { label: "Evening Return to Sharjah", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

export default function CarLiftSharjahPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a car lift from Sharjah."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Sharjah",
      description:
        "Daily car lift service from Sharjah to Dubai, Abu Dhabi, Ajman, and Jebel Ali. AED 130 sharing / AED 200 private per trip. All Sharjah areas covered. 24/7 service.",
      url: "/car-lift-sharjah",
      price: "130",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Sharjah", url: "/car-lift-sharjah" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/locations/sharjah/sharjah-car-lift-morning-pickup.webp",
      pageUrl: "/car-lift-sharjah",
      caption: "Car lift Sharjah – daily commuter pickups from Al Nahda, Muweilah, University City to Dubai and beyond",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #2e1065 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Car Lift Sharjah" }]}
            className="mb-6 [&_*]:text-violet-300 [&_a]:text-violet-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-4 py-1.5 text-sm text-violet-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Sharjah Car Lift
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Sharjah – Daily Car Lift Service from Sharjah UAE
              </h1>
              <p className="text-violet-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared and private car lift from all Sharjah areas to Dubai, Abu Dhabi, Ajman, and Jebel Ali. Multiple morning timings, guaranteed evening returns.
              </p>
              <p className="text-violet-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                AED 130 sharing / AED 200 private per trip to all major destinations. Fixed monthly packages with reserved daily seat also available.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: MapPin, label: "All Sharjah", sub: "Areas covered" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-violet-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-violet-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah via WhatsApp">
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
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Destinations from Sharjah">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-violet-400" aria-hidden="true" />
                Destinations from Sharjah
              </p>
              <ul className="space-y-3" role="list">
                {DESTINATIONS.map((item) => (
                  <li key={item.dest} className="flex flex-col gap-1">
                    <span className="text-white font-semibold text-sm">{item.dest}</span>
                    <span className="text-violet-300 text-xs">{item.pricing}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Sharjah Car Lift Timings
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TIMINGS.map((t) => (
              <Card key={t.label} className="border-slate-200">
                <CardContent className="p-6 pt-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${t.color} flex items-center justify-center shrink-0`}>
                      <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{t.label}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {t.times.map((time) => (
                      <div key={time} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                        <p className="font-extrabold text-slate-900 text-xl">{time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pickup Areas ─────────────────────────────────────────────────── */}
      <section aria-labelledby="pickup-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 id="pickup-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              All Sharjah Pickup Areas
            </h2>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 list-none" role="list">
            {PICKUP_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                <CheckCircle className="h-4 w-4 text-violet-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-800 font-medium text-sm">{area}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs mt-4 italic text-center">Don&apos;t see your area? WhatsApp us — we cover all of Sharjah.</p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Sharjah – Common Questions
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
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Car Lift Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "AED 130 sharing / AED 200 private" },
              { href: "/carlift-sharjah-to-jlt", label: "Carlift Sharjah to JLT", desc: "JLT Cluster drop-off" },
              { href: "/car-lift-from-sharjah-to-business-bay", label: "Car Lift Sharjah to Business Bay", desc: "All Business Bay towers" },
              { href: "/ladies-car-lift-sharjah-to-dubai", label: "Ladies Car Lift Sharjah", desc: "Verified female driver option" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-violet-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-violet-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-violet-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book your Sharjah car lift" className="py-14 bg-violet-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Sharjah Car Lift Today
          </h2>
          <p className="text-violet-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Morning seats fill fast — WhatsApp now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-violet-700 hover:bg-violet-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah via WhatsApp">
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
