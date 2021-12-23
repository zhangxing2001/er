import { createStore } from 'vuex'
import getters from './modules/getters'
import user from './modules/user'
import app from './modules/app'
export default createStore({
  getters,
  state: {},
  mutations: {},
  actions: {},
  modules: { user, app }
})
