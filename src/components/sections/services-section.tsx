"use client";

import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function ServicesSection() {
  return (
    <section
      aria-labelledby="services-heading"
      className="section-padding bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
        >
          <motion.div variants={headingVariants} className="flex justify-center mb-3">
            <Badge variant="info" className="px-3 py-1 text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="h-3 w-3 mr-1.5" aria-hidden="true" />
              What We Offer
            </Badge>
          </motion.div>

          <motion.h2
            id="services-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Our Car Lift Services
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            From daily shared rides to private executive transport, we have a
            car lift solution for every commuter in the UAE.
          </motion.p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon] ?? Car;
            return (
              <motion.article
                key={service.slug}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-blue-100 hover:shadow-xl hover:border-blue-200 transition-shadow duration-300 flex flex-col overflow-hidden"
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
                      <Icon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <Badge
                      variant="info"
                      className="text-xs font-semibold shrink-0 ml-2"
                    >
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
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-200 group/link mt-auto"
                  >
                    Learn More<span className="sr-only"> about {service.name}</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg" variant="default">
            <Link href="/services" aria-label="View all car lift services">
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <p className="mt-3 text-sm text-slate-500">
            Can&apos;t find what you need?{" "}
            <Link
              href="/contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Contact us
            </Link>{" "}
            for a custom solution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


