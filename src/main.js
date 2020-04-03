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
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
