import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Ajman to Dubai Business Bay – Daily Shared Ride UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Ajman → Dubai",
      title: "Car Lift Ajman to Dubai Daily",
      subtitle: "From AED 130 sharing / AED 200 private · Salik Included · GPS Tracked",
      accentColor: "#0284c7",
      stats: [
        { label: "AED 130 Sharing / AED 200 Private", color: "#10b981" },
        { label: "Business Bay", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
