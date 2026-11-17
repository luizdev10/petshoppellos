import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import seoPlugin from './plugins/seo.js'
import { existsSync } from 'node:fs'
import siteConfig from './src/site.config.js'

const logoExiste = Boolean(siteConfig.imagens.logo.arquivo) && existsSync(`./public/${siteConfig.imagens.logo.arquivo}`)

export default defineConfig({
  base: '/petshoppellos/',
  define: {
    'import.meta.env.VITE_LOGO_EXISTE': JSON.stringify(logoExiste),
  },
  plugins: [react(), tailwindcss(), seoPlugin()],
})
