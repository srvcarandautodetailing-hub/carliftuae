import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Tag, ArrowRight, BookOpen } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blog";
import { breadcrumbSchema } from "@/lib/schema";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import CtaBanner from "@/components/sections/cta-banner";

export const revalidate = 3600;

// ─── Static params ───────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({
    category: c
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, ""),
  }));
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function categoryFromSlug(slug: string): string | undefined {
  return BLOG_CATEGORIES.find(
    (c) =>
      c
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "") === slug
  );
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

const CATEGORY_COLORS: Record<string, string> = {
  "Car Lift Tips": "bg-blue-100 text-blue-800",
  "Routes & Commute": "bg-emerald-100 text-emerald-800",
  "Pricing & Savings": "bg-amber-100 text-amber-800",
  "Safety & Travel": "bg-red-100 text-red-800",
  "UAE Transport": "bg-purple-100 text-purple-800",
  "Ladies Transport": "bg-pink-100 text-pink-800",
  "Corporate Transport": "bg-indigo-100 text-indigo-800",
  Neighborhoods: "bg-teal-100 text-teal-800",
  Comparisons: "bg-orange-100 text-orange-800",
  "News & Updates": "bg-slate-100 text-slate-800",
};

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "Car Lift Tips":
    "Everything you need to know about using car lift services in UAE — how to find one, book it, and make the most of your shared ride.",
  "Routes & Commute":
    "In-depth route guides for UAE's most popular car lift corridors, from Sharjah to Business Bay and beyond.",
  "Pricing & Savings":
    "Transparent pricing breakdowns and money-saving strategies to help you get the best value from your UAE car lift.",
  "Safety & Travel":
    "Essential safety guidelines and travel tips for car lift passengers in UAE.",
  "UAE Transport":
    "Broader perspectives on public and private transport in UAE — trends, infrastructure, and commuter insights.",
  "Ladies Transport":
    "Dedicated guides for women seeking safe, verified ladies-only car lift services in UAE.",
  "Corporate Transport":
    "How UAE businesses are leveraging corporate car lift programmes to boost productivity and cut costs.",
  Neighborhoods:
    "Hyper-local commute guides for specific UAE neighbourhoods — your suburb's best car lift options.",
  Comparisons:
    "Honest, data-driven comparisons of car lifts against alternative UAE transport modes.",
  "News & Updates":
    "The latest news, changes, and developments in UAE's car lift and transport landscape.",
};

// ─── Metadata ────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const categoryName = categoryFromSlug(categorySlug);
  if (!categoryName) return {};

  const postCount = BLOG_POSTS.filter((p) => p.category === categoryName).length;

  return {
    title: `${categoryName} – Car Lift UAE Blog`,
    description: `Browse ${postCount} articles about ${categoryName.toLowerCase()} for UAE commuters. ${
      CATEGORY_DESCRIPTIONS[categoryName] ?? ""
    }`,
    alternates: {
      canonical: `https://www.carliftuae.com/blog/category/${categorySlug}`,
    },
  };
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const categoryName = categoryFromSlug(categorySlug);

  if (!categoryName) notFound();

  // After notFound(), TypeScript still sees categoryName as string | undefined.
  // We narrow it here so all downstream code is typed as string.
  const resolvedName = categoryName as string;

  const posts = BLOG_POSTS.filter((p) => p.category === resolvedName);
  const pillarPosts = posts.filter((p) => p.pillar);
  const regularPosts = posts.filter((p) => !p.pillar);

  const categoryColor =
    CATEGORY_COLORS[resolvedName] ?? "bg-slate-100 text-slate-800";
  const categoryDescription =
    CATEGORY_DESCRIPTIONS[resolvedName] ??
    `Expert articles on ${resolvedName} for UAE commuters.`;

  const schema = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: resolvedName, url: `/blog/category/${categorySlug}` },
  ]);

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Mini Hero */}
      <section
        className="relative overflow-hidden py-14 sm:py-18"
        style={{
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${categoryColor}`}
            >
              {resolvedName}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {resolvedName}
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {categoryDescription}
          </p>
          <p className="mt-3 text-sm text-slate-400">
            {posts.length} {posts.length === 1 ? "article" : "articles"}
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: categoryName },
            ]}
          />
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Pillar guides for this category (if any) */}
        {pillarPosts.length > 0 && (
          <section className="mb-12">
            <h2 className="text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" aria-hidden="true" />
              Complete Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillarPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
                  }}
                >
                  <div className="p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-white/15 border border-white/20 px-2.5 py-0.5 text-xs font-semibold text-white/90">
                        Pillar Guide
                      </span>
                      <span className="text-xs text-white/60 flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors"
                    >
                      Read Complete Guide
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All posts in category */}
        <section>
          <div className="flex items-center justify-between mb-7">
            <h2 className="text-xl font-bold text-slate-900">
              {pillarPosts.length > 0 ? "Supporting Articles" : "All Articles"}
            </h2>
            <span className="text-sm text-slate-500">
              {regularPosts.length > 0 ? regularPosts.length : posts.length} articles
            </span>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg mb-6">
                No articles found in this category yet.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Browse All Articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {(pillarPosts.length > 0 ? regularPosts : posts).map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <div
                    className={`h-1.5 w-full flex-shrink-0 ${
                      categoryColor.split(" ")[0]
                    }`}
                    aria-hidden="true"
                  />
                  <div className="flex flex-col flex-1 p-5">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColor}`}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 whitespace-nowrap">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime} min
                      </span>
                    </div>

                    <h3 className="font-bold text-slate-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 rounded-full px-2 py-0.5"
                        >
                          <Tag className="h-2.5 w-2.5" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <time
                        dateTime={post.publishDate}
                        className="text-xs text-slate-400"
                      >
                        {formatDate(post.publishDate)}
                      </time>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                      >
                        Read
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Other categories */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Explore Other Topics
          </h2>
          <div className="flex flex-wrap gap-3">
            {BLOG_CATEGORIES.filter((c) => c !== resolvedName).map((cat) => {
              const catSlug = cat
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^a-z0-9-]/g, "");
              const count = BLOG_POSTS.filter((p) => p.category === cat).length;
              return (
                <Link
                  key={cat}
                  href={`/blog/category/${catSlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors duration-200"
                >
                  {cat}
                  <span className="rounded-full bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                    {count}
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <CtaBanner />
    </>
  );
}
