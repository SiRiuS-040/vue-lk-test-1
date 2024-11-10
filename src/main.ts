import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";

import Toast, { POSITION } from "vue-toastification";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const toastOptions = {
  position: POSITION.BOTTOM_CENTER,
  timeout: 2000,
};

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(Toast, toastOptions);
app.mount("#app");
