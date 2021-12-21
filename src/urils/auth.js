import * as local from './storage'
import { TIME_STAMP } from '../common/common'
// 设置token 时间
export const setTimeStamp = () => {
  // 保存时间
  local.setItem(TIME_STAMP, Date.now())
}
// 获取保存的时间
const getTimeStamp = () => {
  return local.getItem(TIME_STAMP)
}
// token 时间是否超时 true 不过期 flase 过期
export const isCheckTimeOut = () => {
  // 现在的时间 保存的时间 > 2小时
  const currentTome = Date.now()
  /* eslint-disable-next-line */
  const time_stamp = getTimeStamp()
  /* eslint-disable-next-line */
  return currentTome - time_stamp <= TIME_STAMP
}
