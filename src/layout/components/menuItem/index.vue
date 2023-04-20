<template>
  <div class="side-menu">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <sidebar-item
        v-for="item in routes"
        :key="item.path"
        :index="item.path"
        :item="item"
      ></sidebar-item>
    </el-menu>
  </div>
</template>
    
    <script lang="ts">
import SidebarItem from './sideItem.vue'
import routers from '@/router'
import { useRouter } from 'vue-router'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { SidebarItem },
  name: 'SideMenu',
  setup() {
    const router = useRouter()
    const routes = routers.options.routes
    const handleOpen = (v: any) => {
      console.log(v)
    }
    const handleClose = (v: any) => {
      console.log(v)
    }
    const goPage = (path: string) => {
      console.log(path, '9090')
      router.push(path)
    }

    return {
      routes,
      handleOpen,
      handleClose,
      goPage
    }
  }
})
</script>
  <style lang="scss">
.side-menu {
  height: 100%;
  width: 200px;
  background-color: #fff;
}
</style>
    