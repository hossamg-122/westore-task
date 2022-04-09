<template>
  <v-footer dark padless>
    <v-card flat tile class="ws-black">
      <template v-if="false">
        <v-card-text class="text-center">
          <v-btn
            v-for="si in socialIcons"
            :key="si.url"
            class="mx-4 white--text"
            icon
            :href="si.url"
            target="_blank"
          >
            <v-icon size="24px" v-text="si.icon" />
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
          Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
          accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim
          a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
          lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
          iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum
          tempor vel ut orci. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
        </v-card-text>
      </template>

      <v-container fluid class="py-9">
        <v-row>
          <!-- Social -->
          <v-col cols="12" md="12" lg="3" class="text-center">
            <a href="https://westore.ai">
              <v-img
                eager
                alt="WeStore"
                class="shrink mr-2 d-inline-block"
                :src="require('../assets/WeStore_logo-white-footer-w208.png')"
                transition="scale-transition"
                width="208"
              />
            </a>

            <div>
              <v-btn
                v-for="si in socialIcons"
                :key="si.url"
                class="mx-2 white--text"
                icon
                :href="si.url"
                target="_blank"
              >
                <v-icon size="24px" v-text="si.icon" />
              </v-btn>
            </div>
          </v-col>
          <!-- Data -->
          <v-col
            cols="12"
            md="3"
            :lg="fl.cols || 2"
            v-for="fl in footerLinks"
            :key="fl.head.title"
          >
            <v-list dense dark color="ws-black" class="white--text">
              <v-list-item-group active-class="primary--text">
                <!-- Column Head -->
                <v-list-item :to="fl.head.to">
                  <h3 v-text="fl.head.title" />
                </v-list-item>
                <!-- Column Items -->
                <v-list-item
                  v-for="fll in fl.links"
                  :key="fll.title"
                  :to="fll.to || null"
                  :href="fll.url || null"
                  @click="fll.action ? fll.action() : false"
                >
                  <v-list-item-icon class="hidden-md-and-down" v-if="fll.icon">
                    <v-icon v-text="fll.icon" />
                  </v-list-item-icon>
                  <v-list-item-content> {{ fll.title }} </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
        </v-row>
      </v-container>

      <v-divider dark></v-divider>

      <v-card-text
        class="white--text text-center ws-black xdarken-1"
        @click="globals.interestDialog = true"
      >
        {{ new Date().getFullYear() }} — <strong>WeStore</strong>
      </v-card-text>
    </v-card>

    <!-- INTEREST FORM -->
    <v-layout row reverse>
      <v-dialog
        transition="dialog-bottom-transition"
        content-class="align-self-end"
        v-model="globals.interestDialog"
        max-width="390"
      >
        <ws-common-form
          title="Contact Us"
          title-color="primary"
          color="white"
          light
          comments-label="Message"
          xcommentsLabel="Message"
          subtitle="Enter your details and we’ll get back to you shortly."
          submit-color="primary"
          temp
          form-type="Customer Interest"
        />
      </v-dialog>
    </v-layout>

    <!-- GET a quote FORM -->
    <v-layout row reverse>
      <v-dialog
        transition="dialog-bottom-transition"
        content-class="align-self-end"
        v-model="globals.showGetQuote"
        max-width="390"
      >
        <ws-common-form
          title="Get a Quote"
          title-color="primary"
          color="white"
          light
          comments-label="Message"
          xcommentsLabel="Message"
          subtitle="Enter your details and we’ll get back to you shortly."
          submit-color="primary"
          temp
          form-type="Customer Interest"
        />
      </v-dialog>
    </v-layout>

    <!-- WHATSAPP -->
    <ws-whatsapp-popup />
  </v-footer>
</template>

<script lang="ts">
interface footerLink {
  icon?: string;
  title: string;
  url?: string;
  to?: { name: string; hash?: string } | any;
  action?: any;
}

// const baseUrl = "https://westore.ai";
const baseUrl = "";

import mixins from "vue-typed-mixins";
import MyMixin, { globals } from "@/plugins/myMixin";
import wsWhatsappPopup from "./ws-whatsapp-popup.vue";

export default mixins(MyMixin).extend({
  components: { wsWhatsappPopup },
  name: "ws-footer",
  data() {
    return {
      socialIcons: [
        { url: "https://facebook.com/WeStoreAi", icon: "mdi-facebook" },
        { url: "https://www.instagram.com/westore.ai", icon: "mdi-instagram" },
        { url: "https://www.twitter.com/westoretech", icon: "mdi-twitter" },
        {
          url: "https://www.linkedin.com/company/westore-ai/",
          icon: "mdi-linkedin",
        },
      ],
      footerLinks: [
        // Company
        {
          head: { title: "Company", url: "/" },
          links: [
            { title: "About", to: { name: "About" } },
            { title: "Career", to: { name: "About", hash: "#career" } },
            {
              title: "Terms of Service",
              to: { name: "ToS" },
            },
            {
              title: "Privacy Policy",
              to: { name: "PP" },
            },
          ],
        },
        //   Services
        {
          head: { title: "Services", to: { name: "Services" } },
          links: [
              { title: "Subscriptions", to: { name: "Subscription"} },
            { title: "Storage", to: { name: "Services", hash: "#storage" } },
            {
              title: "Fulfillment",
              to: { name: "Services", hash: "#fulfillment" },
            },
            {
              title: "Delivery",
              to: { name: "Services", hash: "#delivery" },
            },
            {
              title: "Returns",
              to: { name: "Services", hash: "#returns" },
            },
            {
              title: "Customer Service",
              to: { name: "Services", hash: "#customer-service" },
            },
          ],
        },
        //   Resources
        {
          head: { title: "Resources", to: { name: "Help", hash: "#help" } },
          links: [
            { title: "Help", to: { name: "Help" } },
            { title: "FAQs", to: { name: "FAQs" } },
            {
              title: "Schedule a Demo",

              action: () => {
                globals.interestDialog = true;
              },
            },
            {
              title: "List Your Warehouse",
              to: { name: "Warehouse", hash: "#list-your-warehouse" },
            },
          ],
        },
        //   Contact
        {
          cols: "3",
          head: { title: "Contact", to: { name: "Contact" } },
          links: [
            {
              title: globals.contactPoints.phone.text,
              icon: globals.contactPoints.phone.icon,
              url: globals.contactPoints.phone.href,
            },
            {
              title: globals.contactPoints.email.text,
              icon: globals.contactPoints.email.icon,
              url: globals.contactPoints.email.href,
            },
            {
              title: globals.contactPoints.stAddress.text,
              icon: globals.contactPoints.stAddress.icon,
              url: globals.contactPoints.stAddress.href,
            },
          ],
        },
      ] as Array<{
        cols?: string;
        head: footerLink;
        links: footerLink[];
      }>,
    };
  },
  mounted() {},
});
</script>
