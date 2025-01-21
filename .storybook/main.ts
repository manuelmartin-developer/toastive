import type { StorybookConfig } from "@storybook/web-components-vite";

const config: StorybookConfig = {
  stories: ["../__docs__/**/*.docs.mdx", "../__docs__/**/*.stories.ts"],
  addons: [
    "@storybook/addon-a11y",
    "@ljcl/storybook-addon-cssprops",
    "@storybook/addon-essentials",
    "@storybook/blocks",
  ],
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  framework: {
    name: "@storybook/web-components-vite",
    options: {},
  },
};
export default config;
