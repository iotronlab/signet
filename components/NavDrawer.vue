<template>
  <v-list nav dense>
    <v-list-item>
      <v-switch
        v-model="$vuetify.theme.dark"
        inset
        label="Dark Mode"
        persistent-hint
      ></v-switch
    ></v-list-item>
    <v-list-item
      v-for="item in navLinks"
      :key="item.title"
      :to="item.to"
      router
      exact
    >
      <v-list-item-content>
        <v-list-item-title v-text="item.title" class="font-weight-bold" />
      </v-list-item-content>
    </v-list-item>
    <v-subheader class="overline font-weight-bold">Socials</v-subheader>

    <v-list-item
      ><v-btn
        icon
        v-for="social in socialLinks"
        :key="social.name"
        :href="social.url"
        target="_blank"
        :aria-label="social.name"
        rel="noreferrer"
        :alt="social.name"
        ><v-icon v-html="social.icon"></v-icon></v-btn
    ></v-list-item>
    <v-subheader class="overline font-weight-bold">find us on</v-subheader>

    <v-list-item
      v-for="item in serviceLinks"
      :key="item.name"
      :href="item.url"
      target="_blank"
      rel="noreferrer"
      :alt="item.name"
    >
      <v-list-item-content>
        <v-list-item-title
          v-text="item.name"
          class="overline font-weight-bold"
        /> </v-list-item-content
    ></v-list-item>
    <v-row no-gutters align="center">
      <v-subheader class="overline font-weight-bold"
        >External portfolios</v-subheader
      >

      <v-col
        cols="6"
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
          <v-img contain :src="link.icon" :alt="link.name"></v-img
        ></v-card>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
export default {
  props: {
    navLinks: {
      type: Array,
      required: true,
    },
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
  },
}
</script>

