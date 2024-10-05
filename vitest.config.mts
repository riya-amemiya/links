import path from "node:path";

import { storybookTest } from "@storybook/experimental-addon-test/vitest-plugin";
import { defineConfig } from "vitest/config";

// More info at: https://storybook.js.org/docs/writing-tests/vitest-plugin
export default defineConfig({
  plugins: [
    // See options at: https://storybook.js.org/docs/writing-tests/vitest-plugin#storybooktest
    storybookTest(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  optimizeDeps: {
    include: ["@storybook/experimental-addon-test/internal/test-utils"],
  },
  test: {
    globals: true,
    environment: "happy-dom",
    name: "storybook",
    coverage: {
      provider: "v8",
    },
    browser: {
      enabled: true,
      headless: true,
      name: "chromium",
      provider: "playwright",
    },
    // Make sure to adjust this pattern to match your stories files.
    include: ["**/*.stories.?(m)[jt]s?(x)"],
    setupFiles: ["./.storybook/vitest.setup.ts"],
    typecheck: {
      enabled: true,
      tsconfig: "tsconfig.test.json",
    },
  },
});
