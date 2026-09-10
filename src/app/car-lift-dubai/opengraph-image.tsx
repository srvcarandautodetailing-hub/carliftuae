import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai – Daily Shared & Private Rides Across UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Dubai → UAE Routes",
      title: "Car Lift Dubai – All Routes",
      subtitle: "AED 100 sharing / AED 170 private · Abu Dhabi, Sharjah, Ajman · 24/7",
      accentColor: "#1d4ed8",
      stats: [
        { label: "AED 100 Sharing (Abu Dhabi)", color: "#10b981" },
        { label: "AED 130 Sharing (Sharjah/Ajman)", color: "#f59e0b" },
        { label: "24/7 Service", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
