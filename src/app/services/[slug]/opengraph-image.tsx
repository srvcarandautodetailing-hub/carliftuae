import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";
import { SERVICES } from "@/data/services";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  const title = service?.name ?? "Car Lift Service UAE";
  const subtitle = service?.description
    ? service.description.slice(0, 110)
    : "Reliable, safe, and affordable car lift service across UAE.";

  return new ImageResponse(
    buildOgImageJsx({
      badge: "Service",
      title,
      subtitle,
      accentColor: "#7c3aed",
      stats: [
        { label: "GPS Tracked", color: "#10b981" },
        { label: "4.9★ Rated", color: "#f59e0b" },
        { label: "Verified Drivers", color: "#60a5fa" },
        { label: "From AED 300", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
