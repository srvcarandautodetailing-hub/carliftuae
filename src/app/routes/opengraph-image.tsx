import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE Routes – Sharjah to Business Bay, Dubai, Ajman & More";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Routes & Pricing",
      title: "Sharjah → Business Bay from AED 130 sharing",
      subtitle: "Fixed pricing on 50+ routes. Salik included. No surge fees. Morning pickup + evening drop.",
      accentColor: "#059669",
      stats: [
        { label: "50+ Routes", color: "#10b981" },
        { label: "Salik Included", color: "#f59e0b" },
        { label: "No Surge Fees", color: "#60a5fa" },
        { label: "6 Days/Week", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
