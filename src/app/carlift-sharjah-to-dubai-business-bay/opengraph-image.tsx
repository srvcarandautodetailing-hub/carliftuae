import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Carlift Sharjah to Dubai – Daily Shared Rides from AED 130 sharing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah to Dubai",
      title: "Carlift: Sharjah → Dubai",
      subtitle: "Reliable daily car lift from Sharjah to Business Bay, Downtown and all Dubai areas. Book via WhatsApp.",
      accentColor: "#2563eb",
      stats: [
        { label: "From AED 300", color: "#10b981" },
        { label: "GPS Tracked", color: "#f59e0b" },
        { label: "Verified Drivers", color: "#60a5fa" },
        { label: "4.9★ Rated", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
