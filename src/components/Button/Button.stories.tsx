import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const ArrowLeft = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 5l-7 7 7 7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Core interactive element. Pill-shaped with 7 variants, 5 sizes, and full state coverage (hover, active, disabled, loading).",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "subtle", "ghost", "link", "destructive"],
    },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    loading:   { control: "boolean" },
    disabled:  { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Label",
    leftIcon: <ArrowLeft />,
    rightIcon: <ArrowRight />,
  },
};

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      {(["primary", "secondary", "outline", "subtle", "ghost", "link", "destructive"] as const).map((v) => (
        <Button key={v} variant={v} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
          {v.charAt(0).toUpperCase() + v.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  name: "All Sizes — Primary",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
      {(["xl", "lg", "md", "sm", "xs"] as const).map((s) => (
        <Button key={s} size={s} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>
          {s.toUpperCase()}
        </Button>
      ))}
    </div>
  ),
};

export const States: Story = {
  name: "States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {(["primary", "secondary", "outline", "subtle", "ghost", "link"] as const).map((v) => (
        <div key={v} style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Button variant={v} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Default</Button>
          <Button variant={v} disabled leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Disabled</Button>
          <Button variant={v} loading>Loading</Button>
        </div>
      ))}
    </div>
  ),
};

export const FullGrid: Story = {
  name: "Full Design Grid",
  render: () => {
    const variants = ["primary", "secondary", "outline", "subtle", "ghost", "link"] as const;
    const sizes    = ["xl", "lg", "md", "sm", "xs"] as const;

    return (
      <div style={{ padding: 32 }}>
        {sizes.map((size) => (
          <div key={size} style={{ marginBottom: 32 }}>
            <p style={{ fontSize: 11, fontWeight: 600, color: "#9ca3af", marginBottom: 10, fontFamily: "Inter", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Size: {size}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
              {variants.map((v) => (
                <div key={v} style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-start" }}>
                  <Button size={size} variant={v} leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Label</Button>
                  <Button size={size} variant={v} disabled leftIcon={<ArrowLeft />} rightIcon={<ArrowRight />}>Label</Button>
                  <Button size={size} variant={v} loading>Label</Button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export const Destructive: Story = {
  args: { variant: "destructive", children: "Delete", leftIcon: <ArrowLeft />, rightIcon: <ArrowRight /> },
};

export const Loading: Story = {
  args: { loading: true, children: "Saving" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "Disabled", leftIcon: <ArrowLeft />, rightIcon: <ArrowRight /> },
};
