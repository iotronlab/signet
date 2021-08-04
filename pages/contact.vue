<template>
  <v-container>
    <h1 class="text-h4">Contact Us</h1>
    <v-divider class="my-2"></v-divider>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSf22rm2gcBW5yKk7m3H-6tjkyiupgbaGmXoZwCJdhCAs5Rq1A/viewform?embedded=true"
      width="100%"
      height="1700"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      >Loading…</iframe
    >
    <!-- <form>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        :counter="15"
        label="Name"
        required
        filled
        shaped
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        filled
        shaped
      ></v-text-field>
      <v-text-field
        label="Business Name"
        v-model="business_name"
        placeholder="Enter your business name"
        :error-messages="errors"
        filled
        shaped
      ></v-text-field>
      <v-text-field
        label="Business Link"
        v-model="business_link"
        placeholder="Enter your business link"
        :error-messages="errors"
        filled
        shaped
      ></v-text-field>
      <v-text-field
        label="Contact"
        v-model="contact"
        placeholder="Enter your contact"
        :error-messages="errors"
        filled
        shaped
      ></v-text-field>
      <v-select
        :items="services"
        v-model="serviceSelect"
        item-text="heading"
        item-value="heading"
        label="Services"
        dense
        :append-icon="dropdownIcon"
        filled
        :clear-icon="removeIcon"
        clearable
        shaped
        chips
        multiple
      >
        <template v-slot:selection="{ item }">
          <v-chip close :close-icon="removeIcon" @click:close="remove(item)">
            {{ item.heading }}
          </v-chip>
        </template>
      </v-select>
      <v-textarea
        v-model="description"
        label="Description"
        :error-messages="emailErrors"
        required
        shaped
        filled
      ></v-textarea>
      <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        :on-icon="checkedIcon"
        :off-icon="unCheckedIcon"
        label="Do you agree?"
        required
        filled
        shaped
      ></v-checkbox>

      <v-btn class="mr-4" @click="submit"> submit </v-btn>
      <v-btn @click="reset()"> clear </v-btn>
    </form> -->
  </v-container>
</template>

<script>
// import {
//   mdiMenuDown,
//   mdiClose,
//   mdiCheckboxMarked,
//   mdiCheckboxBlankOutline,
// } from '@mdi/js'

export default {
  head() {
    return {
      title: 'Contact Us',
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
  // data() {
  //   return {
  //     serviceSelect: [],
  //     dropdownIcon: mdiMenuDown,
  //     removeIcon: mdiClose,
  //     checkedIcon: mdiCheckboxMarked,
  //     unCheckedIcon: mdiCheckboxBlankOutline,
  //     services: [
  //       {
  //         heading: 'Brand Identity',
  //       },
  //       {
  //         heading: 'Artwork & Merchandise',
  //       },
  //       {
  //         heading: 'Social Media Designs',
  //       },
  //       {
  //         heading: 'Marketing Designs',
  //       },
  //     ],
  //   }
  // },
  // methods: {
  //   remove(item) {
  //     this.serviceSelect.splice(this.serviceSelect.indexOf(item))
  //     this.serviceSelect = [...this.serviceSelect]
  //   },
  // },
}
</script>
