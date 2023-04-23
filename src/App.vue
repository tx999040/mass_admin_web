
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import router from "./router";
export default defineComponent({
  setup() {
    const init = () => {
      const routes = router.options.routes;
      const store = useStore();
      store.dispatch("setViewTags", routes);
    };
    onMounted(() => {
      init();
    });
    return {
      init,
    };
  },
});
</script>

<style lang="scss">
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: hidden;
  overflow-x: hidden;
  background-color: #f1f1f1;
}
* {
  padding: 0;
  margin: 0;
}
.container {
  padding: 15px;
}
</style>
