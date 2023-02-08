import Vue from 'vue'
import { install as Design } from '@logcomex/design'
import '@logcomex/design/dist/design.css'

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(Design)
})