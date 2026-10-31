import Link from "next/link";
import Image from "next/image";
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
  ArrowRight,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SERVICES } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
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

export default function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="flex justify-center mb-3">
            <Badge
              variant="info"
              className="px-3 py-1 text-xs font-semibold tracking-wider uppercase"
            >
              <Sparkles className="h-3 w-3 mr-1.5" aria-hidden="true" />
              What We Offer
            </Badge>
          </div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Our Car Lift Services
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From daily shared rides to private executive transport, we have a car lift
            solution for every commuter in the UAE.
          </p>
        </div>

        {/* Feature image strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            {
              src: "/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp",
              alt: "Toyota Camry from our car lift fleet in Dubai – daily car lift UAE",
            },
            {
              src: "/images/fleet/car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp",
              alt: "Honda Civic from our car lift fleet – comfortable daily rides UAE",
            },
            {
              src: "/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp",
              alt: "Lexus ES from our fleet – airport transfer car lift Dubai",
            },
            {
              src: "/images/fleet/car-lift-dubai-lexus-es-side-quick-car-lift-uae.webp",
              alt: "Lexus ES executive car lift – premium daily transport UAE",
            },
          ].map(({ src, alt }) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm"
            >
              <Image
                src={src}
                alt={alt}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, 25vw"
                quality={70}
              />
            </div>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Car;
            return (
              <article
                key={service.slug}
                className="hover-card group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 flex flex-col overflow-hidden"
              >
                {/* Blue top accent */}
                <div
                  className="h-1 w-full bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600"
                  aria-hidden="true"
                />

                <div className="flex flex-col flex-1 p-6">
                  {/* Icon + price badge row */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 group-hover:border-blue-200 transition-colors duration-200">
                      <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <Badge variant="info" className="text-xs font-semibold shrink-0 ml-2">
                      {service.price}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors duration-200">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-4">
                    {service.description}
                  </p>

                  {/* Price note */}
                  <p className="text-xs text-slate-400 mb-5 font-medium">
                    {service.priceNote}
                  </p>

                  {/* Learn More link */}
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 group/link mt-auto min-h-[44px]"
                  >
                    Learn More<span className="sr-only"> about {service.name}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="default" className="min-h-[52px]">
            <Link href="/services" aria-label="View all car lift services">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <p className="mt-3 text-sm text-slate-500">
            Can&apos;t find what you need?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium min-h-[44px] inline-flex items-center"
            >
              Contact us
            </Link>{" "}
            for a custom solution.
          </p>
        </div>
      </div>
    </section>
  );
}
