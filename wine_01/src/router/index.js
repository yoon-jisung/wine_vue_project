import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: () => import('../views/Landing.vue'),
  },
  {
    path: '/testing',
    name: 'Testing',
    component: () => import('../views/Testing.vue'),
  },
  {
    path: '/result',
    name: 'Result',
    component: () => import('../views/Result.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
