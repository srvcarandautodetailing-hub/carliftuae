"use client";

import { motion } from "framer-motion";
import {
  Shield,
  MapPin,
  CheckCircle,
  Heart,
  Home,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
  accentColor: string;
  bgColor: string;
}

const benefits: Benefit[] = [
  {
    icon: Shield,
    title: "Save AED 600+/Month",
    description:
      "Stop paying for fuel, parking, Salik, and car maintenance. Switch to a shared car lift and put AED 600–1,200 back in your pocket every month vs. driving yourself.",
    accentColor: "text-amber-400",
    bgColor: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: MapPin,
    title: "GPS Tracked Rides",
    description:
      "Every vehicle in our fleet broadcasts real-time GPS location. Share your live trip with family, stay informed of arrival times, and travel with complete peace of mind.",
    accentColor: "text-blue-400",
    bgColor: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: CheckCircle,
    title: "Verified Drivers",
    description:
      "All Car Lift UAE drivers undergo thorough background checks, Emirates ID verification, and driving record screening before they carry a single passenger.",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Heart,
    title: "Ladies-Only Options",
    description:
      "We offer exclusive ladies-only vehicles with optional female drivers. Designed for women professionals who prioritise safety, comfort, and privacy during their daily commute.",
    accentColor: "text-rose-400",
    bgColor: "bg-rose-400/10 border-rose-400/20",
  },
  {
    icon: Home,
    title: "Door-to-Door Service",
    description:
      "Your driver picks you up from your building entrance and drops you at your office door. No more walking to metro stops or waiting at shared pickup zones.",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Zap,
    title: "Salik Included",
    description:
      "Every package includes Salik toll charges. No surprise deductions, no end-of-month bills for road tolls. Your monthly rate is your total cost – full stop.",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10 border-cyan-400/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52 },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function WhyChooseSection() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="section-padding bg-slate-900 relative overflow-hidden"
    >
      {/* Decorative background mesh */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(at 20% 30%, rgba(37, 99, 235, 0.25) 0px, transparent 50%), radial-gradient(at 80% 70%, rgba(16, 185, 129, 0.15) 0px, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3"
          >
            Why Car Lift UAE
          </motion.p>

          <motion.h2
            id="why-choose-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight"
          >
            Why{" "}
            <span className="gradient-text">500+ Professionals</span>{" "}
            Choose Car Lift UAE
          </motion.h2>

          <motion.p
            variants={headingVariants}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            More than just a ride – a smarter way to commute across Sharjah,
            Dubai, and Ajman every working day.
          </motion.p>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group glass rounded-2xl border border-white/10 p-6 hover:border-white/20 hover:bg-white/[0.08] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${benefit.bgColor} mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon
                    className={`h-6 w-6 ${benefit.accentColor}`}
                    aria-hidden="true"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="inline-block glass rounded-2xl border border-white/10 px-8 py-6 max-w-2xl">
            <p className="text-slate-300 text-base leading-relaxed">
              <span className="text-white font-semibold">
                The average Car Lift UAE rider saves AED 700–1,200/month
              </span>{" "}
              compared to driving – that&apos;s AED 8,400–14,400 per year back in
              your pocket, plus hours of stress-free commute time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


