import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  MessageCircle,
  Phone,
  ChevronDown,
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  Car,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import FleetGallery from "@/components/sections/fleet-gallery";
import {
  localBusinessSchema,
  faqSchema,
  breadcrumbSchema,
  serviceSchema,
  primaryImageOfPageSchema,
  speakableSchema,
  imageObjectSchema,
} from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";
import { FLEET_PHOTOS } from "@/data/fleet";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Daily Car Lift Dubai – Guaranteed Seat",
  description:
    "Daily car lift in Dubai: guaranteed seat every working day, no daily booking. Ajman→Dubai & Abu Dhabi→Dubai routes. WhatsApp +971 54 330 8261.",
  keywords:
    "daily car lift dubai, daily car lift dubai to abu dhabi, dubai daily commute car lift, guaranteed seat car lift dubai",
  alternates: { canonical: "https://www.carliftuae.com/daily-car-lift-dubai" },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, UAE",
  },
  openGraph: {
    title: "Daily Car Lift Dubai – Guaranteed Seat | +971 54 330 8261",
    description:
      "Guaranteed daily seat to Dubai. Ajman & Abu Dhabi routes. WhatsApp +971 54 330 8261.",
  },
};

const DUBAI_DAILY_FLEET = FLEET_PHOTOS.filter((f) =>
  f.src.includes("toyota-camry") || f.src.includes("honda-civic-silver")
);

const PAGE_FAQS = [
  {
    question: "What is a daily car lift in Dubai?",
    answer:
      "A daily car lift gives you a guaranteed seat in a shared car every working day on a fixed route — for example Ajman to Dubai or Abu Dhabi to Dubai. You pay per trip and never book day-to-day. WhatsApp +971 54 330 8261 to reserve your seat.",
  },
  {
    question: "Which daily routes to Dubai do you operate?",
    answer:
      "Our daily Dubai routes include Ajman → Dubai (Business Bay, DIFC, JLT) at AED 130 sharing / AED 200 private, and Abu Dhabi → Dubai at AED 100 sharing / AED 200 private. Morning and evening departures run every working day.",
  },
  {
    question: "Do I have to book every day?",
    answer:
      "No. Once your daily seat is confirmed, it is yours every working day on your route. If you need to skip a day, just message us on WhatsApp the evening before.",
  },
  {
    question: "What are the daily car lift timings to Dubai?",
    answer:
      "Morning departures typically leave between 6:00 AM and 8:30 AM depending on your pickup area, with evening returns between 5:00 PM and 7:30 PM. Exact timings are confirmed on WhatsApp when you book.",
  },
];

const DAILY_ROUTES = [
  {
    href: "/car-lift-ajman-to-dubai",
    from: "Ajman",
    to: "Dubai",
    areas: "Business Bay · DIFC · JLT",
    sharing: "AED 130",
    private: "AED 200",
  },
  {
    href: "/car-lift-abu-dhabi-to-dubai",
    from: "Abu Dhabi",
    to: "Dubai",
    areas: "Business Bay · DIFC · JLT · Marina",
    sharing: "AED 100",
    private: "AED 200",
  },
];

export default function DailyCarLiftDubaiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want a guaranteed daily seat on a car lift to Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Daily Car Lift Dubai",
      description:
        "Guaranteed daily car lift seat to Dubai from Ajman and Abu Dhabi. No daily booking, fixed per-trip fares.",
      url: "/daily-car-lift-dubai",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Daily Car Lift Dubai", url: "/daily-car-lift-dubai" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp",
      pageUrl: "/daily-car-lift-dubai",
      caption: "Daily car lift Dubai – guaranteed seat in our fleet cars every working day",
    }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
    ...imageObjectSchema(DUBAI_DAILY_FLEET),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      {/* ── Hero ── */}
      <section
        aria-labelledby="daily-dubai-hero"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
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
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Daily Car Lift Dubai" }]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Every working day · Guaranteed seat
          </div>
          <h1
            id="daily-dubai-hero"
            className="speakable-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Daily Car Lift Dubai – Your Guaranteed Seat, Every Day
          </h1>
          <p className="speakable-desc text-blue-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Stop booking rides every morning. Our daily car lift gives Dubai commuters
            a guaranteed seat every working day — Ajman to Dubai from AED 130 sharing,
            Abu Dhabi to Dubai from AED 100 sharing. Same driver, same timing, no
            daily hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="whatsapp" size="lg" className="min-h-[52px]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reserve daily car lift seat via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Reserve My Seat
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="min-h-[52px] border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Daily routes ── */}
      <section aria-labelledby="daily-routes-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Daily Routes
            </p>
            <h2
              id="daily-routes-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Daily Car Lift Routes to Dubai
            </h2>
            <p className="text-slate-600 text-sm max-w-xl mx-auto">
              Fixed per-trip fares, morning and evening departures every working day.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none" role="list">
            {DAILY_ROUTES.map((r) => (
              <li key={r.href}>
                <Link
                  href={r.href}
                  className="group flex flex-col gap-3 p-6 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-lg transition-all h-full min-h-[120px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Car className="h-5 w-5 text-blue-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 group-hover:text-blue-600 block text-base">
                        {r.from} → {r.to} Daily
                      </span>
                      <span className="text-slate-500 text-xs">{r.areas}</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-1">
                    <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {r.sharing} sharing
                    </span>
                    <span className="bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold px-3 py-1.5 rounded-full">
                      {r.private} private
                    </span>
                  </div>
                  <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                    View route details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How daily service works ── */}
      <section aria-labelledby="how-daily-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2
              id="how-daily-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Your Daily Commute, Sorted Once
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto" role="list">
            {[
              {
                icon: MessageCircle,
                title: "1. Reserve your seat",
                desc: "WhatsApp us your pickup area and office location. We confirm your route, timing and fare.",
              },
              {
                icon: CheckCircle,
                title: "2. Ride every working day",
                desc: "Your seat is guaranteed daily — same driver, same pickup time, no rebooking.",
              },
              {
                icon: Clock,
                title: "3. Pay per trip",
                desc: "Fixed per-trip fare, paid daily or weekly. Skip a day anytime with an evening-before message.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Fleet ── */}
      <FleetGallery
        photos={DUBAI_DAILY_FLEET}
        heading="The Cars Behind Your Daily Commute"
        subheading="Real vehicles from our Dubai daily car lift fleet."
        id="fleet-daily-dubai"
      />

      {/* ── Why daily ── */}
      <section aria-labelledby="why-daily-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Daily
            </p>
            <h2
              id="why-daily-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Why Commuters Choose Daily Car Lift
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto" role="list">
            {[
              {
                icon: Shield,
                title: "No daily booking stress",
                desc: "One reservation covers every working day. Your morning starts without a booking scramble.",
              },
              {
                icon: CheckCircle,
                title: "Fixed, honest fares",
                desc: "AED 100–130 sharing per trip depending on route. The fare never surges in rush hour.",
              },
              {
                icon: Clock,
                title: "Punctual pickups",
                desc: "Same driver and same timing daily means your commute runs like clockwork.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="daily-faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="daily-faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Daily Car Lift Dubai – Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden min-h-[56px]">
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

      {/* ── Final CTA ── */}
      <section aria-label="Reserve daily car lift Dubai" className="py-14 bg-blue-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <CalendarCheck className="h-8 w-8 text-blue-200 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Reserve Your Daily Seat to Dubai
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            Ajman → Dubai from AED 130 sharing · Abu Dhabi → Dubai from AED 100 sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold min-h-[56px]"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Reserve daily car lift seat via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Reserve Seat
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="min-h-[56px] border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
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
