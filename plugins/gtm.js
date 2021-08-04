export default function ({ $gtm, route }) {
  window.onNuxtReady(() => {
    setTimeout(function () {
      // Pass the component definition to the resolve callback
      $gtm.init('GTM-TQQHS2Z')
    }, 6000)
  })
}
