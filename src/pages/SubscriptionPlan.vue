<template>
  <div>
    <ws-app-bar dark />
    <v-container >
      <v-img
        alt="WeStore"
        class="shrink mr-2 mb-15 mt-5"
        :src="require('../assets/WeStore_logo-black.png')
        "
        transition="scale-transition"
        :width="$vuetify.breakpoint.smAndDown ? 100 : 150"
      />
      <h2 class="heading-primary">
        Your Warehousing & Fulfillment Subscription Plan
      </h2>
      <h3 class="primary--text text-center">No Credit Card required</h3>

      <v-row class="my-10" justify="center"  >
        <v-col class="left-side" cols="11" md="6" :order="$vuetify.breakpoint.smAndDown ? '2':'0'" >
          <v-row class="mb-8">
            <v-col cols="12" offset="9">
              <v-img
                alt="WeStore"
                class="shrink"
                :src="require('../assets/WeStore_logo-black.png')"
                transition="scale-transition"
                width="100"
              />
            </v-col>
          </v-row>
          <div class="form__title mb-5">INVOICE</div>
          <div class="invoice__info">
            Provided by : <span>WeStore Technology Limited</span>
          </div>
          <div class="invoice__info mb-5">
            Order Number : <span>132442</span>
          </div>
          <v-row>
            <v-col cols="6">Service</v-col>
            <v-col cols="3" class="text-center">Quantity</v-col>
            <v-col cols="3" class="text-center">Price</v-col>
          </v-row>
          <v-divider class="mb-3" />

          <v-row
            class="invoice-row"
            v-for="(benefit, index) in plan.benefits"
            :key="index"
          >
            <v-col cols="6" class="pr-0">
              <div class="invoice-row__service">{{ benefit.title }}</div>
            </v-col>

            <v-col cols="3" class="text-center">
              <span class="quantity-title"> {{ benefit.subTitle }}</span></v-col
            >
            <v-col cols="3" class="text-center"> - </v-col>
          </v-row>

          <v-divider class="mt-3" />
          <v-row>
            <v-col cols="9" class="text-end py-0 mt-3">
              <div class="invoice-row__summary">
                Warehousing and Fulfillment Services
              </div>
            </v-col>
            <v-col cols="3" class="pa-0 mt-3">
              <div>{{ plan.price | price }} AED</div>
            </v-col>
            <v-col cols="9" class="text-end py-0">
              <div class="invoice-row__summary">VAT</div>
            </v-col>
            <v-col cols="3" class="pa-0">
              <div class="percent">5%</div>
            </v-col>
            <v-col cols="9" class="text-end py-0">
              <div class="invoice-row__summary">Total</div>
            </v-col>
            <v-col cols="3" class="pa-0">
              <div>{{ plan.price | calcTotal }} AED</div>
            </v-col>
          </v-row>
          <v-col cols="12" class="py-0 mt-7 mb-4">
            <div class="values-title">Additional value-added services</div>
          </v-col>
          <ul>
            <v-row>
              <v-col
                class="py-0"
                offset="1"
                cols="5"
                v-for="(value, index) in additionalValues"
                :key="index"
              >
                <li class="list-item">{{ value }}</li>
              </v-col>
            </v-row>
          </ul>

          <v-col class="invoice-footer py-0 mt-16 mb-6" cols="12">
            <p>WeStore</p>
          </v-col>
          <v-row>
            <v-col class="invoice-footer__content py-0" cols="4">
              <p>30 <sup>th</sup> floor, Office 30-11,</p>
              <p>Reef Tower</p>
              <p>Jumeirah Lake Towers</p>
              <p>Dubai, UAE</p>
            </v-col>
            <v-col class="invoice-footer__content py-0 pr-0 pl-5" cols="3">
              <p>T.+971 58 585 1340</p>
              <p>connect@westore.ai</p>
            </v-col>
            <v-col class="invoice-footer__content pl-5 py-0" cols="3" offset="2"
              ><p>www.WeStore.ai</p></v-col
            ></v-row
          >
        </v-col>
        <v-col
          class="form mb-10"
          cols="11"
          md="6"
          lg="4"
          offset-lg="1"
          align-self="center"
        
        >
          <v-form ref="form">
            <v-row>
              <v-col cols="12">
                <div class="form__title text-center">
                  Start your 7-Day FREE trial
                </div>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Name"
                  required
                  outlined
                  hide-details="auto"
                  v-model="formData.email"
                />
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email"
                  required
                  outlined
                  hide-details="auto"
                  v-model="formData.email"
                />
              </v-col>
              <v-col cols="12" class="ma-0">
                <v-text-field
                  class="mb-3"
                  label="Phone number"
                  required
                  outlined
                  hide-details="auto"
                  v-model="formData.phone"
                />
              </v-col>
              <v-col cols="12" class="ma-0 py-0">
                <v-checkbox
                  class="mt-0"
                  v-model="formData.checkbox"
                  color="blue"
                >
                  <template v-slot:label>
                    <div>
                      I agree to the
                      <router-link to="/terms-of-service"
                        ><a> Terms of Service </a></router-link
                      >
                    </div>
                  </template>
                </v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-btn
                  class="primary"
               
                
                  block
                  @click="submitForm"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <ws-footer />
  </div>
</template>

<script>

// I stored all the data in one file to make it easy use it in any component and if we want to make any changes it will be made in one place
import * as localData from "../localData/data";
import wsFooter from '@/components/ws-footer.vue';
export default {
  components: { wsFooter },
  filters: {
    price: (price) => {
      if(price){
 return price.toFixed(2);
      }
     
    },
    calcTotal: (price) => {
      const total = price * 1.05;
      return total.toPrecision(6);
    },
  },
  data: () => ({
    plan: {},
    planId:"",
    additionalValues: localData.invoiceAdditionalValue,
    formData: {
      phone: "",
      email: "",
      checkbox: false,
    },
  }),
  mounted() {
    
    const { id } = this.$route.params;
    this.planId = id
    this.plan = localData.subscriptionPlans.find((plan) => plan.id == id);
    this.plan.benefits.splice(
      4,
      2,
      {
        title: "Handling in and out",
        subTitle: "5 CBM",
      },
      {
        title: "Access to customer portal",
        subTitle: "Unlimited",
      },
      {
        title: "Customer support",
        subTitle: "Unlimited",
      }
    );
  },
  methods:{
    submitForm(){
      this.$router.push(`/subscriptions/${this.planId}/thanks`)
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  margin-block-start: 20px;
  padding: 30px;
  border: 1px solid #000;
  border-radius: 5px;
  &__title {
    font-size: 18px;

    color: #f12763;
    line-height: 27.11px;
  }
}
.left-side{
  box-shadow: 0px 6px 6px -3px rgb(0 0 0 / 20%), 0px 10px 14px 1px rgb(0 0 0 / 14%), 0px 4px 18px 3px rgb(0 0 0 / 12%) !important;
  padding: 2rem 2.5rem;
  
}
.invoice-row {
  font-weight: normal;
  font-size: 13px;
  &:nth-child(odd) {
    .invoice-row__service {
      background-color: #e5e5e5;
    }
  }
  .col {
    padding-block: 3px;
  }
  .col-6 {
    border-right: 1px solid rgb(187, 184, 184);
  }
  &__summary {
    font-style: italic;
    border-right: 1px solid rgb(187, 184, 184);
    padding-inline-end: 10px;
    font-size: 16px;
  }
}
.quantity-title {
  font-weight: normal;
  font-size: 12px;
}
.invoice__info {
  font-size: 11px;
  span {
    font-size: 10px;
  }
}
.percent {
  background-color: #e5e5e5;
}
.invoice-footer {
  p {
    font-size: 11px;
  }
  &__content {
    border-left: 1px solid #f12763;
    p {
      font-size: 11px;
      margin-block-end: 0px;
    }
  }
}
.values-title{
font-size: 14px;
}
.list-item{
font-size: 12px;
}
</style>
