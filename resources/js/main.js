import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto'
import { store } from './store/store'

Vue.use(VueScrollTo)
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init();
    },
    router,
    render: h => h(App)
}).$mount('#app')


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.loggedIn) {
            next({
                name: 'Login',
            })
        } else {
            next()
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.getters.loggedIn) {
            next({
                name: 'Dashboard',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})
