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
    ipx: {
      baseURL: 'https://alan-ortega-portfolio.netlify.app',
      modifiers: {
        format: 'webp',
        quality: 80,
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
