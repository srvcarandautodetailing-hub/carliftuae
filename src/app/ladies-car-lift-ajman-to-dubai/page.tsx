import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, DollarSign, MapPin, CheckCircle, MessageCircle, Phone, ArrowRight, ChevronDown, Star, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Ladies Car Lift Ajman to Dubai – Female-Only Service | AED 130 | +971 54 330 8261",
  description: "Safe, reliable ladies car lift from Ajman to Dubai. Female-only shared rides with verified drivers. AED 130 sharing per trip. WhatsApp +971 54 330 8261 to book.",
  keywords: "ladies car lift ajman to dubai, female car lift ajman dubai, women car lift ajman, ladies taxi ajman dubai, ladies transport ajman",
  alternates: { canonical: "https://www.carliftuae.com/ladies-car-lift-ajman-to-dubai" },
  openGraph: {
    title: "Ladies Car Lift Ajman to Dubai – Female-Only Service | AED 130 | +971 54 330 8261",
    description: "Safe female-only car lift from Ajman to Dubai. AED 130 sharing. Verified drivers. Morning and evening service.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a ladies-only car lift from Ajman to Dubai?", answer: "Yes. Quick Car Lift Service UAE provides a dedicated ladies car lift from Ajman to Dubai. The service is designed for women commuters with a focus on safety, comfort, and punctuality. AED 130 sharing per trip. WhatsApp +971 54 330 8261 to book." },
  { question: "Is the ladies car lift service safe?", answer: "Yes. All drivers for the ladies car lift are verified professionals. The vehicles are GPS-tracked, and trip details are shared with emergency contacts on request. Your safety is our top priority." },
  { question: "Which Ajman areas are covered for ladies car lift?", answer: "We pick up from Al Nuaimia, Al Rashidiya, Al Jurf, Emirates City, Al Rumailah, and Al Mowaihat in Ajman. Additional pickup points can be arranged — WhatsApp to discuss your location." },
  { question: "Which Dubai areas do you drop off at for ladies car lift?", answer: "Drop-off points include Deira, Bur Dubai, Al Qusais, Al Nahda (Dubai), Business Bay, Downtown Dubai, and JLT/Marina area. Confirm your workplace or destination when booking." },
  { question: "What time does the ladies car lift from Ajman to Dubai depart?", answer: "Morning departures from Ajman: 7:00 AM, 7:30 AM, 8:00 AM. Evening return from Dubai: 5:30 PM, 6:00 PM, 6:30 PM." },
  { question: "Can I book a monthly ladies car lift from Ajman to Dubai?", answer: "Yes. Monthly reserved-seat packages are available for the Ajman–Dubai ladies car lift. WhatsApp +971 54 330 8261 with your route, timing, and start date to arrange a monthly subscription." },
];

const PICKUP_AREAS = ["Al Nuaimia Ajman", "Al Rashidiya Ajman", "Al Jurf", "Emirates City", "Al Rumailah", "Al Mowaihat"];
const DROP_OFF_POINTS = ["Deira", "Bur Dubai", "Al Qusais", "Al Nahda Dubai", "Business Bay", "Downtown Dubai", "JLT / Marina area"];
const TIMINGS = [
  { label: "Ajman → Dubai (Morning)", times: ["7:00 AM", "7:30 AM", "8:00 AM"], color: "bg-pink-700" },
  { label: "Dubai → Ajman (Evening)", times: ["5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

const SAFETY_FEATURES = [
  "Verified professional drivers",
  "GPS-tracked vehicles",
  "WhatsApp trip confirmation",
  "Female passengers only",
  "Emergency contact sharing on request",
  "Punctual, reliable schedule",
];

export default function LadiesCarLiftAjmanToDubaiPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a ladies car lift from Ajman to Dubai.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Ladies Car Lift Ajman to Dubai", description: "Female-only car lift from Ajman to Dubai. Safe, comfortable shared rides with verified drivers. AED 130 sharing per trip.", url: "/ladies-car-lift-ajman-to-dubai", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Ladies Car Lift Ajman to Dubai", url: "/ladies-car-lift-ajman-to-dubai" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/ladies-car-lift-ajman-to-dubai", caption: "Ladies car lift from Ajman to Dubai – female-only safe commuter service" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #831843 0%, #db2777 50%, #500724 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Ladies Car Lift Ajman to Dubai" }]} className="mb-6 [&_*]:text-pink-300 [&_a]:text-pink-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 rounded-full px-4 py-1.5 text-sm text-pink-300 font-semibold mb-5">
                <Users className="h-4 w-4" aria-hidden="true" />Ladies Only · Ajman → Dubai
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Ladies Car Lift Ajman to Dubai – Safe Female-Only Service
              </h1>
              <p className="text-pink-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Dedicated ladies car lift from Ajman to Dubai. Female-only shared rides with verified professional drivers. AED 130 sharing per trip. Safe, punctual, and comfortable.</p>
              <p className="text-pink-200/80 text-sm leading-relaxed mb-6 max-w-xl">40–60 minutes from Ajman to Dubai via Emirates Road. Morning departures from 7:00 AM. Monthly packages available.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key service stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: Shield, label: "Verified Drivers", sub: "Safety first" },
                  { icon: Clock, label: "40–60 min", sub: "Journey time" },
                  { icon: Users, label: "Ladies Only", sub: "Female service" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-pink-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-pink-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book ladies car lift Ajman to Dubai via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Dubai drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-pink-400" aria-hidden="true" />Dubai Drop-off Points</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-pink-400 shrink-0" aria-hidden="true" />
                    <span className="text-pink-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="py-14 sm:py-16 bg-pink-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-3">Safety First</p>
            <h2 id="safety-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Why Ladies Choose Our Car Lift</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {SAFETY_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 bg-white border border-pink-100 rounded-2xl p-4">
                <Shield className="h-5 w-5 text-pink-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-700 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Ladies Car Lift Ajman to Dubai Timings</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TIMINGS.map((t) => (
              <Card key={t.label} className="border-slate-200">
                <CardContent className="p-6 pt-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-9 h-9 rounded-xl ${t.color} flex items-center justify-center shrink-0`}><Clock className="h-5 w-5 text-white" aria-hidden="true" /></div>
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
            <p className="text-pink-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Ladies Car Lift Ajman to Dubai – Common Questions</h2>
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
              { href: "/car-lift-ajman", label: "Car Lift Ajman Hub", desc: "All Ajman routes" },
              { href: "/car-lift-ajman-to-sharjah", label: "Car Lift Ajman to Sharjah", desc: "Ajman–Sharjah route" },
              { href: "/car-lift-dubai-to-ajman", label: "Car Lift Dubai to Ajman", desc: "Evening return service" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai Hub", desc: "All Dubai routes" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-pink-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-pink-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-pink-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book ladies car lift Ajman to Dubai" className="py-14 bg-pink-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Ladies Car Lift Ajman to Dubai</h2>
          <p className="text-pink-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily commuters trust Quick Car Lift Service UAE. Safe, on-time service for ladies — WhatsApp now to reserve your seat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-pink-700 hover:bg-pink-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book ladies car lift Ajman to Dubai via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
            </Button>
            <Button asChild size="xl" className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20">
              <a href={phoneHref}><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
