// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
    },
  },
  css: ["@/assets/css/style.scss"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@pinia/nuxt',
    "nuxt-lodash",
    'dayjs-nuxt',
    'nuxt-gtag',
  ],
  gtag: {
    id: 'google-site-verification=Kwc0sbxhD7BdDBrw1jPZvJTmmj6282qynD58FXMdT8U'
  },
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.scss', {injectPosition: 'first'},],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  vite: {
    resolve: {
      mainFields: [
        'browser',
        'module',
        'main',
        'jsnext:main',
        'jsnext'
      ]
    }
  },
  runtimeConfig: {
    public: {
      // baseURL: 'http://127.0.0.1:8000/api',
      // uploadURL: 'http://127.0.0.1:8000/api/upload',
      baseURL: 'https://api.beautymap.ir/api',
      uploadURL: 'https://api.beautymap.ir/api/upload',
      walletAddress: 'UQCz1nOgL8ys5uKkza6hT1usfk8F97JIvdyD4UvucpnTAgDd',
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 4000
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})