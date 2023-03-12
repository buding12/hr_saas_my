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
    // 不能用try/catch原因是：如果登陆失败，将报错的异常抛出
    async login ({ commit }) {
      const res = await login({
        mobile: '13800000002',
        password: '123456'
      })
      // 如果登陆失败，下面的代码就不会执行，原因：login()返回一个失败的promise对象
      commit('SET_TOKEN', res.data)
      // 把token存到vuex中
      // this.$store.commit('user/SET_TOKEN', res.data)
    }
  }
}
