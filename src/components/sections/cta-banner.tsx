import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, formatWhatsAppHref, formatPhoneHref } from "@/lib/utils";

export default function CtaBanner() {
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
      {/* Static gradient orbs (CSS only — no JS animation) */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #2563eb, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
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
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80 backdrop-blur-sm">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Seats Available Now
          </span>
        </div>

        <h2
          id="cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-5"
        >
          Ready to Simplify Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
            Daily Commute?
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Quick Car Lift Service UAE covers{" "}
          <span className="text-white font-semibold">Dubai, Abu Dhabi &amp; Ajman</span>,
          plus airport pickups across the UAE. Fixed fares, air-conditioned vehicles,
          book by phone or WhatsApp.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button
            asChild
            variant="whatsapp"
            size="xl"
            className="w-full sm:w-auto whatsapp-pulse shadow-2xl shadow-emerald-900/50 min-h-[56px]"
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
            className="w-full sm:w-auto min-h-[56px] border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 hover:border-white/60 transition-colors duration-200 backdrop-blur-sm"
          >
            <a href={phoneHref} aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}>
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call {BUSINESS.phone}
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2">
          <p className="text-sm font-semibold text-white/80">
            Fixed fares · Air-conditioned vehicles · Book by WhatsApp
          </p>
        </div>
      </div>
    </section>
  );
}
