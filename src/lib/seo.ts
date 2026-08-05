import type { Metadata } from "next";

const BASE_URL = "https://www.carlift.ae";
const SITE_NAME = "Car Lift UAE";
const DEFAULT_DESCRIPTION =
  "Premium daily car lift service from Sharjah to Business Bay, Dubai. Safe, reliable, affordable shared rides with professional drivers. Book now from AED 200/month.";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  ogImage,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${BASE_URL}${path}`;
  const image = ogImage || `${BASE_URL}/og/default.jpg`;

  return {
    title: {
      absolute: `${title} | ${SITE_NAME}`,
    },
    description,
    keywords: keywords?.join(", "),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
      site: "@carliftUAE",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    other: {
      "geo.region": "AE-SH",
      "geo.placename": "Sharjah, UAE",
      "geo.position": "25.3573;55.3850",
      ICBM: "25.3573, 55.3850",
    },
  };
}

// Structured metadata for location pages
export function buildLocationMetadata(location: {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
}) {
  return buildMetadata({
    title: `Car Lift ${location.name} – Daily Rides to Business Bay & Dubai`,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: location.keywords,
  });
}

// Structured metadata for service pages
export function buildServiceMetadata(service: {
  name: string;
  slug: string;
  description: string;
  keywords: string[];
}) {
  return buildMetadata({
    title: `${service.name} UAE – Affordable & Reliable Transport`,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}
