// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../components/DashboardView.vue'
import ProductList from '../components/ProductList.vue'

const routes = [
    {
        path: '/bea-vue-vite/',
        name: 'Dashboard',
        component: DashboardView
    },
    {
        path: '/bea-vue-vite/products/',
        name: 'Products',
        component: ProductList
    }
]

const router = createRouter({ history: createWebHistory(), routes })
export default router
