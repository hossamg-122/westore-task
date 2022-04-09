<template>
  <div>
    <ws-app-bar dark />
    <v-container max-width="374">
      <v-img
        alt="WeStore"
        class="shrink mr-2 mb-15"
        :src="require('../assets/WeStore_logo-black.png')"
        transition="scale-transition"
        :width="$vuetify.breakpoint.smAndDown ? 100 : 150"
      />
      <h2 class="heading-primary">
        Warehouse space for rent & multi-channel fulfillment with same day
        delivery in <br />
        Dubai, Abu Dhabi, RAK, Sharjah and Ajman
      </h2>
      <v-row class="mt-5">
        <!-- this component displaying the benefits of subscriptions -->
        <ws-subscription-benefits
          v-for="benefit in subscriptionBenefits"
          :key="benefit.id"
          :benefit="benefit"
        />
      </v-row>
      <v-row class="mb-15" v-if="$vuetify.breakpoint.smAndDown">
        <!-- this component displaying the carousel in mobile only  -->
        <v-carousel
          class="carousel"
          cycle="3s"
          v-model="model"
          hide-delimiter-background
          delimiter-color="red"
          height="680"
          light
        >
          <v-carousel-item v-for="(plan, i) in subscriptionPlans" :key="i">
            <v-sheet height="100%" tile>
              <v-row
                class="fill-height"
                align="center"
                justify="center"
                align-content="center"
              >
                <ws-subscription-card :plan="plan" />
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-row>
      <v-row class="mb-15" v-else>
        <!-- this component displaying the cards in web only  -->
        <ws-subscription-card
          v-for="plan in subscriptionPlans"
          :key="plan.id"
          :plan="plan"
        />
      </v-row>
    </v-container>
    <ws-footer />
  </div>
</template>

<script>
// I stored all the data in one file to make it easy use it in any component and if we want to make any changes it will be made in one place
import * as localData from "../localData/data";
import wsSubscriptionBenefits from "@/components/ws-subscription-benefits.vue";
import WsSubscriptionCard from "@/components/ws-subscriptionCard.vue";
import WsFooter from "@/components/ws-footer.vue";
export default {
  components: { wsSubscriptionBenefits, WsSubscriptionCard, WsFooter },
  data: () => ({
    subscriptionBenefits: localData.subscriptionBenefits,
    subscriptionPlans: localData.subscriptionPlans,
  }),
};
</script>

<style lang="scss">
.heading-primary {
  font-family: "NeueHaasUnicaPro";

  font-size: 1.95rem;
  line-height: 3.5rem;
  text-align: center;
  @media (max-width: 990px) {
    font-size: 1.6rem;
  }
  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
}
.carousel {
  .v-item-group,
  .v-btn--icon {
    color: #b30da9 !important;
    background-color: white !important;
  }
}
</style>
