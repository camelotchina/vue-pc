import axios from 'axios'
import Cookies from 'js-cookie'
import { Message } from 'iview'

const envConfig = {
  dev: 'http://localhost:8080/api/v1/dev--------------',
  test: 'http://localhost:8080/api/v1/dev--------------',
  pre: 'http://localhost:8080/api/v1/pre-----',
  prd: 'http://localhost:8080/api/v1/prd---------'

}
export const baseURL = envConfig[process.env.BUILD_ENV || 'prd']

export const HTTP = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest',
      'token': Cookies.get('token')
    },
    post: {
      'Content-Type': 'application/json'
    }
  }
})

// 请求前的钩子函数
HTTP.interceptors.request.use(function (config) {
  config.headers.token = Cookies.get('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 请求后的钩子函数
HTTP.interceptors.response.use(function (res) {
  let { data } = res
  if (data.code !== 200 && data.code === 406) {
    Message.error('未登录，或登录失效，请登录')
    setTimeout(() => {
      window.location = '/#/login'
    }, 500)
  }
  return res
}, function (error) {
  Message.error('服务内部错误!')
  return Promise.reject(error)
})
