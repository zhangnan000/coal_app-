<template>
  <popup v-model="showDialog" height="100%" :show-mask="false">
    <div class="top-title">
      <img src="../../assets/images/back_icon.png" alt="" @click="back_page">{{title}}
    </div>
    <div class="textarea-wrap">
      <textarea class="text-cont" v-model="textInfo" placeholder="请输入"></textarea>
    </div>
    <span class="btn-sp" @click="success">确认</span>
  </popup>
</template>
<script>
import { Popup } from 'vux'
export default {
  name: 'remark',
  data() {
    return {
      textInfo: this.message
    }
  },
  props: {
    showDialog: Boolean,
    close: Function,
    title: String,
    message: String
  },
  watch: {
    message (newVal, oldVal) {
      this.textInfo = newVal
    }
  },
  components: { Popup },
  mounted() {
  },
  methods: {
    back_page() {
      this.close()
    },
    success() {
      this.$emit('remark', this.textInfo)
      this.close()
    }
  }
}
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
}
.textarea-wrap {
  width: 92%;
  height:60%;
  margin: 80px auto 0;
  padding: 40px 0 46px 0;
  text-align: center;
  .text-cont {
    width: 100%;
    height: 100%;
    padding:8px;
    font-size: 26px;
    outline: none;
  }
}
.btn-sp {
  display: block;
  width: 92%;
  height: 88px;
  line-height: 88px;
  margin: 25px auto 45px;
  background: #1e92ec;
  color: #fff;
  text-align: center;
  font-size: 32px;
  border-radius: 5px;
}
</style>


