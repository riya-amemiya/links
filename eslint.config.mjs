import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import unicorn from "eslint-plugin-unicorn";
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { defineConfig } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import importPlugin from "eslint-plugin-import";
import storybook from "eslint-plugin-storybook";

export default defineConfig([
  // eslint-config-next configs with fixup for deprecated context methods
  ...fixupConfigRules(nextTs).map((config) => ({
    ...config,
    // Override the babel parser from eslint-config-next with typescript-eslint
    // to satisfy ESLint v10's scopeManager.addGlobals requirement
    ...(config.languageOptions?.parser
      ? {
          languageOptions: {
            ...config.languageOptions,
            parser: tseslint.parser,
          },
        }
      : {}),
  })),
  ...fixupConfigRules(nextVitals).map((config) => ({
    ...config,
    ...(config.languageOptions?.parser
      ? {
          languageOptions: {
            ...config.languageOptions,
            parser: tseslint.parser,
          },
        }
      : {}),
  })),
  unicorn.configs.recommended,
  ...storybook.configs["flat/recommended"],
  {
    ignores: [
      "src/components/ui/",
      "**/next.config.js",
      "**/tailwind.config.js",
      "**/postcss.config.js",
      "eslint.config.mjs",
      ".storybook/*.ts",
      ".next",
      "node_modules",
      ".vercel",
      ".turbo",
      ".dependency-cruiser.js",
      "next-env.d.ts",
      ".wrangler",
      ".devbox",
      ".open-next",
    ],
  },
  {
    plugins: {
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
      import: fixupPluginRules(importPlugin),
      react: fixupPluginRules(react),
    },

    rules: {
      "react/jsx-sort-props": "error",
      "react-hooks/exhaustive-deps": "off",

      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],

          alphabetize: {
            order: "asc",
          },

          "newlines-between": "always",
        },
      ],

      "security/detect-object-injection": "off",

      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
            kebabCase: true,
          },
          ignore: [
            "not-found.tsx",
            "error.tsx",
            "loading.tsx",
            "layout.tsx",
            "page.tsx",
          ],
        },
      ],

      "unicorn/no-null": "off",
    },
  },
]);
