import { createStore } from 'vuex'
import getters from './modules/getters'
import user from './modules/user'
export default createStore({
  getters,
  state: {},
  mutations: {},
  actions: {},
  modules: { user }
})
