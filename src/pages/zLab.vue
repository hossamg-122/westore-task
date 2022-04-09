<template>
  <div>
  <!-- HERO -->

    <div
      class="fill-height ws-banner ws-banner-warehouse section section-md white--text"
      xcolor="ws-black"
      light
      elevation="0"
    >
      <v-container>
        <!-- <div class="hanging-box"> -->
        <!-- </div> -->
        <v-row>
          <v-col cols="12" md="6" lg="5" class="hanging-box-background">
            <h1>
              <ws-gradient-text>
                TURN DEAD SPACE INTO LIVE INCOME
              </ws-gradient-text>
            </h1>

            <p class="body-1 font-weight-bold my-6">
              If you run a warehouse with spare storage and fulfilment capacity,
              WeStore would love to work with you. We’ll match you with suitable
              sellers, helping you generate additional earnings and grow your
              business.
            </p>

            <div>
              <v-btn
                light
                color="white"
                class="mr-3"
                @click="
                  logGAEvent('Public', 'Get a Quote', `Black Heading`);
                  $vuetify.goTo('#list-your-warehouse');
                "
              >
                List your warehouse
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
        <!-- form -->
    <section id="get-a-call">
      <v-img eager dark :src="require('../assets/Heavy-lifting-scaled.jpg')">
        <v-container>
          <v-row>
            <v-col cols="6">
              <h2 xclass="text-center">
                <big> Solving the hassles of your storage and delivery. </big>
              </h2>
              <h3>We will do the heavy lifting for you!</h3>
            </v-col>

            <v-col cols="4">
              <ws-common-form
                title="Get a Call"
                title-color="primary"
                color="secondary"
                dark
                comments-label="Comments / Questions"
                submit-color="accent"
                form-type="Customer Interest"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </section>
    <!-- Solving the hassles -->
    <section>
      <v-container>
        <h2 class="text-center">
          Solving the hassles of your <br />
          <big> storage and delivery</big>
        </h2>
        <br />
        <v-row>
          <v-col
            v-for="(sd, i) in storageDelivery"
            :key="i"
            cols="12"
            md="4"
            xclass="d-flex flex-column justify-center"
          >
            <p
              style="height: 4em"
              class="body-2 font-weight-bold"
              v-html="sd.pretext"
            />
            <v-img eager max-height="220px" :src="sd.imageUrl"></v-img>
            <h2>
              {{ sd.title[0] }}
              <ws-gradient-text> {{ sd.title[1] }} </ws-gradient-text>
              {{ sd.title[2] }}
            </h2>

            <p class="body-1 font-weight-bold" v-html="sd.text" />

            <div>
              <v-btn
                small
                color="success"
                text
                xhref="#get-a-call"
                @click.native="
                  logGAEvent(
                    'Public',
                    'Let\'s Chat',
                    `storage and delivery (${sd.title[1].trim()})`
                  );
                  showHideContacts();
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
    <!-- Solving the hassles -->
    <section>
      <v-container>
        <h2 class="text-center">
          Solving the hassles of your <br />
          <big> storage and delivery</big>
        </h2>
        <br />
        <v-row>
          <v-col
            v-for="(sd, i) in storageDelivery"
            :key="i"
            cols="12"
            md="4"
            class="d-flex flex-column"
          >
            <p
              style="height: 4em"
              class="body-2 font-weight-bold"
              v-html="sd.pretext"
            />
            <v-img eager max-height="220px" :src="sd.imageUrl">
              <h1 class="title-glow">
                {{ sd.title[0] }}
                <ws-gradient-text> {{ sd.title[1] }} </ws-gradient-text>
                {{ sd.title[2] }}
              </h1>
            </v-img>

            <p
              style="flex: 1"
              class="body-1 font-weight-bold"
              v-html="sd.text"
            />

            <div class="text-right">
              <v-btn
                small
                color="success"
                text
                xhref="#get-a-call"
                @click.native="
                  logGAEvent(
                    'Public',
                    'Let\'s Chat',
                    `storage and delivery (${sd.title[1].trim()})`
                  );
                 showHideContacts();
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

    <!-- ## CONTACT -->

    <!-- PINK BANNER -->
    <section class="ws-banner ws-banner-pink">
      <v-card flat dark color="transparent text-center">
        <v-container>
          <v-row>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <h2 class="pb-3">Sales</h2>
              <h3 class="flex-grow-1 pb-7">
                Get in touch with our Sales team to see how we can work
                together.
              </h3>
              <div>
                <v-btn color="white" light> +971 58 5466311 </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="d-flex flex-column">
              <h2 class="pb-3">Support</h2>
              <h3 class="flex-grow-1 pb-7">
                Our Support team is eager to listen and answer any questions you
                may have.
              </h3>
              <div>
                <v-btn color="white" light>I SEND an Email</v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section>
    <!-- Form -->
    <section>
      <v-container class="text-center">
        <v-row>
          <v-col
            cols="12"
            offset="0"
            md="10"
            offset-md="1"
            lg="6"
            offset-lg="3"
          >
            <ws-common-form
              title="Contact Us"
              title-color="primary"
              color="white"
              light
              comments-label="Message"
              subtitle="Enter your details and we’ll get back to you shortly."
              submit-color="accent"
              form-type="Contact Form"
            />

            <ws-common-form
              title="Contact Us"
              title-color="white"
              color="primary"
              dark
              comments-label="Message"
              xcommentsLabel="Message"
              subtitle="Enter your details and we’ll get back to you shortly."
              submit-color="accent"
              form-type="Contact Form"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- HQ -->
    <section>
      <v-container class="text-center">
        <v-container class="text-center">
          <h2 class="text-center">
            <big> Connect with our Headquarters </big>
          </h2>
          <br />

          <v-row>
            <v-col cols="12" md="6">
              <v-img :src="require('../assets/dubai-szr.jpg')" width="100%" />
            </v-col>
            <v-col cols="12" md="4" offset-md="1" class="text-center">
              <!-- Address -->
              <h3 class="accent--text mb-2">Address</h3>
              <p class="body-2 font-weight-bold mb-4">
                30th floor, Office 30-11, Reef Tower <br />
                Jumeirah Lakes Towers <br />
                Dubai, UAE
                <v-btn
                  icon
                  color="primary"
                  small
                  :href="globals.contactPoints.stAddress.href"
                >
                  <v-icon small v-text="globals.contactPoints.stAddress.icon" />
                </v-btn>
              </p>
              <!-- Phone -->
              <h3 class="accent--text mb-2">Phone / WhatsApp</h3>
              <p class="body-2 font-weight-bold mb-4">
                {{ globals.contactPoints.phone.text }}
                <v-btn
                  icon
                  color="primary"
                  small
                  :href="globals.contactPoints.phone.href"
                >
                  <v-icon small v-text="globals.contactPoints.phone.icon" />
                </v-btn>
                <v-btn
                  icon
                  color="#2db742"
                  small
                  :href="globals.contactPoints.phone.hrefWhatsapp"
                >
                  <v-icon
                    small
                    v-text="globals.contactPoints.phone.iconWhatsapp"
                  />
                </v-btn>
              </p>
              <!-- Email -->
              <h3 class="accent--text mb-2">Email</h3>
              <p class="body-2 font-weight-bold mb-4">
                {{ globals.contactPoints.email.text }}
                <v-btn
                  icon
                  color="primary"
                  small
                  :href="globals.contactPoints.email.href"
                >
                  <v-icon small v-text="globals.contactPoints.email.icon" />
                </v-btn>
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </section>

    <!-- Capabilities 3-->
    <!-- <section class="ws-banner ws-banner-pink white--text xsection-lg">
      <v-container>
        <h2 class="text-center">
          Our easy, affordable, omnichannel
          <br />
          <big> Warehousing and Delivery Capabilities </big>
        </h2>
        <br />
        <v-row>
          <v-col cols="12" md="6" lg="7">
            <v-chip-group
              center-active
              active-class="accent--text"
              :show-arrows="$vuetify.breakpoint.smAndDown"
              :column="$vuetify.breakpoint.mdAndUp"
              v-model="currentCapability"
              mandatory
            >
              <v-chip
                v-for="item in warehouseFeatures"
                :key="item.title"
                :value="item"
                :small="$vuetify.breakpoint.smAndDown"
                class="ma-2"
                xclose
                @click="1 == 1"
                xoutlined
                dark
                color="ws-black lighten-1"
              >
                {{ item.title }}
              </v-chip>
            </v-chip-group>
          </v-col>

          <v-col cols="12" md="6" lg="5">
            <v-fade-transition>
              <v-card
                dark
                color="ws-black"
                elevation="10"
                v-if="featureCardVisible"
              >
                <v-card-title
                  class="font-weight-bold"
                  v-text="currentCapability.title"
                />
                <v-card-text>
                  <p
                    class="body-1 xfont-weight-bold"
                    v-for="(d, i) in currentCapability.description"
                    :key="i"
                    v-text="d"
                  />
                </v-card-text>
              </v-card>
            </v-fade-transition>

           
          </v-col>
        </v-row>
      </v-container>
    </section>
    <br /> -->

    <!-- Capabilities 2-->
    <!-- <section>
      <v-container>
        <h2 class="text-center">
          Our easy, affordable, omnichannel
          <br />
          <big> Warehousing and Delivery Capabilities </big>
        </h2>
        <br />
        <v-row>
          <v-col cols="12" xclass="d-flex flex-column">
            <v-img
              eager
              class="elevation-10 pa-5"
              :src="require('../assets/Pink-Gradient-Plus.jpg')"
              xgradient="to right,  rgba(255, 255, 255, .9), rgba(0,0,0, .4)"
            >
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
            </v-img>
          </v-col>
        </v-row>
      </v-container>
    </section> -->

    <br />
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";

export default mixins(MyMixin).extend({
  name: "zLab",
   methods:{
    showHideContacts() {
      if (this.globals.whatsappPopupVisible) {
        this.logGAEvent("Public", "Open WhatsApp Widget");
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    }
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
    warehouseFeatures: [
      "Network of warehouses",
      "No IT integration required",
      "Case Picking",
      "Pick & Pack/Kitting",
      "Cross-Docking",
      "Shipment Consolidation",
      "Transloading",
      "Fulfilment",
      "Non-palletized & palletized storage",
      "Palletization & Pallet Rebuild",
      "Forward Stocking Locations",
      "Labeling / barcoding",
      "Custom Services",
      "B2B and B2C Distribution",
      "Order Management",
    ],
  }),
});
</script>
