# CLAIMS NEEDING OWNER VERIFICATION — carliftuae.com

These claims exist in the codebase. Kept VERBATIM in the redesign (not invented, not dropped).
Owner: confirm / correct / remove each one. Last review: 2026-10-31.

## 🔴 HIGH PRIORITY

### 1. Named testimonials (src/data/testimonials.ts) — 2 reviews remain
~~8 reviews~~ → **6 REMOVED 2026-10-31** per owner directive (full Sharjah scrub): Ahmed Al Mansouri (Al Majaz Sharjah), Priya Nair (Al Nahda Sharjah), Mohammed Rashid (Muweilah Sharjah), Fatima Al Zaabi (Al Khan Sharjah), Ravi Kumar (Al Taawun Sharjah), Hana Al Qasimi ("I live in Sharjah…"). Remaining 2 (Sarah Thompson — Silicon Oasis Dubai; Omar Siddiqui — Ajman):
- Detailed personal stories, dated June 2025, marked "verified: true"

**Are these real customers?** If not, they must be removed — fabricated reviews are an honesty/policy violation. Alternatives: remove the section, or replace with a "Review us on Google" link.

### 2. 4.9★ / 150 reviews (src/lib/utils.ts → BUSINESS.rating/reviewCount)
Used in: localBusinessSchema aggregateRating, "4.9★" in route-page meta descriptions.
**Confirm the real rating and review count, or remove.**

### 3. Hours conflict
- Schema + BUSINESS.hours: **6:00 AM – 10:00 PM** (Fri 7:00 AM – 10:00 PM)
- Marketing copy (home title/desc, route pages): **"24/7" / "Available 24/7"**
**Which is true?** Pick one; the redesign will use it everywhere consistently.

## 🟡 MEDIUM

### 4. foundedYear 2019 (src/lib/utils.ts)
Unverified. Confirm or remove.

### 5. Route prices (src/data/pricing.ts + metadata)
- Dubai ↔ Abu Dhabi: AED 100 sharing / AED 180 private
- Abu Dhabi ↔ Ajman: AED 140 sharing / AED 220 private
- Abu Dhabi ↔ Ras Al Khaimah: AED 170 sharing / AED 350 private
- Abu Dhabi ↔ Al Ain: AED 120 sharing / AED 200 private
Confirm each figure (these appear in titles/descriptions across the site).

### 6. Service claims (keep verbatim unless corrected)
- "GPS-tracked" vehicles
- "Salik included" on all routes
- "luxury car lift"
- Ladies-only pages: "female driver or ladies-only vehicle" option

### 7. availableLanguage: English, Arabic, Hindi, Urdu (schema)
Plausible; confirm if any should be removed.

## 🟠 REMOVED WITH SHARJAH / BUS / MONTHLY PAGES — owner to decide
These prices/claims lived ONLY on removed pages. They were NOT migrated (per honesty rule).
- **Abu Dhabi ↔ Sharjah: AED 130 sharing / AED 200 private** — was in the site-wide price table (home meta). Removed with Sharjah scope. Restore if Sharjah service resumes.
- Sharjah ↔ Dubai / Sharjah ↔ Ajman / Sharjah → RAK fares: lived on removed route pages; specific figures not preserved — do NOT republish from memory.
- Bus fares (bus-car-lift-* pages): no explicit fares found — pages described bus service only.
- Monthly package rates: removed pages said "WhatsApp for monthly rate" — NO specific AED monthly figures existed, nothing to migrate.
- If any of these services/prices should be restored, say so and we will re-add.

## 🟢 NOTES
- Phone +971 54 330 8261, email info@carlift.ae, domain www.carliftuae.com — owner-verified, do not change.
- Footer "Trusted Partner" link to quickcarliftservice.com — deliberate cross-brand link, kept as-is.

## 🔵 REDESIGN CHANGES FLAGGED (Oct 31, 2026)
- **Terms page reworked**: "monthly packages" → daily seat reservations (per SKIP monthly directive). Jurisdiction already Abu Dhabi. Owner: review terms before deploy.
- **Fleet photos**: 8 real owner photos integrated (watermarked). Black Hyundai Sonata photo EXCLUDED (US dealer stock, not fleet) — confirm if it should be added. Plates left visible — ask to blur any.
- **"50+ routes" claims softened** where they referenced Sharjah routes.
- **serviceSchema price fields**: corrected 650→100 (Dubai→Abu Dhabi) and 420→130 (Ajman→Dubai) to match stated per-trip fares.
- **New pages need GSC verification after deploy**: 5 airport + 2 daily pages → submit sitemap, request indexing.
