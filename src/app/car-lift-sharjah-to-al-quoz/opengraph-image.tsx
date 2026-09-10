import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Al Quoz – Industrial & Residential Area";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Al Quoz",
      title: "Car Lift Sharjah to Al Quoz",
      subtitle: "AED 130 sharing / AED 200 private · Industrial & Residential · 40–55 min",
      accentColor: "#c2410c",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Al Quoz Industrial 1–4", color: "#f59e0b" },
        { label: "40–55 min via SZR", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
