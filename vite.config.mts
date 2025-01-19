import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  base: "./",
  build: {
    minify: true,
    copyPublicDir: false,
    sourcemap: false,
    emptyOutDir: true,
    lib: {
      entry: "./src",
      name: "toastive",
      fileName: (format) => `toastive.${format}.js`,
      formats: ["cjs", "es"],
    },
  },
  plugins: [dts()],
});
