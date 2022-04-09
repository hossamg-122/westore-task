<template>
  <span class="ws-gradient-text-wrapper">
    <slot> EMPTY </slot>
    <span class="ws-gradient-text" v-if="false"> </span>
  </span>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ws-gradient-text",
  //   props: {
  //     text: String,
  //   },
});
</script>

<style lang="scss">
.ws-gradient-text-wrapper {
  background-image: linear-gradient(90deg, #e33064 0%, #48bfea 100%);
  background-size: cover;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;

  display: inline-block;

  .ws-gradient-text {
    display: block;
  }
}
</style>
