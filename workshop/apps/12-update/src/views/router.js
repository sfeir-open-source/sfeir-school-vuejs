import VueRouter from 'vue-router';
import Home from './Home.vue';
import People from './People.vue';

const APP_ROUTES = [
  { path: '', redirect: { name: 'home' } },
  { path: '/home', component: Home, name: 'home' },
  { path: '/people', component: People, name: 'people' },
];

export default new VueRouter({ routes: APP_ROUTES });
