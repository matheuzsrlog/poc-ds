// vue 3
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },
vite: {
  define: {
    'process.env.DEBUG': true,
  }
}
})

// vue 2
// export default defineNuxtConfig({
//   build: {
//     // transpile:  ['@nuxtjs/vuetify']
//     // transpile:  [' design.plugin']
//   },
//   vite: {
//     define: {
//       'process.env.DEBUG': true,
//     },
//   },
// })