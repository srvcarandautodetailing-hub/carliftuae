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
  title: "Car Lift Abu Dhabi – AED 100 Sharing / AED 170 Private | All Routes | +971 54 330 8261",
  description:
    "Car lift service to/from Abu Dhabi. Dubai ↔ Abu Dhabi AED 100 sharing / AED 170 private. Sharjah ↔ Abu Dhabi AED 130 sharing / AED 200 private. Ajman ↔ Abu Dhabi AED 130 sharing / AED 200 private. 24/7.",
  keywords:
    "car lift abu dhabi, car lift abu dhabi monthly, car lift to abu dhabi, abu dhabi car lift, carpool abu dhabi, sharing taxi abu dhabi to dubai",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-abu-dhabi",
  },
  openGraph: {
    title: "Car Lift Abu Dhabi – AED 100 Sharing / AED 170 Private | All Routes | +971 54 330 8261",
    description:
      "Car lift to/from Abu Dhabi. Dubai route AED 100 sharing / AED 170 private. Sharjah & Ajman routes AED 130 sharing / AED 200 private. 24/7.",
  },
};

const PAGE_FAQS = [
  {
    question: "How much is a car lift from Abu Dhabi to Dubai?",
    answer:
      "AED 100 sharing / AED 170 private per one-way trip. This covers all pickup points in Abu Dhabi to any major Dubai destination — Business Bay, DIFC, JLT, and more.",
  },
  {
    question: "Is there a car lift from Sharjah to Abu Dhabi?",
    answer:
      "Yes. Quick Car Lift Service UAE runs daily shared and private rides from Sharjah to Abu Dhabi and back. AED 130 sharing / AED 200 private per trip via Sheikh Zayed Road.",
  },
  {
    question: "How long is the journey from Abu Dhabi to Dubai?",
    answer:
      "55–85 minutes from central Abu Dhabi to Business Bay, Dubai, depending on traffic. The 5:30 AM and 6:00 AM departures are fastest (55–65 minutes). Rush-hour slots (7:00 AM+) can take 80–95 minutes.",
  },
  {
    question: "What areas in Abu Dhabi do you pick up from?",
    answer:
      "We pick up from Mussafah, Khalifa City, Mohamed Bin Zayed City, Al Shamkha, Baniyas, Al Raha, Khalidiyah, and all major Abu Dhabi areas. WhatsApp your area to confirm pickup.",
  },
  {
    question: "Is there a car lift from Abu Dhabi to Sharjah?",
    answer:
      "Yes. Abu Dhabi to Sharjah is AED 130 sharing / AED 200 private per trip. We cover all Sharjah areas — Al Nahda, Al Taawun, Muweilah, University City, and more.",
  },
  {
    question: "Is there a car lift from Abu Dhabi to Ajman?",
    answer:
      "Yes. Abu Dhabi to Ajman is AED 130 sharing / AED 200 private per trip. The route goes via Dubai and Emirates Road (E311). Contact via WhatsApp to arrange.",
  },
];

const PICKUP_AREAS = [
  "Mussafah",
  "Khalifa City A & B",
  "Mohamed Bin Zayed City (MBZ)",
  "Al Shamkha",
  "Baniyas",
  "Al Raha",
  "Khalidiyah",
  "Al Nahyan",
];

const TIMINGS = [
  { label: "Abu Dhabi → Dubai (Morning)", times: ["5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM"], color: "bg-emerald-700" },
  { label: "Dubai → Abu Dhabi (Evening Return)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "7:00 PM"], color: "bg-slate-800" },
];

const ROUTES_TABLE = [
  { route: "Dubai ↔ Abu Dhabi", sharing: "AED 100", private: "AED 170" },
  { route: "Sharjah ↔ Abu Dhabi", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman ↔ Abu Dhabi", sharing: "AED 130", private: "AED 200" },
];

export default function CarLiftAbuDhabiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a car lift to/from Abu Dhabi."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Abu Dhabi",
      description:
        "Daily car lift to and from Abu Dhabi. Dubai to Abu Dhabi AED 100 sharing / AED 170 private. Sharjah and Ajman routes AED 130 sharing / AED 200 private. 24/7 service.",
      url: "/car-lift-abu-dhabi",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Abu Dhabi", url: "/car-lift-abu-dhabi" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-daily-commuters-interior.webp",
      pageUrl: "/car-lift-abu-dhabi",
      caption: "Car lift Abu Dhabi – daily commuter rides from Abu Dhabi to Dubai, Sharjah and Ajman",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #022c22 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Car Lift Abu Dhabi" }]}
            className="mb-6 [&_*]:text-emerald-300 [&_a]:text-emerald-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Abu Dhabi Car Lift
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Abu Dhabi – Daily Rides to Dubai, Sharjah &amp; Ajman
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared and private car lift from Abu Dhabi to Dubai, Sharjah, and Ajman. All major Abu Dhabi areas covered — Mussafah, Khalifa City, MBZ City.
              </p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                Abu Dhabi to Dubai: AED 100 sharing / AED 170 private. Sharjah and Ajman routes: AED 130 sharing / AED 200 private per trip.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 100 Sharing", sub: "Dubai route" },
                  { icon: DollarSign, label: "AED 170 Private", sub: "Dubai route" },
                  { icon: Car, label: "3 Routes", sub: "Dubai, Sharjah, Ajman" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-emerald-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-emerald-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Abu Dhabi via WhatsApp">
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
                <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                Abu Dhabi Pickup Areas
              </p>
              <ul className="space-y-3" role="list">
                {PICKUP_AREAS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-emerald-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Routes & Pricing ─────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">All Routes</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Abu Dhabi Car Lift Pricing
            </h2>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm" aria-label="Abu Dhabi car lift route pricing">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Route</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Private</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES_TABLE.map((row, i) => (
                  <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">{row.route}</td>
                    <td className="px-4 py-3 text-center font-extrabold text-emerald-600">{row.sharing}</td>
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
                WhatsApp for Your Monthly Rate
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Abu Dhabi to Dubai Car Lift Timings
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

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Abu Dhabi – Common Questions
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
      <section aria-label="Related car lift pages" className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Car Lift Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-dubai-to-abu-dhabi", label: "Car Lift Dubai to Abu Dhabi", desc: "AED 100 sharing / AED 170 private" },
              { href: "/car-lift-from-sharjah-to-abu-dhabi", label: "Car Lift Sharjah to Abu Dhabi", desc: "AED 130 sharing / AED 200 private" },
              { href: "/car-lift-abu-dhabi-monthly", label: "Monthly Car Lift Abu Dhabi", desc: "Fixed monthly rate, guaranteed seat" },
              { href: "/pricing", label: "Full Pricing Guide", desc: "All UAE routes and prices" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-emerald-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-emerald-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book your Abu Dhabi car lift" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Abu Dhabi Car Lift Today
          </h2>
          <p className="text-emerald-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Early morning seats fill fast — WhatsApp now.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Abu Dhabi via WhatsApp">
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
