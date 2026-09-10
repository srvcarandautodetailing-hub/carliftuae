import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE Services – Daily, Monthly, Ladies & Corporate Transport";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Our Services",
      title: "Car Lift Services in UAE",
      subtitle: "Daily, monthly, ladies, corporate, school & airport transport across Sharjah, Dubai and Ajman.",
      accentColor: "#7c3aed",
      stats: [
        { label: "Daily Car Lift", color: "#10b981" },
        { label: "Ladies Only", color: "#f59e0b" },
        { label: "Corporate", color: "#60a5fa" },
        { label: "From AED 130 sharing", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
