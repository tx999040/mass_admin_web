<template>
  <div class="bread-wrap">
    <el-tag v-for="tag in tags" :key="tag.name" closable class="mix">
      {{ tag.name }}
    </el-tag>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'BreadCrumb',
  setup() {
    const routers = useRouter()
    const store = useStore()
    const tags = computed(() => {
      return store.state.cachedTags
    })
    return {
      tags: tags,
      routers: routers
    }
  }
})
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
