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
  Landmark,
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
  title: "Bus Car Lift Service Sharjah via Sheikh Zayed Road – Business Bay, DIFC, JLT | Carlift UAE",
  description:
    "Bus car lift from Sharjah via Sheikh Zayed Road. Covers Business Bay, DIFC, JLT, Dubai Marina, Media City. From AED 300/month. Salik included, GPS-tracked. Book via WhatsApp.",
  keywords:
    "bus car lift service sharjah sheikh zayed, car lift sharjah sheikh zayed road, sharjah to sheikh zayed road car lift, sharjah to difc car lift, sharjah to jlt car lift, sharjah to dubai marina car lift",
  alternates: {
    canonical: "https://www.carliftuae.com/bus-car-lift-service-from-sharjah-sheikh-zayed",
  },
  openGraph: {
    title: "Bus Car Lift from Sharjah via Sheikh Zayed Road – DIFC, Business Bay, JLT",
    description:
      "Daily shared car lift from Sharjah via SZR to Business Bay, DIFC, JLT, Dubai Marina, Media City. AED 300–450/month. Salik included.",
    images: [{ url: "https://www.carliftuae.com/opengraph-image", width: 1200, height: 630, alt: "Car Lift Sharjah Sheikh Zayed Road" }],
  },
};

const PAGE_FAQS = [
  {
    question: "What is bus car lift service from Sharjah via Sheikh Zayed Road?",
    answer:
      "It is a daily shared car lift (4–6 passengers) from Sharjah that travels via Sheikh Zayed Road (SZR / E11) to reach Dubai commercial zones — Business Bay, DIFC, Downtown Dubai, JLT, Al Qouz, Dubai Marina, and Media City. It is faster than public buses, cheaper than private taxis, and door-to-office service.",
  },
  {
    question: "Which Dubai areas does the Sharjah Sheikh Zayed Road car lift cover?",
    answer:
      "The SZR car lift service covers: Business Bay, DIFC (Dubai International Financial Centre), Downtown Dubai, JLT (Jumeirah Lakes Towers), Al Qouz Industrial Area, Dubai Marina, Media City, Internet City, Tecom, Knowledge Village, and Al Barsha. Confirm your specific area when booking.",
  },
  {
    question: "How much does car lift from Sharjah via Sheikh Zayed Road cost?",
    answer:
      "Monthly car lift from Sharjah via SZR costs AED 300–450/month depending on your Sharjah pickup area and Dubai destination. Business Bay/DIFC from Al Nahda is AED 300–320/month. JLT/Marina destinations are AED 380–450/month due to the longer route. All prices include Salik tolls.",
  },
  {
    question: "What time does the car lift from Sharjah via Sheikh Zayed depart?",
    answer:
      "Morning departures from Sharjah via SZR: 6:30 AM, 7:00 AM, 7:30 AM, and 8:00 AM. Evening returns from Dubai destinations to Sharjah: 5:00 PM, 5:30 PM, 6:00 PM, and 6:30 PM.",
  },
  {
    question: "Does car lift from Sharjah via Sheikh Zayed Road include Salik?",
    answer:
      "Yes. All Salik tolls on Sheikh Zayed Road and other routes are fully included in the monthly and daily prices. You pay one flat rate — no additional toll charges ever.",
  },
  {
    question: "How long is the car lift journey from Sharjah to DIFC via Sheikh Zayed Road?",
    answer:
      "The journey from Sharjah to DIFC via Sheikh Zayed Road takes 45–70 minutes depending on traffic and your Sharjah pickup area. The 6:30 AM departure typically reaches DIFC in 45–55 minutes. The 7:30–8:00 AM slot can take 65–75 minutes during peak hours.",
  },
  {
    question: "Can I get a car lift from Sharjah to JLT or Dubai Marina via SZR?",
    answer:
      "Yes. We offer car lift from Sharjah to JLT (Jumeirah Lakes Towers) and Dubai Marina via Sheikh Zayed Road. Monthly price from Sharjah Al Nahda to JLT is approximately AED 380–420/month. WhatsApp us for an exact quote based on your pickup area.",
  },
  {
    question: "Is there a ladies-only car lift from Sharjah via Sheikh Zayed Road?",
    answer:
      "Yes. We offer a ladies-only car lift from Sharjah via Sheikh Zayed Road with a female driver available on request. The vehicle is exclusively for female passengers and the route can go to any Dubai destination on or near SZR.",
  },
  {
    question: "Which Sharjah areas does the Sheikh Zayed Road car lift pick up from?",
    answer:
      "We pick up from Al Nahda (Sharjah), Al Taawun, Al Khan, Al Majaz, Muweilah, University City, Rolla, and all other Sharjah areas. WhatsApp us with your location for the nearest pickup point.",
  },
];

const SZR_DESTINATIONS = [
  { name: "Business Bay", desc: "Financial & residential hub", time: "45–55 min" },
  { name: "DIFC", desc: "Dubai International Financial Centre", time: "50–60 min" },
  { name: "Downtown Dubai", desc: "Burj Khalifa area offices", time: "50–65 min" },
  { name: "JLT", desc: "Jumeirah Lakes Towers", time: "55–70 min" },
  { name: "Al Qouz", desc: "Industrial & media offices", time: "60–75 min" },
  { name: "Dubai Marina", desc: "Marina offices & residences", time: "65–80 min" },
  { name: "Media City / Internet City", desc: "Tech & media companies", time: "65–80 min" },
  { name: "Tecom / Al Barsha", desc: "Knowledge Village area", time: "60–75 min" },
];

const SHARJAH_PICKUPS = [
  "Al Nahda (Sharjah)",
  "Al Taawun",
  "Al Khan",
  "Al Majaz",
  "Muweilah",
  "University City",
  "Al Zahia",
  "Rolla Area",
];

export default function BusCarLiftSharjahSheikhZayedPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book car lift from Sharjah via Sheikh Zayed Road."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Bus Car Lift Service from Sharjah via Sheikh Zayed Road",
      description:
        "Daily shared car lift from Sharjah via Sheikh Zayed Road to Business Bay, DIFC, JLT, Dubai Marina, and Media City. Monthly packages from AED 300/month.",
      url: "/bus-car-lift-service-from-sharjah-sheikh-zayed",
      price: "300",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Bus Car Lift Service from Sharjah – Sheikh Zayed Road", url: "/bus-car-lift-service-from-sharjah-sheikh-zayed" },
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
            items={[
              { label: "Home", href: "/" },
              { label: "Bus Car Lift Sharjah – Sheikh Zayed Road" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Sharjah &rarr; Sheikh Zayed Road &rarr; Business Bay · DIFC · JLT · Marina
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Bus Car Lift Service from Sharjah via Sheikh Zayed Road
              </h1>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                Daily shared car lift from Sharjah to multiple Dubai destinations via Sheikh Zayed Road (SZR).
                Business Bay, DIFC, JLT, Dubai Marina, Media City — all covered.
                Salik included, GPS-tracked, verified drivers.
              </p>

              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list">
                {[
                  { icon: DollarSign, label: "From AED 300", sub: "/month" },
                  { icon: Clock, label: "45–80 min", sub: "Journey time" },
                  { icon: Landmark, label: "8 Areas", sub: "Dubai covered" },
                  { icon: Car, label: "4 Timings", sub: "Daily morning" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah Sheikh Zayed Road via WhatsApp">
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
                  "Salik tolls on SZR included",
                  "GPS-tracked vehicle",
                  "Verified UAE driver",
                  "Air-conditioned vehicle",
                  "Multiple Dubai destinations",
                  "Ladies car lift available",
                  "Monthly or daily options",
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

      {/* ── Dubai Destinations via SZR ───────────────────────────────────── */}
      <section aria-labelledby="destinations-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="destinations-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Dubai Destinations Covered via Sheikh Zayed Road
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Our SZR car lift from Sharjah covers all major Dubai commercial areas along and near Sheikh Zayed Road.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {SZR_DESTINATIONS.map((dest) => (
              <li key={dest.name} className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{dest.name}</h3>
                    <p className="text-slate-500 text-xs">{dest.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-600">
                  <Clock className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
                  <span>{dest.time} from Sharjah</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-center text-slate-500 text-xs mt-6">
            Don&apos;t see your area? WhatsApp us — if it&apos;s near Sheikh Zayed Road, we likely cover it.
          </p>
        </div>
      </section>

      {/* ── Timings + Pickup ─────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
              <h2 id="timings-heading" className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                Departure Times from Sharjah
              </h2>
              <div className="space-y-4">
                <Card className="border-slate-200">
                  <CardContent className="p-5 pt-5">
                    <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      Sharjah &rarr; Dubai (Morning)
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"].map((t) => (
                        <div key={t} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <p className="font-extrabold text-slate-900 text-xl">{t}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-slate-200">
                  <CardContent className="p-5 pt-5">
                    <h3 className="font-bold text-slate-900 text-sm mb-4 flex items-center gap-2">
                      <Clock className="h-4 w-4 text-slate-700" aria-hidden="true" />
                      Dubai &rarr; Sharjah (Evening)
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"].map((t) => (
                        <div key={t} className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <p className="font-extrabold text-slate-900 text-xl">{t}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Pickup Locations</p>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
                Pickup Areas in Sharjah
              </h2>
              <ul className="space-y-3 list-none" role="list">
                {SHARJAH_PICKUPS.map((area) => (
                  <li key={area} className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-sm">
                    <MapPin className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
              <p className="text-slate-500 text-xs mt-3 italic">
                We cover all Sharjah areas. WhatsApp us with your location.
              </p>
              <Button asChild variant="whatsapp" size="default" className="mt-5 w-full">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Confirm My Pickup Point
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Prices – Sharjah via Sheikh Zayed Road
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto text-sm">
              Price depends on your Sharjah area and Dubai destination. All prices include Salik on SZR.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
            {[
              { destination: "Business Bay / DIFC", price: "AED 300–350", note: "Most popular route", popular: true },
              { destination: "JLT / Al Qouz", price: "AED 380–420", note: "Via SZR south", popular: false },
              { destination: "Dubai Marina / Media City", price: "AED 420–450", note: "Longer route", popular: false },
            ].map(({ destination, price, note, popular }) => (
              <Card key={destination} className={`border-2 ${popular ? "border-blue-600 shadow-md" : "border-slate-200"} relative`}>
                {popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
                  </div>
                )}
                <CardContent className={`p-5 ${popular ? "pt-8" : "pt-5"} text-center`}>
                  <p className="text-slate-600 text-xs font-semibold mb-2">{destination}</p>
                  <p className="text-3xl font-extrabold text-emerald-600 mb-1">{price}</p>
                  <p className="text-slate-500 text-xs mb-4">/person/month · Salik included</p>
                  <p className="text-slate-400 text-xs italic">{note}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="whatsapp" size="lg">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Get Your Exact Quote via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift from Sharjah via Sheikh Zayed Road – Questions
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

      {/* ── Internal links ────────────────────────────────────────────────── */}
      <section aria-label="Related routes" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Other Car Lift Routes from Sharjah</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-from-sharjah-to-business-bay", label: "Car Lift from Sharjah to Business Bay", desc: "Detailed guide, pricing by area" },
              { href: "/bus-car-lift-sharjah-to-business-bay", label: "Bus Car Lift Sharjah to Business Bay", desc: "Shared bus-style service" },
              { href: "/carlift-sharjah-to-dubai-business-bay", label: "Carlift Sharjah to Dubai", desc: "Overview of all Dubai routes" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-md transition-all h-full">
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
      <section aria-label="Book car lift CTA" className="py-14 bg-blue-600">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your Sharjah Car Lift via Sheikh Zayed Road
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily commuters trust Car Lift UAE. Secure your monthly seat — seats fill fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
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
