import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCTA } from "@/components/layout/floating-cta";
import { organizationSchema, websiteSchema, localBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = "https://www.carlift.ae";

export const metadata: Metadata = {
  title: {
    template: "%s | Car Lift UAE",
    default: "Car Lift UAE – Daily Car Lift from Sharjah to Business Bay & Dubai",
  },
  description:
    "Premium daily car lift service in UAE. Sharjah to Business Bay, Dubai, Ajman and beyond. Safe, reliable, affordable shared rides from AED 200/month. GPS tracked, verified drivers. Book now!",
  keywords:
    "car lift uae, car lift sharjah, car lift sharjah to business bay, sharjah to business bay car lift, car lift service uae, daily car lift sharjah, monthly car lift dubai",
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: BASE_URL },
  authors: [{ name: "Car Lift UAE" }],
  creator: "Car Lift UAE",
  publisher: "Car Lift UAE",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: BASE_URL,
    siteName: "Car Lift UAE",
    title: "Car Lift UAE – Daily Car Lift from Sharjah to Business Bay & Dubai",
    description:
      "Premium daily car lift service. Sharjah to Business Bay from AED 350/month. Safe, reliable, GPS tracked. 4.9★ rated by 247 customers.",
    images: [
      {
        url: `${BASE_URL}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: "Car Lift UAE - Daily Car Lift Service Sharjah to Dubai",
      },
    ],
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
    "geo.region": "AE-SH",
    "geo.placename": "Sharjah, UAE",
    "geo.position": "25.3573;55.3850",
    ICBM: "25.3573, 55.3850",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Car Lift UAE" />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema(),
              websiteSchema(),
              localBusinessSchema(),
            ]),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900">
        <Header />
        <main id="main-content" className="flex-1" role="main">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
