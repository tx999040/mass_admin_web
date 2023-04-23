<template>
  <div v-if="!item.meta || !item.meta.hidden" class="menu-wrapper">
    <el-sub-menu
      v-if="item.children && item.children.length"
      ref="subMenu"
      :index="item.path"
      popper-append-to-body
    >
      <template #title>
        <item v-if="item.meta" :url="item.path" :title="item.meta.title" />
      </template>
      <side-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="child.path"
        class="nest-menu"
      />
    </el-sub-menu>
    <div v-else :to="item.path">
      <el-menu-item
        :index="item.path"
        :class="{ 'submenu-title-noDropdown': !isNest }"
      >
        <item :url="item.path" :title="item.meta.title" />
      </el-menu-item>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import item from "./item.vue";
export default defineComponent({
  name: "SideItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
    isNest: {
      type: Boolean,
      default: false,
    },
    basePath: {
      type: String,
      default: "",
    },
  },
  components: {
    item,
  },
  setup() {
    onMounted(() => {});
    return {};
  },
});
</script>
<style lang="scss" scoped>
//@import "./sidebar.scss";
</style>
