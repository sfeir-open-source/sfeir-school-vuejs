
import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import VueRouter from 'vue-router';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './views/router.js';
// eslint-disable-next-line no-unused-vars
import upperDirective from './directives/upperCase.directive';
import store from './store';

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Vuelidate);

Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'grey',
  warn: 'red',
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});