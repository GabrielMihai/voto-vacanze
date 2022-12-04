import { createRouter, createWebHistory } from 'vue-router';
import Login from '../routes/Login.vue';
import Home from '../routes/Home.vue';

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
