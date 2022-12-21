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
    meta: {
      auth: false
    },
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/auth/LoginPage.vue')
      },
      {
        path: 'registration',
        name: 'registration',
        component: () => import('pages/auth/RegistrationPage.vue')
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: () => import('pages/auth/ForgotPassword.vue')
      },
      {
        path: 'sent-email',
        name: 'sent-email',
        component: () => import('pages/auth/SentEmail.vue')
      },
      {
        path: 'new-password',
        name: 'new-password',
        component: () => import('pages/auth/NewPassword.vue')
      },
      {
        path: 'password-confirm',
        name: 'password-confirm',
        component: () => import('pages/auth/PasswordConfirm.vue')
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
