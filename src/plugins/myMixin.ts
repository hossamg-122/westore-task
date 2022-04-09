import Vue from "vue";
import { isProduction } from "./siteBase";

export const globals = {
  whatsappPopupVisible: false,
  interestDialog: false,
  showGetQuote:false,
  contactPoints: {
    phone: {
      text: "+971585466311",
      href: "tel:+971585466311",
      hrefWhatsapp: "https://wa.me/+971585466311",
      icon: "mdi-phone",
      iconWhatsapp: "mdi-whatsapp",
    },
    email: {
      text: "connect@westore.ai",
      href: "mailto:connect@westore.ai",
      icon: "mdi-email",
    },
    stAddress: {
      text: " 30th floor, Office 30-11, Reef Tower Jumeirah Lakes Towers Dubai, UAE ",
      href: "https://goo.gl/maps/qm4ZKj8tmvaTXDdZ9",
      icon: "mdi-map-marker ",
    },
  },
  dynamicUrls: {
    baseUrls: isProduction()
      ? {
          portal: "https://portal.westore.ai/",
          blog: "https://blog.westore.ai/",
        }
      : {
          portal: "https://stagingportal.westore.ai/",
          blog: "https://stagingblog.westore.ai/",
        },
    portalLinks: null as unknown as {
      signUp: string;
      account: string;
    },
  },
};
globals.dynamicUrls.portalLinks = {
  signUp: globals.dynamicUrls.baseUrls.portal + "sign-up",
  account: globals.dynamicUrls.baseUrls.portal + "account",
};

export default Vue.extend({
  data: () => ({
    globals: globals,
    isProduction: isProduction(),
  }),

  created: function () {},
  mounted: function () {},
  methods: {
    trackMyPageView() {
      setTimeout(() => {
        this.$gtag.pageview(<any>this.$route);
        console.log("trackMyPageView", this.$route);
      }, 250);
    },

    logGAEvent(category: string, action: string, label?: string) {
      this.$gtag.event(action, {
        event_category: category,
        event_label: label,
      });
    },

    logGAException(exception: any, fatal = false) {
      this.$gtag.exception({ description: exception, fatal });
    },
  },
});
