import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { readFileSync } from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

// Version stamp of the generated recipe data (public/data, written by
// scripts/generate-public-index.ts before dev/build). The app appends it to
// every data request so a deploy never mixes new pages with cached old ones.
function readDataVersion(): string {
  try {
    return JSON.parse(readFileSync(path.resolve(__dirname, 'public/data/manifest.json'), 'utf-8')).version;
  } catch {
    return 'dev';
  }
}

export default defineConfig(() => {
  return {
    define: {
      __DATA_VERSION__: JSON.stringify(readDataVersion()),
    },
    // Relative assets work from both the repository Pages URL and a custom apex domain.
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR can be disabled with DISABLE_HMR for constrained environments.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when HMR is disabled to save CPU.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
