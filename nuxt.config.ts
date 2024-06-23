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
    baseUrl: 'https://api.polmap.ir', // Laravel API
    // baseUrl: 'http://localhost:8000', // Laravel API
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
      // baseURL: 'http://localhost:8000/api',
      // uploadURL: 'http://localhost:8000/api/upload',
      baseURL: 'https://api.polmap.ir/api',
      uploadURL: 'https://api.polmap.ir/api/upload',
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})