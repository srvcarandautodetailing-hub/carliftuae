import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  DollarSign,
  ArrowRight,
  Navigation,
  Users,
  MessageCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import { serviceSchema } from "@/lib/schema";
import { LOCATIONS, getLocationsByEmirate, type Location } from "@/data/locations";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Car Lift Routes UAE – Sharjah, Dubai, Ajman & All Areas",
  description:
    "Browse all Car Lift UAE routes. Sharjah to Business Bay from AED 350/month, Ajman from AED 420/month, Dubai internal routes from AED 200/month. 50+ daily routes, morning & evening service.",
  alternates: { canonical: "https://www.carliftuae.com/routes" },
  openGraph: {
    title: "Car Lift Routes UAE – Sharjah, Dubai, Ajman to Business Bay",
    description:
      "Find your car lift route. 50+ daily routes across UAE. Sharjah, Ajman, Dubai. All areas covered. Book monthly from AED 200.",
    images: [{ url: "/og/routes.jpg", width: 1200, height: 630, alt: "Car Lift UAE Routes" }],
  },
};

const emirateLabels: Record<Location["emirate"], string> = {
  sharjah: "Sharjah Routes",
  dubai: "Dubai Routes",
  ajman: "Ajman Routes",
};

const emirateOrder: Location["emirate"][] = ["sharjah", "ajman", "dubai"];

function RouteCard({ location }: { location: Location }) {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    `Hi! I'm interested in a car lift from ${location.name} to Business Bay. Please share details.`
  );

  return (
    <article aria-label={`Car lift route: ${location.name} to Business Bay`}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-200 group">
        <CardContent className="p-5 pt-5 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
              {location.name}
            </h3>
            <span
              className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${
                location.emirate === "sharjah"
                  ? "bg-blue-100 text-blue-700"
                  : location.emirate === "ajman"
                  ? "bg-purple-100 text-purple-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {location.emirate.charAt(0).toUpperCase() + location.emirate.slice(1)}
            </span>
          </div>

          {/* Route indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Navigation className="h-3.5 w-3.5 text-blue-400 shrink-0" aria-hidden="true" />
            <span className="font-medium">
              {location.name} <ArrowRight className="inline h-3 w-3" aria-hidden="true" /> Business Bay
            </span>
          </div>

          {/* Stats row */}
          <ul className="grid grid-cols-3 gap-2 mb-4 list-none" role="list">
            <li className="text-center bg-slate-50 rounded-lg p-2">
              <MapPin className="h-3.5 w-3.5 text-slate-400 mx-auto mb-1" aria-hidden="true" />
              <p className="text-xs font-bold text-slate-800 leading-none">{location.distance}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Distance</p>
            </li>
            <li className="text-center bg-slate-50 rounded-lg p-2">
              <Clock className="h-3.5 w-3.5 text-slate-400 mx-auto mb-1" aria-hidden="true" />
              <p className="text-xs font-bold text-slate-800 leading-none">{location.drivingTime}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">Drive Time</p>
            </li>
            <li className="text-center bg-emerald-50 rounded-lg p-2">
              <DollarSign className="h-3.5 w-3.5 text-emerald-500 mx-auto mb-1" aria-hidden="true" />
              <p className="text-xs font-bold text-emerald-700 leading-none">
                AED {location.monthlyPrice}
              </p>
              <p className="text-[10px] text-emerald-600 mt-0.5">/month</p>
            </li>
          </ul>

          {/* Pickup points preview */}
          {location.pickupPoints.length > 0 && (
            <div className="mb-4">
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                Pickup Points
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                {location.pickupPoints.slice(0, 3).join(", ")}
                {location.pickupPoints.length > 3 && (
                  <span className="text-blue-500 font-medium">
                    {" "}+{location.pickupPoints.length - 3} more
                  </span>
                )}
              </p>
            </div>
          )}

          {/* CTA links */}
          <div className="mt-auto flex gap-2">
            <Button asChild variant="outline" size="sm" className="flex-1 text-xs">
              <Link href={`/locations/${location.slug}`}>
                View Details
              </Link>
            </Button>
            <Button asChild variant="whatsapp" size="sm" className="flex-1 text-xs">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Book car lift from ${location.name} via WhatsApp`}
              >
                Book Now
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </article>
  );
}

export default function RoutesPage() {
  const sharjahLocations = getLocationsByEmirate("sharjah");
  const ajmanLocations = getLocationsByEmirate("ajman");
  const dubaiLocations = getLocationsByEmirate("dubai");

  const locationsByEmirate: Record<Location["emirate"], Location[]> = {
    sharjah: sharjahLocations,
    ajman: ajmanLocations,
    dubai: dubaiLocations,
  };

  const primaryRoute = LOCATIONS.find((l) => l.slug === "sharjah");

  const bookPrimaryWhatsapp = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I want to book the Sharjah to Business Bay car lift route. Please share available timings and pricing."
  );

  return (
    <>
      <SchemaScript
        schema={serviceSchema({
          name: "Car Lift UAE – Routes from Sharjah, Ajman & Dubai to Business Bay",
          description:
            "Daily shared car lift routes across UAE. Sharjah to Business Bay, Ajman to Business Bay, and Dubai internal routes. 50+ routes, morning and evening service.",
          url: "/routes",
        })}
      />

      {/* ─── Page Hero ─── */}
      <section
        aria-labelledby="routes-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Routes" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <h1
            id="routes-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            Car Lift Routes Across UAE
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Connecting Sharjah, Ajman to Business Bay, Dubai and beyond.
            50+ daily routes, 6 days a week.
          </p>

          {/* Quick stats */}
          <ul className="flex flex-wrap gap-6 mt-8 list-none" role="list">
            {[
              { icon: Navigation, label: "50+ Daily Routes" },
              { icon: Users, label: "500+ Active Riders" },
              { icon: Clock, label: "Departures 6:30–8:00 AM" },
            ].map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-slate-300">
                <Icon className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span className="text-sm font-medium">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Primary Route Highlight: Sharjah → Business Bay ─── */}
      {primaryRoute && (
        <section
          aria-labelledby="primary-route-heading"
          className="py-14 sm:py-16 bg-gradient-to-r from-blue-50 to-slate-50 border-b border-slate-200"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Most Popular Route
                </span>
                <h2
                  id="primary-route-heading"
                  className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3"
                >
                  Sharjah → Business Bay
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The UAE&apos;s most in-demand car lift corridor. Thousands of
                  professionals commute this route daily. Car Lift UAE operates
                  multiple morning departures from all Sharjah areas to Business
                  Bay, DIFC, and Downtown Dubai.
                </p>
                <ul className="space-y-2 mb-6 list-none" role="list">
                  {[
                    `Distance: ${primaryRoute.distance}`,
                    `Drive Time: ${primaryRoute.drivingTime}`,
                    `Monthly Price: AED ${primaryRoute.monthlyPrice}/person`,
                    "Pickup: Al Majaz, Al Nahda, Al Taawun, Muweilah, Al Khan, Al Qasimia, Rolla",
                    "Departures: 6:30 AM, 7:00 AM, 7:30 AM, 8:00 AM",
                    "Evening Return: 5:00 PM, 5:30 PM, 6:00 PM, 6:30 PM",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <ArrowRight className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild variant="whatsapp" size="lg">
                    <a
                      href={bookPrimaryWhatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                      Book This Route
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/locations/sharjah">Full Route Details</Link>
                  </Button>
                </div>
              </div>

              {/* Map embed */}
              <div className="w-full lg:w-96 shrink-0">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md aspect-video lg:aspect-square">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d231823.27778278!2d55.17082826289062!3d25.27648175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3e5f5f4b9d6a1fd1%3A0x7d84c17e7f0c5c1a!2sSharjah!3m2!1d25.3463!2d55.4209!4m5!1s0x3e5f682b69e4db31%3A0x3e87dd745d55c0d!2sBusiness+Bay%2C+Dubai!3m2!1d25.1866!2d55.2629!5e0!3m2!1sen!2sae!4v1699000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sharjah to Business Bay car lift route map"
                    aria-label="Map showing car lift route from Sharjah to Business Bay Dubai"
                  />
                </div>
                <p className="text-xs text-slate-500 text-center mt-2">
                  Sharjah to Business Bay — approx. 25 km
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── Route Timing Guide ─── */}
      <section aria-labelledby="timing-heading" className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="timing-heading"
            className="text-xl font-bold text-slate-900 mb-6 text-center"
          >
            Route Timing Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="border-blue-100 bg-blue-50">
              <CardContent className="p-5 pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900">Morning Departures</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 list-none" role="list">
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700 w-16">6:30 AM</span>
                    <span>— From Ajman &amp; outer Sharjah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700 w-16">7:00 AM</span>
                    <span>— From central Sharjah</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700 w-16">7:30 AM</span>
                    <span>— From Al Nahda, Al Qusais</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-blue-700 w-16">8:00 AM</span>
                    <span>— From Dubai internal areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-slate-50">
              <CardContent className="p-5 pt-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center">
                    <Clock className="h-4 w-4 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900">Evening Return</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-700 list-none" role="list">
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-700 w-16">5:00 PM</span>
                    <span>— From Business Bay / DIFC</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-700 w-16">5:30 PM</span>
                    <span>— From Business Bay / Downtown</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-700 w-16">6:00 PM</span>
                    <span>— Standard evening departure</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="font-mono font-bold text-slate-700 w-16">6:30 PM</span>
                    <span>— Late evening return</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-xs text-slate-500 text-center mt-4">
            Exact departure times are confirmed at the time of booking and may vary by route.
            Mon – Sat service. Friday service on request.
          </p>
        </div>
      </section>

      {/* ─── Routes Grouped by Emirate ─── */}
      <section
        aria-labelledby="all-routes-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              All Routes
            </p>
            <h2
              id="all-routes-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Browse Routes by Emirate
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Click any route card to see full details including pickup points,
              timing, FAQs and more.
            </p>
          </div>

          <div className="space-y-16">
            {emirateOrder.map((emirate) => {
              const locations = locationsByEmirate[emirate];
              if (!locations.length) return null;

              return (
                <div key={emirate}>
                  <div className="flex items-center gap-3 mb-6">
                    <h3
                      className="text-xl sm:text-2xl font-extrabold text-slate-900"
                    >
                      {emirateLabels[emirate]}
                    </h3>
                    <span className="text-sm text-slate-500 font-medium">
                      ({locations.length} area{locations.length > 1 ? "s" : ""})
                    </span>
                  </div>

                  <ul
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 list-none"
                    role="list"
                  >
                    {locations.map((location) => (
                      <li key={location.slug}>
                        <RouteCard location={location} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section aria-label="Book a route" className="py-14 bg-blue-600">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Can&apos;t Find Your Area?
          </h2>
          <p className="text-blue-100 mb-8 leading-relaxed">
            We cover all UAE locations. If your area isn&apos;t listed, WhatsApp us
            and we&apos;ll create a route for you or match you with existing riders.
          </p>
          <Button
            asChild
            size="xl"
            className="bg-white text-blue-700 hover:bg-blue-50 font-bold"
          >
            <a
              href={formatWhatsAppHref(
                BUSINESS.whatsapp,
                "Hi! I can't find my area on the routes page. My pickup is: "
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Request a Custom Route
            </a>
          </Button>
        </div>
      </section>
    </>
  );
}
