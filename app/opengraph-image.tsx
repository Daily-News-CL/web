import { ImageResponse } from "next/og";

// Note: falls back to a generic sans/serif since ImageResponse (Satori)
// doesn't pick up next/font automatically — it needs a font file loaded via
// `fonts:` in the ImageResponse options. Good enough for now; see
// https://nextjs.org/docs/app/api-reference/functions/image-response#custom-fonts
// if pixel-perfect Fraunces here becomes worth the extra asset.

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f5f1e8",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontFamily: "serif",
            fontSize: 28,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#c1481d",
          }}
        >
          Boletín diario narrado
        </div>
        <div
          style={{
            marginTop: 24,
            fontFamily: "serif",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#1c1a17",
            maxWidth: 900,
          }}
        >
          Las noticias de Chile, contadas en voz alta.
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "serif",
            fontSize: 32,
            color: "#1f4741",
          }}
        >
          Daily News
        </div>
      </div>
    ),
    { ...size }
  );
}
