<template>
  <div class="release-wrap">
    <div class="top-title">
      <img src="../../assets/images/back_icon.png" alt="" @click="back_page">提交完成
    </div>
    <div class="tip-wrap">
      <i class="iconfont icon-success"></i>
      <p class="tip-title">已经提交审核</p>
    </div>
    <p class="tip-add">审核预计在15分钟内完成，请耐心等待</p>
    <span class="btn-submit" @click="success">确定</span>
  </div>
</template>
<script>
export default {
  name: 'success',
  data() {
    return {}
  },
  mounted() {},
  methods: {
    back_page() {
      this.$router.push({name: 'waitReview'})
    },
    success() {
      this.$router.push({name: 'waitReview'})
    }
  }
}
</script>
<style scoped lang="scss">
.release-wrap {
  background: #f5f6f7;
  .tip-wrap {
    width: 90%;
    margin: 80px auto 0;
    padding: 80px 0 46px 0;
    text-align: center;
    border-bottom: 1px solid #e6e6e6; /*no*/
    .icon-success {
      font-size: 80px;
      color: #1e92ec;
    }
    .tip-title {
      font-size: 36px;
      text-align: center;
      padding: 25px 0 0;
    }
  }
  .tip-add {
    font-size: 26px;
    color: #9da2a6;
    text-align: center;
    padding: 25px 0 200px;
  }
}
</style>


