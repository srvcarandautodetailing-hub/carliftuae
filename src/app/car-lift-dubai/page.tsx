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
  title: "Car Lift Dubai – AED 100 Sharing / AED 170 Private | Sharjah, Ajman, Abu Dhabi | +971 54 330 8261",
  description:
    "Car lift service in Dubai covering all inter-emirate routes. Dubai ↔ Abu Dhabi AED 100 sharing / AED 170 private. Sharjah ↔ Dubai AED 130 sharing / AED 200 private. 24/7. WhatsApp +971 54 330 8261.",
  keywords:
    "car lift dubai, car lift services in dubai, car lift service, car lift in uae, carlift dubai, car lift dubai to abu dhabi",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-dubai",
  },
  openGraph: {
    title: "Car Lift Dubai – AED 100 Sharing / AED 170 Private | Sharjah, Ajman, Abu Dhabi | +971 54 330 8261",
    description:
      "Car lift service in Dubai covering all inter-emirate routes. Dubai ↔ Abu Dhabi AED 100 sharing / AED 170 private. Sharjah ↔ Dubai AED 130 sharing / AED 200 private. 24/7.",
  },
};

const PAGE_FAQS = [
  {
    question: "How much is a car lift in Dubai?",
    answer:
      "Car lift prices in Dubai start from AED 100 sharing / AED 170 private per trip from Abu Dhabi. From Sharjah and Ajman it's AED 130 sharing / AED 200 private. Monthly packages also available — WhatsApp us for details.",
  },
  {
    question: "Is there a car lift service from Sharjah to Dubai?",
    answer:
      "Yes. Quick Car Lift Service UAE runs daily shared and private rides from all major Sharjah areas (Al Nahda, Muweilah, University City) to Business Bay, DIFC, JLT, and other Dubai locations. AED 130 sharing / AED 200 private per trip.",
  },
  {
    question: "How do I book a car lift in Dubai?",
    answer:
      "WhatsApp +971 54 330 8261 with your pickup location, destination, and preferred timing. We confirm availability within the hour.",
  },
  {
    question: "Does the car lift service cover all areas of Dubai?",
    answer:
      "Yes. We cover Business Bay, DIFC, Downtown Dubai, JLT, Jumeirah, Al Barsha, Al Quoz, Dubai Marina, JVC, Deira, Bur Dubai, Al Karama, and more. Tell us your destination and we will confirm the exact drop-off.",
  },
  {
    question: "Is car lift service available 24/7 in Dubai?",
    answer:
      "Yes. Quick Car Lift Service UAE operates 24/7. However, pre-booking is recommended to guarantee your seat — especially for early morning (6:00–8:00 AM) and peak evening slots (5:00–7:00 PM).",
  },
  {
    question: "What is the difference between sharing and private car lift in Dubai?",
    answer:
      "Sharing means you share the vehicle with other passengers going to nearby destinations (up to 4 passengers). Private means the entire vehicle is exclusive to you and your group. Private gives flexible timing; sharing is more economical.",
  },
];

const PICKUP_AREAS = [
  "Abu Dhabi (Mussafah, Khalifa City)",
  "Al Nahda (Sharjah)",
  "Al Taawun (Sharjah)",
  "Muweilah (Sharjah)",
  "University City (Sharjah)",
  "Al Nuaimiya (Ajman)",
  "Al Rashidiya (Ajman)",
  "Al Hamidiya (Ajman)",
];

const DROP_OFF_POINTS = [
  "Business Bay",
  "DIFC",
  "Downtown Dubai",
  "JLT (Jumeirah Lakes Towers)",
  "Al Barsha",
  "Al Quoz",
  "Dubai Marina",
  "Deira",
  "Bur Dubai",
  "Al Karama",
];

const PRICING_TABLE = [
  { route: "Abu Dhabi → Dubai", sharing: "AED 100", private: "AED 170" },
  { route: "Sharjah → Dubai", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman → Dubai", sharing: "AED 130", private: "AED 200" },
];

const TIMINGS = [
  { label: "Morning Pickups (to Dubai)", times: ["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"], color: "bg-blue-700" },
  { label: "Evening Returns (from Dubai)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

export default function CarLiftDubaiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a car lift to Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Dubai",
      description:
        "Daily car lift service in Dubai covering all inter-emirate routes. Abu Dhabi to Dubai AED 100 sharing / AED 170 private. Sharjah to Dubai AED 130 sharing / AED 200 private. 24/7 service.",
      url: "/car-lift-dubai",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Dubai", url: "/car-lift-dubai" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp",
      pageUrl: "/car-lift-dubai",
      caption: "Car lift service Dubai – daily shared rides from Abu Dhabi, Sharjah and Ajman to all Dubai areas",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #0f2a5e 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Car Lift Dubai" }]}
            className="mb-6 [&_*]:text-blue-300 [&_a]:text-blue-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Dubai Car Lift Hub
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Dubai – Daily Shared &amp; Private Rides Across UAE
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared and private car lift covering all inter-emirate routes to Dubai. From Abu Dhabi, Sharjah, and Ajman — GPS-tracked, air-conditioned vehicles, 24/7 service.
              </p>
              <p className="text-blue-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                Abu Dhabi to Dubai from AED 100 sharing / AED 170 private. Sharjah and Ajman to Dubai AED 130 sharing / AED 200 private per trip.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 100 Sharing", sub: "Abu Dhabi route" },
                  { icon: DollarSign, label: "AED 170 Private", sub: "Abu Dhabi route" },
                  { icon: Clock, label: "24/7 Service", sub: "All days" },
                  { icon: Star, label: "4.9★ Rated", sub: "150+ riders" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-blue-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Dubai via WhatsApp">
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
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="What is included">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-400" aria-hidden="true" />
                What&apos;s Included
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Morning & evening rides",
                  "All Dubai areas covered",
                  "GPS-tracked vehicles",
                  "Verified UAE drivers",
                  "Air-conditioned vehicles",
                  "WhatsApp support 24/7",
                  "Ladies-only option",
                  "Monthly packages available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Pricing Table ─────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Dubai – Route Prices
            </h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              Per-trip pricing for all major Dubai routes. Monthly packages available at discounted rates — WhatsApp for details.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm" aria-label="Car lift Dubai route pricing">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Route</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Private</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">{row.route}</td>
                    <td className="px-4 py-3 text-center font-extrabold text-blue-600">{row.sharing}</td>
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
                WhatsApp for Your Exact Price
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Dubai Timings
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

      {/* ── Pickup & Drop-off ────────────────────────────────────────────── */}
      <section aria-labelledby="pickup-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="pickup-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pickup Across UAE · Drop-off in Dubai
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />
                Pickup Areas (Abu Dhabi, Sharjah, Ajman)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {PICKUP_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-3 italic">Don&apos;t see your area? WhatsApp us — we cover all UAE.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />
                Drop-off Points in Dubai
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {DROP_OFF_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-3 italic">Exact drop-off confirmed at booking based on your destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Dubai – Common Questions
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
              { href: "/car-lift-dubai-to-abu-dhabi", label: "Car Lift Dubai to Abu Dhabi", desc: "AED 100 sharing / AED 170 private" },
              { href: "/carlift-sharjah-to-jlt", label: "Car Lift Sharjah to JLT", desc: "JLT Cluster drop-off, Marina & JVC" },
              { href: "/car-lift-ajman-to-dubai", label: "Car Lift Ajman to Dubai", desc: "AED 130 sharing / AED 200 private" },
              { href: "/carpool-dubai", label: "Carpool Dubai", desc: "Shared rides from AED 100" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-blue-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book your car lift Dubai" className="py-14 bg-blue-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Dubai Car Lift Today
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Seats fill fast — WhatsApp now to secure yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Dubai via WhatsApp">
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
