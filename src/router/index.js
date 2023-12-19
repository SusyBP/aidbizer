// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../components/ProductList.vue'
import DashboardView from '../components/DashboardView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/bea-vue-vite',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/bea-vue-vite/products',
        name: 'Products',
        component: ProductsList
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: () => import('../views/Error404View.vue')
    },    
  ]
})

export default router
