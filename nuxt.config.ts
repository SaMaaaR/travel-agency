export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/main.scss"], // Ensure CSS is loaded globally
  build: {
    transpile: ["bootstrap"],
  },
  plugins: [
    { src: "~/plugins/bootstrap.client.ts", mode: "client" }, // Correctly loading only on the client side
    { src: '~/plugins/vue-flag-icon.ts', mode: 'client' }, // Ensure correct mode
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
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded',
        },
      ],
    },
  },

});
