<template>
  <div id="help">
    <ws-app-bar />
    <!-- HERO -->
    <v-sheet
      class="d-flex flex-column justify-center text-center section"
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
              <ws-gradient-text> HELP CENTER </ws-gradient-text>
            </h1>
            <!-- <h2 class="mb-4">
              WeStore has your back and aims to deliver a seamless experience,
              every time. Our team is on hand to help with any queries or
              problems – and we truly value our customers’ feedback to help us
              improve.
            </h2> -->
            <p class="body-1 font-weight-bold xmb-4">
              WeStore has your back and aims to deliver a seamless experience,
              every time. Our team is on hand to help with any queries or
              problems – and we truly value our customers’ feedback to help us
              improve.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!-- PINK BANNER -->
    <section class="ws-banner ws-banner-pink">
      <v-card flat dark color="transparent" height="140px">
        <v-container>
          <v-row>
            <v-col> </v-col>
          </v-row>
        </v-container>
      </v-card>
    </section>
    <!-- Our Story -->
    <section class="section-md" style="margin-top: -190px">
      <v-container class="text-center">
        <v-row>
          <v-col
            cols="12"
            md="6"
            xlg="4"
            xoffset-lg="1"
            v-for="(card, i) in cards"
            :key="i"
          >
            <v-card
              shaped
              elevation="10"
              class="d-flex flex-column pa-7 fill-height"
              :class="[{ 'mx-16': $vuetify.breakpoint.lgAndUp }]"
            >
              <h2 v-text="card.title" />
              <p class="body-2 font-weight-bold" v-text="card.description" />
              <v-spacer />
              <div>
                <v-btn
                  color="primary"
                  outlined
                  @click="logGAEvent('Public', card.btn.text, card.title)"
                  :to="card.btn.to"
                >
                  {{ card.btn.text }}
                </v-btn>
              </div>
            </v-card>
          </v-col>
        </v-row>
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
  name: "Help",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.Help.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.Help.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
  data: () => ({
    cards: [
      {
        title: "FAQs",
        description:
          "Find answers to the most common questions here, or click over to Customer Support for additional help guides or to create a ticket.",
        btn: { text: "Read More", to: { name: "FAQs" } },
      },

      {
        title: "Customer Support",
        description:
          "Sometimes you need a little help from your friends. Get in touch with our Customer Support team.",
        btn: { text: "Contact Us", to: { name: "Contact" } },
      },
    ],
  }),
});
</script>
