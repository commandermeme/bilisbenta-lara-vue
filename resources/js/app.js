import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueRouter from 'vue-router';
import VueScrollTo from 'vue-scrollto';
import store from '../store/store'

// import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/api/auth';
Vue.use(VueScrollTo);
Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
    created() {
        AOS.init();
    },
    store,
    router,
    render: h => h(App)
}).$mount('#app')