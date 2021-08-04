<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      temporary
      dark
      color="rgba(0, 0, 0, 0.6)"
    >
      <LazyNavDrawer
        :socialLinks="socialLinks"
        :navLinks="navLinks"
        :serviceLinks="serviceLinks"
        :portfolioLinks="portfolioLinks"
      />
    </v-navigation-drawer>
    <v-app-bar id="nav" fixed app flat class="nav-transparent">
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        aria-label="nav-button"
      >
        <v-icon slot="default" color="primary">{{
          icons.menu
        }}</v-icon></v-app-bar-nav-icon
      >
      <nuxt-link :to="{ name: 'index' }" alt="Home Page">
        <v-img
          src="icon.png"
          alt="Logo"
          :max-width="$vuetify.breakpoint.lgAndUp ? 55 : 45"
      /></nuxt-link>

      <v-row
        no-gutters
        justify="center"
        align="center"
        v-if="!$vuetify.breakpoint.mdAndDown"
      >
        <v-btn
          v-for="item in navLinks"
          :key="item.title"
          color="secondary"
          class="mx-2"
          router
          exact
          :to="item.to"
          ><strong>{{ item.title }}</strong></v-btn
        >
      </v-row>
      <v-btn
        color="secondary"
        class="ml-auto font-weight-bold"
        rounded
        href="tel:+917980665957"
        target="_blank"
        ><v-icon left>{{ icons.call }}</v-icon> Call</v-btn
      >
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-btn
      fab
      fixed
      bottom
      right
      color="secondary"
      href="https://wa.me/message/M3D4MSM2TZNSJ1"
      target="_blank"
      rel="noreferrer"
      alt="whatsapp"
      aria-label="whatsapp button"
    >
      <v-icon x-large>{{ icons.whatsapp }} </v-icon>
    </v-btn>
    <LazyFooter
      :socialLinks="socialLinks"
      :icons="icons"
      :serviceLinks="serviceLinks"
      :portfolioLinks="portfolioLinks"
    />
    <v-footer app absolute>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {
  mdiMenu,
  mdiPhone,
  mdiWhatsapp,
  mdiEmail,
  mdiFacebook,
  mdiInstagram,
  mdiYoutube,
  mdiGoogle,
  mdiPinterest,
} from '@mdi/js'

export default {
  data() {
    return {
      drawer: false,
      icons: {
        menu: mdiMenu,
        call: mdiPhone,
        email: mdiEmail,
        whatsapp: mdiWhatsapp,
      },

      navLinks: [
        {
          title: 'Home',
          to: '/',
        },
        {
          title: 'About US',
          to: '/#about-us',
        },
        {
          title: 'Services',
          to: '/#services',
        },

        {
          title: 'Portfolio',
          to: '/portfolio',
        },

        {
          title: 'Contact US',
          to: '/contact',
        },
      ],
      socialLinks: [
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/signetlogo',
          icon: mdiFacebook,
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/signetlogo',
          icon: mdiInstagram,
        },
        {
          name: 'Youtube',
          url: 'https://www.youtube.com/channel/UCTHNYidV3Jv-tRoEB_iUmTQ',
          icon: mdiYoutube,
        },
        { name: 'Google', url: 'https://g.co/kgs/jbFUBk', icon: mdiGoogle },
        {
          name: 'Pinterest',
          url: 'https://www.pinterest.ca/signetlogo',
          icon: mdiPinterest,
        },
      ],
      serviceLinks: [
        { name: 'Fiverr', url: 'https://www.fiverr.com/signetlogo' },
        {
          name: 'Upwork',
          url: 'https://www.upwork.com/freelancers/~01340b635722d78678',
        },
        { name: 'Freelancer', url: 'https://www.freelancer.com/u/signetlogo' },
      ],
      portfolioLinks: [
        {
          name: 'Behance',
          url: 'https://www.behance.net/signetlogo',
          icon: require('@/assets/icons/behance.svg'),
        },
        {
          name: 'Dribbble',
          url: 'https://dribbble.com/signetlogo',
          icon: require('@/assets/icons/dribbble.svg'),
        },
      ],
    }
  },
  mounted() {
    let myNav = document.getElementById('nav')
    window.onscroll = function () {
      'use strict'
      if (document.body.scrollTop >= 200) {
        myNav.classList.add('nav-transparent')
      } else {
        myNav.classList.remove('nav-transparent')
      }
    }
    // this.tawk()
  },
}
</script>
<style scoped>
.nav-transparent {
  transition: opacity 0.5s ease-in-out;
  background-color: transparent !important;
}
</style>
