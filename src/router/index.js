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
      path: '/bea-vue-vite/sales',
      name: 'Sales',
      component: () => import('../views/Sales.vue')
    },
    {
      path: '/bea-vue-vite/contacts',
      name: 'Contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/bea-vue-vite/expenses',
      name: 'Expenses',
      component: () => import('../views/Expenses.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: () => import('../views/Error404View.vue')
    },    
  ]
})

export default router
