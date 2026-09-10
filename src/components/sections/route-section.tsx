"use client";

import { motion } from "framer-motion";
import { MessageCircle, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTE_PRICES, type RoutePrice } from "@/data/pricing";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function buildWhatsAppMessage(route: RoutePrice): string {
  return `Hi! I'm interested in a car lift on the ${route.route} route. Sharing AED ${route.sharing} / Private AED ${route.private}. Please share more details.`;
}

// Desktop table row
function RouteTableRow({
  route,
  index,
}: {
  route: RoutePrice;
  index: number;
}) {
  const waHref = formatWhatsAppHref(BUSINESS.whatsapp, buildWhatsAppMessage(route));
  const isPopular = index === 0;

  return (
    <motion.tr
      variants={rowVariants}
      className="group border-b border-slate-100 last:border-0 hover:bg-blue-50/60 transition-colors duration-150"
    >
      {/* Route */}
      <td className="py-4 px-4 sm:px-6">
        <div className="flex items-center gap-2 flex-wrap">
          <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
          <span className="font-semibold text-slate-900 text-sm">
            {route.route}
          </span>
          {isPopular && (
            <Badge variant="default" className="text-[11px] px-2 py-0 ml-1">
              Most Popular
            </Badge>
          )}
        </div>
      </td>

      {/* Sharing rate */}
      <td className="py-4 px-4 sm:px-6 text-center">
        <span className="text-lg font-extrabold text-blue-700">
          AED {route.sharing}
        </span>
        <span className="block text-xs text-slate-400 font-medium mt-0.5">
          sharing
        </span>
      </td>

      {/* Private rate */}
      <td className="py-4 px-4 sm:px-6 text-center">
        <span className="text-sm font-bold text-slate-700">
          AED {route.private}
        </span>
        <span className="block text-xs text-slate-400 font-medium mt-0.5">
          private
        </span>
      </td>

      {/* CTA */}
      <td className="py-4 px-4 sm:px-6 text-right">
        <Button asChild variant="whatsapp" size="sm">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book car lift on ${route.route} via WhatsApp`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Book Route</span>
            <span className="sm:hidden">Book</span>
          </a>
        </Button>
      </td>
    </motion.tr>
  );
}

// Mobile card
function RouteMobileCard({
  route,
  index,
}: {
  route: RoutePrice;
  index: number;
}) {
  const waHref = formatWhatsAppHref(BUSINESS.whatsapp, buildWhatsAppMessage(route));
  const isPopular = index === 0;

  return (
    <motion.div
      variants={rowVariants}
      className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 p-4"
    >
      {/* Route header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="font-bold text-slate-900 text-sm">{route.route}</span>
        </div>
        {isPopular && (
          <Badge variant="default" className="text-[11px] px-2 py-0 shrink-0">
            Popular
          </Badge>
        )}
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 bg-blue-50 rounded-lg px-3 py-2 text-center border border-blue-100">
          <span className="block text-xs text-blue-600 font-semibold mb-0.5">
            Sharing
          </span>
          <span className="text-xl font-extrabold text-blue-700">
            AED {route.sharing}
          </span>
        </div>
        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2 text-center border border-slate-100">
          <span className="block text-xs text-slate-500 font-semibold mb-0.5">
            Private
          </span>
          <span className="text-lg font-bold text-slate-700">
            AED {route.private}
          </span>
        </div>
      </div>

      {/* CTA */}
      <Button asChild variant="whatsapp" size="sm" className="w-full">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book car lift on ${route.route} via WhatsApp`}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Book This Route
        </a>
      </Button>
    </motion.div>
  );
}

export default function RouteSection() {
  const generalWaHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'd like to know more about car lift routes and pricing."
  );

  // Show only unique bidirectional routes (deduplicate A→B and B→A)
  const uniqueRoutes = ROUTE_PRICES.filter((_, i) => i % 2 === 0);

  return (
    <section
      aria-labelledby="routes-heading"
      className="section-padding bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-10 lg:mb-14"
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
            id="routes-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Car Lift Routes &amp; Fares
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            Fixed fares per trip. No surge pricing. Both directions available on every route.
          </motion.p>
        </motion.div>

        {/* Desktop: table (hidden on mobile) */}
        <motion.div
          className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          <table className="w-full" aria-label="Car lift route prices">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-left text-sm font-semibold tracking-wide"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-center text-sm font-semibold tracking-wide"
                >
                  Sharing
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-center text-sm font-semibold tracking-wide"
                >
                  Private
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-right text-sm font-semibold tracking-wide"
                >
                  Book
                </th>
              </tr>
            </thead>
            <tbody>
              {uniqueRoutes.map((route, index) => (
                <RouteTableRow key={route.route} route={route} index={index} />
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile: cards (hidden on md+) */}
        <motion.div
          className="grid grid-cols-1 gap-4 md:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={containerVariants}
        >
          {uniqueRoutes.map((route, index) => (
            <RouteMobileCard
              key={`${route.route}-mobile`}
              route={route}
              index={index}
            />
          ))}
        </motion.div>

        {/* Footnote + general CTA */}
        <motion.div
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl border border-slate-200 px-6 py-5 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <p className="font-semibold text-slate-800 text-sm">
              Ready to book?
            </p>
            <p className="text-sm text-slate-500 mt-0.5">
              Contact Quick Car Lift Service UAE by phone or WhatsApp to confirm your seat.
            </p>
          </div>
          <Button asChild variant="whatsapp" size="default" className="shrink-0">
            <a
              href={generalWaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a car lift via WhatsApp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book via WhatsApp
            </a>
          </Button>
        </motion.div>

        {/* Pricing transparency note */}
        <motion.p
          className="mt-5 text-center text-xs text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          All fares are per trip, one way. Sharing = shared vehicle · Private = exclusive vehicle. Both directions served on every route. Available 24/7.
        </motion.p>
      </div>
    </section>
  );
}


