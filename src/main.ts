import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueMeta from "vue-meta";
import VueGtag from "vue-gtag";
import { isProduction } from "./plugins/siteBase";

Vue.config.productionTip = false;

import wsAppBar from "@/components/ws-app-bar.vue";
Vue.component("ws-app-bar", wsAppBar);

import wsGradientText from "@/components/ws-gradient-text.vue";
Vue.component("ws-gradient-text", wsGradientText);

import wsFooter from "@/components/ws-footer.vue";
Vue.component("ws-footer", wsFooter);

import wsCommonForm from "@/components/ws-common-form.vue";
Vue.component("ws-common-form", wsCommonForm);

// Vue.directive("DropdownDirective", {
//   bind(el, binding) {
//     let type = binding.arg;
//     const clickFunction = (e: PointerEvent) => {
//       console.log(e, e.target);
//       if (e.target?.classList.contains("close")) {
//         console.log("close");
//       } else if (e.target.classList.contains("title")) {
//         console.log("title:", e.target.textContent);
//       } else if (e.target === el) {
//         console.log("parent");
//       } else {
//         console.log("outside");
//       }
//     };
//     // adding a general eventListener, so you can check for clicks outside
//     window.addEventListener(type as any, clickFunction);
//   },
// });

Vue.use(VueGtag, {
  config: {
    id: isProduction() ? "UA-210915830-1" : "UA-210915830-2",
    params: {
      send_page_view: false,
    },
  },
});

Vue.use(VueMeta);

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount("#app");
