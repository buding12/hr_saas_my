import layout from '@/layout'
import department from '@/views/department'
export default {
  path: '/department',
  component: layout,
  meta: {
    isShow: true,
    title: '组织',
    icon: 'tree'
  },
  children: [
    {
      path: '',
      component: department
    }
  ]
}
