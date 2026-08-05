import type { Metadata } from "next";
import { Users, Star, Shield, Clock, DollarSign, Eye, Leaf, TrendingDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/sections/breadcrumb";
import CtaBanner from "@/components/sections/cta-banner";
import SchemaScript from "@/components/sections/schema-script";
import { organizationSchema } from "@/lib/schema";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "About Car Lift UAE – Trusted Since 2019",
  description:
    "Car Lift UAE has been connecting Sharjah and Ajman professionals to Dubai's Business Bay since 2019. Learn about our mission, story, team values, and why 500+ daily riders trust us.",
  alternates: { canonical: "https://www.carlift.ae/about" },
  openGraph: {
    title: "About Car Lift UAE – Trusted Since 2019",
    description:
      "Discover how Car Lift UAE became the UAE's most trusted car lift service. 500+ riders, 50+ routes, 4.9★ rating.",
    images: [{ url: "/og/about.jpg", width: 1200, height: 630, alt: "About Car Lift UAE" }],
  },
};

const stats = [
  { value: "2,000+", label: "Monthly Rides", icon: Users },
  { value: "500+", label: "Active Riders", icon: Star },
  { value: "4.9★", label: "Average Rating", icon: Star },
  { value: "5+", label: "Years of Service", icon: Clock },
];

const teamValues = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Every driver is UAE-licensed, background-checked, and trained. All vehicles carry comprehensive insurance and real-time GPS tracking. Your safety is never negotiated.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description:
      "We understand that missing a minute can mean missing a meeting. Our drivers depart on schedule — every day. Rated 4.9 stars by 247+ riders for reliability.",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    description:
      "We believe daily commuting shouldn't cost a fortune. Our transparent pricing starts from AED 200/month with no hidden charges — Salik tolls included.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Clear pricing, receipts for every payment, and open communication. What you're quoted is what you pay. No surge pricing, no last-minute cancellations.",
  },
];

const benefitsVsDriving = [
  {
    icon: DollarSign,
    title: "Save AED 850+/month",
    description:
      "Driving yourself from Sharjah to Business Bay costs AED 1,200+ monthly in fuel, Salik tolls (AED 8 each way × 22 days), parking (AED 300+), and wear & tear. Car lift costs AED 350.",
  },
  {
    icon: Leaf,
    title: "Reduce Your Carbon Footprint",
    description:
      "Every shared car lift removes up to 3 individual cars from Sharjah–Dubai roads. Shared mobility reduces CO₂ emissions by up to 75% compared to solo driving.",
  },
  {
    icon: TrendingDown,
    title: "Less Stress, More Productivity",
    description:
      "Stop fighting traffic and start your day relaxed. Many of our riders use commute time to read, respond to emails, or simply rest before a demanding workday.",
  },
];

export default function AboutPage() {
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'd like to know more about Car Lift UAE service."
  );

  return (
    <>
      <SchemaScript schema={organizationSchema()} />

      {/* ─── Page Hero ─── */}
      <section
        aria-labelledby="about-hero-heading"
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0c2340 100%)",
        }}
      >
        {/* Subtle dot grid */}
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
              { label: "About" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <h1
            id="about-hero-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4"
          >
            About Car Lift UAE
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
            UAE&apos;s most trusted daily car lift service — connecting Sharjah, Ajman,
            and Dubai since 2019. Safe, affordable, and always on time.
          </p>
        </div>
      </section>

      {/* ─── Mission Section ─── */}
      <section
        aria-labelledby="mission-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
                Our Mission
              </p>
              <h2
                id="mission-heading"
                className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6"
              >
                Making the UAE Daily Commute Affordable, Safe & Reliable
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Millions of professionals in the UAE face a daily struggle: the
                expensive, stressful solo commute from Sharjah and Ajman to
                Dubai&apos;s business districts. Fuel costs, Salik tolls, parking
                fees, and traffic congestion add up to thousands of dirhams each
                month.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our mission at Car Lift UAE is simple: <strong className="text-slate-800">eliminate that burden</strong>.
                By connecting commuters with shared, professional car lift routes, we
                make daily travel affordable for everyone — without sacrificing
                comfort, safety, or punctuality.
              </p>
              <p className="text-slate-600 leading-relaxed">
                We believe that a reliable commute is a right, not a luxury. That&apos;s
                why every seat we sell comes with GPS tracking, a verified driver,
                and a satisfaction guarantee.
              </p>
            </div>

            {/* Mission highlight card */}
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-8 border border-blue-100">
              <blockquote className="text-lg font-semibold text-slate-800 leading-relaxed mb-6 italic">
                &ldquo;We started Car Lift UAE because we saw our neighbours spending
                AED 1,500/month just to get to work. We knew there was a better
                way.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                  <span className="text-white font-bold text-sm">CL</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Car Lift UAE Founders</p>
                  <p className="text-slate-500 text-xs">Sharjah, 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Story Section ─── */}
      <section
        aria-labelledby="story-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              From One Route to 50+ Across the UAE
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              What began as a small carpooling idea in Sharjah has grown into
              UAE&apos;s most trusted daily car lift network.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-200 -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-12">
              {/* 2019 */}
              <article className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
                <div className="sm:text-right sm:pr-10">
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    2019
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Founded in Sharjah
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Car Lift UAE launched with a single route: Al Majaz, Sharjah
                    to Business Bay, Dubai. Three cars, twelve passengers, one
                    goal — make the daily commute bearable.
                  </p>
                </div>
                <div
                  className="hidden sm:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white ring-offset-1 shadow" />
                </div>
              </article>

              {/* 2020–2021 */}
              <article className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
                <div
                  className="hidden sm:flex items-center justify-center order-1"
                  aria-hidden="true"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white ring-offset-1 shadow" />
                </div>
                <div className="sm:pl-10 sm:order-2">
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    2020 – 2021
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    Expanding Through Word of Mouth
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Despite challenging times, our rider base grew to 100+
                    commuters. We added Ajman routes and expanded pickup points
                    across Al Nahda, Al Taawun, and Muweilah. Rider referrals
                    became our primary growth engine.
                  </p>
                </div>
              </article>

              {/* 2022–2023 */}
              <article className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
                <div className="sm:text-right sm:pr-10">
                  <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    2022 – 2023
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    300+ Riders & Ladies-Only Routes
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    We introduced dedicated ladies-only car lift routes with
                    verified female drivers — a first in the UAE shared mobility
                    space. Rider count crossed 300 monthly active passengers,
                    and we expanded to Dubai Marina, JVC, JLT, and Silicon Oasis.
                  </p>
                </div>
                <div
                  className="hidden sm:flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white ring-offset-1 shadow" />
                </div>
              </article>

              {/* 2024–Present */}
              <article className="relative sm:grid sm:grid-cols-2 sm:gap-12 sm:items-center">
                <div
                  className="hidden sm:flex items-center justify-center order-1"
                  aria-hidden="true"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500 ring-4 ring-white ring-offset-1 shadow" />
                </div>
                <div className="sm:pl-10 sm:order-2">
                  <span className="inline-block bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    2024 – Present
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    500+ Riders, 50+ Routes, 4.9★ Rating
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Today, Car Lift UAE operates 50+ daily routes connecting all
                    major areas of Sharjah, Ajman, and Dubai. Our fleet includes
                    Toyota Innova, Mitsubishi Montero, and Honda Odyssey vehicles.
                    We deliver 2,000+ rides every month and maintain a 4.9-star
                    rating — a testament to our commitment to excellence.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section aria-label="Key statistics" className="py-14 sm:py-16 bg-blue-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul
            className="grid grid-cols-2 sm:grid-cols-4 gap-8 list-none"
            role="list"
          >
            {stats.map(({ value, label }) => (
              <li key={label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-white mb-2">
                  {value}
                </p>
                <p className="text-blue-100 font-medium text-sm sm:text-base">{label}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Team Values Section ─── */}
      <section
        aria-labelledby="values-heading"
        className="py-16 sm:py-20 bg-white"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              What We Stand For
            </p>
            <h2
              id="values-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Our Core Values
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Every decision we make — from driver selection to route planning —
              is guided by these four principles.
            </p>
          </div>

          <ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 list-none"
            role="list"
          >
            {teamValues.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <Card className="h-full hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6 pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Why Car Lift vs Driving ─── */}
      <section
        aria-labelledby="vs-driving-heading"
        className="py-16 sm:py-20 bg-slate-50"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Smart Commuting
            </p>
            <h2
              id="vs-driving-heading"
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
            >
              Why Car Lift Beats Driving Yourself
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The math is clear. Car lifting saves money, reduces stress, and is
              better for the planet.
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 list-none" role="list">
            {benefitsVsDriving.map(({ icon: Icon, title, description }) => (
              <li key={title}>
                <Card className="h-full hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6 pt-6">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
                  </CardContent>
                </Card>
              </li>
            ))}
          </ul>

          {/* Cost comparison table */}
          <div className="mt-12 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-800 px-6 py-4">
              <h3 className="text-white font-bold text-lg">
                Monthly Commute Cost: Driving vs. Car Lift (Sharjah → Business Bay)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-3 font-semibold text-slate-700">Cost Item</th>
                    <th className="text-right px-6 py-3 font-semibold text-red-600">Driving Yourself</th>
                    <th className="text-right px-6 py-3 font-semibold text-emerald-600">Car Lift UAE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="px-6 py-3 text-slate-700">Fuel (Petrol)</td>
                    <td className="px-6 py-3 text-right text-slate-700">AED 600</td>
                    <td className="px-6 py-3 text-right text-emerald-600 font-medium">—</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-3 text-slate-700">Salik Tolls (×2 daily)</td>
                    <td className="px-6 py-3 text-right text-slate-700">AED 352</td>
                    <td className="px-6 py-3 text-right text-emerald-600 font-medium">Included</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-3 text-slate-700">Parking (Business Bay)</td>
                    <td className="px-6 py-3 text-right text-slate-700">AED 300+</td>
                    <td className="px-6 py-3 text-right text-emerald-600 font-medium">—</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="px-6 py-3 text-slate-700">Vehicle wear &amp; tear</td>
                    <td className="px-6 py-3 text-right text-slate-700">AED 200+</td>
                    <td className="px-6 py-3 text-right text-emerald-600 font-medium">—</td>
                  </tr>
                  <tr className="bg-red-50 border-t-2 border-red-200">
                    <td className="px-6 py-3 font-bold text-slate-900">Total / Month</td>
                    <td className="px-6 py-3 text-right font-extrabold text-red-600">AED 1,452+</td>
                    <td className="px-6 py-3 text-right font-extrabold text-emerald-600">AED 350</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100">
              <p className="text-emerald-800 font-semibold text-sm text-center">
                You save <strong>AED 1,100+ every month</strong> by choosing Car Lift UAE over solo driving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Bottom CTA ─── */}
      <section aria-label="Book a car lift" className="py-14 sm:py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4">
            Ready to Join 500+ Smart Commuters?
          </h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Book your car lift today via WhatsApp and we&apos;ll confirm your seat
            within the hour. No app required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="whatsapp" size="lg">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book car lift via WhatsApp"
              >
                Book via WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
