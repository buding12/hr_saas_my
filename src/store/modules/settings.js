import Cookies from 'js-cookie'

export default {
  // 每个模块必须开启命名空间
  namespaced: true,
  state: {
    // 当第一次打开页面或刷新时，就从cookie（即硬盘）里拿isFold
    isFold: Cookies.get('IS_FOLD') === 'true'
  },
  getters: {
  },
  mutations: {
    // 设置isFold
    TOGGLE_FOLD (state) {
      // 改变vuex里的isFold值
      state.isFold = !state.isFold
      // 改变cookie（即硬盘）里的isFold
      Cookies.set('IS_FOLD', state.isFold)
    }
  }
}
