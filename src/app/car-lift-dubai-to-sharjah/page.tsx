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
  title: "Car Lift Dubai to Sharjah – AED 130 Sharing / AED 200 Private | Evening | +971 54 330 8261",
  description: "Car lift from Dubai to Sharjah. Return rides from Business Bay, DIFC, JLT to all Sharjah areas. AED 130 sharing / AED 200 private. Evening timings 5:00 PM–7:00 PM. WhatsApp +971 54 330 8261.",
  keywords: "dubai to sharjah car lift, car lift from dubai to sharjah, car lift dubai to sharjah, sharjah car lift from dubai",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-dubai-to-sharjah" },
  openGraph: {
    title: "Car Lift Dubai to Sharjah – AED 130 Sharing / AED 200 Private | Evening | +971 54 330 8261",
    description: "Evening return car lift from Dubai to Sharjah. Business Bay, DIFC, JLT pickup. All Sharjah areas drop-off. AED 130 sharing / AED 200 private.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Dubai to Sharjah in the evening?", answer: "Yes. Quick Car Lift Service UAE runs evening return trips from Business Bay, DIFC, JLT, and other Dubai areas to all Sharjah locations. Departure times from Dubai: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM, and 7:00 PM." },
  { question: "How much is a car lift from Dubai to Sharjah?", answer: "AED 130 sharing / AED 200 private per trip. This covers door-to-door transport from your Dubai workplace to your Sharjah home area." },
  { question: "How long does it take from Dubai to Sharjah by car lift?", answer: "35–55 minutes from Business Bay to Al Nahda, Sharjah during off-peak hours. Evening rush hour (5:30–7:30 PM) can add 15–30 minutes. The 5:00 PM departure from Dubai is usually fastest." },
  { question: "Which Dubai areas do you pick up from for the Sharjah car lift?", answer: "We pick up from Business Bay, DIFC (Gate 1 & Gate 4), Downtown Dubai, JLT, Al Barsha, Karama, Deira, and other areas. Share your office location when booking." },
  { question: "Do you also offer morning Dubai to Sharjah trips?", answer: "The primary service from Dubai to Sharjah is in the evening (return from work). For morning trips from Dubai to Sharjah (unusual direction), please WhatsApp us to check availability." },
  { question: "How do I book a car lift from Dubai to Sharjah?", answer: "WhatsApp +971 54 330 8261 with your Dubai pickup point, Sharjah destination, and preferred evening timing. We confirm your seat within the hour." },
];

const PICKUP_IN_DUBAI = ["Business Bay", "DIFC", "Downtown Dubai", "JLT", "Al Barsha", "Karama", "Deira", "Dubai Mall area"];
const DROP_OFF_IN_SHARJAH = ["Al Nahda", "Al Taawun", "Muweilah", "University City", "Al Majaz", "Al Qasimia", "Industrial Area"];
const TIMINGS = [
  { label: "Dubai → Sharjah (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-blue-800" },
];

export default function CarLiftDubaiToSharjahPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Dubai to Sharjah.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Dubai to Sharjah", description: "Evening return car lift from Dubai to Sharjah. Business Bay, DIFC, JLT pickup. All Sharjah areas drop-off. AED 130 sharing / AED 200 private.", url: "/car-lift-dubai-to-sharjah", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Dubai to Sharjah", url: "/car-lift-dubai-to-sharjah" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-dubai-to-sharjah", caption: "Car lift from Dubai to Sharjah – evening return service from Business Bay and DIFC to Al Nahda and Muweilah" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #1e3a6e 0%, #1e40af 50%, #0f2350 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Dubai to Sharjah" }]} className="mb-6 [&_*]:text-blue-300 [&_a]:text-blue-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Dubai → Sharjah
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Dubai to Sharjah – Evening Return Service
              </h1>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Evening return car lift from all major Dubai areas to Sharjah. Departures from 5:00 PM to 7:00 PM — perfect for office commuters heading home.</p>
              <p className="text-blue-200/80 text-sm leading-relaxed mb-6 max-w-xl">AED 130 sharing / AED 200 private per trip. Business Bay, DIFC, JLT, Al Barsha pickup. All Sharjah areas drop-off.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Clock, label: "35–60 min", sub: "Journey time" },
                  { icon: Car, label: "Evening", sub: "Primary service" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Dubai to Sharjah via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Sharjah drop-off areas">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-400" aria-hidden="true" />Sharjah Drop-off Areas</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_IN_SHARJAH.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
                    <span className="text-blue-100 text-sm">{item}</span>
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
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Evening Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Dubai to Sharjah Evening Timings</h2>
          </div>
          <div className="max-w-md mx-auto">
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

      <section aria-labelledby="pickup-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Route Coverage</p>
            <h2 id="pickup-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Pickup in Dubai · Drop-off in Sharjah</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />Pickup Areas (Dubai)</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {PICKUP_IN_DUBAI.map((area) => (
                  <li key={area} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-blue-500" aria-hidden="true" />Drop-off Areas (Sharjah)</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none" role="list">
                {DROP_OFF_IN_SHARJAH.map((point) => (
                  <li key={point} className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3">
                    <CheckCircle className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-800 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift Dubai to Sharjah – Common Questions</h2>
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
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "Morning route to Dubai" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/carlift-sharjah-to-jlt", label: "Carlift Sharjah to JLT", desc: "JLT Cluster drop-off" },
              { href: "/car-lift-from-sharjah-to-business-bay", label: "Car Lift Sharjah to Business Bay", desc: "Business Bay route" },
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

      <section aria-label="Book Dubai to Sharjah car lift" className="py-14 bg-blue-800">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Evening Dubai to Sharjah Car Lift</h2>
          <p className="text-blue-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Evening seats fill fast — WhatsApp now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-blue-800 hover:bg-blue-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Dubai to Sharjah car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
