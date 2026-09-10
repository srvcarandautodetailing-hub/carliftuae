import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Ajman to Sharjah – Daily Return Route";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Ajman → Sharjah",
      title: "Car Lift Ajman to Sharjah",
      subtitle: "Short route · 25–40 min · Morning & evening · All Ajman areas",
      accentColor: "#059669",
      stats: [
        { label: "Sharing & Private Options", color: "#10b981" },
        { label: "25–40 min journey", color: "#f59e0b" },
        { label: "All Sharjah Drop-off Areas", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
