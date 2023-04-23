<template>
  <div>
    <el-menu
      default-active="1"
      @open="handleOpen"
      @close="handleClose"
      class="side-menu"
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
import SidebarItem from "./sideItem.vue";
import routers from "@/router";
import { useRouter } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  components: { SidebarItem },
  name: "SideMenu",
  setup() {
    const router = useRouter();
    const routes = routers.options.routes;
    const handleOpen = (v: any) => {};
    const handleClose = (v: any) => {};
    const goPage = (path: string) => {
      router.push({ path });
    };

    return {
      routes,
      handleOpen,
      handleClose,
      goPage,
    };
  },
});
</script>
  <style lang="scss" scoped>
.side-menu {
  height: calc(100vh - 66px);
  background-color: #070b1d;
}
</style>
    