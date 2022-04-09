<template>
  <ws-landing
    headline="E-commerce fulfillment center in UAE"
    :points="[
      'Pick, pack, label and delivery',
      'No long-term agreement',
      'E-commerce, B2B, B2C fulfillment',
    ]"
    :image="require('../../assets/landing/landing2.webp')"
    form-title="Request a quote right now"
    bottom-line="Easy, On-Demand Warehousing and fulfillment"
  />
</template>

<script lang="ts">
import wsLanding from "@/components/ws-landing.vue";

import Vue from "vue";
export default Vue.extend({
  components: { wsLanding },
  name: "Landing2",
    methods:{
    trackMyPageView(){
       setTimeout(() => {
        this.$gtag.pageview(<any>this.$route);
        console.log("trackMyPageView", this.$route);
      }, 250);
    },
  },
   beforeMount(){
    this.trackMyPageView()
 },
  metaInfo: {
    title: "E-commerce Fulfillment Center in UAE",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, noindex" },
      {
        name: "description",
        content: "E-commerce fulfillment center in UAE",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
});
</script>
