import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";
import { MapPinIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Icon> = {
  title: "Foundation/Icon",
  component: Icon,
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    Icon: MapPinIcon,
  },
};
