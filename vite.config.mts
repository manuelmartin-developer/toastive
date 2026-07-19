import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  base: './',
  build: {
    minify: true,
    copyPublicDir: false,
    sourcemap: false,
    emptyOutDir: true,
    lib: {
      entry: './src',
      name: 'toastive',
      fileName: () => 'toastive.js',
      formats: ['es']
    }
  },
  plugins: [
    dts({
      // Flatten source declaration files to dist/ root so package.json's
      // `types: ./dist/index.d.ts` resolves correctly.
      entryRoot: 'src',
      // Keep test sources — and the whole test folder — out of the publish.
      // The default `**/*.test.ts` exclude misses the dedicated `__test__/`
      // folder because dts walks the tsconfig include first.
      exclude: ['__test__', '**/*.test.ts', '**/*.spec.ts', 'src/helpers/*']
    })
  ]
})
