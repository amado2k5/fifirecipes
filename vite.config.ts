import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
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
