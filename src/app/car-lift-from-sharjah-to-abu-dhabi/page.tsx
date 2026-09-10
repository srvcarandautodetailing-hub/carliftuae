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
  title: "Car Lift Sharjah to Abu Dhabi – AED 130 Sharing / AED 200 Private | +971 54 330 8261",
  description: "Daily car lift from Sharjah to Abu Dhabi. AED 130 sharing / AED 200 private per trip. Al Nahda, Muweilah pickup. Mussafah, Khalifa City, MBZ City drop-off. Available 24/7. WhatsApp +971 54 330 8261.",
  keywords: "car lift from sharjah to abu dhabi, sharjah to abu dhabi car lift, car lift sharjah abu dhabi",
  alternates: { canonical: "https://www.carliftuae.com/car-lift-from-sharjah-to-abu-dhabi" },
  openGraph: {
    title: "Car Lift Sharjah to Abu Dhabi – AED 130 Sharing / AED 200 Private | +971 54 330 8261",
    description: "Daily car lift from Sharjah to Abu Dhabi. AED 130 sharing / AED 200 private. Mussafah, Khalifa City, MBZ City drop-off. 90–120 min journey.",
  },
};

const PAGE_FAQS = [
  { question: "Is there a car lift from Sharjah to Abu Dhabi?", answer: "Yes. Quick Car Lift Service UAE provides daily car lift from Sharjah to Abu Dhabi — covering Mussafah, Khalifa City, MBZ City, and other Abu Dhabi areas. AED 130 sharing / AED 200 private per trip." },
  { question: "How long is the journey from Sharjah to Abu Dhabi?", answer: "90–120 minutes from Al Nahda, Sharjah to Mussafah, Abu Dhabi via Sheikh Zayed Road passing through Dubai. Departure at 5:30 AM is fastest at ~90 minutes; 7:00 AM+ departures take 110–130 minutes due to Dubai traffic." },
  { question: "What Abu Dhabi areas does the Sharjah car lift cover?", answer: "We cover Mussafah, Khalifa City A and B, Mohamed Bin Zayed City (MBZ), Al Shamkha, Baniyas, and Al Raha. WhatsApp your exact Abu Dhabi destination for confirmation." },
  { question: "How much is a car lift from Sharjah to Abu Dhabi?", answer: "AED 130 sharing / AED 200 private per one-way trip. Monthly commuter packages are available at discounted rates for regular daily travellers." },
  { question: "What time does the Sharjah to Abu Dhabi car lift depart?", answer: "Morning: 5:30 AM, 6:00 AM, 6:30 AM from Sharjah (Abu Dhabi work shifts start early). Evening return from Abu Dhabi: 4:00 PM, 5:00 PM, 6:00 PM." },
  { question: "Is the Sharjah to Abu Dhabi car lift available on weekends?", answer: "Yes, weekend travel is available. WhatsApp +971 54 330 8261 to check availability and book your weekend trip. Pre-booking recommended for all weekend journeys." },
];

const PICKUP_AREAS = ["Al Nahda (Sharjah)", "Al Taawun", "Muweilah", "University City", "Al Majaz", "Al Qasimia"];
const DROP_OFF_POINTS = ["Mussafah", "Khalifa City A & B", "Mohamed Bin Zayed City (MBZ)", "Al Shamkha", "Baniyas", "Al Raha"];
const TIMINGS = [
  { label: "Sharjah → Abu Dhabi (Early Morning)", times: ["5:30 AM", "6:00 AM", "6:30 AM"], color: "bg-green-700" },
  { label: "Abu Dhabi → Sharjah (Evening)", times: ["4:00 PM", "5:00 PM", "6:00 PM"], color: "bg-slate-800" },
];

export default function CarLiftFromSharjahToAbuDhabiPage() {
  const whatsappHref = formatWhatsAppHref(BUSINESS.whatsapp, "Hi! I want to book a car lift from Sharjah to Abu Dhabi.");
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const schemas = [
    localBusinessSchema(),
    serviceSchema({ name: "Car Lift Sharjah to Abu Dhabi", description: "Daily car lift from Sharjah to Abu Dhabi. AED 130 sharing / AED 200 private. 90–120 min via Sheikh Zayed Road. All Abu Dhabi areas covered.", url: "/car-lift-from-sharjah-to-abu-dhabi", price: "130" }),
    faqSchema(PAGE_FAQS),
    breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Car Lift Sharjah to Abu Dhabi", url: "/car-lift-from-sharjah-to-abu-dhabi" }]),
    primaryImageOfPageSchema({ imageUrl: "/images/hero/carlift-uae-daily-commuters-interior.webp", pageUrl: "/car-lift-from-sharjah-to-abu-dhabi", caption: "Car lift from Sharjah to Abu Dhabi – long-distance daily route via Sheikh Zayed Road through Dubai" }),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />
      <section aria-labelledby="hero-heading" className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #022c22 100%)" }}>
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} aria-hidden="true" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Car Lift Sharjah to Abu Dhabi" }]} className="mb-6 [&_*]:text-emerald-300 [&_a]:text-emerald-200 [&_a:hover]:text-white" />
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-1.5 text-sm text-emerald-300 font-semibold mb-5">
                <Car className="h-4 w-4" aria-hidden="true" />Sharjah → Abu Dhabi
              </div>
              <h1 id="hero-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Car Lift Sharjah to Abu Dhabi – Long-Distance Daily Route
              </h1>
              <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-3 max-w-xl">Daily car lift from Sharjah to all major Abu Dhabi areas. AED 130 sharing / AED 200 private. Early morning departures from 5:30 AM to match Abu Dhabi work shift times.</p>
              <p className="text-emerald-200/80 text-sm leading-relaxed mb-6 max-w-xl">90–120 minute journey via Sheikh Zayed Road through Dubai to Abu Dhabi. Monthly commuter packages available.</p>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8" role="list" aria-label="Key route stats">
                {[
                  { icon: DollarSign, label: "AED 130 Sharing", sub: "Per trip" },
                  { icon: DollarSign, label: "AED 200 Private", sub: "Per trip" },
                  { icon: Clock, label: "90–120 min", sub: "Long route" },
                  { icon: Car, label: "From 5:30 AM", sub: "Early start" },
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
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book car lift Sharjah to Abu Dhabi via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />Book via WhatsApp</a>
                </Button>
                <Button asChild size="lg" className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20">
                  <a href={phoneHref} aria-label="Call Car Lift UAE"><Phone className="h-5 w-5" aria-hidden="true" />Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <aside className="lg:w-72 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6 shrink-0" aria-label="Abu Dhabi drop-off areas">
              <p className="text-white font-bold text-base mb-4 flex items-center gap-2"><MapPin className="h-5 w-5 text-emerald-400" aria-hidden="true" />Abu Dhabi Drop-off Areas</p>
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
            <h2 id="timings-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Sharjah to Abu Dhabi Timings</h2>
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
            <h2 id="faq-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">Car Lift Sharjah to Abu Dhabi – Common Questions</h2>
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
              { href: "/car-lift-dubai-to-abu-dhabi", label: "Car Lift Dubai to Abu Dhabi", desc: "AED 100 sharing / AED 170 private" },
              { href: "/car-lift-sharjah", label: "Car Lift Sharjah Hub", desc: "All Sharjah routes" },
              { href: "/pricing", label: "Full Pricing Guide", desc: "All UAE route prices" },
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

      <section aria-label="Book Sharjah to Abu Dhabi car lift" className="py-14 bg-emerald-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-0.5 mb-3" role="img" aria-label="4.9 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (<Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />))}
          </div>
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">Book Your Sharjah to Abu Dhabi Car Lift</h2>
          <p className="text-emerald-100 text-sm mb-6">{BUSINESS.reviewCount}+ daily riders trust Quick Car Lift Service UAE. Early morning seats fill fast — WhatsApp now.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="xl" className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Book Sharjah to Abu Dhabi car lift via WhatsApp"><MessageCircle className="h-5 w-5" aria-hidden="true" />WhatsApp – Book Now</a>
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
