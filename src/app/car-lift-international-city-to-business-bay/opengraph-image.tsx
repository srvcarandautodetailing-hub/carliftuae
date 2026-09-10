import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift International City to Business Bay – Daily Commuter Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "International City → Business Bay",
      title: "Car Lift International City to Business Bay",
      subtitle: "AED 130 sharing / AED 200 private · All Clusters · 35–55 min",
      accentColor: "#0891b2",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "All IC Clusters", color: "#f59e0b" },
        { label: "35–55 min via Al Khail", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
