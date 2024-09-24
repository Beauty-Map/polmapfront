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
    'nuxt-auth-sanctum'
  ],
  sanctum: {
    baseUrl: 'https://api.beautymap.ir', // Laravel API
    // baseUrl: 'http://localhost:8000', // Laravel API
    mode: 'token',
    endpoints: {
      user: '/api/own',
      login: '/api/auth/login',
      logout: '/api/auth/logout',
    },
    client: {
      retry: 1,
    },
    redirectIfAuthenticated: false,
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
      // baseURL: process.env.BASE_URL,
      // baseURL: 'http://localhost:8000/api',
      // uploadURL: 'http://localhost:8000/api/upload',
      baseURL: 'https://api.beautymap.ir/api',
      uploadURL: 'https://api.beautymap.ir/api/upload',
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