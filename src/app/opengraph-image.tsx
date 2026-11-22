import { ImageResponse } from "next/og";
import { hero, person } from "@/content/site";

export const alt = `${person.name}: ${hero.headline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Social card: the headline on the site's line, with the current station marked. */
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#F4F6F5",
        padding: "72px 80px",
        gap: 56,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            background: "#E5A00D",
            border: "6px solid #0F2A23",
          }}
        />
        <div style={{ width: 8, flex: 1, background: "#E5A00D" }} />
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 14,
            background: "#FFFFFF",
            border: "6px solid #0F2A23",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div style={{ fontSize: 34, color: "#3D4F49", fontWeight: 700 }}>{person.name}</div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.08,
            color: "#0F2A23",
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          {hero.headline}
        </div>
        <div style={{ fontSize: 28, color: "#6B7C76" }}>
          Engineering, solutions and delivery. London.
        </div>
      </div>
    </div>,
    size,
  );
}
