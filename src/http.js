import axios from 'axios'
import router from './router/index'
import vue from 'vue'
const http = axios.create({
  baseURL: 'http://112.74.99.5:3000/web/api'
})

http.interceptors.request.use(
  function(config) {
    if (localStorage.getItem('Token') && localStorage.getItem('id')) {
      config.headers.Authorization = 'Bearer ' + localStorage.getItem('Token')
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function(response) {
    return response
  },
  function(error) {
    if (error.response.status === 401 || error.response.status === 402) {
      router.push('/login')
      vue.prototype.$msg.fail('请先登录！')
    }
    return Promise.reject(error)
  }
)

export default http
