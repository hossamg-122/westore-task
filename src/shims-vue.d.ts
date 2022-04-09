declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

import Vue from "vue";

declare module "vue/types/options" {
  interface ComponentOptions<V extends Vue> {
    metaInfo?: any;
  }
}
