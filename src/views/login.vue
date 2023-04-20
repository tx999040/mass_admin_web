<template>
  <div class="login">
    <div class="left"></div>
    <div class="right">
      <div class="info-wrap">
        <el-form :model="form" label-width="120px">
          <el-form-item>
            <p>mass</p>
          </el-form-item>
          <el-form-item label="用户名：">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input v-model="form.password" type="password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import router from '@/router'
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'loginPage',
  setup() {
    const form = reactive({
      name: '',
      password: ''
    })
    const handleLogin = () => {
      if (form.name == '123' && form.password == '456') {
        setTimeout(() => {
          router.push('/home')
        }, 100)
      }
    }

    return {
      form,
      handleLogin
    }
  }
})
</script>
<style lang="scss">
.login {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: #f1f1f1;
  display: flex;
  .left {
    flex: 2;
    height: 100%;
    background: url('/src/assets/image/login-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
  }
  .right {
    flex: 1;
    height: 100%;
    background-color: #fff;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    .info-wrap {
      display: flex;
      flex-direction: column;
      padding: 100px 40px;
      p {
        font-size: 50px;
        color: #666;
      }
    }
  }
}
</style>
