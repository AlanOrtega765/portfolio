export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/webp",
          href: "/img/person-animated.webp",
        },
      ],
      title: "Portfolio | Alan Ortega",
    },
  },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
  ],
  googleFonts: {
    families: {
      Quicksand: "300..700",
    },
  },
  colorMode: {
    preference: "dark",
    classSuffix: "",
  },
});
