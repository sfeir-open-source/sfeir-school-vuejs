import Vue from 'vue';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.css';

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
  el: '#app',
  data: { name: 'Sfeir' },
});
