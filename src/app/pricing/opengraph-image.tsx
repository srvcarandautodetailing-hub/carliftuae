import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift UAE Pricing – Monthly Packages from AED 300";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Pricing",
      title: "Monthly Car Lift from AED 300",
      subtitle: "Transparent fixed pricing. Salik included. Daily and monthly packages across all major UAE routes.",
      accentColor: "#059669",
      stats: [
        { label: "From AED 300/mo", color: "#10b981" },
        { label: "Daily AED 25–40", color: "#f59e0b" },
        { label: "Salik Included", color: "#60a5fa" },
        { label: "No Hidden Fees", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
