import axios from '@/urils/requset.js'

// 定义user相关的网路请求
export const login = (data) => {
  // axios请求 promise
  return axios.request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户数据
export const getUserInfo1 = () => {
  return axios.request({
    url: '/sys/profile',
    method: 'GET'
  })
}
