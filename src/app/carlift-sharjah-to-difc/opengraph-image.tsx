import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Carlift Sharjah to DIFC – Daily Commute UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → DIFC",
      title: "Carlift Sharjah to DIFC Daily",
      subtitle: "From AED 130 sharing / AED 200 private · Salik Included · 6:30 AM Pickup",
      accentColor: "#7c3aed",
      stats: [
        { label: "From AED 130 sharing", color: "#10b981" },
        { label: "DIFC Drop-off", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
