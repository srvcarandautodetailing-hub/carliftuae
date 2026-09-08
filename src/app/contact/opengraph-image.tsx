import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Contact Car Lift UAE – Book via WhatsApp in 60 Seconds";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Contact Us",
      title: "Book Your Car Lift Today",
      subtitle: "WhatsApp us in 60 seconds and we'll match you with a verified driver on your route within 24 hours.",
      accentColor: "#15803d",
      stats: [
        { label: "+971 54 330 8261", color: "#10b981" },
        { label: "60-sec Booking", color: "#f59e0b" },
        { label: "24-hr Response", color: "#60a5fa" },
        { label: "Sharjah · Dubai", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
