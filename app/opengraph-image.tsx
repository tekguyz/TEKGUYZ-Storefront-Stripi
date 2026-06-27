import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #090b0e 0%, #0d121c 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#f8fafc",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow effect 1 */}
        <div
          style={{
            position: "absolute",
            top: "-150px",
            right: "-150px",
            width: "500px",
            height: "500px",
            borderRadius: "500px",
            background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            display: "flex",
          }}
        />
        
        {/* Glow effect 2 */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "400px",
            background: "radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(0,0,0,0) 70%)",
            pointerEvents: "none",
            display: "flex",
          }}
        />

        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ display: "flex", fontSize: "28px", fontWeight: 900, letterSpacing: "0.1em", color: "#f8fafc" }}>
            <span>TEKGUY</span><span style={{ color: "#3b82f6" }}>Z</span>
          </div>
          <div
            style={{
              border: "1px solid rgba(59, 130, 246, 0.4)",
              background: "rgba(59, 130, 246, 0.1)",
              color: "#3b82f6",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            <span>Court Reporting Student Bundle</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "40px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              lineHeight: "1.15",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Downey Voice Writing</span>
            <span style={{ color: "#3b82f6" }}>Student Bundle</span>
          </div>
          
          <div style={{ display: "flex", fontSize: "20px", color: "#94a3b8", fontWeight: 400, maxWidth: "700px" }}>
            <span>The ultimate professional package for court reporting students. Features a premium 14-inch Laptop, Eclipse Student Software, Double Dragon Stenomask, and full technical support.</span>
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "32px",
            marginTop: "20px",
          }}
        >
          {/* Bundle details checklist */}
          <div style={{ display: "flex", gap: "24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "16px" }}>
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span> <span>Business-Class 14-inch Laptop</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "16px" }}>
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span> <span>Eclipse Software</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#94a3b8", fontSize: "16px" }}>
              <span style={{ color: "#3b82f6", fontWeight: "bold" }}>+</span> <span>Stenomask & Mic</span>
            </div>
          </div>

          {/* Pricing badge */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ display: "flex", fontSize: "12px", color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>Special Pricing</span>
            <div style={{ display: "flex", fontSize: "36px", fontWeight: 800, color: "#ffffff", alignItems: "baseline" }}>
              <span>$3,299.00</span>&nbsp;<span style={{ fontSize: "18px", color: "#64748b", fontWeight: 500 }}>USD</span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
