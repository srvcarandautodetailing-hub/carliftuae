import Link from "next/link";
import {
  Plane,
  MapPin,
  Clock,
  CheckCircle,
  MessageCircle,
  Phone,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";
import { AIRPORTS, type AirportInfo } from "@/data/airports";

export default function AirportPageTemplate({ airport }: { airport: AirportInfo }) {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi! I need an airport car lift at ${airport.code} (${airport.name}). My flight details are: `
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);
  const otherAirports = AIRPORTS.filter((a) => a.slug !== airport.slug);

  return (
    <>
      {/* ── Hero ── */}
      <section
        aria-labelledby="airport-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Airport Car Lift", href: "/airport-car-lift" },
              { label: airport.shortName },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-300 font-semibold mb-5">
            <Plane className="h-4 w-4" aria-hidden="true" />
            {airport.code} · {airport.terminals}
          </div>
          <h1
            id="airport-hero-heading"
            className="speakable-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            {airport.code} Airport Car Lift – Pickup &amp; Drop-off
          </h1>
          <p className="speakable-desc text-blue-100 text-base sm:text-lg leading-relaxed mb-3 max-w-2xl">
            Pre-booked private car lift at {airport.name} ({airport.code}). Share your
            flight number on WhatsApp and we coordinate your pickup timing — no surge
            pricing, no waiting in taxi queues.
          </p>
          <p className="text-blue-200/80 text-sm leading-relaxed mb-8 max-w-2xl">
            {airport.driveNote}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="whatsapp" size="lg" className="min-h-[52px]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${airport.code} airport car lift via WhatsApp`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Airport Pickup
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="min-h-[52px] border-2 border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Pickup points ── */}
      <section aria-labelledby="pickup-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Where We Meet You
            </p>
            <h2
              id="pickup-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              {airport.code} Pickup Points
            </h2>
            <p className="text-slate-600 text-sm max-w-lg mx-auto">
              Your driver confirms the exact meeting point on WhatsApp before you land.
            </p>
          </div>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none max-w-3xl mx-auto"
            role="list"
          >
            {airport.pickupPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5"
              >
                <MapPin className="h-4 w-4 text-blue-500 shrink-0" aria-hidden="true" />
                <span className="text-slate-800 font-medium text-sm">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── How it works ── */}
      <section aria-labelledby="how-heading" className="py-14 sm:py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2
              id="how-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              How Airport Pickup Works
            </h2>
          </div>
          <ol
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none max-w-4xl mx-auto"
            role="list"
          >
            {[
              {
                icon: MessageCircle,
                title: "1. WhatsApp your flight",
                desc: `Send your flight number, arrival time and destination to ${BUSINESS.phone}.`,
              },
              {
                icon: CheckCircle,
                title: "2. We confirm",
                desc: "Driver name, pickup terminal and fixed fare confirmed before you land.",
              },
              {
                icon: Clock,
                title: "3. Meet & ride",
                desc: "Your driver meets you at arrivals and drives you to your destination.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <li
                key={title}
                className="bg-white border border-slate-200 rounded-2xl p-6 text-center"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-2">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── FAQ (byte-matched with FAQPage schema) ── */}
      <section aria-labelledby="faq-heading" className="py-14 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              FAQs
            </p>
            <h2
              id="faq-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3"
            >
              {airport.code} Airport Car Lift – Common Questions
            </h2>
          </div>
          <dl className="space-y-4">
            {airport.faqs.map((faq, i) => (
              <details
                key={i}
                className="group border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden min-h-[56px]">
                  <dt className="text-left text-base">{faq.question}</dt>
                  <ChevronDown
                    className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <dd className="px-5 pb-5 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                  {faq.answer}
                </dd>
              </details>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Other airports ── */}
      <section aria-label="Other airport car lift pages" className="py-12 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 text-center">
            Other UAE Airport Pickups
          </h2>
          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 list-none"
            role="list"
          >
            {otherAirports.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/${a.slug}`}
                  className="group flex flex-col gap-2 p-5 border border-slate-200 bg-white hover:border-blue-300 rounded-2xl hover:shadow-md transition-all h-full min-h-[88px]"
                >
                  <span className="font-bold text-slate-900 group-hover:text-blue-600 text-sm">
                    {a.code} – {a.name}
                  </span>
                  <span className="text-slate-500 text-xs flex-1">{a.terminals}</span>
                  <span className="text-blue-500 text-xs font-medium flex items-center gap-1 mt-2">
                    View airport page{" "}
                    <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section aria-label={`Book ${airport.code} airport car lift`} className="py-14 bg-blue-700">
        <div className="max-w-xl mx-auto px-4 text-center">
          <Plane className="h-8 w-8 text-blue-200 mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl mb-3">
            Book Your {airport.code} Airport Pickup
          </h2>
          <p className="text-blue-100 text-sm mb-6">
            Pre-booked private ride. Fixed fare confirmed before you land.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="xl"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold min-h-[56px]"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book ${airport.code} airport car lift via WhatsApp`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp – Book Now
              </a>
            </Button>
            <Button
              asChild
              size="xl"
              className="min-h-[56px] border-2 border-white/40 bg-white/10 text-white hover:bg-white/20"
            >
              <a href={phoneHref}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
