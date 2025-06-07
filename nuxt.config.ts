// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
 
  app: {
    head: {
      title: process.env.SEO_TITLE,
      link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/icon.png'
    }
  ]
    }
  },
  runtimeConfig: {
    public: {
      seo_title: process.env.SEO_TITLE,
      seo_desc: process.env.SEO_DESC,
      seo_link: process.env.SEO_LINK
    }
  },
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwindcss()]
  },

  modules: [
    "@nuxt/icon",
    "@nuxt/image",
    "nuxt-aos",
    "@nuxtjs/seo",
    "nuxt-og-image",
  ],
  icon: {
    serverBundle: {
      collections: ['ic', 'fa6-solid']
    }
  },
  aos:{
    once: true,
    easing: 'linear'
  },
   site: {
    
  },
});