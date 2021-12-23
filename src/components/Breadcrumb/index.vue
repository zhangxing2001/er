<template>
  <el-breadcrumb separator="/" class="breadcrumb">
    <transition-group name="list">
      <el-breadcrumb-item v-for="item in breadcrumbData" :key="item.path">
        <!-- 如果是最后一项是不可以点击的 -->
        <span v-if="index === breadcrumbData.length - 1" class="no-redirect">{{
          item.meta.title
        }}</span>
        <a v-else class="redirect" @click.prevent="onLinkClick(item)">{{
          getTitle(item.meta.title)
        }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getTitle } from '@/urils/i18n'
const route = useRoute()
const router = useRouter()
const breadcrumbData = ref([])
watch(
  route,
  () => {
    breadcrumbData.value = route.matched.filter((item) => {
      return item.meta && item.meta.title
    })
  },
  { immediate: true }
)
// 点击跳转业务
const onLinkClick = (item) => {
  router.push({ path: item.path })
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
  .redirect {
    color: #666;
    font-weight: 600;
  }
}
</style>
