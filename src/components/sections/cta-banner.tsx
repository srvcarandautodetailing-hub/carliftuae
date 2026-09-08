"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

export default function CtaBanner() {
  const shouldReduceMotion = useReducedMotion();
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'm ready to book a car lift. Please share available slots and pricing."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0c2340 70%, #0f172a 100%)",
      }}
    >
      {/* Animated floating gradient orbs */}
      <motion.div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.15, 1], x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], x: [0, -18, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none hidden sm:block"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        animate={shouldReduceMotion ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur-sm">
              <span
                className="relative flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Seats Available Now
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            id="cta-heading"
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-5"
          >
            Ready to Simplify Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Daily Commute?
            </span>
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Quick Car Lift Service UAE covers{" "}
            <span className="text-white font-semibold">Dubai, Abu Dhabi, Sharjah &amp; Ajman</span>.{" "}
            Fixed fares, air-conditioned vehicles, book by phone or WhatsApp.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="w-full sm:w-auto whatsapp-pulse shadow-2xl shadow-emerald-900/50"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book car lift via WhatsApp"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Us Now
              </a>
            </Button>

            <Button
              asChild
              size="xl"
              className="w-full sm:w-auto border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
            >
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Trust message */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-2"
          >
            <div
              className="flex items-center gap-0.5"
              role="img"
              aria-label="Fixed fares, air-conditioned vehicles, book by WhatsApp"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-white/80">
              Fixed fares · Air-conditioned vehicles · Book by WhatsApp
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

