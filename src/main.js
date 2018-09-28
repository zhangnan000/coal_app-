import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import filters from "./filters/index";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// import MintUI from 'mint-ui'
import 'normalize.css'
import '@/assets/css/common.scss'
import 'mint-ui/lib/style.css'
import 'lib-flexible'
import 'animate.css'
import '@/assets/font/iconfont.css'
// import  { ToastPlugin } from 'vux'
// Vue.use(ToastPlugin)
// 注册全局过滤器
for (const key in filters) {
  Vue.filter(key, filters[key])
}
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
