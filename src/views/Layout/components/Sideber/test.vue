<template>
  <!-- 菜单 -->
  <el-menu
    :background-color="variables.menuBg"
    text-color="#fff"
    active-text-color="#409EFF"
    :unique-opened="true"
    default-active="2-1"
  >
    <!-- 包含子菜单 -->
    <el-sub-menu index="1">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-menu-item index="1-1">菜单1</el-menu-item>
      <el-menu-item index="1-2">菜单2</el-menu-item>
    </el-sub-menu>
    <!-- 不包含子菜单 -->
    <el-sub-menu index="2">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-menu-item index="2-1">菜单1</el-menu-item>
      <el-menu-item index="2-2">菜单2</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="3">
      <template #title>
        <i class="el-icon-info"></i>
        <span>菜单4</span>
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <template #title>
        <i class="el-icon-info"></i>
        <span>菜单五</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>
