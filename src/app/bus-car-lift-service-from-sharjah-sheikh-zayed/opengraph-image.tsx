import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Bus Car Lift Sharjah via Sheikh Zayed Road – DIFC, JLT, Marina Route";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sheikh Zayed Road Route",
      title: "Sharjah → Sheikh Zayed Road",
      subtitle: "Daily car lift from Sharjah via SZR corridor to DIFC, JLT, Dubai Marina and Business Bay.",
      accentColor: "#0284c7",
      stats: [
        { label: "Via SZR", color: "#10b981" },
        { label: "DIFC · JLT", color: "#f59e0b" },
        { label: "Dubai Marina", color: "#60a5fa" },
        { label: "From AED 300", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
