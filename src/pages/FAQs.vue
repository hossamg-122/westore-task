<template>
  <div id="faqs">
    <ws-app-bar light />

    <!-- FAQ -->
    <section class="section-lg">
      <v-container>
        <h2 class="text-center">
          <ws-gradient-text> FREQUENTLY ASKED QUESTIONS </ws-gradient-text>
        </h2>
        <br />
        <v-row>
          <v-expansion-panels popout xmultiple>
            <v-expansion-panel v-for="(faq, i) in faqs" :key="i">
              <v-expansion-panel-header class="font-weight-bold">
                {{ faq.Q }}
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <p class="body-1 xfont-weight-bold" v-text="faq.A" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>

          <v-col cols="12" class="text-center">
            <h2>Didn't get the answer?</h2>
            <v-btn
              color="accent"
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
  name: "FAQs",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.FAQs.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.FAQs.description,
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
        this.logGAEvent( 'Let\'s Chat','Whatsapp open', `FAQs Page`);
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    }
  },
  data: () => ({
    faqs: [
      {
        Q: "So, how does on-demand warehousing and fulfilment work?",
        A: "WeStore has a network of warehouses across the UAE and connects companies that need additional warehousing capacity and services to companies that can provide these services. The WeStore team matches each retailer and brand with the warehousing provider(s) that meet the project scope and criteria. All parties use the WeStore Platform to manage projects, which centralizes workflow for scheduling deliveries and pickups, managing inventory, legal agreements, and billing. The combination of the WeStore Platform, Logistics Network, and Logistics Operations helps forward-looking brands focus on sales and growth instead of costs and constraints. ",
      },
      {
        Q: "How can I be sure my goods will be safe inside WeStore partner warehouses?",
        A: "We have an extensive vetting process before a warehouse is deemed eligible to join our network. Every provider is screened to ensure that their facilities and teams meet our quality standards. Additionally, WeStore continually tracks quality metrics across all warehouse providers through our technology platform, enabling us to consistently monitor the performance of ongoing operations and create a baseline of metrics.",
      },
      {
        Q: "What is warehousing?",
        A: "Warehousing is a service offered by WeStore to store and manage your inventory in our strategically located logistics centres. Warehousing offers duty-free or duty-paid options to cater to the different needs of customers in all industry segments. We also ensure that your storage requirements and inventory management needs are met while providing real-time visibility at all levels to help you control your stock levels, streamline Purchases, and improve your order cycle time.",
      },
      {
        Q: "Can you customize my shipments?",
        A: "We can use special packaging, insert samples, ‘thank you’ / wishes cards and free products into each order.",
      },
      {
        Q: "Do you inspect products before receiving?",
        A: "Our Receiving department inspects inbound products. We can perform quality control and inspection based on the products likelihood of having defects.",
      },
      {
        Q: "Do you offer secure storage for high value items?",
        A: "We offer secured storage for high-value inventory. (Kindly contact our Sales / customer support for more details)",
      },
      {
        Q: "Are there chances you will fulfil an order incorrectly",
        A: "WeStore promises 99.9% accuracy rate as we are using a WM system that enables us to get the accumulated weight of all items on the order. If the weight is incorrect, it will directly go to what we call the 'reject' chute for checking.",
      },
      {
        Q: "Can you provide Delivery?",
        A: "Yes. We also offer delivery. We have partnership with 3rd party logistics to ensure smooth delivery to the Client’s customers.",
      },
      {
        Q: "Do you handle fragile products?",
        A: "Yes. Our fulfilment centre has the means and capabilities to handle fragile items. We assure you that fragile products will be handled with proper care.",
      },
      {
        Q: "What documents are needed to work with WeStore?",
        A: "You need: Personal Identification, Accepted terms of service, Complete account Opening form and Trade license copy / TRN.",
      },
      {
        Q: "What is the onboarding process?",
        A: "It’s quick and painless. Onboarding starts after WeStore receives your signed documents – we’ll be in touch within 24 hours. We’ll then send you relevant documents via email, based on the service/s you selected.",
      },
      {
        Q: "Do you offer return service?",
        A: "Yes. We offer fast, efficient return services.",
      },
      {
        Q: "Which services do you provide?",
        A: "WeStore provides logistics solution including storage, fulfilment, delivery, returns, pick & pack/kitting, cross-docking, shipment consolidation, transloading, palletization & pallet rebuild, labeling / barcoding, B2B and B2C distribution, order managem",
      },
    ],
  }),
});
</script>

<style></style>
