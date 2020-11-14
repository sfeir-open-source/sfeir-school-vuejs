import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";

Vue.use(VueMaterial);

Vue.material.registerTheme("default", {
  primary: "blue",
  accent: "grey",
  warn: "red",
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  data: {
    name: "Sfeir",
  },
});
