import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Shared OpenGraph / Twitter card. Kept to primitives that Satori supports —
 * flexbox, borders, solid colours. No external fonts or images so it builds
 * without network access.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: ogSize.width,
          height: ogSize.height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08090a",
          padding: "68px 72px",
          color: "#f2f3f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#7ea6ff",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#9ba1a8",
            }}
          >
            Software Engineer · Product Builder
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 86,
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              maxWidth: 940,
            }}
          >
            I build products that solve real problems.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 29,
              lineHeight: 1.4,
              color: "#9ba1a8",
              maxWidth: 880,
            }}
          >
            Full-stack products, healthcare systems, AI-assisted workflows and
            data-driven applications.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "28px",
          }}
        >
          <div style={{ fontSize: 30, letterSpacing: "-0.02em" }}>
            Hariharan B P
          </div>
          <div style={{ fontSize: 24, color: "#6b7178" }}>
            React · Next.js · Python · Django · FastAPI
          </div>
        </div>
      </div>
    ),
    ogSize,
  );
}
