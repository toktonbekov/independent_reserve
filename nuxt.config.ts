// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-typed-router',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  colorMode: {
    classSuffix: '-mode',
    preference: 'dark',
    fallback: 'dark',
    storageKey: 'colorMode',
  },
  image: {
    domains: [import.meta.env.VITE_IMAGE_HOST],
  },
  svgo: {
    autoImportPath: './app/assets/svg/',
    svgo: true,
    defaultImport: 'component',
    svgoConfig: {
      multipass: true,
    },
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  app: {
    head: {
      script: [],
    },
  },
  css: ['@/assets/css/tailwind.css', 'vue-final-modal/style.css'],
})
