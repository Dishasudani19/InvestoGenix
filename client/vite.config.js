import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/fontawesome': {
        target: 'https://kit.fontawesome.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/fontawesome/, ''),
      },
    },
  },
})
