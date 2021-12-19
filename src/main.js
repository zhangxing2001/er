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

const app = createApp(App)
initSvgIcon(app)
installElementPlus(app)
app.use(store).use(router).mount('#app')
