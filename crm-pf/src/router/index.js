import { createRouter, createWebHistory } from 'vue-router';
// import ChatComponent from '../co]';
import Login from '@/views/Login.vue';

const routes = [
  {
    path: '/',
    name: "Login",
    component: Login,
  },
  {
    path: '/dashboard',
    component: () => import('@/layouts/default/Default.vue'), // Use the layout component as a wrapper
    children: [
      {
        path: 'user-managment',
        name: 'UserManagment',
        component: () => import(/* webpackChunkName: "home" */ '@/components/HelloWorld.vue'),
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
      {
        path: 'user-permission',
        name: 'UserPermission',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Admin/UserPermissions.vue'),
      },
      {
        path: 'task-permission',
        name: 'TaskPermission',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Admin/TaskPermissions.vue'),
      },
      {
        path: 'department-permission',
        name: 'DepartmentPermission',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Admin/DepartmentPermissions.vue'),
      },
      {
        path: 'teams-permission',
        name: 'TeamPermission',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Admin/TeamsPermissions.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
