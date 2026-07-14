import { defineConfig } from 'vite';

// Base is left at default '/' so local dev, preview, and visual review work at root.
// A subpath base for GitHub Pages is set separately at deploy time
// (e.g. `vite build --base=/repo-name/`).
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: false
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsInlineLimit: 0
  }
});
