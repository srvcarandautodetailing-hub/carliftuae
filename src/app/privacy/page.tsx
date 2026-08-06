import type { Metadata } from "next";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  MessageCircle,
  MapPin,
  Cookie,
  Mail,
  Share2,
  FileText,
} from "lucide-react";
import Breadcrumb from "@/components/sections/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const revalidate = 2592000; // 30 days

export const metadata: Metadata = {
  title: "Privacy Policy – Car Lift UAE",
  description:
    "Read the Car Lift UAE Privacy Policy. Learn how we collect, use, and protect your personal data including name, phone, location, and ride history.",
  alternates: { canonical: "https://www.carliftuae.com/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Privacy Policy – Car Lift UAE",
    description:
      "How Car Lift UAE collects, uses, and protects your personal information.",
  },
};

const sections = [
  {
    id: "information-we-collect",
    icon: FileText,
    title: "1. Information We Collect",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          When you use Car Lift UAE services, we collect the following
          categories of personal information:
        </p>
        <ul className="space-y-3">
          {[
            {
              label: "Name",
              detail:
                "Your full name to identify you as a passenger and for communication.",
            },
            {
              label: "Phone Number",
              detail:
                "Your WhatsApp-enabled mobile number for booking, confirmation, and support.",
            },
            {
              label: "Pickup & Drop-off Location",
              detail:
                "Your home area, workplace address, or specific pickup point to assign you to the correct route.",
            },
            {
              label: "Ride History",
              detail:
                "Records of your past bookings, routes taken, and payment history for invoicing and service improvement.",
            },
            {
              label: "Emergency Contact",
              detail:
                "An optional emergency contact name and number for safety purposes.",
            },
            {
              label: "Payment Details",
              detail:
                "Payment method and transaction reference (we do not store card numbers).",
            },
          ].map(({ label, detail }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">{label}: </span>
                <span className="text-slate-600">{detail}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          We only collect information that is necessary to provide our car lift
          services. We do not collect sensitive personal information such as
          national ID numbers, passport data, or financial account details.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    icon: Eye,
    title: "2. How We Use Your Information",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          The personal information we collect is used solely for the following
          purposes:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Service Delivery",
              text: "To assign you to the correct driver and route, confirm bookings, and ensure punctual pickup.",
            },
            {
              heading: "Safety & Security",
              text: "To verify your identity as a registered passenger and maintain a safe environment for all riders.",
            },
            {
              heading: "Communication",
              text: "To send booking confirmations, service updates, route changes, and important safety notices via WhatsApp.",
            },
            {
              heading: "Invoicing & Payments",
              text: "To generate monthly invoices, confirm payments, and maintain financial records in compliance with UAE regulations.",
            },
            {
              heading: "Service Improvement",
              text: "To analyze route efficiency, passenger satisfaction, and overall service quality using aggregated, anonymized data.",
            },
            {
              heading: "Emergency Response",
              text: "To contact emergency services or your designated emergency contact in the event of an incident.",
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
        <p className="text-slate-600 leading-relaxed mt-4">
          We do not use your personal information for marketing to third parties,
          and we do not sell your data to any external organisations.
        </p>
      </>
    ),
  },
  {
    id: "information-sharing",
    icon: Share2,
    title: "3. Information Sharing",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Car Lift UAE does not sell, rent, or trade your personal information.
          We share your data only in the following limited circumstances:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Assigned Drivers",
              text: "Your name, pickup location, and contact number are shared with your assigned driver solely for the purpose of completing your ride.",
            },
            {
              heading: "Emergency Services",
              text: "In the event of a safety emergency, we may share relevant information with UAE police, ambulance services, or civil defence authorities.",
            },
            {
              heading: "Payment Processors",
              text: "Payment reference information may be shared with our banking or payment service providers to verify and process transactions.",
            },
            {
              heading: "Legal Compliance",
              text: "We may disclose information when required by UAE law, court orders, or regulatory authorities.",
            },
          ].map(({ heading, text }) => (
            <li key={heading} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
              <div>
                <span className="font-semibold text-slate-800">{heading}: </span>
                <span className="text-slate-600">{text}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          All third parties who receive your data are bound by confidentiality
          obligations and may only use your information for the specific purpose
          for which it was disclosed.
        </p>
      </>
    ),
  },
  {
    id: "data-security",
    icon: Lock,
    title: "4. Data Security",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          We take the security of your personal information seriously and
          implement appropriate technical and organisational measures to protect
          it:
        </p>
        <ul className="space-y-3">
          {[
            "Passenger data is stored on encrypted, access-controlled systems.",
            "WhatsApp communications are end-to-end encrypted by WhatsApp's own platform.",
            "Driver access to passenger information is strictly limited to the details needed to complete the ride.",
            "Payment records are stored securely and accessible only to authorised administrative staff.",
            "We do not store payment card numbers or sensitive authentication data.",
            "Our systems are reviewed periodically to identify and address potential security vulnerabilities.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-slate-600 leading-relaxed mt-4">
          While we implement robust security measures, no method of data
          transmission or storage is 100% secure. If you have reason to believe
          your information has been compromised, please contact us immediately at{" "}
          <a
            href="mailto:privacy@carlift.ae"
            className="text-blue-600 underline hover:text-blue-800"
          >
            privacy@carlift.ae
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "5. Your Rights",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          As a passenger or registered user of Car Lift UAE, you have the
          following rights with respect to your personal data:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Right to Access",
              text: "You may request a copy of the personal information we hold about you at any time.",
            },
            {
              heading: "Right to Correct",
              text: "If any of your personal information is inaccurate or incomplete, you may request that we update it.",
            },
            {
              heading: "Right to Delete",
              text: "You may request the deletion of your personal data. We will comply unless we are required to retain the data for legal or regulatory purposes.",
            },
            {
              heading: "Right to Object",
              text: "You may object to certain uses of your data, including any communications that are not essential to your service.",
            },
            {
              heading: "Right to Withdraw Consent",
              text: "Where we process your data based on consent, you may withdraw that consent at any time without affecting the lawfulness of prior processing.",
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
        <p className="text-slate-600 leading-relaxed mt-4">
          To exercise any of these rights, please contact us via email at{" "}
          <a
            href="mailto:privacy@carlift.ae"
            className="text-blue-600 underline hover:text-blue-800"
          >
            privacy@carlift.ae
          </a>{" "}
          or via WhatsApp. We will respond to your request within 14 business
          days.
        </p>
      </>
    ),
  },
  {
    id: "whatsapp-communication",
    icon: MessageCircle,
    title: "6. WhatsApp Communication",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Car Lift UAE uses WhatsApp as its primary communication and booking
          platform. By initiating a WhatsApp conversation with us, you
          acknowledge the following:
        </p>
        <ul className="space-y-3">
          {[
            "Your WhatsApp messages and phone number are received and stored by our customer service team for booking and support purposes.",
            "We will communicate with you via WhatsApp for booking confirmations, service updates, driver assignments, and payment reminders.",
            "We will not add you to group chats or broadcast lists without your explicit consent.",
            "WhatsApp communications are governed by WhatsApp's own Privacy Policy, which we encourage you to review separately.",
            "You may request to stop receiving WhatsApp messages from us at any time by informing us via the same platform.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "location-data",
    icon: MapPin,
    title: "7. Location Data",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Location data is fundamental to providing our car lift service. Here
          is how we handle it:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Pickup & Drop-off Points",
              text: "We collect your designated pickup and drop-off locations when you register for a route.",
            },
            {
              heading: "Driver GPS Tracking",
              text: "Our vehicles are GPS-tracked in real time during rides for safety, route optimisation, and accurate ETA information.",
            },
            {
              heading: "Passenger Location Sharing",
              text: "We may ask you to share your live location via WhatsApp temporarily to assist in locating you at your pickup point — this is optional and not automatically collected.",
            },
            {
              heading: "Data Retention",
              text: "Route and pickup location data is retained for the duration of your active subscription plus 6 months for dispute resolution purposes.",
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
    id: "cookies",
    icon: Cookie,
    title: "8. Cookies & Website Analytics",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          Our website (carliftuae.com) uses a minimal number of cookies to improve
          your browsing experience and understand how visitors interact with our
          site:
        </p>
        <ul className="space-y-3">
          {[
            {
              heading: "Essential Cookies",
              text: "Required for the website to function correctly. These cannot be disabled.",
            },
            {
              heading: "Analytics Cookies",
              text: "We use privacy-respecting analytics (such as Google Analytics in anonymized mode) to understand which pages are visited and how users navigate the site. No personally identifiable information is collected via analytics cookies.",
            },
            {
              heading: "No Advertising Cookies",
              text: "We do not use advertising cookies, retargeting pixels, or social media tracking cookies on our website.",
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
        <p className="text-slate-600 leading-relaxed mt-4">
          You can control cookie preferences through your browser settings. Note
          that disabling cookies may affect the functionality of our website.
        </p>
      </>
    ),
  },
  {
    id: "contact-us",
    icon: Mail,
    title: "9. Contact Us",
    content: (
      <>
        <p className="text-slate-600 leading-relaxed mb-4">
          If you have any questions, concerns, or requests regarding this Privacy
          Policy or the way we handle your personal data, please contact our
          Privacy team:
        </p>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 space-y-2">
          <div className="flex items-center gap-3">
            <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <a
              href="mailto:privacy@carlift.ae"
              className="text-blue-700 font-semibold hover:underline"
            >
              privacy@carlift.ae
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
            <span className="text-slate-700 text-sm">
              WhatsApp: Available on our{" "}
              <a href="/contact" className="text-blue-600 hover:underline">
                Contact Page
              </a>
            </span>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed mt-4">
          We aim to respond to all privacy-related inquiries within 14 business
          days. For urgent safety or security concerns, please contact us
          immediately via WhatsApp.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ─── Page Hero ─── */}
      <section
        aria-labelledby="privacy-hero-heading"
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
              { label: "Privacy Policy" },
            ]}
            className="mb-6 [&_*]:text-slate-400 [&_a]:text-slate-300 [&_a:hover]:text-white"
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
              <Shield className="h-7 w-7 text-white" aria-hidden="true" />
            </div>
            <div>
              <h1
                id="privacy-hero-heading"
                className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
              >
                Privacy Policy
              </h1>
              <Badge variant="info" className="mt-2 text-xs">
                Last Updated: January 2025
              </Badge>
            </div>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
            Car Lift UAE is committed to protecting your personal information.
            This policy explains what data we collect, how we use it, and your
            rights as a passenger or website visitor.
          </p>
        </div>
      </section>

      {/* ─── Quick Nav ─── */}
      <section aria-label="Table of contents" className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">
            Contents
          </p>
          <nav aria-label="Privacy policy sections">
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

      {/* ─── Policy Content ─── */}
      <section aria-label="Privacy policy content" className="py-16 sm:py-20 bg-slate-50">
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

          {/* Policy footer note */}
          <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-200 text-center">
            <p className="text-slate-600 text-sm leading-relaxed">
              This Privacy Policy was last updated in{" "}
              <strong className="text-slate-800">January 2025</strong>. We
              reserve the right to update this policy periodically. Any material
              changes will be communicated to active passengers via WhatsApp. Your
              continued use of our services after such notification constitutes
              your acceptance of the updated policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
