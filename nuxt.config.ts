// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui"],
  runtimeConfig: {
    testSecret: "this is a secret",
    public: {
      publicKey: "this is a public Key",
    },
  },
});
