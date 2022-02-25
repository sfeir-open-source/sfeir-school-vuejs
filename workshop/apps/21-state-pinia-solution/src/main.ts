import { createPinia, PiniaVuePlugin } from 'pinia';
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/vue-material.min.css';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import UpperDirective from './directives/upper.directive';
import router from './views/router';

Vue.use(VueMaterial);
Vue.use(VueRouter);
Vue.use(Vuelidate);
Vue.use(PiniaVuePlugin);

Vue.directive('upper', UpperDirective);

const pinia = createPinia();

new Vue({
  router,
  pinia,
  render: h => h(App),
}).$mount('#app');
