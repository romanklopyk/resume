import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import Catalog from '../views/Catalog.vue'
import Payments from '../views/Payments.vue'
import Delivery from '../views/Delivery.vue'
import Product from '../views/Product.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/Catalog/:category',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/Payments',
        name: 'Payments',
        component: Payments
    },
    {
        path: '/Delivery',
        name: 'Delivery',
        component: Delivery
    },
    {
        path: '/Product/:id',
        name: 'Product',
        component: Product
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router