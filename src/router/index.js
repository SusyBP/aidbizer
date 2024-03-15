// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import DashboardView from '../components/DashboardView.vue'
// import MainComponent from '../components/MainComponent.vue'
import Home from '../views/Home.vue';
import SignIn from '../views/SignIn.vue';
import SignUp from '../views/SignUp.vue';
import CreateCompanyView from '../views/CreateCompanyView.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'Page',
      component: () => import('../components/MainComponent.vue'),
      children: [
        {
          path: '/aidbizer',
          name: 'Home',
          component: Home,
          auth: true
        },
        {
          path: '/aidbizer/debts',
          name: 'Debts',
          component: () => import('../views/Debts.vue'),
          auth: true
        },
        {
          path: '/aidbizer/products',
          name: 'Products',
          component: () => import('../views/ProductsView.vue'),
          auth: true
        },
        {
          path: '/aidbizer/sales',
          name: 'Sales',
          component: () => import('../views/Sales.vue'),
          auth: true
        },
        {
          path: '/aidbizer/orders',
          name: 'Orders',
          component: () => import('../views/Orders.vue'),
          auth: true
        },
        {
          path: '/aidbizer/expenses',
          name: 'Expenses',
          component: () => import('../views/Expenses.vue'),
          auth: true
        },
        {
          path: '/aidbizer/stock',
          name: 'Stock',//stock de productos
          component: () => import('../views/Stock.vue'),
          auth: true
        },
        {
          path: '/aidbizer/inventory',
          name: 'Inventory',//stock de materias primas
          component: () => import('../views/Inventory.vue'),
          auth: true
        },
        {
          path: '/aidbizer/production-processes',
          name: 'ProductionProcesses',//stock de materias primas
          component: () => import('../views/ProductionProcesses.vue'),
          auth: true
        },
        {
          path: '/aidbizer/invoices',
          name: 'Invoices',
          component: () => import('../views/Invoices.vue'),
          auth: true
        },
        {
          path: '/aidbizer/quote',
          name: 'Quote',
          component: () => import('../views/Quote.vue'),
          auth: true
        },
        {
          path: '/aidbizer/balance',
          name: 'Balance',
          component: () => import('../views/Balance.vue'),
          auth: true
        },
        {
          path: '/aidbizer/contacts',
          name: 'Contacts',
          component: () => import('../views/Contacts.vue'),
          auth: true
        },
      ],
      props: true
    },
    {
      path: '/aidbizer/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/aidbizer/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/aidbizer/create-my-company',
      name: 'CreateCompany',
      component: () => import('../views/CreateCompanyView.vue'),
    },
    {
      path: '/aidbizer/associate',
      name: 'Associate',
      component: () => import('../views/AssociateCompanyView.vue'),
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'error404',
      component: () => import('../views/Error404View.vue')
    },
  ]
})

export default router
