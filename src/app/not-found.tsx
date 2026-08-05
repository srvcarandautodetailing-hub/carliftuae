import Link from "next/link";
import { Home, Search, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

export default function NotFound() {
  const quickLinks = [
    { label: "Car Lift Sharjah", href: "/locations/sharjah" },
    { label: "Business Bay", href: "/locations/business-bay" },
    { label: "Monthly Package", href: "/services/monthly-car-lift" },
    { label: "Ladies Car Lift", href: "/services/ladies-car-lift" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center">
        {/* 404 visual */}
        <div className="relative mb-8">
          <div className="text-[120px] font-black text-slate-800 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl">🚗</div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-3">
          This page took a wrong turn
        </h1>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
          Let us get you back on the right route.
        </p>

        {/* Quick links */}
        <div className="mb-8">
          <p className="text-slate-500 text-sm mb-3 uppercase tracking-wider">
            Popular pages
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-slate-800 text-slate-300 rounded-xl text-sm hover:bg-blue-600 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="default" asChild>
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button variant="whatsapp" asChild>
            <a
              href={formatWhatsAppHref(BUSINESS.whatsapp, "Hi, I need help finding the right page.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={`tel:${BUSINESS.phone}`}>
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
