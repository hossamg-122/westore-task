<template>
  <v-app>
    <v-main xxv-dropdown-directive:click>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import wsAppBar from "./components/ws-app-bar.vue";

export default Vue.extend({
  components: { wsAppBar },
  name: "App",
  metaInfo: {
    title: "WeStore",
    titleTemplate: "%s | WeStore",
  },
  data: () => ({
    //
  }),
  methods: {},
});
</script>

<style lang="scss" src="./styles/styles.scss" />
