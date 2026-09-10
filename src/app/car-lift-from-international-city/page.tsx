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
  title: "Car Lift International City Dubai – Business Bay, DIFC, Downtown | +971 54 330 8261",
  description:
    "Daily car lift from International City (Dragon Mart area) to Business Bay, DIFC, Downtown Dubai, JLT, and more. All phases covered. Book via WhatsApp +971 54 330 8261.",
  keywords:
    "car lift from international city, car lift international city, car lift service from international city, car lift from international city to business bay, car lift international city to business bay",
  alternates: {
    canonical: "https://www.carliftuae.com/car-lift-from-international-city",
  },
  openGraph: {
    title: "Car Lift International City Dubai – Business Bay, DIFC, Downtown | +971 54 330 8261",
    description:
      "Daily car lift from International City all phases to Business Bay, DIFC, Downtown Dubai. 35–55 min via Al Khail Road.",
  },
};

const PAGE_FAQS = [
  {
    question: "Is there a car lift from International City to Business Bay?",
    answer:
      "Yes. Quick Car Lift Service UAE provides daily car lift from all phases of International City (Dragon Mart area, Al Warsan) to Business Bay via Al Khail Road. Contact us via WhatsApp for current pricing and availability.",
  },
  {
    question: "Which phases of International City do you cover?",
    answer:
      "We cover International City Phase 1, Phase 2, Phase 3, Phase 4, the Dragon Mart area, and Al Warsan 1 and 2. Share your building/cluster name when you WhatsApp us.",
  },
  {
    question: "How long does it take from International City to Business Bay?",
    answer:
      "Approximately 35–50 minutes via Al Khail Road (E44) during off-peak hours. Morning rush hour (7:30–9:00 AM) can push the journey to 55–65 minutes.",
  },
  {
    question: "Do you cover DIFC from International City?",
    answer:
      "Yes. DIFC is nearby to Business Bay and is covered on the same route. Just confirm your specific gate or tower when booking.",
  },
  {
    question: "Can I book a monthly car lift from International City?",
    answer:
      "Yes. Monthly packages are available for regular commuters from International City. WhatsApp +971 54 330 8261 with your daily pickup and destination to get a monthly quote.",
  },
  {
    question: "Is there a car lift from International City to Al Quoz?",
    answer:
      "Yes. Al Quoz (both industrial and residential areas) are reachable from International City via Al Khail Road. WhatsApp us your exact Al Quoz destination to confirm.",
  },
];

const PICKUP_AREAS = [
  "International City Phase 1",
  "International City Phase 2",
  "International City Phase 3",
  "International City Phase 4",
  "Dragon Mart Area",
  "Al Warsan 1",
  "Al Warsan 2",
  "China Cluster area",
];

const DROP_OFF_POINTS = [
  "Business Bay (all towers)",
  "DIFC",
  "Downtown Dubai",
  "JLT",
  "Al Quoz",
  "Deira",
];

const TIMINGS = [
  { label: "IC → Dubai (Morning)", times: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM"], color: "bg-cyan-700" },
  { label: "Dubai → IC (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

export default function CarLiftFromInternationalCityPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book a car lift from International City Dubai."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  const schemas = [
    localBusinessSchema(),
    serviceSchema({
      name: "Car Lift from International City Dubai",
      description:
        "Daily car lift from International City (all phases, Dragon Mart, Al Warsan) to Business Bay, DIFC, Downtown Dubai, and other areas via Al Khail Road. 35–55 min journey.",
      url: "/car-lift-from-international-city",
      price: "130",
    }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Car Lift from International City", url: "/car-lift-from-international-city" },
    ]),
    primaryImageOfPageSchema({
      imageUrl: "/images/hero/carlift-uae-daily-commuters-interior.webp",
      pageUrl: "/car-lift-from-international-city",
      caption: "Car lift from International City Dubai – daily rides from all IC phases to Business Bay and DIFC",
    }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      <section
        aria-labelledby="hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{ background: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #083344 100%)" }}
      >
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift from International City" }]} className="mb-6 [&_*]:text-cyan-300 [&_a]:text-cyan-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm text-cyan-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                International City → Dubai
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift from International City Dubai – Daily Rides to All Areas
              </h1>
              <p className="text-cyan-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily car lift from all International City phases (Dragon Mart, Al Warsan) to Business Bay, DIFC, Downtown Dubai, JLT, and more via Al Khail Road.
              </p>
              <p className="text-cyan-200/80 text-sm leading-relaxed mb-6 max-w-xl">
                35–55 minutes to Business Bay under normal traffic. WhatsApp for current pricing and availability.
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: Car, label: "All IC Phases", sub: "Phases 1–4 + Dragon Mart" },
                  { icon: MapPin, label: "Business Bay", sub: "Primary destination" },
                  { icon: Clock, label: "35–55 min", sub: "Via Al Khail Road" },
                  { icon: Users, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-cyan-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-cyan-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift from International City via WhatsApp">
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
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Pickup areas">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-cyan-400" aria-hidden="true" />
                Pickup Areas (IC)
              </p>
              <ul className="space-y-3" role="list">
                {PICKUP_AREAS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-cyan-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Daily Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">International City to Business Bay Timings</h2>
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

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift International City – Common Questions</h2>
          </div>
          <dl className="space-y-4">
            {PAGE_FAQS.map((faq, i) => (
              <details key={i} className="group border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <dd className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">{faq.answer}</dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      <section aria-label="Related car lift pages" className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Car Lift Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-international-city-to-business-bay", label: "IC to Business Bay Direct", desc: "Direct route guide" },
              { href: "/car-lift-silicon-oasis-to-business-bay", label: "Silicon Oasis to Business Bay", desc: "DSO commuter route" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All Dubai routes hub" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-cyan-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-cyan-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-cyan-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book your International City car lift" className="py-14 bg-cyan-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your International City Car Lift Today</h2>
          <p className="text-cyan-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. WhatsApp now to secure your seat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book International City car lift via WhatsApp">
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
