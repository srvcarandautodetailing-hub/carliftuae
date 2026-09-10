import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Pick and Drop Service Dubai – Daily Door-to-Door Transport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Pick & Drop Dubai",
      title: "Pick and Drop Service Dubai",
      subtitle: "Door-to-door from AED 100 · All Dubai areas · Sharjah, Ajman, Abu Dhabi",
      accentColor: "#1d4ed8",
      stats: [
        { label: "AED 100+ per trip", color: "#10b981" },
        { label: "All Dubai Areas", color: "#f59e0b" },
        { label: "4.9★ Rated", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
