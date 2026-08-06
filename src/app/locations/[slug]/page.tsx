import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Car,
  DollarSign,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MessageCircle,
  ChevronDown,
  Navigation,
  TrainFront,
  Landmark,
  BadgeCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/schema";
import { LOCATIONS, getLocationBySlug } from "@/data/locations";
import { TESTIMONIALS } from "@/data/testimonials";
import { FAQS } from "@/data/faqs";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};
  return {
    title: `Car Lift ${location.name} – Daily Rides to Business Bay & Dubai | Car Lift UAE`,
    description:
      location.description +
      ` Book monthly from AED ${location.monthlyPrice}. GPS tracked, verified drivers.`,
    keywords: location.keywords.join(", "),
    alternates: {
      canonical: `https://www.carlift.ae/locations/${location.slug}`,
    },
    openGraph: {
      title: `Car Lift ${location.name} to Business Bay – AED ${location.monthlyPrice}/month`,
      description: location.description,
      images: [
        {
          url: `https://www.carlift.ae/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `Car Lift from ${location.name} to Business Bay`,
        },
      ],
    },
  };
}

// ─── What makes this route popular ──────────────────────────────────────────

const ROUTE_BENEFITS = [
  "Salik tolls fully included in the monthly price",
  "Fixed pickup point — just show up on time",
  "Verified, background-checked drivers every day",
  "Real-time GPS tracking on all vehicles",
  "Air-conditioned, well-maintained vehicles",
  "Morning and evening service, 6 days a week",
  "WhatsApp booking — no app required",
  "Dedicated driver for monthly package holders",
];

// ─── Generic FAQs (3 from master list) ──────────────────────────────────────

const GENERIC_FAQS = FAQS.filter((f) =>
  ["Safety", "Booking", "General"].includes(f.category)
).slice(0, 3);

// ─── Emirate badge styles ────────────────────────────────────────────────────

type Emirate = "sharjah" | "dubai" | "ajman";

const emirateBadgeClass: Record<Emirate, string> = {
  sharjah: "bg-blue-100 text-blue-700",
  dubai:   "bg-emerald-100 text-emerald-700",
  ajman:   "bg-purple-100 text-purple-700",
};

const emirateLabel: Record<Emirate, string> = {
  sharjah: "Sharjah",
  dubai:   "Dubai",
  ajman:   "Ajman",
};

// ─── Page ───────────────────────────────────────────────────────────────────

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  // Daily rate: monthlyPrice / 26 working days, rounded to nearest integer
  const dailyRate = Math.round(location.monthlyPrice / 26);

  // Savings vs driving (fuel + parking + Salik ≈ AED 1200/month)
  const monthlySaving = 1200 - location.monthlyPrice;

  // 4 related locations from same emirate, excluding current
  const relatedLocations = LOCATIONS.filter(
    (l) => l.emirate === location.emirate && l.slug !== slug
  ).slice(0, 4);

  // 3 testimonials — pick evenly spaced for variety
  const testimonials = [
    TESTIMONIALS[0],
    TESTIMONIALS[2],
    TESTIMONIALS[5],
  ].filter(Boolean);

  // WhatsApp with pre-filled message
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi, I need car lift from ${location.name} to Business Bay`
  );

  const phoneHref = formatPhoneHref(BUSINESS.phone);

  // All FAQs for schema: location-specific + generic
  const allFaqs = [
    ...location.faqs,
    ...GENERIC_FAQS.map((f) => ({ question: f.question, answer: f.answer })),
  ];

  // Structured data schemas
  const schemas = [
    localBusinessSchema({
      name: `${BUSINESS.name} – ${location.name}`,
      description: location.description,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.lat,
        longitude: location.coordinates.lng,
      },
    }),
    faqSchema(allFaqs),
    breadcrumbSchema([
      { name: "Home",      url: "/" },
      { name: "Locations", url: "/locations" },
      { name: location.name, url: `/locations/${slug}` },
    ]),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ═══════════════════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="location-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
        }}
      >
        {/* Dot grid */}
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
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Home",      href: "/" },
              { label: "Locations", href: "/locations" },
              { label: location.name },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            {/* Left: heading + stats + CTAs */}
            <div className="flex-1">
              {/* Emirate badge */}
              <span
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${emirateBadgeClass[location.emirate]}`}
              >
                {emirateLabel[location.emirate]}
              </span>

              <h1
                id="location-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                Car Lift {location.name} – Daily Rides to Business Bay
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                {location.description}
              </p>

              {/* Route pill */}
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm text-white font-medium mb-6">
                <Navigation className="h-4 w-4 text-blue-400" aria-hidden="true" />
                {location.name}
                <ArrowRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                Business Bay
              </div>

              {/* Key stats row */}
              <ul
                className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8"
                role="list"
                aria-label="Route key statistics"
              >
                <li className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                  <MapPin className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-white font-extrabold text-lg leading-none">
                    {location.distance}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Distance</p>
                </li>
                <li className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                  <Clock className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-white font-extrabold text-lg leading-none">
                    {location.drivingTime}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Drive Time</p>
                </li>
                <li className="bg-emerald-500/20 border border-emerald-400/30 rounded-xl p-4 text-center">
                  <DollarSign className="h-5 w-5 text-emerald-400 mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-emerald-300 font-extrabold text-lg leading-none">
                    AED {location.monthlyPrice}
                  </p>
                  <p className="text-emerald-400/70 text-xs mt-1">/month</p>
                </li>
                <li className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                  <Car className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                  <p className="text-white font-extrabold text-lg leading-none">
                    {location.pickupPoints.length}
                  </p>
                  <p className="text-slate-400 text-xs mt-1">Pickup Points</p>
                </li>
              </ul>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book car lift from ${location.name} via WhatsApp`}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Book Car Lift from {location.name}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <a
                    href={phoneHref}
                    aria-label={`Call ${BUSINESS.name}`}
                  >
                    <Phone className="h-5 w-5" aria-hidden="true" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: what's included card */}
            <aside
              className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0"
              aria-label="What's included"
            >
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
                  "WhatsApp support",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 text-emerald-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          2. ABOUT THIS ROUTE
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="about-route-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Description */}
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                About This Route
              </p>
              <h2
                id="about-route-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-5"
              >
                Car Lift Service from {location.name}
              </h2>
              <p className="text-slate-600 leading-relaxed text-base mb-6">
                {location.longDescription}
              </p>

              {/* What makes it popular */}
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Why Professionals Choose This Route
              </h3>
              <ul className="space-y-2.5" role="list">
                {ROUTE_BENEFITS.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Route details card */}
            <div>
              <Card className="border-slate-200 shadow-sm">
                <CardContent className="p-6 pt-6">
                  <h3 className="font-bold text-slate-900 text-lg mb-5">
                    Route Details
                  </h3>
                  <dl className="space-y-4">
                    {[
                      { label: "From",        value: location.name,           icon: MapPin   },
                      { label: "To",          value: "Business Bay, Dubai",   icon: MapPin   },
                      { label: "Distance",    value: location.distance,       icon: Navigation },
                      { label: "Drive Time",  value: location.drivingTime,    icon: Clock    },
                      { label: "Monthly",     value: `AED ${location.monthlyPrice}/person`, icon: DollarSign },
                      { label: "Daily Rate",  value: `AED ${dailyRate}/trip (approx.)`,     icon: DollarSign },
                    ].map(({ label, value, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0"
                      >
                        <dt className="flex items-center gap-2 text-sm text-slate-500">
                          <Icon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                          {label}
                        </dt>
                        <dd className="text-sm font-semibold text-slate-900">
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Morning timing note */}
                  <div className="mt-5 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <p className="text-blue-800 text-xs font-semibold mb-1">
                      Departure Times (Morning)
                    </p>
                    <p className="text-blue-700 text-xs leading-relaxed">
                      6:30 AM · 7:00 AM · 7:30 AM · 8:00 AM
                      <br />
                      <span className="text-blue-500">
                        Evening return: 5:00 PM · 5:30 PM · 6:00 PM · 6:30 PM
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Savings callout */}
              <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                  <DollarSign className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-emerald-900 text-sm mb-1">
                    Save AED {monthlySaving > 0 ? monthlySaving.toLocaleString() : "850"}+/month
                  </p>
                  <p className="text-emerald-700 text-xs leading-relaxed">
                    Driving yourself from {location.name} costs ~AED 1,200/month
                    in fuel, Salik, and parking. Our car lift costs just AED{" "}
                    {location.monthlyPrice} — all in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          3. PICKUP POINTS
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="pickup-points-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Pick You Up
            </p>
            <h2
              id="pickup-points-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Pickup Points in {location.name}
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
              We currently operate from the points below. Tell us your building
              name and we&apos;ll confirm the exact meeting spot.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none mb-8"
            role="list"
          >
            {location.pickupPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3.5 shadow-sm"
              >
                <MapPin
                  className="h-5 w-5 text-blue-500 shrink-0"
                  aria-hidden="true"
                />
                <span className="text-slate-800 font-medium text-sm">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-center text-slate-500 text-xs italic">
            Don&apos;t see your building? WhatsApp us — we&apos;ll add your
            location or suggest the closest pickup point.
          </p>

          <div className="flex justify-center mt-6">
            <Button asChild variant="whatsapp" size="default">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ask about pickup points in ${location.name} via WhatsApp`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Confirm My Pickup Point
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          4. LANDMARKS & ORIENTATION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="landmarks-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Landmarks */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Landmark className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h2
                  id="landmarks-heading"
                  className="text-xl font-extrabold text-slate-900"
                >
                  Nearby Landmarks
                </h2>
              </div>
              {location.landmarks.length > 0 ? (
                <ul className="space-y-2.5" role="list">
                  {location.landmarks.map((landmark) => (
                    <li
                      key={landmark}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <MapPin
                        className="h-4 w-4 text-blue-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-slate-700 text-sm font-medium">
                        {landmark}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-500 text-sm">
                  Contact us to confirm nearby pickup landmarks.
                </p>
              )}
            </div>

            {/* Metro stations */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <TrainFront className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <h2 className="text-xl font-extrabold text-slate-900">
                  Nearby Metro Stations
                </h2>
              </div>
              {location.nearbyMetro.length > 0 ? (
                <ul className="space-y-2.5 mb-6" role="list">
                  {location.nearbyMetro.map((metro) => (
                    <li
                      key={metro}
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <TrainFront
                        className="h-4 w-4 text-slate-500 shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-slate-700 text-sm font-medium">
                        {metro}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 mb-6">
                  <p className="text-amber-800 text-sm">
                    No metro station is directly nearby — our car lift is an
                    ideal alternative to reach Business Bay without public
                    transport.
                  </p>
                </div>
              )}

              {/* Mini orientation note */}
              <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
                <p className="text-blue-800 text-sm font-semibold mb-1">
                  Door-to-Door Service
                </p>
                <p className="text-blue-700 text-xs leading-relaxed">
                  Our car lift picks you up near your home in {location.name}{" "}
                  and drops you at your Business Bay destination — no metro
                  transfers needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          5. PRICING
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="pricing-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Transparent Pricing
            </p>
            <h2
              id="pricing-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Car Lift {location.name} – Pricing
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
              No hidden charges. Salik always included. Pick the plan that suits
              your commute.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {/* Monthly shared */}
            <Card className="border-2 border-blue-600 shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge variant="default" className="text-xs px-3">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-6 pt-7 text-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">
                  Monthly Shared
                </p>
                <p className="text-4xl font-extrabold text-slate-900 mb-1">
                  AED {location.monthlyPrice}
                </p>
                <p className="text-slate-500 text-xs mb-5">/person/month</p>
                <ul className="space-y-2 text-left mb-6" role="list">
                  {[
                    "Morning + evening rides",
                    "Salik & fuel included",
                    "3–4 passengers shared",
                    "Fixed monthly pickup",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="default" size="default" className="w-full">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Book Monthly
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Daily rate */}
            <Card className="border-slate-200">
              <CardContent className="p-6 pt-6 text-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">
                  Daily Rate
                </p>
                <p className="text-4xl font-extrabold text-slate-900 mb-1">
                  AED {dailyRate}
                </p>
                <p className="text-slate-500 text-xs mb-5">/one-way trip (approx.)</p>
                <ul className="space-y-2 text-left mb-6" role="list">
                  {[
                    "Pay per trip",
                    "No monthly commitment",
                    "Salik included",
                    "Book via WhatsApp",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="default" className="w-full">
                  <a
                    href={formatWhatsAppHref(
                      BUSINESS.whatsapp,
                      `Hi, I'd like to book a daily car lift from ${location.name} to Business Bay.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Daily Ride
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* vs. driving */}
            <Card className="border-slate-200 bg-gradient-to-b from-red-50 to-white">
              <CardContent className="p-6 pt-6 text-center">
                <p className="text-slate-500 text-xs font-semibold uppercase tracking-wide mb-2">
                  Driving Yourself
                </p>
                <p className="text-4xl font-extrabold text-red-500 mb-1">
                  AED 1,200
                </p>
                <p className="text-slate-500 text-xs mb-5">/month (estimated)</p>
                <ul className="space-y-2 text-left mb-6" role="list">
                  {[
                    `Fuel: ~AED ${Math.round(location.monthlyPrice * 1.1)}`,
                    "Salik: AED 200–350",
                    "Parking B.Bay: AED 300+",
                    "Car wear & tear",
                  ].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <span className="h-4 w-4 flex items-center justify-center text-red-400 shrink-0 font-bold text-base leading-none" aria-hidden="true">
                        ✕
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                  <p className="text-emerald-800 text-xs font-bold">
                    You save AED {monthlySaving > 0 ? monthlySaving.toLocaleString() : "850"}+/month with Car Lift UAE
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-slate-500 text-sm mb-4">
              Need a private vehicle or a custom quote?
            </p>
            <Button asChild variant="outline" size="default">
              <Link href="/pricing">
                View Full Pricing Page
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          6. FAQ SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="faq-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Frequently Asked Questions – Car Lift from {location.name}
            </h2>
          </div>

          <dl className="space-y-4">
            {/* Location-specific FAQs */}
            {location.faqs.map((faq, index) => (
              <details
                key={`loc-${index}`}
                className="group border border-slate-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 sm:p-6 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown
                    className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <dd className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                  {faq.answer}
                </dd>
              </details>
            ))}

            {/* Generic FAQs from master list */}
            {GENERIC_FAQS.map((faq, index) => (
              <details
                key={`gen-${index}`}
                className="group border border-slate-200 rounded-2xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 sm:p-6 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown
                    className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <dd className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                  {faq.answer}
                </dd>
              </details>
            ))}
          </dl>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm mb-4">
              Have more questions about car lift from {location.name}?
            </p>
            <Button asChild variant="outline" size="default">
              <a
                href={formatWhatsAppHref(
                  BUSINESS.whatsapp,
                  `Hi! I have a question about car lift from ${location.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          7. REVIEWS / TESTIMONIALS
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="reviews-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What Riders Say
            </p>
            <h2
              id="reviews-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Real Reviews from Car Lift UAE Riders
            </h2>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none"
            role="list"
          >
            {testimonials.map((t) => (
              <li key={t.id}>
                <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 pt-6 flex flex-col h-full">
                    {/* Stars */}
                    <div
                      className="flex items-center gap-0.5 mb-3"
                      role="img"
                      aria-label={`${t.rating} out of 5 stars`}
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < t.rating
                              ? "fill-amber-400 text-amber-400"
                              : "fill-slate-200 text-slate-200"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Review text */}
                    <blockquote className="text-slate-700 text-sm leading-relaxed flex-1 mb-4">
                      &ldquo;{t.review}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <footer className="flex items-center gap-3 pt-4 border-t border-slate-100">
                      <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm leading-none mb-0.5">
                          {t.name}
                        </p>
                        <p className="text-slate-500 text-xs">{t.role}</p>
                        <p className="text-slate-400 text-xs flex items-center gap-1 mt-0.5">
                          <MapPin className="h-3 w-3" aria-hidden="true" />
                          {t.location}
                        </p>
                      </div>
                      {t.verified && (
                        <BadgeCheck
                          className="h-5 w-5 text-blue-500 ml-auto shrink-0"
                          aria-label="Verified rider"
                        />
                      )}
                    </footer>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>

          {/* Overall rating */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Overall rating:{" "}
              <strong className="text-slate-900">{BUSINESS.rating}★</strong>{" "}
              from{" "}
              <strong className="text-slate-900">
                {BUSINESS.reviewCount}+
              </strong>{" "}
              verified riders
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          8. RELATED LOCATIONS
      ════════════════════════════════════════════════════════════════════ */}
      {relatedLocations.length > 0 && (
        <section
          aria-labelledby="related-heading"
          className="py-16 sm:py-20 bg-white"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Explore More
              </p>
              <h2
                id="related-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
              >
                Other Car Lift Areas Near {location.name}
              </h2>
            </div>

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none"
              role="list"
            >
              {relatedLocations.map((related) => (
                <li key={related.slug}>
                  <Link
                    href={`/locations/${related.slug}`}
                    className="group flex flex-col gap-3 bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md rounded-2xl p-5 transition-all duration-200 h-full"
                    aria-label={`Car lift from ${related.name}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                        {related.name}
                      </h3>
                      <span
                        className={`shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full ${emirateBadgeClass[related.emirate]}`}
                      >
                        {emirateLabel[related.emirate]}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {related.drivingTime}
                      </span>
                      <span className="font-bold text-emerald-600">
                        AED {related.monthlyPrice}/mo
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-xs text-blue-500 font-medium mt-auto">
                      <span>View details</span>
                      <ArrowRight
                        className="h-3 w-3 group-hover:translate-x-0.5 transition-transform"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="text-center mt-8">
              <Button asChild variant="outline" size="default">
                <Link href="/locations">
                  View All Locations
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* ═══════════════════════════════════════════════════════════════════
          9. FINAL CTA
      ════════════════════════════════════════════════════════════════════ */}
      <section
        aria-labelledby="location-cta-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
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

        <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Pulsing live dot */}
          <div className="flex justify-center mb-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Seats Available Now
            </span>
          </div>

          <h2
            id="location-cta-heading"
            className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4"
          >
            Book Your Car Lift from {location.name}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Join hundreds of professionals saving time and money on the{" "}
            {location.name} to Business Bay commute. WhatsApp us to secure your
            monthly seat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild variant="whatsapp" size="xl">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book car lift from ${location.name} to Business Bay via WhatsApp`}
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
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Rating strip */}
          <div className="flex items-center justify-center gap-2">
            <div
              className="flex items-center gap-0.5"
              role="img"
              aria-label={`${BUSINESS.rating} out of 5 stars`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-white/80">
              {BUSINESS.rating}★ rated by{" "}
              <span className="text-white">{BUSINESS.reviewCount}+</span>{" "}
              satisfied riders
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
