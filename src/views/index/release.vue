<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated zoomOut">
    <div class="release-wrap">
      <section class="sec-wrap">
        <div class="title">发布</div>
        <transition enter-active-class="animated bounceInUp" leave-active-class="animated fadeOut">
          <section class="grid-wrap" v-if="isShow">
            <router-link to="/sell" tag="div">
              <div class="item-wrap">
                <div class="icon-wrap sell-icon">
                </div>
                <span class="item-title">销售挂盘</span>
              </div>
            </router-link>
            <router-link to="/purchase" tag="div">
              <div class="item-wrap">
                <div class="icon-wrap purchase-icon">
                </div>
                <span class="item-title">采购挂盘</span>
              </div>
            </router-link>
            <router-link to="/enquiry" tag="div">
              <div class="item-wrap">
                <div class="icon-wrap enquiry-icon">
                </div>
                <span class="item-title">询价挂盘</span>
              </div>
            </router-link>
            <router-link to="/bidding" tag="div">
              <div class="item-wrap">
                <div class="icon-wrap bidding-icon">
                </div>
                <span class="item-title">竞价挂盘</span>
              </div>
            </router-link>
          </section>
        </transition>
        <div class="close-wrap" @click="closeEvent"></div>
      </section>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'release',
  data() {
    return {
      isShow: false
    }
  },
  created() {},
  mounted() {
    this.isShow = true
  },
  methods: {
    closeEvent() {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.release-wrap {
  background: #fff;
  .sec-wrap {
    width: 100%;
    height: 70%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .title {
    text-align: center;
    font-size: 36px;
    color: #4d4d4d;
  }
  .grid-wrap {
    width: 85%;
    height: 70%;
    margin: 15% auto 0;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    .item-wrap {
      width: 170px;
      height: 220px;
      @include flex-column(space-between, center);
      margin: 0 auto;
      text-align: center;
      .icon-wrap {
        width: 160px;
        height: 160px;
        border-radius: 50%;
      }
      .sell-icon {
        background: url(../../assets/images/release/sell-icon.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .purchase-icon {
        background: url(../../assets/images/release/purchase-icon.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .enquiry-icon {
        background: url(../../assets/images/release/enquiry-icon.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
      .bidding-icon {
        background: url(../../assets/images/release/bidding-icon.png) no-repeat
          center center;
        background-size: 100% 100%;
      }
    }
    .item-title {
      color: #4d4d4d;
      font-size: 28px;
    }
  }
  .close-wrap {
    width: 45px;
    height: 45px;
    margin: 30px auto 0;
    background: url(../../assets/images/close-icon.png) no-repeat center center;
    background-size: 100% 100%;
  }
}
</style>


