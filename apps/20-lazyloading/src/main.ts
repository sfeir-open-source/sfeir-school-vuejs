import naive from 'naive-ui';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import { ROUTER } from './views/router';

createApp(App).use(naive).use(ROUTER).use(createPinia()).mount('#app');
