import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah to Jebel Ali – Daily JAFZA Commuter Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah → Jebel Ali",
      title: "Car Lift Sharjah to Jebel Ali",
      subtitle: "AED 130 sharing / AED 200 private · JAFZA Gate 1, 3, 5 · From 5:30 AM",
      accentColor: "#b45309",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "JAFZA All Gates", color: "#f59e0b" },
        { label: "From 5:30 AM", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
