import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home.vue';

const APP_ROUTES = [
  { path: '', redirect: { name: 'home' } },
  { path: '/home', component: Home, name: 'home' },
];

export default createRouter({ 
  history: createWebHashHistory(),
  routes: APP_ROUTES 
});
