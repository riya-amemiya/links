import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from ".";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Icon>;
export const Primary: Story = {
  args: {
    url: "/icon.png",
  },
};
