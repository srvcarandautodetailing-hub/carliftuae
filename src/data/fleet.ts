/**
 * Fleet photos — real Quick Car Lift Service UAE vehicles.
 * All photos: WebP q78, EXIF stripped, branded watermark.
 * Plates left visible per owner (authenticity).
 * Excluded: 2026-10-01__4.jpg (byte-identical duplicate of __3),
 * 2026-10-01__6.jpg (black Hyundai Sonata — US dealer stock photo, not the fleet).
 */

export interface FleetPhoto {
  src: string;
  alt: string;
  caption: string;
  title: string;
  width: number;
  height: number;
}

export const FLEET_PHOTOS: FleetPhoto[] = [
  {
    src: "/images/fleet/car-lift-dubai-toyota-camry-quick-car-lift-uae.webp",
    alt: "Silver Toyota Camry – Quick Car Lift Service UAE fleet car for Dubai car lift rides",
    caption: "Silver Toyota Camry — part of our daily car lift fleet",
    title: "Silver Toyota Camry – Quick Car Lift Service UAE fleet",
    width: 1200,
    height: 540,
  },
  {
    src: "/images/fleet/car-lift-dubai-honda-civic-silver-quick-car-lift-uae.webp",
    alt: "Silver Honda Civic – Quick Car Lift Service UAE car lift fleet in Dubai",
    caption: "Silver Honda Civic — our fleet, Dubai",
    title: "Silver Honda Civic – Quick Car Lift Service UAE fleet",
    width: 1098,
    height: 1200,
  },
  {
    src: "/images/fleet/car-lift-dubai-honda-civic-white-rear-quick-car-lift-uae.webp",
    alt: "White Honda Civic rear view – Quick Car Lift Service UAE fleet, Dubai car lift",
    caption: "White Honda Civic — our fleet, Dubai",
    title: "White Honda Civic – Quick Car Lift Service UAE fleet",
    width: 800,
    height: 1200,
  },
  {
    src: "/images/fleet/car-lift-dubai-lexus-es-front-quick-car-lift-uae.webp",
    alt: "White Lexus ES front – premium Quick Car Lift Service UAE fleet car, Dubai",
    caption: "White Lexus ES — our fleet, premium rides",
    title: "White Lexus ES – Quick Car Lift Service UAE fleet",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/fleet/car-lift-dubai-lexus-es-side-quick-car-lift-uae.webp",
    alt: "White Lexus ES side view – Quick Car Lift Service UAE airport car lift fleet",
    caption: "White Lexus ES — our fleet, airport pickups",
    title: "White Lexus ES airport car lift – Quick Car Lift Service UAE",
    width: 900,
    height: 1200,
  },
  {
    src: "/images/fleet/car-lift-dubai-lexus-es-rear-quick-car-lift-uae.webp",
    alt: "White Lexus ES rear – Quick Car Lift Service UAE luxury car lift fleet Dubai",
    caption: "White Lexus ES — our fleet, Dubai",
    title: "White Lexus ES rear – Quick Car Lift Service UAE fleet",
    width: 1200,
    height: 900,
  },
  {
    src: "/images/fleet/car-lift-abu-dhabi-kia-k5-quick-car-lift-uae.webp",
    alt: "White Kia K5 – Quick Car Lift Service UAE fleet car for Abu Dhabi car lift",
    caption: "White Kia K5 — our fleet, Abu Dhabi",
    title: "White Kia K5 – Quick Car Lift Service UAE fleet",
    width: 675,
    height: 1200,
  },
  {
    src: "/images/fleet/car-lift-dubai-white-suv-quick-car-lift-uae.webp",
    alt: "White SUV – Quick Car Lift Service UAE car lift fleet vehicle in the UAE",
    caption: "White SUV — our fleet, UAE",
    title: "White SUV – Quick Car Lift Service UAE fleet",
    width: 675,
    height: 1200,
  },
];

export function fleetPhotoBySrc(src: string): FleetPhoto | undefined {
  return FLEET_PHOTOS.find((p) => p.src === src);
}
