import type { Meta, StoryObj } from "@storybook/react";

import { HomeLinks } from ".";

const meta: Meta<typeof HomeLinks> = {
  component: HomeLinks,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof HomeLinks>;
export const Primary: Story = {
  args: {
    links: [
      {
        id: "7hvi_9c60mt",
        createdAt: "2023-12-20T05:13:53.035Z",
        updatedAt: "2023-12-20T05:24:03.75Z",
        publishedAt: "2023-12-20T05:13:53.035Z",
        revisedAt: "2023-12-20T05:13:53.035Z",
        name: "Contact",
        url: "https://tally.so/r/wvPkXA",
        icon: ["Link2Icon"],
      },
      {
        id: "1v09n9z_p",
        createdAt: "2023-11-25T01:03:19.152Z",
        updatedAt: "2023-11-25T01:03:19.152Z",
        publishedAt: "2023-11-25T01:03:19.152Z",
        revisedAt: "2023-11-25T01:03:19.152Z",
        name: "Zenn",
        url: "https://zenn.dev/riya_amemiya",
        icon: ["Link2Icon"],
      },
      {
        id: "77hkfxhryp",
        createdAt: "2023-11-25T01:03:07.142Z",
        updatedAt: "2023-11-25T01:03:07.142Z",
        publishedAt: "2023-11-25T01:03:07.142Z",
        revisedAt: "2023-11-25T01:03:07.142Z",
        name: "Diary",
        url: "https://sizu.me/riya_amemiya",
        icon: ["Link2Icon"],
      },
      {
        id: "3uxigc2m0",
        createdAt: "2023-11-25T01:02:53.023Z",
        updatedAt: "2023-11-25T01:34:00.776Z",
        publishedAt: "2023-11-25T01:02:53.023Z",
        revisedAt: "2023-11-25T01:02:53.023Z",
        name: "GitHub",
        url: "https://github.com/riya-amemiya",
        icon: ["GitHubLogoIcon"],
      },
      {
        id: "7-ovlgyb37c3",
        createdAt: "2023-11-25T01:02:38.641Z",
        updatedAt: "2023-11-25T01:34:07.152Z",
        publishedAt: "2023-11-25T01:02:38.641Z",
        revisedAt: "2023-11-25T01:02:38.641Z",
        name: "Twitter",
        url: "https://twitter.com/Riya31377928",
        icon: ["TwitterLogoIcon"],
      },
      {
        id: "f25lrzudppy4",
        createdAt: "2023-11-25T01:02:20.313Z",
        updatedAt: "2023-11-25T01:34:09.756Z",
        publishedAt: "2023-11-25T01:02:20.313Z",
        revisedAt: "2023-11-25T01:02:20.313Z",
        name: "Portfolio",
        url: "https://lapras.com/public/riyaamemiya",
        icon: ["PersonIcon"],
      },
    ],
  },
};
