import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    port: 5173,
    host: '127.0.0.1',
    strictPort: true,
    open: true
  }
}

