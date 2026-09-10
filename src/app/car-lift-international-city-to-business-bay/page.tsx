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
  title: "Car Lift International City to Business Bay – AED 130 Sharing | +971 54 330 8261",
  description: "Daily car lift from International City Dubai to Business Bay, Downtown, DIFC. AED 130 sharing / AED 200 private. WhatsApp +971 54 330 8261 to book.",
  keywords: "car lift international city to business bay, international city to business bay car lift, car lift from international city, international city dubai car lift",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-international-city-to-business-bay" },
  openGraph: {
    title: "Car Lift International City to Business Bay – AED 130 Sharing | +971 54 330 8261",
    description: "Daily car lift from International City to Business Bay, Downtown Dubai, DIFC. AED 130 sharing / AED 200 private.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from International City to Business Bay?", answer: "Yes. Quick Car Lift Service UAE provides daily car lift from International City (all clusters) to Business Bay, Downtown Dubai, and DIFC. AED 130 sharing / AED 200 private per trip." },
  { question: "How long is the International City to Business Bay journey?", answer: "35–55 minutes from International City to Business Bay via Al Khail Road or Ras Al Khor Road, depending on traffic. Morning peak can extend to 60–70 minutes." },
  { question: "Which clusters in International City do you pick up from?", answer: "We pick up from all International City clusters including China, England, France, Italy, Morocco, Persia, Russia, Spain, and Greece clusters. Confirm your exact cluster location when booking." },
  { question: "Do you drop off at specific Business Bay towers?", answer: "Yes. We cover all major Business Bay towers including Damac Heights, Vision Tower, Bay Square, Executive Towers, and the Business Bay Metro station area. Confirm your tower at booking." },
  { question: "What time does the International City to Business Bay car lift depart?", answer: "Morning departures from International City: 7:00 AM, 7:30 AM, 8:00 AM, 8:30 AM. Evening return from Business Bay: 5:30 PM, 6:00 PM, 6:30 PM." },
  { question: "Is the International City to Downtown Dubai route also covered?", answer: "Yes. Downtown Dubai, Dubai Mall, Burj Khalifa area, and DIFC are all on the same route as Business Bay. Let us know your specific drop-off when booking." },
];

const PICKUP_AREAS = ["China Cluster", "England Cluster", "France Cluster", "Italy Cluster", "Morocco Cluster", "Russia Cluster", "Spain Cluster", "Persia Cluster"];
const DROP_OFF_POINTS = ["Business Bay Metro", "Damac Heights", "Vision Tower", "Bay Square", "Executive Towers", "Downtown Dubai", "Dubai Mall Area", "DIFC"];
const TIMINGS = [
  { label: "International City → Business Bay (Morning)", times: ["7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM"], color: "bg-cyan-700" },
  { label: "Business Bay → International City (Evening)", times: ["5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

export default function CarLiftICToBusinessBayPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from International City to Business Bay.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift International City to Business Bay", description: "Daily car lift from International City Dubai to Business Bay, Downtown, and DIFC. AED 130 sharing / AED 200 private per trip.", url: "/car-lift-international-city-to-business-bay", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift International City to Business Bay", url: "/car-lift-international-city-to-business-bay" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-international-city-to-business-bay", caption: "Car lift from International City to Business Bay Dubai – daily commuter route via Al Khail Road" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #164e63 0%, #0891b2 50%, #083344 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift International City to Business Bay" }]} className="mb-6 [&_*]:text-cyan-300 [&_a]:text-cyan-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-400/30 rounded-full px-4 py-1.5 text-sm text-cyan-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />International City → Business Bay
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift International City to Business Bay – Daily Rides
              </h1>
              <p className="text-cyan-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from all International City clusters to Business Bay, Downtown Dubai, and DIFC. AED 130 sharing / AED 200 private per trip.</p>
              <p className="text-cyan-200/80 text-sm leading-relaxed mb-6 max-w-xl">35–55 minutes via Al Khail Road. Multiple morning and evening departures. All clusters covered.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Clock, label: "35–55 min", sub: "Journey time" },
                  { icon: MapPin, label: "All Clusters", sub: "IC coverage" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-cyan-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-cyan-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift International City to Business Bay via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Business Bay drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-cyan-400" aria-hidden="true" />Business Bay Drop-off Points</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-cyan-400 shrink-0" aria-hidden="true" />
                    <span className="text-cyan-100 text-sm">{item}</span>
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
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">International City to Business Bay Timings</h2>
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
            <p className="text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">International City to Business Bay – Common Questions</h2>
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
              { href: "/car-lift-from-international-city", label: "Car Lift from International City", desc: "All IC routes" },
              { href: "/car-lift-silicon-oasis-to-business-bay", label: "Car Lift Silicon Oasis to Business Bay", desc: "DSO to BB route" },
              { href: "/car-lift-dubai", label: "Car Lift Dubai Hub", desc: "All Dubai routes" },
              { href: "/carpool-dubai", label: "Carpool Dubai", desc: "Daily carpooling" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-cyan-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-cyan-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-cyan-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book International City to Business Bay car lift" className="py-14 bg-cyan-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your International City to Business Bay Car Lift</h2>
          <p className="text-cyan-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Morning seats fill fast — WhatsApp now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-cyan-700 hover:bg-cyan-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book IC to Business Bay car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
