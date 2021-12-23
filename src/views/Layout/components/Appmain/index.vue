<template>
  <div :class="store.getters.sideBarOpen ? 'app-main' : 'box'">
    <!-- 二级路由显示容器 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  padding: 50px 0;
  width: calc(100% - #{sideBarWidth}) !important;
  box-sizing: border-box;
  transition: all 0.5s;
}
.box {
  width: calc(100% - #{sideBarhideWidth}) !important;
  transition: all 0.5s;
  padding: 50px 0 !important;
}
</style>
