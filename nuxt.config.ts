// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  nitro: {
    preset: 'github-pages',

    output: {
      publicDir: 'docs'
    }
  },
  app: {
    baseURL: '/troapelbarbershop/'
  },
  css: ['@/assets/css/variables.css','@/assets/css/main.css'],

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils'
  ],

  // Optional but nice for GitHub Pages
  ssr: true,
  experimental: {
    payloadExtraction: false
  }
})
