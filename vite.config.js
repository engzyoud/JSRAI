import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // هاد السطر أهم شي عشان Netlify ما يعطيك شاشة بيضاء
  base: './', 
})
