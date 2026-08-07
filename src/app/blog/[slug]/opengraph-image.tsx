import { ImageResponse } from "next/og";
import { buildOgImageJsx } from "@/lib/og-image";
import { BLOG_POSTS } from "@/data/blog";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  const title = post?.title ?? "Car Lift UAE – Expert Commute Guide";
  const subtitle = post?.excerpt ? post.excerpt.slice(0, 110) : "Expert car lift tips and route guides for UAE commuters.";
  const category = post?.category ?? "Car Lift Guide";

  return new ImageResponse(
    buildOgImageJsx({
      badge: category,
      title,
      subtitle,
      stats: [
        { label: `${post?.readTime ?? 5} min read`, color: "#10b981" },
        { label: "Car Lift UAE", color: "#f59e0b" },
        { label: "Expert Guide", color: "#60a5fa" },
        { label: "carliftuae.com", color: "#a78bfa" },
      ],
    }),
    { ...size }
  );
}
