import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';
import People from './People.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: People, name: 'people' }
];

export const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes
});
