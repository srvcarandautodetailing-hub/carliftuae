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
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|svg|ico|webp|avif)",
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
      { source: "/home", destination: "/", permanent: true },
      { source: "/car-lift-service", destination: "/services", permanent: true },
      { source: "/car-lift-sharjah-to-dubai", destination: "/routes", permanent: true },
    ];
  },
};

export default nextConfig;
