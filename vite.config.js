import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  root: 'src/',
  build: {
    outDir: '../dist/',
    emptyOutDir: true, // IMPORTANT: this will delete the contents of dist/ on build
  },
  plugins: [svelte()],
});
