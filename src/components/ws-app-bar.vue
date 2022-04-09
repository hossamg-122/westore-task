<template>
  <div>
    <v-app-bar
      app
      :color="dark ? 'ws-black' : 'white'"
      :dark="dark"
      col
      :class="{ transparent }"
      fixed
      elevate-on-scroll
    >
      <div class="d-flex align-center">
        <router-link :to="{ name: 'Home' }">
          <v-img
            alt="WeStore"
            class="shrink mr-2"
            :src="
              dark
                ? require('../assets/WeStore_logo-white.png')
                : require('../assets/WeStore_logo-black.png')
            "
            transition="scale-transition"
            :width="$vuetify.breakpoint.smAndDown ? 100 : 150"
          />
        </router-link>

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-app-bar-title> </v-app-bar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item in menu" :key="item.title" :to="item.target" text>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>

      <div class="mx-4 hidden-sm-and-down">
        <v-btn
          outlined
          :dark="dark"
          :color="dark ? 'white' : 'ws-black'"
          class="mr-4"
          :href="globals.dynamicUrls.portalLinks.signUp"
        >
          Sign Up
        </v-btn>
        <v-btn
          :color="dark ? 'white ws-black--text' : 'ws-black white--text'"
          :href="globals.dynamicUrls.portalLinks.account"
        >
          My Portal
        </v-btn>
      </div>
      <v-app-bar-nav-icon
        @click.stop="mobileMenu = !mobileMenu"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      color="ws-black"
      v-model="mobileMenu"
      dark
      right
      app
      sabsolute
      temporary
    >
      <v-list nav dense>
        <v-row class="text-center">
          <v-col>
            <v-btn
              text
              style="height: auto"
              class="pa-3 my-2"
              @click.native="logGAEvent( 'Burger menu','Phone number click', `Phone number click`);"
              :href="globals.contactPoints.phone.href"
            >
              <div class="d-flex flex-column">
                <v-icon> mdi-phone </v-icon>
                <small> Phone </small>
              </div>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn
              text
              style="height: auto"
              class="pa-3 my-2"
              @click.native="logGAEvent( 'Burger menu','Whatsapp click', `Whatsapp click`);"
              :href="globals.contactPoints.phone.hrefWhatsapp"
            >
              <div class="d-flex flex-column">
                <v-icon> mdi-whatsapp </v-icon>
                <small> WhatsApp </small>
              </div>
            </v-btn>
          </v-col>
        </v-row>
        <v-list-item-group active-class="white--text">
          <v-divider />
          <v-list-item to="/">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <template v-for="(mi, i) in menu">
            <v-divider :key="i + 'a'" />

            <v-list-item :to="mi.target" :key="mi.title">
              <v-list-item-title v-text="mi.title" />
            </v-list-item>
          </template>

          <!-- GET A QUOTE -->
          <v-divider />

          <v-list-item :href="globals.dynamicUrls.portalLinks.signUp">
            <v-list-item-title> Get A Quote </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <template v-slot:append>
        <div class="pa-2" style="margin-bottom: 96px">
          <v-btn
            block
            color="white"
            light
            outlined
            :href="globals.dynamicUrls.portalLinks.signUp"
          >
            Sign Up
          </v-btn>
          <v-btn
            block
            color="white"
            light
            class="mt-2"
            :href="globals.dynamicUrls.portalLinks.account"
          >
            My Portal
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script lang="ts">
import mixins from "vue-typed-mixins";
import MyMixin from "@/plugins/myMixin";

export default mixins(MyMixin).extend({
  name: "ws-app-bar",
  props: {
    dark: {
      type: Boolean,
    },
    transparent: {
      type: Boolean,
    },
  },
  data: () => ({
    mobileMenu: false,
    menu: [
      { title: "About", target: { name: "About" } },
      { title: "Subscriptions", target: { name: "Subscription"} },
      { title: "Services", target: { name: "Services" } },
      { title: "Warehouse", target: { name: "Warehouse" } },
      { title: "Contact", target: { name: "Contact" } },
    ],
  }),
});
</script>
