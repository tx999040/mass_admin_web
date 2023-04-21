<template>
  <div class="item" @click="goUrl">
    <!-- <el-icon><Star /></el-icon> -->
    <span class="title">{{ title }}</span>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default defineComponent({
  name: "MenuItem",
  functional: true,
  props: {
    url: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const route = useRouter();
    const store = useStore();
    const cacheTags = computed(() => {
      return store.state.cacheTags;
    });
    const goUrl = () => {
      route.push({ path: props.url });
      store.dispatch("setCacheTags", props.title);
    };
    return {
      goUrl,
      cacheTags,
    };
  },
});
</script>
<style lang="scss" scoped>
.item {
  .title {
    font-size: 12px;
  }
}
</style>

