import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Bus Car Lift Sharjah to Business Bay – Shared Shuttle Service UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Bus Car Lift Service",
      title: "Shared Shuttle: Sharjah → Business Bay",
      subtitle: "Scheduled bus-style car lift from Sharjah to Business Bay. Fixed timings, fixed pricing, no hassle.",
      accentColor: "#7c3aed",
      stats: [
        { label: "Fixed Timings", color: "#10b981" },
        { label: "From AED 130 sharing", color: "#f59e0b" },
        { label: "6 Days/Week", color: "#60a5fa" },
        { label: "Salik Included", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
