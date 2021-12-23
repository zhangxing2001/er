<template>
  <div>
    <el-dropdown trigger="click" @command="selectLang">
      <!-- 图标 -->
      <svg-icon iconName="language"></svg-icon>
      <!-- 下拉选项 -->
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item
            command="zh"
            :disabled="store.getters.lamguage === 'zh' ? true : false"
            >中文</el-dropdown-item
          >
          <el-dropdown-item
            command="en"
            :disabled="store.getters.lamguage === 'en' ? true : false"
            >英文</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import { ElMessage } from 'element-plus'
const i18n = useI18n()
const store = useStore()
const selectLang = (lang) => {
  // 修改vuex的language
  store.commit('app/setLanguage', lang)
  // i18n 中的locale
  i18n.locale.value = lang // 改变i18n/index.js 中local语言的变量
  // 提示语言切换成功
  ElMessage.success(i18n.t('msg.toast.switchLangSuccess'))
}
</script>

<style lang="scss" scoped></style>
