import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    strictPort: false,
    hmr: {
      port: 5173,
    },
  },
  // Ensure proper handling for CodeSandbox
  define: {
    global: 'globalThis',
  },
})