import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import unicorn from "eslint-plugin-unicorn";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
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
  unicorn.configs.recommended,
  ...compat.config({
    extends: ["plugin:storybook/recommended", "next"],
  }),
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
          },
        },
      ],

      "unicorn/no-null": "off",
    },
  },
];
