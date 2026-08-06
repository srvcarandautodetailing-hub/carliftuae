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
  Navigation,
  Star,
  Users,
  Zap,
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
  speakableSchema,
} from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Carlift Sharjah to Dubai – Business Bay, DIFC & JLT | From AED 300/month",
  description:
    "Carlift from Sharjah to Dubai covering Business Bay, DIFC, JLT, Al Qouz, Dubai Marina and more. From AED 300/month. Salik included, GPS-tracked, ladies option. Book via WhatsApp.",
  keywords:
    "carlift sharjah to dubai, car lift sharjah to dubai, carlift sharjah to business bay, car lift sharjah to business bay, sharjah to dubai car lift monthly, carlift uae sharjah dubai",
  alternates: {
    canonical: "https://www.carliftuae.com/carlift-sharjah-to-dubai-business-bay",
  },
  openGraph: {
    title: "Carlift Sharjah to Dubai – Business Bay, DIFC, JLT | Carlift UAE",
    description:
      "Daily carlift from Sharjah to all major Dubai destinations. Monthly packages from AED 300. Salik included, GPS-tracked, ladies option. Book via WhatsApp.",
    images: [{ url: "https://www.carliftuae.com/opengraph-image", width: 1200, height: 630, alt: "Carlift Sharjah to Dubai Business Bay" }],
  },
};

const PAGE_FAQS = [
  {
    question: "How much is carlift from Sharjah to Dubai?",
    answer:
      "Carlift from Sharjah to Dubai costs AED 300–450/month depending on your Sharjah pickup area and Dubai destination. Business Bay / DIFC from Al Nahda (Sharjah) starts at AED 300/month. JLT and Dubai Marina are AED 380–450/month. Daily trips are AED 25–35 one-way. Salik tolls are always included.",
  },
  {
    question: "What areas of Dubai does the Sharjah carlift cover?",
    answer:
      "Our carlift from Sharjah covers: Business Bay, DIFC, Downtown Dubai, JLT (Jumeirah Lakes Towers), Al Qouz, Dubai Marina, Media City, Internet City, Tecom, Al Barsha, Deira, Bur Dubai, Al Qusais, and Silicon Oasis. WhatsApp us with your specific office location for confirmation.",
  },
  {
    question: "How long does carlift from Sharjah to Business Bay take?",
    answer:
      "Carlift from Sharjah to Business Bay takes 40–70 minutes depending on your Sharjah pickup area and departure timing. The 6:30 AM departure from Al Nahda takes approximately 40–50 minutes. The 7:30–8:00 AM departure takes 60–70 minutes during peak traffic on Emirates Road and Sheikh Zayed Road.",
  },
  {
    question: "What is the best carlift from Sharjah to Dubai?",
    answer:
      "Car Lift UAE is the highest-rated carlift service from Sharjah to Dubai, with a 4.9-star rating from 247+ verified riders. We operate since 2019, with verified UAE-licensed drivers, GPS-tracked vehicles, Salik included, and a fixed monthly price. Ladies car lift option also available.",
  },
  {
    question: "Is Salik included in carlift from Sharjah to Dubai?",
    answer:
      "Yes. All Salik toll charges from Sharjah to Dubai are included in the monthly and daily carlift price. This covers Salik gates on Emirates Road (E311), Sheikh Zayed Road (E11), Al Ittihad Road, and any other tolled roads on the route. No extra charges ever.",
  },
  {
    question: "What time does the carlift from Sharjah to Dubai depart?",
    answer:
      "Morning departures from Sharjah to Dubai: 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Evening return from Dubai to Sharjah: 5:00 PM, 5:30 PM, 6:00 PM, and 6:30 PM. You select your preferred timing when booking and keep the same slot every working day.",
  },
  {
    question: "Can I book a monthly carlift from Sharjah to Dubai starting mid-month?",
    answer:
      "Yes. Monthly carlift packages from Sharjah to Dubai can start on any day. You pay a prorated amount for the remaining days of the first month, then a fixed monthly fee thereafter. WhatsApp us and we will calculate the exact amount.",
  },
  {
    question: "Is there a ladies-only carlift from Sharjah to Dubai?",
    answer:
      "Yes. We offer a dedicated ladies carlift from Sharjah to Dubai with a female driver option. The vehicle is exclusively for female passengers — GPS-tracked, emergency contact system, and passenger verification. Many of our female riders commute daily from Sharjah to Business Bay, DIFC, and JLT.",
  },
  {
    question: "Can I book a daily carlift from Sharjah to Dubai?",
    answer:
      "Yes. Daily carlift from Sharjah to Dubai is available at AED 25–35 per one-way trip. Book via WhatsApp by 9:00 PM the night before. No monthly commitment. If you travel 3+ times a week, the monthly package is significantly cheaper.",
  },
  {
    question: "How many people share the carlift from Sharjah to Dubai?",
    answer:
      "Standard carlift from Sharjah to Dubai carries 3–4 passengers in a 7-seater SUV or MPV. Everyone gets a proper seat with a seatbelt. We never overload vehicles. Private carlift (just you) is also available from AED 1,200/month.",
  },
];

const DUBAI_ROUTES = [
  {
    destination: "Business Bay",
    from: "Al Nahda, Sharjah",
    monthly: "AED 300",
    time: "40–55 min",
    popular: true,
  },
  {
    destination: "DIFC",
    from: "Al Nahda, Sharjah",
    monthly: "AED 320",
    time: "45–60 min",
    popular: false,
  },
  {
    destination: "Deira / Bur Dubai",
    from: "Al Nahda, Sharjah",
    monthly: "AED 280",
    time: "30–45 min",
    popular: false,
  },
  {
    destination: "JLT",
    from: "Muweilah, Sharjah",
    monthly: "AED 420",
    time: "55–70 min",
    popular: false,
  },
  {
    destination: "Silicon Oasis",
    from: "Al Majaz, Sharjah",
    monthly: "AED 300",
    time: "35–50 min",
    popular: false,
  },
  {
    destination: "Al Qouz / Media City",
    from: "Al Nahda, Sharjah",
    monthly: "AED 380",
    time: "55–70 min",
    popular: false,
  },
];

const COMPARISON = [
  { option: "Carlift UAE (Monthly)", cost: "AED 300–450", note: "Salik + driver all in", best: true },
  { option: "Driving Yourself", cost: "~AED 1,200+", note: "Fuel + Salik + parking", best: false },
  { option: "Uber / Careem (Daily)", cost: "~AED 1,400+/month", note: "25–35 AED × 2 ways × 26 days", best: false },
  { option: "Public Bus + Metro", cost: "~AED 250/month", note: "2–3 transfers, 90+ min each way", best: false },
];

export default function CarliftSharjahToDubaiBusinessBayPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book carlift from Sharjah to Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Carlift from Sharjah to Dubai",
      description:
        "Daily shared carlift service from Sharjah to all major Dubai destinations including Business Bay, DIFC, JLT, and Dubai Marina. Monthly packages from AED 300/month.",
      url: "/carlift-sharjah-to-dubai-business-bay",
      price: "300",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Carlift Sharjah to Dubai", url: "/carlift-sharjah-to-dubai-business-bay" },
    ]),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Carlift Sharjah to Dubai" }]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Sharjah &rarr; Business Bay · DIFC · JLT · Dubai Marina
              </div>
              <h1 id="hero-heading" className="speakable-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Carlift Sharjah to Dubai – Business Bay &amp; Beyond
              </h1>
              <p className="speakable-desc text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                UAE&apos;s most trusted daily carlift from all Sharjah areas to Business Bay, DIFC, JLT, and every major Dubai work hub.
                Monthly packages from AED 300. Salik included, GPS-tracked, verified drivers.
              </p>

              {/* AEO quick answer */}
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5 mb-6">
                <p className="text-emerald-300 text-xs font-bold uppercase tracking-widest mb-2">Quick Answer</p>
                <p className="text-white text-sm leading-relaxed">
                  Carlift from Sharjah to Dubai (Business Bay) costs <strong>AED 300–420/month</strong> depending on your Sharjah area.
                  Journey takes <strong>40–70 minutes</strong>. Salik included. Book via WhatsApp — seat confirmed in 60 minutes.
                </p>
              </div>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list">
                {[
                  { icon: DollarSign, label: "From AED 300", sub: "/month" },
                  { icon: Clock, label: "40–70 min", sub: "To Business Bay" },
                  { icon: Users, label: "3–4 pax", sub: "Shared ride" },
                  { icon: Zap, label: "60 min", sub: "Seat confirmed" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-slate-400 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book carlift Sharjah to Dubai via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref}>
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {BUSINESS.phone}
                  </a>
                </Button>
              </div>
            </div>

            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                What&apos;s Included
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Morning & evening rides",
                  "Salik tolls included",
                  "GPS-tracked vehicle",
                  "Verified UAE driver",
                  "Air-conditioned vehicle",
                  "Ladies car lift option",
                  "All Dubai destinations",
                  "Monthly or daily booking",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-white/10">
                <p className="text-emerald-300 text-xs font-bold mb-1.5">Departures (Morning)</p>
                <p className="text-slate-300 text-xs">6:30 · 7:00 · 7:30 · 8:00 AM</p>
                <p className="text-emerald-300 text-xs font-bold mt-3 mb-1.5">Returns (Evening)</p>
                <p className="text-slate-300 text-xs">5:00 · 5:30 · 6:00 · 6:30 PM</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Routes & Pricing ─────────────────────────────────────────────── */}
      <section aria-labelledby="routes-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Routes &amp; Pricing</p>
            <h2 id="routes-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Carlift from Sharjah to Dubai – Popular Routes
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Sample prices. Exact price depends on your pickup area in Sharjah. All include Salik tolls.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {DUBAI_ROUTES.map((route) => (
              <Card key={route.destination} className={`border-2 ${route.popular ? "border-blue-600 shadow-md" : "border-slate-200"} relative`}>
                {route.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">#1 Most Popular</span>
                  </div>
                )}
                <CardContent className={`p-5 ${route.popular ? "pt-8" : "pt-5"}`}>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{route.destination}</h3>
                      <p className="text-slate-500 text-xs mt-0.5">From: {route.from}</p>
                    </div>
                    <MapPin className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {route.time}
                    </div>
                    <p className="font-extrabold text-emerald-600 text-lg">{route.monthly}<span className="text-slate-400 text-xs font-normal">/mo</span></p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-slate-500 text-xs">
            Prices shown are from Al Nahda / Muweilah, Sharjah. WhatsApp for your exact quote based on your building address.
          </p>
        </div>
      </section>

      {/* ── Cost Comparison ──────────────────────────────────────────────── */}
      <section aria-labelledby="comparison-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Cost Comparison</p>
            <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Carlift vs Other Sharjah to Dubai Transport Options
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm" aria-label="Transport cost comparison Sharjah to Dubai">
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-5 py-4 font-semibold">Transport Option</th>
                  <th className="text-center px-5 py-4 font-semibold">Monthly Cost</th>
                  <th className="text-left px-5 py-4 font-semibold">Key Note</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.option} className={`${i % 2 === 0 ? "bg-white" : "bg-slate-50"} ${row.best ? "ring-2 ring-inset ring-emerald-300" : ""}`}>
                    <td className="px-5 py-4 font-semibold text-slate-900">
                      {row.option}
                      {row.best && <span className="ml-2 bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded-full font-bold">Best Value</span>}
                    </td>
                    <td className={`px-5 py-4 text-center font-extrabold text-lg ${row.best ? "text-emerald-600" : "text-red-500"}`}>{row.cost}</td>
                    <td className="px-5 py-4 text-slate-600 text-xs">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-slate-500 text-xs text-center mt-4">
            Carlift saves you AED 900–1,100/month vs driving yourself — AED 10,800–13,200 per year.
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Carlift Sharjah to Dubai – All Questions Answered
            </h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl overflow-hidden">
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

      {/* ── Internal links ────────────────────────────────────────────────── */}
      <section aria-label="Related pages" className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Explore More Car Lift Options</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-from-sharjah-to-business-bay", label: "Car Lift Sharjah to Business Bay", desc: "Detailed guide + pricing by area" },
              { href: "/bus-car-lift-sharjah-to-business-bay", label: "Bus Car Lift Sharjah", desc: "Bus-style shared service" },
              { href: "/bus-car-lift-service-from-sharjah-sheikh-zayed", label: "Sharjah via Sheikh Zayed Road", desc: "DIFC, JLT, Marina routes" },
              { href: "/locations/sharjah", label: "All Sharjah Car Lift Areas", desc: "Find your nearest location" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-md transition-all h-full bg-white">
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-blue-500 text-xs font-medium flex items-center gap-1 mt-2">
                    View <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <section
        aria-label="Book carlift Sharjah to Dubai"
        className="relative overflow-hidden py-16"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)" }}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-4" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Carlift from Sharjah to Dubai Today
          </h2>
          <p className="text-slate-300 text-sm mb-6">
            Join {BUSINESS.reviewCount}+ daily commuters. Seat confirmed in 60 minutes. Monthly packages start any day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
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
