import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home.vue'
import Login from '../components/Login.vue'
Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = new VueRouter({
  routes
})

export default router
