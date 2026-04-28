import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../tokens/colors";

const meta: Meta = {
  title: "Foundations/Colors",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Full color palette — primary, secondary, semantic, neutral, and transparent scales.",
      },
    },
  },
};
export default meta;

type Story = StoryObj;

type Scale = Record<string | number, string>;

function Swatch({ name, hex }: { name: string; hex: string }) {
  const isLight = hex.startsWith("rgba(255") || ["#FFFFFF", "#F5F5F5", "#E9E9E9", "#D2D2D2", "#DDE0F5", "#FFE3E9", "#E5FFEA", "#FFF8E8", "#FFEDE5", "#EAF6FF", "#B0B6E8", "#FFC8D2", "#C8F9D0", "#FEDECB", "#FEDFD1", "#C5E8FF"].includes(hex.toUpperCase());

  return (
    <div
      style={{
        background: hex,
        borderRadius: 8,
        padding: "12px 10px",
        minHeight: 80,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        border: isLight ? "1px solid #e5e7eb" : "none",
      }}
    >
      <span style={{ fontSize: 11, fontWeight: 600, color: isLight ? "#374151" : "#fff", fontFamily: "Inter, sans-serif", lineHeight: 1.3 }}>
        {name}
      </span>
      <span style={{ fontSize: 10, color: isLight ? "#6b7280" : "rgba(255,255,255,0.75)", fontFamily: "monospace", marginTop: 2 }}>
        {hex}
      </span>
    </div>
  );
}

function PaletteRow({ label, scale }: { label: string; scale: Scale }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 10, textTransform: "capitalize" }}>
        {label}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: 6 }}>
        {Object.entries(scale).map(([key, value]) => (
          <Swatch key={key} name={`${label}-${key}`} hex={value as string} />
        ))}
      </div>
    </div>
  );
}

function TransparentRow({ label, scale }: { label: string; scale: Scale }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 10 }}>
        {label}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
          gap: 6,
          background: label.includes("White") ? "#111827" : "#f9fafb",
          padding: 12,
          borderRadius: 10,
          border: "1px solid #e5e7eb",
        }}
      >
        {Object.entries(scale).map(([key, value]) => (
          <div key={key} style={{ textAlign: "center" }}>
            <div
              style={{
                background: value as string,
                height: 48,
                borderRadius: 6,
                border: "1px solid rgba(128,128,128,0.2)",
                marginBottom: 4,
              }}
            />
            <span style={{ fontSize: 10, color: label.includes("White") ? "#e5e7eb" : "#374151", fontFamily: "monospace" }}>
              {key}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AllColors: Story = {
  name: "All Colors",
  render: () => (
    <div style={{ padding: 32, fontFamily: "Inter, sans-serif", maxWidth: 1200 }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8, color: "#0C1033" }}>Colors</h1>
      <p style={{ color: "#6b7280", marginBottom: 40, fontSize: 14 }}>
        Complete design token color palette — 6 semantic scales + neutrals + transparent.
      </p>

      <PaletteRow label="primary"   scale={colors.primary as unknown as Scale} />
      <PaletteRow label="secondary" scale={colors.secondary as unknown as Scale} />
      <PaletteRow label="success"   scale={colors.success as unknown as Scale} />
      <PaletteRow label="warning"   scale={colors.warning as unknown as Scale} />
      <PaletteRow label="error"     scale={colors.error as unknown as Scale} />
      <PaletteRow label="info"      scale={colors.info as unknown as Scale} />
      <PaletteRow label="neutral"   scale={colors.neutral as unknown as Scale} />

      <TransparentRow label="Transparent White (dark surfaces)" scale={colors.transparentWhite as unknown as Scale} />
      <TransparentRow label="Transparent Black (light surfaces)" scale={colors.transparentBlack as unknown as Scale} />
    </div>
  ),
};
