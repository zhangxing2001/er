<template>
  <div>
    <!-- logo -->
    <h1><img class="box_img" :src="aa" alt="" /></h1>
    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>
</template>

<script setup>
import SidebarMenu from './sidebarMenu.vue'
import aa from '@/assets/logo.png'
</script>

<style lang="scss" scoped>
h1 {
  margin: auto;
  text-align: center;
}
.box_img {
  width: 50px;
  margin: o auto;
}
</style>
