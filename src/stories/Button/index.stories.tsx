import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/test";

import { Button } from "@/components/ui/button";
const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Button>;
export const Primary: Story = {
  args: {
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
  },
};
