import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('./views/About.vue')
  },
  {
    path: '/login',
    component: () => import('./views/Login.vue')
  },
  {
    path: '/register',
    component: () => import('./views/Register.vue')
  },
  {
    path: '/recovery',
    component: () => import('./views/Recovery.vue')
  },
  {
    path: '/profile',
    component: () => import('./views/Profile.vue')
  },
  {
    path: '/:page(.*)',
    component: () => import('./views/NotFound.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
