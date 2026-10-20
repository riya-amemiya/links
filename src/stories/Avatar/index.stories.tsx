import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar } from "@/components/ui/avatar";
const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Avatar>;
export const Primary: Story = {
  args: {
    asChild: true,
    className: "h-full w-full md:w-64",
    children: (
      <img
        alt="User avatar"
        height={500}
        loading="eager"
        src={"/icon.png"}
        width={500}
      />
    ),
  },
};
