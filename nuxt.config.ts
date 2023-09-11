// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ["@storyblok/nuxt", { accessToken: process.env.STORYBLOK_TOKEN }],
    "@nuxt/image-edge",
    "@nuxtjs/html-validator",
    "nuxt-simple-sitemap",
    "@nuxtjs/robots",
    "nuxt-icon",
  ],
  plugins: ["~/plugins/vercel.client.ts"],
  runtimeConfig: {
    public: {
      storyblokVersion: process.env.STORYBLOK_VERSION,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: process.env.META_TITLE,
      link: [
        {
          rel: "canonical",
          href: "https://ledang.xyz",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@500;600&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        {
          name: "description",
          content: process.env.META_DESCRIPTION,
        },
        {
          property: "og:title",
          content: process.env.META_TITLE,
        },
        {
          property: "og:description",
          content: process.env.META_DESCRIPTION,
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
  image: {
    provider: "storyblok",
    storyblok: {
      baseURL: "https://a.storyblok.com",
      modifiers: {
        smart: true,
      },
    },
  },
  htmlValidator: {
    logLevel: "warning",
  },
  site: {
    url: "https://ledang.xyz",
  },
});
