import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from './modules/layout'
import login from './modules/login'
import notFound from './modules/notFound'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  layout,
  login,
  notFound,
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})

export default router
