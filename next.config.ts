import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://cdn.cookiehub.eu",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https:",
              "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com https://cdn.cookiehub.eu https://cookiehub.eu",
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
      // Existing
      { source: "/home", destination: "/", permanent: true },
      { source: "/car-lift-service", destination: "/services", permanent: true },
      { source: "/car-lift-sharjah-to-dubai", destination: "/routes", permanent: true },
      // Old carliftuae.com → carlift.ae (301 passes link equity)
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us/", destination: "/contact", permanent: true },
      { source: "/privacy-policy-carl-ift-uae-from-sharjah", destination: "/privacy", permanent: true },
      { source: "/privacy-policy-carl-ift-uae-from-sharjah/", destination: "/privacy", permanent: true },
      // Old SZR page variant → new page
      { source: "/car-lift-from-sharjah-to-business-bay-sheikh-zayed-road", destination: "/bus-car-lift-service-from-sharjah-sheikh-zayed", permanent: true },
      { source: "/car-lift-from-sharjah-to-business-bay-sheikh-zayed-road/", destination: "/bus-car-lift-service-from-sharjah-sheikh-zayed", permanent: true },
      // Trailing-slash normalisation for new pages
      { source: "/bus-car-lift-sharjah-to-business-bay/", destination: "/bus-car-lift-sharjah-to-business-bay", permanent: true },
      { source: "/car-lift-from-sharjah-to-business-bay/", destination: "/car-lift-from-sharjah-to-business-bay", permanent: true },
      { source: "/bus-car-lift-service-from-sharjah-sheikh-zayed/", destination: "/bus-car-lift-service-from-sharjah-sheikh-zayed", permanent: true },
      { source: "/carlift-sharjah-to-dubai-business-bay/", destination: "/carlift-sharjah-to-dubai-business-bay", permanent: true },
      // Common misspellings / alternate forms seen in queries
      { source: "/carlift-uae", destination: "/", permanent: true },
      { source: "/car-lift-near-me", destination: "/locations", permanent: true },
      // WordPress legacy URLs — redirect to canonical equivalents (passes link equity)
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
