import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai to Abu Dhabi – Daily Shared Ride UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Dubai → Abu Dhabi",
      title: "Car Lift Dubai to Abu Dhabi",
      subtitle: "From AED 650/month · E11 Route · Salik Included",
      accentColor: "#d97706",
      stats: [
        { label: "AED 650/Month", color: "#10b981" },
        { label: "Khalifa City", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "+971 50 725 5334", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
