import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.csb.app', // Allow CodeSandbox domains
      '.codesandbox.io', // Allow CodeSandbox domains
    ],
  },
})