// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  css: ['@/assets/scss/app.scss'],
  typescript: {
    strict: true,
    typeCheck: true,
  },
  imports: {
    autoImport: false,
  },
})
