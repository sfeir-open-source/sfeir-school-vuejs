import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('./Home.vue'), name: 'home' },
  { path: '/people', component: () => import('./People.vue'), name: 'people' },
  { path: '/people/:id', component: () => import('./Update.vue'), name: 'people-update', props: true }
];

export const ROUTER = createRouter({
  history: createWebHashHistory(),
  routes
});
