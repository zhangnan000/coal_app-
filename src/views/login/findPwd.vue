<template>
  <div class="container">
    <w-header>设置密码</w-header>
    <div class="form">
      <div>
        <label for="">账号</label>
        <input v-model="recoverInfo.account" placeholder="请输入邮箱" type="text">
      </div>
      <div class="verify-code">
        <label for="">验证码</label>
        <input v-model="recoverInfo.code" placeholder="请输入验证码" type="text">
        <button @click="handleSendCode">获取验证码</button>
      </div>
      <div>
        <label for="">密码</label>
        <input v-model="recoverInfo.newPwd" placeholder="请输入新密码" type="password">
      </div>
      <div>
        <label for="">确认密码</label>
        <input v-model="recoverInfo.confirmPwd" placeholder="请与设置密码保持一致" type="password">
      </div>
      <button @click="handleNextStep" class="register-btn">
        重置密码
      </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { validateEmail } from '@/utils/validate'
import { recoverPwd, sendPwdCode } from '@/api/login'
import Vue from 'vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin, {position: 'middle'})
export default {
  data () {
    return {
        recoverInfo: {
        account: '963853182@qq.com',
        code: '560648',
        newPwd: 'wA!2345678',
        confirmPwd: 'wA!2345678'
      }
    }
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleSendCode () {
      if (!validateEmail(this.recoverInfo.account)) {
        return this.$vux.toast.text('请输入合法邮箱')
      }
      sendPwdCode({account: this.recoverInfo.account}).then(({data}) => {
        this.$vux.toast.show(data.Message)
      })
    },
    handleNextStep () {
      if(!this.recoverInfo.code) {
        return this.$vux.toast.text('请输入邮箱验证码')
      }
      if(!this.recoverInfo.newPwd) {
        return this.$vux.toast.text('请输入密码')
      }
      if(this.recoverInfo.newPwd != this.recoverInfo.confirmPwd) {
        return this.$vux.toast.text('两次密码输入不一致')
      }
      recoverPwd(this.recoverInfo).then(({data}) => {
        console.log(data)
        if(data.Flag) {
          return this.$router.push('/resetSuccess')
        }
        this.$vux.toast.text(data.Message)
      })
    },
  }
}
</script>


<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  .container {
    min-height: 100vh;
    padding-top: 88px;
    background-color: #fff;
  }
  .progress {
    padding: 30px 40px;
    color: #bdc1c3;
    .current {
      color: #1e92ec;
    }
    span:nth-child(2n) {
      margin-left: 20px;
      margin-right: 20px;
    }
  }

  .form {
    padding: 0 40px;
    div {
      height: 120px;
      border-bottom: 1px solid #e6e6e6; /*no*/
      font-size: $large-size;
      padding-top: 50px;
      display: flex;
      label {
        align-self: center;
        width: 145px;
        font-size: $bigger-size;
        // margin-right: 40px;
      }
      input {
        flex: 1
      }
    }
    .verify-code {
      position: relative;
      // input {
      //   width: 360px;
      // }
      button {
        position: absolute;
        right: 0;
        bottom: 20px;
        padding: 12px 20px;
        color: #fff;
        font-size: $base-size;
        border-radius: 8px;
        background-color: #1e92ec;

      }
    }
    .register-btn {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 615px;
      height: 80px;
      background-color: #1e92ec;
      border-radius: 8px;
      color: #fff;
      font-size: $large-size;
      line-height: 80px;
      margin-top: 110px;
    }
  }
</style>
