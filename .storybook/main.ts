import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/experimental-nextjs-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/experimental-addon-test"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/experimental-nextjs-vite"),
    options: {},
  },
  docs: {},
  staticDirs: ["../public"],
};
export default config;

function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}
