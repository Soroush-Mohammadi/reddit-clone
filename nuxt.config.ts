// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/fonts', '@nuxt/icon', '@sidebase/nuxt-auth'],
  auth: {
    isEnabled: true,
    origin: process.env.NEXTAUTH_URL, // e.g. http://localhost:3000
    basePath: '/api/auth',
    enableGlobalAppMiddleware: true
  }
});