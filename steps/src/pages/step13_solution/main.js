import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import VueRouter from "vue-router";
import {
  ValidationProvider,
  ValidationObserver,
} from "vee-validate/dist/vee-validate.full";
import App from "./App";
import router from "./views/router.js";

Vue.use(VueRouter);
Vue.use(VueMaterial);

Vue.material.registerTheme("default", {
  primary: "blue",
  accent: "grey",
  warn: "red",
});

Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
