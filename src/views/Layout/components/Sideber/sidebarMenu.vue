<template>
  <!-- 菜单 -->
  <el-menu
    :background-color="store.getters.cssVar.menuBg"
    :text-color="store.getters.cssVar.menuText"
    :active-text-color="store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    :default-active="activePath"
    :router="true"
    :collapse="!store.getters.sideBarOpen"
  >
    <!-- 一级二级菜单展示 -->
    <sidebar-item v-for="item in routes" :route="item" :key="item.path" />
  </el-menu>
</template>

<script setup>
import { filterRouter, generateMenus } from '@/urils/router'
import SidebarItem from './SidebarItem.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()
// console.log(router.options.routes)
// 获取路由
// console.log(router.getRoutes())
// 去重
// console.log(filterRouter(router.getRoutes()))
// 格式化
// console.log(generateMenus(router.options.routes))
// 因为以后路由要变化路由要变化 所以用计算属性
const routes = computed(() => {
  const filterRoutes = filterRouter(router.getRoutes())
  return generateMenus(filterRoutes)
})

const activePath = computed(() => {
  const { path } = route
  return path
})
// 获取路由
</script>

<style lang="scss" scoped></style>
