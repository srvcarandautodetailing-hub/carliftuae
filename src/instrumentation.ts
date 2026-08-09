import { ALL_SITE_URLS } from "@/lib/site-urls";

const BASE_URL     = "https://www.carliftuae.com";
const INDEXNOW_KEY = "ff124279eb5d6a920886b260c826d7ee";

export async function register() {
  // Only run on the Node.js server in production (every Vercel cold start / deploy)
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.NODE_ENV !== "production") return;

  const keyLocation = `${BASE_URL}/${INDEXNOW_KEY}.txt`;
  const body = JSON.stringify({
    host: "www.carliftuae.com",
    key: INDEXNOW_KEY,
    keyLocation,
    urlList: ALL_SITE_URLS,
  });

  // 1. Google sitemap ping
  fetch(`https://www.google.com/ping?sitemap=${BASE_URL}/sitemap.xml`).catch(() => {});

  // 2. IndexNow — api.indexnow.org fans out to ALL participating engines
  fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  }).catch(() => {});

  // 3. Bing direct (redundancy)
  fetch("https://www.bing.com/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body,
  }).catch(() => {});

  // 4. WebSub: notify Google's hub about the RSS feed update
  fetch("https://pubsubhubbub.appspot.com/publish", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `hub.mode=publish&hub.url=${encodeURIComponent(`${BASE_URL}/feed.xml`)}`,
  }).catch(() => {});
}
