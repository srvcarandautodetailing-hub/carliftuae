"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  MessageCircle,
  MapPin,
  Star,
  Shield,
  Navigation,
  Calendar,
  Car,
  Users,
  Route,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

const trustBadges = [
  { icon: Star, label: "Fixed Fares", color: "text-amber-400" },
  { icon: Navigation, label: "All Directions", color: "text-emerald-400" },
  { icon: Calendar, label: "Daily Service", color: "text-violet-400" },
  { icon: Users, label: "Shared & Private", color: "text-blue-400" },
];

const stats = [
  { icon: Car, value: "AED 200", label: "Dubai ↔ Abu Dhabi" },
  { icon: Route, value: "AED 280", label: "Abu Dhabi ↔ Sharjah" },
  { icon: TrendingUp, value: "AED 300", label: "Abu Dhabi ↔ Ajman" },
  { icon: Users, value: "AED 250+", label: "Airport Transfers" },
];

export default function HeroSection() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'm interested in a daily car lift. Please share details about routes and pricing."
  );

  return (
    <section
      aria-label="Quick Car Lift Service UAE – Dubai, Abu Dhabi, Sharjah, Ajman"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background photo */}
      <Image
        src="/images/hero/carlift-uae-daily-commuters-interior.webp"
        alt="Quick Car Lift Service UAE – comfortable shared car lift rides across UAE"
        fill
        priority
        quality={84}
        sizes="100vw"
        className="object-cover opacity-[0.13] select-none pointer-events-none"
      />

      {/* Animated mesh gradient background */}
      <div
        className="absolute inset-0 hero-gradient hero-mesh"
        aria-hidden="true"
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Glowing orbs */}
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 lg:gap-8"
        >
          {/* Route badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 border border-white/10">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <MapPin className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                Dubai · Abu Dhabi · Sharjah · Ajman
              </span>
              <Badge variant="default" className="text-[11px] px-2 py-0">
                Live
              </Badge>
            </div>
          </motion.div>

          {/* Main heading — static div so browser paints H1 immediately (LCP) */}
          <div className="max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              MJ{" "}
              <span className="gradient-text">Car Lift</span>{" "}
              Service
            </h1>
          </div>

          {/* Sub-heading — static for LCP */}
          <div>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300 tracking-wide">
              Dubai · Abu Dhabi · Sharjah · Ajman
            </p>
          </div>

          {/* Description — static (no JS animation) for LCP optimisation */}
          <div className="max-w-2xl">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Reliable car lift and carpool service on confirmed inter-emirate routes.{" "}
              <span className="text-white font-semibold">From AED 200/trip.</span>{" "}
              Air-conditioned vehicles.{" "}
              <span className="text-amber-400 font-semibold">Book by phone or WhatsApp.</span>
            </p>
          </div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="whatsapp-pulse w-full sm:w-auto shadow-2xl"
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
              className="w-full sm:w-auto border-2 border-blue-400 bg-transparent text-blue-300 hover:bg-blue-900/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
            >
              <Link href="/pricing" aria-label="View our car lift pricing plans">
                View Pricing
              </Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4"
          >
            {trustBadges.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10"
              >
                <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                <span className="text-sm font-medium text-white/85">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl mt-4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1.5 glass px-4 py-5 sm:py-6"
                >
                  <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  <span className="text-2xl sm:text-3xl font-extrabold text-white leading-none">
                    {value}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-400 text-center leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social proof micro-copy */}
          <motion.div variants={itemVariants}>
            <p className="text-sm text-slate-500">
              Contact us to book your seat on any of our confirmed inter-emirate routes
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}


