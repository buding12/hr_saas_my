/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios'
import Store from '@/store'
import { Message } from 'element-ui'
const instance = axios.create({
  baseURL: '/api',
  timeout: 1000
  // headers: { 'X-Custom-Header': 'foobar' }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + Store.state.user.token
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
  // 对响应错误做点什么
  return Promise.reject(error)
})

export default instance
