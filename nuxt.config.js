export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'kiriminaja',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
      },
      {
        rel: 'stylesheet',
        type: 'image/x-icon',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
      },
      {
        rel: 'stylesheet',
        href:'/assets/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css'
      },
      {
        rel: 'stylesheet',
        href: '/assets/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/scss/main.scss',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: '/assets/css/styles.css',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js'
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js"
      },
      {
        src: "/assets/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"
      },
      {
        src: '/assets/js/custom.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
