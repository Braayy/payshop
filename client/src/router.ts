import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    name: 'Inicio',
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    name: 'Conta',
    path: '/account',
    component: () => import('./views/Account.vue')
  },
  {
    name: 'Transação',
    path: '/transaction/:id',
    component: () => import('./views/Transaction.vue')
  },
  {
    name: 'Transferencia',
    path: '/transfer',
    component: () => import('./views/Transfer.vue')
  },
  {
    name: 'Sobre',
    path: '/about',
    component: () => import('./views/About.vue')
  },
  {
    name: 'Contato',
    path: '/contact',
    component: () => import('./views/Contact.vue')
  },
  {
    name: 'Login',
    path: '/login',
    component: () => import('./views/Login.vue')
  },
  {
    name: 'Register',
    path: '/register',
    component: () => import('./views/Register.vue')
  },
  {
    name: 'Recuperar',
    path: '/recovery',
    component: () => import('./views/Recovery.vue')
  },
  {
    name: 'Perfil',
    path: '/profile',
    component: () => import('./views/Profile.vue')
  },
  {
    name: 'Não Encontrado',
    path: '/:page(.*)',
    component: () => import('./views/NotFound.vue')
  }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
