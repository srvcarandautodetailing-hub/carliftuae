import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Abu Dhabi – Daily Intercity Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Abu Dhabi",
      title: "Car Lift Sharjah to Abu Dhabi",
      subtitle: "AED 130 sharing / AED 200 private · Mussafah · Khalifa City · 90–120 min",
      accentColor: "#059669",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Mussafah & Khalifa City", color: "#f59e0b" },
        { label: "90–120 min via E11", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
