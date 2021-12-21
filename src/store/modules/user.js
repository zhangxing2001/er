import { login, getUserInfo1 } from '@/api/user.js'
import md5 from 'md5'
import * as utils from '@/urils/storage'
import { TOKEN, USER_INFO } from '@/common/common'
import router from '@/router/index'
import { setTimeStamp } from '@/urils/auth.js'
const state = {
  token: utils.getItem(TOKEN) || '',
  userInfo: utils.getItem(USER_INFO) || {}
}
const getters = {}
const mutations = {
  setToken(state, token) {
    state.token = token
    utils.setItem(TOKEN, token)
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
    utils.setItem(USER_INFO, userInfo)
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
          // 记录token的获取时间
          setTimeStamp()
          resolve()
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  logout({ commit }) {
    // 清理用户数据
    commit('setToken', '')
    // 跳转登录页
    router.push('/login')
  },
  getUserInfo({ commit }) {
    alert(1)
    getUserInfo1()
      .then((res) => {
        commit('setUserInfo', res)
      })
      .catch((err) => {
        console.log(err)
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
