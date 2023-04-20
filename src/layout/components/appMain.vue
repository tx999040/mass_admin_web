<template>
  <div class="app-main-wrap">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'appMain',
  components: {},
  setup() {}
})
</script>

<style lang="scss" scoped>
.app-main-wrap {
  padding: 10px;
  height: 100%;
  flex: 1;
  .content {
    height: calc(100vh - 66px - 44px - 20px);
    background-color: #fff;
    border-radius: 4px;
    overflow-y: auto;
  }
}
</style>