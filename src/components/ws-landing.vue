<template>
  <section class="section-lg pa-0">
    <!-- HEAD -->
    <v-container fluid :class="{ 'text-center': !$vuetify.breakpoint.mdAndUp }">
      <router-link :to="{ name: 'Home' }">
        <v-img
          eager
          alt="WeStore"
          class="shrink mr-2 d-inline-block"
          :src="require('../assets/WeStore_logo-black.png')"
          transition="scale-transition"
          :width="$vuetify.breakpoint.mdAndUp ? 247 : 135"
        />
      </router-link>
    </v-container>
    <!-- CONTENT -->
    <v-container>
      <v-row>
        <v-col cols="12">
          <h1
            class="gray-text"
            :class="{ 'text-center': !$vuetify.breakpoint.mdAndUp }"
          >
            {{ headline }}
          </h1>
        </v-col>

        <!-- LEFT -->
        <v-col cols="12" md="12" lg="12" class="d-flex flex-column">
          <!-- POINTS -->
          <v-list dense class="transparent">
            <v-list-item v-for="p in points" :key="p">
              <v-list-item-icon>
                <v-icon color="primary">mdi-check-circle-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <span class="body-1 font-weight-bold gray-text" v-html="p" />
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-spacer />

          <v-row>
            <!-- IMAGE -->
            <v-col cols="12" md="6" lg="6">
              <v-card class="hidden-sm-and-down">
                <v-img eager radio :src="image" />
              </v-card>
            </v-col>

            <!-- RIGHT -->
            <v-col cols="12" md="6" lg="6">
              <ws-common-form
                :title="formTitle"
                title-color="primary"
                color="#F0F0F5"
                light
                comments-label="Comments / Questions"
                submit-color="primary"
                form-type="Customer Interest"
                temp
              />
            </v-col>
          </v-row>
          <!-- BOTTOM -->
          <v-col cols="12" class="hidden-sm-and-down">
            <h2 class="text-center gray-text">
              {{ bottomLine }}
            </h2>
          </v-col>
        </v-col>
      </v-row>
      <!-- WHATSAPP -->
      <ws-whatsapp-popup />
    </v-container>
  </section>
</template>

<script lang="ts">
import { PropType } from "vue";
import wsCommonForm from "./ws-common-form.vue";
import wsWhatsappPopup from "./ws-whatsapp-popup.vue";
import Vue from "vue";
export default Vue.extend({
  components: { wsCommonForm, wsWhatsappPopup },
  name: "ws-landing",
  props: {
    headline: String,
    points: Array as PropType<Array<String>>,
    image: { type: [String, Object] },
    formTitle: String,
    bottomLine: String,
  },
  methods: {
    trackMyPageView() {
      setTimeout(() => {
        this.$gtag.pageview(<any>this.$route);
        console.log("trackMyPageView", this.$route);
      }, 250);
    },

    logGAEvent(category: string, action: string, label?: string) {
      this.$gtag.event(action, {
        event_category: category,
        event_label: label,
      });
    },

    logGAException(exception: any, fatal = false) {
      this.$gtag.exception({ description: exception, fatal });
    },
  },
});
</script>

<style lang="scss">
.gray-text {
  color: #000000a3;
}
</style>
