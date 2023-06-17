// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  runtimeConfig: {
    testSecret: "this is a secret",
    public: {
      publicKey: "this is a public Key",
    },
  },
});
