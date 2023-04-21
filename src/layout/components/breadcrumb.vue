<template>
  <div class="bread-wrap">
    <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      class="mix"
      @close="removeTag(tag)"
    >
      {{ tag }}
    </el-tag>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "BreadCrumb",
  setup() {
    const store = useStore();
    const tags = computed(() => {
      return store.state.cacheTags;
    });
    onMounted(() => {
      // console.log(tags,'tags')
    });
    const removeTag = (tag: string) => {
      store.dispatch("deleteCacheTags", tag);
    };

    return {
      tags,
      removeTag,
    };
  },
});
</script>
<style lang="scss" scoped>
.bread-wrap {
  height: 44px;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .mix {
    margin: 0 5px;
  }
}
</style>
