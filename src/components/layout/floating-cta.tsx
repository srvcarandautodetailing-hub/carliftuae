"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X, ChevronUp } from "lucide-react";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function FloatingCTA() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handler = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-slate-800 text-white rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Action buttons */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="flex flex-col gap-3"
          >
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-2xl shadow-xl hover:bg-blue-700 transition-colors text-sm font-semibold"
              aria-label="Call us now"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href={formatWhatsAppHref(BUSINESS.whatsapp, "Hi, I want to book a car lift!")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#15803d] text-white px-4 py-3 rounded-2xl shadow-xl hover:bg-[#166534] transition-colors text-sm font-semibold"
              aria-label="WhatsApp us"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setExpanded(!expanded)}
        className={cn(
          "w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-300",
          expanded ? "bg-slate-800 rotate-45" : "bg-[#15803d] hover:bg-[#166534] whatsapp-pulse"
        )}
        whileTap={{ scale: 0.95 }}
        aria-label={expanded ? "Close contact options" : "Open contact options"}
        aria-expanded={expanded}
      >
        {expanded ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </div>
  );
}
