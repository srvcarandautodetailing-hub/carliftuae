import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Monthly Pick and Drop Service Abu Dhabi – Daily Commuter Package";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Monthly Commuter · Abu Dhabi",
      title: "Monthly Pick & Drop Abu Dhabi",
      subtitle: "Reserved daily seat · Door-to-door · Fixed monthly rate · Mussafah · Khalifa City",
      accentColor: "#059669",
      stats: [
        { label: "Monthly Package", color: "#10b981" },
        { label: "Reserved Daily Seat", color: "#f59e0b" },
        { label: "Door-to-Door Service", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
