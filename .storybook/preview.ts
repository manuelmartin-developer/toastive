import type { Preview } from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        locales: "en-US",
        method: "alphabetical",
        order: ["Documentation", "Changelog"],
      },
    },
  },
};
export default preview;
