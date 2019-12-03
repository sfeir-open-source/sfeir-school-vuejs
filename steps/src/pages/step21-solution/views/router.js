import VueRouter from 'vue-router'

import Home from './Home.vue'

function lazyLoad( view ){
  return () => import (`./${view}.vue`)
}

const Update = () => import('./Update.vue');

const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home,
  },
  {
    name: 'people',
    path: '/people',
    component: lazyLoad('People'),
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: Update,
  },
  {
    path: '/',
    redirect: '/home',
  }
]

export default new VueRouter({
  routes,
});