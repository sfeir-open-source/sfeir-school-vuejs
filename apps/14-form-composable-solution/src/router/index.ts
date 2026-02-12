import { createRouter, createWebHashHistory } from 'vue-router';
import Details from '../pages/Details/Details.vue';
import Home from '../pages/Home/Home.vue';
import People from '../pages/People/People.vue';

const APP_ROUTES = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: People, name: 'people' },
  { path: '/people/:id', component: Details, name: 'details', props: true },
];
export const APP_ROUTING = createRouter({
  history: createWebHashHistory(),
  routes: APP_ROUTES,
});
