import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Private Car Lift Dubai – Exclusive Rides, No Strangers";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Private Car Lift Dubai",
      title: "Private Car Lift Dubai",
      subtitle: "AED 170+ exclusive · No strangers · Entire vehicle for your group · 24/7",
      accentColor: "#334155",
      stats: [
        { label: "AED 170 Private (Abu Dhabi)", color: "#10b981" },
        { label: "AED 200 Private (Sharjah/Ajman)", color: "#f59e0b" },
        { label: "Exclusive Vehicle", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
