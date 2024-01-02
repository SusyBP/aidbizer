// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import DashboardView from '../components/DashboardView.vue'
// import MainComponent from '../components/MainComponent.vue'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [    
    {
      path: '/bea-vue-vite',
      // name: 'Page',
      component: () => import('../components/MainComponent.vue'),
      children: [
          {
              path: '/bea-vue-vite/home',
              name: 'Home',
              component: Home,
              auth: true
          },
          {
              path: '/bea-vue-vite/debts',
              name: 'Debts',  
              component: () => import('../views/Debts.vue'),
              auth: true
          },
          {
              path: '/bea-vue-vite/products',
              name: 'Products',
              component: () => import('../views/ProductsView.vue'),
              auth: true
          },
          {
            path: '/bea-vue-vite/sales',
            name: 'Sales',
            component: () => import('../views/Sales.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/orders',
            name: 'Orders',
            component: () => import('../views/Orders.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/expenses',
            name: 'Expenses',
            component: () => import('../views/Expenses.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/stock',
            name: 'Stock',//stock de productos
            component: () => import('../views/Stock.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/inventory',
            name: 'Inventory',//stock de materias primas
            component: () => import('../views/Inventory.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/production-processes',
            name: 'ProductionProcesses',//stock de materias primas
            component: () => import('../views/ProductionProcesses.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/invoices',
            name: 'Invoices',
            component: () => import('../views/Invoices.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/quote',
            name: 'Quote',
            component: () => import('../views/Quote.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/balance',
            name: 'Balance',
            component: () => import('../views/Balance.vue'),
            auth: true
          },
          {
            path: '/bea-vue-vite/contacts',
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
      path: '/bea-vue-vite/signin',
      name: 'SignIn',
      component: SignIn
    },  
    {
      path: '/bea-vue-vite/signup',
      name: 'SignUp',
      component: SignUp
    }, 
  ]
})

export default router
