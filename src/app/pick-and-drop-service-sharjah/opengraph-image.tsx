import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Pick and Drop Service Sharjah – Door-to-Door Commuter Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Dubai Door-to-Door",
      title: "Pick & Drop Service Sharjah",
      subtitle: "AED 130 sharing / AED 200 private · Door-to-door · All Sharjah areas",
      accentColor: "#7c3aed",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Door-to-Door Service", color: "#f59e0b" },
        { label: "All Sharjah Areas", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
