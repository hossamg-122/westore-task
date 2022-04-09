<template>
  <div id="home">
    <ws-app-bar dark />
    <!-- HERO -->
    <v-sheet
      class="d-flex flex-column justify-space-between"
      color="ws-black"
      dark
      elevation="0"
    >
      <v-img
        eager
        aspect-ratio="4"
        :position="$vuetify.breakpoint.mdAndUp ? '100% 20%' : 'center center'"
        :src="require('../assets/home-hero.jpg')"
        xgradient="to right, rgba(12 ,25 ,34, .99),  rgba(12 ,25 ,34, .0)"
        :gradient="
          $vuetify.breakpoint.mdAndUp
            ? 'to right, rgba(12 ,25 ,34, .99),  rgba(12 ,25 ,34, .0)'
            : 'to right, rgba(12 ,25 ,34, .7),  rgba(12 ,25 ,34, .7)'
        "
        class="flex-grow section-lg"
        :min-height="
          $vuetify.breakpoint.smAndDown
            ? 'Calc(100vh - 56px)'
            : 'Calc(100vh - 63px)'
        "
      >
        <v-container class="fill-height">
          <v-row wrap>
            <v-col cols="12" md="5" xlg="4">
              <h1 class="nerrow-lines">
                <!-- <big> -->
                <ws-gradient-text>
                  EASY, ON-DEMAND WAREHOUSING AND DELIVERY
                </ws-gradient-text>
                <!-- </big> -->
              </h1>

              <p class="body-1 font-weight-bold my-7">
                Flexible storage and fulfillment on a monthly basis for
                ecommerce, B2B and B2C.
              </p>

              <div>
                <v-btn
                  light
                  color="white"
                  class="mr-3"
                  @click="logGAEvent('Public', 'Get a Quote', 'Black Heading');
                  $vuetify.goTo('#get-a-call');"
                  
                >
                  Get a Quote
                </v-btn>
                <v-btn
                  light
                  color="white"
                  outlined
                  xhref="#get-a-call"
                  @click.native="
                    
                    showHideContactsCustom();
                  "
                >
                  Let's Chat
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" offset-md="3" md="4" xlg="4">
              <!-- <ws-common-form
                title="Get a Call"
                title-color="primary"
                color="white"
                light
                comments-label="Comments / Questions"
                submit-color="ws-green"
                form-type="Customer Interest"
              /> -->
            </v-col>
          </v-row>
        </v-container>
      </v-img>
      <!-- PINK BANNER -->
      <section class="ws-banner ws-banner-pink section-lg" id="get-a-call">
        <v-container>
          <v-row class="align-center">
            <v-col cols="12" md="6">
              <h2>E-commerce fulfillment center in UAE</h2>

              <v-list dense class="transparent">
                <v-list-item
                  v-for="p in [
                    'Pick, pack, label and delivery',
                    'No long-term agreement',
                    'E-commerce, B2B, B2C fulfillment',
                  ]"
                  :key="p"
                >
                  <v-list-item-icon>
                    <v-icon color="white">mdi-check-circle-outline</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <span
                      class="body-1 font-weight-bold gray-text"
                      v-html="p"
                    />
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <!-- <h2>The Better Way</h2>
              <p class="body-1 font-weight-bold">
                Only pay for the space you use. No long-term contracts.
              </p> -->
              <!-- <v-btn
                light
                color="white"
                class="hidden-sm-and-down"
                href="#get-a-call"
                @click="logGAEvent('Public', 'Let\'s Chat', 'Pink Banner')"
              >
                Let's Chat
              </v-btn> -->

              <!-- <v-btn
                dark
                block
                color="whatsapp-green"
                class="hidden-md-and-up"
                :href="globals.contactPoints.phone.hrefWhatsapp"
                @click="logGAEvent('Public', 'Let\'s Chat (W)', 'Pink Banner')"
              >
                Let's Chat
                <v-icon right>mdi-whatsapp</v-icon>
              </v-btn> -->
            </v-col>
            <v-col cols="12" md="6" lg="4" offset-lg="1">
              <ws-common-form
                title="Get a Quote"
                title-color="primary"
                color="white"
                light
                comments-label="Comments / Questions (Optional)"
                submit-color="ws-green"
                form-type="Customer Interest"
              />
            </v-col>
          </v-row>
        </v-container>
      </section>
    </v-sheet>
    <!-- Solving the hassles -->
    <section class="section-lg">
      <v-container>
        <h2 class="text-center mb-12 nerrow-lines">
          Solving the hassles of your <br />
          <big> storage and delivery</big>
        </h2>
      
        <v-row
          :class="{ 'ws-odd-row': i % 2 }"
          v-for="(sd, i) in storageDelivery"
          :key="i"
        >
          <v-col cols="12" md="6" class="pa-0">
            <v-img eager :src="sd.imageUrl"> </v-img>
          </v-col>

          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <p class="body-1 font-weight-bold" v-html="sd.pretext" />

            <h2 class="nerrow-lines">
              <div v-text="sd.title[0]" />
              <ws-gradient-text> {{ sd.title[1] }} </ws-gradient-text>
              <div v-text="sd.title[2]" />
            </h2>

            <p class="mt-3 body-1 font-weight-bold" v-html="sd.text" />

            <div>
              <v-btn
                small
                color="accent"
                text
                xhref="#get-a-call"
                @click="
                  logGAEvent(
                    'Public',
                    'Let\'s Chat',
                    `storage and delivery (${sd.title[1].trim()})`
                  );
                  $vuetify.goTo('#get-a-call');
                "
              >
                Let's Chat
                <v-icon small>mdi-arrow-right</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- How it works? -->
    <section class="ws-black white--text section-md">
      <v-container>
        <h2 class="text-center">
          How it works?
          <!-- <br />
          <big> We Store. You Grow </big> -->
        </h2>
        <br />

        <v-row>
          <v-col
            cols="12"
            md="4"
            class="text-center"
            v-for="(item, i) in howItWorks"
            :key="i"
          >
            <div class="hiw-num mb-2">{{ i + 1 }}</div>
            <h3 class="mb-2" v-text="item.title" />
            <p class="body-1 font-weight-bold" v-html="item.description" />
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn color="white" @click="$vuetify.goTo('#get-a-call');">
              Get a Quote
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>

 <!-- Capabilities 3+-->
    <section class="ws-banner ws-banner-pink white--text xsection-lg">
      <v-container>
        <h2 class="text-center">
          Our easy, affordable, omnichannel
          <br />
          <big> Warehousing and Delivery Capabilities </big>
        </h2>
        <br />
        <v-row>
          <v-col cols="12"  >
               <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    md="6"
                    v-for="item in warehouseFeatures"
                    :key="item.title"
                  >
                    <v-card outlined xcolor="transparent" class="features-card">
                      <v-card-text
                        class="text-center ws-black--text body-1 font-weight-bold"
                        v-html="item.title"
                      />
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
          </v-col>

     
        </v-row>
      </v-container>
    </section>
  
    <!-- ---------------------------- -->
    <ws-footer dark />
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";
import { metadata } from "@/plugins/metadata";

export default mixins(MyMixin).extend({
  name: "Home",
  mounted() {
    this.trackMyPageView();
    this.$nextTick(() => {
      // this.currentCapability = this.warehouseFeatures[0];
    });
  },
  metaInfo: {
    title: metadata.Home.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.Home.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
  data: () => ({
    storageDelivery: [
      {
        pretext:
          "Tired of living with boxes?<br>Don’t want to be tied down by expensive long-term warehouse contracts?",
        title: ["Ultra-flexible, ", "on-demand ", "warehousing"],
        text: "We provide operations and logistics for small, medium and ecommerce businesses. Store a little or a lot – and only pay for the space and time you need.",
        imageUrl: require("@/assets/Ultra-Flexible-1536x958.jpg.webp"),
      },
      {
        pretext:
          "Frustrated with driving back and forth, cramming your car full of boxes, or paying expensive couriers?",
        title: ["Hassle-free, ", "same-day ", "delivery "],
        text: "We offer simple pricing, same day delivery and end to end fulfillment solutions.",
        imageUrl: require("@/assets/Hassle-free-2-1536x970.jpg.webp"),
      },
      {
        pretext: "Wasting time and money on managing cancellations or returns?",
        title: ["Fast, ", "cost-effective ", "returns"],
        text: "Through our extensive network, we’ve got it sorted. No hassle. No financial headache.",
        imageUrl: require("@/assets/Fast-cost-effective.jpg"),
      },
    ],
    howItWorks: [
      {
        title: "Easy",
        description:
          "Get in touch, tell us your business needs and we’ll have your items stored in one of our warehouses across the UAE.",
      },
      {
        title: "On-demand",
        description:
          "Securely store your products for however long you need. Cancel anytime or request more space – and only ever pay for what you use.",
      },
      {
        title: "Warehousing, delivery and more",
        description:
          "We’ve got your back with seamless, reliable logistics – from picking to packing, delivery to returns. We’ll even handle fragile goods and customized packages.",
      },
    ],
    currentCapability: {} as { title: string; description: string },
    warehouseFeatures: [
      {
        title: "Network of Warehouses",
        description: [
          "Take advantage of our extensive distribution network for product deliveries to your customer.",
        ],
      },
      {
        title: "No IT Integration Required",
        description: [
          "No need to overload your business with extra cost of buying a software and integrations with your service provider.",
        ],
      },
      {
        title: "Case Picking",
        description: ["Picking entire cases of product to fulfil orders."],
      },
      {
        title: "Pick, Pack and Kitting",
        description: [
          "The operations team will be more productive and hit efficiency targets as well as ensure the customers’ order is picked and packed as quickly as possible.",
          "Make promotions to your clients and let us prepare the bundles of your clients for you.",
        ],
      },
      {
        title: "Cross-Docking",
        description: [
          "A model that involves immediate or faster transfer of finished goods directly from suppliers or manufacturers to customers or retailers with little to no handling or storage.",
        ],
      },
      {
        title: "Shipment Consolidation",
        description: [
          "Gather multiple items in one shipment to your client’s.",
        ],
      },
      {
        title: "Fulfilment",
        description: [
          "E-commerce fulfillment services cover the complete process from when a sale takes place, all the way through delivery to your customer in a digital way.",
        ],
      },
      {
        title: "Non-Palletized & Palletized Storage",
        description: [
          "On a pallet or just boxes? Doesn’t matter we will store it for you.",
        ],
      },
      // {
      //   title: "Pallet Rebuild",
      //   description: [
      //     "Your inventory imported as boxes? No worries, WeStore will build a pallet with all safety requirements.",
      //   ],
      // },
      {
        title: "Multiple Stocking Locations",
        description: [
          "Smart, multi-location functionality helps ensure you have optimal levels of the right stock in the right location, every time.",
        ],
      },
      {
        title: "Labelling / Barcoding",
        description: [
          "Ability to track materials from manufacturing, through distribution, to the end user and manage you inventory in an efficient way to reduce waste.",
        ],
      },
      {
        title: "Custom Services",
        description: [
          "Leave the preparation and submission of documentations required to facilitate your exports or imports.",
        ],
      },
      {
        title: "B2B and B2C Distribution",
        description: [
          "Do you sell to another companies (B2B), or you sell to end users (B2C)?",
          "WeStore will fulfill your orders in both cases.",
        ],
      },
    ],
    featureCardVisible: true,
  }),
  watch: {
    currentCapability(newVal: any) {
      this.featureCardVisible = false;
      setTimeout(() => {
        this.featureCardVisible = true;
      }, 150);
    },
  },
  methods:{
    showHideContactsCustom() {
      if (!this.globals.whatsappPopupVisible) {
        this.logGAEvent( 'Let\'s Chat','Whatsapp open', `Home Page`);
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    }
  }
});
</script>

<style lang="scss">
#home {
  .hiw-num {
    background-color: var(--v-primary-base);
    color: white;
    font-size: 2em;
    display: inline-block;
    width: 2.7em;
    height: 2.7em;
    padding: 0.8em;
    line-height: 1;
    border-radius: 5em;
    font-weight: bold;
  }
  .features-card {
    background: rgba(255, 255, 255, 0.7);

    box-shadow: 0 0 3px white;
    border: 1px solid white;
  }
}
</style>
