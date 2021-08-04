import minifyTheme from 'minify-css-string'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Graphic Design Agency',
    title: 'Signet Logo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Signet Logo is a Graphic Design Agency based in Kolkata,
            West Bengal, India. We Design Brands. We live and breathe graphic
            designs, which is the primary area of our focus. So if you are a
            brand that needs to enhance and grow its business, you are in the
            right place.`,
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'graphics, design, agency',
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/gtag.js', mode: 'client' },
    { src: '~/plugins/gtm.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/google-fonts',
    'nuxt-gsap-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
      name: 'Signet Logo',
      short_name: 'Signet Logo',
      description: `Signet Logo is a Graphic Design Agency based in Kolkata,
            West Bengal, India. We Design Brands. We live and breathe graphic
            designs, which is the primary area of our focus. So if you are a
            brand that needs to enhance and grow its business, you are in the
            right place.`,
      background_color: '#121212',
    },
    meta: {
      theme_color: '#121212',
      nativeUI: true,
      name: 'Signet Logo',
      author: 'iotron',
      description: `Signet Logo is a Graphic Design Agency based in Kolkata,
            West Bengal, India. We Design Brands. We live and breathe graphic
            designs, which is the primary area of our focus. So if you are a
            brand that needs to enhance and grow its business, you are in the
            right place.`,
      ogHost: 'https://www.signetlogo.com',
    },
  },

  sitemap: {
    hostname: 'https://www.signetlogo.com',
    gzip: true,
    routes: ['/#about-us', '/#services'],
  },
  robots: {
    UserAgent: '*',
    Host: 'https://www.signetlogo.com',
    Disallow: '/_nuxt',
    Sitemap: 'https://www.signetlogo.com/sitemap.xml',
  },
  googleFonts: {
    families: {
      Raleway: {
        wght: [400, 700],
      },
    },
    display: 'swap',
  },

  gtm: {
    enabled: true /* see below */,
    debug: false,
    layer: 'dataLayer',
    variables: {},

    pageTracking: true,
    pageViewEventName: 'nuxtRoute',

    autoInit: true,
    respectDoNotTrack: true,

    scriptId: 'gtm-script',
    scriptDefer: false,
    scriptURL: 'https://www.googletagmanager.com/gtm.js',
    crossOrigin: false,

    noscript: true,
    noscriptId: 'gtm-noscript',
    noscriptURL: 'https://www.googletagmanager.com/ns.html',
  },

  loadingIndicator: {
    name: 'wandering-cubes',
    color: '#ea3a36',
    background: 'black',
  },

  gsap: {
    /* module options */
    extraPlugins: {
      cssRule: true,
      // draggable: true,
      // easel: true,
      // motionPath: true,
      // pixi: true,
      // text: true,
      // scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      // expoScaleEase: true,
      // roughEase: true,
      // slowMo: true,
    },
  },
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    css: false,

    beforeEnter(el) {
      this.$gsap.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },

    leave(el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: done,
      })
    },
  },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets: false,
    theme: {
      dark: true,
      options: {
        customProperties: false,
        variations: false,
        // themeCache: {
        //   get: (key) => localStorage.getItem(key),
        //   set: (key, value) => localStorage.setItem(key, value),
        // },
        minifyTheme,
      },

      themes: {
        dark: {
          primary: '#f7b521',
          // accent: colors.grey.darken3,
          secondary: '#DB3633',
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
        },
        light: {
          primary: '#f7b521',
          // accent: colors.grey.darken3,
          secondary: '#DB3633',
          anchor: '#e53935',
          // info: colors.teal.lighten1,
          // warning: colors.amber.base,
          // error: colors.deepOrange.accent4,
          // success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true,
    },
    optimization: {
      splitChunks: {
        // maxSize: 200000,
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
  },
}
