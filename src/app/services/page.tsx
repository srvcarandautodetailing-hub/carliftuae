import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  CalendarCheck,
  Building2,
  Users,
  Heart,
  HeartHandshake,
  Plane,
  Briefcase,
  Shield,
  GraduationCap,
  CheckCircle,
  MessageCircle,
  ArrowRight,
  HelpCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/sections/breadcrumb";
import CtaBanner from "@/components/sections/cta-banner";
import SchemaScript from "@/components/sections/schema-script";
import { serviceSchema } from "@/lib/schema";
import { SERVICES } from "@/data/services";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car Lift Services UAE – Daily, Monthly, Ladies, Corporate & More",
  description:
    "Explore all car lift services in UAE. Daily rides, monthly packages, ladies car lift, corporate transport, airport transfers and more.",
  alternates: { canonical: "https://www.carliftuae.com/services" },
  openGraph: {
    title: "Car Lift Services UAE – Daily, Monthly, Ladies, Corporate & More",
    description:
      "Explore all car lift services in UAE. Daily rides, monthly packages, ladies car lift, corporate transport, airport transfers and more.",
    images: [
      {
        url: "/og/services.jpg",
        width: 1200,
        height: 630,
        alt: "Car Lift UAE Services",
      },
    ],
  },
};

// Icon map for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Car,
  CalendarCheck,
  Building2,
  Users,
  Heart,
  HeartHandshake,
  Plane,
  Briefcase,
  Shield,
  GraduationCap,
};

const comparisonData = [
  {
    question: "I commute to work every day",
    answer: "Monthly Car Lift Package",
    slug: "monthly-car-lift",
    note: "Best value – reserved seat, fixed timing",
  },
  {
    question: "I only need a ride occasionally",
    answer: "Daily Car Lift Service",
    slug: "daily-car-lift",
    note: "Flexible – book day by day",
  },
  {
    question: "I want a ladies-only ride",
    answer: "Ladies Car Lift Service",
    slug: "ladies-car-lift",
    note: "Female driver option, verified passengers",
  },
  {
    question: "I need to transport my employees",
    answer: "Staff or Corporate Transport",
    slug: "corporate-transport",
    note: "Custom routes, invoicing, fleet management",
  },
  {
    question: "I need an airport pick-up or drop-off",
    answer: "Airport Transfer Service",
    slug: "airport-transfer",
    note: "Flight tracking, 24/7, all UAE airports",
  },
  {
    question: "I'm travelling with my children",
    answer: "Family Car Lift Service",
    slug: "family-car-lift",
    note: "Child seat available, flexible timings",
  },
  {
    question: "I want complete privacy during my ride",
    answer: "Private Car Lift Service",
    slug: "private-car-lift",
    note: "Exclusive vehicle, Wi-Fi, phone charger",
  },
  {
    question: "I need safe transport for my child to school",
    answer: "School Transport Service",
    slug: "school-transport",
    note: "GPS tracking, parent notifications, trained drivers",
  },
];

export default function ServicesPage() {
  const schemas = SERVICES.map((s) =>
    serviceSchema({
      name: s.name,
      description: s.description,
      url: `/services/${s.slug}`,
      price: s.price,
    })
  );

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ─── Page Hero ─── */}
      <section
        aria-labelledby="services-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <h1
            id="services-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Car Lift Services in UAE
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8">
            From daily commutes to corporate fleet management — we have a car
            lift solution for every UAE resident. Trusted by 500+ riders.
          </p>
          <div className="flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-block bg-white/10 border border-white/15 text-white/80 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section
        aria-labelledby="services-grid-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              All Services
            </p>
            <h2
              id="services-grid-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Choose the Right Car Lift for You
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              Every service is backed by GPS tracking, verified drivers, and
              WhatsApp support. Select a service to learn more.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
            role="list"
          >
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon] ?? Car;
              const whatsappHref = formatWhatsAppHref(
                BUSINESS.whatsapp,
                `Hi! I'm interested in the ${service.name}. Please share details and availability.`
              );

              return (
                <li key={service.slug} id={service.slug}>
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 group border-slate-200">
                    <CardContent className="p-6 pt-6 flex flex-col h-full">
                      {/* Icon + Name */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center shrink-0">
                          <Icon
                            className="h-6 w-6 text-blue-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-lg font-bold text-slate-900 leading-snug">
                            {service.name}
                          </h2>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="info" className="text-xs">
                              {service.price}
                            </Badge>
                            <span className="text-xs text-slate-500">
                              {service.priceNote}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>

                      {/* Key Features */}
                      <ul className="space-y-2 mb-6 flex-1" role="list">
                        {service.features.slice(0, 4).map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-slate-700"
                          >
                            <CheckCircle
                              className="h-4 w-4 text-emerald-500 shrink-0"
                              aria-hidden="true"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-2 mt-auto pt-4 border-t border-slate-100">
                        <Button
                          asChild
                          variant="whatsapp"
                          size="sm"
                          className="flex-1"
                        >
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Book ${service.name} via WhatsApp`}
                          >
                            <MessageCircle
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                            Book This Service
                          </a>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1"
                        >
                          <Link href={`/services/${service.slug}`}>
                            Learn More
                            <ArrowRight
                              className="h-4 w-4"
                              aria-hidden="true"
                            />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ─── Which Service Is Right for Me? ─── */}
      <section
        aria-labelledby="comparison-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Service Selector
            </p>
            <h2
              id="comparison-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Which Service Is Right for Me?
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              Answer one question and we&apos;ll point you to the perfect car
              lift service.
            </p>
          </div>

          <div className="space-y-3">
            {comparisonData.map(({ question, answer, slug, note }) => (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="block group"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-5 rounded-2xl border border-slate-200 bg-slate-50 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200">
                  <div className="flex items-start gap-3 flex-1">
                    <HelpCircle
                      className="h-5 w-5 text-blue-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-slate-700 text-sm">
                        {question}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">{note}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:shrink-0">
                    <Badge
                      variant="info"
                      className="text-xs font-semibold whitespace-nowrap"
                    >
                      {answer}
                    </Badge>
                    <ArrowRight
                      className="h-4 w-4 text-blue-400 group-hover:text-blue-600 transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-600 text-sm mb-4">
              Still not sure? WhatsApp us — we&apos;ll recommend the best
              option for your route and budget.
            </p>
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={formatWhatsAppHref(
                  BUSINESS.whatsapp,
                  "Hi! I'm not sure which car lift service suits me best. Can you help?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Get a Recommendation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CtaBanner />
    </>
  );
}
