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
  title: "Car Lift Sharjah to Ajman – Sharing & Private | +971 54 330 8261",
  description: "Daily car lift from Sharjah to Ajman and return. Al Nahda, Al Taawun, Muweilah pickup. Al Nuaimiya, Al Rashidiya Ajman drop-off. Quick Car Lift Service UAE. WhatsApp +971 54 330 8261.",
  keywords: "car lift sharjah to ajman, car lift from sharjah to ajman, sharjah ajman car lift, sharjah to ajman transport",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-sharjah-to-ajman" },
  openGraph: {
    title: "Car Lift Sharjah to Ajman – Sharing & Private | +971 54 330 8261",
    description: "Daily car lift from Sharjah to Ajman. Al Nahda, Muweilah pickup. Al Nuaimiya, Al Rashidiya drop-off. 25–40 min journey.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Sharjah to Ajman?", answer: "Yes. Quick Car Lift Service UAE provides daily car lift from Sharjah to Ajman covering all major Ajman areas including Al Nuaimiya, Al Rashidiya, and Al Hamidiya. WhatsApp +971 54 330 8261 for current pricing." },
  { question: "How long does it take from Sharjah to Ajman by car lift?", answer: "Approximately 25–40 minutes from central Sharjah (Al Nahda area) to Al Nuaimiya, Ajman. The route via Emirates Road (E311) is the fastest option and avoids most traffic." },
  { question: "What time does the Sharjah to Ajman car lift operate?", answer: "Morning: 7:00 AM, 7:30 AM, 8:00 AM, 8:30 AM. Evening return: 5:00 PM, 5:30 PM, 6:00 PM. WhatsApp us to confirm availability for your required timing." },
  { question: "Do you offer sharing and private options from Sharjah to Ajman?", answer: "Yes. Both sharing (carpooling with other passengers) and private (exclusive vehicle) options are available. WhatsApp +971 54 330 8261 for current pricing on both options." },
  { question: "Which areas in Ajman does the Sharjah car lift cover?", answer: "We cover Al Nuaimiya, Al Rashidiya, Al Hamidiya, Al Jurf, and Ajman City Centre area. WhatsApp your exact building or area in Ajman and we confirm drop-off." },
  { question: "Is there a return trip from Ajman to Sharjah?", answer: "Yes. The return car lift from Ajman to Sharjah runs in the evening on the same days. See our car lift Ajman to Sharjah page for return trip details, or WhatsApp us to book both directions." },
];

const PICKUP_AREAS = ["Al Nahda (Sharjah)", "Al Taawun", "Al Khan", "Al Majaz", "Muweilah", "University City", "Industrial Area"];
const DROP_OFF_POINTS = ["Al Nuaimiya", "Al Rashidiya", "Al Hamidiya", "Ajman City Centre area", "Al Jurf", "Al Rawdah"];
const TIMINGS = [
  { label: "Sharjah → Ajman (Morning)", times: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM"], color: "bg-amber-700" },
  { label: "Ajman → Sharjah (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftSharjahToAjmanPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Sharjah to Ajman.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Sharjah to Ajman", description: "Daily car lift from Sharjah to Ajman. Short route, 25–40 minutes. Al Nahda, Muweilah pickup. Al Nuaimiya, Al Rashidiya drop-off.", url: "/car-lift-sharjah-to-ajman", price: "80" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Sharjah to Ajman", url: "/car-lift-sharjah-to-ajman" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/locations/sharjah/sharjah-car-lift-morning-pickup.webp", pageUrl: "/car-lift-sharjah-to-ajman", caption: "Car lift from Sharjah to Ajman – short route daily commuter service between the two emirates" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #451a03 0%, #d97706 50%, #292524 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Sharjah to Ajman" }]} className="mb-6 [&_*]:text-amber-300 [&_a]:text-amber-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 rounded-full px-4 py-1.5 text-sm text-amber-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Sharjah → Ajman
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Sharjah to Ajman – Daily Short-Route Commute
              </h1>
              <p className="text-amber-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from Sharjah to Ajman — just 25–40 minutes between the two emirates. Morning and evening timings, sharing and private options.</p>
              <p className="text-amber-200/80 text-sm leading-relaxed mb-6 max-w-xl">WhatsApp +971 54 330 8261 for current pricing on Sharjah to Ajman sharing and private options.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: Car, label: "Short Route", sub: "Sharjah–Ajman" },
                  { icon: Clock, label: "25–40 min", sub: "Journey time" },
                  { icon: Users, label: "Both Dirs", sub: "Morning & evening" },
                  { icon: Shield, label: "24/7", sub: "Available" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah to Ajman via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Drop-off areas in Ajman">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-amber-400" aria-hidden="true" />Ajman Drop-off Areas</p>
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
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharjah to Ajman Car Lift Timings</h2>
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
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift Sharjah to Ajman – Common Questions</h2>
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
              { href: "/car-lift-ajman-to-sharjah", label: "Car Lift Ajman to Sharjah", desc: "Return route from Ajman" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/car-lift-ajman", label: "Car Lift Ajman Hub", desc: "All Ajman routes" },
              { href: "/monthly-pick-and-drop-service-sharjah", label: "Monthly Pick & Drop Sharjah", desc: "Fixed monthly rate" },
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

      <section aria-label="Book Sharjah to Ajman car lift" className="py-14 bg-amber-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Sharjah to Ajman Car Lift</h2>
          <p className="text-amber-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. WhatsApp now for pricing and availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-amber-700 hover:bg-amber-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Sharjah to Ajman car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
