<template>
  <v-col md="3">
    <v-card
      :loading="loading"
      class="card"
      :class="$vuetify.breakpoint.smAndDown && 'carousel'"
      max-width="374"
      shaped
      elevation="10"
    >
      <template slot="progress">
        <v-progress-linear
          color="#F12763"
          height="10"
          indeterminate
        ></v-progress-linear>
      </template>

      <div class="card__title">{{ plan.title }}</div>
      <div v-if="plan.title === 'custom'" class="text-center mt-4">
        <p class="custom__text" >Create a plan for your B2B and B2C needs.</p>
        <v-form ref="form" class="mt-6">
          <v-row no-gutters>
            <v-col cols="12" class="ma-0">
              <v-text-field
                class="mb-3"
                label="Phone"
                required
                outlined
                hide-details="auto"
                v-model="formData.phone"
                dense
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Email"
                required
                outlined
                hide-details="auto"
                v-model="formData.email"
                dense
              />
            </v-col>
          </v-row>
        </v-form>
      </div>
      <div v-else class="text-center my-3">
        <span class="card__currency">AED</span>
        <span class="card__price">{{ plan.price }}</span>
        <h3>monthly</h3>
      </div>

      <div class="card__btn-container">
        <v-btn
          class="primary card__btn text-center"
          
         
          :x-small="$vuetify.breakpoint.mdOnly"
          @click="reserve(plan.id)"
          :block="plan.title === 'custom'"
          
        >
          {{ plan.buttonText }}
        </v-btn>
      </div>
      <v-list v-if="plan.title === 'custom'" dense class="transparent" >
        <v-list-item
          class="card__list-item"
          v-for="(benefit,index) in plan.benefits"
          :key="index"
        >
          <v-list-item-icon class="mr-0 my-0">
            <v-icon color="green" small>mdi-check</v-icon>
          </v-list-item-icon>
          <v-list-item-content class="py-0">
            <span class="card__custom-title" v-html="benefit" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-else subheader class="card__list mb-3">
        <template v-for="(benefit,index) in plan.benefits">
          <v-list-item :key="index" class="card__list-item pa-0">
            <v-list-item-avatar class="pa-0 ma-0">
              <v-img class="my-2" contain :src="benefit.icon" height="16" />
            </v-list-item-avatar>

            <v-list-item-content class="py-0">
              <v-list-item-title
                class="card__item-title"
                v-text="benefit.title"
              ></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action class="ma-0">
              <v-list-item-subtitle
                class="card__item-subtitle"
                v-text="benefit.subTitle"
              ></v-list-item-subtitle>
            </v-list-item-action>
          </v-list-item>

          <v-divider v-if="benefit.divider" :key="benefit.title" />
        </template>
      </v-list>

      <v-card-text v-if="plan.title !== 'custom'" class="px-0">
        <div class="text-center card__text">
          Cost can vary based on the fulfillment center location and shipping
          destination, as well as other value-added services.
        </div>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: ["plan"],
  data: () => ({
    loading: false,
    formData: {
      phone: "",
      email: "",
    },
  }),
  methods: {
      reserve (id) {
        this.loading = true

        setTimeout(() => (
         
          this.$router.push(`/subscriptions/${id}`)
          ), 2000)
      },
    },
};
</script>

<style lang="scss" scoped>
.card{
  margin-block-start: 5rem;
  padding: .5rem 1.3rem;
  position: relative;
  &::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: .8rem;
    height: 100%;
    border-radius: 24px 0 0 4px;
background-image: linear-gradient(to bottom ,#E80077,#AD08AF)
  }
  
  &__title{
    font-size: 20px;
    text-transform: capitalize;
    color:#F12763 ;
   line-height:  27.11px;
   text-align: center;
 
  }

  &__currency{
    font-weight: bolder;
    font-size: 20px;
    line-height:  36.14px;
    margin-inline-end: .5rem;
  }
  &__price{
    font-weight: bold;
    font-size: 55px;
    line-height:  96.38px;
    font-style: italic;
    @media (max-width:990px) {
      font-size: 35px;
    }
  }
  &__btn-container{
    text-align: center;
  }
  &__btn{

margin-block: 2rem 1rem;



  }
  &__list-icon{
height: 200px;
  }
  
  &__list-item{
    min-height: 0px !important;
    &:nth-last-child(-n+2){
      margin: 0;
      
      .card__item-title{
        font-weight: thin;
        font-size: 12px;
        padding: 0;
      }
      
    }
  }
  &__item-title{
    font-weight: bold;
    font-size: 12px;
    margin: 0;
    padding: 0;
  
  }
  &__item-subtitle{
    font-weight: normal;
    font-size:10px;
    line-height: 10px;
  }
  &__text{
    font-weight: normal;
    font-size:10px;
    line-height: 10px;
    text-align: center;
  
   
  }
  &__custom-title{
    color: #000000;
    font-size: 11px;
    font-weight: normal;
  }
}
.custom__text{
  font-size: .6rem;
  @media (max-width:990px) {
    font-size: .45rem;
  }
}
.v-application .my-2 {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.carousel{
  margin: 0 auto;
}
</style>