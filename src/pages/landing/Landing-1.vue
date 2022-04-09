<template>
  <ws-landing
    headline="Warehouse space for rent in UAE"
    :points="[
      'No long-term agreement',
      'Pay for the space you use only',
      'E-commerce, B2B, B2C fulfillment',
    ]"
    :image="require('../../assets/landing/landing1.jpg')"
    form-title="Request Warehouse Pricing"
    bottom-line="Easy, On-Demand Warehousing and Delivery"
  />
</template>

<script lang="ts">
import wsLanding from "@/components/ws-landing.vue";

import Vue from "vue";
export default Vue.extend({
  components: { wsLanding },
  name: "Landing1",
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
    title: "Easy, On-Demand Warehousing and Delivery",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, noindex" },
      {
        name: "description",
        content: "E-Warehouse space for rent across UAE",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
});

</script>
