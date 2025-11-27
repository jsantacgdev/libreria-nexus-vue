import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@views/HomeView.vue";
import SpaceView from "@views/SpacesView.vue";
import CheckoutView from "@views/CheckoutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/espacios",
      name: "espacios",
      component: SpaceView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
  ],
});

export default router;
