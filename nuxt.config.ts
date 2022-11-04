// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
  target: "static",
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  // plugins: [{ src: "@/plugins/vue-gtag", mode: "client" }],
  content: {
    documentDriven: true,
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },

    highlight: {
      anchorLinks: false,
      preload: ["elixir"],
      theme: "dracula-soft",
    },
  },
};
