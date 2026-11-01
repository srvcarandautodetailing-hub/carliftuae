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
  Phone,
  Plane,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

const trustBadges = [
  { icon: Star, label: "Fixed Fares", color: "text-amber-400" },
  { icon: Navigation, label: "All Directions", color: "text-emerald-400" },
  { icon: Calendar, label: "Daily Service", color: "text-violet-400" },
  { icon: Users, label: "Shared & Private", color: "text-blue-400" },
];

const stats = [
  { icon: Route, value: "AED 200", label: "Dubai ↔ Abu Dhabi Private" },
  { icon: Users, value: "AED 250", label: "Abu Dhabi ↔ Ajman Private" },
];

const quickRoutes = [
  { href: "/car-lift-dubai-to-abu-dhabi", label: "Dubai → Abu Dhabi", price: "AED 200" },
  { href: "/car-lift-ajman-to-dubai", label: "Ajman → Dubai", price: "AED 200" },
  { href: "/airport-car-lift-dubai-dxb", label: "DXB Airport", price: "Pickup" },
  { href: "/airport-car-lift-abu-dhabi-auh", label: "AUH Airport", price: "Pickup" },
];

export default function HeroSection() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'm interested in a daily car lift. Please share details about routes and pricing."
  );
  const phoneHref = formatPhoneHref(BUSINESS.phone);

  return (
    <section
      aria-label="Quick Car Lift Service UAE – Dubai, Abu Dhabi, Ajman"
      className="relative flex items-center overflow-hidden bg-slate-900"
    >
      {/* Background photo — LCP image, preloaded via priority */}
      <Image
        src="/images/hero/carlift-uae-daily-commuters-interior.webp"
        alt="Quick Car Lift Service UAE – comfortable shared car lift rides across UAE"
        fill
        priority
        fetchPriority="high"
        quality={80}
        sizes="100vw"
        className="object-cover opacity-[0.13] select-none pointer-events-none"
      />

      {/* Mesh gradient background */}
      <div className="absolute inset-0 hero-gradient hero-mesh" aria-hidden="true" />

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24">
        <div className="flex flex-col items-center text-center gap-5 lg:gap-6">
          {/* Route badge */}
          <div className="anim-fade">
            <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 border border-white/10">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <MapPin className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span className="text-sm font-semibold text-white/90 tracking-wide">
                Dubai · Abu Dhabi · Ajman
              </span>
              <Badge variant="default" className="text-[11px] px-2 py-0">
                Daily
              </Badge>
            </div>
          </div>

          {/* Main heading — static so browser paints H1 immediately (LCP) */}
          <div className="max-w-4xl anim-rise">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              Quick <span className="gradient-text">Car Lift</span> Service UAE
            </h1>
          </div>

          {/* Sub-heading */}
          <div className="anim-rise anim-delay-1">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-300 tracking-wide">
              Dubai · Abu Dhabi · Ajman
            </p>
          </div>

          {/* Direct-answer description (AEO) */}
          <div className="max-w-2xl anim-rise anim-delay-2">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              The carlift service UAE commuters rely on daily — reliable car lift and carpool on confirmed inter-emirate routes.{" "}
              <span className="text-white font-semibold">
                Dubai ↔ Abu Dhabi from AED 200 private.
              </span>{" "}
              Airport pickups at DXB, DWC, AUH &amp; Sharjah Airport.{" "}
              <span className="text-amber-400 font-semibold">Book by phone or WhatsApp.</span>
            </p>
          </div>

          {/* CTA buttons — ≥44px targets */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto anim-rise anim-delay-3">
            <Button
              asChild
              variant="whatsapp"
              size="xl"
              className="whatsapp-pulse w-full sm:w-auto shadow-2xl min-h-[52px]"
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
              className="w-full sm:w-auto min-h-[52px] border-2 border-blue-400 bg-transparent text-blue-300 hover:bg-blue-900/40 hover:text-white transition-colors duration-200"
            >
              <a href={phoneHref} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}>
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
            </Button>
          </div>

          {/* Route quick-links — conversion + internal linking */}
          <nav
            aria-label="Popular car lift routes"
            className="w-full max-w-3xl anim-rise anim-delay-4"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {quickRoutes.map(({ href, label, price }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 backdrop-blur-sm transition-colors hover:border-blue-400/40 hover:bg-white/10 min-h-[52px]"
                  >
                    <span className="text-left">
                      <span className="block text-xs sm:text-sm font-semibold text-white leading-tight">
                        {label}
                      </span>
                      <span className="block text-[11px] text-blue-300 font-medium">
                        {price}
                      </span>
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-blue-400 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 anim-fade anim-delay-4">
            {trustBadges.map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 glass rounded-full px-4 py-2 border border-white/10"
              >
                <Icon className={`h-4 w-4 ${color}`} aria-hidden="true" />
                <span className="text-sm font-medium text-white/85">{label}</span>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="w-full max-w-3xl mt-2 anim-rise anim-delay-5">
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
          </div>

          {/* Airport strip */}
          <div className="anim-fade anim-delay-5">
            <Link
              href="/airport-car-lift"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white transition-colors min-h-[44px] px-2"
            >
              <Plane className="h-4 w-4" aria-hidden="true" />
              Airport car lift — DXB · DWC · AUH · Sharjah Airport
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          {/* Trust micro-copy */}
          <div className="anim-fade anim-delay-5">
            <p className="text-sm text-slate-500 flex items-center gap-1.5 justify-center">
              <Shield className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              Verified drivers · GPS-tracked · Air-conditioned vehicles
            </p>
          </div>
        </div>
      </div>

      {/* Bottom fade gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900/80 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
