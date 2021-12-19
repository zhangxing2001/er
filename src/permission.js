// 用户鉴权 路由守卫
import router from './router/index'
import stroe from './store/index'
const whiteRouter = ['/login'] // 白名单

router.beforeEach((to, from, next) => {
  /*
  用户鉴权
      当用户登录时(没有token) 智能进入login 页面
      用户登录后 token 未过期前 不允许进入login 页面
  */

  // 登录
  if (stroe.getters.token) {
    if (to.path === '/login') {
      // 不允许
      next('/')
    } else {
      next()
    }
    // 未登录
  } else {
    if (whiteRouter.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
