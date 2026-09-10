import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Carpool Dubai – Shared Car Lift & Carpooling UAE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Carpool Dubai",
      title: "Carpool Dubai – Shared Rides UAE",
      subtitle: "From AED 100 sharing · All inter-emirate routes · Verified drivers · GPS tracked",
      accentColor: "#0d9488",
      stats: [
        { label: "AED 100 from (Abu Dhabi)", color: "#10b981" },
        { label: "AED 130 from (Sharjah/Ajman)", color: "#f59e0b" },
        { label: "4 Passengers Max", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
