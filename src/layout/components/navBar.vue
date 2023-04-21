<template>
  <div class="navbar-wrap">
    <p class="title">MASS</p>
    <div>
      <el-popover placement="top-start" :width="120" :hidden="hover">
        <template #default>
          <div
            class="info-wrap"
            style="text-align: center; padding: 0 5px; color: #666"
          >
            <p
              class="text-one"
              style="
                cursor: pointer;
                line-height: 35px;
                border-bottom: 1px solid #1c69ff;
              "
            >
              用户信息
            </p>
            <p class="text-two" style="cursor: pointer; line-height: 35px">
              退出登录
            </p>
          </div>
        </template>
        <template #reference>
          <div class="menu-wrap">
            <p>admin</p>
            <img src="../../assets/image/avatar.png" alt="" />
            <el-icon color="#fff"><CaretBottom /></el-icon>
          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>
  <script lang="ts">
import {
  computed,
  defineComponent,
  initCustomFormatter,
  onMounted,
  ref,
} from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "navBar",
  setup() {
    const hover = ref(false);
    return {
      hover,
    };
  },
});
</script>
  
  <style lang="scss" scoped>
.navbar-wrap {
  width: 100%;
  height: 66px;
  background-color: #070b1d;
  padding: 0 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 50px;
    color: #afb1ba;
  }

  .menu-wrap {
    display: flex;
    align-items: center;
    p {
      color: #fff;
      font-size: 16px;
      margin-right: 10px;
    }
    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>