import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import About from '../views/About.vue';
import SatelliteImagery from '../views/SatelliteImagery.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/satellite-imagery',
    name: 'SatelliteImagery',
    component: SatelliteImagery,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;