import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-rest',
      closeBundle() {
        const src = path.resolve(__dirname, 'rest');
        const dest = path.resolve(__dirname, 'dist/rest');
        if (fs.existsSync(src)) {
          fs.cpSync(src, dest, { recursive: true });
          console.log('Successfully copied rest/ folder to dist/rest');
        }
      }
    }
  ],
})
