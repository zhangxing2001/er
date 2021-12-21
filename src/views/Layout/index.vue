<template>
  <div class="app-wrapper">
    <!-- 左边 -->
    <sideber
      class="siderbar-container"
      :style="{ backgroundColor: variables.subMenuBg }"
    />
    <!-- 右边 -->
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar />
      </div>
      <appmain />
    </div>
  </div>
</template>

<script setup>
import Appmain from './components/Appmain/index.vue'
import Sideber from './components/Sideber/index.vue'
import NavBar from './components/NavBar/index.vue'
import variables from '@/styles/variables.scss'
</script>

<style lang="scss" scoped>
@import '~@/styles/common.scss';
@import '~@/styles/variables.scss';
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  .siderbar-container {
    transition: width 0.28s;
    width: 210px !important;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
  .main-container {
    .fixed-header {
      position: fixed !important;
      top: 0px;
      right: 0px;
      z-index: 10;
      width: calc(100% - #{$sideBarWidth}); // 用来动态计算宽度的
      // width: calc(100% - #{$sideBarWidth}); // 用来动态计算宽度的
    }
  }
}
</style>
