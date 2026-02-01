import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use relative paths so the build works on GitHub Pages / Replit / any subpath
  base: './',
  server: {
    // Fix "Blocked request. host is not allowed" on Replit / CodeSandbox / etc.
    // (safe here because this is a demo tool)
    allowedHosts: 'all',
  },
})
