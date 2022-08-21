import naive from 'naive-ui';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './vee-validate.config';
import { ROUTER } from './views/router';

createApp(App).use(naive).use(ROUTER).mount('#app');
