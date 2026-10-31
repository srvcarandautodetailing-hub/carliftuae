# Fleet Image Slots — FINAL (owner photos integrated Oct 2026)

All 8 unique fleet photos processed: WebP q78, max 1200px, EXIF stripped,
branded watermark ("Quick Car Lift Service UAE • +971 54 330 8261", bottom-right).
Plates left visible per owner (authenticity — ask to blur any).

## Excluded source files (do NOT publish)
- `2026-10-01__4.jpg` — byte-identical duplicate of `2026-10-01__3.jpg` (deduped)
- `2026-10-01__6.jpg` — black Hyundai Sonata, US dealer lot ("1308"/"DL 3841") — dealer stock photo, NOT the fleet. Publish only if owner confirms it's his.

## Integrated fleet photos (`public/images/fleet/`)

| File | Car | Placement |
|---|---|---|
| `car-lift-dubai-toyota-camry-quick-car-lift-uae.webp` | Silver Toyota Camry, Dubai plate | Home gallery, /car-lift-dubai, /about |
| `car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp` | Silver Honda Civic, Dubai plate | Home gallery, /car-lift-dubai, /daily-car-lift-dubai |
| `car-lift-dubai-honda-civic-white-rear-quick-car-lift-uae.webp` | White Honda Civic (rear), Dubai plate | Home gallery, /car-lift-dubai |
| `car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp` | White Lexus ES (front), Dubai plate | Home gallery, /car-lift-abu-dhabi, /about |
| `car-lift-dubai-lexus-es-side-quick-car-lift-uae.webp` | White Lexus ES (side), Dubai plate | Home gallery, /airport-car-lift |
| `car-lift-dubai-lexus-es-rear-quick-car-lift-uae.webp` | White Lexus ES (rear), Dubai plate | Home gallery, /airport-car-lift |
| `car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp` | White Kia K5, Abu Dhabi plate | Home gallery, /car-lift-abu-dhabi, /about, /daily-car-lift-abu-dhabi |
| `car-lift-dubai-white-suv-quick-car-lift-uae.webp` | White SUV | Home gallery, /car-lift-dubai, /about, /daily-car-lift-abu-dhabi |

Alt-text pattern: `{Car} – Quick Car Lift Service UAE fleet car for {location} car lift` (all ≤125 chars, unique).
ImageObject JSON-LD on all 5 photo pages (home, /car-lift-dubai, /car-lift-abu-dhabi, /airport-car-lift, /about,
/daily-car-lift-dubai, /daily-car-lift-abu-dhabi). All fleet images in `image-sitemap.xml`.

## Reserved slots for future owner photos
- `hero-fleet-dubai.webp` (1920×1080) — homepage hero background option
- `driver-portrait-*.webp` (800×1000) — about page team section
- `airport-pickup-dxb.webp` (1200×800) — airport pages, real pickup moment
