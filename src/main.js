import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'
import axios from 'axios'
import AuthService from '@/services/auth-service.js'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/main.css'
import '@/assets/css/responsive.css'
import '@/assets/css/style.css'
import '@/assets/css/font-awesome.min.css'
import '@/assets/css/ionicons.min.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

axios.defaults.baseURL = 'https://vue-shop.tk/api'
axios.defaults.headers.common['project-name'] = 'admin'

AuthService.initAuthHeader()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
