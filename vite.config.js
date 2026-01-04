import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages404 from './vite-plugin-ghpages-404.js';
import path from 'path';

export default defineConfig({
  base: '/',
  plugins: [react(), ghPages404()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
