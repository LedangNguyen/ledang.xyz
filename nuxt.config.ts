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
    },
  },
  app: {
    head: {
      title: "Le Dang Nguyen | Expertise in WordPress, Vue.js, Nuxt.js, Laravel",
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
          name: "description",
          content:
            "Meet Le Dang Nguyen, a highly skilled Full Stack Developer with over seven years of development experience. Expertise in WordPress, Vue.js, Nuxt.js, and Laravel. A responsible and passionate professional ready to tackle challenging projects and contribute to team success.",
        },
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
  runtimeConfig: {
    public: {
      storyblokVersion: process.env.STORYBLOK_VERSION,
    },
  },
});
