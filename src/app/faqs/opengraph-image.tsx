import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE FAQs – Your Questions About Car Lift Service Answered";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "FAQs",
      title: "Car Lift UAE – Questions Answered",
      subtitle: "Everything you need to know about booking, pricing, safety, pickup, and car lift routes in UAE.",
      stats: [
        { label: "How to Book", color: "#10b981" },
        { label: "Pricing Info", color: "#f59e0b" },
        { label: "Safety Rules", color: "#60a5fa" },
        { label: "Route Details", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
