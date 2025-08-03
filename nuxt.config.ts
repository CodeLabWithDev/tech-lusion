import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";
import { fileURLToPath } from "node:url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Tech Lusion",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
        { name: "description", content: "Tech Lusion - Your Tech Haven" },
        { name: "keywords", content: "tech, blog, articles, tutorials" },
        { name: "author", content: "Tech Lusion Team" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
    pageTransition: { name: "fade", mode: "out-in" },
    layoutTransition: { name: "fade", mode: "out-in" },
    // baseURL: "/",
    // buildAssetsDir: "assets/",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  // alias: {
  //   images: fileURLToPath(new URL("./assets/images", import.meta.url)),
  //   style: fileURLToPath(new URL("./assets/style", import.meta.url)),
  //   data: fileURLToPath(new URL("./assets/other/data", import.meta.url)),
  // },

  modules: ["@nuxt/image"],
});
