import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/main.scss",
  ],
  build: {
    transpile: ["bootstrap"],
  },
  plugins: [
    { src: "~/plugins/bootstrap.client.d.ts" },
    { src: "~/plugins/vueI18n.d.ts" },
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
        }
      ],
    },
  },
});
