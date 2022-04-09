module.exports = {
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        "/",
        "/about",
        "/services",
        "/warehouse",
        "/contact",
        "/faqs",
        "/easy-on-demand-warehousing-and-delivery",
        "/e-commerce-fulfillment-services-center-in-uae",
      ],
      // renderRoutes: ["/", "/warehouse", "/contact", "/faqs"],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      // postProcess (renderedRoute) {
      //   // // Ignore any redirects.
      //   // renderedRoute.route = renderedRoute.originalRoute
      //   // // Basic whitespace removal. (Don't use this in production.)
      //   // renderedRoute.html = renderedRoute.html.split(/>[\s]+</gmi).join('><')
      //   // // Remove /index.html from the output path if the dir name ends with a .html file extension.
      //   // // For example: /dist/dir/special.html/index.html -> /dist/dir/special.html
      //   // if (renderedRoute.route.endsWith('.html')) {
      //   //   renderedRoute.outputPath = path.join(__dirname, 'dist', renderedRoute.route)
      //   // }
      //   console.log(renderedRoute);

      //   return renderedRoute
      // },
    },
  },

  css: {
    extract: true,
  },
};
