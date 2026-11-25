import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#101315",
        color: "#e8efed",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#2dd4bf", fontSize: 48, fontWeight: 700 }}>
        {profile.brand}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 72, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ color: "#a7b2af", fontSize: 34 }}>{profile.role}</div>
      </div>
      <div
        style={{
          width: "100%",
          height: 8,
          backgroundColor: "#2dd4bf",
          borderRadius: 4,
        }}
      />
    </div>,
    { width: 1200, height: 630 },
  );
}
