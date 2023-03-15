import layout from '@/layout'
import home from '@/views/home'

export default {
  path: '/home',
  component: layout,
  meta: {
    isShow: true,
    title: '首页',
    icon: 'dashboard'
  },
  children: [
    {
      path: '',
      component: home
    }
  ]
}
