import Image, { type ImageProps } from "next/image";

// ── Hero image — above-the-fold, priority loaded, full-width responsive ──────
export function HeroImage({
  src,
  alt,
  title,
  className = "",
}: {
  src: string;
  alt: string;
  title?: string;
  className?: string;
}) {
  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        title={title}
        fill
        priority
        sizes="100vw"
        quality={84}
        className="object-cover"
        decoding="async"
      />
    </div>
  );
}

// ── Section image — below fold, lazy loaded ───────────────────────────────────
export function SectionImage({
  src,
  alt,
  title,
  width,
  height,
  className = "",
  "aria-hidden": ariaHidden,
}: {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={ariaHidden ? "" : alt}
      title={title}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      quality={78}
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      className={className}
      aria-hidden={ariaHidden}
    />
  );
}

// ── Card image — lazy loaded, card-width responsive ───────────────────────────
export function CardImage({
  src,
  alt,
  title,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  title?: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      title={title}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      quality={73}
      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
      className={className}
    />
  );
}

// ── Gallery image — small grid thumbnails ─────────────────────────────────────
export function GalleryImage({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      fetchPriority="low"
      quality={72}
      sizes="(max-width:768px) 100vw, 25vw"
      className={className}
    />
  );
}

// ── Fill image — for containers with position:relative + known dimensions ─────
export function FillImage({
  src,
  alt,
  title,
  priority = false,
  quality = 78,
  sizes = "(max-width:768px) 100vw, 50vw",
  className = "",
  "aria-hidden": ariaHidden,
}: {
  src: string;
  alt: string;
  title?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  className?: string;
  "aria-hidden"?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={ariaHidden ? "" : alt}
      title={title}
      fill
      priority={priority}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "low"}
      decoding="async"
      quality={quality}
      sizes={sizes}
      className={`object-cover ${className}`}
      aria-hidden={ariaHidden}
    />
  );
}

// ── Logo image ────────────────────────────────────────────────────────────────
export function LogoImage({
  src,
  alt = "Car Lift UAE",
  width = 160,
  height = 48,
  className = "",
}: {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority
      decoding="async"
      quality={90}
      className={className}
    />
  );
}

// ── Generic drop-in replacement for raw <img> ─────────────────────────────────
export default function OptimizedImage({
  src,
  alt,
  title,
  width,
  height,
  priority = false,
  quality = 78,
  sizes = "(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw",
  className = "",
  fill = false,
  "aria-hidden": ariaHidden,
  ...rest
}: Omit<ImageProps, "src" | "alt"> & {
  src: string;
  alt: string;
  title?: string;
  "aria-hidden"?: boolean;
}) {
  const props = {
    src,
    alt: ariaHidden ? "" : alt,
    ...(title && { title }),
    quality,
    sizes,
    className,
    decoding: "async" as const,
    "aria-hidden": ariaHidden,
    ...rest,
  } as ImageProps;

  if (fill) {
    return (
      <Image
        {...props}
        fill
        priority={priority}
        loading={priority ? undefined : "lazy"}
        fetchPriority={priority ? "high" : "low"}
      />
    );
  }

  return (
    <Image
      {...props}
      width={width as number}
      height={height as number}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      fetchPriority={priority ? "high" : "low"}
    />
  );
}
