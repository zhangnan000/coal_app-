import Router from 'vue-router'
import Vue from 'vue'
import wRouter from './wRouter'
import zRouter from './zRouter'
import store from '../store/store.js'
Vue.use(Router)
let router = new Router({
  routes: [...wRouter, ...zRouter]
})
router.afterEach((to, from) => {
  if (to.name == 'steptwo' || to.name == 'stepone') {
    store.commit('isSteptwo', to.name)
  }
})
export default router