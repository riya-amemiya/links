import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
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
};
