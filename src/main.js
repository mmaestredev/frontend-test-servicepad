import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Landing from "@/Landing.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "root",
      path: "/",
      component: Landing,
    },
  ],
  scrollBehavior: (to) => {
    return { el: to.hash, behavior: "smooth" };
  },
});

import "@/assets/fonts/socials.css";

import CtaButton from "./components/ui/CtaButton";

let vue = createApp(App);
vue.use(router);
vue.component("CtaButton", CtaButton);

vue.mount("#app");
