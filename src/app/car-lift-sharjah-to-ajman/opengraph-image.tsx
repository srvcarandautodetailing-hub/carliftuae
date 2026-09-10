import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Ajman – Daily Short-Route Commute";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Ajman",
      title: "Car Lift Sharjah to Ajman",
      subtitle: "Short route · 25–40 min · Both directions · 24/7",
      accentColor: "#d97706",
      stats: [
        { label: "Sharing & Private Options", color: "#10b981" },
        { label: "25–40 min journey", color: "#f59e0b" },
        { label: "Al Nuaimiya, Al Rashidiya", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
