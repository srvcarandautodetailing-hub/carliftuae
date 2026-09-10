import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Ajman – Daily Car Lift from Ajman to Dubai & Abu Dhabi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Ajman Routes",
      title: "Car Lift Ajman – All Routes",
      subtitle: "AED 130 sharing / AED 200 private · Dubai, Abu Dhabi, Jebel Ali · 24/7",
      accentColor: "#e11d48",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "AED 200 Private", color: "#f59e0b" },
        { label: "Dubai + Abu Dhabi Routes", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
