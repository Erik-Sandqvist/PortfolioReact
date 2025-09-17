import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages404 from './vite-plugin-ghpages-404.js'

export default defineConfig({
  base: '/',
  plugins: [react(), ghPages404()],
})
