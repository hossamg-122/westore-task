<template>
  <div id="warehouse">
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
        :position="$vuetify.breakpoint.mdAndUp ? '100% 55%' : 'center center'"
        :src="require('../assets/warehouse/warehouse-banner.webp')"
        xgradient="to right, rgba(12 ,25 ,34, .99),  rgba(12 ,25 ,34, .0)"
        :gradient="
          $vuetify.breakpoint.mdAndUp
            ? 'to right, rgba(12 ,25 ,34, .99),  rgba(12 ,25 ,34, .0)'
            : 'to right, rgba(12 ,25 ,34, .7),  rgba(12 ,25 ,34, .7)'
        "
        class="flex-grow section-md"
      >
        <v-container class="py-14">
          <v-row wrap>
            <v-col cols="12" md="5" xlg="4">
              <h1>
                <ws-gradient-text>
                  TURN DEAD SPACE INTO LIVE INCOME
                </ws-gradient-text>
              </h1>

              <p class="body-1 font-weight-bold my-6">
                If you run a warehouse with spare storage and fulfilment
                capacity, WeStore would love to work with you. We’ll match you
                with suitable sellers, helping you generate additional earnings
                and grow your business.
              </p>

              <div>
                <v-btn
                  light
                  color="white"
                  class="mr-3"
                  @click="$vuetify.goTo('#list-your-warehouse')"
                >
                  List your warehouse
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-img>
    </v-sheet>
    <!-- How it works -->
    <section class="ws-black white--text section-lg">
      <v-container>
        <h2 class="text-center">
          <big> How it Works? </big>
        </h2>
        <br />
        <v-row>
          <v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
            <p class="body-1 font-weight-bold text-center">
              We’re behind you all the way. Everything’s handled through the
              WeStore Platform – centralising workflows for scheduling pickups
              through our logistics network, managing inventory, and processing
              legal agreements and billing. So we do the heavy lifting, you
              enjoy the extra business.
            </p>
          </v-col>
          <!-- list -->
          <v-col
            cols="12"
            md="4"
            class="text-center px-6"
            v-for="item in howItWorks"
            :key="item.title"
          >
            <h3 class="primary--text" v-text="item.title" />

            <v-img eager class="my-4" contain :src="item.iconUrl" height="90" />
            <p
              class="body-1 font-weight-bold text-center"
              v-text="item.description"
            />
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn
              class="ws-black--text"
              color="accent"
              @click="$vuetify.goTo('#list-your-warehouse')"
            >
              Become a Partner
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <!-- Solving the hassles -->
    <section class="section-lg">
      <v-container>
        <h2 class="text-center nerrow-lines mb-12">
          <!-- <br /> -->
          <big> WeStore Benefits </big>
        </h2>
        <br />
        <v-row
          :class="{ 'ws-odd-row': i % 2 }"
          v-for="(sd, i) in storageDelivery"
          :key="i"
        >
          <v-col cols="12" md="6" class="pa-0">
            <v-img eager :src="sd.imageUrl"> </v-img>
          </v-col>

          <v-col cols="12" md="6" class="d-flex flex-column justify-center">
            <p
              class="body-1 font-weight-bold"
              v-if="sd.pretext"
              v-html="sd.pretext"
            />

            <h2 class="nerrow-lines">
              {{ sd.title[0] }}
              <ws-gradient-text>
                <span v-html="sd.title[1]" />
              </ws-gradient-text>
              {{ sd.title[2] }}
            </h2>

            <p class="body-1 font-weight-bold" v-html="sd.description" />

            <div>
              <v-btn
                small
                color="accent"
                text
                @click.native="
                  logGAEvent('Let\'s Chat', 'Whatsapp open', `Warehouse Page`);
                  showHideContactsCustom();
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

    <!-- form -->
    <section
      class="white--text ws-banner ws-banner-pink section-lg"
      id="list-your-warehouse"
    >
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <h2 class="mb-6">
              <big> We Store. You Grow. </big>
            </h2>
            <h3 class="mb-5">
              Partner up with WeStore and tell us about your business.
            </h3>
            <v-list dense class="transparent" dark>
              <v-list-item
                v-for="p in [
                  'Optimise unused space',
                  'Introduce new revenue streams',
                  'No long-term commitments',
                ]"
                :key="p"
              >
                <v-list-item-icon>
                  <v-icon color="white">mdi-check-circle-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <span class="body-1 font-weight-bold gray-text" v-html="p" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="12" md="6" lg="4" offset-lg="1">
            <ws-common-form
              title="Get a Call"
              title-color="primary"
              color="white"
              light
              comments-label="Comments / Questions"
              submit-color="ws-green"
              form-type="Vendor Interest"
            />
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- ---------------------------- -->
    <ws-footer />
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";
import { metadata } from "@/plugins/metadata";

export default mixins(MyMixin).extend({
  name: "Warehouse",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.Warehouse.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.Warehouse.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
  methods: {
    showHideContactsCustom() {
      if (this.globals.whatsappPopupVisible) {
        this.logGAEvent("Let's Chat", "Whatsapp open", `Warehouse Page`);
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    },
  },
  data: () => ({
    howItWorks: [
      {
        title: "Sign Up",
        iconUrl: require("../assets/warehouse/hiw-01.png"),
        description: "Partner with WeStore and tell us about your business",
      },
      {
        title: "Accept New Sellers",
        iconUrl: require("../assets/warehouse/hiw-02.png"),
        description: "Rent as much space as you want, for as long as you want",
      },
      {
        title: "Get Paid",
        iconUrl: require("../assets/warehouse/hiw-03.png"),
        description: "Get your extra income at the end of each month",
      },
    ],
    //     Optimise space.
    // Maximize income
    storageDelivery: [
      {
        pretext: "",
        title: ["", "Optimise Space<br>Maximize Income", ""],
        description:
          "Dead space isn’t just a monthly expense, it’s lost income. By helping our partners continually fill their space, we provide a vital source of revenue – which gives you the confidence to grow.",
        imageUrl: require("../assets/warehouse/ben-01.jpg"),
      },
      {
        pretext: "",
        title: ["", "Unlimited<br>Flexibility ", ""],
        description:
          "Rent as much space as you want, for as long as you want – adding more or less on an ongoing basis, to suit your business. All we ask is reliability in fulfilling your commitments.",
        imageUrl: require("../assets/warehouse/ben-02.jpg"),
      },
      {
        pretext: "",
        title: ["", "On-Time<br>Payments", ""],
        description:
          "Instead of traditional cheque payments, our sellers pay us monthly via pre-checked bank or credit card details. The WeStore Platform then automates electronic payments to you – on time, every month.",
        imageUrl: require("../assets/warehouse/ben-03.jpg"),
      },
      {
        pretext: "",
        title: ["", "WeStore<br>Certification ", ""],
        description:
          "Not anyone can become a WeStore Partner. To guarantee a reliable service, our extensive vetting process and ongoing metrics tracking ensures your facility and service meets our high standards. Which is the ultimate proof of quality.",
        imageUrl: require("../assets/warehouse/ben-04.jpg"),
      },
    ],
  }),
});
</script>

<style></style>
