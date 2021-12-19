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
// 请求其他....
