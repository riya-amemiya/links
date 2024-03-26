import type { StorybookConfig } from "@storybook/nextjs";

import path from "node:path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    {
      name: "storybook-addon-next",
      options: {
        nextConfigPath: path.resolve(__dirname, "../next.config.js"),
      },
    },
  ],
  webpackFinal: (config) => {
    if (config.resolve) {
      // typescriptのエイリアスをstorybookでも使えるようにする
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../src"),
      };
    }
    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
