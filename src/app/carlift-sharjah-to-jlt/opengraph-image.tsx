import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Carlift Sharjah to JLT Jumeirah Lakes Towers – Daily Commute UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → JLT",
      title: "Carlift Sharjah to JLT Dubai",
      subtitle: "From AED 380/month · Also Dubai Marina & JVC",
      accentColor: "#0891b2",
      stats: [
        { label: "AED 380/Month", color: "#10b981" },
        { label: "JLT Drop-off", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 56 228 6455", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
