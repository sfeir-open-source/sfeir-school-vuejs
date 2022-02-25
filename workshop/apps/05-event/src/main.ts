import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/theme/default.css';
import 'vue-material/dist/vue-material.min.css';
import App from './App.vue';

Vue.use(VueMaterial);

Vue.material = {
  ...Vue,
  theming: {
    primary: 'blue',
    accent: 'grey',
    warn: 'red',
  },
};

new Vue({
  render: h => h(App),
}).$mount('#app');
