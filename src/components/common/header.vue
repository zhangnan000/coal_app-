<template>
  <div class="header">
      <i @click="handleBack" class=""></i>
      <slot>{{title}}</slot>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
  },
  data () {
    return {}
  },
  methods: {
    handleBack() {
      if(this.url) {
        this.$router.push(url)
        return
      }
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  .header {
    position: fixed;
    top: 0;
    width: 100%;
    height: 88px;
    line-height: 88px;
    font-size: $largest-size;
    text-align: center;
    background-color: #fff;
    z-index: 999;
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
</style>
