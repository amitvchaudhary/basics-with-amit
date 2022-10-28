// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  target: "static",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  content: {
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
    highlight: {
      theme: "dracula-soft",
    },
  },
};
