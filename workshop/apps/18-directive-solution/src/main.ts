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

Vue.directive('upper', UpperDirective);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
