import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Abu Dhabi to Dubai – Daily Shared Ride UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Abu Dhabi → Dubai",
      title: "Car Lift Abu Dhabi to Dubai",
      subtitle: "AED 100 Sharing / AED 170 Private per Trip · E11 Route · Salik Included",
      accentColor: "#059669",
      stats: [
        { label: "AED 100 Sharing / AED 170 Private", color: "#10b981" },
        { label: "Khalifa City & Mussafah", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
