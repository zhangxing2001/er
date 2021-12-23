<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">{{ $t('msg.login.title') }}</h3>
        <SelectLang class="select-lang" />
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon color="#889aa4">
            <svg-icon iconName="user" />
          </el-icon>
        </span>
        <el-input
          placeholder="username"
          v-model="loginForm.username"
          name="username"
          type="text"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon color="#889aa4">
            <svg-icon iconName="password" />
          </el-icon>
        </span>
        <el-input
          placeholder="password "
          name="password"
          v-model="loginForm.password"
          :type="flag ? 'text' : 'password'"
        ></el-input>
        <span class="svg-container" @click="toggleIcon">
          <el-icon color="#889aa4">
            <svg-icon :iconName="flag ? 'eye-open' : 'eye'" />
          </el-icon>
        </span>
      </el-form-item>
      <el-button
        type="primary"
        @click="handleLogin"
        style="width: 100%; margin-top: 30px"
        >{{ $t('msg.login.loginBtn') }}</el-button
      >
      <div class="tips" v-html="$t('msg.login.desc')"></div>
    </el-form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { passwordValidate, usernameValidate } from './rule.js'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import SelectLang from '@/components/SelectLang/index.vue'
// import { useI18n } from 'vue-i18n'
// const i18n = useI18n()
const router = useRouter()
const store = useStore()
// 表单数据
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})

// 表单验证逻辑
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      // message: i18n.t('msg.login.usernameRule')
      validator: usernameValidate()
    }
  ],
  password: [
    {
      trigger: 'blur',
      validator: passwordValidate()
    }
  ]
})

// 切换password的状态
const flag = ref(false)
const toggleIcon = () => {
  flag.value = !flag.value
}

// 怎么引用dom 如果是标签拿到标签 如果是组件拿到组件
const loginRef = ref(null)
// 登录逻辑
const handleLogin = () => {
  // 验证一次表单的数据是否合法
  loginRef.value.validate((validate) => {
    if (!validate) {
      return // 一个规则没有通过
    }
    // 验证通过执行登录逻辑  调用定义好的action
    store.dispatch('user/login', loginForm.value).then((res) => {
      // 只有在登录成功的请款下 才执行登录 跳转
      router.push('/')
    }) // 登录发送异步请求 可能是ok 也可能是是不ok的
    // 只有在登录成功的情况下，才能执行登录跳转
  })
}
// 监听getters.Language 的变化
watch(
  () => store.getters.lamguage,
  (newvalue, oldvalue) => {
    // 中英文切换了 验证重新执行
    loginRef.value.validateField('username')
    loginRef.value.validateField('password')
  }
)
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$ligit_gray: #eee;
$cursor: #fff;
.login-container {
  min-height: 100%;
  width: 100%;
  height: 100vh;
  background: $bg;
  .title-container {
    position: relative;
    .title {
      font-size: 26px;
      color: $ligit_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
    :deep(.select-lang) {
      position: absolute;
      right: 0px;
      top: 4px;
      background: #fff;
      border-radius: 4px;
      .el-dropdown {
        font-size: 24px;
      }
    }
  }
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
    :deep(.el-form-item) {
      border: 1px solid reba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #1d1919;
      .el-input {
        height: 47px;
        width: 85%;
        .el-input__inner {
          background: transparent;
          border: 0px;
          border-radius: 0px;
          padding: 12px 5px 12px 15px;
          color: $cursor;
          height: 47px;
          caret-color: $cursor;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 5px 15px;
      color: $dark_gray;
      vertical-align: middle;
      display: inline-block;
    }
    .tips {
      font-size: 16px;
      line-height: 28px;
    }
  }
}
</style>
