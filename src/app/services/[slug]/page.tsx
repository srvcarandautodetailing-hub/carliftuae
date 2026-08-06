import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  ChevronDown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Breadcrumb from "@/components/sections/breadcrumb";
import CtaBanner from "@/components/sections/cta-banner";
import SchemaScript from "@/components/sections/schema-script";
import { serviceSchema, faqSchema } from "@/lib/schema";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

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

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "WhatsApp Us",
    description:
      "Send us a WhatsApp message with your pickup location, destination, and preferred timing. No app required.",
  },
  {
    step: 2,
    title: "Confirm Details",
    description:
      "We confirm your seat, share the driver's details, and provide the exact pickup point and departure time.",
  },
  {
    step: 3,
    title: "Get Your Pickup Point",
    description:
      "We'll assign you the nearest pickup point. Monthly riders get a fixed spot — just show up on time.",
  },
  {
    step: 4,
    title: "Ride Daily",
    description:
      "Your driver picks you up every working day. Relax and arrive at your destination on time, every time.",
  },
];

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} UAE – Reliable & Affordable Transport`,
    description:
      service.description +
      " Book now from " +
      service.price +
      " " +
      service.priceNote,
    alternates: { canonical: `https://www.carliftuae.com/services/${slug}` },
    openGraph: {
      title: `${service.name} UAE – Reliable & Affordable Transport`,
      description: service.description,
      images: [
        {
          url: `/og/services/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${service.name} UAE`,
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.icon] ?? Car;

  // Get 3 related services (exclude current)
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi! I'd like to book the ${service.name}. Please share availability and pricing details.`
  );

  const schemas = [
    serviceSchema({
      name: service.name,
      description: service.description,
      url: `/services/${slug}`,
      price: service.price,
    }),
    ...(service.faqs.length > 0 ? [faqSchema(service.faqs)] : []),
  ];

  return (
    <>
      <SchemaScript schema={schemas} />

      {/* ─── Hero Section ─── */}
      <section
        aria-labelledby="service-hero-heading"
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.name },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
                <Icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>

              <h1
                id="service-hero-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
              >
                {service.name}
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Price Badge */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-lg px-4 py-2 rounded-xl">
                  {service.price}
                </span>
                <span className="text-slate-400 text-sm">{service.priceNote}</span>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="whatsapp" size="lg">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${service.name} via WhatsApp`}
                  >
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    Book via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features Quick-view on Hero */}
            <div className="lg:w-80 bg-white/10 border border-white/15 backdrop-blur-sm rounded-2xl p-6">
              <p className="text-white font-bold text-base mb-4">
                What&apos;s Included
              </p>
              <ul className="space-y-2.5" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle
                      className="h-4 w-4 text-emerald-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Long Description ─── */}
      <section
        aria-labelledby="about-service-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                About This Service
              </p>
              <h2
                id="about-service-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-6"
              >
                {service.name} in UAE
              </h2>
              <p className="text-slate-600 leading-relaxed text-base">
                {service.longDescription}
              </p>
            </div>

            {/* Full Features Section */}
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                All Features
              </p>
              <h3 className="text-xl font-bold text-slate-900 mb-5">
                What&apos;s Included in {service.shortName}
              </h3>
              <ul className="space-y-3" role="list">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle
                      className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-slate-700 font-medium text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        aria-labelledby="how-it-works-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Simple Process
            </p>
            <h2
              id="how-it-works-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              How It Works
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
              Getting started with {service.shortName} takes less than 5
              minutes. No app needed.
            </p>
          </div>

          <ol
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 list-none"
            role="list"
          >
            {HOW_IT_WORKS.map(({ step, title, description }) => (
              <li key={step}>
                <Card className="h-full border-slate-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6 pt-6">
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-extrabold text-lg flex items-center justify-center mb-4">
                      {step}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ol>

          <div className="text-center mt-10">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Start booking ${service.name} via WhatsApp`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Start Now on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── FAQs ─── */}
      {service.faqs.length > 0 && (
        <section
          aria-labelledby="service-faqs-heading"
          className="py-16 sm:py-20 bg-white"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Common Questions
              </p>
              <h2
                id="service-faqs-heading"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
              >
                {service.shortName} FAQs
              </h2>
            </div>

            <dl className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-slate-200 rounded-2xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer p-5 sm:p-6 font-semibold text-slate-900 hover:bg-slate-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <dt className="text-left text-base">{faq.question}</dt>
                    <ChevronDown
                      className="h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <dd className="px-5 sm:px-6 pb-5 sm:pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                    {faq.answer}
                  </dd>
                </details>
              ))}
            </dl>

            <div className="mt-8 text-center">
              <p className="text-slate-600 text-sm mb-4">
                Have more questions about {service.shortName}?
              </p>
              <Button asChild variant="outline" size="default">
                <a
                  href={formatWhatsAppHref(
                    BUSINESS.whatsapp,
                    `Hi! I have a question about ${service.name}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* ─── Related Services ─── */}
      <section
        aria-labelledby="related-services-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Explore More
            </p>
            <h2
              id="related-services-heading"
              className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Other Car Lift Services
            </h2>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none"
            role="list"
          >
            {relatedServices.map((related) => {
              const RelatedIcon = iconMap[related.icon] ?? Car;
              return (
                <li key={related.slug}>
                  <Card className="h-full hover:shadow-md transition-shadow duration-200 group">
                    <CardContent className="p-6 pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-blue-100 transition-colors flex items-center justify-center shrink-0">
                          <RelatedIcon
                            className="h-5 w-5 text-blue-600"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="font-bold text-slate-900 text-sm leading-snug">
                          {related.name}
                        </h3>
                      </div>
                      <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-2">
                        {related.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="info" className="text-xs">
                          {related.price}
                        </Badge>
                        <Link
                          href={`/services/${related.slug}`}
                          className="text-blue-600 text-xs font-semibold hover:text-blue-800 flex items-center gap-1"
                        >
                          Learn More
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ul>

          <div className="text-center mt-8">
            <Button asChild variant="outline" size="default">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <CtaBanner />
    </>
  );
}
