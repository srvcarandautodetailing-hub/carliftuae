// Shared OG image template for all pages
// Used by every opengraph-image.tsx file across the site

export interface OgImageParams {
  title: string;
  subtitle: string;
  badge?: string;
  stats?: Array<{ label: string; color: string }>;
  accentColor?: string;
}

const DEFAULT_STATS = [
  { label: "From AED 130 sharing/mo", color: "#10b981" },
  { label: "4.9★ Rated", color: "#f59e0b" },
  { label: "GPS Tracked", color: "#60a5fa" },
  { label: "247+ Riders", color: "#a78bfa" },
];

export function buildOgImageJsx({
  title,
  subtitle,
  badge,
  stats = DEFAULT_STATS,
  accentColor = "#2563eb",
}: OgImageParams) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #0f172a 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 70px",
        position: "relative",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Background glow top-right */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          right: "-120px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accentColor}55, transparent 70%)`,
        }}
      />
      {/* Background glow bottom-left */}
      <div
        style={{
          position: "absolute",
          bottom: "-80px",
          left: "-80px",
          width: "380px",
          height: "380px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.25), transparent 70%)",
        }}
      />

      {/* Brand row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            background: accentColor,
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "26px",
          }}
        >
          🚗
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#ffffff", fontSize: "26px", fontWeight: 800, lineHeight: 1.1 }}>
            Car Lift UAE
          </span>
          <span style={{ color: "#60a5fa", fontSize: "15px", marginTop: "2px" }}>
            carliftuae.com
          </span>
        </div>
      </div>

      {/* Badge */}
      {badge && (
        <div
          style={{
            background: `${accentColor}33`,
            border: `1px solid ${accentColor}66`,
            borderRadius: "100px",
            padding: "6px 20px",
            marginBottom: "18px",
            display: "flex",
          }}
        >
          <span style={{ color: "#93c5fd", fontSize: "14px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {badge}
          </span>
        </div>
      )}

      {/* Main title */}
      <div
        style={{
          fontSize: title.length > 40 ? "46px" : "56px",
          fontWeight: 900,
          color: "#ffffff",
          textAlign: "center",
          lineHeight: 1.1,
          marginBottom: "16px",
          maxWidth: "880px",
        }}
      >
        {title}
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "22px",
          color: "#94a3b8",
          textAlign: "center",
          marginBottom: "36px",
          maxWidth: "740px",
          lineHeight: 1.4,
        }}
      >
        {subtitle}
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "flex",
          gap: "28px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "18px",
          padding: "18px 36px",
        }}
      >
        {stats.map((stat) => (
          <span
            key={stat.label}
            style={{ color: stat.color, fontSize: "17px", fontWeight: 700 }}
          >
            {stat.label}
          </span>
        ))}
      </div>
    </div>
  );
}
