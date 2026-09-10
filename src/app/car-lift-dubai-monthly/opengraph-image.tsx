import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Car Lift Dubai Monthly – Fixed Monthly Commuter Packages";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Monthly Dubai Car Lift",
      title: "Monthly Car Lift to Dubai",
      subtitle: "Fixed daily seat · No daily booking · Sharjah, Ajman, Abu Dhabi · Mon–Sat",
      accentColor: "#4338ca",
      stats: [
        { label: "Guaranteed Daily Seat", color: "#10b981" },
        { label: "No Lock-in Contract", color: "#f59e0b" },
        { label: "Monday to Saturday", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
