import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto'

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