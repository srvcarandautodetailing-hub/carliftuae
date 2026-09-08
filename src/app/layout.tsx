import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { organizationSchema, websiteSchema, taxiServiceSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.carliftuae.com";

export const metadata: Metadata = {
  title: {
    template: "%s | MJ Car Lift Service",
    default: "MJ Car Lift Service – Dubai, Abu Dhabi, Sharjah & Ajman",
  },
  description:
    "MJ Car Lift Service – reliable car lift and carpool rides on confirmed inter-emirate routes. Dubai ↔ Abu Dhabi from AED 200. Abu Dhabi ↔ Sharjah from AED 280. Abu Dhabi ↔ Ajman from AED 300. Book by phone or WhatsApp.",
  keywords:
    "car lift uae, carpool uae, car lift dubai abu dhabi, car lift abu dhabi sharjah, car lift abu dhabi ajman, MJ car lift service, airport transfer uae",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: `${BASE_URL}/` },
  manifest: "/site.webmanifest?v=2",
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    shortcut: "/favicon.ico?v=2",
  },
  authors: [{ name: "MJ Car Lift Service" }],
  creator: "MJ Car Lift Service",
  publisher: "MJ Car Lift Service",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BASE_URL,
    siteName: "MJ Car Lift Service",
    title: "MJ Car Lift Service – Dubai, Abu Dhabi, Sharjah & Ajman",
    description:
      "Car lift and carpool service on confirmed inter-emirate routes. Dubai ↔ Abu Dhabi from AED 200. Airport transfers available. Book by phone or WhatsApp.",
    // OG images are generated per-page via opengraph-image.tsx in each route folder
  },
  twitter: {
    card: "summary_large_image",
    site: "@carliftUAE",
    creator: "@carliftUAE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "fNl9S8ESdB8EQ-W225nsY9gpIittcqzOqqHSf55HqvI",
  },
  other: {
    "geo.region": "AE-AZ",
    "geo.placename": "Abu Dhabi, UAE",
    "og:phone_number": BUSINESS.phone,
    "og:email": BUSINESS.email,
    "business:contact_data:country_name": "United Arab Emirates",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} antialiased overflow-x-hidden`}
    >
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="MJ Car Lift" />
        {/* Resource hints — preconnect reduces GA4 script latency */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* GA4 dataLayer bootstrap — inline so it runs before gtag.js */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());`,
          }}
        />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema(),
              websiteSchema(),
              taxiServiceSchema(),
            ]),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:font-semibold focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SB922V7RSD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`gtag('config','G-SB922V7RSD');`}
        </Script>
      </body>
    </html>
  );
}
