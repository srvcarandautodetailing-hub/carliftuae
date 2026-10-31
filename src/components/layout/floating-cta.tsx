"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Phone, ChevronUp } from "lucide-react";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * Mobile-first sticky call bar (Call + WhatsApp) + scroll-to-top.
 * The bar is mobile-only; a spacer keeps it from covering footer content.
 */
export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 600);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi, I want to book a car lift!"
  );

  return (
    <>
      {/* Scroll to top — CSS fade, all viewports */}
      <button
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-24 right-4 sm:bottom-8 sm:right-6 z-50 w-11 h-11 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-slate-700 transition-all duration-200 shadow-lg",
          showScrollTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        )}
        aria-label="Scroll to top"
        tabIndex={showScrollTop ? 0 : -1}
      >
        <ChevronUp className="w-5 h-5" aria-hidden="true" />
      </button>

      {/* Mobile sticky call bar — never covers content thanks to spacer below */}
      <div className="sticky-call-bar" role="region" aria-label="Quick booking">
        <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-xl font-bold text-sm min-h-[52px] px-4 shadow-md active:bg-blue-700 transition-colors"
            aria-label={`Call ${BUSINESS.name} at ${BUSINESS.phone}`}
          >
            <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
            <span className="leading-tight text-center">
              Call Now
              <span className="block text-[11px] font-semibold opacity-90">
                {BUSINESS.phone}
              </span>
            </span>
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#15803d] text-white rounded-xl font-bold text-sm min-h-[52px] px-4 shadow-md active:bg-[#166534] transition-colors"
            aria-label="Book via WhatsApp"
          >
            <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Spacer — reserves the bar's footprint so it never covers footer/content */}
      <div className="h-[92px] sm:hidden" aria-hidden="true" />
    </>
  );
}
