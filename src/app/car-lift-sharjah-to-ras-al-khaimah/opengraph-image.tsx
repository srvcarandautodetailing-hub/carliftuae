import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Ras Al Khaimah – Intercity Daily Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Ras Al Khaimah",
      title: "Car Lift Sharjah to RAK",
      subtitle: "Intercity daily rides · RAK City · Al Nakheel · 75–100 min via E611",
      accentColor: "#0d9488",
      stats: [
        { label: "Contact for Price", color: "#10b981" },
        { label: "RAK City & Al Hamra", color: "#f59e0b" },
        { label: "75–100 min via E611", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
