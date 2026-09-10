import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift from Sharjah to Business Bay – AED 130 sharing / AED 200 private, GPS Tracked";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Most Popular Route",
      title: "Car Lift: Sharjah → Business Bay",
      subtitle: "Daily shared car lift from Sharjah to Business Bay Dubai. AED 130 sharing / AED 200 private. Salik included. 60-sec booking.",
      accentColor: "#059669",
      stats: [
        { label: "AED 130 sharing / AED 200 private", color: "#10b981" },
        { label: "~45 min drive", color: "#f59e0b" },
        { label: "Salik Included", color: "#60a5fa" },
        { label: "4.9★ Rated", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
