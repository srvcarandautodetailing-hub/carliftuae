import type { Metadata } from "next";

const BASE_URL = "https://www.carliftuae.com";
const SITE_NAME = "Quick Car Lift Service UAE";
const DEFAULT_DESCRIPTION =
  "Quick Car Lift Service UAE – reliable car lift and carpool rides on confirmed inter-emirate routes. Dubai ↔ Abu Dhabi from AED 100 sharing. Abu Dhabi ↔ Sharjah from AED 130 sharing. Abu Dhabi ↔ Ajman from AED 130 sharing.";

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
