import Vue from 'vue';
import VueRouter from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import Vuelidate from 'vuelidate';

import App from './App';
import router from './views/router.js';
import store from './store/';

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