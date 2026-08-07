import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE Blog – Commute Tips, Route Guides & Transport Advice";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Blog & Guides",
      title: "UAE Car Lift Insights",
      subtitle: "Expert guides on commuting, pricing, routes and transport tips from Sharjah, Dubai and Ajman.",
      stats: [
        { label: "Route Guides", color: "#10b981" },
        { label: "Pricing Tips", color: "#f59e0b" },
        { label: "Safety Info", color: "#60a5fa" },
        { label: "Comparisons", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
