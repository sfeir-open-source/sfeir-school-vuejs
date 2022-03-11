import { createRouter, createWebHashHistory } from 'vue-router';
const Home = () => import('./Home');
const People = () => import('./People');
const Update = () => import('./Update');

const APP_ROUTES = [
  { path: '', redirect: { name: 'home' } },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: People, name: 'people' },
  {
    path: '/people/:id',
    component: Update,
    name: 'people-details',
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes: APP_ROUTES
});
