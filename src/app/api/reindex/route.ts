// Force-reindex endpoint — called by Vercel cron daily AND available for
// manual triggering. Submits all 85 pages to every IndexNow-participating
// search engine and pings Google + WebSub hubs for the RSS feed.
//
// Auth: Vercel cron auto-sends   Authorization: Bearer {CRON_SECRET}
//       Manual call requires     ?secret={REINDEX_SECRET}

import { NextResponse } from "next/server";
import { ALL_SITE_URLS } from "@/lib/site-urls";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const BASE_URL  = "https://www.carliftuae.com";
const INDEXNOW_KEY   = "ff124279eb5d6a920886b260c826d7ee";
const INDEXNOW_HOST  = "www.carliftuae.com";
const KEY_LOCATION   = `${BASE_URL}/${INDEXNOW_KEY}.txt`;

// IndexNow search engines that accept direct submissions
const INDEXNOW_ENDPOINTS = [
  "https://api.indexnow.org/indexnow",   // routes to ALL participating engines
  "https://www.bing.com/indexnow",        // Bing direct (redundancy)
  "https://yandex.com/indexnow",          // Yandex direct
];

function isAuthorized(request: Request): boolean {
  const url        = new URL(request.url);
  const secret     = url.searchParams.get("secret");
  const authHeader = request.headers.get("authorization");

  // Vercel cron uses CRON_SECRET (set automatically in Vercel environment)
  const cronSecret   = process.env.CRON_SECRET;
  const manualSecret = process.env.REINDEX_SECRET;

  if (cronSecret   && authHeader === `Bearer ${cronSecret}`)   return true;
  if (manualSecret && secret     === manualSecret)              return true;

  // Allow localhost / preview without secrets for easy testing
  if (process.env.NODE_ENV !== "production") return true;

  return false;
}

async function submitToIndexNow(endpoint: string, urls: string[]): Promise<{ ok: boolean; status: number }> {
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls,
      }),
    });
    return { ok: res.ok, status: res.status };
  } catch {
    return { ok: false, status: 0 };
  }
}

async function pingGoogle(): Promise<boolean> {
  try {
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${BASE_URL}/sitemap.xml`,
      { method: "GET" }
    );
    return res.ok;
  } catch {
    return false;
  }
}

async function pingWebSub(): Promise<boolean> {
  // Notifies Google's and Superfeedr's WebSub hubs about RSS feed update
  // Google crawls the feed URL and discovers all linked pages
  const hubs = [
    "https://pubsubhubbub.appspot.com/publish",
    "https://pubsubhubbub.superfeedr.com/",
  ];
  try {
    await Promise.all(
      hubs.map((hub) =>
        fetch(hub, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `hub.mode=publish&hub.url=${encodeURIComponent(`${BASE_URL}/feed.xml`)}`,
        }).catch(() => null)
      )
    );
    return true;
  } catch {
    return false;
  }
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const started = Date.now();
  const results: Record<string, unknown> = {};

  // 1. Submit ALL URLs to every IndexNow endpoint in parallel
  const indexNowResults = await Promise.all(
    INDEXNOW_ENDPOINTS.map(async (endpoint) => {
      const r = await submitToIndexNow(endpoint, ALL_SITE_URLS);
      return { endpoint, ...r };
    })
  );
  results.indexNow = indexNowResults;

  // 2. Google sitemap ping
  results.googlePing = await pingGoogle();

  // 3. WebSub RSS hub notification (signals feed update → triggers Google crawl)
  results.webSub = await pingWebSub();

  return NextResponse.json({
    ok: true,
    urlsSubmitted: ALL_SITE_URLS.length,
    elapsedMs: Date.now() - started,
    timestamp: new Date().toISOString(),
    results,
  });
}
