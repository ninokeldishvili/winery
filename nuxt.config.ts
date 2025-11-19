// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-i18n-micro"],
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
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "ka", iso: "ka-GE", dir: "ltr" },
    ],
    defaultLocale: "en",
    translationDir: "locales",
    meta: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
