import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Tech Lusion",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Tech Lusion - Your Tech Haven" },
        { name: "keywords", content: "tech, blog, articles, tutorials" },
        { name: "author", content: "Tech Lusion Team" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Lateef:wght@200;300;400;500;600;700;800&family=Outfit:wght@100..900&display=swap",
        },
      ],
    },
    // pageTransition: { name: "fade", mode: "out-in" },
    // layoutTransition: { name: "layout", mode: "out-in" },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image"],
});
