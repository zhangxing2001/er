import { login } from '@/api/user.js'
import md5 from 'md5'
import * as utils from '@/urils/storage'
import { TOKEN } from '@/common/common'
const state = {
  token: utils.getItem(TOKEN) || ''
}
const getters = {}
const mutations = {
  setToken(state, token) {
    state.token = token
    utils.setItem(TOKEN, token)
  }
}
const actions = {
  login({ commit }, info) {
    // 获取到账号和密码的信息
    const { username, password } = info

    return new Promise((resolve, reject) => {
      login({
        username,
        password: md5(password)
      })
        .then((res) => {
          // 保存token 保存到本地存储中
          commit('setToken', res.token)
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export default {
  namespaced: true, // 让组件是局部的
  state,
  getters,
  mutations,
  actions
}
