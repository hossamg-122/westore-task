<template>
  <div id="services">
    <ws-app-bar dark />
    <!-- HERO -->
    <v-sheet class="section section-md" color="ws-black" dark elevation="0">
      <v-container>
        <v-row wrap>
          <v-col
            cols="12"
            offset="0"
            md="10"
            offset-md="1"
            lg="8"
            offset-lg="2"
            class="text-center"
          >
            <h1 class="mb-4">
              <ws-gradient-text>
                SAY GOODBYE TO HASSLE. <br />
                SAY HELLO TO WESTORE.
              </ws-gradient-text>
            </h1>
            <h4 class="mb-4">
              Our comprehensive storage and delivery services put convenience
              and growth at your fingertips – saving you piling up your home
              with boxes and wasting hours of back & forth in the car. And with
              automated billing and paperwork, you can focus on your next big
              venture.
            </h4>
            <v-btn
              color="white"
              light
              @click.native="logGAEvent('Public', 'Get a Quote', `Black Heading`);
              globals.showGetQuote=true"
            >
              Get a Quote
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- Services -->
    <section class="section-lg">
      <v-container class="pa-0">
        <!-- :class="{ 'ws-odd-row': i % 2 }" -->
        <div
          class="service-row-wrapper"
          v-for="(si, i) in servicesItems"
          :key="i"
          :id="si.id"
        >
          <!-- T - D -->
          <div class="service-row hidden-sm-and-down">
            <v-img eager :src="si.imageUrl" max-width="80%" width="80%" />

            <div class="service-row--info-card ws--color-box">
              <div>
                <h3>
                  <ws-gradient-text v-text="si.title" />
                </h3>
                <p class="body-1 font-weight-bold" v-text="si.description" />

                <div class="service-row--info-card--action-bar">
                  <v-btn
                    outlined
                    color="primary"
                    @click.native="
                      
                     showHideContactsCustom();
                    "
                  >
                    Let's Chat
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <!-- M -->
          <div class="service-row-mobile hidden-md-and-up">
            <v-img
              eager
              :src="si.imageUrlMobile"
              v-if="si.imageUrlMobile"
              max-width="100%"
            />
            <br v-if="si.imageUrlMobile" />
            <h3>
              <ws-gradient-text v-text="si.title" />
            </h3>
            <p class="body-1 font-weight-bold" v-text="si.description" />

            <div class="service-row--info-card--action-bar">
              <v-btn
                outlined
                small
                color="primary"
                @click.native="
                 
                 showHideContactsCustom();
                "
              >
                Let's Chat
              </v-btn>
            </div>
          </div>
        </div>
      </v-container>
    </section>

    <!-- form -->
    <!-- <v-img eager :src="require('../assets/Gradient-light-scaled.jpg')"> -->
    <section
      class="ws-banner ws-banner-pink section-lg white--text"
      id="interest"
    >
      <v-container dark>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="mb-6">
              <big>
                We Store.<br />
                You Grow.
              </big>
            </h2>
            <h3 class="mb-5">
              Solving the hassles of your storage and delivery.
            </h3>
            <h4>We will do the heavy lifting for you!</h4>
          </v-col>

          <v-col cols="12" md="6" lg="4" offset-lg="1">
            <ws-common-form
              title="Get a Call"
              title-color="primary"
              color="white"
              light
              comments-label="Comments / Questions"
              submit-color="ws-green"
              form-type="Customer Interest"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- </v-img> -->
    <!-- ---------------------------- -->
    <ws-footer />
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";
import { metadata } from "@/plugins/metadata";

export default mixins(MyMixin).extend({
  name: "Services",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.Services.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.Services.description,
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
        this.logGAEvent( 'Let\'s Chat','Whatsapp open', `Services Page`);
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    }
  },
  data: () => ({
    servicesItems: [
      {
        id: "storage",
        title: "Storage",
        description:
          "WeStore quickly matches you to relevant, carefully-vetted warehousing facilities across the UAE – providing as much space as you need, for as long as you want. For incoming goods, we can provide additional services such as customs clearance and quality checking.",
        imageUrl: require("../assets/services/srv1.jpg"),
        imageUrlMobile: require("../assets/services/srv1m.png"),
      },
      {
        id: "fulfillment",
        title: "Fulfillment",
        description:
          "WeStore partners are trained and equipped to pick, pack, label and ready for delivery. Our ultra-reliable WM systems ensure 99.9% accuracy.",
        imageUrl: require("../assets/services/srv2.jpg"),
        imageUrlMobile: null,
      },
      {
        id: "delivery",
        title: "Delivery",
        description:
          "WeStore Logistics partners are ready to provide cost-effective, same-day delivery throughout the UAE, as well as reliable overseas shipping. We can even handle fragile goods and customised parcels and messages.",
        imageUrl: require("../assets/services/srv3.jpg"),
        imageUrlMobile: require("../assets/services/srv3m.png"),
      },
      {
        id: "returns",
        title: "Returns",
        description:
          "Saving time and hassle, we provide a fast, efficient service – collecting, processing and quality checking your returned goods.",
        imageUrl: require("../assets/services/srv4.jpg"),
        imageUrlMobile: null,
      },
      {
        id: "customer-service",
        title: "Customer Service",
        description:
          "WeStore has your back and aims to deliver a seamless experience, every time. Our team is on hand to help with any queries or problems – and we truly value our customers’ feedback to help us improve.",
        imageUrl: require("../assets/services/srv5.jpg"),
        imageUrlMobile: require("../assets/services/srv5m.png"),
      },
    ],
  }),
});
</script>

<style lang="scss">
#services {
  .service-row-wrapper {
    .service-row {
      margin-bottom: 2em;
      position: relative;
      display: flex;
      .service-row--info-card {
        position: absolute;
        width: 50%;
        top: 20%;
      }
    }
    &:nth-child(odd) {
      .service-row {
        flex-direction: row;
        .service-row--info-card {
          right: 0;
          text-align: start;
          .service-row--info-card--action-bar {
            text-align: end;
          }
        }
      }
    }
    &:nth-child(even) {
      .service-row {
        flex-direction: row-reverse;
        .service-row--info-card {
          left: 0;
          text-align: end;
          .service-row--info-card--action-bar {
            text-align: start;
          }
        }
      }
    }

    // mobile
    .service-row-mobile {
      text-align: center;
      padding: 20px;
      padding-top: 0;

      // .service-row--info-card--action-bar {
      //   text-al
      // }
    }
  }
}
</style>
