// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "@nuxt/image-edge",
  ],
  image: {
    storyblok: {
      baseURL: "https://a.storyblok.com",
      formats: ["webp", "avif"],
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        {
          property: "og:image",
          content: "/ledang.jpg",
        },
        {
          property: "twitter:image",
          content: "/ledang.jpg",
        },
      ],
    },
  },
});
