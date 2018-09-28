<template>
  <div class="content">
    <h2>登陆</h2>
    <div class="form">
      <div>
        <label for="">账号</label>
        <input v-model="loginParams.account" placeholder="请输入账号" type="text">
      </div>
      <div>
        <label for="">密码</label>
        <input v-model="loginParams.pwd" placeholder="请输入密码" type="password">
      </div>
      <button @click="handleLogin">
        登陆
      </button>
    </div>
    <div class="bottom-nav">
      <router-link to='/registerReady'>新用户注册</router-link>
      <span>|</span>
      <router-link to='/findPwd'>忘记密码</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)
export default {
  data () {
    return {
      loginParams: {
        account:'18868700540',
        pwd:'Yutao1234*'
      }
    }
  },
  methods: {
    handleLogin () {
      this.$store.commit('SET_LOGIN_INFO', this.loginParams)
      this.$store.dispatch('LOGIN').then(res => {
        this.$router.push('/mine')
      }).catch(err => {
        this.$vux.toast.text(err, 'middle')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  .content {
    background-color: #fff;
    padding-top: 228px;
    min-height: 100vh;
  }
  h2 {
    font-size: 40px;
    text-align: center;
    background-color: #fff;
  }

  .form {
    padding: 65px;
    div {
      height: 120px;
      border-bottom: 1px solid #e6e6e6; /*no*/
      font-size: $large-size;
      padding-top: 50px;
      label {
        font-size: $bigger-size;
        margin-right: 40px;
      }
    }
    button {
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

  .bottom-nav {
    position: absolute;
    width: 100%;
    bottom: 40px;
    text-align: center;
    font-size: $large-size;
    span {
      color: #bdc1c3;
      margin-left: 20px;
      margin-right: 20px;
    }
    a:first-child {
      color: #1e92ec;
    }
  }


</style>

