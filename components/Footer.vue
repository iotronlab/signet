<template>
  <v-container fluid>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="12" lg="3" class="text-center">
        <NuxtLink to="/" alt="Home Page"
          ><v-img
            lazy-src="/icon.png"
            src="/icon.png"
            max-width="220"
            contain
            class="mx-auto"
            alt="Signet Logo"
        /></NuxtLink>

        <h2 class="overline"><strong>Signet Logo</strong></h2>
        <v-btn color="secondary" class="ma-2"
          ><strong>Place an Order</strong></v-btn
        >
        <v-divider />

        <v-btn
          text
          class="mb-2"
          href="mailto:contactus@signetlogo.com"
          target="_blank"
          rel="noreferrer"
          alt="email"
        >
          <v-icon class="mr-1">{{ icons.email }}</v-icon
          ><strong>Mail US</strong>
        </v-btn>
        <br />

        <v-btn
          text
          class="text-h6 mb-2"
          href="tel:+917980665957"
          target="_blank"
          rel="noreferrer"
          alt="telephone"
        >
          <v-icon>{{ icons.call }}</v-icon
          >+91-7980 665 957
        </v-btn>
        <v-btn
          text
          class="text-h6 mb-2"
          href="https://wa.me/message/M3D4MSM2TZNSJ1"
          target="_blank"
          rel="noreferrer"
          alt="whatsapp"
        >
          <v-icon>{{ icons.whatsapp }}</v-icon
          >+91-7980 665 957
        </v-btn>

        <p class="caption mb-2">
          97, Ajay Nagar, Melabagan Estate, Basak Bagan, Kolkata, West Bengal,
          India, 700074.
        </p>
        <v-divider
      /></v-col>
      <v-col cols="12" lg="3">
        <p class="overline">socials</p>
        <v-row no-gutters justify="space-around" class="mb-4">
          <v-btn
            v-for="(social, i) in socialLinks"
            :key="i"
            icon
            :href="social.url"
            target="_blank"
            :aria-label="social.name"
            rel="noreferrer"
            :alt="social.name"
            ><v-icon large>{{ social.icon }}</v-icon></v-btn
          >
        </v-row>
        <!-- <p v-for="(link, i) in navItems" :key="i" class="subtitle-2 mb-1">
          <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
        </p> -->
        <p class="overline">External portfolios</p>
        <v-row no-gutters align="center" justify="center">
          <v-col
            cols="6"
            md="4"
            sm="4"
            class="pa-4"
            v-for="link in portfolioLinks"
            :key="link.url"
          >
            <v-card
              :href="link.url"
              target="_blank"
              color="transparent"
              flat
              rel="noreferrer"
              :alt="link.name"
            >
              <v-img
                contain
                :lazy-src="link.icon"
                :src="link.icon"
                :alt="link.name"
              ></v-img
            ></v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" lg="3"> </v-col>
    </v-row>
    <v-row no-gutters>
      <span class="mr-2">&copy; {{ new Date().getFullYear() }}</span>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    socialLinks: {
      type: Array,
      required: true,
    },
    serviceLinks: {
      type: Array,
      required: true,
    },
    portfolioLinks: {
      type: Array,
      required: true,
    },
    icons: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
a {
  text-decoration: none;
}
p a:hover {
  color: #6ee7b7;
}
</style>
