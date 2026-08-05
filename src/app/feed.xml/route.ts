import { BLOG_POSTS } from "@/data/blog";
import { BUSINESS } from "@/lib/utils";

const BASE_URL = "https://www.carlift.ae";

export const revalidate = 3600;

function escapeXml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const sortedPosts = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  const rssItems = sortedPosts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.publishDate).toUTCString()}</pubDate>
      <category>${escapeXml(post.category)}</category>
      ${post.tags.map((t) => `<category>${escapeXml(t)}</category>`).join("\n      ")}
      <author>${BUSINESS.email} (${BUSINESS.name})</author>
    </item>`
    )
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(BUSINESS.name)} – Blog</title>
    <link>${BASE_URL}</link>
    <description>Expert car lift tips, route guides, pricing advice and UAE commute solutions.</description>
    <language>en-ae</language>
    <copyright>© ${new Date().getFullYear()} ${BUSINESS.name}</copyright>
    <managingEditor>${BUSINESS.email} (${BUSINESS.name})</managingEditor>
    <webMaster>${BUSINESS.email} (${BUSINESS.name})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
    <image>
      <url>${BASE_URL}/images/logo.png</url>
      <title>${escapeXml(BUSINESS.name)}</title>
      <link>${BASE_URL}</link>
    </image>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    ${rssItems}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
