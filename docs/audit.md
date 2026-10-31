# REDESIGN + OPTIMIZE — Final Summary (2026-10-31)

## Scope
- Removed: 21 Sharjah/bus dirs + 2 monthly dirs (23 URLs, all 301-redirected)
- Added: 7 airport pages (DXB, DWC, AUH, SHJ, RKT, FJR + hub) + 2 daily pages (Dubai, Abu Dhabi)
- Net: 68 indexable URLs in sitemap (was 53 pages + blog)

## QA Results
- Build: exit 0 ✓
- Rendered titles ≤60: 68/68 ✓ (template shortened to "| Quick Car Lift UAE")
- Rendered descriptions ≤155: 68/68 ✓
- 1 H1 per page ✓
- FAQ byte-match: 100% ✓
- sitemap==canonicals: 68/68 ✓
- Broken links: 0 ✓
- Orphans: 0 ✓

---

# AUDIT — carliftuae.com (Quick Car Lift Service UAE)

Date: 2026-10-31. Repo: srvcarandautodetailing-hub/carliftuae (branch master). Baseline `npm run build` GREEN (exit 0).

## 0. REDESIGN UPDATE (Oct 31, 2026) — SUPERSEDES §1 page counts

**Owner scope changes applied:**
- REMOVED Sharjah completely: 19 page dirs deleted (car-lift-sharjah*, carlift-sharjah-*, ladies-car-lift-sharjah-to-dubai, monthly/pick-and-drop-sharjah, car-lift-ajman-to-sharjah, car-lift-dubai-to-sharjah, car-lift-from-sharjah-to-*, bus-*-sharjah-*)
- REMOVED bus services: 2 dirs (car-lift-international-city-to-business-bay, car-lift-silicon-oasis-to-business-bay)
- REMOVED monthly: 2 dirs (car-lift-dubai-monthly, monthly-pick-and-drop-service-abu-dhabi) — per "SKIP monthly", target daily-basis customers
- **23 removed URLs → 301s in next.config.ts** (see docs/redirects.md)
- NEW: 5 airport pages (/airport-car-lift/ hub + DXB/DWC/AUH/SHJ)
- NEW: 2 daily pages (/daily-car-lift-dubai/, /daily-car-lift-abu-dhabi/) — from GSC gaps
- **Net: ~37 indexable pages** (was 53)

**GSC-driven work (docs/gsc-query-map.md, 746 queries/3mo):**
- Sacrificed (owner call): Sharjah 4,092 imp + bus 628 imp + monthly 45 imp = 4,765 imp/3mo
- 7 new pages target airport + daily queries
- Gap-close rewrites: car-lift-dubai-to-abu-dhabi (#1, 901 imp @ p27.86), carpool-dubai, car-lift-dubai, home, car-lift-ajman-to-dubai, car-lift-abu-dhabi-to-dubai, private-car-lift-dubai, pick-and-drop-service (school FAQ)

**Fleet photos integrated:** 8 real owner photos (WebP q78, watermarked, EXIF stripped) → home gallery + Dubai/Abu Dhabi/airport/about/daily pages. ImageObject schema + sitemap images. Excluded: 1 duplicate, 1 dealer-stock Sonata (flagged to owner).

**Metadata:** ALL titles ≤60, ALL descriptions ≤155 (verified by script). FAQPage byte-match 100%. BreadcrumbList on every page.

---

## 1. Inventory (53 pages)

- `/` (home), `/about`, `/contact`, `/faqs`, `/pricing`, `/routes`, `/services`, `/locations`, `/privacy`, `/terms`
- 27 route pages (car-lift-dubai-to-abu-dhabi, car-lift-ajman, bus-car-lift-*, ladies-car-lift-*, carlift-sharjah-to-*, carpool-dubai, etc.)
- `/locations/[slug]` → 17 location pages (SSG via generateStaticParams)
- `/services/[slug]` → 2 service pages (car-lift-service, airport-transfer)
- `/blog` + `/blog/[slug]` (31 posts) + `/blog/category/[category]`
- 5 utility pages: monthly-pick-and-drop-service-abu-dhabi/sharjah, pick-and-drop-service, pick-and-drop-service-dubai/sharjah, private-car-lift-dubai, car-lift-dubai-monthly
- `/feed.xml`, `/sitemap.xml` (sitemap.ts), `/robots.txt` (robots.ts), per-page `opengraph-image.tsx` (dynamic, Vercel OK)
- `/api/reindex/` — IndexNow + Google ping, Vercel cron daily 02:00. KEEP WORKING.

## 2. Metadata findings

- **Titles >60 chars (~20 pages, up to 99):** bus-car-lift-service-from-sharjah-sheikh-zayed (81), bus-car-lift-sharjah-to-business-bay (93), car-lift-abu-dhabi (88), car-lift-ajman-to-dubai (93), car-lift-dubai (99), car-lift-sharjah-to-al-quoz (98), carlift-sharjah-to-dubai-business-bay (94), etc. → REWRITE all to ≤60 with phone where it fits.
- **Descriptions >155 chars (~15 pages, up to 202):** car-lift-ajman (186), car-lift-dubai-to-sharjah (192), car-lift-from-sharjah-to-abu-dhabi (198), private-car-lift-dubai (202), etc. → REWRITE to ≤155.
- **H1:** 1 per page (home H1 lives in hero-section). OK.
- **Canonicals:** absolute `https://www.carliftuae.com/...` everywhere. Keep www canonical; apex 308→www live.
- **GSC verification:** `fNl9S8ESdB8EQ-W225nsY9gpIittcqzOqqHSf55HqvI` in root layout. KEEP.
- **Geo meta:** geo.region/geo.placename present. Keep.

## 3. Schema findings

- Root layout injects Organization + WebSite + TaxiService on EVERY page. Per-page: LocalBusiness (+TaxiService), FAQPage, BreadcrumbList, Service, Speakable, PrimaryImageOfPage.
- **aggregateRating 4.9 / reviewCount 150** in localBusinessSchema → UNVERIFIED. See claims doc.
- **Opening hours 06:00–22:00** in schema vs marketing copy "24/7" / "Available 24/7" → INCONSISTENT. See claims doc.
- Schema types are honest (TaxiService is a stretch for carpool but defensible; keep).

## 4. CTA model (KEEP — do not invent new channels)

- Call: `tel:+971543308261` (212 occurrences). WhatsApp: wa.me/971543308261 with prefill "Hi, I want to book a car lift!".
- Surfaces: header (desktop + mobile), floating CTA (expandable call/WhatsApp + scroll-top), CTA banners, route pages, footer.
- No forms. No email CTAs (email info@carlift.ae in footer/schema only). KEEP THIS MODEL.

## 5. Content honesty flags → docs/claims-needing-verification.md

1. **8 named testimonials** (src/data/testimonials.ts) with detailed personal stories ("14 months", "saved AED 8,000", dates 2025-07, "verified: true") — appear invented. STRONG FLAG: recommend owner confirm real or remove.
2. **4.9★ / 150 reviews** (BUSINESS.rating/reviewCount + aggregateRating schema + "4.9★" in route metas) — unverified.
3. **Hours conflict:** BUSINESS.hours = 6:00 AM–10:00 PM (schema) vs "24/7" / "Available 24/7" in copy. Pick one with owner.
4. **foundedYear 2019** — unverified.
5. **Prices** (ROUTE_PRICES: Dubai↔Abu Dhabi 100/180, Abu Dhabi↔Sharjah 130/200, Abu Dhabi↔Ajman 140/220, RAK 170/350, Al Ain 120/200) — in metadata + pricing pages. Keep verbatim, owner to confirm.
6. **Service claims:** "GPS-tracked", "Salik included", "luxury car lift", "female driver" (ladies pages) — keep verbatim, flag.
7. **availableLanguage** English/Arabic/Hindi/Urdu — keep, light flag.

## 6. Tech findings

- Next.js 16.3.0, Tailwind v4, React 19. **Do NOT upgrade Next** (Vercel target; 16.3.0 builds green). Do NOT set cacheComponents (Vercel default behavior fine).
- **framer-motion in 10 files** ("use client": faq-section, floating-cta, hero-section, etc.) — CWV/INP risk. Redesign: replace with CSS transitions, minimize client JS.
- **Images:** 35 files, all .webp, 119–143KB each. Decent; compress further where possible; verify alts.
- **next.config.ts:** image formats avif/webp, security headers, CSP, comprehensive redirects (legacy/typo/WordPress). KEEP. Do not break.
- **vercel.json:** cron /api/reindex daily. KEEP.
- GA4 `G-SB922V7RSD` — real, keep.
- **Footer "Trusted Partner"** → dofollow link to quickcarliftservice.com (owner's other brand). DELIBERATE — keep as-is, flagged in report.
- Sitemap: lastModified TODAY for all pages (always current date) — acceptable.
- Blog feed.xml exists. Category pages exist.

## 7. Design observations (redesign input)

- Brand: blue-600 primary, Geist font, white cards. Recognizable — KEEP identity, elevate execution.
- Hero: big H1 over image, white text. Could be cleaner with better contrast + clearer route quick-links.
- Route pages: long, icon-heavy, similar templates — vary intro/FAQ per route, strengthen route cards.
- Mobile: bookings are mobile-heavy — sticky call bar already exists (floating CTA); verify 44px targets, no overlap.
- Typography/spacing: tighten scale, consistent section rhythm.

## 8. SEO quick wins for Phase 3

- Rewrite ~20 titles + ~15 descriptions (limits above).
- Koray internal linking: route↔route (same corridor), location↔route, blog→money pages. Check current link graph for orphans.
- FAQ schema byte-match: verify faqSchema() input === rendered FAQ text on every page.
- BreadcrumbList on all pages (some may lack it).
- Image alts audit; compress images.
- Keep /api/reindex + ALL_SITE_URLS in sync with final URL set.
