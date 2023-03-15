import layout from '@/layout'
import employee from '@/views/employee'
export default {
  path: '/employee',
  component: layout,
  meta: {
    isShow: true,
    title: '员工',
    icon: 'setting'
  },
  children: [
    {
      path: '',
      component: employee
    }
  ]
}
