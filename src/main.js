import { createApp } from 'vue'
// 导入 i18n 国际化
import App from './App.vue'
import router from './router'
import store from './store'
import installElementPlus from './plugins/element'
// 引入入口样式
import './styles/index.scss'

// 加载svg的处理
import initSvgIcon from './icon_svg/index.js'

// 用户鉴权
import './permission.js'

// 导入i18n
import i18n from './i18n/index'

const app = createApp(App)
initSvgIcon(app)
installElementPlus(app)
app.use(store).use(router).use(i18n).mount('#app')
