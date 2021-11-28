import { createApp } from "vue";
import App from "./App.vue";

let vue = createApp(App);

import "@/assets/fonts/socials.css";

import CtaButton from "./components/ui/CtaButton";

vue.component("CtaButton", CtaButton);

vue.mount("#app");
