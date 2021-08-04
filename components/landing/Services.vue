<template>
  <v-container fluid>
    <v-row
      no-gutters
      v-for="(service, i) in services"
      :key="i"
      justify="center"
      class="mb-6"
    >
      <v-col cols="12" lg="7" class="left">
        <v-row no-gutters>
          <v-col
            v-for="(img, i) in service.img"
            :key="i"
            :cols="i == 0 ? 12 : 6"
          >
            <v-img :src="img.src" contain class="ma-2" /></v-col
        ></v-row>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        class="right"
        :order-lg="i % 2 == 0 ? 'first' : null"
      >
        <h1 class="text-h4 mb-4 primary--text">{{ service.heading }}</h1>
        <section v-for="(service, i) in service.children" :key="i" class="mb-4">
          <h2 class="text-button font-weight-bold secondary--text">
            {{ service.subheading }}
          </h2>
          <h3 class="text-body-1">
            {{ service.description }}
          </h3>
        </section>
        <v-row no-gutters justify="center">
          <v-btn to="order" class="ma-1 button-left" light>
            <strong>Place order</strong>
          </v-btn>
          <v-btn to="contact" class="ma-1 button-right" dark
            ><strong>Request quote</strong></v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          heading: 'Brand Identity',
          img: [
            { src: require('@/assets/img/branding.webp') },
            // { src: require('@/assets/img/loader.gif') },
          ],
          children: [
            {
              subheading: 'Logo and Letterhead Designs',
              description: `Signet Logo designs your brand's identity in a way that portrays your brand value. Our creative process helps
              you to reach your specific target audience. A custom letterhead for your stationery comes complementary to the logo design.`,
            },
            {
              subheading: 'Logo Animations',
              description:
                'Animate your logo with our creative ideas. Choose from simple logo reveals to more complex cinematic reveals.',
            },
            {
              subheading: 'Business Cards',
              description: `We insist that "a business card carries the exact weight of a brand". Therefore, we provide a Modern Classic
              design for a business card that amplifies a company's brand value.`,
            },
            {
              subheading: 'Banner Designs',
              description: `Banners are the basic needs for a business to reach out to its customers in offline and digital markets.
              Get a realistic banner design with all the information needed to display.`,
            },
            {
              subheading: 'Stamps',
              description: `Modern Classic stamp designs, created with a mix of creativity and professionalism, let you sign documents in style.`,
            },
            {
              subheading: 'Product Packaging Designs',
              description: `We create designs for the packaging of your product with choices in material, shape, graphics, colours, and fonts used on wrapping.`,
            },
            {
              subheading: 'Mockup Designs',
              description: `The mockup shows what the ultimate design will look like in the real world. Get detailed mockups for your products.`,
            },
            {
              subheading: 'UI-UX Designs',
              description: `For launching a digital application, UI-UX design is a mandatory process. It helps to identify your target demographics
              and design for max conversions.`,
            },
          ],
        },
        {
          heading: 'Artwork & Merchandise',
          img: [{ src: require('@/assets/img/artwork.webp') }],
          children: [
            {
              subheading: 'T-shirt Designs',
              description: `Get a modern classic t-shirt design from our creative team to improve your sales in the digital world.`,
            },
            {
              subheading: 'Album Art Designs',
              description: `Signet Logo creates custom album art designs for the growing artists of different genres.`,
            },
            {
              subheading: 'Custom Poster Designs',
              description: `Get custom-made posters for your events with a high level of detail to highlight your brand values.`,
            },
          ],
        },
        {
          heading: 'Social Media Designs',
          img: [{ src: require('@/assets/img/social.webp') }],
          children: [
            {
              subheading: 'Cover Designs',
              description: `Signet Logo designs eye-catching social media covers for your business.`,
            },
            {
              subheading: 'Animated Posters',
              description: `Motion captures attention, boosting your conversions with our animated posters.`,
            },
            {
              subheading: 'Reels',
              description: `We create modern reels to promote your products and events.`,
            },
            {
              subheading: 'Short Videos',
              description: `Get attractive minimalist video animation related to your Brand/Products of length 15 to 30 seconds.`,
            },
            {
              subheading: 'Posters/Graphics',
              description: `We make creativity and business align with each other with content designed to attract your audience/customer.`,
            },
            {
              subheading: 'Thumbnail Designs',
              description: `Get more views with our Modern Classic thumbnail designs to suit your video channels.`,
            },
          ],
        },
        {
          heading: 'Marketing Designs',
          img: [{ src: require('@/assets/img/marketing.webp') }],
          children: [
            {
              subheading: 'Flyers',
              description: `Customised modern and classic flyer designs make your brand rank at the forefront of your potential audience and customers.
              Reach more customers with our range of designs to meet your business needs.`,
            },
            {
              subheading: 'Brochures',
              description: `We create eye-catchy brochures for your products & services—all the details of your brand in a design suitable for your
              business needs.`,
            },
            {
              subheading: 'Standee Designs',
              description: `Enhance your business or brand events with our customised standee designs. Educate customers and other business entities
              about your brand values at the venue.`,
            },
            {
              subheading: 'Explainer Videos',
              description: `Explainer video ads help you generate an audience for your product and convert them to buyers. We create your Explainer
              videos with a minimalist concept. Create an emotional connection with your
              viewers and customers with a focus on your products and services.`,
            },
            {
              subheading: 'Introductory Videos',
              description: `We will create short Intro videos for your brand, visualising the brand's values. Enhance your brand with our range of innovative introductory videos.`,
            },
            {
              subheading: 'Info-graphics',
              description: `Provide relevant information about your products and services to your target audience. We represent facts and figures with graphics for customers to
              relate more to your business.`,
            },
          ],
        },
      ],
    }
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      const gsap = this.$gsap
      // gsap.registerPlugin(this.$ScrollTrigger)
      // gsap.from('.button-left', {
      //   x: -25,
      //   ease: 'Power3.easeInOut',
      //   duration: 1,
      //   // scrollTrigger: {
      //   //   trigger: '.landing-buttons',
      //   // },
      // })
      // gsap.from('.button-right', {
      //   // ScrollTrigger: {
      //   //   trigger: '.landing-buttons',
      //   // },
      //   ease: 'Power3.easeInOut',
      //   x: 25,
      //   duration: 1,
      // })
      // gsap.from('#services', {
      //   // ScrollTrigger: {
      //   //   trigger: '.landing-buttons',
      //   // },
      //   ease: 'Power3.easeInOut',
      //   y: 25,
      //   duration: 2,
      // })

      // gsap.from('.left', {
      //   // ScrollTrigger: {
      //   //   trigger: '.landing-buttons',
      //   // },
      //   ease: 'Power3.easeInOut',
      //   x: -100,
      //   duration: 2,
      // })
      // gsap.from('.right', {
      //   // ScrollTrigger: {
      //   //   trigger: '.landing-buttons',
      //   // },
      //   ease: 'Power3.easeInOut',
      //   y: 100,
      //   duration: 2,
      // })

      //console.log(gsap)
      // var tmax_optionsGlobal = {
      //   repeat: -1,
      //   repeatDelay: 0,
      //   yoyo: true,
      // }

      //this.$gsap.to(window, { duration: 2, scrollTo: 1000 })
      // this.$gsap.to('.button-left', {
      //   x: -500,
      //   ease: 'Power1.easeInOut',
      //   scrollTrigger: {
      //     trigger: '.landing-buttons',
      //     pin: true,
      //     end: 'bottom',
      //     scrub: true,
      //   },
      // })
      gsap.utils.toArray('.right').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          y: 150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
      gsap.utils.toArray('.left').forEach((demo) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: demo,
            toggleActions: 'restart none none reverse',
            // markers: true,
            start: '-150px center',
          },
        })

        tl.from(demo, {
          x: -150,
          ease: 'Power2.easeInOut',
          duration: 1,
          opacity: 0,
        })
      })
    },
  },
}
</script>

