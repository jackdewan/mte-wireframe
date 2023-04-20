import { Meta, StoryObj } from "@storybook/react";

import { ImageCTA } from "./ImageCTA";

const meta: Meta<typeof ImageCTA> = {
  title: "Components/ImageCTA",
  component: ImageCTA,
};

export default meta;
type Story = StoryObj<typeof ImageCTA>;

export const ImageRight: Story = {};

export const ImageLeft: Story = {
  args: {
    left: true,
  },
};
