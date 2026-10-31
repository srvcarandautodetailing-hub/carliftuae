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
  title: "Daily Car Lift Abu Dhabi",
  description:
    "Daily car lift in Abu Dhabi: guaranteed seat every working day. Dubai→Abu Dhabi AED 100 sharing, Ajman→Abu Dhabi AED 140. WhatsApp +971 54 330 8261.",
  keywords:
    "daily car lift abu dhabi, abu dhabi daily commute car lift, dubai to abu dhabi daily car lift, guaranteed seat car lift abu dhabi",
  alternates: { canonical: "https://www.carliftuae.com/daily-car-lift-abu-dhabi" },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
  },
  openGraph: {
    title: "Daily Car Lift Abu Dhabi – Seat | +971 54 330 8261",
    description:
      "Guaranteed daily seat in Abu Dhabi. Dubai & Ajman routes. WhatsApp +971 54 330 8261.",
  },
};

const ABUDHABI_DAILY_FLEET = FLEET_PHOTOS.filter((f) =>
  f.src.includes("kia-k5") || f.src.includes("white-suv")
);

const PAGE_FAQS = [
  {
    question: "How does the daily car lift to Abu Dhabi work?",
    answer:
      "You reserve a seat once, and it is yours every working day on your route — Dubai to Abu Dhabi or Ajman to Abu Dhabi. Same pickup time, same driver, fixed per-trip fare. WhatsApp +971 54 330 8261 to start.",
  },
  {
    question: "What is the daily fare from Dubai to Abu Dhabi?",
    answer:
      "AED 100 sharing / AED 200 private per trip from Dubai to Abu Dhabi. From Ajman to Abu Dhabi it is AED 140 sharing / AED 250 private. Fares are fixed — no surge pricing during rush hour.",
  },
  {
    question: "Which Abu Dhabi areas do you pick up from?",
    answer:
      "We cover Khalifa City, Mussafah, MBZ City, Al Reem Island, Corniche, Yas Island and surrounding Abu Dhabi areas. Share your exact location on WhatsApp and we confirm your pickup point.",
  },
  {
    question: "Can I pause my daily seat for holidays?",
    answer:
      "Yes. Message us on WhatsApp the evening before any day you want to skip — holidays, sick days, work-from-home days. Your seat resumes automatically the next working day.",
  },
];

const DAILY_ROUTES = [
  {
    href: "/car-lift-dubai-to-abu-dhabi",
    from: "Dubai",
    to: "Abu Dhabi",
    areas: "Khalifa City · Mussafah · Corniche · Yas Island",
    sharing: "AED 100",
    private: "AED 200",
  },
  {
    href: "/car-lift-ajman-to-dubai",
    from: "Ajman",
    to: "Abu Dhabi",
    areas: "Via Dubai · E311 Emirates Road",
    sharing: "AED 140",
    private: "AED 250",
  },
];

export default function DailyCarLiftAbuDhabiPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want a guaranteed daily seat on a car lift in Abu Dhabi."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Daily Car Lift Abu Dhabi",
      description:
        "Guaranteed daily car lift seat in Abu Dhabi from Dubai and Ajman. No daily booking, fixed per-trip fares.",
      url: "/daily-car-lift-abu-dhabi",
      price: "100",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Daily Car Lift Abu Dhabi", url: "/daily-car-lift-abu-dhabi" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp",
      pageUrl: "/daily-car-lift-abu-dhabi",
      caption: "Daily car lift Abu Dhabi – guaranteed seat in our fleet cars every working day",
    }),
    speakableSchema([".speakable-heading", ".speakable-desc"]),
    ...imageObjectSchema(ABUDHABI_DAILY_FLEET),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      {/* ── Hero ── */}
      <section
        aria-labelledby="daily-auh-hero"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #052e22 0%, #0c5c46 50%, #04231a 100%)",
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
            items={[{ label: "Home", href: "/" }, { label: "Daily Car Lift Abu Dhabi" }]}
            className="mb-6 [&_*]:text-emerald-200/70 [&_a]:text-emerald-100/80 [&_a:hover]:text-white"
          />
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Every working day · Guaranteed seat
          </div>
          <h1
            id="daily-auh-hero"
            className="speakable-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Daily Car Lift Abu Dhabi – Commute Without the Daily Booking
          </h1>
          <p className="speakable-desc text-emerald-100 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
            Reserve once, ride every working day. Our daily car lift connects Dubai and
            Ajman with Abu Dhabi — Dubai to Abu Dhabi from AED 100 sharing, with
            punctual morning and evening departures and the same driver on your route.
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
      <section aria-labelledby="daily-auh-routes" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Daily Routes
            </p>
            <h2
              id="daily-auh-routes"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Daily Car Lift Routes to Abu Dhabi
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
                  className="group flex flex-col gap-3 p-6 border border-slate-200 hover:border-emerald-300 rounded-2xl hover:shadow-lg transition-all h-full min-h-[120px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                      <Car className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 group-hover:text-emerald-600 block text-base">
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
                  <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1 mt-auto">
                    View route details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How daily service works ── */}
      <section aria-labelledby="how-auh-daily" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </p>
            <h2
              id="how-auh-daily"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              One Booking Covers Your Whole Work Week
            </h2>
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto" role="list">
            {[
              {
                icon: MessageCircle,
                title: "1. Tell us your commute",
                desc: "WhatsApp your home pickup and Abu Dhabi workplace. We match you to the right daily route.",
              },
              {
                icon: CheckCircle,
                title: "2. Lock in your timing",
                desc: "Confirm your morning pickup and evening return slots. They repeat automatically daily.",
              },
              {
                icon: Clock,
                title: "3. Ride, skip, resume",
                desc: "Fixed per-trip fare. Skip any day with an evening-before message; your seat waits for you.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
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
        photos={ABUDHABI_DAILY_FLEET}
        heading="The Cars Behind Your Daily Commute"
        subheading="Real vehicles from our Abu Dhabi daily car lift fleet."
        id="fleet-daily-auh"
      />

      {/* ── Why daily ── */}
      <section aria-labelledby="why-auh-daily" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Why Daily
            </p>
            <h2
              id="why-auh-daily"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Built for the Dubai–Abu Dhabi Commuter
            </h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto" role="list">
            {[
              {
                icon: Shield,
                title: "Intercity reliability",
                desc: "The Dubai–Abu Dhabi corridor is our core route. Drivers know the timing, the traffic and the shortcuts.",
              },
              {
                icon: CheckCircle,
                title: "Honest per-trip pricing",
                desc: "AED 100 sharing Dubai–Abu Dhabi, fixed in advance. What we quote on WhatsApp is what you pay.",
              },
              {
                icon: Clock,
                title: "Flexible by design",
                desc: "Holidays, remote days, shift changes — pause and resume your seat with a single message.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li key={title} className="bg-white border border-slate-200 rounded-2xl p-6 text-center">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 text-sm text-slate-500">
            Flying instead of commuting? See our{" "}
            <Link
              href="/airport-car-lift-abu-dhabi-auh"
              className="text-emerald-600 font-semibold hover:underline"
            >
              AUH airport car lift
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="auh-daily-faq" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="auh-daily-faq"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              Daily Car Lift Abu Dhabi – Common Questions
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
      <section aria-label="Reserve daily car lift Abu Dhabi" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <CalendarCheck className="h-8 w-8 text-emerald-200 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Reserve Your Daily Seat in Abu Dhabi
          </h2>
          <p className="text-emerald-100 text-sm mb-6">
            Dubai → Abu Dhabi from AED 100 sharing · Ajman → Abu Dhabi from AED 140 sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold min-h-[56px]"
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
