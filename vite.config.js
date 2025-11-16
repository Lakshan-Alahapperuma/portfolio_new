import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/<your-repo-name>/', // <--- set this for project pages
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
