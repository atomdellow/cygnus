import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import WorldProjectPage from '../views/WorldProjectPage.vue';
//... import other pages

const routes = [
  { path: '/', component: HomePage },
  { path: '/worlds-projects', component: WorldProjectPage },
  //... other routes
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
