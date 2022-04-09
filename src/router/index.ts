import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../pages/Home.vue";
import Subscription from "../pages/Subscription.vue";
import SubscriptionPlan from "../pages/SubscriptionPlan.vue";
import SubcriptionSubmited from "../pages/SubcriptionSubmited.vue";
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: "/sitemap.xml" },
  { path: "/robots.txt" },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
  {
    path: "/services",
    name: "Services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "services" */ "../pages/Services.vue"),
  },
  {
    path: "/warehouse",
    name: "Warehouse",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "warehouse" */ "../pages/Warehouse.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contact" */ "../pages/Contact.vue"),
  },

  {
    path: "/faqs",
    name: "FAQs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faqs" */ "../pages/FAQs.vue"),
  },

  {
    path: "/help",
    name: "Help",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "help" */ "../pages/Help.vue"),
  },

  {
    path: "/easy-on-demand-warehousing-and-delivery",
    name: "Warehouse Performance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "landing1" */ "../pages/landing/Landing-1.vue"
      ),
  },

  {
    path: "/e-commerce-fulfillment-services-center-in-uae",
    name: "Fulfillment performance",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "landing2" */ "../pages/landing/Landing-2.vue"
      ),
  },
  {
    path: "/samples",
    name: "zLab",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "zLab" */ "../pages/zLab.vue"),
  },
  {
    path: "/terms-of-service",
    name: "ToS",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "legal" */ "../pages/legal/ToS.vue"),
  },
  {
    path: "/privacy-policy",
    name: "PP",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited. PP
    component: () =>
      import(/* webpackChunkName: "legal" */ "../pages/legal/PP.vue"),
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/subscriptions",
    name: "Subscription",
    component: Subscription,
  },
  {
    path: "/subscriptions/:id",
    name: "SubscriptionPlan",
    component: SubscriptionPlan,
  },
  {
    path: "/subscriptions/:id/thanks",
    name: "SubcriptionSubmited",
    component: SubcriptionSubmited,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      // return { selector: to.hash, behavior: "smooth" };

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ selector: to.hash, behavior: "smooth" });
        }, 250);
      });
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to, from) => {
  // console.log(to);
});

export default router;
