<template>
  <div class="cuttle_container" @click="toggleSideBar">
    <svg-icon :iconName="getIcon"></svg-icon>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const getIcon = computed(() => {
  return store.getters.sideBarOpen ? 'cuttle_close' : 'cuttle_open'
})
const toggleSideBar = () => {
  store.commit('app/toggleSideBar')
}
</script>

<style lang="scss" scoped>
.cuttle_container {
  padding: 0 16px;
  .cuttle {
    display: inline-block;
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
}
</style>
