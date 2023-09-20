import { createRouter, createWebHistory } from 'vue-router';

// Import your layout component
import DefaultLayout from '@/layouts/default/Default.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'), // Use the layout component as a wrapper
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/Home.vue'), // Your Home.vue view
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
