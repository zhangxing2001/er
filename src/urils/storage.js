// 存储数据
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

// 获取数据
export const getItem = (key) => {
  const value = window.localStorage.getItem(key)
  try {
    // 是一个对象的字符串
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

// 删除单个数据
export const deleItem = (key) => {
  window.localStorage.removeItem(key)
}
// 删除所有数据
export const deleteItem = () => {
  window.localStorage.deleteItem()
}
