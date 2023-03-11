import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {

    user: {
      // 开启命名空间
      namespaced: true,
      state: {
        age: 10
      },
      getters: {
        myAge (state) {
          return state.age + 10
        }
      },
      mutations: {
        changeAge (state, val) {
          state.age = val
        }
      },
      actions: {
        getAge (state) {
          setTimeout(() => {
            const data = { age: 90 }
            Store.commit('changeAge', data.age)
          }, 1000
          )
        }
      }
    },
    shopCar: {
      // 开启命名空间
      namespaced: true,
      state: {
        age: 113
      },
      getters: {

      },
      mutations: {
        changeAge (state, val) {
          state.age = val
        }
      },
      actions: {

      }
    }
  }
})
