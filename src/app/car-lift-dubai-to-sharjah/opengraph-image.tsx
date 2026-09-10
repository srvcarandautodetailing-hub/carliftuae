import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai to Sharjah – Evening Return Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Dubai → Sharjah",
      title: "Car Lift Dubai to Sharjah",
      subtitle: "AED 130 sharing / AED 200 private · Evening 5–7 PM · Business Bay, DIFC, JLT",
      accentColor: "#1e40af",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Evening Service 5–7 PM", color: "#f59e0b" },
        { label: "All Sharjah Areas", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
