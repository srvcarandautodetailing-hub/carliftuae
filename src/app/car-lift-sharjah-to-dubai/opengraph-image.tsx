import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Dubai – Daily Shared & Private Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Dubai",
      title: "Car Lift Sharjah to Dubai",
      subtitle: "AED 130 sharing / AED 200 private · All Sharjah areas · Business Bay, DIFC, JLT",
      accentColor: "#1e40af",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "AED 200 Private", color: "#f59e0b" },
        { label: "35–60 min journey", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
