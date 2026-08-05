import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Tag, BookOpen, Users, ArrowRight, MessageCircle } from "lucide-react";
import {
  BLOG_POSTS,
  BLOG_CATEGORIES,
  getFeaturedPosts,
  getPillarPosts,
  TOPICAL_CLUSTERS,
} from "@/data/blog";
import { BUSINESS, formatWhatsAppHref } from "@/lib/utils";
import { breadcrumbSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Breadcrumb from "@/components/sections/breadcrumb";
import SchemaScript from "@/components/sections/schema-script";
import CtaBanner from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Car Lift UAE Blog – Commute Tips, Routes & Transport Guide",
  description:
    "Expert guides on car lift service in UAE. Route guides, pricing tips, safety advice, ladies transport, corporate solutions. Sharjah to Dubai commute made easy.",
  alternates: { canonical: "https://www.carlift.ae/blog" },
};

export const revalidate = 3600;

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

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-AE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const featuredPosts = getFeaturedPosts();
  const pillarPosts = getPillarPosts();
  const whatsappHref = formatWhatsAppHref(
    BUSINESS.whatsapp,
    "Hi! I'd like to get car lift tips and updates on WhatsApp."
  );

  const categoryCounts = BLOG_CATEGORIES.map((cat) => ({
    name: cat,
    count: BLOG_POSTS.filter((p) => p.category === cat).length,
  }));

  const schema = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
  ]);

  return (
    <>
      <SchemaScript schema={schema} />

      {/* Mini Hero */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
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
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1.5 text-sm font-semibold text-white/80 mb-6">
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            UAE Commuter Knowledge Base
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Car Lift UAE Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            Expert guides for UAE daily commuters — routes, pricing, safety, and
            everything you need for a smarter commute.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Blog" },
            ]}
          />
        </div>
      </div>

      <main className="bg-white">
        {/* Featured Posts */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Featured Guides
            </h2>
            <span className="text-sm text-slate-500">{featuredPosts.length} articles</span>
          </div>
          <div className="space-y-6">
            {featuredPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col sm:flex-row gap-0 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                {/* Color strip */}
                <div
                  className="sm:w-2 w-full h-2 sm:h-auto flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #2563eb, #059669)" }}
                  aria-hidden="true"
                />
                <div className="flex-1 p-6 sm:p-8">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        CATEGORY_COLORS[post.category] ?? "bg-slate-100 text-slate-800"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {post.readTime} min read
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 rounded-full px-2.5 py-1"
                        >
                          <Tag className="h-2.5 w-2.5" aria-hidden="true" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                        <ArrowRight className="h-3.5 w-3.5 ml-1" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Complete Guides / Pillar Pages */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Complete Guides
              </h2>
              <p className="text-slate-600">
                Comprehensive pillar articles covering every aspect of car lift services in UAE.
              </p>
            </div>
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
                        {post.category}
                      </span>
                      <span className="text-xs text-white/60 flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {post.readTime} min read
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-300 hover:text-blue-200 transition-colors duration-200"
                    >
                      Read Complete Guide
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter Pills */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-xl font-bold text-slate-900 mb-5">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            <button
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-blue-600 bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors duration-200"
            >
              All Articles
              <span className="ml-1 rounded-full bg-white/25 px-1.5 py-0.5 text-xs">
                {BLOG_POSTS.length}
              </span>
            </button>
            {categoryCounts.map(({ name, count }) => (
              <button
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full border-2 border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-600 transition-colors duration-200"
              >
                {name}
                <span className="ml-1 rounded-full bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">
                  {count}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* All Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">All Articles</h2>
            <span className="text-sm text-slate-500">{BLOG_POSTS.length} articles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Top accent bar */}
                <div
                  className={`h-1.5 w-full flex-shrink-0 ${
                    CATEGORY_COLORS[post.category]?.replace("text-", "").replace("bg-", "bg-").split(" ")[0] ?? "bg-blue-100"
                  }`}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        CATEGORY_COLORS[post.category] ?? "bg-slate-100 text-slate-800"
                      }`}
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
        </section>

        {/* Topical Clusters */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Topic Clusters
              </h2>
              <p className="text-slate-600 max-w-2xl">
                Dive deep into any topic with our interconnected article clusters — each
                anchored by a comprehensive guide and supported by detailed supporting articles.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {Object.entries(TOPICAL_CLUSTERS).map(([clusterName, cluster]) => {
                const pillarPost = BLOG_POSTS.find((p) => p.slug === cluster.pillar);
                const supportingPosts = cluster.supporting
                  .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
                  .filter(Boolean);
                return (
                  <div
                    key={clusterName}
                    className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm"
                  >
                    {/* Cluster header */}
                    <div
                      className="p-5 border-b border-slate-100"
                      style={{
                        background:
                          "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
                      }}
                    >
                      <div className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-1">
                        Topic Cluster
                      </div>
                      <h3 className="text-lg font-bold text-white">{clusterName}</h3>
                      {pillarPost && (
                        <div className="mt-2">
                          <span className="inline-flex items-center text-xs text-white/70 bg-white/10 rounded-full px-2.5 py-0.5 gap-1">
                            <BookOpen className="h-3 w-3" aria-hidden="true" />
                            Pillar:{" "}
                            <Link
                              href={`/blog/${pillarPost.slug}`}
                              className="hover:text-white transition-colors"
                            >
                              {pillarPost.title}
                            </Link>
                          </span>
                        </div>
                      )}
                    </div>
                    {/* Supporting articles */}
                    <div className="p-5">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Supporting Articles ({supportingPosts.length})
                      </p>
                      <ul className="space-y-2">
                        {supportingPosts.map((sp) =>
                          sp ? (
                            <li key={sp.slug} className="flex items-start gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" aria-hidden="true" />
                              <Link
                                href={`/blog/${sp.slug}`}
                                className="text-sm text-slate-700 hover:text-blue-600 transition-colors leading-snug"
                              >
                                {sp.title}
                              </Link>
                            </li>
                          ) : null
                        )}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* WhatsApp Subscribe CTA */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div
            className="rounded-3xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)",
            }}
          >
            <div className="p-8 sm:p-12 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-sm font-semibold text-white/90 mb-6">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Stay Updated
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Get Car Lift Tips on WhatsApp
              </h2>
              <p className="text-emerald-100 mb-8 max-w-xl mx-auto text-lg leading-relaxed">
                Join{" "}
                <span className="font-semibold text-white">500+ UAE commuters</span>{" "}
                who receive weekly route tips, pricing updates, and exclusive deals — delivered
                directly to WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold shadow-xl"
                >
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Subscribe to WhatsApp updates"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" aria-hidden="true" />
                    Subscribe via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="border-2 border-white/40 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  <Link href="/contact">
                    <Users className="h-5 w-5 mr-2" aria-hidden="true" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <CtaBanner />
    </>
  );
}
