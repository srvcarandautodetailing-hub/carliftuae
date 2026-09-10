import type { Metadata } from "next";
import Link from "next/link";
import { Car, Clock, DollarSign, MapPin, CheckCircle, MessageCircle, Phone, ArrowRight, ChevronDown, Star, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { localBusinessSchema, faqSchema, breadcrumbSchema, serviceSchema, primaryImageOfPageSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Pick and Drop Service Sharjah – Door-to-Door | AED 130 | +971 54 330 8261",
  description: "Reliable pick and drop service in Sharjah and from Sharjah to Dubai. Door-to-door commuter rides. AED 130 sharing / AED 200 private. WhatsApp +971 54 330 8261.",
  keywords: "pick and drop service sharjah, sharjah pick and drop, pick drop sharjah, door to door sharjah dubai, sharjah commuter service",
  alternates: { canonical: "https://www.carliftuae.com/pick-and-drop-service-sharjah" },
  openGraph: {
    title: "Pick and Drop Service Sharjah – Door-to-Door | AED 130 | +971 54 330 8261",
    description: "Door-to-door pick and drop service from Sharjah. AED 130 sharing / AED 200 private. WhatsApp to book.",
  },
};

const PAGE_FAQS = [
  { question: "What is pick and drop service in Sharjah?", answer: "Quick Car Lift Service UAE offers a door-to-door pick and drop service from your home or office in Sharjah to your workplace or destination in Dubai or other UAE emirates. AED 130 sharing / AED 200 private per trip." },
  { question: "Which Sharjah areas are covered for pick and drop?", answer: "We cover Al Nahda, Al Taawun, Muweilah, University City, Al Qasimia, Al Majaz, Industrial Area, Al Khan, and most other Sharjah residential and commercial zones." },
  { question: "Can I get daily pick and drop service from Sharjah to Dubai?", answer: "Yes. We provide a scheduled daily pick and drop service from Sharjah to all major Dubai destinations including Business Bay, JLT, Al Barsha, Al Quoz, Jebel Ali, Deira, and Bur Dubai." },
  { question: "What is the price for pick and drop from Sharjah?", answer: "AED 130 per person for sharing pick and drop from Sharjah to Dubai. AED 200 for a private vehicle. Monthly packages with reserved seating are also available." },
  { question: "Is the pick and drop from Sharjah door-to-door?", answer: "Yes. The service includes pickup from your doorstep in Sharjah and drop-off at your office or destination in Dubai. You do not need to walk to a pickup point." },
  { question: "How do I book a pick and drop service from Sharjah?", answer: "WhatsApp +971 54 330 8261 with your Sharjah home address, destination in Dubai, preferred departure time, and start date. We will confirm your booking and driver details." },
];

const PICKUP_AREAS = ["Al Nahda Sharjah", "Al Taawun", "Muweilah", "University City", "Al Qasimia", "Al Majaz", "Al Khan", "Industrial Area 1–18"];
const DROP_OFF_POINTS = ["Business Bay", "JLT", "Al Barsha", "Al Quoz Industrial", "Jebel Ali", "Deira", "Bur Dubai", "Downtown Dubai"];
const TIMINGS = [
  { label: "Sharjah Pick-up (Morning)", times: ["6:30 AM", "7:00 AM", "7:30 AM", "8:00 AM"], color: "bg-violet-700" },
  { label: "Dubai Drop-back (Evening)", times: ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"], color: "bg-slate-800" },
];

const SERVICE_FEATURES = [
  "Door-to-door pickup from Sharjah",
  "Direct drop-off at your Dubai workplace",
  "Fixed monthly pricing",
  "Reserved daily seat",
  "WhatsApp confirmation each morning",
  "GPS-tracked vehicles",
];

export default function PickAndDropServiceSharjahPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a pick and drop service from Sharjah.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Pick and Drop Service Sharjah", description: "Door-to-door pick and drop service from Sharjah to Dubai and other UAE destinations. AED 130 sharing / AED 200 private per trip.", url: "/pick-and-drop-service-sharjah", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Pick and Drop Service Sharjah", url: "/pick-and-drop-service-sharjah" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/locations/sharjah/sharjah-car-lift-morning-pickup.webp", pageUrl: "/pick-and-drop-service-sharjah", caption: "Pick and drop service Sharjah – door-to-door commuter rides from Sharjah to Dubai" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #2e1065 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pick and Drop Service Sharjah" }]} className="mb-6 [&_*]:text-violet-300 [&_a]:text-violet-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-400/30 rounded-full px-4 py-1.5 text-sm text-violet-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Sharjah → Dubai Door-to-Door
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Pick and Drop Service Sharjah – Door-to-Door Commuter Rides
              </h1>
              <p className="text-violet-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Reliable door-to-door pick and drop service from Sharjah to Dubai and other UAE destinations. Pickup from your home in Sharjah, drop-off at your workplace. AED 130 sharing / AED 200 private.</p>
              <p className="text-violet-200/80 text-sm leading-relaxed mb-6 max-w-xl">Multiple morning departures from 6:30 AM. Evening return service available. Monthly packages with reserved seating.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key service stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: MapPin, label: "Door-to-Door", sub: "Full service" },
                  { icon: Shield, label: "GPS Tracked", sub: "Safe rides" },
                ].map(({ icon: Icon, label, sub }) => (
                  <li key={sub} className="bg-white/10 border border-white/15 rounded-xl p-4 text-center">
                    <Icon className="h-5 w-5 text-violet-400 mx-auto mb-1.5" aria-hidden="true" />
                    <p className="text-white font-extrabold text-base leading-none">{label}</p>
                    <p className="text-violet-200/70 text-xs mt-1">{sub}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop service Sharjah via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Dubai drop-off destinations">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-violet-400" aria-hidden="true" />Dubai Destinations</p>
              <ul className="space-y-3" role="list">
                {DROP_OFF_POINTS.map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="h-4 w-4 text-violet-400 shrink-0" aria-hidden="true" />
                    <span className="text-violet-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="py-14 sm:py-16 bg-violet-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Service Features</p>
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">What Makes Our Sharjah Pick &amp; Drop Different</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {SERVICE_FEATURES.map((feature) => (
              <li key={feature} className="flex items-center gap-3 bg-white border border-violet-100 rounded-2xl p-4">
                <CheckCircle className="h-5 w-5 text-violet-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-700 text-sm font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="timings-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">Schedule</p>
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Pick &amp; Drop Sharjah Timings</h2>
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
            <p className="text-violet-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQs</p>
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Pick &amp; Drop Service Sharjah – Common Questions</h2>
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
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">Related Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none" role="list">
            {[
              { href: "/pick-and-drop-service", label: "Pick and Drop Service UAE", desc: "All UAE areas" },
              { href: "/pick-and-drop-service-dubai", label: "Pick and Drop Service Dubai", desc: "Dubai door-to-door" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/car-lift-dubai-monthly", label: "Monthly Car Lift Dubai", desc: "Monthly packages" },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link href={href} className="group flex flex-col gap-2 p-5 border border-slate-200 hover:border-violet-300 rounded-2xl hover:shadow-md transition-all h-full">
                  <span className="font-bold text-slate-900 group-hover:text-violet-600 text-sm">{label}</span>
                  <span className="text-slate-500 text-xs flex-1">{desc}</span>
                  <span className="text-violet-500 text-xs font-medium flex items-center gap-1 mt-2">Learn more <ArrowRight className="h-3 w-3" aria-hidden="true" /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-label="Book pick and drop service Sharjah" className="py-14 bg-violet-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Sharjah Pick &amp; Drop Service</h2>
          <p className="text-violet-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily commuters trust Quick Car Lift Service UAE. Door-to-door from Sharjah — WhatsApp now to get started.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-violet-700 hover:bg-violet-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book pick and drop service Sharjah via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
