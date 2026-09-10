import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Umm Al Quwain – Daily Rides to Dubai & Sharjah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Umm Al Quwain → Dubai & Sharjah",
      title: "Car Lift Umm Al Quwain",
      subtitle: "Daily intercity rides · UAQ City · Free Trade Zone · 60–90 min to Dubai",
      accentColor: "#047857",
      stats: [
        { label: "Contact for Price", color: "#10b981" },
        { label: "UAQ City & FTZ", color: "#f59e0b" },
        { label: "60–90 min to Dubai", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
