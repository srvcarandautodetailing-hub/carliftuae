import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Monthly Pick and Drop Service Sharjah to Dubai – Car Lift UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Monthly Service",
      title: "Monthly Pick & Drop Sharjah → Dubai",
      subtitle: "From AED 130 sharing / AED 200 private · Salik Included · GPS Tracked",
      accentColor: "#059669",
      stats: [
        { label: "AED 130 Sharing / AED 200 Private", color: "#10b981" },
        { label: "26 Days", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
