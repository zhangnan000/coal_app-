import Vue from 'vue'
import Vuex from 'vuex'
import transation from './modules/transation'
import release from './modules/release'
import user from './modules/user'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    transation,
    release,
    user
  },
  getters
})