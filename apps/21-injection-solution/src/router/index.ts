import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home/Home.vue';

const DetailsLazy = async () => await import('../pages/Details/Details.vue');
const PeopleLazy = async () => await import('../pages/People/People.vue');

const APP_ROUTES = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: PeopleLazy, name: 'people' },
  { path: '/people/:id', component: DetailsLazy, name: 'details', props: true },
];
export const APP_ROUTING = createRouter({
  history: createWebHashHistory(),
  routes: APP_ROUTES,
});
