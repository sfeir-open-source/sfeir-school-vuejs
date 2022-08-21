import naive from 'naive-ui';
import { createApp } from 'vue';
import './assets/main.css';

createApp({
  el: 'app',
  data() {
    return {
      name: 'SFEIR'
    };
  }
})
  .use(naive)
  .mount('#app');
