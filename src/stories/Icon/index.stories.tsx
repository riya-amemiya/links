import type { Meta, StoryObj } from "@storybook/nextjs";

import { Icon } from "@/components/ui/icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Icon>;
export const Primary: Story = {
  args: {
    src: "/icon.png",
  },
};
