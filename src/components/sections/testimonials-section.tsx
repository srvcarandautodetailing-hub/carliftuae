"use client";

import { motion } from "framer-motion";
import { Star, BadgeCheck, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { TESTIMONIALS, type Testimonial } from "@/data/testimonials";
import { BUSINESS } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
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

// Generate a consistent avatar background color from a string
function getAvatarColor(name: string): string {
  const colors = [
    "bg-blue-600",
    "bg-emerald-600",
    "bg-violet-600",
    "bg-amber-600",
    "bg-rose-600",
    "bg-cyan-700",
    "bg-indigo-600",
    "bg-teal-600",
  ];
  const index =
    name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    colors.length;
  return colors[index];
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "star-filled fill-amber-400" : "star-empty fill-slate-200"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const avatarColor = getAvatarColor(testimonial.name);
  const initials = getInitials(testimonial.name);

  return (
    <motion.article
      variants={cardVariants}
      className="group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300 flex flex-col p-6 overflow-hidden"
      aria-label={`Review by ${testimonial.name}`}
    >
      {/* Decorative quote mark */}
      <Quote
        className="absolute top-4 right-4 h-8 w-8 text-blue-50 group-hover:text-blue-100 transition-colors duration-200"
        aria-hidden="true"
      />

      {/* Top row: avatar + meta */}
      <header className="flex items-start gap-3 mb-4">
        {/* Avatar */}
        <div
          className={`flex-shrink-0 h-11 w-11 rounded-full ${avatarColor} flex items-center justify-center shadow-sm`}
          aria-hidden="true"
        >
          <span className="text-white text-sm font-bold tracking-wide">
            {initials}
          </span>
        </div>

        {/* Name + role + location */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-900 text-sm leading-tight">
              {testimonial.name}
            </span>
            {testimonial.verified && (
              <BadgeCheck
                className="h-4 w-4 text-blue-500 flex-shrink-0"
                aria-label="Verified rider"
              />
            )}
          </div>
          <p className="text-xs text-slate-500 mt-0.5 truncate">
            {testimonial.role} &middot; {testimonial.location}
          </p>
        </div>
      </header>

      {/* Star rating */}
      <div className="mb-3">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Review text */}
      <blockquote className="text-sm text-slate-700 leading-relaxed line-clamp-4 flex-1 mb-4">
        &ldquo;{testimonial.review}&rdquo;
      </blockquote>

      {/* Footer: date + verified badge */}
      <footer className="flex items-center justify-between gap-2 pt-4 border-t border-slate-100">
        <time
          dateTime={testimonial.date}
          className="text-xs text-slate-400 font-medium"
        >
          {formatDate(testimonial.date)}
        </time>
        {testimonial.verified && (
          <Badge variant="success" className="text-[11px] px-2 py-0.5">
            Verified Rider
          </Badge>
        )}
      </footer>
    </motion.article>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="section-padding bg-white"
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
            Real Riders, Real Stories
          </motion.p>

          <motion.h2
            id="testimonials-heading"
            variants={headingVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5"
          >
            What Our Riders Say
          </motion.h2>

          {/* Aggregate rating */}
          <motion.div
            variants={headingVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5"
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5" aria-label={`${BUSINESS.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 star-filled fill-amber-400"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-2xl font-extrabold text-slate-900">
                {BUSINESS.rating}
              </span>
            </div>

            <div className="h-5 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />

            <p className="text-slate-600 font-medium">
              Based on{" "}
              <span className="text-slate-900 font-bold">
                {BUSINESS.reviewCount}+ verified reviews
              </span>
            </p>
          </motion.div>
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          className="mt-10 text-center text-sm text-slate-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          All reviews are from verified Car Lift UAE riders. Ratings collected
          via WhatsApp and Google Business.
        </motion.p>
      </div>
    </section>
  );
}


