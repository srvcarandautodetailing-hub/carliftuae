import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai to Al Ain – Long Distance Intercity Rides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Dubai → Al Ain",
      title: "Car Lift Dubai to Al Ain",
      subtitle: "Long distance intercity · Al Ain City · Zakher · 90–120 min via E66",
      accentColor: "#b45309",
      stats: [
        { label: "Contact for Price", color: "#10b981" },
        { label: "Al Ain City & Zakher", color: "#f59e0b" },
        { label: "90–120 min via E66", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
