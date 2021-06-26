import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';
import App from './App.vue';

Vue.use(VueMaterial);

new Vue({
  render: h => h(App),
}).$mount('#app');
