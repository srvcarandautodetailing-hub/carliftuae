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
  title: "Car Lift Dubai to Abu Dhabi – AED 650/mo | +971 54 330 8261",
  description:
    "Daily car lift from Dubai to Abu Dhabi from AED 650/month. Covers Khalifa City, Musaffah, ADNOC, Corniche & more. Salik included, GPS-tracked, 4.9★. WhatsApp +971 54 330 8261.",
  keywords:
    "car lift dubai to abu dhabi, car lift from dubai to abu dhabi, carlift dubai abu dhabi, abu dhabi to dubai car lift, daily car lift dubai abu dhabi, monthly car lift dubai to abu dhabi, shared ride dubai to abu dhabi, pick and drop dubai abu dhabi",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-dubai-to-abu-dhabi",
  },
  openGraph: {
    title: "Car Lift Dubai to Abu Dhabi – AED 650/mo | +971 54 330 8261",
    description:
      "Daily car lift Dubai to Abu Dhabi from AED 650/month. Khalifa City, Musaffah, ADNOC, Corniche. Salik included, GPS-tracked. WhatsApp +971 54 330 8261.",
  },
};

const PAGE_FAQS = [
  {
    question: "How much does a car lift from Dubai to Abu Dhabi cost per month?",
    answer:
      "Monthly car lift from Dubai to Abu Dhabi starts at AED 650/month from Discovery Gardens and JLT — the areas closest to Abu Dhabi. Business Bay and Downtown Dubai are AED 720/month. Deira and Bur Dubai are AED 780/month, and Silicon Oasis is AED 800/month. All prices include Salik tolls on Sheikh Zayed Road (E11). No hidden charges.",
  },
  {
    question: "How long does the journey from Dubai to Abu Dhabi take?",
    answer:
      "The trip from Discovery Gardens or JLT to Khalifa City takes approximately 75–95 minutes via E11 (Sheikh Zayed Road). From Business Bay to Abu Dhabi city centre it is 90–110 minutes. Our 6:00 AM and 6:30 AM departures are the fastest — roads are clear before 7 AM. The 7:30–8:00 AM slot can take up to 120 minutes during peak hours on E11.",
  },
  {
    question: "Which areas in Abu Dhabi does the car lift serve?",
    answer:
      "We serve Khalifa City A & B, Musaffah (M1–M44), ADNOC headquarters area (Al Muroor), Abu Dhabi Corniche, Hamdan Street, Al Reem Island, Tourist Club Area, Airport Road, Zayed Sports City, Al Khalidiyah, Al Bateen, Yas Island, and industrial areas. WhatsApp us your office building for exact confirmation.",
  },
  {
    question: "Which Dubai areas are covered for pickup?",
    answer:
      "We pick up from Discovery Gardens, JLT (Jumeirah Lakes Towers), Dubai Marina, JVC, Al Barsha, Business Bay, Downtown Dubai, DIFC, Deira, Bur Dubai, Al Quoz, Al Mankhool, Karama, Silicon Oasis, Dubai Investment Park, and more. Share your building name on WhatsApp and we will confirm your slot.",
  },
  {
    question: "Is a ladies-only car lift from Dubai to Abu Dhabi available?",
    answer:
      "Yes. A ladies-only car lift from Dubai to Abu Dhabi is available — either a female driver or a ladies-only vehicle with all female passengers. Same monthly price applies. WhatsApp us to arrange the ladies option when booking.",
  },
  {
    question: "What route does the car lift take between Dubai and Abu Dhabi?",
    answer:
      "Most trips use E11 (Sheikh Zayed Road) — the direct highway connecting Dubai to Abu Dhabi with the shortest driving time. JVC and Al Barsha passengers join via Al Khail Road onto SZR. Silicon Oasis passengers use E311 (Emirates Road) to connect to E11 near Jebel Ali. All Salik gates on the route are included in the monthly price.",
  },
  {
    question: "Do you offer one-way or daily car lift Dubai to Abu Dhabi?",
    answer:
      "Yes. We offer both morning-only (Dubai to Abu Dhabi), evening-only (Abu Dhabi back to Dubai), and full return daily service. The return round-trip monthly package is the best value. Contact us on WhatsApp for single-direction or flexible-day packages.",
  },
  {
    question: "Can companies book corporate car lift from Dubai to Abu Dhabi for staff?",
    answer:
      "Yes. We offer dedicated corporate car lift packages for companies with staff commuting between Dubai and Abu Dhabi — flat monthly billing, priority booking, dedicated vehicle, HR reporting. Call or WhatsApp +971 54 330 8261 for a corporate quote.",
  },
];

const TIMINGS = [
  {
    label: "Dubai → Abu Dhabi (Morning)",
    times: ["6:00 AM", "6:30 AM", "7:00 AM", "7:30 AM"],
    color: "bg-amber-600",
  },
  {
    label: "Abu Dhabi → Dubai (Evening)",
    times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"],
    color: "bg-slate-800",
  },
];

const DUBAI_PICKUP_AREAS = [
  "Discovery Gardens",
  "JLT (Jumeirah Lakes Towers)",
  "Dubai Marina",
  "JVC (Jumeirah Village Circle)",
  "Al Barsha",
  "Business Bay",
  "Downtown Dubai",
  "DIFC",
  "Deira",
  "Bur Dubai / Karama",
  "Al Quoz / Al Mankhool",
  "Silicon Oasis",
  "Dubai Investment Park",
  "Al Furjan",
];

const ABU_DHABI_DESTINATIONS = [
  "Khalifa City A & B",
  "Musaffah (M1–M44)",
  "ADNOC Headquarters",
  "Abu Dhabi Corniche",
  "Hamdan Street",
  "Al Reem Island",
  "Tourist Club Area",
  "Airport Road",
  "Zayed Sports City",
  "Al Khalidiyah / Al Bateen",
  "Yas Island",
  "ICAD (Industrial City)",
];

const PRICING_AREAS = [
  { area: "Discovery Gardens / JLT", price: "AED 650", note: "Closest to AD" },
  { area: "Dubai Marina / JVC", price: "AED 680", note: "" },
  { area: "Al Barsha / Al Furjan", price: "AED 700", note: "" },
  { area: "Business Bay / Downtown", price: "AED 720", note: "" },
  { area: "Deira / Bur Dubai / Karama", price: "AED 780", note: "" },
  { area: "Silicon Oasis / DIP", price: "AED 800", note: "Farther zone" },
];

const COST_COMPARISON = [
  { item: "Fuel (Dubai–Abu Dhabi roundtrip × 26 days)", driving: "AED 2,080", carlift: "—" },
  { item: "Salik on E11 (4–6 gates roundtrip)", driving: "AED 832", carlift: "Included" },
  { item: "Abu Dhabi parking (monthly)", driving: "AED 400", carlift: "—" },
  { item: "Vehicle wear & depreciation", driving: "AED 600", carlift: "—" },
  { item: "Total monthly cost", driving: "AED 3,912+", carlift: "AED 650", highlight: true },
];

const SERVICES = [
  {
    icon: Car,
    title: "Daily Car Lift",
    desc: "Fixed morning and evening rides Monday to Saturday. Reserved seat — no booking every day.",
  },
  {
    icon: Users,
    title: "Ladies-Only Option",
    desc: "Female driver or all-female vehicle available. Comfortable, safe, private ride to Abu Dhabi.",
  },
  {
    icon: Briefcase,
    title: "Corporate Staff Transport",
    desc: "Dedicated vehicles for company teams. Monthly billing, HR reporting, priority service.",
  },
  {
    icon: Building2,
    title: "ADNOC & Government",
    desc: "Specialist routes to ADNOC HQ, Abu Dhabi government offices, and free zone hubs.",
  },
];

export default function CarLiftDubaiToAbuDhabiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book car lift from Dubai to Abu Dhabi."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Dubai to Abu Dhabi",
      description:
        "Daily car lift from Dubai to Abu Dhabi covering Khalifa City, Musaffah, ADNOC, Corniche, and all major Abu Dhabi areas. Monthly packages from AED 650/month via E11. Salik included, GPS-tracked.",
      url: "/car-lift-dubai-to-abu-dhabi",
      price: "650",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Dubai to Abu Dhabi", url: "/car-lift-dubai-to-abu-dhabi" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/routes/carlift-sheikh-zayed-road-dropoff.webp",
      pageUrl: "/car-lift-dubai-to-abu-dhabi",
      caption: "Car lift on Sheikh Zayed Road E11 — daily Dubai to Abu Dhabi commute",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #451a03 100%)" }}
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
              { label: "Car Lift Dubai to Abu Dhabi" },
            ]}
            className="mb-6 [&_*]:text-amber-400 [&_a]:text-amber-300 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                From AED 650/month · E11 Route · All Salik Included
              </div>
              <h1
                id="hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                Car Lift Dubai to<br className="hidden sm:block" /> Abu Dhabi – Daily
              </h1>
              <p className="text-amber-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared car lift from all major Dubai areas to Khalifa City, Musaffah, ADNOC,
                Abu Dhabi Corniche, Al Reem Island, Yas Island, and more. Via E11 Sheikh Zayed Road
                — the fastest Dubai–Abu Dhabi route.
              </p>
              <p className="text-amber-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                Driving yourself from Dubai to Abu Dhabi costs AED 3,900+/month in fuel, Salik, and
                parking. Our monthly car lift starts at AED 650 — all tolls included, door-to-area
                service.
              </p>
              <ul
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
                role="list"
                aria-label="Key route stats"
              >
                {[
                  { icon: DollarSign, label: "From AED 650", sub: "/month" },
                  { icon: Clock, label: "75–110 min", sub: "Journey Time" },
                  { icon: Car, label: "E11 Route", sub: "Sheikh Zayed Rd" },
                  { icon: Users, label: "Ladies Option", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li
                    key={sub}
                    className="bg-white/10 border border-white/15 rounded-xl p-4 text-center"
                  >
                    <Icon
                      className="h-5 w-5 text-amber-400 mx-auto mb-1.5"
                      aria-hidden="true"
                    />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-amber-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Book car lift Dubai to Abu Dhabi via WhatsApp"
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
                <CheckCircle className="h-5 w-5 text-amber-400" aria-hidden="true" />
                What&apos;s Included
              </p>
              <ul className="space-y-3" role="list">
                {[
                  "Morning & evening return rides",
                  "All Salik tolls on E11 included",
                  "GPS-tracked vehicle",
                  "Verified UAE driver",
                  "Air-conditioned vehicle",
                  "WhatsApp support 24/7",
                  "Ladies-only option available",
                  "Reserved monthly seat",
                  "No contract, cancel anytime",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 text-amber-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-amber-100 text-sm">{item}</span>
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
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              All Services Covered
            </p>
            <h2
              id="services-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Car Lift Services Dubai to Abu Dhabi
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              From individual daily commuters to full corporate staff transport — we cover every
              Dubai–Abu Dhabi travel need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border-slate-200 hover:border-amber-300 transition-colors">
                <CardContent className="p-5 pt-5">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                    <Icon className="h-5 w-5 text-amber-600" aria-hidden="true" />
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
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Real Monthly Savings
            </p>
            <h2
              id="cost-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Driving Dubai–Abu Dhabi Costs AED 3,900+/Month
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              The 140km roundtrip adds up fast. E11 has multiple Salik gates, fuel costs are high,
              and Abu Dhabi parking is not cheap either.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden max-w-2xl mx-auto mb-8">
            <table
              className="w-full text-sm"
              aria-label="Cost comparison Dubai–Abu Dhabi driving vs car lift"
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
                Save AED 3,200/Month – WhatsApp Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Daily Schedule
            </p>
            <h2
              id="timings-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Dubai to Abu Dhabi Car Lift Timings
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Fixed departure slots Monday to Saturday. Choose your preferred timing — your seat is
              reserved every working day.
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
          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-5 pt-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-600 flex items-center justify-center shrink-0">
                  <Shield className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-amber-900 text-sm mb-1">
                    Why Book the 6:00 AM Departure?
                  </p>
                  <p className="text-amber-700 text-xs leading-relaxed">
                    E11 (Sheikh Zayed Road) is clear before 7 AM. The 6:00 AM slot from JLT reaches
                    Khalifa City in under 80 minutes. The 7:30 AM slot can take 100–120 minutes in
                    peak traffic — same price, longer ride.
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
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Full Route Coverage
            </p>
            <h2
              id="areas-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Pickup in Dubai · Drop-off Across Abu Dhabi
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              We cover all major Dubai residential areas and every major Abu Dhabi employment and
              residential hub.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-500" aria-hidden="true" />
                Dubai Pickup Areas (14 zones)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none" role="list">
                {DUBAI_PICKUP_AREAS.map((area) => (
                  <li
                    key={area}
                    className="flex items-center gap-2.5 bg-white border border-slate-200 rounded-xl px-3 py-2.5"
                  >
                    <CheckCircle className="h-4 w-4 text-amber-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs italic mt-3">
                Not listed? WhatsApp us — we cover all of Dubai.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-emerald-500" aria-hidden="true" />
                Abu Dhabi Destination Areas (12 zones)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none" role="list">
                {ABU_DHABI_DESTINATIONS.map((area) => (
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
                Abu Dhabi Free Zones, hospitals, and government offices also covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Transparent Pricing
            </p>
            <h2
              id="pricing-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Monthly Car Lift Rates – Dubai to Abu Dhabi
            </h2>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Price depends on your Dubai pickup location — Abu Dhabi drop-off area does not change
              the price. All Salik tolls included.
            </p>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table
              className="w-full text-sm"
              aria-label="Car lift Dubai to Abu Dhabi pricing by pickup area"
            >
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">
                    Dubai Pickup Area
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">
                    Monthly Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_AREAS.map((row, i) => (
                  <tr key={row.area} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">
                      {row.area}
                      {row.note && (
                        <span className="ml-2 text-xs text-slate-400">({row.note})</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right font-extrabold text-amber-600">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Card className="border-sky-200 bg-sky-50 mb-6">
            <CardContent className="p-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-sky-600 flex items-center justify-center shrink-0">
                  <Shield className="h-4 w-4 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-sky-900 text-sm mb-1">All E11 Salik Tolls Included</p>
                  <p className="text-sky-700 text-xs leading-relaxed">
                    Sheikh Zayed Road (E11) has 3–4 Salik gates between Dubai and Abu Dhabi. Every gate
                    is covered in your monthly price. Zero hidden toll charges.
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
            <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Dubai to Abu Dhabi Car Lift – Common Questions
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
                href: "/car-lift-from-sharjah-to-business-bay",
                label: "Car Lift Sharjah to Business Bay",
                desc: "Full route guide & pricing",
              },
              {
                href: "/car-lift-ajman-to-dubai",
                label: "Car Lift Ajman to Dubai",
                desc: "Ajman→Business Bay from AED 420",
              },
              {
                href: "/ladies-car-lift-sharjah-to-dubai",
                label: "Ladies Car Lift",
                desc: "Female driver, ladies-only option",
              },
              {
                href: "/services/corporate-transport",
                label: "Corporate Transport",
                desc: "Staff transport packages for companies",
              },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-amber-300 rounded-2xl hover:shadow-md transition-all h-full"
                >
                  <span className="font-bold text-slate-900 group-hover:text-amber-600 text-sm">
                    {label}
                  </span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-amber-500 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book Dubai to Abu Dhabi car lift" className="py-14 bg-amber-700">
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
            Book Your Dubai to Abu Dhabi Car Lift Today
          </h2>
          <p className="text-amber-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Car Lift UAE. Abu Dhabi seats are limited —
            WhatsApp now to secure yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-amber-700 hover:bg-amber-50 font-bold"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book car lift Dubai to Abu Dhabi"
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
