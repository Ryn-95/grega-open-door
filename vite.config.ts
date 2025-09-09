import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false, // Désactiver en production pour améliorer LCP
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'animations': ['framer-motion'],
          'icons': ['react-icons'],
          'calendly': ['react-calendly'],
          'helmet': ['react-helmet-async']
        },
        // Optimiser les noms de chunks pour le cache
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || []
          const extType = info[info.length - 1]
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name || '')) {
            return `assets/media/[name]-[hash][extname]`
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name || '')) {
            return `assets/img/[name]-[hash][extname]`
          }
          if (['css', 'scss'].includes(extType)) {
            return `assets/css/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    },
    // Optimisations pour réduire la taille du bundle
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline des petits assets
    chunkSizeWarningLimit: 500,
  },
  server: {
    port: 3001, // Changé de 3000 à 3001
    host: true,
    // Compression gzip en dev
    middlewareMode: false,
  },
  preview: {
    port: 3002, // Port différent pour preview
    host: true
  },
  // Optimisations CSS
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`
      }
    }
  },
  // Optimisations de dépendances
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'react-icons/fa',
      'react-calendly',
      'react-helmet-async'
    ],
    exclude: ['@vite/client', '@vite/env']
  },
  // Configuration pour le cache HTTP
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
  }
})
