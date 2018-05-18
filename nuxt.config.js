require('dotenv').config()

const polyfills = [
  'Promise',
  'Object.assign',
  'Object.values',
  'Array.prototype.find',
  'Array.prototype.findIndex',
  'Array.prototype.includes',
  'String.prototype.includes',
  'String.prototype.startsWith',
  'String.prototype.endsWith'
]

module.exports = {

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  srcDir: __dirname,

  env: {
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.APP_URL,
    appName: process.env.APP_NAME,
    appLocale: process.env.APP_LOCALE || 'en',
    githubAuth: !!process.env.GITHUB_CLIENT_ID,
    linkedinAuth: !!process.env.LINKEDIN_CLIENT_ID,
    recaptchaPublicKey: process.env.RECAPTCHA_PUBLIC_KEY
  },

  head: {
    title: process.env.APP_NAME,
    titleTemplate: '%s - ' + process.env.APP_NAME,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },

      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/favicons/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' },

      { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicons/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicons/android-icon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/android-icon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/android-icon-16x16.png' },

      { rel: 'manifest', href: '/favicons/manifest.json' },
    ],
    script: [
      { src: `https://cdn.polyfill.io/v2/polyfill.min.js?features=${polyfills.join(',')}` },
      { src: `https://www.google.com/recaptcha/api.js` }
    ]
  },

  loading: { color: '#007bff' },

  router: {
    middleware: ['locale', 'check-auth', 'check-email-confirmed', 'check-name-exist']
  },

  plugins: [
    '~components/global/',
    '~plugins/i18n',
    '~plugins/vue-slider',
    '~plugins/vform',
    { src: '~plugins/vue-image-crop-upload', ssr: false },
    '~plugins/axios',
    '~plugins/vue-moment',
    '~plugins/vuejs-datepicker',
    { src: '~plugins/vue-select', ssr: false }
  ],

  modules: [
    '@nuxtjs/router',
    '@nuxtjs/font-awesome',
    'nuxt-simple-line-icons',
    '~/modules/spa',
    '@nuxtjs/toast'
  ],

  toast: {
    duration: 5000
  },

  css: [
    { src: 'typeface-exo-2/index.css', lang: 'css' }
  ],

  build: {
    extractCSS: true,
    vendor: ['axios', 'vform', 'vue-croppie', 'vue-plyr', 'sweetalert2']
  }
}
