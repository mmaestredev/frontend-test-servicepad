import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Landing from "@/Landing.vue";
import Blogging from "@/Blogging.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "root",
      path: "/",
      component: Landing,
    },
    {
      name: "blogging",
      path: "/blog",
      component: Blogging,
    },
  ],
  scrollBehavior: (to) => {
    if (!to.hash) return { to, top: 0 };
    return { el: to.hash, behavior: "smooth", top: 80 };
  },
});

import "@/assets/fonts/socials.css";

import CtaButton from "./components/ui/CtaButton";

let vue = createApp(App);
vue.use(router);
vue.component("CtaButton", CtaButton);

vue.mount("#app");
