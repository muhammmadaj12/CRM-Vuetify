import { createRouter, createWebHistory } from 'vue-router';
// import ChatComponent from '../co]';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/signup',
    name: "Signup",
    component: Signup,
  },
  {
    path: '/',
    name: "Login",
    component: Login,
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/default/Default.vue'), // Use the layout component as a wrapper
    // meta: { requiresAuth: true },
    children: [
      {
        path: 'user-managment',
        name: 'UserManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: 'task-managment',
        name: 'TaskManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: 'department-managment',
        name: 'DepartmentManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: 'teams-managment',
        name: 'TeamManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
        // meta: { requiresAuth: true },
      },
      {
        path: 'admin-layout',
        name: "Adminlayout",
        component: () => import(/* webpackChunkName: "home" */ '@/components/common/Adminlayout.vue'),
        // meta: { requiresAuth: true },
      },
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem('authToken');
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (isAuthenticated) {
//       // User is authenticated, allow access
//       next();
//     } else {
//       // User is not authenticated, redirect to login
//       next({ name: 'Login' });
//     }
//   } else {
//     // For routes that do not require authentication, allow access
//     next();
//   }
// });

export default router;
