// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import DashboardView from '../components/DashboardView.vue'
// import MainComponent from '../components/MainComponent.vue'
import Home from '../views/Home.vue'
import LoginView from '../components/LoginView.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [    
    {
      path: '/',
      // name: 'Page',
      component: () => import('../components/MainComponent.vue'),
      children: [
          {
              path: 'home',
              name: 'Home',
              component: Home,
              auth: true
          },
          // {
          //     path: 'dashboard',
          //     name: 'Dashboard',  
          //     component: DashboardView
          // },
          {
              path: 'products',
              name: 'Products',
              component: () => import('../views/ProductsView.vue'),
              auth: true
          },
          {
            path: 'sales',
            name: 'Sales',
            component: () => import('../views/Sales.vue'),
            auth: true
          },
          {
            path: 'orders',
            name: 'Orders',
            component: () => import('../views/Orders.vue'),
            auth: true
          },
          {
            path: 'expenses',
            name: 'Expenses',
            component: () => import('../views/Expenses.vue'),
            auth: true
          },
          {
            path: 'stock',
            name: 'Stock',//stock de productos
            component: () => import('../views/Stock.vue'),
            auth: true
          },
          {
            path: 'inventory',
            name: 'Inventory',//stock de materias primas
            component: () => import('../views/Inventory.vue'),
            auth: true
          },
          {
            path: 'production-processes',
            name: 'ProductionProcesses',//stock de materias primas
            component: () => import('../views/ProductionProcesses.vue'),
            auth: true
          },
          {
            path: 'invoices',
            name: 'Invoices',
            component: () => import('../views/Invoices.vue'),
            auth: true
          },
          {
            path: 'quote',
            name: 'Quote',
            component: () => import('../views/Quote.vue'),
            auth: true
          },
          {
            path: 'balance',
            name: 'Balance',
            component: () => import('../views/Balance.vue'),
            auth: true
          },
          {
            path: 'contacts',
            name: 'Contacts',
            component: () => import('../views/Contacts.vue'),
            auth: true
          },
      ]
  },
  
    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: () => import('../views/Error404View.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/LoginView.vue')
    },  
  ]
})

export default router
