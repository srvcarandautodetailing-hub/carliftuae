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
  title: "Car Lift Dubai to Al Ain – Long Distance Intercity | Contact for Price | +971 54 330 8261",
  description: "Long distance car lift from Dubai to Al Ain. Private and shared intercity rides via E66 Dubai-Al Ain Road. Contact for price and availability. WhatsApp +971 54 330 8261.",
  keywords: "car lift dubai to al ain, dubai to al ain car lift, car lift to al ain, dubai al ain transport, al ain car lift service",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-dubai-to-al-ain" },
  openGraph: {
    title: "Car Lift Dubai to Al Ain – Long Distance Intercity | Contact for Price | +971 54 330 8261",
    description: "Long distance intercity car lift from Dubai to Al Ain via E66. Contact for price and availability. WhatsApp +971 54 330 8261.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Dubai to Al Ain?", answer: "Yes. Quick Car Lift Service UAE provides long-distance intercity car lift from Dubai to Al Ain on scheduled departures. Both sharing and private vehicle options are available. WhatsApp +971 54 330 8261 for current pricing and availability." },
  { question: "How long does Dubai to Al Ain take by car?", answer: "Approximately 90–120 minutes from central Dubai (Deira/Bur Dubai) to Al Ain City via Dubai-Al Ain Road (E66). Journey time depends on traffic and pickup locations." },
  { question: "Which areas in Al Ain do you cover?", answer: "We serve Al Ain City Centre, Al Jimi, Al Ain Mall area, Zakher, Al Muwaiji, Mezyad, and Al Ain Industrial Area. Confirm your destination when booking." },
  { question: "What is the price for Dubai to Al Ain car lift?", answer: "The Dubai–Al Ain route is a long-distance intercity service. Pricing is provided on request based on vehicle type, number of passengers, and demand. WhatsApp +971 54 330 8261 for a quote." },
  { question: "What time does the Dubai to Al Ain car lift depart?", answer: "Early morning departure is typically 6:00 AM–6:30 AM from Dubai. Return from Al Ain is usually 4:30 PM–5:00 PM. Timings are confirmed at booking and may vary." },
  { question: "Can I book a private car lift from Dubai to Al Ain?", answer: "Yes. A private vehicle for the Dubai–Al Ain intercity route is available for single travellers or groups. WhatsApp for private vehicle pricing and booking." },
];

const PICKUP_AREAS = ["Deira", "Bur Dubai", "Al Qusais", "Mirdif", "Dubai Silicon Oasis", "Al Ain Road Corridor"];
const DROP_OFF_POINTS = ["Al Ain City Centre", "Al Jimi Mall Area", "Zakher", "Al Muwaiji", "Mezyad", "Al Ain Industrial Area", "Al Ain University Area"];
const TIMINGS = [
  { label: "Dubai → Al Ain (Early Morning)", times: ["6:00 AM", "6:30 AM"], color: "bg-amber-700" },
  { label: "Al Ain → Dubai (Afternoon)", times: ["4:30 PM", "5:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftDubaiToAlAinPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Dubai to Al Ain.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Dubai to Al Ain", description: "Long-distance intercity car lift from Dubai to Al Ain via E66. Sharing and private options available. Contact for pricing.", url: "/car-lift-dubai-to-al-ain", price: "200" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Dubai to Al Ain", url: "/car-lift-dubai-to-al-ain" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-dubai-to-al-ain", caption: "Car lift from Dubai to Al Ain – long distance intercity route via E66 Dubai-Al Ain Road" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #451a03 0%, #b45309 50%, #292524 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Dubai to Al Ain" }]} className="mb-6 [&_*]:text-amber-300 [&_a]:text-amber-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Dubai → Al Ain
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Dubai to Al Ain – Long Distance Intercity Rides
              </h1>
              <p className="text-amber-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Long-distance car lift from Dubai to Al Ain City, Al Jimi, Zakher, and industrial areas. Sharing and private vehicle options available via E66 Dubai-Al Ain Road.</p>
              <p className="text-amber-200/80 text-sm leading-relaxed mb-6 max-w-xl">90–120 minutes from Dubai. Early morning departures. Contact for pricing and seat availability.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "Contact for Price", sub: "Long distance" },
                  { icon: Car, label: "Private Option", sub: "Available" },
                  { icon: Clock, label: "90–120 min", sub: "Journey time" },
                  { icon: MapPin, label: "E66 Route", sub: "Dubai-Al Ain Rd" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Dubai to Al Ain via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Al Ain drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />Al Ain Drop-off Points</p>
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

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Dubai to Al Ain Car Lift Timings</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Schedules subject to availability. WhatsApp to confirm your slot and receive pricing.</p>
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
            <p className="text-amber-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Dubai to Al Ain Car Lift – Common Questions</h2>
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
              { href: "/car-lift-abu-dhabi", label: "Car Lift Abu Dhabi Hub", desc: "All Abu Dhabi routes" },
              { href: "/car-lift-from-sharjah-to-abu-dhabi", label: "Car Lift Sharjah to Abu Dhabi", desc: "Intercity SHJ–AD" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai Hub", desc: "All Dubai routes" },
              { href: "/private-car-lift-dubai", label: "Private Car Lift Dubai", desc: "Private vehicle service" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-amber-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-amber-700 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-amber-600 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book Dubai to Al Ain car lift" className="py-14 bg-amber-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Dubai to Al Ain Car Lift</h2>
          <p className="text-amber-100 text-sm mb-6">{BUSINESS.reviewCount}+ intercity riders trust Quick Car Lift Service UAE. WhatsApp for Al Ain route pricing and availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-amber-800 hover:bg-amber-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Dubai to Al Ain car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
