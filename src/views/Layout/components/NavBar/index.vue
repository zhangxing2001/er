<template>
  <div class="navbar">
    <!-- 切换侧边栏的组件 -->
    <Cuttle class="cuttle-container" />
    <Breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <!-- 国际化按钮 -->
      <SelectLasng class="right-menu-item" />
      <el-dropdown class="avatar-container">
        <!-- 头像 -->
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="50" :src="avatar"></el-avatar>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-drop-down">
            <el-dropdown-item>{{ $t('msg.navBar.home') }}</el-dropdown-item>
            <el-dropdown-item>{{ $t('msg.navBar.course') }}</el-dropdown-item>
            <el-dropdown-item @click="logout">{{
              $t('msg.navBar.logout')
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import avatar from '@/assets/logo.png'
import Cuttle from '@/components/Cuttle/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import SelectLasng from '@/components/SelectLang/index.vue'
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-radius: 0 1px 4px rgba(00, 21, 41, 0.08);
  .cuttle-container {
    line-height: 50px;
    float: left;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
  .breadcrumb-container {
    height: 50px;
    line-height: 50px;
  }
  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
    :deep(.right-menu-item) {
      display: inline-block;
      padding: 0 18px 0 0;
      color: #ccc;
      vertical-align: text-bottom;
      .defaultSvgClass {
        font-size: 24px;
        padding: 14px;
        &:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
    .avatar-container {
      cursor: pointer;
      .avatar-wrapper {
        position: relative;
        :deep(.el-avatar) {
          --el-avatar-background-color: none;
          --el-avatar-bg-color: none;
        }
      }
    }
  }
}
</style>
