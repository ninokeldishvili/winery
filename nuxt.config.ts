// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "nuxt-i18n-micro",
    "@nuxt/fonts",
    "@nuxtjs/google-fonts",
  ],
  css: ["./app/assets/css/tailwind.css"],
  shadcn: {
    /**
     * Prefix for all the imported component.
     * @default "Ui"
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * Will respect the Nuxt aliases.
     * @link https://nuxt.com/docs/api/nuxt-config#alias
     * @default "@/components/ui"
     */
    componentDir: "@/components/ui",
  },
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en-US",
        dir: "ltr",
        icon: "twemoji:flag-for-flag-united-states",
      },
      { code: "ka", iso: "ka-GE", dir: "ltr", icon: "twemoji:flag-georgia" },
    ],
    defaultLocale: "en",
    translationDir: "locales",
    meta: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  googleFonts: {
    families: {
      Roboto: true, // Includes all weights
      Inter: "200..700", // Specific range of weights
      "Crimson Pro": {
        wght: "200..900",
        ital: "200..700",
      },
      "Noto Sans Georgian": "100..900",
      Tangerine: [400, 700],
    },
    download: true, // Downloads fonts for self-hosting (optional)
    // ... other options
  },
});
