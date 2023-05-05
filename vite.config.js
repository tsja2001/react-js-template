import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': '/src'
    }
  },

  css: {
    postcss: {
      plugins: [
        autoprefixer(),
        cssnano({
          preset: 'default'
        })
      ]
    }
  }
})
