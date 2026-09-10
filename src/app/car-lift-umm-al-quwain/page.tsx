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
  title: "Car Lift Umm Al Quwain – Daily Rides to Dubai & Sharjah | +971 54 330 8261",
  description: "Daily car lift service from Umm Al Quwain to Dubai and Sharjah. Comfortable intercity rides. Contact for pricing and availability. WhatsApp +971 54 330 8261.",
  keywords: "car lift umm al quwain, umm al quwain car lift, car lift uaq dubai, umm al quwain to dubai, uaq to dubai car lift",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-umm-al-quwain" },
  openGraph: {
    title: "Car Lift Umm Al Quwain – Daily Rides to Dubai & Sharjah | +971 54 330 8261",
    description: "Daily car lift from Umm Al Quwain to Dubai and Sharjah. Intercity commuter service. WhatsApp for pricing.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Umm Al Quwain to Dubai?", answer: "Yes. Quick Car Lift Service UAE provides intercity car lift from Umm Al Quwain (UAQ) to Dubai and Sharjah on daily scheduled departures. WhatsApp +971 54 330 8261 for current pricing and seat availability." },
  { question: "How long is the Umm Al Quwain to Dubai journey?", answer: "Approximately 60–90 minutes from UAQ City to Dubai (Deira/Bur Dubai area) via Emirates Road (E611) through Sharjah/Ajman. Journey time depends on traffic conditions." },
  { question: "Which areas in UAQ do you pick up from?", answer: "We cover UAQ City Centre, Al Salamah, UAQ Free Trade Zone, Al Rashidiya UAQ, and the main residential areas along King Faisal Road. Confirm your exact location when booking." },
  { question: "Can I get a car lift from UAQ to Sharjah?", answer: "Yes. Sharjah is on the route between UAQ and Dubai, so we also offer UAQ-to-Sharjah car lift as a standalone service. WhatsApp for pricing and availability." },
  { question: "What time does the UAQ to Dubai car lift depart?", answer: "Morning departures from Umm Al Quwain are typically 6:00 AM–6:30 AM to reach Dubai by 7:30–8:00 AM. Evening return from Dubai is around 5:30 PM–6:00 PM. Confirm exact timings when booking." },
  { question: "What is the price for Umm Al Quwain to Dubai car lift?", answer: "The UAQ–Dubai route is an intercity service. Pricing is based on distance and seat type. WhatsApp +971 54 330 8261 for a current quote and to check available timings." },
];

const PICKUP_AREAS = ["UAQ City Centre", "Al Salamah", "UAQ Free Trade Zone", "Al Rashidiya UAQ", "King Faisal Road", "Marina UAQ Area"];
const DROP_OFF_POINTS = ["Deira Dubai", "Bur Dubai", "Al Qusais", "Al Nahda Dubai", "Sharjah Al Nahda", "Sharjah City Centre"];
const TIMINGS = [
  { label: "UAQ → Dubai/Sharjah (Morning)", times: ["6:00 AM", "6:30 AM"], color: "bg-emerald-800" },
  { label: "Dubai/Sharjah → UAQ (Evening)", times: ["5:30 PM", "6:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftUmmAlQuwainPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Umm Al Quwain.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Umm Al Quwain", description: "Daily intercity car lift from Umm Al Quwain to Dubai and Sharjah. Contact for pricing and availability.", url: "/car-lift-umm-al-quwain", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Umm Al Quwain", url: "/car-lift-umm-al-quwain" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-umm-al-quwain", caption: "Car lift Umm Al Quwain to Dubai and Sharjah – intercity commuter service via Emirates Road" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #022c22 0%, #047857 50%, #014737 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Umm Al Quwain" }]} className="mb-6 [&_*]:text-emerald-300 [&_a]:text-emerald-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Umm Al Quwain → Dubai & Sharjah
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Umm Al Quwain – Daily Intercity Rides to Dubai &amp; Sharjah
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from Umm Al Quwain (UAQ) to Dubai and Sharjah. Comfortable intercity rides via Emirates Road for UAQ City, Al Salamah, and Free Trade Zone residents.</p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">60–90 minutes from UAQ to Dubai. Early morning departures. WhatsApp for pricing and seat availability.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "Contact for Price", sub: "Intercity rate" },
                  { icon: Car, label: "Daily Rides", sub: "Scheduled" },
                  { icon: Clock, label: "60–90 min", sub: "To Dubai" },
                  { icon: MapPin, label: "E611 Route", sub: "Emirates Road" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Umm Al Quwain via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Dubai and Sharjah drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />Drop-off Destinations</p>
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
            <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Umm Al Quwain Car Lift Timings</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Schedules may vary. WhatsApp to confirm your departure slot.</p>
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
            <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Umm Al Quwain Car Lift – Common Questions</h2>
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
              { href: "/car-lift-sharjah-to-ras-al-khaimah", label: "Car Lift Sharjah to RAK", desc: "Intercity RAK rides" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai Hub", desc: "All Dubai routes" },
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

      <section aria-label="Book Umm Al Quwain car lift" className="py-14 bg-emerald-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Umm Al Quwain Car Lift</h2>
          <p className="text-emerald-100 text-sm mb-6">{BUSINESS.reviewCount}+ intercity riders trust Quick Car Lift Service UAE. WhatsApp for UAQ route availability and pricing.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-emerald-800 hover:bg-emerald-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Umm Al Quwain car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
