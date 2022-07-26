import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' }
];

export const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes
});
