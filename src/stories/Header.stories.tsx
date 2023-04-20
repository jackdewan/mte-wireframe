import { Meta, StoryObj } from "@storybook/react";

import { HeaderCenter } from "../components/HeaderCenter";

const meta: Meta<typeof HeaderCenter> = {
  title: "Components/Header",
  component: HeaderCenter,
};

export default meta;
type Story = StoryObj<typeof HeaderCenter>;

export const Main: Story = {};
