export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Free Education Courses UI Design',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Build on top of nuxt, bootstrap vue, and design inspire from [Education Courses UI Design]',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/Thumb.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Free Education Courses UI Design',
      },
      {
        name: 'og:site_name',
        content: 'web developer',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Build on top of nuxt, bootstrap vue, and design inspire from [Education Courses UI Design]',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vue-ellipse-progress',
      mode: 'client',
    },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
