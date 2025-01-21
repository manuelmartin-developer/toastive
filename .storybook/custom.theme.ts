import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "rgb(39 125 161 / 92%)",
  colorSecondary: "#1ea7fd",

  // UI
  appBg: "#f7f7f7",
  appContentBg: "#ffffff",
  appBorderColor: "#e6e6e6",
  appBorderRadius: 4,

  // Typography
  fontBase: "Helvetica, 'Arial', sans-serif",
  fontCode: "monospace",

  // Text colors
  textColor: "#333333",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#999999",
  barSelectedColor: "#1ea7fd",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#e6e6e6",
  inputTextColor: "#333333",
  inputBorderRadius: 4,

  brandTitle: "Toastive",
  brandImage: "/assets/logo.png",
});
