<template>
  <div class="app-wrapper">
    <navBar></navBar>
    <div class="main-wrap">
      <SideMenu></SideMenu>
      <div class="main-right">
        <bread-crumb></bread-crumb>
        <app-main></app-main>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import AppMain from '@/layout/components/appMain.vue'
import navBar from '@/layout/components/navBar.vue'
import BreadCrumb from '@/layout/components/breadcrumb.vue'
import SideMenu from '@/layout/components/menuItem/index.vue'
export default defineComponent({
  name: 'mainApp',
  components: {
    SideMenu,
    AppMain,
    navBar,
    BreadCrumb
  },
  setup() {
    let classObj = ref(false)
    const isDeviced = computed(() => {
      return false
    })
    return {
      classObj,
      isDeviced
    }
  }
})
</script>
<style lang="scss">
.app-wrapper {
  height: 100vh;
  width: 100%;

  .main-wrap {
    width: 100%;
    height: calc(100vh - 66px);
    display: flex;
    .main-right {
      flex: 1;
    }
  }
}
</style>
