import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'
import zhCn from 'element-plus/lib/locale//lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import store from '../store/index'

export default (app) => {
  // app.use 使用一个插件 app.components()注册一个全局组件
  app.use(ElementPlus, {
    locale: store.getters.lamguage === 'zh' ? zhCn : en
  })
}
