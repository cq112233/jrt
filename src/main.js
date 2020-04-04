// 引入vue
import Vue from 'vue'
// 映入app根组件
import App from './App.vue'
// 映入路由连接
import router from './router'
// 引入全局样式
import './assets/css/init.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入aixos
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000/';
// 响应请求拦截
axios.interceptors.response.use(config =>{
  // console.log(config)
  return config.data
})
// 将token值添加到请求头中
axios.interceptors.request.use(config =>{
  // console.log(config)
  config.headers.Authorization = sessionStorage.getItem('token')
  // console.log(config)
  return config
})
Vue.prototype.$axios = axios; 


Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
