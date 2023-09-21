import { createRouter, createWebHistory } from 'vue-router';
// import ChatComponent from '../co]';
import Signup from '@/components//common/Signup.vue';

const routes = [
  {
    path: '/signup',
    name: "Signup",
    component: Signup,
  },
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'), // Use the layout component as a wrapper
    children: [
      {
        path: 'user-managment',
        name: 'UserManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/UserManagment.vue'),
      },
      {
        path: 'task-managment',
        name: 'TaskManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'department-managment',
        name: 'DepartmentManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: 'teams-managment',
        name: 'TeamManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
