
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'ごちチャット',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Webチャット開発お試し' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'robots', content: 'noindex,nofollow,noarchive' },
      { hid: 'description', name: 'description', content: 'Webチャット開発お試し' },
      { hid: 'og:title', property: 'og:title', content: 'ごちチャット' },
      { hid: 'og:description', property: 'og:description', content: 'Webチャット開発お試し' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'ごちチャット' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:url', property: 'og:url', content: 'https://gochiusa.com' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'ごちチャット' },
      { name: 'twitter:description', content: 'Webチャット開発お試し' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/global.css',
    '~/assets/usagi.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-scrollto'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    'cookie-universal-nuxt',
    'nuxt-fontawesome',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: 'https://gochiusawebchat.firebaseio.com'
  },
  /*
  ** WebFont
  */
  webfontloader: {
    google: {
      families: [
        'Arvo',
        'Noto+Sans&display=swap'
      ]
    }
  },
  /*
  ** PWA Config
  */
  manifest: {
    name: 'Gochiusa Web Chat',
    short_name: 'ごちチャット',
    description: 'Webチャット開発お試し',
    lang: 'ja',
    theme_color: '#7b5544',
    background_color: '#7b5544',
    display: 'standalone',
    scope: '/',
    start_url: '/'
  },
  /*
  ** PWA
  */
  workbox: {
    dev: false
  },
  /*
  ** Nuxt-fontawesome
  */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons', // Solid icons
        icons: [
          'faCalendar',
          'faHeart',
          'faBookmark',
          'faPenFancy',
          'faUserEdit',
          'faBroadcastTower',
          'faSearch',
          'faUser',
          'faUsers',
          'faTags',
          'faPaintBrush',
          'faIdCard',
          'faLock',
          'faSignInAlt',
          'faTicketAlt',
          'faHome',
          'faInfo',
          'faQuestionCircle',
          'faSitemap',
          'faCloudUploadAlt',
          'faExternalLinkAlt',
          'faAngleUp',
          'faImage',
          'faBell',
          'faKeyboard',
          'faUpload',
          'faChevronDown',
          'faChevronUp',
          'faList'
        ]
      },
      {
        set: '@fortawesome/free-brands-svg-icons', // Brand icons
        icons: ['faTwitterSquare', 'faLine']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  vue: {
    devtools: (process.env.NODE_ENV !== 'production')
  },
  dev: (process.env.NODE_ENV !== 'production')
}
