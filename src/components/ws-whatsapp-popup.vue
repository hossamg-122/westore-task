<template>
  <div>
    <!-- <v-fab-transition> -->
    <v-btn
      fab
      large
      color="whatsapp-green"
      bottom
      right
      fixed
      @click.native="showHideContacts"
      transition="fab-transition"
    >
      <!-- <v-fab-transition v-if="!globals.whatsappPopupVisible"> -->
      <v-icon
        large
        v-if="!globals.whatsappPopupVisible"
        transition="fab-transition"
      >
        mdi-whatsapp
      </v-icon>
      <!-- </v-fab-transition>
        <v-fab-transition v-else> -->
      <v-icon large v-else> mdi-close </v-icon>
      <!-- </v-fab-transition> -->
    </v-btn>
    <!-- </v-fab-transition> -->

    <!-- <v-slide-y-reverse-transition> </v-slide-y-reverse-transition> -->
    <v-scroll-y-reverse-transition>
      <v-card
        v-if="globals.whatsappPopupVisible"
        light
        class="ma-4 ws-whatsapp-card"
        max-width="350px"
        shaped
        v-click-outside="closeMe"
      >
        <v-list-item dark class="ws-whatsapp-card--title">
          <v-list-item-icon>
            <v-icon large> mdi-whatsapp </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <h3>Start a Conversation</h3>
            </v-list-item-title>

            <p class="body-2 font-weight-bold mb-0">
              <small>
                Hi! Click one of our member below to chat on
                <strong> WhatsApp </strong>
              </small>
            </p>
          </v-list-item-content>
        </v-list-item>

        <!-- Contacts -->
        <v-list dense shaped xrounded two-line>
          <v-subheader>
            The team typically replies in a few minutes.
          </v-subheader>
          <v-list-item
            v-for="(cnt, i) in contacts"
            :key="i"
            class="ws-whatsapp-card--contact ml-2 mb-2"
            @click="
            logGAEvent( 'Let\'s Chat','Start WhatsApp Chat', `${$route.name}` + ' Page');
            "
            target="_blank"
            :href="`https://api.whatsapp.com/send?phone=${cnt.whatsappNumber}`"
          >
            <v-list-item-avatar>
              <v-img eager :src="cnt.profilePic" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold" v-text="cnt.title" />
              <v-list-item-subtitle v-text="cnt.name" />
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon class="mt-3" color="whatsapp-green">
                mdi-whatsapp
              </v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-scroll-y-reverse-transition>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";

export default mixins(MyMixin).extend({
  name: "ws-whatsapp-popup",
  data: () => ({
    contacts: [
      {
        name: "Mostafa",
        title: "Sales",
        profilePic: require("../assets/whatsapp/mostafa.jpg"),
        whatsappNumber: "971585466311",
      },
      {
        name: "Alma",
        title: "Support",
        profilePic: require("../assets/whatsapp/alma.png"),
        whatsappNumber: "971585454161",
      },
      {
        name: "Ali",
        title: "Support",
        profilePic: require("../assets/whatsapp/ali.jpeg"),
        whatsappNumber: "971585954290",
      },
    ],
  }),

  methods: {
    showHideContacts() {
      if (!this.globals.whatsappPopupVisible) {
        this.logGAEvent( 'Let\'s Chat','Whatsapp open', `${this.$route.name}` + ' Page');
      }
      this.globals.whatsappPopupVisible = !this.globals.whatsappPopupVisible;
    },

    closeMe() {
      this.globals.whatsappPopupVisible = false;
    },
    pagename() {
      return this.pagename;
    },
  },
});
</script>
