// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: 'All Guitar Scales',
      link: [
        { rel: 'stylesheet', href: 'https://unpkg.com/mvp.css' },
      ]
    }
  }
})
