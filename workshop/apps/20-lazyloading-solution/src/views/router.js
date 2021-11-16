import VueRouter from 'vue-router';

const APP_ROUTES = [
  { path: '', redirect: { name: 'home' } },
  { path: '/home', component: () => import('./Home.vue'), name: 'home' },
  { path: '/people', component: () => import('./People.vue'), name: 'people' },
  {
    path: '/people/:id',
    component: () => import('./Update.vue'),
    name: 'people-details',
  },
];

export default new VueRouter({ routes: APP_ROUTES });
