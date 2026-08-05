"use client";

import { motion } from "framer-motion";
import { CheckCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING_PLANS, type PricingPlan } from "@/data/pricing";
import { BUSINESS, formatWhatsAppHref, cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52 },
  },
};

function PricingCard({ plan }: { plan: PricingPlan }) {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi! I'm interested in the ${plan.name} package. Please share more details.`
  );

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.025, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "relative flex flex-col bg-white rounded-2xl border shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl",
        plan.highlight
          ? "border-blue-500 ring-2 ring-blue-500/30 shadow-blue-100"
          : "border-slate-200"
      )}
      aria-label={`${plan.name} pricing plan`}
    >
      {/* Most Popular ribbon */}
      {plan.highlight && (
        <div
          className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-t-2xl"
          aria-hidden="true"
        />
      )}

      <div className="flex flex-col flex-1 p-6 pt-7">
        {/* Header row: name + badge */}
        <div className="flex items-start justify-between gap-2 mb-4">
          <h3 className="text-lg font-bold text-slate-900 leading-tight">
            {plan.name}
          </h3>
          {plan.badge && (
            <Badge
              variant={plan.highlight ? "default" : "info"}
              className="shrink-0 text-[11px] whitespace-nowrap"
            >
              {plan.badge}
            </Badge>
          )}
        </div>

        {/* Price display */}
        <div className="mb-2">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-extrabold text-slate-900">
              AED {plan.price.toLocaleString()}
            </span>
            <span className="text-sm font-medium text-slate-500">
              /{plan.period}
            </span>
          </div>
        </div>

        {/* Route example */}
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin className="h-3.5 w-3.5 text-blue-400 shrink-0" aria-hidden="true" />
          <span className="text-xs text-slate-500 font-medium">{plan.routeExample}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed mb-5">
          {plan.description}
        </p>

        {/* Feature list */}
        <ul className="flex flex-col gap-2.5 mb-6 flex-1" role="list">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              <CheckCircle
                className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-sm text-slate-700 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Button
          asChild
          variant={plan.highlight ? "cta" : "default"}
          size="default"
          className="w-full mt-auto"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${plan.ctaText} â€“ ${plan.name}`}
          >
            {plan.ctaText}
          </a>
        </Button>
      </div>
    </motion.article>
  );
}

export default function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
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
          <motion.p
            variants={headingVariants}
            className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Pricing Plans
          </motion.p>

          <motion.h2
            id="pricing-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto"
          >
            No hidden charges. Salik tolls included. Cancel anytime.
          </motion.p>
        </motion.div>

        {/* Pricing cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="mt-10 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All prices are per person. Prices may vary slightly based on pickup
          location.{" "}
          <a
            href={formatWhatsAppHref(
              BUSINESS.whatsapp,
              "Hi! I'd like to get a custom quote for a car lift."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            Get a custom quote
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}


