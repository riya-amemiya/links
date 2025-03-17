import type { Preview } from "@storybook/react";
import { fn } from "@storybook/test";
import "../src/styles/globals.css";
import "animate.css";
import "the-new-css-reset/css/reset.css";
const preview: Preview = {
  parameters: {
    actions: { onClick: fn() },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
