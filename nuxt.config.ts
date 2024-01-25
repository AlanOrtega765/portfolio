export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-swiper',
  ],
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
    modules: ['effect-coverflow']
  }
});
