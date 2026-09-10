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
  title: "Car Lift Ajman to Sharjah – Daily Sharing & Private | +971 54 330 8261",
  description: "Daily car lift from Ajman to Sharjah. Al Nuaimiya, Al Rashidiya, Al Hamidiya pickup. Al Nahda, Muweilah, University City Sharjah drop-off. WhatsApp +971 54 330 8261.",
  keywords: "car lift ajman to sharjah, car lift from ajman to sharjah, ajman sharjah car lift, ajman to sharjah transport",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-ajman-to-sharjah" },
  openGraph: {
    title: "Car Lift Ajman to Sharjah – Daily Sharing & Private | +971 54 330 8261",
    description: "Daily car lift from Ajman to Sharjah. 25–40 min journey. All Ajman areas pickup, all Sharjah areas drop-off.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Ajman to Sharjah?", answer: "Yes. Quick Car Lift Service UAE provides daily car lift from Ajman to Sharjah with pickup from all major Ajman areas (Al Nuaimiya, Al Rashidiya, Al Hamidiya) and drop-off across Sharjah. WhatsApp for current pricing." },
  { question: "How long is the journey from Ajman to Sharjah?", answer: "25–40 minutes from central Ajman to Al Nahda, Sharjah via the main highway. Traffic in the morning and evening peak hours may add 10–15 minutes." },
  { question: "What time does the Ajman to Sharjah car lift run?", answer: "Morning departures from Ajman: 6:30 AM, 7:00 AM, 7:30 AM. Evening return: 5:00 PM, 5:30 PM, 6:00 PM. WhatsApp to check available slots." },
  { question: "Do you offer monthly car lift packages from Ajman to Sharjah?", answer: "Yes. Monthly packages for regular Ajman to Sharjah commuters offer a fixed daily seat and guaranteed timing. WhatsApp +971 54 330 8261 for your monthly rate." },
  { question: "Which drop-off points in Sharjah does the Ajman car lift cover?", answer: "We drop off at Al Nahda, Al Taawun, Al Khan, Al Majaz, Muweilah, University City, and Industrial Area. Share your Sharjah area at booking for confirmation." },
  { question: "Can I get a car lift from Ajman to Muweilah Sharjah?", answer: "Yes. Muweilah in Sharjah is one of our key drop-off points from Ajman. WhatsApp us for the exact timing and pricing for Ajman to Muweilah." },
];

const PICKUP_AREAS = ["Al Nuaimiya", "Al Rashidiya", "Al Hamidiya", "Al Jurf", "Ajman Corniche", "Emirates City", "Al Rawdah"];
const DROP_OFF_POINTS = ["Al Nahda", "Al Taawun", "Al Khan", "Al Majaz", "Muweilah", "University City", "Industrial Area"];
const TIMINGS = [
  { label: "Ajman → Sharjah (Morning)", times: ["6:30 AM", "7:00 AM", "7:30 AM"], color: "bg-emerald-700" },
  { label: "Sharjah → Ajman (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftAjmanToSharjahPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Ajman to Sharjah.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Ajman to Sharjah", description: "Daily car lift from Ajman to Sharjah. Short route, 25–40 minutes. All Ajman pickup, all Sharjah drop-off areas.", url: "/car-lift-ajman-to-sharjah", price: "80" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Ajman to Sharjah", url: "/car-lift-ajman-to-sharjah" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-boarding-sunset-dubai.webp", pageUrl: "/car-lift-ajman-to-sharjah", caption: "Car lift from Ajman to Sharjah – daily morning and evening commuter rides between the two emirates" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #022c22 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Ajman to Sharjah" }]} className="mb-6 [&_*]:text-emerald-300 [&_a]:text-emerald-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Ajman → Sharjah
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Ajman to Sharjah – Daily Return Route
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from all Ajman areas to Sharjah — 25–40 minutes. Morning departures and evening return service.</p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">WhatsApp +971 54 330 8261 for current pricing on Ajman to Sharjah sharing and private options. Monthly packages available.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: Car, label: "Short Route", sub: "Ajman–Sharjah" },
                  { icon: Clock, label: "25–40 min", sub: "Journey time" },
                  { icon: Users, label: "Morning & Eve", sub: "Both directions" },
                  { icon: Shield, label: "24/7", sub: "Available" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Ajman to Sharjah via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Drop-off areas in Sharjah">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />Sharjah Drop-off Areas</p>
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

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Ajman to Sharjah Timings</h2>
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
            <p className="text-emerald-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift Ajman to Sharjah – Common Questions</h2>
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
              { href: "/car-lift-sharjah-to-ajman", label: "Car Lift Sharjah to Ajman", desc: "Return route from Sharjah" },
              { href: "/car-lift-ajman", label: "Car Lift Ajman Hub", desc: "All Ajman routes" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/monthly-pick-and-drop-service-sharjah", label: "Monthly Pick & Drop Sharjah", desc: "Fixed monthly rate" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-emerald-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-emerald-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book Ajman to Sharjah car lift" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Ajman to Sharjah Car Lift</h2>
          <p className="text-emerald-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. WhatsApp now for pricing and availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Ajman to Sharjah car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
