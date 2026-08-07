import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";
import { LOCATIONS } from "@/data/locations";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = LOCATIONS.find((l) => l.slug === slug);

  const name = location?.name ?? "UAE";
  const description = location?.description ?? `Reliable daily car lift service from ${name}`;

  return new ImageResponse(
    buildOgImageJsx({
      badge: `Car Lift ${name}`,
      title: `Daily Car Lift from ${name}`,
      subtitle: description.slice(0, 110),
      accentColor: "#0284c7",
      stats: [
        { label: `From ${name}`, color: "#10b981" },
        { label: "4.9★ Rated", color: "#f59e0b" },
        { label: "GPS Tracked", color: "#60a5fa" },
        { label: "From AED 300", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
