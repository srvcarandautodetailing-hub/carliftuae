import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Star, Clock, Shield, CheckCircle } from "lucide-react";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

const FOOTER_LINKS = {
  Services: [
    { label: "Daily Car Lift", href: "/services/daily-car-lift" },
    { label: "Monthly Car Lift", href: "/services/monthly-car-lift" },
    { label: "Ladies Car Lift", href: "/services/ladies-car-lift" },
    { label: "Office Transport", href: "/services/office-transport" },
    { label: "Corporate Transport", href: "/services/corporate-transport" },
    { label: "Airport Transfer", href: "/services/airport-transfer" },
    { label: "School Transport", href: "/services/school-transport" },
    { label: "Private Car Lift", href: "/services/private-car-lift" },
  ],
  Locations: [
    { label: "Sharjah", href: "/locations/sharjah" },
    { label: "Dubai", href: "/locations/dubai" },
    { label: "Business Bay", href: "/locations/business-bay" },
    { label: "Ajman", href: "/locations/ajman" },
    { label: "Al Nahda", href: "/locations/al-nahda" },
    { label: "Al Qusais", href: "/locations/al-qusais" },
    { label: "JVC", href: "/locations/jvc" },
    { label: "Silicon Oasis", href: "/locations/silicon-oasis" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Routes", href: "/routes" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const TRUST_BADGES = [
  { icon: Shield, label: "Verified Drivers" },
  { icon: CheckCircle, label: "GPS Tracked" },
  { icon: Star, label: "4.9★ Rating" },
  { icon: Clock, label: "6 Days/Week" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      {/* Trust bar */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <div className="w-9 h-9 bg-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-4 h-4 text-blue-400" />
                </div>
                <span className="text-sm text-slate-300 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-lg text-white block leading-none">Car Lift UAE</span>
                <span className="text-xs text-blue-400">Premium Shared Rides</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              UAE&apos;s most trusted daily car lift service. Connecting Sharjah, Ajman, and Dubai
              with safe, affordable, and reliable shared rides since 2019.
            </p>

            {/* Contact info */}
            <div className="space-y-1">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors min-h-[44px]"
                aria-label={`Call us at ${BUSINESS.phone}`}
              >
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{BUSINESS.phone}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors min-h-[44px]"
              >
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{BUSINESS.email}</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.address.street}, {BUSINESS.address.city},{" "}
                  {BUSINESS.address.country}
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={formatWhatsAppHref(BUSINESS.whatsapp, "Hi, I want to book a car lift!")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#15803d] text-white text-sm font-semibold rounded-xl hover:bg-[#166534] transition-colors"
              aria-label="Book via WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              Book via WhatsApp
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {section}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              © {currentYear} Car Lift UAE. All rights reserved. Proudly serving Sharjah, Dubai & Ajman.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">
                Terms
              </Link>
              <Link href="/sitemap.xml" className="text-sm text-slate-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
