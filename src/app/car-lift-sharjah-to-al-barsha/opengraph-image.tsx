import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Al Barsha – Daily Commuter Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Al Barsha",
      title: "Car Lift Sharjah to Al Barsha",
      subtitle: "AED 130 sharing / AED 200 private · Mall of Emirates · Al Barsha Heights",
      accentColor: "#7c3aed",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Mall of Emirates Route", color: "#f59e0b" },
        { label: "45–60 min via SZR", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
