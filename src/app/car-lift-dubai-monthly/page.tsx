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
  title: "Car Lift Dubai Monthly – Fixed Daily Seat | Sharjah, Ajman, Abu Dhabi | +971 54 330 8261",
  description: "Monthly car lift packages for Dubai commuters. Fixed daily seat, no daily booking. Sharjah to Dubai, Ajman to Dubai, Abu Dhabi to Dubai. WhatsApp +971 54 330 8261 for your monthly rate.",
  keywords: "car lift dubai monthly, monthly car lift dubai, car lift dubai to abu dhabi monthly, monthly carlift, car lift monthly",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-dubai-monthly" },
  openGraph: {
    title: "Car Lift Dubai Monthly – Fixed Daily Seat | Sharjah, Ajman, Abu Dhabi | +971 54 330 8261",
    description: "Monthly car lift packages for Dubai commuters. Fixed daily seat, guaranteed timing. WhatsApp for monthly rate.",
  },
};

const PAGE_FAQS = [
  { question: "How do monthly car lift packages work in Dubai?", answer: "With a monthly car lift package, you get a guaranteed daily seat on your preferred timing for the entire month. No need to book each day. You pay once at the start of the month and your seat is reserved Monday to Saturday." },
  { question: "How much is a monthly car lift from Sharjah to Dubai?", answer: "Monthly car lift from Sharjah to Dubai varies by area and destination within Dubai. Contact Quick Car Lift Service UAE via WhatsApp +971 54 330 8261 with your exact pickup (e.g. Al Nahda) and drop-off (e.g. Business Bay) for a tailored monthly quote." },
  { question: "Is a monthly car lift cheaper than booking per trip?", answer: "Yes. Monthly packages offer a lower effective per-trip rate compared to booking individually. You also save the effort of booking every single day — your seat is always guaranteed." },
  { question: "Can I cancel a monthly car lift anytime?", answer: "Yes. There is no long-term contract or lock-in period. You can cancel or pause your monthly package by WhatsApp with reasonable notice. We aim to make the service as flexible as possible." },
  { question: "Is the monthly car lift available 6 days a week?", answer: "Yes. Monthly car lift packages operate Monday to Saturday. Sunday is available on special request (WhatsApp-only booking). You can choose morning-only, evening-only, or both directions per month." },
  { question: "How do I book a monthly car lift to Dubai?", answer: "WhatsApp +971 54 330 8261 with your name, pickup location, destination in Dubai, and preferred daily timing (e.g. 7:00 AM). We send you a monthly quote and confirm your booking within the hour." },
];

const BENEFITS = [
  "Guaranteed daily seat",
  "Priority on all timings",
  "No day-by-day booking needed",
  "Fixed budget-friendly monthly rate",
  "Monday to Saturday service",
  "Cancel anytime – no lock-in",
  "WhatsApp support 24/7",
  "GPS-tracked vehicles",
];

const MONTHLY_ROUTES = [
  { route: "Sharjah → Dubai (monthly)", note: "All Sharjah areas to any Dubai destination" },
  { route: "Ajman → Dubai (monthly)", note: "All Ajman areas to any Dubai destination" },
  { route: "Abu Dhabi → Dubai (monthly)", note: "All Abu Dhabi areas to any Dubai destination" },
];

export default function CarLiftDubaiMonthlyPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a monthly car lift to Dubai.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Monthly Car Lift Dubai", description: "Monthly car lift packages for Dubai commuters. Fixed daily seat on all routes — Sharjah, Ajman, Abu Dhabi to Dubai. Monday to Saturday service.", url: "/car-lift-dubai-monthly", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Dubai Monthly", url: "/car-lift-dubai-monthly" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/services/carlift-uae-professionals-interior.webp", pageUrl: "/car-lift-dubai-monthly", caption: "Monthly car lift Dubai – professionals with guaranteed daily seat commuting to Dubai from Sharjah, Ajman, Abu Dhabi" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #4338ca 50%, #0f0d2e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Dubai Monthly" }]} className="mb-6 [&_*]:text-indigo-300 [&_a]:text-indigo-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 rounded-full px-4 py-1.5 text-sm text-indigo-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Monthly Dubai Car Lift
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Dubai Monthly – Fixed Monthly Commuter Packages
              </h1>
              <p className="text-indigo-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Get a guaranteed daily seat in a car lift to Dubai — no daily booking, fixed monthly rate. Sharjah, Ajman, and Abu Dhabi routes all available.
              </p>
              <p className="text-indigo-200/80 text-sm leading-relaxed mb-6 max-w-xl">Monday to Saturday service, no lock-in contract. WhatsApp us with your route and get a personalised monthly quote within the hour.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Monthly package highlights">
                {[
                  { icon: Shield, label: "Fixed Rate", sub: "No surprises" },
                  { icon: Car, label: "Daily Seat", sub: "Guaranteed" },
                  { icon: Clock, label: "Mon–Sat", sub: "6 days/week" },
                  { icon: CheckCircle, label: "No Lock-in", sub: "Cancel anytime" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-indigo-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-indigo-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book monthly car lift Dubai via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />Get Monthly Rate via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Monthly package benefits">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-indigo-400" aria-hidden="true" />Monthly Package Benefits
              </p>
              <ul className="space-y-3" role="list">
                {BENEFITS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-indigo-400 shrink-0" aria-hidden="true" />
                    <span className="text-indigo-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="routes-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">Monthly Routes</p>
            <h2 id="routes-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Monthly Car Lift Routes to Dubai</h2>
          </div>
          <div className="space-y-4 mb-6">
            {MONTHLY_ROUTES.map((r) => (
              <div key={r.route} className="flex items-start gap-4 bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
                <Car className="h-5 w-5 text-indigo-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-bold text-indigo-900">{r.route}</p>
                  <p className="text-indigo-700 text-sm mt-1">{r.note}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp for Monthly Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Monthly Car Lift Dubai – Common Questions</h2>
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
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All Dubai routes hub" },
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "Per-trip Sharjah route" },
              { href: "/car-lift-ajman-to-dubai", label: "Car Lift Ajman to Dubai", desc: "Per-trip Ajman route" },
              { href: "/monthly-pick-and-drop-service-sharjah", label: "Monthly Pick & Drop Sharjah", desc: "Sharjah monthly package" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-indigo-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-indigo-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-indigo-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book monthly car lift Dubai" className="py-14 bg-indigo-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Start Your Monthly Dubai Car Lift</h2>
          <p className="text-indigo-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Secure your monthly seat today.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book monthly car lift Dubai via WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Get Monthly Rate
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
