import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE Locations – Sharjah, Dubai, Business Bay, Ajman & More";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Service Locations",
      title: "Car Lift Across UAE",
      subtitle: "Serving Sharjah, Business Bay, Dubai, Ajman, Al Nahda, JVC, Silicon Oasis and 50+ more areas.",
      accentColor: "#0284c7",
      stats: [
        { label: "Sharjah", color: "#10b981" },
        { label: "Business Bay", color: "#f59e0b" },
        { label: "Dubai", color: "#60a5fa" },
        { label: "Ajman", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
