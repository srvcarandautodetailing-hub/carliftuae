"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ROUTE_PRICES, type RoutePrice } from "@/data/pricing";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

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

// Canonical display routes with sharing/private pricing
const CANONICAL_ROUTES: RoutePrice[] = [
  { route: "Dubai ↔ Abu Dhabi", sharing: 100, private: 170 },
  { route: "Abu Dhabi ↔ Sharjah", sharing: 130, private: 200 },
  { route: "Abu Dhabi ↔ Ajman", sharing: 130, private: 200 },
];

function PricingCard({ route }: { route: RoutePrice }) {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi! I'm interested in a car lift on the ${route.route} route. Please share more details.`
  );

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative flex flex-col bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl focus-within:shadow-xl focus-within:border-blue-300"
      aria-label={`${route.route} pricing`}
    >
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 rounded-t-2xl" aria-hidden="true" />

      <div className="flex flex-col flex-1 p-6 pt-7">
        <h3 className="text-lg font-bold text-slate-900 leading-tight mb-5">
          {route.route}
        </h3>

        <ul className="flex flex-col gap-3 mb-6 flex-1" role="list">
          <li className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-sm text-slate-700">
              Sharing: <span className="font-bold text-slate-900">AED {route.sharing}</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-sm text-slate-700">
              Private: <span className="font-bold text-slate-900">AED {route.private}</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-sm text-slate-700">Luxury air-conditioned vehicle</span>
          </li>
          <li className="flex items-center gap-3">
            <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" aria-hidden="true" />
            <span className="text-sm text-slate-700">Available 24/7 · Book via WhatsApp</span>
          </li>
        </ul>

        <Button
          asChild
          variant="whatsapp"
          size="lg"
          className="w-full mt-auto"
        >
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book ${route.route} car lift via WhatsApp`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Book This Route
          </a>
        </Button>
      </div>
    </motion.article>
  );
}

export default function PricingSection() {
  void ROUTE_PRICES; // imported for reference – canonical display uses CANONICAL_ROUTES
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
            Routes &amp; Pricing
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
            Fixed rates per trip. No hidden charges. Book by phone or WhatsApp.
          </motion.p>
        </motion.div>

        {/* Pricing cards grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {CANONICAL_ROUTES.map((route) => (
            <PricingCard key={route.route} route={route} />
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
          Prices are per trip, one way. Contact us for group bookings or custom arrangements.{" "}
          <a
            href={formatWhatsAppHref(
              BUSINESS.whatsapp,
              "Hi! I'd like to book a car lift."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-700 transition-colors"
          >
            WhatsApp us now
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}


