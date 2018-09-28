<template>
  <div class="container">
    <w-header>注册信息填写</w-header>
    <div class="progress">
      <span class="current">1.注册账号</span>
      <span class="current">></span>
      <span class="current">2.信息填写</span>
      <span>></span>
      <span>3.资料上传</span>
    </div>
    <div class="title">
      注册人信息
    </div>
    <div class="person-info">
      <div>
        <label for="">姓名</label>
        <input v-model="info.RegisterName" placeholder="注册人（被授权人）姓名" type="text">
      </div>
      <div>
        <label for="">手机号</label>
        <input v-model="info.RegisterTel" placeholder="注册人（被授权人）手机号 " type="text">
      </div>
    </div>
    <div class="title">
      公司信息
    </div>
    <div class="company-info">
      <div>
        <label for="">公司名</label>
        <input v-model="info.CompanyName" placeholder="注册公司全称" type="text">
      </div>
      <div>
        <label for="">法人代表</label>
        <input v-model="info.LegalPerson" placeholder="公司法人代表姓名" type="text">
      </div>
      <div>
        <label for="">法人联系电话</label>
        <input v-model="info.Tel" placeholder="公司法人联系电话" type="text">
      </div>
      <div>
        <label for="">统一社会信用代码</label>
        <input v-model="info.SocialCreditCode" placeholder="公司统一社会信用代码" type="text">
      </div>
    </div>
    <button @click="handleNextStep" class="register-btn">下一步</button>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { validateMobile } from '@/utils/validate'
import Vue from 'vue'
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin, {position: 'middle'})
export default {
  data () {
    return {
      info: {
        RegisterName:'伍鑫',
        RegisterTel:'18668438201',
        CompanyName:'浙江东驰',
        LegalPerson:'上官',
        Tel:'68873126',
        SocialCreditCode:'123456789987456321'
      }
    }
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleNextStep() {
      if(!this.info.RegisterName) {
        return this.$vux.toast.text('请输入注册人姓名')
      }
      if(!validateMobile(this.info.RegisterTel)) {
        return this.$vux.toast.text('请输入合法手机号')
      }
      if(!this.info.CompanyName) {
        return this.$vux.toast.text('请输入公司全称')
      }
      if(!this.info.LegalPerson) {
        return this.$vux.toast.text('请输入法人代表姓名')
      }
      if(!this.info.Tel) {
        return this.$vux.toast.text('请输入法人联系电话')
      }
      if(!this.info.SocialCreditCode) {
        return this.$vux.toast.text('请输入统一社会信用代码')
      }
      this.$store.commit('SET_FILL_INFO', this.info)
      this.$router.push('/uploadMterials')
    }
  }
}
</script>


<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  .container {
    min-height: 100vh;
    background-color: #fff;
    padding-top: 88px;
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

  .title {
    padding-left: 40px;
    font-size: $large-size;
    color: #0059b3;
  } 
  .person-info {
    padding: 0 40px;
    margin-bottom: 80px;
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
      }
      input {
        flex: 1
      }
    }
  }
  .company-info {
    padding: 0 40px;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 75px;
      margin-top: 50px;
      input {
        font-size: $large-size;
      }
    }
  }

  .register-btn {
      display: block;
      width: 610px;
      height: 80px;
      background-color: #1e92ec;
      border-radius: 8px;
      color: #fff;
      font-size: $large-size;
      line-height: 80px;
      margin-top: 110px;
      margin-left: auto;
      margin-right: auto;
    }
</style>
