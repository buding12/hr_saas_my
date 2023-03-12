// 导入cookie
import { getToken, setToken, removeToken } from '@/utils/auth'
import { login } from '@/api/login'
export default {
  // 开启命名空间
  namespaced: true,
  state: {
    token: getToken()
  },
  getters: {

  },
  mutations: {
    // 获取token
    SET_TOKEN (state, val) {
      state.token = val
      setToken(val)
    },
    // 删除token
    DEL_TOKEN (state) {
      state.token = null
      removeToken()
    }

  },
  actions: {
    // 登录写到异步
    async login ({ commit }) {
      const res = await login({
        mobile: '13800000002',
        password: '123456'
      })
      commit('SET_TOKEN', res.data)
      // 把token存到vuex中
      // this.$store.commit('user/SET_TOKEN', res.data)
    }
  }
}
