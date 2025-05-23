import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import unicorn from "eslint-plugin-unicorn";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  unicorn.configs.recommended,
  ...compat.config({
    extends: ["plugin:storybook/recommended", "next"],
  }),
  {
    ignores: [
      "src/components/ui/",
      "**/next.config.js",
      "**/tailwind.config.js",
      "**/postcss.config.js",
      "eslint.config.mjs",
      ".storybook/*.ts",
    ],
  },
  {
    plugins: {
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
    languageOptions: {
      sourceType: "module",
      parserOptions: {
        project: "./tsconfig.json",
      },
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
