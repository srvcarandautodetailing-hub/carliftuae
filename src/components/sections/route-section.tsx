import Link from "next/link";
import { MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ROUTE_PRICES, type RoutePrice } from "@/data/pricing";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

function buildWhatsAppMessage(route: RoutePrice): string {
  return `Hi! I'm interested in a car lift on the ${route.route} route. Private AED ${route.private}. Please share more details.`;
}

// Route page links for internal linking (Koray hub↔spoke)
const ROUTE_PAGE_LINKS: Record<string, string> = {
  "Dubai → Abu Dhabi": "/car-lift-dubai-to-abu-dhabi",
  "Abu Dhabi → Dubai": "/car-lift-abu-dhabi-to-dubai",
  "Abu Dhabi → Ajman": "/car-lift-ajman",
  "Ajman → Abu Dhabi": "/car-lift-ajman",
  "Abu Dhabi → Ras Al Khaimah": "/car-lift-abu-dhabi",
  "Ras Al Khaimah → Abu Dhabi": "/car-lift-abu-dhabi",
  "Abu Dhabi → Al Ain": "/car-lift-abu-dhabi",
  "Al Ain → Abu Dhabi": "/car-lift-abu-dhabi",
};

// Desktop table row
function RouteTableRow({ route, index }: { route: RoutePrice; index: number }) {
  const waHref = formatWhatsAppHref(BUSINESS.whatsapp, buildWhatsAppMessage(route));
  const isPopular = index === 0;
  const routePage = ROUTE_PAGE_LINKS[route.route];

  return (
    <tr className="group border-b border-slate-100 last:border-0 hover:bg-blue-50/60 transition-colors duration-150">
      {/* Route */}
      <td className="py-4 px-4 sm:px-6">
        <div className="flex items-center gap-2 flex-wrap">
          <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
          {routePage ? (
            <Link
              href={routePage}
              className="font-semibold text-slate-900 text-sm hover:text-blue-600 transition-colors underline-offset-2 hover:underline"
            >
              {route.route}
            </Link>
          ) : (
            <span className="font-semibold text-slate-900 text-sm">{route.route}</span>
          )}
          {isPopular && (
            <Badge variant="default" className="text-[11px] px-2 py-0 ml-1">
              Most Popular
            </Badge>
          )}
        </div>
      </td>

      {/* Private rate */}
      <td className="py-4 px-4 sm:px-6 text-center">
        <span className="text-lg font-extrabold text-slate-700">AED {route.private}</span>
        <span className="block text-xs text-slate-400 font-medium mt-0.5">private</span>
      </td>

      {/* CTA */}
      <td className="py-4 px-4 sm:px-6 text-right">
        <Button asChild variant="whatsapp" size="sm">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Book car lift on ${route.route} via WhatsApp`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Book Route</span>
            <span className="sm:hidden">Book</span>
          </a>
        </Button>
      </td>
    </tr>
  );
}

// Mobile card (stacked — no horizontal scroll)
function RouteMobileCard({ route, index }: { route: RoutePrice; index: number }) {
  const waHref = formatWhatsAppHref(BUSINESS.whatsapp, buildWhatsAppMessage(route));
  const isPopular = index === 0;
  const routePage = ROUTE_PAGE_LINKS[route.route];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
      {/* Route header */}
      <div className="flex items-start justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 min-w-0">
          <MapPin className="h-4 w-4 text-slate-400 shrink-0" aria-hidden="true" />
          {routePage ? (
            <Link
              href={routePage}
              className="font-bold text-slate-900 text-sm hover:text-blue-600 transition-colors"
            >
              {route.route}
            </Link>
          ) : (
            <span className="font-bold text-slate-900 text-sm">{route.route}</span>
          )}
        </div>
        {isPopular && (
          <Badge variant="default" className="text-[11px] px-2 py-0 shrink-0">
            Popular
          </Badge>
        )}
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2.5 text-center border border-slate-100">
          <span className="block text-xs text-slate-500 font-semibold mb-0.5">Private</span>
          <span className="text-xl font-extrabold text-slate-700">AED {route.private}</span>
        </div>
      </div>

      {/* CTA */}
      <Button asChild variant="whatsapp" size="sm" className="w-full min-h-[48px]">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book car lift on ${route.route} via WhatsApp`}
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Book This Route
        </a>
      </Button>
    </div>
  );
}

export default function RouteSection() {
  const generalWaHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'd like to know more about car lift routes and pricing."
  );

  // Unique bidirectional routes (deduplicate A→B and B→A)
  const uniqueRoutes = ROUTE_PRICES.filter((_, i) => i % 2 === 0);

  return (
    <section aria-labelledby="routes-heading" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-10 lg:mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Routes &amp; Pricing
          </p>
          <h2
            id="routes-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4"
          >
            Car Lift Routes &amp; Fares
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Fixed fares per trip. No surge pricing. Both directions available on every
            route.
          </p>
        </div>

        {/* Desktop: table (hidden on mobile) */}
        <div className="hidden md:block bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full" aria-label="Car lift route prices">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-left text-sm font-semibold tracking-wide"
                >
                  Route
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-center text-sm font-semibold tracking-wide"
                >
                  Private
                </th>
                <th
                  scope="col"
                  className="py-4 px-4 sm:px-6 text-right text-sm font-semibold tracking-wide"
                >
                  Book
                </th>
              </tr>
            </thead>
            <tbody>
              {uniqueRoutes.map((route, index) => (
                <RouteTableRow key={route.route} route={route} index={index} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: stacked cards (hidden on md+) */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {uniqueRoutes.map((route, index) => (
            <RouteMobileCard key={`${route.route}-mobile`} route={route} index={index} />
          ))}
        </div>

        {/* Footnote + general CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl border border-slate-200 px-6 py-5 shadow-sm">
          <div>
            <p className="font-semibold text-slate-800 text-sm">Ready to book?</p>
            <p className="text-sm text-slate-500 mt-0.5">
              Contact Quick Car Lift Service UAE by phone or WhatsApp to confirm your seat.
            </p>
          </div>
          <Button
            asChild
            variant="whatsapp"
            size="default"
            className="shrink-0 min-h-[48px] w-full sm:w-auto"
          >
            <a
              href={generalWaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a car lift via WhatsApp"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book via WhatsApp
            </a>
          </Button>
        </div>

        {/* Airport link strip */}
        <div className="mt-6 text-center">
          <Link
            href="/airport-car-lift"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors min-h-[44px] px-2"
          >
            Flying soon? See our airport car lift pickups — DXB · DWC · AUH · Sharjah Airport
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Pricing transparency note */}
        <p className="mt-5 text-center text-xs text-slate-400">
          All fares are per trip, one way. Private = exclusive
          vehicle for your group. Both directions served on every route. Available 24/7.
        </p>
      </div>
    </section>
  );
}
