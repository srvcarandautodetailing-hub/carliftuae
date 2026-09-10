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
  title: "Private Car Lift Dubai – AED 170 Exclusive | No Sharing | 24/7 | +971 54 330 8261",
  description: "Book a private car lift in Dubai – entire vehicle for you and your group only. No strangers. AED 170 private from Dubai to Abu Dhabi. AED 200 from Sharjah or Ajman to Dubai. WhatsApp +971 54 330 8261.",
  keywords: "private car lift dubai, private carlift, private car lift uae, private car lift sharjah dubai",
  alternates: { canonical: "https://www.carliftuae.com/private-car-lift-dubai" },
  openGraph: {
    title: "Private Car Lift Dubai – AED 170 Exclusive | No Sharing | 24/7 | +971 54 330 8261",
    description: "Exclusive private car lift in Dubai. Entire vehicle for you and your group. AED 170 from Abu Dhabi, AED 200 from Sharjah/Ajman. 24/7.",
  },
};

const PAGE_FAQS = [
  { question: "What is a private car lift in Dubai?", answer: "A private car lift means the entire vehicle is booked exclusively for you and your group — no other passengers share the ride. You get flexible pickup timing, direct routes, and complete privacy. Quick Car Lift Service UAE offers private car lift across all UAE inter-emirate routes." },
  { question: "How much is a private car lift from Dubai to Abu Dhabi?", answer: "AED 170 private per trip from any Dubai area to Abu Dhabi. This covers up to 4–5 passengers in one vehicle, making it cost-effective for groups of 2 or more." },
  { question: "How is private car lift different from sharing?", answer: "Sharing: you share the vehicle with up to 3 other passengers going to nearby destinations (cheaper, fixed timings). Private: the vehicle is only for you and your group (higher price, flexible timing, direct door-to-door without detours for other passengers)." },
  { question: "Can I book a private car lift for airport transfer in Dubai?", answer: "Yes. Private car lift is ideal for airport transfers. AED 170 private from Abu Dhabi, AED 200 private from Sharjah or Ajman. Pre-book via WhatsApp +971 54 330 8261 at least a day in advance." },
  { question: "Is private car lift available 24/7 in Dubai?", answer: "Yes. Private car lift operates 24/7 — including overnight, early morning (3:00–5:00 AM), and late night. Pre-booking required. WhatsApp us with your timing and we confirm availability." },
  { question: "How many passengers can travel in a private car lift?", answer: "Standard private car lift accommodates 4–5 passengers. For groups of 6 or more, we can arrange a larger vehicle (van/MPV). WhatsApp with your group size and we provide options." },
];

const COMPARISON = [
  { feature: "Price", sharing: "AED 100–130 per person", private: "AED 170–200 per vehicle" },
  { feature: "Timing", sharing: "Fixed schedule", private: "Flexible to your preference" },
  { feature: "Passengers", sharing: "Up to 4 shared", private: "Exclusive to your group" },
  { feature: "Route", sharing: "Multi-stop possible", private: "Direct, no detours" },
  { feature: "Privacy", sharing: "Shared with strangers", private: "Completely private" },
];

export default function PrivateCarLiftDubaiPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a private car lift in Dubai.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Private Car Lift Dubai", description: "Exclusive private car lift in Dubai. Entire vehicle for your group only. AED 170 from Abu Dhabi, AED 200 from Sharjah or Ajman. 24/7 availability.", url: "/private-car-lift-dubai", price: "170" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Private Car Lift Dubai", url: "/private-car-lift-dubai" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/services/carlift-uae-professionals-interior.webp", pageUrl: "/private-car-lift-dubai", caption: "Private car lift Dubai – exclusive vehicle for professionals, no sharing, direct door-to-door routes" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #1e293b 0%, #334155 50%, #0f172a 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Private Car Lift Dubai" }]} className="mb-6 [&_*]:text-slate-300 [&_a]:text-slate-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-slate-500/20 border border-slate-400/30 rounded-full px-4 py-1.5 text-sm text-slate-300 font-semibold mb-5">
                <Shield className="h-4 w-4" aria-hidden="true" />
                Private Car Lift Dubai
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Private Car Lift Dubai – Exclusive Rides, No Strangers
              </h1>
              <p className="text-slate-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Entire vehicle exclusively for you and your group. No strangers, no stops for other passengers. Direct door-to-door private car lift across all UAE routes.
              </p>
              <p className="text-slate-300/80 text-sm leading-relaxed mb-6 max-w-xl">AED 170 private from Abu Dhabi to Dubai. AED 200 private from Sharjah or Ajman to Dubai. 24/7 including overnight.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Private car lift stats">
                {[
                  { icon: DollarSign, label: "AED 170+", sub: "Private rate" },
                  { icon: Shield, label: "Exclusive", sub: "Vehicle" },
                  { icon: Users, label: "No Strangers", sub: "Your group only" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-slate-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-slate-300/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book private car lift Dubai via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />Book Private Car Lift
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Private vs sharing comparison">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-slate-400" aria-hidden="true" />Private Ride Includes
              </p>
              <ul className="space-y-3" role="list">
                {["Entire vehicle for your group", "No shared passengers", "Flexible pickup timing", "Direct door-to-door route", "No intermediate stops", "Airport transfers covered", "24/7 availability", "GPS-tracked vehicle"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
                    <span className="text-slate-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="compare-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-slate-600 font-semibold text-sm uppercase tracking-widest mb-3">Compare Options</p>
            <h2 id="compare-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharing vs Private Car Lift Dubai</h2>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm" aria-label="Sharing vs private car lift comparison">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Feature</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Private</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-700 font-medium">{row.feature}</td>
                    <td className="px-4 py-3 text-center text-slate-600 text-xs">{row.sharing}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-slate-800 text-xs">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />Book Private Car Lift via WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-slate-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Private Car Lift Dubai – Common Questions</h2>
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
              { href: "/car-lift-dubai", label: "Car Lift Dubai", desc: "All routes including sharing" },
              { href: "/carpool-dubai", label: "Carpool Dubai", desc: "Sharing from AED 100" },
              { href: "/car-lift-dubai-to-abu-dhabi", label: "Dubai to Abu Dhabi", desc: "AED 100 sharing / AED 170 private" },
              { href: "/pricing", label: "Full Pricing Guide", desc: "All UAE route prices" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-slate-400 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-slate-700 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-slate-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book private car lift Dubai" className="py-14 bg-slate-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Private Car Lift Today</h2>
          <p className="text-slate-300 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Private rides available 24/7 — pre-book via WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-slate-800 hover:bg-slate-100 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book private car lift Dubai via WhatsApp">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Private Ride
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
