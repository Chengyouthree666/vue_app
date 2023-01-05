<script setup lang="ts">
import { ref, getCurrentInstance } from "vue";
import type { Ref, ComponentInternalInstance } from "vue";

const username: Ref<string> = ref("");
const password: Ref<string> = ref("");

const { proxy: _this } = getCurrentInstance() as ComponentInternalInstance;

// const username = ref("");

const login = () => {
  if (!username.value || !password.value) return;
  _this?.$router.push("/");
};
</script>

<template>
  <div class="login-page-container">
    <div class="main-content">
      <div class="form-card">
        <div class="title">live in color</div>
        <el-form label-width="100px">
          <el-form-item label="用户名：">
            <el-input
              clearble
              autocomplete="off"
              type="text"
              v-model.trim="username"
              @keydown.enter="login"
            />
          </el-form-item>
          <el-form-item label="密码：">
            <el-input
              clearble
              autocomplete="off"
              showPassword
              type="password"
              v-model.trim="password"
              @keydown.enter="login"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-page-container {
  height: 100%;
  background-image: linear-gradient(
    to left,
    rgba(18, 56, 229, 0.2),
    rgba(231, 55, 190, 0.5)
  );

  .main-content {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .form-card {
      z-index: 999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      height: 350px;
      width: 600px;
      padding: 10px;
      color: #fff;
      background-image: linear-gradient(
        to right,
        rgba(211, 211, 11, 0.5),
        rgba(35, 227, 14, 0.5)
      );

      :deep(.el-form) {
        height: 50%;
        width: 75%;
      }
      :deep(.el-input__wrapper) {
        .el-input__inner {
          color: rgb(8, 3, 70);
          background-color: #fff;
          font-size: 14px;
          font-weight: 500;
        }
      }

      .title {
        background-image: linear-gradient(
          45deg,
          rgb(124, 58, 237),
          #da62c4 30%,
          white 60%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 400%;
        background-position: 0%;
        font-size: 18px;
        font-weight: 600;
        width: 200px;
        height: 30px;
        text-align: center;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
