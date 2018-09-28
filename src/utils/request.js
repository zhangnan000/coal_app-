import Axios from 'axios'
import store from '@/store/store'

Axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Axios.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json;charset=utf-8'
  if (store.getters.token) {
    config.headers['Token'] = store.getters.token
  }
  return config
})

export default Axios