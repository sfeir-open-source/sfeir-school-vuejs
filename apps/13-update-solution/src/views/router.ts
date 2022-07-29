import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';
import Home from './Home.vue';
import People from './People.vue';
import Update from './Update.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: People, name: 'people' },
  { path: '/people/:id', component: Update, name: 'people-update', props: true }
];

export const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes
});
