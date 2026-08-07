import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "About Car Lift UAE – Trusted UAE Car Lift Service Since 2019";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "About Us",
      title: "Trusted Car Lift UAE Since 2019",
      subtitle: "Verified drivers, GPS-tracked vehicles, and 247+ happy daily commuters across UAE.",
      stats: [
        { label: "Since 2019", color: "#10b981" },
        { label: "4.9★ Rated", color: "#f59e0b" },
        { label: "Verified Drivers", color: "#60a5fa" },
        { label: "247+ Riders", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
