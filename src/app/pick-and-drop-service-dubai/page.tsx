import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, DollarSign, MapPin, CheckCircle, MessageCircle, Phone, ArrowRight, ChevronDown, Users, Star, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pick and Drop Service Dubai – Daily Rides | AED 100+ | +971 54 330 8261",
  description: "Daily pick and drop service in Dubai. From Sharjah, Ajman, Abu Dhabi to any Dubai area. AED 100 sharing per trip. Book via WhatsApp +971 54 330 8261.",
  keywords: "pick and drop service in dubai, pick up and drop service dubai, pick and drop service dubai, daily pick and drop service in dubai, car pick up service dubai, car pick up dubai",
  alternates: { canonical: "https://www.carliftuae.com/pick-and-drop-service-dubai" },
  openGraph: {
    title: "Pick and Drop Service Dubai – Daily Rides | AED 100+ | +971 54 330 8261",
    description: "Daily door-to-door pick and drop service in Dubai. AED 100+ per trip. From Sharjah, Ajman, Abu Dhabi. WhatsApp +971 54 330 8261.",
  },
};

const PAGE_FAQS = [
  { question: "What is the best pick and drop service in Dubai?", answer: "Quick Car Lift Service UAE provides reliable daily pick and drop service across Dubai, operating since 2019 with a 4.9-star rating from 150+ regular riders. We cover all major inter-emirate routes and Dubai drop-off points." },
  { question: "How much does pick and drop cost in Dubai?", answer: "Pick and drop from Abu Dhabi to Dubai is AED 100 sharing / AED 170 private per trip. From Sharjah or Ajman to Dubai it is AED 130 sharing / AED 200 private. Monthly packages offer better per-trip rates." },
  { question: "Is pick and drop available from Sharjah to Dubai?", answer: "Yes. Daily pick and drop from all Sharjah areas (Al Nahda, Muweilah, University City, etc.) to Business Bay, DIFC, JLT, and all Dubai areas. AED 130 sharing / AED 200 private per trip." },
  { question: "How do I book pick and drop service in Dubai?", answer: "WhatsApp +971 54 330 8261 with your pickup address, destination, and preferred timing. We confirm within 60 minutes. No app needed, no registration required." },
  { question: "Do you offer pick and drop for office employees in Dubai?", answer: "Yes. Corporate pick and drop packages are available for companies wanting daily employee transport. Group bookings, monthly billing, and dedicated vehicles can be arranged. WhatsApp for a corporate quote." },
  { question: "Is pick and drop service safe in Dubai UAE?", answer: "Yes. All Quick Car Lift Service UAE drivers are verified and licensed. Vehicles are GPS-tracked and air-conditioned. Our 4.9★ rating reflects the consistent safety and reliability our 150+ daily riders experience." },
];

const DUBAI_AREAS = ["Business Bay", "DIFC", "Downtown Dubai", "JLT", "Al Barsha", "Al Quoz", "Dubai Marina", "Deira", "Bur Dubai", "Al Karama", "JVC", "Healthcare City"];

export default function PickAndDropServiceDubaiPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a pick and drop service in Dubai.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Pick and Drop Service Dubai", description: "Daily door-to-door pick and drop service in Dubai from AED 100 per trip. From Sharjah, Ajman, Abu Dhabi to any Dubai area.", url: "/pick-and-drop-service-dubai", price: "100" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Pick and Drop Service Dubai", url: "/pick-and-drop-service-dubai" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/locations/business-bay/business-bay-car-lift-professionals.webp", pageUrl: "/pick-and-drop-service-dubai", caption: "Pick and drop service Dubai – daily door-to-door transport to Business Bay and all Dubai areas" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #1d4ed8 50%, #0f2a5e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pick and Drop Service Dubai" }]} className="mb-6 [&_*]:text-blue-300 [&_a]:text-blue-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Pick &amp; Drop Dubai
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Pick and Drop Service Dubai – Daily Door-to-Door Transport
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Door-to-door daily pick and drop service across all Dubai areas. From Sharjah, Ajman, and Abu Dhabi — confirmed in 60 minutes via WhatsApp.
              </p>
              <p className="text-blue-200/80 text-sm leading-relaxed mb-6 max-w-xl">Abu Dhabi to Dubai: AED 100 sharing / AED 170 private. Sharjah/Ajman to Dubai: AED 130 sharing / AED 200 private. Monthly packages also available.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key service stats">
                {[
                  { icon: MapPin, label: "Door-to-Door", sub: "All Dubai areas" },
                  { icon: DollarSign, label: "AED 100+", sub: "Per trip" },
                  { icon: Car, label: "All Dubai", sub: "Every area" },
                  { icon: Clock, label: "Daily Service", sub: "Mon–Sat" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-blue-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-blue-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop Dubai via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Dubai coverage areas">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-400" aria-hidden="true" />Dubai Coverage Areas
              </p>
              <ul className="grid grid-cols-2 gap-2" role="list">
                {DUBAI_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-1.5">
                    <CheckCircle className="h-3 w-3 text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="text-blue-100 text-xs">{area}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Pick and Drop Dubai – Common Questions</h2>
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

      <section aria-label="Related services" className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/pick-and-drop-service", label: "Pick & Drop UAE", desc: "All UAE pick and drop hub" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All Dubai routes" },
              { href: "/monthly-pick-and-drop-service-sharjah", label: "Monthly Pick & Drop Sharjah", desc: "Fixed monthly Sharjah rate" },
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "AED 130 sharing per trip" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-blue-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-blue-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book pick and drop Dubai" className="py-14 bg-blue-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Dubai Pick and Drop Today</h2>
          <p className="text-blue-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. WhatsApp now — confirmed in 60 minutes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop Dubai via WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now
              </a>
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
