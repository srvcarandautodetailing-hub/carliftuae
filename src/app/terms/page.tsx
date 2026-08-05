import type { Metadata } from "next";
import {
  FileText,
  Car,
  CalendarX,
  CreditCard,
  UserCheck,
  Star,
  AlertTriangle,
  Cigarette,
  Scale,
  RefreshCw,
  Gavel,
} from "lucide-react";
import Breadcrumb from "@/components/sections/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 2592000; // 30 days

export const metadata: Metadata = {
  title: "Terms of Service – Car Lift UAE",
  description:
    "Read the Car Lift UAE Terms of Service. Booking policies, cancellation rules, payment terms, passenger responsibilities, safety rules, and governing law.",
  alternates: { canonical: "https://www.carlift.ae/terms" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Terms of Service – Car Lift UAE",
    description:
      "Car Lift UAE terms covering bookings, cancellation, payments, safety, and UAE governing law.",
  },
};

const sections = [
  {
    id: "acceptance-of-terms",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          By accessing our website at carlift.ae, initiating a WhatsApp
          conversation with Car Lift UAE, or using any of our car lift services,
          you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).
        </p>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you do not agree with any part of these Terms, you must not use
          our services. These Terms apply to all passengers, corporate clients,
          and any other individuals or organisations who engage with Car Lift UAE
          in any capacity.
        </p>
        <p className="text-slate-600 leading-relaxed">
          These Terms constitute a legally binding agreement between you and Car
          Lift UAE (&ldquo;the Company&rdquo;, &ldquo;we&rdquo;,
          &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a transport services provider
          operating in the United Arab Emirates.
        </p>
      </>
    ),
  },
  {
    id: "service-description",
    icon: Car,
    title: "2. Service Description",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Car Lift UAE provides organised shared car lift services within the
          United Arab Emirates, including but not limited to:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Daily and monthly shared car lift rides between residential areas and business districts",
            "Ladies-only car lift services with optional female drivers",
            "Family and school transport services",
            "Corporate and staff transport solutions for businesses",
            "Airport transfer services to and from UAE airports",
            "Private car lift services for individual passengers",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          All services are provided by Car Lift UAE using its own fleet and
          affiliated drivers. Car Lift UAE is not a ride-hailing platform and
          does not operate as a technology intermediary between independent
          drivers and passengers.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Routes, timings, and pickup points are subject to availability and may
          change. We will provide reasonable notice of any significant changes
          to confirmed bookings.
        </p>
      </>
    ),
  },
  {
    id: "booking-cancellation",
    icon: CalendarX,
    title: "3. Booking & Cancellation Policy",
    content: (
      <>
        <h3 className="font-bold text-slate-800 text-base mb-3">Booking</h3>
        <ul className="space-y-2 mb-5">
          {[
            "All bookings must be made via WhatsApp or our website contact form.",
            "Daily car lift bookings must be confirmed by 9:00 PM the previous evening.",
            "Monthly packages are confirmed upon receipt of payment.",
            "Car Lift UAE reserves the right to refuse bookings at its sole discretion.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-bold text-slate-800 text-base mb-3">
          Cancellation by Passenger
        </h3>
        <ul className="space-y-2 mb-5">
          {[
            "Daily bookings cancelled before 10:00 PM the night before are fully refunded or credited.",
            "Daily bookings cancelled after 10:00 PM may incur a cancellation fee of up to 50% of the trip cost.",
            "Monthly package cancellations must be submitted in writing (WhatsApp or email) at least 5 business days before the next billing period.",
            "Cancellations within 5 days of the billing period will be processed from the following month.",
            "If you cancel a monthly package mid-month, no pro-rated refund is issued (see Section 4 – Payment Terms).",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>

        <h3 className="font-bold text-slate-800 text-base mb-3">
          Cancellation by Car Lift UAE
        </h3>
        <ul className="space-y-2 mb-4">
          {[
            "Car Lift UAE reserves the right to cancel any booking due to force majeure events, extreme weather, vehicle breakdowns, or driver unavailability.",
            "In such cases, affected passengers will be notified as early as possible and offered a rescheduled ride or full refund.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "payment-terms",
    icon: CreditCard,
    title: "4. Payment Terms",
    content: (
      <>
        <ul className="space-y-3 mb-4">
          {[
            {
              heading: "Monthly Packages",
              text: "Monthly car lift packages are payable in advance on or before the 1st of each month. Service will not commence or continue until payment is received.",
            },
            {
              heading: "Daily Bookings",
              text: "Daily car lift fees are payable at the time of booking or as instructed by our team.",
            },
            {
              heading: "No Mid-Month Refunds",
              text: "Once a monthly package has commenced (i.e., rides have begun in the billing month), no refund will be issued for unused days or rides — regardless of absence, travel, or cancellation.",
            },
            {
              heading: "Freeze Policy",
              text: "You may pause your monthly package for up to 7 days per month with 48 hours' notice. Frozen days will be added to your next billing cycle.",
            },
            {
              heading: "Accepted Payment Methods",
              text: "Cash, UAE bank transfer, and WhatsApp Pay. Payments must be made in UAE Dirhams (AED).",
            },
            {
              heading: "VAT",
              text: "Where applicable under UAE VAT regulations, VAT will be included in or added to quoted prices. VAT-compliant receipts are available on request for corporate clients.",
            },
            {
              heading: "Late Payment",
              text: "Failure to make timely payment may result in suspension of your car lift service. Reinstatement is subject to availability.",
            },
          ].map(({ heading, text }) => (
            <li key={heading} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">{heading}: </span>
                <span className="text-slate-600">{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "passenger-responsibilities",
    icon: UserCheck,
    title: "5. Passenger Responsibilities",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          By using Car Lift UAE services, each passenger agrees to the following
          responsibilities:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Punctuality",
              text: "Be at your designated pickup point at least 2 minutes before the scheduled departure time. The driver will wait a maximum of 5 minutes. The vehicle will depart after 5 minutes to avoid delays for other passengers.",
            },
            {
              heading: "Behaviour",
              text: "Conduct yourself respectfully towards the driver and fellow passengers at all times. Verbal or physical abuse, harassment, or disruptive behaviour will result in immediate termination of your subscription with no refund.",
            },
            {
              heading: "Seatbelt",
              text: "All passengers must wear a seatbelt at all times during the journey. This is a legal requirement under UAE traffic law.",
            },
            {
              heading: "Accurate Information",
              text: "Provide accurate pickup and drop-off locations, contact numbers, and any relevant special requirements at the time of booking.",
            },
            {
              heading: "Communication",
              text: "Notify Car Lift UAE at least 1 hour in advance if you cannot attend a confirmed ride.",
            },
            {
              heading: "Personal Belongings",
              text: "Car Lift UAE is not liable for any personal belongings left in the vehicle. Check the vehicle upon exit.",
            },
          ].map(({ heading, text }) => (
            <li key={heading} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">{heading}: </span>
                <span className="text-slate-600">{text}</span>
              </div>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "driver-vehicle-standards",
    icon: Star,
    title: "6. Driver & Vehicle Standards",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Car Lift UAE commits to maintaining high standards for all drivers and
          vehicles in its network:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "All drivers hold valid UAE driving licences.",
            "All drivers are background-verified prior to onboarding.",
            "Vehicles are maintained in roadworthy condition and are less than 7 years old.",
            "All vehicles carry comprehensive UAE motor insurance.",
            "Vehicles are GPS-tracked in real time during all rides.",
            "Drivers are required to maintain professional conduct and follow all UAE traffic laws.",
            "Vehicles are kept clean and air-conditioned for passenger comfort.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed">
          If a driver fails to meet these standards, passengers are encouraged
          to report the issue immediately to Car Lift UAE management. We
          investigate all complaints and take appropriate action.
        </p>
      </>
    ),
  },
  {
    id: "liability-limitations",
    icon: AlertTriangle,
    title: "7. Liability Limitations",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          To the fullest extent permitted by UAE law:
        </p>
        <ul className="space-y-3 mb-4">
          {[
            "Car Lift UAE is not liable for delays caused by traffic, accidents, road closures, or other circumstances beyond our control.",
            "Car Lift UAE is not liable for loss of earnings, missed appointments, or consequential losses resulting from a delayed or cancelled ride.",
            "Our liability for any single incident is limited to the value of the ride fare or monthly package fee paid for the relevant billing period.",
            "Car Lift UAE is not responsible for personal injury or property damage where the passenger has acted in violation of these Terms, UAE traffic law, or instructions given by the driver.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Nothing in these Terms excludes or limits our liability for personal
          injury caused by our negligence, fraud, or any other liability that
          cannot be excluded or limited under applicable UAE law.
        </p>
      </>
    ),
  },
  {
    id: "safety-rules",
    icon: Cigarette,
    title: "8. Safety Rules",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          To ensure the safety and comfort of all passengers and drivers, the
          following rules apply in all Car Lift UAE vehicles:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "No smoking or use of e-cigarettes, vapes, or any tobacco products inside the vehicle.",
            "No consumption of food inside the vehicle. Sealed, non-spill beverages are permitted.",
            "No loud music, video calls on speaker, or disruptive noise.",
            "No asking the driver to exceed the speed limit or violate UAE traffic regulations.",
            "No carrying of weapons, illegal substances, or hazardous materials.",
            "Seatbelt must be worn at all times — no exceptions.",
            "Children must use an age-appropriate child seat (to be arranged in advance).",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-red-400 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed">
          Violations of safety rules may result in the driver stopping the vehicle
          and asking the offending passenger to exit. No refund will be issued in
          such cases. Repeated violations will result in permanent cancellation of
          the passenger&apos;s subscription.
        </p>
      </>
    ),
  },
  {
    id: "dispute-resolution",
    icon: Scale,
    title: "9. Dispute Resolution",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          In the event of any dispute arising from the use of Car Lift UAE
          services, the following process applies:
        </p>
        <ol className="space-y-3 mb-4 list-none">
          {[
            {
              step: "Step 1",
              text: "Contact Car Lift UAE directly via WhatsApp or email within 7 days of the incident. Provide full details of your complaint.",
            },
            {
              step: "Step 2",
              text: "We will acknowledge your complaint within 2 business days and aim to resolve it within 10 business days.",
            },
            {
              step: "Step 3",
              text: "If the complaint cannot be resolved informally, either party may escalate the matter to the relevant UAE consumer protection or transport authority.",
            },
            {
              step: "Step 4",
              text: "Unresolved disputes will be subject to the jurisdiction of the courts of Sharjah, UAE, in accordance with UAE law.",
            },
          ].map(({ step, text }) => (
            <li key={step} className="flex items-start gap-3">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {step.replace("Step ", "")}
              </span>
              <span className="text-slate-600">{text}</span>
            </li>
          ))}
        </ol>
        <p className="text-slate-600 leading-relaxed">
          We are committed to fair and transparent resolution of all complaints.
          We encourage passengers to raise issues early so we can resolve them
          quickly and amicably.
        </p>
      </>
    ),
  },
  {
    id: "changes-to-terms",
    icon: RefreshCw,
    title: "10. Changes to Terms",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Car Lift UAE reserves the right to modify these Terms of Service at
          any time. Changes may be made to reflect:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Updates to UAE law or regulations governing transport services",
            "Changes to our service offerings, pricing structure, or operational procedures",
            "Improvements to our booking, payment, or cancellation processes",
            "Feedback from passengers or regulatory guidance",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed mb-4">
          When material changes are made to these Terms, we will notify active
          passengers via WhatsApp at least 7 days before the changes take effect.
          Changes to pricing will be communicated at least 30 days in advance.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Continued use of Car Lift UAE services after the effective date of any
          changes constitutes your acceptance of the updated Terms. We recommend
          reviewing these Terms periodically.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "11. Governing Law",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          These Terms of Service are governed by and construed in accordance
          with the laws of the United Arab Emirates, specifically the laws of
          the Emirate of Sharjah.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            {
              heading: "Jurisdiction",
              text: "Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts of Sharjah, UAE.",
            },
            {
              heading: "UAE Transport Regulations",
              text: "Our services are provided in compliance with applicable UAE Federal transport regulations and Sharjah transport authority guidelines.",
            },
            {
              heading: "UAE Consumer Protection",
              text: "These Terms do not affect your statutory rights as a consumer under UAE Federal Law No. 15 of 2020 on Consumer Protection.",
            },
            {
              heading: "Language",
              text: "These Terms are provided in English. In the event of any conflict between an English version and any translated version, the English version shall prevail.",
            },
          ].map(({ heading, text }) => (
            <li key={heading} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">{heading}: </span>
                <span className="text-slate-600">{text}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <p className="text-slate-600 text-sm leading-relaxed">
            <strong className="text-slate-800">Questions about these Terms?</strong>{" "}
            Contact us at{" "}
            <a
              href="mailto:info@carlift.ae"
              className="text-blue-600 hover:underline"
            >
              info@carlift.ae
            </a>{" "}
            or via WhatsApp. Our team is available to clarify any aspect of
            these Terms.
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section
        aria-labelledby="terms-hero-heading"
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Terms of Service" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Gavel className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="terms-hero-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
              >
                Terms of Service
              </h1>
              <Badge variant="info" className="mt-2 text-xs">
                Last Updated: January 2025
              </Badge>
            </div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Please read these Terms of Service carefully before using Car Lift
            UAE services. By booking a ride or using our website, you agree to
            these terms.
          </p>
        </div>
      </section>

      {/* ─── Quick Nav ─── */}
      <section aria-label="Table of contents" className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Contents
          </p>
          <nav aria-label="Terms of service sections">
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 list-none">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-sm text-blue-600 hover:text-blue-800 hover:underline underline-offset-2 py-1"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>

      {/* ─── Terms Content ─── */}
      <section aria-label="Terms of service content" className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section) => {
              const SectionIcon = section.icon;
              return (
                <Card
                  key={section.id}
                  id={section.id}
                  className="border-slate-200 scroll-mt-20"
                >
                  <CardContent className="p-6 sm:p-8 pt-6 sm:pt-8">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <SectionIcon
                          className="h-5 w-5 text-blue-600"
                          aria-hidden="true"
                        />
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 leading-snug pt-1">
                        {section.title}
                      </h2>
                    </div>
                    <div className="pl-0 sm:pl-14">{section.content}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Terms footer note */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              These Terms of Service were last updated in{" "}
              <strong className="text-slate-800">January 2025</strong> and are
              governed by the laws of the Emirate of Sharjah, UAE. For any
              questions about these Terms, please contact us at{" "}
              <a
                href="mailto:info@carlift.ae"
                className="text-blue-600 hover:underline"
              >
                info@carlift.ae
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
