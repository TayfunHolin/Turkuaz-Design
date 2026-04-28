import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Circular user avatar. Displays an image when `src` is provided; falls back to initials derived from `name`.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    src:  { control: "text" },
    name: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Image: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=47",
    name: "Tayfun Holin",
    size: "md",
  },
};

export const Initials: Story = {
  args: {
    name: "Tayfun Holin",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Avatar src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size="xs" />
      <Avatar src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size="sm" />
      <Avatar src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size="md" />
      <Avatar src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size="lg" />
      <Avatar src="https://i.pravatar.cc/150?img=47" name="Tayfun Holin" size="xl" />
    </div>
  ),
};

export const InitialsSizes: Story = {
  name: "Initials — All Sizes",
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <Avatar name="Tayfun Holin" size="xs" />
      <Avatar name="Tayfun Holin" size="sm" />
      <Avatar name="Tayfun Holin" size="md" />
      <Avatar name="Tayfun Holin" size="lg" />
      <Avatar name="Tayfun Holin" size="xl" />
    </div>
  ),
};

export const FallbackOnError: Story = {
  name: "Fallback on broken image",
  args: {
    src: "https://broken-url.example.com/photo.jpg",
    name: "Tayfun Holin",
    size: "md",
  },
};
