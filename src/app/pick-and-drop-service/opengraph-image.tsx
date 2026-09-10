import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Pick and Drop Service UAE – Daily Door-to-Door Transport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Pick & Drop UAE",
      title: "Pick and Drop Service UAE",
      subtitle: "Door-to-door from AED 100 · Dubai, Abu Dhabi, Sharjah, Ajman · 24/7",
      accentColor: "#ea580c",
      stats: [
        { label: "AED 100+ per trip", color: "#10b981" },
        { label: "Door-to-Door Service", color: "#f59e0b" },
        { label: "All Emirates", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
