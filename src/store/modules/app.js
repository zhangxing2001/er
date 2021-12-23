import { LANGUAGR } from '../../common/common'
import { getItem, setItem } from '@/urils/storage'

const state = {
  sideBarOpened: true,
  language: getItem(LANGUAGR) || 'zh'
}
const mutations = {
  toggleSideBar(state) {
    state.sideBarOpened = !state.sideBarOpened
  },
  setLanguage(state, lang) {
    setItem(LANGUAGR, lang)
    state.language = lang
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
