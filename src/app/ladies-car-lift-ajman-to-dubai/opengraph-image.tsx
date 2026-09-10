import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";

export const runtime = "nodejs";
export const alt = "Ladies Car Lift Ajman to Dubai – Safe Female-Only Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    buildOgImageJsx({
      badge: "Ladies Only · Ajman → Dubai",
      title: "Ladies Car Lift Ajman to Dubai",
      subtitle: "AED 130 sharing · Verified drivers · GPS tracked · Female-only rides",
      accentColor: "#db2777",
      stats: [
        { label: "AED 130 Sharing", color: "#10b981" },
        { label: "Female-Only Service", color: "#f59e0b" },
        { label: "40–60 min via E611", color: "#60a5fa" },
        { label: "+971 54 330 8261", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
