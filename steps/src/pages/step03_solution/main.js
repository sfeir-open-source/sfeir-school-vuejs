import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App';

Vue.use(VueMaterial);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});