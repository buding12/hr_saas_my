// 全局前置导航守卫
// (什么时候触发？ 进入任何一个页面组件都会触发，或者理解为：路由发生改变时，包括第一次打开页面)
import router from '@/router'
import store from './store'
import NProgress from 'nprogress'
router.beforeEach((to, from, next) => {
  // to 是即将要跳转的页面， from 是从哪个页面进行调转， next 是一个方法，作用：是否放行
  // 不要token也能访问页面
  NProgress.start()
  const whiteList = ['/login', '/404']
  // 先判断路由跳转的页面是否在白名单里
  if (whiteList.includes(to.path)) {
    // 如果在直接放行
    next()
  } else {
    // 如果不在检查是或否有token
    if (store.state.user.token) {
      // 有token 就放行
      next()
    } else {
      // 没有就返回到 登陆页面
      // 往next()方法里传一个路径就可以实现重定向
      next('/login')
    }
  }
})

// 当完全进入到页面组件后就会自动触发后置导航守卫（即页面组件加载完成）
router.afterEach((to, from) => {
  console.log('后置导航守卫')
  setTimeout(() => {
    NProgress.done()
  }, 2000)
})
