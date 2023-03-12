/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import router from '@/router'
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000
  // headers: { 'X-Custom-Headser': 'foobar' }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + store.state.user.token
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  const { data: { success, message } } = response
  if (success) {
    return response.data
  } else {
    Message.error(message)
    return Promise.reject()
  }
  // return 普通函数会包装成成功的promise成功对象
  // return response
}, function (error) {
  // 1.查看error中status在哪里，并解构出来
  // console.log(error)
  const { response: { status } } = error
  if (status === 401) {
    // 2.删除vuex和cookice中的tooken
    store.commit('user/DEL_TOKEN')
    // 3.跳转汇登陆页面
    router.replace('/login')
  }
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
