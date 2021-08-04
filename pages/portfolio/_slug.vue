<template>
  <v-container>
    <section v-if="$fetchState.pending">
      <Loading />
      <h1>Loading...</h1>
    </section>

    <section v-else>
      <div class="justify-center">
        <Breadcrumb :breadcrumbItems="breadcrumbItems" />
      </div>
      <v-divider class="my-2"></v-divider>
      <h1 class="text-h4">Case Study</h1>
      <v-divider class="my-2"></v-divider>
      <div>
        <h2 class="text-overline text--secondary">Name</h2>
        <h3 class="text-body-1">{{ portfolio.name }}</h3>
        <br />
        <h2 class="text-overline text--secondary">Client Brief</h2>
        <h3 class="text-body-1">{{ portfolio.client_brief }}</h3>
        <br />
        <h2 class="text-overline text--secondary">Project Description</h2>
        <h3 class="text-body-1">{{ portfolio.project_description }}</h3>
        <br />
        <h2 class="text-overline text--secondary">Tools</h2>
        <v-row no-gutters v-if="portfolio.tools != null">
          <v-chip
            v-for="(tool, i) in portfolio.tools"
            :key="i"
            outlined
            class="ma-1"
            >{{ tool }}</v-chip
          >
        </v-row>
        <!-- <v-img height="500px" width="500px">
          {{ portfolio.images }}
        </v-img> -->
        <!-- <PortfolioImages v-bind:images="portfolio.images" /> -->
        <PostImages v-bind:images="portfolio.images" />
      </div>
      <v-divider class="my-2"></v-divider>
      <v-row no-gutters v-for="(post, i) in portfolio.posts" :key="i">
        <v-col cols="12">
          <h2 class="text-h4 text--secondary">{{ post.name }}</h2>

          <h2 class="text-body-1">{{ post.content }}</h2>

          <!-- <PortfolioImages v-bind:images="post.images" /> -->
          <PostImages v-bind:images="post.images" />
          <v-divider class="my-2"></v-divider>
        </v-col>
      </v-row>
    </section>
    <!-- <Footer /> -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      portfolio: null,
      breadcrumbItems: [
        {
          text: 'Home',
          disabled: false,
          to: '/',
        },
        {
          text: 'Portfolios',
          disabled: false,
          to: '/portfolio',
          exact: true,
        },
        {
          text: this.$route.params.slug,
          disabled: true,
          to: '',
        },
      ],
    }
  },

  // head() {
  //   return {
  //     title: this.portfolio.name,
  //     meta: [
  //       {
  //         hid: 'description',
  //         name: 'description',
  //         content: this.portfolio.project_description,
  //       },
  //     ],
  //   }
  // },

  async fetch() {
    await this.$axios
      .$get(`http://localhost:8000/api/portfolios/${this.$route.params.slug}`)
      .then((res) => {
        this.portfolio = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  },

  // async asyncData({ params, app }) {
  //   let response = await app.$axios.$get(`portfolios/${params.slug}`)
  //   return {
  //     portfolio: response.data,
  //   }
  // },
}
</script>

<style scoped>
.posts {
  height: 180px;
  width: auto;
  align-self: center;
}
</style>
