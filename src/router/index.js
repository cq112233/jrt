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

// 路由导航守卫 ,判断是够携带token
router.beforeEach((to, from, next) => {
  if( to.path =='/home'){
    next()
  }
  // 判断是否有token值
  const token = sessionStorage.getItem('token')
  // console.log(token)
  if( to.path !='/home' && token){
    next()
  }else{
    console.log('没登录')
    next('/home')
  }
})
export default router
