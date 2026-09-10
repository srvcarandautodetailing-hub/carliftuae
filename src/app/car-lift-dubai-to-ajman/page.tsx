import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, DollarSign, MapPin, CheckCircle, MessageCircle, Phone, ArrowRight, ChevronDown, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car Lift Dubai to Ajman – AED 130 Sharing | Evening Return Service | +971 54 330 8261",
  description: "Daily car lift from Dubai to Ajman. Evening return service from Deira, Bur Dubai, Al Qusais. AED 130 sharing / AED 200 private. WhatsApp +971 54 330 8261.",
  keywords: "car lift dubai to ajman, dubai to ajman car lift, car lift from dubai to ajman, dubai ajman sharing car, evening car lift ajman",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-dubai-to-ajman" },
  openGraph: {
    title: "Car Lift Dubai to Ajman – AED 130 Sharing | Evening Return Service | +971 54 330 8261",
    description: "Daily car lift from Dubai to Ajman. Evening return from Deira, Bur Dubai, Al Qusais. AED 130 sharing / AED 200 private.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Dubai to Ajman?", answer: "Yes. Quick Car Lift Service UAE provides daily car lift from Dubai to Ajman. Evening return service departs from Deira, Bur Dubai, Al Qusais, and other Dubai areas. AED 130 sharing / AED 200 private per trip." },
  { question: "How long does Dubai to Ajman take by car lift?", answer: "35–55 minutes from Deira/Al Qusais to Ajman City via Emirates Road (E611) or Sharjah-Ajman Road. Traffic after 5 PM can extend journey to 55–75 minutes." },
  { question: "Which areas in Dubai do you pick up from for Ajman?", answer: "We pick up from Deira, Bur Dubai, Al Qusais, Al Nahda (Dubai), Al Rashidiya, and Al Garhoud for the Dubai–Ajman evening return route." },
  { question: "Which areas in Ajman do you drop off at?", answer: "We cover Ajman City Centre, Al Jurf, Al Rashidiya Ajman, Al Nuaimia, Al Rumailah, Emirates City, and Al Mowaihat. Confirm your drop-off location when booking." },
  { question: "What time does the Dubai to Ajman car lift depart?", answer: "Evening departures from Dubai: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM. Morning service from Ajman to Dubai departs at 6:30 AM, 7:00 AM, 7:30 AM." },
  { question: "Can I book a one-way Dubai to Ajman car lift?", answer: "Yes. Both one-way and return trips are available. You can book just the evening Dubai-to-Ajman leg or a daily return commute. WhatsApp +971 54 330 8261 with your requirements." },
];

const PICKUP_AREAS = ["Deira", "Bur Dubai", "Al Qusais", "Al Nahda (Dubai)", "Al Rashidiya", "Al Garhoud"];
const DROP_OFF_POINTS = ["Ajman City Centre", "Al Jurf", "Al Rashidiya Ajman", "Al Nuaimia", "Al Rumailah", "Emirates City", "Al Mowaihat"];
const TIMINGS = [
  { label: "Ajman → Dubai (Morning)", times: ["6:30 AM", "7:00 AM", "7:30 AM"], color: "bg-rose-700" },
  { label: "Dubai → Ajman (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

export default function CarLiftDubaiToAjmanPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Dubai to Ajman.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Dubai to Ajman", description: "Daily car lift from Dubai to Ajman. Evening return service from Deira, Bur Dubai, Al Qusais. AED 130 sharing / AED 200 private per trip.", url: "/car-lift-dubai-to-ajman", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Dubai to Ajman", url: "/car-lift-dubai-to-ajman" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-dubai-to-ajman", caption: "Car lift from Dubai to Ajman – evening return service via Emirates Road" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #881337 0%, #e11d48 50%, #4c0519 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Dubai to Ajman" }]} className="mb-6 [&_*]:text-rose-300 [&_a]:text-rose-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-400/30 rounded-full px-4 py-1.5 text-sm text-rose-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Dubai → Ajman
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Dubai to Ajman – Evening Return Service
              </h1>
              <p className="text-rose-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from Dubai to Ajman. Evening departures from Deira, Bur Dubai, Al Qusais, and Al Nahda Dubai. AED 130 sharing / AED 200 private per trip.</p>
              <p className="text-rose-200/80 text-sm leading-relaxed mb-6 max-w-xl">35–55 minutes to Ajman City via Emirates Road. Morning service from Ajman also available. Monthly packages on request.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Clock, label: "35–55 min", sub: "Journey time" },
                  { icon: Car, label: "Evening Slots", sub: "5PM–6:30PM" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Dubai to Ajman via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Ajman drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-rose-400" aria-hidden="true" />Ajman Drop-off Points</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
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

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Dubai to Ajman Car Lift Timings</h2>
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
            <p className="text-rose-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Dubai to Ajman Car Lift – Common Questions</h2>
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
              { href: "/car-lift-sharjah-to-ajman", label: "Car Lift Sharjah to Ajman", desc: "Sharjah–Ajman route" },
              { href: "/car-lift-ajman-to-sharjah", label: "Car Lift Ajman to Sharjah", desc: "Return Ajman route" },
              { href: "/ladies-car-lift-ajman-to-dubai", label: "Ladies Car Lift Ajman to Dubai", desc: "Female-only service" },
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

      <section aria-label="Book Dubai to Ajman car lift" className="py-14 bg-rose-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Dubai to Ajman Car Lift</h2>
          <p className="text-rose-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Evening seats fill fast — WhatsApp now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-rose-700 hover:bg-rose-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Dubai to Ajman car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
