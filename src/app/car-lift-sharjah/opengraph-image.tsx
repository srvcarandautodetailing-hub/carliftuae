import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Sharjah – Daily Car Lift Service All Routes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Sharjah Routes",
      title: "Car Lift Sharjah – All Routes",
      subtitle: "AED 130 sharing / AED 200 private · Dubai, Abu Dhabi, Ajman · All Sharjah areas",
      accentColor: "#7c3aed",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "AED 200 Private", color: "#f59e0b" },
        { label: "All Sharjah Areas", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
