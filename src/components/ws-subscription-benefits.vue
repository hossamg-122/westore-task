
<template>
  <v-col cols="12" md="4" class="benefit text-center">
    <v-row v-if="$vuetify.breakpoint.smAndDown" align="center">
      <v-col cols="2" offset="2" class="py-1"
        ><v-img eager class="ma-0" contain :src="benefit.icon" height="45"
      /></v-col>
      <v-col cols="8" class="text-left pa-0"
        ><h3 class="primary--text" v-text="benefit.title"
      /></v-col>
    </v-row>
    <div v-else>
      <v-img eager class="my-5" contain :src="benefit.icon" height="45" />
      <h3 class="primary--text" v-text="benefit.title" />
    </div>
  </v-col>
</template>

<script>
export default {
  props: ["benefit"],
};
</script>

<style lang="scss" scoped>
.benefit {
  text-transform: capitalize;
  h3 {
    font-size: 1.5rem;
    line-height: 2rem;
    @media (max-width: 990px) {
      font-size: 1.2rem;
    }
  }
  padding-block: 0 2rem;
  &:nth-child(2n) {
    border-left: 1px solid #7b8795;
    border-right: 1px solid #7b8795;
  }
}
</style>
