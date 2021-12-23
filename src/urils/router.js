// 在js中可以直接引入node模块但要是在 .vue 中是引入不了的
import path from 'path'

// 去除重复的二级路由 爆出一二级的层级关系
// 获取所有的二级路由
const getChildrenRouters = (routes) => {
  const result = [] // 就拿到所有的二级路由
  routes.forEach((route) => {
    if (route.children && route.children.length > 0) {
      // 当前的路由是一级路由
      result.push(...route.children)
    }
  })
  return result
}
// 过滤出来所有的一级路由
export const filterRouter = (routes) => {
  // 获取所有的二级路由
  const childrenRouters = getChildrenRouters(routes)
  // 过滤出来所有的一级路由
  return routes.filter((router) => {
    return !childrenRouters.find((childrenRouter) => {
      return childrenRouter.path === router.path
    })
  })
}

// 为了配合v-for遍历生成菜单,需要格式化数据

/**
 * 判断数据是否为空值
 */
const isNull = (data) => {
  if (!data) return true
  if (JSON.stringify(data) === '{}') return true
  if (JSON.stringify(data) === '[]') return true
  return false
}
/**
 * 根据 routes 数据，返回对应 menu 规则数组
 */

export function generateMenus(routes, basePath = '') {
  const result = []
  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 children && 不存在 meta 直接 return
    if (isNull(item.meta) && isNull(item.children)) return
    // 存在 children 不存在 meta，进入迭代
    if (isNull(item.meta) && !isNull(item.children)) {
      result.push(...generateMenus(item.children))
      return
    }
    // 合并 path 作为跳转路径
    const routePath = path.resolve(basePath, item.path)
    // 路由分离之后，存在同名父路由的情况，需要单独处理
    let route = result.find((item) => item.path === routePath)
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: []
      }

      // icon 与 title 必须全部存在
      if (route.meta.icon && route.meta.title) {
        // meta 存在生成 route 对象，放入 arr
        result.push(route)
      }
    }

    // 存在 children 进入迭代到children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path))
    }
  })
  return result
}
