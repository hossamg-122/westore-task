<template>
  <div id="about">
    <ws-app-bar />
    <!-- HERO -->
    <v-sheet
      class="d-flex flex-column justify-center text-center section section-md"
      color="white"
      light
      elevation="0"
    >
      <v-container>
        <v-row wrap>
          <v-col
            cols="12"
            offset="0"
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2"
          >
            <h1 class="mb-4">
              <ws-gradient-text> THE BETTER WAY </ws-gradient-text>
            </h1>
            <h4 class="mb-4">
              WeStore brings sellers and warehouse owners together – putting
              efficient, on-demand warehousing and delivery at your fingertips.
              It all happens through the WeStore Platform – managing workflows,
              billing and much more. So you can relax and get on with growing
              your business.
            </h4>
            <v-btn
              color="ws-black"
              dark
              @click.native="
                
                globals.interestDialog = false;
                showHideContactsCustom();
              "
            >
              Let's Chat
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- PINK BANNER -->
    <section class="ws-banner ws-banner-pink">
      <v-card flat dark color="transparent">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <h2 class="pb-3">SELLERS</h2>
              <h3 class="flex-grow-1 pb-7">
                Manage and fulfil your inventory from multiple warehouses and
                fulfilment centres across the UAE. Whether you need a little
                space, or a lot, you only pay for what you store, when you store
                it.
              </h3>
              <div>
                <v-btn
                  color="white"
                  light
                  @click="
                    logGAEvent(
                      'Public',
                      'Seller - I need Storage',
                      `Pink Banner`
                    );
                    globals.interestDialog = true;
                  "
                >
                  I NEED STORAGE
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <h2 class="pb-3">WAREHOUSES</h2>
              <h3 class="flex-grow-1 pb-7">
                Capitalise on your unused space and keep it generating income
                throughout the year. The WeStore Platform and Logistics Network
                does all the hard work for you. You just enjoy more business and
                a new revenue stream.
              </h3>
              <div>
                <v-btn
                  color="white"
                  light
                  @click="
                    logGAEvent(
                      'Public',
                      'Warehouse - I have Storage',
                      `Pink Banner`
                    );
                   globals.interestDialog = true;"
                >
                  I HAVE STORAGE
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section>
    <!-- Our Story -->
    <section>
      <v-container class="text-center">
        <h2 class="text-center">
          WHO WE ARE?
          <br />
          <big> Our Story </big>
        </h2>
        <br />
        <v-img
          :src="require('../assets/about-emblem.jpg')"
          width="380"
          class="d-inline-block"
        />
        <v-row>
          <v-col    cols="12"
            offset="0"
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2">
            
            
        <h3>
          We’ve been there, done it, sold the t-shirts – and seen first-hand how
          hard the logistics are. Piles of boxes in the garage. Running out of
          storage space. Delivering every order yourself.
          <!-- <br /> -->
          So WeStore matches the right seller to the right warehouse – based on
          scope and criteria. Everything is managed through WeStore Platform –
          centralising workflows, scheduling deliveries and managing inventory,
          legal agreements and billing.
          <!-- <br /> -->

          <!-- Combined with WeStore’s Logistics Network, it helps businesses focus
          on growth instead of constraints. -->
        </h3>
        </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- What we stand for -->
    <section class="ws-black white--text">
      <v-container>
        <h2 class="text-center text-uppercase">
          <big> What we stand for </big>
        </h2>
        <br />

        <v-row>
          <v-col
            cols="12"
            offset="0"
            md="10"
            offset-md="1"
            xxlg="8"
            xxoffset-lg="2"
          >
            <v-card
              v-for="(val, i) in ourValues"
              :key="val.number"
              class="values-card d-flex flex-row justify-space-around flex-wrap"
              tile
              color="white"
            >
              <div
                class="values-card--number"
                :class="{ 'order-last': i % 2 && $vuetify.breakpoint.mdAndUp }"
              >
                <ws-gradient-text v-text="val.number" />
              </div>
              <div class="values-card--content">
                <h3 class="values-card--title my-3">
                  <ws-gradient-text v-text="val.title" />
                </h3>
                <p
                  class="font-weight-bold values-card--description"
                  v-text="val.description"
                />
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Our Story -->
    <section id="career">
      <v-container class="text-center">
        <v-row>
          <v-col
            cols="12"
            offset="0"
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2"
          >
            <h2 class="text-center">
              <big> Join WeStore </big>
            </h2>
            <br />

            <p class="body-1 font-weight-bold">
              We’re not a warehouse business, we’re a technology business –
              pioneering, reimagining and redefining the way goods flow, so
              business can grow. And we’re always on the look-out for fresh
              thinkers and energetic doers.
            </p>
            <v-btn
              color="accent"
              light
              @click="logGAEvent('About Page', 'Join the team', `Join the team email`)"
              href="mailto:jobs@westore.ai"
            >
              JOIN OUR TEAM
              <v-icon right> mdi-email </v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-img
          eager
          :src="require('../assets/2-Girls.jpg')"
          width="100%"
          class="d-inline-block"
        />
      </v-container>
    </section>
    <!-- ----- -->
    <ws-footer />
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";
import { metadata } from "@/plugins/metadata";

export default mixins(MyMixin).extend({
  name: "About",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.About.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.About.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
   methods:{
    showHideContactsCustom() {
      if (!this.globals.whatsappPopupVisible) {
        this.logGAEvent( 'Let\'s Chat','Whatsapp open', `About Page`);
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    }
  },
  data: () => ({
    ourValues: [
      {
        number: "01",
        title: "People First",
        description:
          "We’re a tech company who puts people at the heart of everything – from our team to our clients and their businesses.",
      },
      {
        number: "02",
        title: "Experience is everything",
        description:
          "Our culture is rooted in providing the best experience possible, to anyone who comes in contact with our brand.",
      },
      {
        number: "03",
        title: "Experimentation is the greatest science",
        description:
          "If we’re not trying new things, we’re not evolving. So our culture is to experiment endlessly, remedy quickly and improve constantly.",
      },
      {
        number: "04",
        title: "Always listening, Always improving",
        description:
          "We’re hungry for insights from our customers, investors and our team – it’s what inspires us to keep learning and growing.",
      },
    ],
  }),
});
</script>

<style lang="scss">
#about {
  .values-card {
    line-height: 1;
    margin-bottom: 3em;
    padding: 3em 5%;
    // & > div {
    //   // padding: 0 1.5em;
    // }
    .values-card--number {
      font-size: 12em;
      font-weight: bold;
      text-align: center;
      width: 35%;
      @media (max-width: 767px) {
        font-size: 9em;
        width: 100%;
      }
    }
    .values-card--content {
      width: 55%;
      @media (max-width: 767px) {
        width: 100%;
      }
      .values-card--title {
        font-size: 2.5em;
        line-height: 1.3;
      }
      .values-card--description {
        font-size: 1.5em;
        line-height: 1.5;
      }
    }
  }
}
</style>
