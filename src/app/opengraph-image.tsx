import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Car Lift UAE – Daily Car Lift from Sharjah to Business Bay";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Background circles */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.4), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16,185,129,0.3), transparent)",
          }}
        />

        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              background: "#2563eb",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
            }}
          >
            🚗
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#ffffff", fontSize: "28px", fontWeight: 800 }}>
              Car Lift UAE
            </span>
            <span style={{ color: "#60a5fa", fontSize: "16px" }}>
              Daily Car Lift Service
            </span>
          </div>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: "60px",
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "20px",
            maxWidth: "900px",
          }}
        >
          Sharjah → Business Bay
        </div>

        {/* Sub-heading */}
        <div
          style={{
            fontSize: "26px",
            color: "#94a3b8",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Safe, Reliable, Affordable Daily Car Lift
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "20px",
            padding: "20px 40px",
          }}
        >
          {[
            { label: "From AED 350/mo", color: "#10b981" },
            { label: "4.9★ Rated", color: "#f59e0b" },
            { label: "GPS Tracked", color: "#60a5fa" },
            { label: "247+ Riders", color: "#a78bfa" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <span style={{ color: stat.color, fontSize: "18px", fontWeight: 700 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
