"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, TAXI, formatWhatsAppHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Car Lift Service", href: "/services/car-lift-service" },
      { label: "Airport Transfer", href: "/services/airport-transfer" },
    ],
  },
  { label: "Routes", href: "/routes" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) setMobileOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
            aria-label="MJ Car Lift Service - Home"
          >
            <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-700 transition-colors">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
              </svg>
            </div>
            <div>
              <span
                className={cn(
                  "font-bold text-lg leading-none block",
                  isScrolled ? "text-slate-900" : "text-white"
                )}
              >
                MJ Car Lift
              </span>
              <span
                className={cn(
                  "text-xs leading-none",
                  isScrolled ? "text-blue-600" : "text-blue-300"
                )}
              >
                Dubai · Abu Dhabi · Sharjah
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isScrolled
                      ? pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                      : pathname === item.href
                      ? "text-white bg-white/20"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className="w-3.5 h-3.5 opacity-70" />
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                      >
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-center px-3 py-2 text-sm text-slate-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS.phone}`}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all duration-200 min-h-[44px] active:scale-95",
                isScrolled
                  ? "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                  : "border-white/80 text-white hover:bg-white hover:text-blue-600"
              )}
              aria-label={`Call us at ${BUSINESS.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <Button
              variant="whatsapp"
              size="sm"
              asChild
            >
              <a
                href={formatWhatsAppHref(BUSINESS.whatsapp, "Hi, I want to book a car lift!")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
                Book Now
              </a>
            </Button>
          </div>

          {/* Mobile phone CTA — always visible, never buried in menu */}
          <a
            href={`tel:${BUSINESS.phone}`}
            className={cn(
              "lg:hidden relative flex items-center justify-center w-11 h-11 rounded-full border-2 transition-all duration-200 active:scale-95",
              isScrolled
                ? "border-blue-600 text-blue-600 hover:bg-blue-50"
                : "border-white text-white hover:bg-white/10"
            )}
            aria-label={`Call us at ${BUSINESS.phone}`}
          >
            <span
              className={cn(
                "absolute inset-0 rounded-full animate-ping opacity-25",
                isScrolled ? "bg-blue-600" : "bg-white"
              )}
            />
            <Phone className="w-5 h-5 relative" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              "lg:hidden p-3 rounded-xl transition-colors min-h-[48px] min-w-[48px]",
              isScrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3.5 rounded-xl text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "text-blue-600 bg-blue-50"
                        : "text-slate-700 hover:bg-slate-50"
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2.5 text-sm text-slate-600 hover:text-blue-600 rounded-lg hover:bg-slate-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {BUSINESS.phone}
                </a>
                <Button variant="whatsapp" asChild className="w-full">
                  <a
                    href={formatWhatsAppHref(BUSINESS.whatsapp, "Hi, I want to book a car lift!")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                </Button>
                <div className="mt-1 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-xs font-semibold text-amber-700 mb-1">Quick Taxi Service UAE</p>
                  <a
                    href={`tel:${TAXI.phone}`}
                    className="flex items-center gap-2 text-sm font-medium text-amber-800 hover:text-amber-900 transition-colors"
                    aria-label={`Call Quick Taxi Service UAE at ${TAXI.phone}`}
                  >
                    <Phone className="w-4 h-4" />
                    {TAXI.phone}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
