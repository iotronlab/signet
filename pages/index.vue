<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-sheet class="mt-n16" width="100%" color="transparent">
        <video
          autoplay
          muted
          loop
          playsinline
          class="landing-video"
          :poster="require('@/assets/img/loader.webp')"
        >
          <source
            :src="require('@/assets/video/landing.mp4')"
            type="video/mp4"
          />
        </video>
      </v-sheet>
      <v-container fluid :class="{ content: $vuetify.breakpoint.lgAndUp }">
        <LazyLandingTextEffect />

        <v-row no-gutters justify="center" align="center">
          <v-btn class="button-left ma-1 font-weight-bold" light to="portfolio"
            >View Portfolio</v-btn
          >
          <v-btn
            class="button-right ma-1 font-weight-bold"
            dark
            :to="{ path: '/', hash: 'services' }"
            @click.native="scrollTo('#services')"
            >View Services</v-btn
          >
        </v-row>
      </v-container>
    </v-row>

    <section id="about-us">
      <h1 class="text-h3 text-center ma-4">About US</h1>
      <v-row no-gutters justify="center"
        ><v-col cols="12" lg="7" md="8" sm="8">
          <h2 class="body-1 text-center ma-2">
            The word Signet means a symbol (signature) to authenticate an
            official document. Thus, our prime focus is to build a brand value
            that starts from a logo and extends to all the business’s graphic
            materials.
            <br />
            <br />
            Signet Logo is a Graphic Design Agency based in Kolkata, West
            Bengal, India. We are a group of freelance graphic designers who
            started their journey in the year 2019. We live and breathe graphic
            designs, which is the primary area of our focus. So if you are a
            brand that needs to enhance and grow its business, you are in the
            right place.
            <br />
            <br />
            We portray your Brand Values through our Designs so that you can
            reach your precise Target Audience. Signet Logo creates
            aesthetically pleasing designs to establish your business needs.
          </h2>
          <div class="ma-2">
            <h3 class="button">Design Process</h3>
            <h4 class="body-1">
              We optimised our design process to fulfil your graphic needs in
              record time. Our design plan:

              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> We gather
                information and generate requirements and targets.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> Plan the
                concept.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> Make a design
                layout that includes colour, size, type and concepts.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> Get approval
                of the design concept from the client.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> Prepare the
                final layout.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon>
                Complete the project.
              </p>
              <p class="mb-1">
                <v-icon color="success">{{ icons.check }}</v-icon> Provide
                priority support and further help related to the project.
              </p>
            </h4>
          </div>
        </v-col>

        <v-col cols="12" lg="3" md="4" sm="4">
          <v-img
            :lazy-src="require('@/assets/img/creativehead.webp')"
            :src="require('@/assets/img/creativehead.webp')"
            eager
            contain
          ></v-img>
          <h2 class="text-center text-button">
            Bkt, <br />Creative Head
          </h2></v-col
        ></v-row
      >
    </section>

    <section class="mt-4" id="services">
      <h1 class="text-h3 text-center ma-4">Our Services</h1>
      <h2 class="body-1 text-center mx-2">
        Our range of design services cover all the creative needs of a Modern
        Business.
      </h2>

      <LazyLandingServices />
    </section>
  </v-container>
</template>

<script>
import { mdiCheckDecagram } from '@mdi/js'
export default {
  data() {
    return {
      icons: {
        check: mdiCheckDecagram,
      },
    }
  },
  mounted() {
    if (this.$route.hash) {
      window.onNuxtReady(() => {
        let hash = this.$route.hash
        this.$nextTick(function () {
          setTimeout(() => this.scrollTo(hash), 500)
        })
      })
    }
  },
  methods: {
    scrollTo(hash) {
      this.$nextTick(function () {
        const el = document.querySelector(hash)
        if (el) {
          setTimeout(() => {
            return this.$vuetify.goTo(el)
            // if ('scrollBehavior' in document.documentElement.style) {
            //   return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
            // } else {
            //   return window.scrollTo(0, el.offsetTop)
            // }
          }, 500)
        }
      })
    },
  },
}
</script>
<style scoped>
.landing-video {
  right: 0;
  left: 0;
  top: 0;
  width: 100%;
}
.landing-video::after {
  content: '';
  z-index: 1;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
}
.content {
  z-index: 2;
  position: absolute;
}
</style>
<style>
.button-left {
  border-radius: 5px 15px 5px 15px !important;
  background-color: #ffc107 !important;
  background-image: linear-gradient(
    180deg,
    #ffc107 70%,
    #daa520 95%
  ) !important;
  box-shadow: 0 2px 4px 0 #ffc107 !important;
}
.button-right {
  border-radius: 15px 5px 15px 5px !important;
  background-color: #f44336 !important;
  background-image: linear-gradient(
    180deg,
    #f44336 70%,
    #b02e0c 95%
  ) !important;
  box-shadow: 0 2px 4px 0 #f44336 !important;
}
</style>
