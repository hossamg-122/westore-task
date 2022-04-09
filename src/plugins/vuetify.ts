// import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  breakpoint: {
    thresholds: {
      // xs: 340,
      sm: 767,
      md: 1023,
      lg: 1280,
    },
    // scrollBarWidth: 24,
    // "sm": 0,
    // "md": 768px,
    // "lg": 1024px - 16px,
    // "xl": 1280px - 16px,
  },
  theme: {
    dark: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#E33064",
        secondary: "#341436",
        accent: "#48BFEA",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        "ws-black": "#0C1922",
        "ws-green": "#49ce42",
        "whatsapp-green": "#2db742",
      },
    },
  },
  icons: { iconfont: "mdi" },
});
