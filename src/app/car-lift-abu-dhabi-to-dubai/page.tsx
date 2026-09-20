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
  Briefcase,
  Building2,
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
  title: "Car Lift Abu Dhabi to Dubai – AED 100 Sharing / AED 170 Private | +971 54 330 8261",
  description:
    "Daily car lift from Abu Dhabi to Dubai from AED 100 sharing / AED 170 private per trip. Khalifa City, Mussafah, MBZ City pickup. Business Bay, DIFC, JLT drop-off. Salik included. WhatsApp +971 54 330 8261.",
  keywords:
    "car lift abu dhabi to dubai, abu dhabi to dubai car lift, sharing taxi from abu dhabi to dubai, carpool abu dhabi to dubai, abu dhabi dubai car lift monthly, pick and drop abu dhabi to dubai",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-abu-dhabi-to-dubai",
  },
  openGraph: {
    title: "Car Lift Abu Dhabi to Dubai – AED 100 Sharing / AED 170 Private | +971 54 330 8261",
    description:
      "Daily car lift from Abu Dhabi to Dubai – AED 100 sharing / AED 170 private per trip. Khalifa City, Mussafah, MBZ pickup. Business Bay, DIFC, JLT drop-off. Salik included.",
  },
};

const PAGE_FAQS = [
  {
    question: "How much is a car lift from Abu Dhabi to Dubai?",
    answer:
      "Car lift from Abu Dhabi to Dubai is AED 100 sharing / AED 170 private per one-way trip. The flat per-trip fare applies to all Abu Dhabi pickup zones — Khalifa City, Mussafah, Mohamed Bin Zayed City, Al Shamkha, Baniyas, and more. All E11 Salik tolls are included. No hidden charges.",
  },
  {
    question: "How long does the journey from Abu Dhabi to Dubai take?",
    answer:
      "The journey from central Abu Dhabi (Khalifa City or Mussafah) to Business Bay, Dubai takes approximately 75–100 minutes via Sheikh Zayed Road (E11). The 5:30 AM and 6:00 AM departures are fastest — road is clear and the trip takes 70–80 minutes. The 7:00 AM slot takes 90–110 minutes as traffic builds up through Jebel Ali and past Dubai Media City.",
  },
  {
    question: "Which areas in Abu Dhabi does the car lift pick up from?",
    answer:
      "We pick up from Khalifa City A & B, Mussafah (all sectors M1–M44), Mohamed Bin Zayed City (MBZ), Al Shamkha, Baniyas, Al Raha Beach, Tourist Club Area, Abu Dhabi Corniche, Hamdan Street, Al Khalidiyah, Zayed Sports City, and Yas Island. Share your building name on WhatsApp and we confirm your slot.",
  },
  {
    question: "Which Dubai areas does the Abu Dhabi car lift serve?",
    answer:
      "We serve Business Bay (all towers), DIFC (Gate 1 and Gate 4), Downtown Dubai, JLT (Jumeirah Lakes Towers), Dubai Marina, Al Barsha, JVC, Al Quoz, Deira, Bur Dubai, Karama, and Silicon Oasis. Tell us your exact office tower or area when booking.",
  },
  {
    question: "What time does the Abu Dhabi to Dubai car lift depart?",
    answer:
      "Morning departures from Abu Dhabi: 5:30 AM, 6:00 AM, 6:30 AM, and 7:00 AM — timed so you arrive in Dubai before the peak hour traffic lock-up. Evening returns from Dubai to Abu Dhabi: 5:00 PM, 5:30 PM, 6:00 PM, and 7:00 PM.",
  },
  {
    question: "Is a ladies-only car lift from Abu Dhabi to Dubai available?",
    answer:
      "Yes. A ladies-only car lift from Abu Dhabi to Dubai is available — either a verified female driver or a ladies-only vehicle with all female passengers. The same per-trip price applies. WhatsApp +971 54 330 8261 to arrange the ladies option when booking.",
  },
  {
    question: "Can I book a monthly car lift from Abu Dhabi to Dubai?",
    answer:
      "Yes. Monthly commuter packages provide a guaranteed daily seat Monday to Saturday — no need to book each morning. Contact Quick Car Lift Service UAE on WhatsApp with your Abu Dhabi pickup area and Dubai destination for a personalised monthly quote.",
  },
  {
    question: "What route does the Abu Dhabi to Dubai car lift take?",
    answer:
      "Most trips use E11 (Sheikh Zayed Road) — the direct motorway between Abu Dhabi and Dubai. Passengers from MBZ and Al Shamkha join via ADNOC Road or E20 before linking to E11 near Jebel Ali. All Salik gates on E11 are covered in the fare. Travel time varies by departure time — 6:00 AM is the fastest slot.",
  },
];

const TIMINGS = [
  {
    label: "Abu Dhabi → Dubai (Morning)",
    times: ["5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM"],
    color: "bg-emerald-700",
  },
  {
    label: "Dubai → Abu Dhabi (Evening)",
    times: ["5:00 PM", "5:30 PM", "6:00 PM", "7:00 PM"],
    color: "bg-slate-800",
  },
];

const ABU_DHABI_PICKUP_AREAS = [
  "Khalifa City A & B",
  "Mussafah (M1–M44)",
  "Mohamed Bin Zayed City",
  "Al Shamkha",
  "Baniyas",
  "Al Raha Beach",
  "Tourist Club Area",
  "Abu Dhabi Corniche",
  "Hamdan Street",
  "Al Khalidiyah",
  "Zayed Sports City",
  "Yas Island",
];

const DUBAI_DESTINATIONS = [
  "Business Bay (all towers)",
  "DIFC – Gate 1 & Gate 4",
  "Downtown Dubai",
  "JLT (Jumeirah Lakes Towers)",
  "Dubai Marina",
  "Al Barsha / JVC",
  "Al Quoz (Industrial & Residential)",
  "Deira",
  "Bur Dubai / Karama",
  "Silicon Oasis",
  "Dubai Investment Park",
  "Jebel Ali (JAFZA)",
];

const PRICING_TABLE = [
  { area: "Khalifa City / Al Raha / Tourist Club", sharing: "AED 100", private: "AED 170" },
  { area: "Mussafah (all sectors)", sharing: "AED 100", private: "AED 170" },
  { area: "Mohamed Bin Zayed City (MBZ)", sharing: "AED 100", private: "AED 170" },
  { area: "Al Shamkha / Baniyas", sharing: "AED 100", private: "AED 170" },
  { area: "Abu Dhabi Corniche / Hamdan Street", sharing: "AED 100", private: "AED 170" },
  { area: "Yas Island / Zayed Sports City", sharing: "AED 100", private: "AED 170" },
];

const COST_COMPARISON = [
  { item: "Fuel (Abu Dhabi–Dubai roundtrip × 26 days)", driving: "AED 2,080", carlift: "—" },
  { item: "Salik on E11 (4–6 gates roundtrip × 26 days)", driving: "AED 832", carlift: "Included" },
  { item: "Dubai parking (monthly)", driving: "AED 600", carlift: "—" },
  { item: "Vehicle wear & depreciation", driving: "AED 600", carlift: "—" },
  { item: "Total monthly cost", driving: "AED 4,112+", carlift: "AED 2,600 (sharing × 26 trips)", highlight: true },
];

const SERVICES = [
  {
    icon: Car,
    title: "Daily Commuter Car Lift",
    desc: "Fixed morning slots from Abu Dhabi. Reserved seat — no booking every day. Evening return included.",
  },
  {
    icon: Users,
    title: "Ladies-Only Option",
    desc: "Verified female driver or all-female vehicle. Same fare, full privacy for the Abu Dhabi–Dubai commute.",
  },
  {
    icon: Briefcase,
    title: "Corporate Staff Transport",
    desc: "Dedicated vehicles for Abu Dhabi companies with Dubai offices. Monthly billing, priority booking.",
  },
  {
    icon: Building2,
    title: "Government & Free Zone",
    desc: "Specialist routes from Abu Dhabi government hubs, Mussafah industrial, and ADNOC area to Dubai.",
  },
];

export default function CarLiftAbuDhabiToDubaiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book car lift from Abu Dhabi to Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Abu Dhabi to Dubai",
      description:
        "Daily car lift from Abu Dhabi to Dubai covering Khalifa City, Mussafah, MBZ City, Baniyas, and all major Abu Dhabi areas. AED 100 sharing / AED 170 private per trip via E11. Salik included, GPS-tracked.",
      url: "/car-lift-abu-dhabi-to-dubai",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Abu Dhabi to Dubai", url: "/car-lift-abu-dhabi-to-dubai" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/routes/carlift-sheikh-zayed-road-dropoff.webp",
      pageUrl: "/car-lift-abu-dhabi-to-dubai",
      caption: "Car lift on Sheikh Zayed Road E11 — daily Abu Dhabi to Dubai commute",
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
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Car Lift Abu Dhabi to Dubai" },
            ]}
            className="mb-6 [&_*]:text-emerald-400 [&_a]:text-emerald-300 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                AED 100 Sharing / AED 170 Private per Trip · E11 Route · Salik Included
              </div>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                Car Lift Abu Dhabi to<br className="hidden sm:block" /> Dubai – Daily Commute
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared and private car lift from Khalifa City, Mussafah, MBZ City, Baniyas,
                and all Abu Dhabi areas to Business Bay, DIFC, JLT, Downtown Dubai, and more.
                Via E11 Sheikh Zayed Road — Salik included.
              </p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                Driving from Abu Dhabi to Dubai costs AED 4,100+/month in fuel, Salik, and Dubai
                parking. Our car lift starts at AED 100 sharing per trip — all tolls covered,
                door-to-area service.
              </p>
              <ul
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
                role="list"
                aria-label="Key route stats"
              >
                {[
                  { icon: DollarSign, label: "AED 100 sharing", sub: "per trip" },
                  { icon: Clock, label: "75–110 min", sub: "Journey Time" },
                  { icon: Car, label: "E11 Route", sub: "Sheikh Zayed Rd" },
                  { icon: Users, label: "Ladies Option", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li
                    key={sub}
                    className="bg-white/10 border border-white/15 rounded-xl p-4 text-center"
                  >
                    <Icon
                      className="h-5 w-5 text-emerald-400 mx-auto mb-1.5"
                      aria-hidden="true"
                    />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-emerald-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book car lift Abu Dhabi to Dubai via WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <a href={phoneHref} aria-label="Call Car Lift UAE">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call {BUSINESS.phone}
                  </a>
                </Button>
              </div>
            </div>
            <aside
              className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0"
              aria-label="What is included"
            >
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-400" aria-hidden="true" />
                What&apos;s Included
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Morning Abu Dhabi → Dubai ride",
                  "Evening Dubai → Abu Dhabi return",
                  "All E11 Salik tolls included",
                  "GPS-tracked vehicle",
                  "Verified UAE driver",
                  "Air-conditioned vehicle",
                  "WhatsApp support 24/7",
                  "Ladies-only option available",
                  "No contract, cancel anytime",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 text-emerald-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-emerald-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Services Strip ────────────────────────────────────────────────── */}
      <section aria-labelledby="services-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              All Services Covered
            </p>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Abu Dhabi to Dubai Car Lift Services
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              From individual daily commuters leaving Mussafah at 5:30 AM to full corporate teams
              travelling from Abu Dhabi headquarters to Dubai offices.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-slate-200 hover:border-emerald-300 transition-colors">
                <CardContent className="p-5 pt-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cost Comparison ──────────────────────────────────────────────── */}
      <section aria-labelledby="cost-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Real Monthly Savings
            </p>
            <h2
              id="cost-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Driving Abu Dhabi–Dubai Costs AED 4,100+/Month
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              The 140 km roundtrip via E11 burns fuel fast. Add multiple Salik gates and Dubai
              parking — and the monthly bill climbs well above AED 4,000.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden max-w-2xl mx-auto mb-8">
            <table
              className="w-full text-sm"
              aria-label="Monthly cost comparison Abu Dhabi–Dubai driving vs car lift"
            >
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Monthly Cost Item
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-red-600">
                    Driving Yourself
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-emerald-600">
                    Car Lift UAE
                  </th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr
                    key={row.item}
                    className={
                      row.highlight
                        ? "bg-emerald-50 font-bold border-t-2 border-emerald-200"
                        : i % 2 === 0
                        ? "bg-white"
                        : "bg-slate-50/50"
                    }
                  >
                    <td className="px-4 py-3 text-slate-800">{row.item}</td>
                    <td className="px-4 py-3 text-right text-red-600">{row.driving}</td>
                    <td className="px-4 py-3 text-right text-emerald-600">{row.carlift}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Save AED 1,500+/Month – WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Daily Schedule
            </p>
            <h2
              id="timings-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Abu Dhabi to Dubai Car Lift Timings
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Fixed departure slots Monday to Saturday. Choose your slot — your seat is reserved
              every working day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {TIMINGS.map((t) => (
              <Card key={t.label} className="border-slate-200">
                <CardContent className="p-6 pt-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-9 h-9 rounded-xl ${t.color} flex items-center justify-center shrink-0`}
                    >
                      <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{t.label}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {t.times.map((time) => (
                      <div
                        key={time}
                        className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center"
                      >
                        <p className="font-extrabold text-slate-900 text-xl">{time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="border-emerald-200 bg-emerald-50">
            <CardContent className="p-5 pt-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-emerald-700 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-sm mb-1">
                    Why Book the 5:30 AM or 6:00 AM Departure?
                  </p>
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    E11 (Sheikh Zayed Road) is clear before 7 AM. The 5:30 AM slot from Khalifa
                    City reaches Business Bay in approximately 75 minutes. The 7:00 AM slot can take
                    95–115 minutes — same price, but earlier saves 20–40 minutes every morning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Coverage Areas ────────────────────────────────────────────────── */}
      <section aria-labelledby="areas-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Full Route Coverage
            </p>
            <h2
              id="areas-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Pickup Across Abu Dhabi · Drop-off Across Dubai
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              We cover every major Abu Dhabi residential and industrial area, and drop off at all
              major Dubai business and residential hubs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                Abu Dhabi Pickup Areas (12 zones)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none" role="list">
                {ABU_DHABI_PICKUP_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3 py-2.5"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs italic mt-3">
                Not listed? WhatsApp us — we cover all of Abu Dhabi.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />
                Dubai Drop-off Areas (12 zones)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none" role="list">
                {DUBAI_DESTINATIONS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3 py-2.5"
                  >
                    <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs italic mt-3">
                Not listed? WhatsApp your Dubai tower or area — we cover all of Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Transparent Pricing
            </p>
            <h2
              id="pricing-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Car Lift Fares – Abu Dhabi to Dubai
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Flat per-trip fare from any Abu Dhabi pickup zone — same price regardless of area.
              All E11 Salik tolls included. No hidden charges.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table
              className="w-full text-sm"
              aria-label="Car lift Abu Dhabi to Dubai pricing by pickup area"
            >
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold">Abu Dhabi Pickup Area</th>
                  <th className="text-right px-4 py-3 font-semibold">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold">Private</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">{row.area}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-emerald-600">{row.sharing}</td>
                    <td className="px-4 py-3 text-right font-medium text-slate-700">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card className="border-sky-200 bg-sky-50 mb-6">
            <CardContent className="p-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-sky-900 text-sm mb-1">All E11 Salik Tolls Included</p>
                  <p className="text-sky-700 text-xs leading-relaxed">
                    Sheikh Zayed Road (E11) has 3–4 Salik gates between Abu Dhabi and Dubai. Every
                    gate is covered in your trip fare. Zero hidden toll charges — what you see is
                    what you pay.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Get Your Exact Price via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Abu Dhabi to Dubai Car Lift – Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
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

      {/* ── Related pages ────────────────────────────────────────────────── */}
      <section aria-label="Related car lift pages" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Related Car Lift Services
          </h2>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none"
            role="list"
          >
            {[
              {
                href: "/car-lift-dubai-to-abu-dhabi",
                label: "Car Lift Dubai to Abu Dhabi",
                desc: "Reverse route – AED 100 sharing / AED 170 private",
              },
              {
                href: "/car-lift-abu-dhabi",
                label: "Car Lift Abu Dhabi Hub",
                desc: "All Abu Dhabi routes & pricing",
              },
              {
                href: "/car-lift-from-sharjah-to-abu-dhabi",
                label: "Car Lift Sharjah to Abu Dhabi",
                desc: "AED 130 sharing / AED 200 private",
              },
              {
                href: "/ladies-car-lift-sharjah-to-dubai",
                label: "Ladies Car Lift",
                desc: "Female driver, ladies-only option",
              },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-emerald-300 rounded-2xl hover:shadow-md transition-all h-full"
                >
                  <span className="font-bold text-slate-900 group-hover:text-emerald-600 text-sm">
                    {label}
                  </span>
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
      <section aria-label="Book Abu Dhabi to Dubai car lift" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div
            className="flex items-center justify-center gap-0.5 mb-3"
            role="img"
            aria-label="4.9 out of 5 stars"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-white text-white" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Abu Dhabi to Dubai Car Lift Today
          </h2>
          <p className="text-emerald-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Dubai-bound seats
            fill fast — WhatsApp now to secure your morning slot.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book car lift Abu Dhabi to Dubai"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Now
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
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
