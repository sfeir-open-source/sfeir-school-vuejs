import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const APP_ROUTES = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
];
export const APP_ROUTING = createRouter({
  history: createWebHashHistory(),
  routes: APP_ROUTES,
});
