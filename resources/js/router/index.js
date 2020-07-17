import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue'),
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/register',
        name: 'Register',
        component: () =>
            import ('../views/Register.vue'),
        meta: {
            requiresVisitor: true,
        }
    },
    {
        path: '/logout',
        name: 'Logout',
        component: () =>
            import ('../views/Logout.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../components/Dashboard.vue'),
        meta: {
            requiresAuth: true,
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
