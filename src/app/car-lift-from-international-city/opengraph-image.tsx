import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift from International City Dubai – Business Bay, DIFC, Downtown";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "International City → Dubai",
      title: "Car Lift from International City",
      subtitle: "All IC Phases · Business Bay, DIFC, Downtown · 35–55 min via Al Khail Road",
      accentColor: "#0891b2",
      stats: [
        { label: "All IC Phases Covered", color: "#10b981" },
        { label: "35–55 min to Business Bay", color: "#f59e0b" },
        { label: "Al Khail Road (E44)", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
