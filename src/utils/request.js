import axios from 'axios'

// 设置请求头和请求路径
const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
  requestOptions: {
    withToken: true
  }
})

request.interceptors.request.use(
  (config) => {
    const token = window.sessionStorage.getItem('token')
    token && config?.requestOptions?.withToken && (config.headers.token = token)
    return config
  },
  (error) => {
    return PromiseRejectionEvent.reject(error)
  }
)

// 响应拦截
request.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      sessionStorage.setItem('token', '')
      // token过期操作
      return PromiseRejectionEvent.resolve(res.data)
    }
  },
  (error) => {
    if (error.response.status) {
      switch (error) {
        case 404:
          console.log('请求路径找不到！')
          break
        case 500:
          console.log('服务器内部错误！')
          break

        default:
          break
      }
    }
    return Promise.reject(new Error(error.message))
  }
)

// 暴露对象
export default request
