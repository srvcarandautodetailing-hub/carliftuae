import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Abu Dhabi – Daily Rides to Dubai & Ajman";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Abu Dhabi Routes",
      title: "Car Lift Abu Dhabi",
      subtitle: "AED 100 sharing / AED 180 private · Dubai, Ajman · 24/7",
      accentColor: "#059669",
      stats: [
        { label: "AED 100 Sharing (Dubai route)", color: "#10b981" },
        { label: "AED 140 Sharing (Ajman)", color: "#f59e0b" },
        { label: "3 Routes", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
