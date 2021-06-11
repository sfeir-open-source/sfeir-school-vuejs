import VueRouter from 'vue-router';
import Home from './Home.vue';
import People from './People.vue';
import Update from './Update.vue';

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

export default new VueRouter({ routes: APP_ROUTES });
