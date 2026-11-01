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
    title: "Fixed Fares",
    description:
      "No surge pricing, no hidden fees. Dubai ↔ Abu Dhabi from AED 200 private, Abu Dhabi ↔ Ajman from AED 250 private. What you see is what you pay.",
    accentColor: "text-amber-400",
    bgColor: "bg-amber-400/10 border-amber-400/20",
  },
  {
    icon: MapPin,
    title: "Confirmed Routes",
    description:
      "We operate on confirmed, regularly scheduled inter-emirate routes. Both directions served on every route — pick up or drop off at your preferred location.",
    accentColor: "text-blue-400",
    bgColor: "bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: CheckCircle,
    title: "Verified Drivers",
    description:
      "All Quick Car Lift Service UAE drivers are UAE-licensed professionals. Every driver is verified before they carry a single passenger.",
    accentColor: "text-emerald-400",
    bgColor: "bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Heart,
    title: "Private & Shared Options",
    description:
      "Choose a private ride for maximum comfort or a shared carpool to split the fare. Both options available on all confirmed routes.",
    accentColor: "text-rose-400",
    bgColor: "bg-rose-400/10 border-rose-400/20",
  },
  {
    icon: Home,
    title: "Airport Transfers",
    description:
      "Need to catch a flight? Airport car lift pickups at DXB, DWC, AUH and Sharjah Airport. Book in advance to ensure availability.",
    accentColor: "text-violet-400",
    bgColor: "bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: Zap,
    title: "Easy Booking",
    description:
      "Book by phone or WhatsApp — no app required. Share your pickup location, destination, and timing and we will confirm your seat.",
    accentColor: "text-cyan-400",
    bgColor: "bg-cyan-400/10 border-cyan-400/20",
  },
];

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
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
            Why Quick Car Lift Service UAE
          </p>

          <h2
            id="why-choose-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-5 max-w-3xl mx-auto leading-tight"
          >
            Why Choose <span className="gradient-text">Quick Car Lift Service UAE</span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Reliable inter-emirate car lift and carpool service covering Dubai, Abu Dhabi
            and Ajman — plus airport pickups across the UAE.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="hover-card group glass rounded-2xl border border-white/10 p-6 hover:border-white/20"
              >
                {/* Icon */}
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${benefit.bgColor} mb-5 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className={`h-6 w-6 ${benefit.accentColor}`} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-14 text-center">
          <div className="inline-block glass rounded-2xl border border-white/10 px-8 py-6 max-w-2xl">
            <p className="text-slate-300 text-base leading-relaxed text-center sm:text-left">
              <span className="text-white font-semibold">
                Quick Car Lift Service UAE — confirmed inter-emirate routes
              </span>{" "}
              with fixed fares, air-conditioned vehicles, and easy WhatsApp booking. No
              app required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
