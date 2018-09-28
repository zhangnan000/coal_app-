<template>
  <div>
    <w-header>注册准备</w-header>
    <div class="container">
      <h3>温馨提示</h3>
      <p class="tips">
        为了维护交易的公平可信，注册本平台交易商账户需要请提供以下资质认证，请确认是否准备完毕如果还未填写建议您先行准备，以免中断注册
      </p>
      <div class="content">
        <h4>您需要准备好的文件：</h4>
        <div>
          <p>
            <span>1</span>营业执照扫描件/照片
          </p>
          <p>
            <span>2</span>法人身份证扫描件/照片
          </p>
          <p>
            <span>3</span>被授权人身份证扫描件/照片
          </p>
        </div>
        <div>
          <p>
            <span>4</span> 法人代表授权书扫描件/照片  （有模板）
          </p>
          <p>
            <span>5</span> 交易商入市申请表扫描件/照片 （有模板）
          </p>
        </div>
        <button @click="handleShowPrompt">下载模板到邮箱</button>
      </div>
      <button @click="handleGoRegister" class="go-register">已准备好，开始注册</button>
    </div>
    <div v-if="isShowPrompt" class="prompt">
      <h5>获取模板邮箱填写</h5>
      <div class="msg">
        <div>
          <input v-model="email" placeholder="请输入获得模板的邮箱" type="text">
        </div>
        <div class="operation">
          <button @click="handleConfirm">确定</button>
          <button @click="handleCancel">取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/common/header'
import { ToastPlugin } from 'vux'
import Vue from 'vue'
Vue.use(ToastPlugin)
import { validateEmail } from '@/utils/validate'
export default {
  data () {
    return {
      isShowPrompt: false,
      email:''
    }
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleShowPrompt() {
      this.isShowPrompt = true
    },
    handleCancel() {
      this.isShowPrompt = false
    },
    handleConfirm() {
      if(!validateEmail(this.email)) {
        return this.$vux.toast.text('请输入合法邮箱')
      }
      this.isShowPrompt = false
    },
    handleGoRegister() {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
  .container {
    padding-top: 80px;
    padding-left: 70px;
    padding-right: 70px;
    min-height: 100vh;
    background-color: #fff;
  }

  h3 {
    font-size: 40px;
    margin-top: 100px;
  }

  .tips {
    margin-top: 60px;
    color: #616466;
    line-height: 38px;
  }

  .content {
    margin-top: 60px;
    font-size: $bigger-size;
    h4 {
      font-size: $bigger-size;
    }
    div {
      padding: 20px 0;
      border-bottom: 1px solid #e6e6e6; /*no*/
    }
    div:nth-child(3) {
      border: none;
    }
    p {
      line-height: 45px;
      span {
        font-weight: 700;
      }
      color: #666;
    }
    button {
      padding: 16px 20px;
      border-radius: 4px; /*no*/
      border: 1px solid #1e92ec; /*no*/
      color: #1e92ec;
      background-color: #fff;
    }
  }
  .go-register {
      margin-top: 80px;
      width: 100%;
      height: 80px;
      line-height: 80px;
      border-radius: 8px; /*no*/
      color: #fff;
      font-size: $large-size;
      background-color: #1e92ec;
    }
  .prompt {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 615px;
    background-color: #ffffff;
    box-shadow: 0px 5px 20px 0px 
      rgba(0, 0, 0, 0.16);
    border-radius: 8px; /*no*/
    border: solid 1px #d9d9d9;
    h5 {
      line-height: 70px;
      color: #666;
      padding-left: 20px;
      background-color: #f7f7f7;
    }
    .msg {
      padding: 30px;
      text-align: center;
      font-size: $large-size;
      input {
        text-align: center;
        width: 400px;
        margin-top: 80px;
        margin-bottom: 20px;
      }
    }
    .operation {
      text-align: center;
      padding-top: 30px;
      button {
        width: 180px;
        line-height: 54px;
        font-size: $bigger-size;
        border-radius: 8px; /*no*/
        margin: 10px;
        &:first-child {
          color: #fff;
          background-color: #1e92ec;
          border: 1px solid #1e92ec; /*no*/
        }
        &:last-child {
          background-color: #fff;
          color: #1e92ec;
          border: 1px solid #1e92ec; /*no*/
        }
      }
    }
  }
</style>

