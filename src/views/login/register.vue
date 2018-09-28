<template>
  <div class="container">
    <w-header>注册账号</w-header>
    <div class="progress">
      <span class="current">1.注册账号</span>
      <span>></span>
      <span>2.信息填写</span>
      <span>></span>
      <span>3.资料上传</span>
    </div>
    <div class="form">
      <div>
        <label for="">账号</label>
        <input @blur="handleVerifyEmail" v-model="registerInfo.Account" placeholder="请输入邮箱" type="text">
      </div>
      <div class="verify-code">
        <label for="">验证码</label>
        <input v-model="registerInfo.EmailCode" placeholder="请输入验证码" type="text">
        <button @click="handleSendCode">获取验证码</button>
      </div>
      <div>
        <label for="">密码</label>
        <input v-model="registerInfo.Password" placeholder="数字英文标点组合的密码" type="password">
      </div>
      <div>
        <label for="">确认密码</label>
        <input v-model="registerInfo.ConfirmPassword" placeholder="请与设置密码保持一致" type="password">
      </div>
      <button @click="handleNextStep" class="register-btn">
        下一步
      </button>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { validateEmail } from '@/utils/validate'
import { checkEmail, sendEmailCode } from '@/api/register'
import Vue from 'vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin, {position: 'middle'})
export default {
  data () {
    return {
      registerInfo: {
        Account: '963853182@qq.com',
        Password: 'w12345678',
        ConfirmPassword: 'w12345678',
        EmailCode: '837277',
      }
    }
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleVerifyEmail () {
      if (!validateEmail(this.registerInfo.Account)) {
        return this.$vux.toast.text('请输入合法邮箱')
      }
      checkEmail(this.registerInfo.Account).then(({data}) => {
        if (data.Flag) {
          this.$vux.toast.text(data.Message)
          this.registerInfo.Account = ''
        }
      }).catch(err => {
        console.log(err)
      })
    },
    handleSendCode () {
      if (!validateEmail(this.registerInfo.Account)) {
        return this.$vux.toast.text('请输入合法邮箱')
      }
      sendEmailCode(this.registerInfo.Account).then(({data}) => {
        console.log(data)
        this.$vux.toast.show(data.Message)
      })
    },
    handleNextStep () {
      if(!this.registerInfo.EmailCode) {
        return this.$vux.toast.text('请输入邮箱验证码')
      }
      if(!this.registerInfo.Password) {
        return this.$vux.toast.text('请输入密码')
      }
      if(this.registerInfo.Password != this.registerInfo.ConfirmPassword) {
        return this.$vux.toast.text('两次密码输入不一致')
      }
      this.$store.commit('SET_REGISTER_INFO', this.registerInfo)
      this.$router.push('/fillInfo')
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
      width: 100%;
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
