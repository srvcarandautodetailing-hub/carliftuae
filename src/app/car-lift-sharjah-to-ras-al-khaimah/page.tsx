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
  title: "Car Lift Sharjah to Ras Al Khaimah – Daily Intercity Rides | +971 54 330 8261",
  description: "Daily car lift from Sharjah to Ras Al Khaimah (RAK). Comfortable intercity ride-sharing via Emirates Road. Book via WhatsApp +971 54 330 8261 for price and availability.",
  keywords: "car lift sharjah to ras al khaimah, sharjah to rak car lift, car lift to rak, sharjah rak transport, ras al khaimah car lift",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-sharjah-to-ras-al-khaimah" },
  openGraph: {
    title: "Car Lift Sharjah to Ras Al Khaimah – Daily Intercity Rides | +971 54 330 8261",
    description: "Daily car lift from Sharjah to Ras Al Khaimah via Emirates Road. Comfortable intercity service. WhatsApp for price & availability.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Sharjah to Ras Al Khaimah?", answer: "Yes. Quick Car Lift Service UAE provides intercity car lift from Sharjah to Ras Al Khaimah (RAK) on a daily scheduled basis. WhatsApp +971 54 330 8261 for current pricing and available timings." },
  { question: "How long does Sharjah to Ras Al Khaimah take by car?", answer: "Approximately 75–100 minutes from Al Nahda, Sharjah to Ras Al Khaimah City via Emirates Road (E611). Journey time varies with traffic, especially near Dubai and Ajman." },
  { question: "Which areas in RAK are covered?", answer: "We cover RAK City centre, Al Nakheel, Al Muntasir, Dafan Al Nakheel, Al Hamra, and industrial areas. Confirm your specific drop-off when booking." },
  { question: "What is the price for Sharjah to RAK car lift?", answer: "Pricing for the Sharjah–RAK intercity route is provided on request due to variable demand and seat availability. WhatsApp +971 54 330 8261 with your travel date and pickup location for a quote." },
  { question: "What time does the Sharjah to RAK car lift depart?", answer: "Morning departure is typically 6:30 AM–7:00 AM from Sharjah. Evening return is around 5:00 PM–6:00 PM from RAK. Confirm exact timings when booking as schedules can vary." },
  { question: "Can I book a regular weekly car lift from Sharjah to RAK?", answer: "Yes. If you commute regularly between Sharjah and RAK, we can arrange a weekly or monthly schedule. WhatsApp +971 54 330 8261 with your requirements." },
];

const PICKUP_AREAS = ["Al Nahda (Sharjah)", "Al Taawun", "Muweilah", "Al Qasimia", "Al Majaz", "Rolla Area"];
const DROP_OFF_POINTS = ["RAK City Centre", "Al Nakheel RAK", "Al Muntasir", "Dafan Al Nakheel", "Al Hamra Village", "RAK Industrial Area"];
const TIMINGS = [
  { label: "Sharjah → RAK (Morning)", times: ["6:30 AM", "7:00 AM"], color: "bg-teal-700" },
  { label: "RAK → Sharjah (Evening)", times: ["5:00 PM", "6:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftSharjahToRakPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Sharjah to Ras Al Khaimah.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Sharjah to Ras Al Khaimah", description: "Daily intercity car lift from Sharjah to Ras Al Khaimah via Emirates Road. Contact for pricing and availability.", url: "/car-lift-sharjah-to-ras-al-khaimah", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Sharjah to Ras Al Khaimah", url: "/car-lift-sharjah-to-ras-al-khaimah" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-route-dubai-skyline.webp", pageUrl: "/car-lift-sharjah-to-ras-al-khaimah", caption: "Car lift from Sharjah to Ras Al Khaimah – intercity commuter route via Emirates Road E611" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #134e4a 0%, #0d9488 50%, #042f2e 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Sharjah to RAK" }]} className="mb-6 [&_*]:text-teal-300 [&_a]:text-teal-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-1.5 text-sm text-teal-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Sharjah → Ras Al Khaimah
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Sharjah to Ras Al Khaimah – Intercity Daily Rides
              </h1>
              <p className="text-teal-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily intercity car lift from Sharjah to Ras Al Khaimah. Comfortable shared and private rides via Emirates Road (E611). Serving RAK City, Al Nakheel, Al Hamra, and industrial zones.</p>
              <p className="text-teal-200/80 text-sm leading-relaxed mb-6 max-w-xl">75–100 minutes from Al Nahda, Sharjah to RAK. Morning departures from 6:30 AM. WhatsApp for pricing and seat availability.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "Ask for Price", sub: "Contact us" },
                  { icon: Car, label: "Sharing / Private", sub: "Options" },
                  { icon: Clock, label: "75–100 min", sub: "Journey time" },
                  { icon: MapPin, label: "E611 Route", sub: "Emirates Road" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-teal-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-teal-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah to RAK via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="RAK drop-off points">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-teal-400" aria-hidden="true" />RAK Drop-off Points</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-teal-400 shrink-0" aria-hidden="true" />
                    <span className="text-teal-100 text-sm">{item}</span>
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
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharjah to RAK Timings</h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto">Schedules are subject to demand and seat availability. WhatsApp to confirm your slot.</p>
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

      <section aria-labelledby="route-info-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">Route Details</p>
            <h2 id="route-info-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharjah to RAK – Route Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-base">Sharjah Pickup Areas</h3>
              <ul className="space-y-2" role="list">
                {PICKUP_AREAS.map((area) => (
                  <li key={area} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-teal-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-base">RAK Drop-off Areas</h3>
              <ul className="space-y-2" role="list">
                {DROP_OFF_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-teal-500 shrink-0" aria-hidden="true" />
                    <span className="text-slate-700 text-sm">{point}</span>
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
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharjah to RAK Car Lift – Common Questions</h2>
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
              { href: "/car-lift-sharjah-to-dubai", label: "Car Lift Sharjah to Dubai", desc: "All Dubai areas" },
              { href: "/car-lift-ajman", label: "Car Lift Ajman Hub", desc: "All Ajman routes" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/car-lift-umm-al-quwain", label: "Car Lift Umm Al Quwain", desc: "UAQ intercity rides" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-teal-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-teal-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-teal-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book Sharjah to RAK car lift" className="py-14 bg-teal-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Sharjah to RAK Car Lift</h2>
          <p className="text-teal-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. WhatsApp now to check RAK route availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-teal-700 hover:bg-teal-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Sharjah to RAK car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
