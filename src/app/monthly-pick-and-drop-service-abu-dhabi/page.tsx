import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, DollarSign, MapPin, CheckCircle, MessageCircle, Phone, ArrowRight, ChevronDown, Star, Shield, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Monthly Pick and Drop Service Abu Dhabi – Daily Commuter Package | +971 54 330 8261",
  description: "Monthly pick and drop service from Abu Dhabi to Dubai and Sharjah. Reserved daily seat, door-to-door, fixed monthly rate. WhatsApp +971 54 330 8261 for packages.",
  keywords: "monthly pick and drop abu dhabi, abu dhabi monthly transport, abu dhabi to dubai monthly car lift, abu dhabi commuter service, monthly car lift abu dhabi",
  alternates: { canonical: "https://www.carliftuae.com/monthly-pick-and-drop-service-abu-dhabi" },
  openGraph: {
    title: "Monthly Pick and Drop Service Abu Dhabi – Daily Commuter Package | +971 54 330 8261",
    description: "Monthly door-to-door commuter service from Abu Dhabi to Dubai and Sharjah. Reserved daily seat. WhatsApp for pricing.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a monthly pick and drop service from Abu Dhabi?", answer: "Yes. Quick Car Lift Service UAE offers a monthly pick and drop commuter package from Abu Dhabi to Dubai and Sharjah. You get a reserved daily seat, door-to-door pickup, and a fixed monthly rate. WhatsApp +971 54 330 8261 for current package pricing." },
  { question: "How does the monthly Abu Dhabi commuter service work?", answer: "You subscribe for a monthly package with a fixed departure time. We pick you up from your home or apartment in Abu Dhabi and drop you at your workplace in Dubai or Sharjah. At the end of the day, we return you on the evening slot. Same driver, same seat, same time every day." },
  { question: "Which Abu Dhabi areas are covered for monthly pick and drop?", answer: "We cover Mussafah, Khalifa City, Mohammed Bin Zayed (MBZ) City, Al Shamkha, Al Raha, Al Reef, Baniyas, and parts of Abu Dhabi Island. Confirm your area when booking." },
  { question: "What is the monthly rate for Abu Dhabi to Dubai commuter service?", answer: "Monthly package pricing depends on your exact route, seat type, and departure time. WhatsApp +971 54 330 8261 with your Abu Dhabi pickup address and Dubai destination for a personalised monthly quote." },
  { question: "Can I cancel or pause my monthly Abu Dhabi commuter subscription?", answer: "Yes. Monthly packages can be paused for annual leave or public holidays. Unused days can be credited to the next month. Discuss the terms with us when booking via WhatsApp." },
  { question: "What time does the Abu Dhabi to Dubai monthly commuter pick up?", answer: "Early morning pickup from Abu Dhabi is typically 5:30 AM–6:30 AM to reach Dubai by 8:00–8:30 AM. Evening return from Dubai is 5:30 PM–6:00 PM. Your exact time is fixed at subscription." },
];

const PICKUP_AREAS = ["Mussafah", "Khalifa City A & B", "MBZ City", "Al Shamkha", "Al Raha Gardens", "Al Reef", "Baniyas", "Abu Dhabi Island (selected)"];
const DROP_OFF_POINTS = ["Business Bay Dubai", "DIFC", "Downtown Dubai", "Al Quoz Industrial", "Jebel Ali", "JLT / Media City", "Sharjah Al Nahda", "Sharjah City Centre"];
const MONTHLY_BENEFITS = [
  "Reserved daily seat — never miss your ride",
  "Door-to-door pickup from Abu Dhabi",
  "Fixed monthly rate, no surprise costs",
  "Same experienced driver every day",
  "WhatsApp trip confirmation each morning",
  "Leave credit for unused days",
  "Priority rebooking after public holidays",
  "GPS-tracked vehicles for safety",
];

export default function MonthlyPickDropAbuDhabiPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to enquire about monthly pick and drop service from Abu Dhabi.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Monthly Pick and Drop Service Abu Dhabi", description: "Monthly door-to-door pick and drop commuter service from Abu Dhabi to Dubai and Sharjah. Reserved daily seat with fixed monthly rate.", url: "/monthly-pick-and-drop-service-abu-dhabi", price: "100" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Monthly Pick and Drop Service Abu Dhabi", url: "/monthly-pick-and-drop-service-abu-dhabi" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/monthly-pick-and-drop-service-abu-dhabi", caption: "Monthly pick and drop service Abu Dhabi – daily commuter package to Dubai and Sharjah" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #022c22 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Monthly Pick & Drop Abu Dhabi" }]} className="mb-6 [&_*]:text-emerald-300 [&_a]:text-emerald-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Calendar className="h-4 w-4" aria-hidden="true" />Monthly Commuter Package · Abu Dhabi
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Monthly Pick &amp; Drop Service Abu Dhabi – Daily Commuter Package
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Monthly door-to-door pick and drop from Abu Dhabi to Dubai and Sharjah. Reserved daily seat, fixed monthly rate, same driver every day. Mussafah, Khalifa City, MBZ, Al Shamkha, Al Raha covered.</p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">Early morning pickup from 5:30 AM. Evening return service. Monthly packages with leave credit. WhatsApp for personalised quote.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key service stats">
                {[
                  { icon: Calendar, label: "Monthly Package", sub: "Fixed rate" },
                  { icon: MapPin, label: "Door-to-Door", sub: "Abu Dhabi pickup" },
                  { icon: Shield, label: "Reserved Seat", sub: "Guaranteed daily" },
                  { icon: Clock, label: "5:30 AM Start", sub: "Early pickup" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-emerald-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-emerald-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Enquire about monthly pick and drop Abu Dhabi via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Enquire via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Dubai and Sharjah drop-off destinations">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />Workplace Destinations</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" aria-hidden="true" />
                    <span className="text-emerald-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="benefits-heading" className="py-14 sm:py-16 bg-emerald-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">Monthly Benefits</p>
            <h2 id="benefits-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Why Choose a Monthly Abu Dhabi Commuter Package</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" role="list">
            {MONTHLY_BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 bg-white border border-emerald-100 rounded-2xl p-4">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-slate-700 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="areas-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Coverage</p>
            <h2 id="areas-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Abu Dhabi Pickup Areas</h2>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3" role="list">
            {PICKUP_AREAS.map((area) => (
              <li key={area} className="flex items-center gap-2.5 bg-slate-50 border border-slate-200 rounded-xl p-3">
                <MapPin className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-700 text-sm">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Monthly Abu Dhabi Commuter Service – Common Questions</h2>
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

      <section aria-label="Related car lift pages" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-abu-dhabi", label: "Car Lift Abu Dhabi Hub", desc: "All Abu Dhabi routes" },
              { href: "/car-lift-from-sharjah-to-abu-dhabi", label: "Car Lift Sharjah to Abu Dhabi", desc: "Intercity SHJ–AD" },
              { href: "/car-lift-dubai-monthly", label: "Monthly Car Lift Dubai", desc: "Dubai monthly package" },
              { href: "/pick-and-drop-service", label: "Pick & Drop Service UAE", desc: "All UAE areas" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-emerald-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-emerald-700 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-emerald-600 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book monthly pick and drop Abu Dhabi" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Monthly Abu Dhabi Commuter Package</h2>
          <p className="text-emerald-100 text-sm mb-6">{BUSINESS.reviewCount}+ commuters across the UAE trust Quick Car Lift Service UAE. WhatsApp now for your personalised monthly Abu Dhabi quote.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Enquire about monthly pick and drop Abu Dhabi via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Get a Quote</a>
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
