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
} from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Bus Car Lift Sharjah to Business Bay – Daily Shared Rides | AED 300/mo",
  description:
    "Bus car lift from Sharjah to Business Bay from AED 300/month. Shared AC vehicle, GPS-tracked, verified drivers, Salik included. Morning departures 6:30 AM – 8:00 AM. Book via WhatsApp.",
  keywords:
    "bus car lift sharjah to business bay, sharjah to business bay bus timings, car lift service sharjah to business bay, shared car lift sharjah business bay, bus car lift uae",
  alternates: {
    canonical: "https://www.carlift.ae/bus-car-lift-sharjah-to-business-bay",
  },
  openGraph: {
    title: "Bus Car Lift Sharjah to Business Bay – From AED 300/month",
    description:
      "Daily shared car lift from Sharjah to Business Bay. AC vehicle, GPS-tracked, Salik included. Morning timings 6:30 AM – 8:00 AM. Ladies option available.",
    images: [{ url: "https://www.carlift.ae/opengraph-image", width: 1200, height: 630, alt: "Bus Car Lift Sharjah to Business Bay" }],
  },
};

const PAGE_FAQS = [
  {
    question: "What is a bus car lift from Sharjah to Business Bay?",
    answer:
      "A bus car lift from Sharjah to Business Bay is a shared vehicle service where 3–4 passengers share an air-conditioned Toyota Innova, Mitsubishi Montero, or similar SUV/MPV from Sharjah to Business Bay, Dubai. It costs a fraction of a private taxi and is far more comfortable than public buses or the metro with transfers.",
  },
  {
    question: "How much does bus car lift from Sharjah to Business Bay cost?",
    answer:
      "Monthly bus car lift from Sharjah to Business Bay starts from AED 300/month for pickup from Al Nahda, Sharjah. Areas farther from Dubai (Muweilah, University City) are AED 350–420/month. Daily trips are AED 25–35 per one-way trip. All prices include Salik tolls — no hidden charges.",
  },
  {
    question: "What time does the car lift depart from Sharjah to Business Bay?",
    answer:
      "Morning departures from Sharjah to Business Bay: 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Evening return trips from Business Bay to Sharjah: 5:00 PM, 5:30 PM, 6:00 PM, and 6:30 PM. You choose your preferred timing when you book.",
  },
  {
    question: "Which areas in Sharjah does the car lift pick up from?",
    answer:
      "We pick up from Al Nahda, Al Taawun, Al Khan, Al Majaz, Muweilah, University City, Al Zahia, Rolla, Al Qasimia, and more. WhatsApp us with your building name and we will confirm your nearest pickup point.",
  },
  {
    question: "Does the bus car lift from Sharjah to Business Bay include Salik?",
    answer:
      "Yes. All Salik toll charges are fully included in both the daily and monthly car lift prices. There are no extra charges for toll crossings on Emirates Road, Sheikh Zayed Road, or any other Salik gate.",
  },
  {
    question: "Is there a ladies-only car lift from Sharjah to Business Bay?",
    answer:
      "Yes. We offer a dedicated ladies-only car lift from Sharjah to Business Bay with a female driver available on request. The vehicle is exclusively for female passengers — a safe and comfortable daily commute.",
  },
  {
    question: "What type of vehicle is used for the Sharjah to Business Bay car lift?",
    answer:
      "We use Toyota Innova, Mitsubishi Montero, Honda Odyssey, and similar 7-seater SUVs/MPVs. All vehicles are less than 5 years old, air-conditioned, GPS-tracked, and carry comprehensive insurance coverage.",
  },
  {
    question: "How long does the Sharjah to Business Bay journey take?",
    answer:
      "The journey from Sharjah to Business Bay takes approximately 40–70 minutes. The 6:30 AM departure is fastest (40–50 min). The 7:30–8:00 AM departures take 60–70 minutes due to peak traffic on Emirates Road (E311) and Sheikh Zayed Road.",
  },
  {
    question: "Can I book a daily car lift without a monthly commitment?",
    answer:
      "Yes. Daily bookings from Sharjah to Business Bay are AED 25–35 per one-way trip. Book via WhatsApp by 9:00 PM the night before. No monthly contract required.",
  },
  {
    question: "Where does the car lift drop off in Business Bay?",
    answer:
      "Drop-off points in Business Bay include Business Bay Metro Station, Bay Square, Opus Tower, Executive Towers, Al Habtoor City, Marriott Marquis area, DAMAC Towers, and other major offices. Confirm your exact drop-off point when booking.",
  },
];

const TIMINGS = [
  { label: "Sharjah → Business Bay (Morning)", times: ["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"], color: "bg-blue-600" },
  { label: "Business Bay → Sharjah (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

const PICKUP_AREAS = [
  "Al Nahda (Sharjah)", "Al Taawun", "Al Khan", "Al Majaz",
  "Muweilah", "University City", "Al Zahia", "Rolla Area",
  "Al Qasimia", "Industrial Area 1–3",
];

const DROP_OFF_POINTS = [
  "Business Bay Metro Station", "Bay Square", "Opus Tower",
  "Executive Towers", "Al Habtoor City", "Marriott Marquis Area",
  "DAMAC Towers", "Churchill Towers",
];

const PRICING_AREAS = [
  { area: "Al Nahda", price: "AED 300", note: "Closest to Dubai" },
  { area: "Al Taawun / Al Khan", price: "AED 320", note: "" },
  { area: "Al Majaz / Rolla", price: "AED 350", note: "" },
  { area: "Muweilah", price: "AED 380", note: "" },
  { area: "University City / Al Zahia", price: "AED 420", note: "Farther zone" },
];

export default function BusCarLiftSharjahToBusinessBayPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book bus car lift from Sharjah to Business Bay."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Bus Car Lift Sharjah to Business Bay",
      description:
        "Daily shared car lift service from Sharjah to Business Bay, Dubai. Monthly packages from AED 300/month. Salik included.",
      url: "/bus-car-lift-sharjah-to-business-bay",
      price: "300",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Bus Car Lift Sharjah to Business Bay", url: "/bus-car-lift-sharjah-to-business-bay" },
    ]),
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
            items={[{ label: "Home", href: "/" }, { label: "Bus Car Lift Sharjah to Business Bay" }]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                From AED 300/month · Salik Included · Ladies Option Available
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Bus Car Lift Sharjah to Business Bay
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Daily shared car lift (bus-style) from all major Sharjah areas to Business Bay, Dubai.
                Air-conditioned, GPS-tracked vehicles, verified drivers, and fixed monthly pricing.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "From AED 300", sub: "/month" },
                  { icon: Clock, label: "40–70 min", sub: "Journey Time" },
                  { icon: Car, label: "4 Timings", sub: "Morning Daily" },
                  { icon: Users, label: "3–4 Seats", sub: "Shared Ride" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book bus car lift Sharjah to Business Bay via WhatsApp">
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
                What&apos;s Included
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Morning & evening rides",
                  "Salik tolls included",
                  "GPS-tracked vehicle",
                  "Verified UAE driver",
                  "Air-conditioned vehicle",
                  "WhatsApp support 24/7",
                  "Ladies-only option",
                  "Reserved monthly seat",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Bus Car Lift Timings – Sharjah to Business Bay
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Fixed departures every day, Monday to Saturday. Choose your slot — your seat is reserved for the same time each day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
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
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Confirm Your Timing via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Pickup & Drop-off ────────────────────────────────────────────── */}
      <section aria-labelledby="pickup-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="pickup-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pickup in Sharjah · Drop-off in Business Bay
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />
                Pickup Areas (Sharjah)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {PICKUP_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-3 italic">
                Don&apos;t see your area? WhatsApp us — we cover all of Sharjah.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                Drop-off Points (Business Bay)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {DROP_OFF_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-3 italic">
                Exact drop-off point confirmed at booking based on your office location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing by Area ──────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Transparent Pricing</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              How Much is Bus Car Lift from Sharjah to Business Bay?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Pricing varies by pickup area. All prices include Salik, morning and evening rides, 6 days a week.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4">Monthly Package by Area</h3>
              <div className="border border-slate-200 rounded-2xl overflow-hidden">
                <table className="w-full text-sm" aria-label="Car lift pricing by Sharjah area">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-semibold text-slate-700">Pickup Area (Sharjah)</th>
                      <th className="text-right px-4 py-3 font-semibold text-slate-700">Monthly Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICING_AREAS.map((row, i) => (
                      <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="px-4 py-3 text-slate-800 font-medium">
                          {row.area}
                          {row.note && <span className="ml-2 text-xs text-slate-400">({row.note})</span>}
                        </td>
                        <td className="px-4 py-3 text-right font-extrabold text-emerald-600">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-xs mt-3">
                Daily rate: AED 25–35/trip. Salik always included. No hidden charges.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardContent className="p-5 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <DollarSign className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-900 text-sm mb-1">Save AED 800–900+/month</p>
                      <p className="text-emerald-700 text-xs leading-relaxed">
                        Driving from Sharjah to Business Bay costs ~AED 1,200/month in fuel, Salik, and parking.
                        Our monthly car lift from AED 300 saves you over AED 900 every month — AED 10,800/year.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-5 pt-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-900 text-sm mb-1">No Hidden Charges — Ever</p>
                      <p className="text-blue-700 text-xs leading-relaxed">
                        The price you see is the price you pay. Salik, fuel, and driver fees are all included.
                        Payment via cash, bank transfer, or WhatsApp Pay at the start of each month.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild variant="whatsapp" size="lg" className="w-full">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  Get Your Exact Price via WhatsApp
                </a>
              </Button>
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
              Bus Car Lift Sharjah to Business Bay – Common Questions
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
          <div className="mt-8 text-center">
            <Button asChild variant="outline" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Related pages ────────────────────────────────────────────────── */}
      <section aria-label="Related car lift pages" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Car Lift Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-from-sharjah-to-business-bay", label: "Car Lift from Sharjah to Business Bay", desc: "Full route guide, pricing, timings" },
              { href: "/locations/business-bay", label: "Business Bay Car Lift", desc: "All routes into Business Bay" },
              { href: "/services/ladies-car-lift", label: "Ladies Car Lift UAE", desc: "Female driver, ladies-only vehicle" },
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
      <section aria-label="Book your car lift" className="py-14 bg-blue-600">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Bus Car Lift from Sharjah Today
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Car Lift UAE. Seats fill fast — WhatsApp now to secure yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book bus car lift Sharjah to Business Bay">
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
