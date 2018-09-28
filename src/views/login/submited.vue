<template>
  <div class="container">
    <w-header>提交成功</w-header>
    <div class="main">
      <div class="tips">
      <i class="iconfont icon-success"></i>
      <p>已经提交审核</p>
      </div>
      <div class="msg">
        审核预计在15分钟内完成，请耐心等待
      </div>
      <button @click="handleConfirm">确定</button>
    </div>
    
  </div>
</template>


<script>
import Header from '@/components/common/header'
export default {
  data () {
    return {}
  },
  components: {
    'w-header': Header
  },
  methods: {
    handleConfirm(){
      this.$router.push('/mine')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  // .container {
  //   min-height: 100vh;
  //   background-color: #fff;
  // }
  .header {
    position: relative;
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: $largest-size;
    text-align: center;
    background-color: #fff;
    i {
      position: absolute;
      top: 50%;
      left: 30px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background-image: url('../../assets/images/back.png');
      background-size: 30px 30px;
    }
  }

  .main {
    padding: 0 40px;
  }

  .tips {
    margin-top: 85px;
    text-align: center;
    border-bottom: 1px solid #e6e6e6; /*no*/
    i {
      font-size: 78px;
      color: #1e92ec;
    }
    p {
      font-size: $largest-size;
      margin-bottom: 40px;
    }
  }

  .msg {
    margin-top: 40px;
    text-align: center;
    color: #9da2a6;
  }

  button {
    display: block;
    width: 615px;
    height: 80px;
    background-color: #1e92ec;
    border-radius: 8px;
    color: #fff;
    font-size: $large-size;
    line-height: 80px;
    margin-top: 260px;
    margin-left: auto;
    margin-right: auto;
  }


</style>


