export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/jpg',
          href: '/img/person-animated.jpg',
        },
      ],
    },
  },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],
  image: {
    provider: 'proxy',
    providers: {
      proxy: {
        provider: 'ipx',
        options: {
          baseURL: `https://alan-ortega-portfolio.netlify.app/ipx`,
        },
      },
    },
  },
  googleFonts: {
    families: {
      Quicksand: '300..700',
    },
  },
  colorMode: {
    preference: 'dark',
    classSuffix: '',
  },
  swiper: {
    modules: ['effect-coverflow'],
  },
});
