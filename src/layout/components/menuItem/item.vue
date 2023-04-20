<template>
  <div class="item" @click="goUrl">
    <el-icon><Star /></el-icon>
    <span>{{ title }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'MenuItem',
  functional: true,
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  setup(props) {
    const route = useRouter()
    const goUrl = () => {
      route.push({ path: props.url })
    }
    return { goUrl }
  }
})
</script>

