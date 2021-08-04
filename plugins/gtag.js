import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ isDev, app }) => {
  if (!isDev) {
    window.onNuxtReady(() => {
      setTimeout(function () {
        // Pass the component definition to the resolve callback
        Vue.use(
          VueGtag,
          {
            config: { id: 'G-YRZHD8LGGE' },
          },
          app.router
        )
      }, 8000)
    })
  } else {
    console.log('Skipping GA in development')
  }
}
