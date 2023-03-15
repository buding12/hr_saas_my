import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import '@/styles/myProgress.css'
// 导入导航守卫（全局的包含前置和后置）
import '@/permission'
import '@/icons'
// 自定义指令 -------------
import '@/directive'
Vue.config.productionTip = false
// 注册并使用element-ui
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
