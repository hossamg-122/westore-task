<template>
  <div>
    <ws-app-bar dark />
    <v-container>
      <v-img
        alt="WeStore"
        class="shrink mr-2 mb-15 mt-5"
        :src="
          dark
            ? require('../assets/WeStore_logo-white.png')
            : require('../assets/WeStore_logo-black.png')
        "
        transition="scale-transition"
        :width="$vuetify.breakpoint.smAndDown ? 50 : 150"
      />
      <v-row justify="center" class="mb-15">
        <v-col md="9" sm="12">
          <v-card elevation="2" class="py-15">
            <h1 class="thank">Thank you !</h1>
            <div>
              <v-img
                eager
                class="my-5"
                contain
                :src="require('../assets/subscriptions/success.jpg')"
                height="100"
              />
            </div>
            <div class="thank__text">
              <div>
                <p>
                  You have succesefully submited your subscription request.
                  WeStore team will reach out to you shortly.
                </p>
                <p>
                  If you have any urgent requests feel free to contact us at<br />
                  <span>+971 58 545 4161</span>
                </p>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <ws-footer />
  </div>
</template>

<script>
import wsFooter from "@/components/ws-footer.vue";
export default {
  components: { wsFooter },
};
</script>

<style lang="scss" scoped>
.thank {
  font-size: 50px;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 30px;
  }
}
.thank__text {
  text-align: center;
  width: 75%;
  margin: 0 auto;
  // padding-inline: 100px;
  p {
  }
  span {
    color: #f12763;
  }
}
</style>
