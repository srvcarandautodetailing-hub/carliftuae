import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai to Ajman – Evening Return Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Dubai → Ajman",
      title: "Car Lift Dubai to Ajman",
      subtitle: "AED 130 sharing / AED 200 private · Evening departures · Deira · Al Qusais",
      accentColor: "#e11d48",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Deira & Al Qusais", color: "#f59e0b" },
        { label: "35–55 min via E611", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
