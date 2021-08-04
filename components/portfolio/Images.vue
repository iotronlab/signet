<template>
  <v-carousel hide-delimiters show-arrows-on-hover>
    <template v-slot:prev="{ on, attrs }">
      <v-btn icon x-large v-bind="attrs" v-on="on"
        ><v-icon x-large>{{ icons.leftArrow }}</v-icon></v-btn
      >
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on" x-large
        ><v-icon x-large>{{ icons.rightArrow }}</v-icon></v-btn
      >
    </template>
    <v-carousel-item
      v-for="(image, i) in imageList"
      :key="i"
      reverse-transition="fade-transition"
      transition="fade-transition"
      cycle
    >
      <v-img :src="image.url" contain height="100%"></v-img>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mdiArrowLeftCircleOutline } from '@mdi/js'
import { mdiArrowRightCircleOutline } from '@mdi/js'
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      icons: {
        leftArrow: mdiArrowLeftCircleOutline,
        rightArrow: mdiArrowRightCircleOutline,
      },
    }
  },
  computed: {
    imageList() {
      if (!this.images || this.images.length == 0) {
        this.images.push({ url: require('@/static/icon.png') })
      }
      return this.images
    },
  },
}
</script>
