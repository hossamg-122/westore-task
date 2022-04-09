<template>
  <div id="contact">
    <ws-app-bar />
    <!-- HERO -->
    <v-sheet
      class="d-flex flex-column justify-center text-center section pb-0"
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
              <ws-gradient-text> CONTACT US </ws-gradient-text>
            </h1>
            <h2 class="mb-4">
              Have questions about the WeStore Logistics Solutions? <br />
              Let’s get in touch.
            </h2>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>

    <!-- Form/HQ -->
    <!-- <v-img eager :src="require('../assets/Gradient-light-scaled.jpg')">  </v-img> -->
    <section class="pa-0">
      <v-container>
        <v-container>
          <!-- <h2 class="text-center">
              <big> Get in touch with us </big>
            </h2>
            <br /> -->

          <v-row>
            <v-col cols="12" md="5" offset-md="1">
              <ws-common-form
                title="Contact Us"
                title-color="primary"
                color="#F0F0F5"
                light
                comments-label="Message"
                xcommentsLabel="Message"
                xsubtitle="Enter your details and we’ll get back to you shortly."
                submit-color="primary"
                form-type="Contact Form"
              />
            </v-col>
            <v-col cols="12" md="3" class="text-left">
              <!-- Address -->
              <h3 class="accent--text mb-2">Address</h3>
              <p class="body-2 font-weight-bold mb-4">
                30th floor, Office 30-11, Reef Tower <br />
                Jumeirah Lakes Towers <br />
                Dubai, UAE
                <v-btn
                  icon
                  color="primary"
                  small
                  @click="logGAEvent('Public', 'Contact: Office Location Map')"
                  :href="globals.contactPoints.stAddress.href"
                >
                  <v-icon small v-text="globals.contactPoints.stAddress.icon" />
                </v-btn>
              </p>
              <!-- Phone -->
              <h3 class="accent--text mb-2">Phone / WhatsApp</h3>
              <p class="body-2 font-weight-bold mb-4">
                <v-btn
                  rounded
                  color="ws-black"
                  text
                  small
                  @click="logGAEvent('Phone number', 'Phone click','Contact page')"
                  :href="globals.contactPoints.phone.href"
                >
                  {{ globals.contactPoints.phone.text }}
                  <v-icon
                    color="primary"
                    right
                    small
                    v-text="globals.contactPoints.phone.icon"
                  />
                </v-btn>

                <v-btn
                  class="ml-2"
                  icon
                  color="#2db742"
                  small
                  @click="logGAEvent('Public', 'Contact: WhatsApp', ``)"
                  :href="globals.contactPoints.phone.hrefWhatsapp"
                >
                  <v-icon
                    small
                    v-text="globals.contactPoints.phone.iconWhatsapp"
                  />
                </v-btn>
              </p>
              <!-- Email -->
              <h3 class="accent--text mb-2">Email</h3>
              <p class="body-2 font-weight-bold mb-4">
                <v-btn
                  rounded
                  color="ws-black"
                  text
                  small
                  @click="logGAEvent('Email', 'Email click','Contact page')"
                  :href="globals.contactPoints.email.href"
                >
                  {{ globals.contactPoints.email.text }}
                  <v-icon
                    color="primary"
                    right
                    small
                    v-text="globals.contactPoints.email.icon"
                  />
                </v-btn>
              </p>
            </v-col>
          </v-row>
        </v-container>
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
  name: "Contact",
  mounted() {
    this.trackMyPageView();
  },
  metaInfo: {
    title: metadata.Contact.title,
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" },
      { name: "robots", content: "follow, index" },
      {
        name: "description",
        content: metadata.Contact.description,
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, user-scalable=no",
      },
    ],
  },
  data: () => ({
    ourValues: [
      {
        number: "01",
        title: "People First",
        description:
          "We’re a tech company who puts people at the heart of everything – from our team to our clients and their businesses.",
      },
      {
        number: "02",
        title: "Experience is everything",
        description:
          "Our culture is rooted in providing the best experience possible, to anyone who comes in contact with our brand.",
      },
      {
        number: "03",
        title: "Experimentation is the greatest science",
        description:
          "If we’re not trying new things, we’re not evolving. So our culture is to experiment endlessly, remedy quickly and improve constantly.",
      },
      {
        number: "04",
        title: "Always listening, Always improving",
        description:
          "We’re hungry for insights from our customers, investors and our team – it’s what inspires us to keep learning and growing.",
      },
    ],
  }),
});
</script>

<style lang="scss">
#about {
  .values-card {
    line-height: 1;
    margin-bottom: 3em;
    padding: 3em 5%;
    // & > div {
    //   // padding: 0 1.5em;
    // }
    .values-card--number {
      font-size: 12em;
      font-weight: bold;
      text-align: center;
      width: 35%;
    }
    .values-card--content {
      width: 55%;
      .values-card--title {
        font-size: 2.5em;
      }
      .values-card--description {
        font-size: 1.5em;
        line-height: 1.5;
      }
    }
  }
}
</style>
