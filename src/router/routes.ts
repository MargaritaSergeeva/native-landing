import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'main',
        component: () => import('pages/MainPage.vue')
      },
      {
        path: 'contacts',
        name: 'contacts',
        component: () => import('pages/ContactsPage.vue')
      },
    ],
  },

  {
    path: '/auth',
    component: () => import('layouts/GuestLayout.vue'),
    children: [
      {
        path: 'enter',
        name: 'enter',
        component: () => import('pages/auth/LoginPage.vue')
      },
      {
        path: 'registration',
        name: 'registration',
        component: () => import('pages/auth/RegistrationPage.vue')
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
