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
  title: "Car Lift Ajman – AED 130 Sharing / AED 200 Private | All Routes | +971 54 330 8261",
  description: "Car lift service from Ajman to Dubai, Sharjah, and Abu Dhabi. AED 130 sharing / AED 200 private. Al Nuaimiya, Al Rashidiya, Al Hamidiya pickup. Available 24/7. WhatsApp +971 54 330 8261.",
  keywords: "car lift ajman, car lift from ajman, car lift ajman to dubai, car lift ajman to sharjah, ajman car lift service, car lift in ajman",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-ajman" },
  openGraph: {
    title: "Car Lift Ajman – AED 130 Sharing / AED 200 Private | All Routes | +971 54 330 8261",
    description: "Car lift from Ajman to Dubai, Sharjah, Abu Dhabi. AED 130 sharing / AED 200 private. All Ajman areas covered. 24/7.",
  },
};

const PAGE_FAQS = [
  { question: "What car lift services are available from Ajman?", answer: "Quick Car Lift Service UAE offers daily shared and private rides from all Ajman areas to Dubai (Business Bay, DIFC, JLT), Abu Dhabi, Sharjah, and Jebel Ali. Ladies-only car lift also available on request." },
  { question: "How much is a car lift from Ajman to Dubai?", answer: "AED 130 sharing / AED 200 private per trip from central Ajman to Dubai Business Bay, DIFC, or JLT. Ajman Corniche and farther areas may vary — WhatsApp your location for an exact price." },
  { question: "Is there a car lift from Ajman to Abu Dhabi?", answer: "Yes. Ajman to Abu Dhabi is AED 130 sharing / AED 200 private per trip. The route travels via Sharjah and Dubai (E311 Emirates Road) to Abu Dhabi. Journey time is approximately 2–2.5 hours." },
  { question: "Which areas in Ajman can be picked up?", answer: "We cover Al Nuaimiya, Al Rashidiya, Al Hamidiya, Al Rawdah, Al Jurf, Emirates City, Ajman Corniche, Al Rumailah, and other Ajman areas. WhatsApp your building name and we confirm pickup." },
  { question: "How long is the journey from Ajman to Dubai?", answer: "25–40 minutes from central Ajman to Sharjah border, then 30–45 more minutes to Business Bay Dubai. Total: 55–80 minutes depending on traffic. The 6:30 AM departure is typically 55–65 minutes." },
  { question: "Is there a ladies-only car lift from Ajman?", answer: "Yes. A ladies-only car lift is available from Ajman to Dubai and within Ajman. Female driver or ladies-only vehicle available on request at the same price. WhatsApp to arrange." },
];

const PICKUP_AREAS = ["Al Nuaimiya", "Al Rashidiya", "Al Hamidiya", "Al Rawdah", "Al Jurf", "Emirates City", "Ajman Corniche", "Ajman City Centre area", "Al Rumailah"];
const ROUTES = [
  { route: "Ajman → Dubai", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman → Abu Dhabi", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman → Jebel Ali", sharing: "AED 130", private: "AED 200" },
  { route: "Ajman → Sharjah", sharing: "Contact", private: "Contact" },
];

export default function CarLiftAjmanPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Ajman.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Ajman", description: "Daily car lift from Ajman to Dubai, Abu Dhabi, Sharjah, and Jebel Ali. AED 130 sharing / AED 200 private. All Ajman areas covered.", url: "/car-lift-ajman", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Ajman", url: "/car-lift-ajman" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-boarding-sunset-dubai.webp", pageUrl: "/car-lift-ajman", caption: "Car lift Ajman – daily rides to Dubai, Abu Dhabi and Sharjah from all Ajman areas" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #881337 0%, #e11d48 50%, #4c0519 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Ajman" }]} className="mb-6 [&_*]:text-rose-300 [&_a]:text-rose-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/30 rounded-full px-4 py-1.5 text-sm text-rose-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />
                Ajman Car Lift Hub
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Ajman – Daily Car Lift from Ajman to Dubai &amp; Abu Dhabi
              </h1>
              <p className="text-rose-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">
                Daily shared and private car lift from all Ajman areas to Dubai, Abu Dhabi, Sharjah, and Jebel Ali. Ladies-only option available.
              </p>
              <p className="text-rose-200/80 text-sm leading-relaxed mb-6 max-w-xl">AED 130 sharing / AED 200 private per trip. Monthly packages also available at fixed rates.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Car, label: "Dubai + AUH", sub: "All routes" },
                  { icon: Clock, label: "24/7", sub: "Available" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-rose-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-rose-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Ajman via WhatsApp">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp
                  </a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Pickup areas in Ajman">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-rose-400" aria-hidden="true" />Ajman Pickup Areas
              </p>
              <ul className="space-y-3" role="list">
                {PICKUP_AREAS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-rose-400 shrink-0" aria-hidden="true" />
                    <span className="text-rose-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="pricing-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-widest mb-3">All Routes</p>
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Ajman Car Lift Routes & Pricing</h2>
          </div>
          <div className="border border-slate-200 rounded-2xl overflow-hidden mb-6">
            <table className="w-full text-sm" aria-label="Ajman car lift route pricing">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-slate-700">Route</th>
                  <th className="text-center px-4 py-3 font-semibold text-slate-700">Sharing</th>
                  <th className="text-right px-4 py-3 font-semibold text-slate-700">Private</th>
                </tr>
              </thead>
              <tbody>
                {ROUTES.map((row, i) => (
                  <tr key={row.route} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="px-4 py-3 text-slate-800 font-medium">{row.route}</td>
                    <td className="px-4 py-3 text-center font-extrabold text-rose-600">{row.sharing}</td>
                    <td className="px-4 py-3 text-right font-extrabold text-slate-700">{row.private}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center">
            <Button asChild variant="whatsapp" size="default">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />WhatsApp for Your Exact Price
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift Ajman – Common Questions</h2>
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
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Car Lift Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/car-lift-ajman-to-dubai", label: "Car Lift Ajman to Dubai", desc: "AED 130 sharing / AED 200 private" },
              { href: "/ladies-car-lift-ajman-to-dubai", label: "Ladies Car Lift Ajman", desc: "Female-only option" },
              { href: "/car-lift-ajman-to-sharjah", label: "Car Lift Ajman to Sharjah", desc: "Short route to Sharjah" },
              { href: "/car-lift-dubai-to-ajman", label: "Car Lift Dubai to Ajman", desc: "Evening return from Dubai" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-rose-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-rose-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book your Ajman car lift" className="py-14 bg-rose-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Ajman Car Lift Today</h2>
          <p className="text-rose-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Morning seats fill fast — WhatsApp now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-rose-700 hover:bg-rose-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Ajman car lift via WhatsApp">
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
