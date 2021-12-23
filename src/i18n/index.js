import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
import en from './lang/en'
import store from '../store/index'
// 定义数据
const messages = {
  en: {
    msg: {
      ...en
    }
  },
  zh: {
    msg: {
      ...zh
    }
  }
}
// 定义语言的类型
const locale = store.getters.lamguage || 'en'

// 初始化 i18n
const i18n = createI18n({
  legacy: false, // 配合vue 3.2 component API
  globalInjection: true,
  locale,
  messages
})

export default i18n
