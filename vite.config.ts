import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // GitHub Pages serves this repository from /fifirecipes/; local development stays at /.
    base: process.env.GITHUB_ACTIONS === 'true' ? '/fifirecipes/' : '/',
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
