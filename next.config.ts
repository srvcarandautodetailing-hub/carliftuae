import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
  },
  // Compression
  compress: true,
  // Remove X-Powered-By header
  poweredByHeader: false,
  // Security and cache headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Robots-Tag", value: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com",
              "frame-src https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
      // Favicon files — short TTL so browser picks up updates after deploy
      {
        source: "/favicon.ico",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
      {
        source: "/(favicon-:size\\.png|apple-touch-icon\\.png|android-chrome-:size\\.png)",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, must-revalidate" }],
      },
      // Web manifests — no-cache so browsers always fetch the latest
      {
        source: "/(site\\.webmanifest|manifest\\.json)",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, must-revalidate" }],
      },
      // All other images — long-lived immutable cache
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|webp|avif)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/(.*)\\.(js|css|woff|woff2|ttf|otf)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
  // SEO redirects
  async redirects() {
    return [
      // Generic legacy paths
      { source: "/home", destination: "/", permanent: true },
      { source: "/car-lift-service", destination: "/services", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/privacy-policy-carl-ift-uae-from-sharjah", destination: "/privacy", permanent: true },
      { source: "/privacy-policy-carl-ift-uae-from-sharjah/", destination: "/privacy", permanent: true },
      // Old SZR variant URL -> closest surviving page (Sharjah service discontinued Oct 2026)
      { source: "/car-lift-from-sharjah-to-business-bay-sheikh-zayed-road", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-from-sharjah-to-business-bay-sheikh-zayed-road/", destination: "/car-lift-dubai", permanent: true },
      // Sharjah service discontinued (Oct 2026) -> closest surviving pages
      { source: "/car-lift-sharjah", destination: "/", permanent: true },
      { source: "/car-lift-sharjah/", destination: "/", permanent: true },
      { source: "/car-lift-sharjah-to-dubai", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-dubai/", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-difc", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-difc/", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-dubai-business-bay", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-dubai-business-bay/", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-jlt", destination: "/car-lift-dubai", permanent: true },
      { source: "/carlift-sharjah-to-jlt/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-al-barsha", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-al-barsha/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-al-quoz", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-al-quoz/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-jebel-ali", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-sharjah-to-jebel-ali/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-from-sharjah-to-business-bay", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-from-sharjah-to-business-bay/", destination: "/car-lift-dubai", permanent: true },
      { source: "/ladies-car-lift-sharjah-to-dubai", destination: "/car-lift-dubai", permanent: true },
      { source: "/ladies-car-lift-sharjah-to-dubai/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-from-sharjah-to-abu-dhabi", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-from-sharjah-to-abu-dhabi/", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-sharjah-to-ajman", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-sharjah-to-ajman/", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-sharjah-to-ras-al-khaimah", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-sharjah-to-ras-al-khaimah/", destination: "/car-lift-abu-dhabi", permanent: true },
      { source: "/car-lift-dubai-to-sharjah", destination: "/routes", permanent: true },
      { source: "/car-lift-dubai-to-sharjah/", destination: "/routes", permanent: true },
      { source: "/car-lift-ajman-to-sharjah", destination: "/routes", permanent: true },
      { source: "/car-lift-ajman-to-sharjah/", destination: "/routes", permanent: true },
      { source: "/monthly-pick-and-drop-service-sharjah", destination: "/", permanent: true },
      { source: "/monthly-pick-and-drop-service-sharjah/", destination: "/", permanent: true },
      { source: "/pick-and-drop-service-sharjah", destination: "/", permanent: true },
      { source: "/pick-and-drop-service-sharjah/", destination: "/", permanent: true },
      // Monthly service discontinued (Oct 2026) -> daily equivalents
      { source: "/car-lift-dubai-monthly", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-dubai-monthly/", destination: "/car-lift-dubai", permanent: true },
      { source: "/monthly-pick-and-drop-service-abu-dhabi", destination: "/pick-and-drop-service", permanent: true },
      { source: "/monthly-pick-and-drop-service-abu-dhabi/", destination: "/pick-and-drop-service", permanent: true },
      // Bus service discontinued (Oct 2026) -> car-only equivalents
      { source: "/bus-car-lift-sharjah-to-business-bay", destination: "/car-lift-dubai", permanent: true },
      { source: "/bus-car-lift-sharjah-to-business-bay/", destination: "/car-lift-dubai", permanent: true },
      { source: "/bus-car-lift-service-from-sharjah-sheikh-zayed", destination: "/car-lift-dubai", permanent: true },
      { source: "/bus-car-lift-service-from-sharjah-sheikh-zayed/", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-international-city-to-business-bay", destination: "/car-lift-from-international-city", permanent: true },
      { source: "/car-lift-international-city-to-business-bay/", destination: "/car-lift-from-international-city", permanent: true },
      { source: "/car-lift-silicon-oasis-to-business-bay", destination: "/car-lift-dubai", permanent: true },
      { source: "/car-lift-silicon-oasis-to-business-bay/", destination: "/car-lift-dubai", permanent: true },
      // Removed location + blog URLs
      { source: "/locations/sharjah", destination: "/locations", permanent: true },
      { source: "/locations/sharjah/", destination: "/locations", permanent: true },
      { source: "/blog/sharjah-to-business-bay-car-lift-guide", destination: "/blog", permanent: true },
      { source: "/blog/sharjah-to-dubai-commute-cost-comparison", destination: "/blog", permanent: true },
      { source: "/blog/best-pickup-points-sharjah-car-lift", destination: "/blog", permanent: true },
      { source: "/blog/how-to-find-car-lift-sharjah", destination: "/blog", permanent: true },
      { source: "/blog/sharjah-dubai-traffic-avoid-guide", destination: "/blog", permanent: true },
      { source: "/blog/al-nahda-sharjah-dubai-commute-guide", destination: "/blog", permanent: true },
      { source: "/blog/sharjah-dubai-salik-toll-guide", destination: "/blog", permanent: true },
      { source: "/blog/ladies-only-car-lift-sharjah-dubai", destination: "/blog", permanent: true },
      { source: "/blog/muweilah-sharjah-to-dubai-commute", destination: "/blog", permanent: true },
      { source: "/blog/top-10-areas-car-lift-sharjah", destination: "/blog", permanent: true },
      { source: "/blog/ajman-sharjah-dubai-car-lift-route", destination: "/blog", permanent: true },
      { source: "/blog/school-transport-sharjah-dubai", destination: "/blog", permanent: true },
      { source: "/blog/car-lift-vs-public-bus-uae", destination: "/blog", permanent: true },
      // Common misspellings
      { source: "/carlift-uae", destination: "/", permanent: true },
      { source: "/car-lift-near-me", destination: "/routes", permanent: true },
      // WordPress legacy URLs
      { source: "/post-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/page-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/sitemap_index.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/feed", destination: "/feed.xml", permanent: true },
      { source: "/wp-content/:path*", destination: "/", permanent: true },
      { source: "/wp-admin/:path*", destination: "/", permanent: true },
      { source: "/wp-login.php", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
