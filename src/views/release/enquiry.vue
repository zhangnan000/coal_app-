<template>
  <div class="release-wrap">
    <div class="top-title">
      <img src="../../assets/images/back_icon.png" alt="" @click="back_page">询价挂牌
    </div>
    <p class="step-p">
      <span class="step1-title">1.询价条件</span>
      <span class="step2-title" :class="{'activeColor':isSteptwo}"> >&nbsp;2.添加煤种</span>
    </p>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'enquiry',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['isSteptwo'])
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    // 返回
    back_page() {
      let _name = this.$route.name
      if (_name == 'steptwo') {
        this.$router.go(-2)
      } else {
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
$dotColor: #1e92ec;
.release-wrap {
  background: #f5f6f7;
  .step-p {
    padding: 30px 40px 0;
    margin-top: 80px;
    .step1-title {
      font-size: 26px;
      color: #1e92ec;
    }
    .step2-title {
      font-size: 26px;
      color: #bdc1c3;
    }
    .activeColor {
      color: #1e92ec;
    }
  }
}
</style>


