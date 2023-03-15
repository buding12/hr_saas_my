import Vue from 'vue'
import VueRouter from 'vue-router'
// 静态路由
import login from './staticMoudules/login'
import notFound from './staticMoudules/notFound'
import home from './staticMoudules/home'
// 动态路由规则
import department from './asyncModules/department'
import employee from './asyncModules/employee'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  // 静态路由规则
  login,
  notFound,
  home,
  // 动态路由规则
  department,
  employee,
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
