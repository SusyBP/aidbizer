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
      path: '/bea-vue-vite/orders',
      name: 'Orders',
      component: () => import('../views/Orders.vue')
    },
    {
      path: '/bea-vue-vite/expenses',
      name: 'Expenses',
      component: () => import('../views/Expenses.vue')
    },
    {
      path: '/bea-vue-vite/stock',
      name: 'Stock',//stock de productos
      component: () => import('../views/Stock.vue')
    },
    {
      path: '/bea-vue-vite/inventory',
      name: 'Inventory',//stock de materias primas
      component: () => import('../views/Inventory.vue')
    },
    {
      path: '/bea-vue-vite/production-processes',
      name: 'ProductionProcesses',//stock de materias primas
      component: () => import('../views/ProductionProcesses.vue')
    },
    {
      path: '/bea-vue-vite/invoices',
      name: 'Invoices',
      component: () => import('../views/Invoices.vue')
    },
    {
      path: '/bea-vue-vite/quote',
      name: 'Quote',
      component: () => import('../views/Quote.vue')
    },
    {
      path: '/bea-vue-vite/stats',
      name: 'Stats',
      component: () => import('../views/Stats.vue')
    },
    {
      path: '/bea-vue-vite/balance',
      name: 'Balance',
      component: () => import('../views/Balance.vue')
    },
    {
      path: '/bea-vue-vite/contacts',
      name: 'Contacts',
      component: () => import('../views/Contacts.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: () => import('../views/Error404View.vue')
    },    
  ]
})

export default router
