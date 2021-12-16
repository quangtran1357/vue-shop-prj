import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/Register.vue'
import Me from '../pages/Me.vue'
import ProductDetail from '../pages/ProductDetail.vue'
import ProductDetailBySlug from '../pages/ProductDetailBySlug.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/me',
    name: 'Me',
    component: Me,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/:slug',
    name: 'ProductDetailBySlug',
    component: ProductDetailBySlug,
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.requireAuth) {
    const auth = localStorage.getItem('vueShopToken')
    console.log(auth);
    if (auth && auth !== '') {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
})

export default router
