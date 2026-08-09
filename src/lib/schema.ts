import { BUSINESS } from "./utils";

const BASE_URL = "https://www.carliftuae.com";

// Organization schema
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: BUSINESS.name,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/images/logos/carlift-uae-logo.png`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "customer service",
      areaServed: "AE",
      availableLanguage: ["English", "Arabic", "Hindi", "Urdu"],
    },
    sameAs: [
      "https://www.facebook.com/carliftUAE",
      "https://www.instagram.com/carliftUAE",
      "https://twitter.com/carliftUAE",
      "https://g.co/carliftUAE",
    ],
  };
}

// Local Business schema
export function localBusinessSchema(overrides?: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": `${BASE_URL}/#localbusiness`,
    name: BUSINESS.name,
    description:
      "Premium daily car lift service in UAE. Reliable, safe, and affordable shared ride service from Sharjah to Business Bay, Dubai and all major locations.",
    url: BASE_URL,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    image: [
      `${BASE_URL}/images/hero/carlift-uae-daily-commuters-interior.webp`,
      `${BASE_URL}/images/hero/carlift-uae-route-dubai-skyline.webp`,
      `${BASE_URL}/images/locations/sharjah/sharjah-car-lift-morning-pickup.webp`,
      `${BASE_URL}/images/locations/business-bay/business-bay-car-lift-professionals.webp`,
      `${BASE_URL}/images/services/carlift-uae-professionals-interior.webp`,
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      addressCountry: "AE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.lat,
      longitude: BUSINESS.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "07:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "06:00",
        closes: "22:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "AED 200 – AED 500/month",
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Bank Transfer, WhatsApp Pay",
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    ...overrides,
  };
}

// Service schema
export function serviceSchema({
  name,
  description,
  url,
  price,
}: {
  name: string;
  description: string;
  url: string;
  price?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.coordinates.lat,
        longitude: BUSINESS.coordinates.lng,
      },
      geoRadius: "50000",
    },
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "AED",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price,
          priceCurrency: "AED",
          unitCode: "MON",
        },
      },
    }),
  };
}

// FAQ schema
export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// Breadcrumb schema
export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}

// Article schema for blog posts
export function articleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Car Lift UAE Team",
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: `${BASE_URL}${url}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/logos/carlift-uae-logo.png`,
      },
    },
    ...(image && {
      image: {
        "@type": "ImageObject",
        url: image,
      },
    }),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}${url}`,
    },
  };
}

// WebSite schema with SearchAction
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS.name,
    description: BUSINESS.tagline,
  };
}

// Review schema
export function reviewSchema({
  authorName,
  reviewBody,
  ratingValue,
  datePublished,
}: {
  authorName: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}) {
  return {
    "@type": "Review",
    author: { "@type": "Person", name: authorName },
    reviewBody,
    reviewRating: {
      "@type": "Rating",
      ratingValue,
      bestRating: 5,
    },
    datePublished,
    itemReviewed: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
  };
}

// Primary image of page — tells Google which image represents this page in SERP
export function primaryImageOfPageSchema({
  imageUrl,
  pageUrl,
  caption,
  width = 1920,
  height = 1080,
}: {
  imageUrl: string;
  pageUrl: string;
  caption: string;
  width?: number;
  height?: number;
}) {
  const absImage = imageUrl.startsWith("http") ? imageUrl : `${BASE_URL}${imageUrl}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${pageUrl}`,
    url: `${BASE_URL}${pageUrl}`,
    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${absImage}#primaryImage`,
      url: absImage,
      contentUrl: absImage,
      caption,
      width,
      height,
      license: `${BASE_URL}/`,
      acquireLicensePage: `${BASE_URL}/contact`,
    },
  };
}

// Speakable schema for voice search
export function speakableSchema(cssSelectors: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };
}
