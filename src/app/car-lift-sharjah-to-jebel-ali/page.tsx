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
  title: "Car Lift Sharjah to Jebel Ali – AED 130 Sharing | JAFZA & Dubai South | +971 54 330 8261",
  description:
    "Daily car lift from Sharjah to Jebel Ali Free Zone (JAFZA), Port Jebel Ali, Dubai South, and DWC. AED 130 sharing / AED 200 private. Early morning shifts. WhatsApp +971 54 330 8261.",
  keywords:
    "sharjah to jebel ali car lift, car lift to jebel ali, car lift sharjah jebel ali, jebel ali car lift from sharjah, sharjah jebel ali transport, sharjah to jebel ali bus service car lift",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-sharjah-to-jebel-ali",
  },
  openGraph: {
    title: "Car Lift Sharjah to Jebel Ali – AED 130 Sharing | JAFZA & Dubai South | +971 54 330 8261",
    description:
      "Daily car lift from Sharjah to JAFZA (Jebel Ali Free Zone), Port Jebel Ali, Dubai South. AED 130 sharing / AED 200 private. Early morning shifts covered.",
  },
};

const PAGE_FAQS = [
  {
    question: "Is there a car lift from Sharjah to Jebel Ali Free Zone?",
    answer:
      "Yes. Quick Car Lift Service UAE runs daily car lift from all major Sharjah areas to Jebel Ali Free Zone (JAFZA) — covering Gate 1, Gate 3, and Gate 5 entry points. AED 130 sharing / AED 200 private per trip.",
  },
  {
    question: "How long does it take from Sharjah to Jebel Ali?",
    answer:
      "65–80 minutes from Al Nahda, Sharjah to JAFZA via Emirates Road (E611) or Sheikh Zayed Road (E11). The 5:30 AM departure takes approximately 60–65 minutes as traffic is light. Later departures (7:00 AM+) can take 80–90 minutes.",
  },
  {
    question: "What time does the Sharjah to Jebel Ali car lift depart?",
    answer:
      "Morning departures from Sharjah: 5:30 AM, 6:00 AM, 6:30 AM, and 7:00 AM — timed to cover both early and standard factory/industrial shift starts. Evening returns from Jebel Ali: 3:00 PM, 4:00 PM, and 5:00 PM.",
  },
  {
    question: "Do you cover Dubai South and DWC on the Jebel Ali route?",
    answer:
      "Yes. Dubai South (DWC) and Al Maktoum International Airport (DWC) are along the same corridor as Jebel Ali, so we can include them in the same route. WhatsApp us your exact destination point.",
  },
  {
    question: "Can companies book a car lift for multiple workers from Sharjah to JAFZA?",
    answer:
      "Yes. We offer group and corporate bookings for companies with multiple employees commuting from Sharjah to Jebel Ali. WhatsApp +971 54 330 8261 to arrange a group vehicle or multiple seats.",
  },
  {
    question: "Is there a car lift from Sharjah to DIP (Dubai Investment Park)?",
    answer:
      "Yes. Dubai Investment Park (DIP) is close to Jebel Ali and covered on the same route. Contact us via WhatsApp to confirm availability and pricing for DIP-specific drop-off.",
  },
];

const PICKUP_AREAS = [
  "Al Nahda (Sharjah)",
  "Al Taawun",
  "Muweilah",
  "University City",
  "Al Qasimia",
  "Industrial Area 1–3",
  "Al Zahia",
  "Al Gharayen",
];

const DROP_OFF_POINTS = [
  "JAFZA Gate 1",
  "JAFZA Gate 3",
  "JAFZA Gate 5",
  "Port Jebel Ali",
  "Dubai South (DWC)",
  "Al Maktoum Airport",
  "DIP (Dubai Investment Park)",
  "Jebel Ali Village",
];

const TIMINGS = [
  { label: "Sharjah → Jebel Ali (Early Morning)", times: ["5:30 AM", "6:00 AM", "6:30 AM", "7:00 AM"], color: "bg-amber-800" },
  { label: "Jebel Ali → Sharjah (Afternoon)", times: ["3:00 PM", "4:00 PM", "5:00 PM"], color: "bg-slate-800" },
];

const COST_COMPARISON = [
  { label: "Fuel Sharjah–JAFZA–Sharjah (AED 35/day × 26 days)", amount: "AED 910/month", highlight: false },
  { label: "Salik toll (AED 10/day × 26 days)", amount: "AED 260/month", highlight: false },
  { label: "JAFZA parking (estimated)", amount: "AED 400/month", highlight: false },
  { label: "Total driving cost", amount: "AED 1,570/month", highlight: true },
  { label: "Car lift AED 130 sharing × 26 trips", amount: "AED 3,380/month", highlight: false },
  { label: "Car lift AED 130 sharing (one way only)", amount: "Much less", highlight: true },
];

export default function CarLiftSharjahToJebelAliPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a car lift from Sharjah to Jebel Ali JAFZA."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift Sharjah to Jebel Ali",
      description:
        "Daily car lift from Sharjah to Jebel Ali Free Zone (JAFZA), Dubai South, and Port Jebel Ali. AED 130 sharing / AED 200 private. Early morning shifts covered.",
      url: "/car-lift-sharjah-to-jebel-ali",
      price: "130",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift Sharjah to Jebel Ali", url: "/car-lift-sharjah-to-jebel-ali" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp",
      pageUrl: "/car-lift-sharjah-to-jebel-ali",
      caption: "Car lift from Sharjah to Jebel Ali JAFZA – daily industrial commuter route via Sheikh Zayed Road",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #451a03 0%, #b45309 50%, #292524 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ label: "Home", href: "/" }, { label: "Car Lift Sharjah to Jebel Ali" }]}
            className="mb-6 [&_*]:text-amber-300 [&_a]:text-amber-200 [&_a:hover]:text-white"
          />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Sharjah → Jebel Ali
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Sharjah to Jebel Ali – Daily JAFZA Commuter Service
              </h1>
              <p className="text-amber-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily car lift from all Sharjah areas to Jebel Ali Free Zone (JAFZA), Dubai South, and Port Jebel Ali. Early morning shifts covered from 5:30 AM.
              </p>
              <p className="text-amber-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                Jebel Ali is the largest free zone in the Middle East — thousands of workers commute daily. AED 130 sharing / AED 200 private per trip.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Clock, label: "65–85 min", sub: "Journey time" },
                  { icon: Car, label: "Early Shifts", sub: "From 5:30 AM" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-amber-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-amber-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah to Jebel Ali via WhatsApp">
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
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />
                JAFZA Drop-off Points
              </p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span className="text-amber-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* ── Timings ─────────────────────────────────────────────────────── */}
      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">Industrial Shift Timings</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Sharjah to Jebel Ali Car Lift Schedule
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
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="pickup-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pickup in Sharjah · Drop-off at JAFZA
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" aria-hidden="true" />
                Pickup Areas (Sharjah)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {PICKUP_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-600" aria-hidden="true" />
                Drop-off (Jebel Ali / Dubai South)
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {DROP_OFF_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-amber-600 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Car Lift Sharjah to Jebel Ali – Common Questions
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
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "All Dubai areas covered" },
              { href: "/bus-car-lift-service-from-sharjah-sheikh-zayed", label: "Bus Car Lift Sharjah SZR", desc: "Sheikh Zayed Road route" },
              { href: "/carlift-sharjah-to-jlt", label: "Carlift Sharjah to JLT", desc: "JLT & Marina drop-off" },
              { href: "/car-lift-sharjah-to-al-quoz", label: "Car Lift Sharjah to Al Quoz", desc: "Industrial Area route" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-amber-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-amber-700 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-amber-600 text-xs font-medium flex items-center gap-1 mt-2">
                    Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section aria-label="Book your Jebel Ali car lift" className="py-14 bg-amber-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your JAFZA Car Lift from Sharjah Today
          </h2>
          <p className="text-amber-100 text-sm mb-6">
            {BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Early morning 5:30 AM seats fill fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-amber-800 hover:bg-amber-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Sharjah to Jebel Ali car lift via WhatsApp">
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
