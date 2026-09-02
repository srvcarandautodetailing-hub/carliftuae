import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Ladies Car Lift Sharjah to Dubai – Female Driver Option UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Ladies Car Lift",
      title: "Ladies Car Lift Sharjah to Dubai",
      subtitle: "From AED 300/month · Female Driver Option · GPS Tracked",
      accentColor: "#db2777",
      stats: [
        { label: "AED 300/Month", color: "#10b981" },
        { label: "Female Drivers", color: "#f59e0b" },
        { label: "Ladies Only", color: "#60a5fa" },
        { label: "+971 50 725 5334", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
