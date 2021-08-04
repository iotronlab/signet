<template>
  <v-container fluid
    ><iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdPi2hFqLXoGBj52hNk96josvqZzeIiiUwY32WNxoYr4YDhiw/viewform?embedded=true"
      width="100%"
      height="2800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    ></v-container
  >
</template>

<script>
export default {
  head() {
    return {
      title: 'Place Order',
      // meta: [
      //   // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      //   {
      //     hid: 'description',
      //     name: 'description',
      //     content: 'My custom description'
      //   }
      // ]
    }
  },
}
</script>

