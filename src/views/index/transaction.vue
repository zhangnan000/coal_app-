<template>
  <div>
    <!-- 交易首页 -->
    <div class="tab">
      <router-link to="/transaction/putBrand" tag="div">
        <a href="javascript:;">挂摘牌专区</a>
      </router-link>
      <router-link to="/transaction/enquirePrice" tag="div">
        <a href="javascript:;">询比价专区</a>
      </router-link>
      <router-link to="/transaction/bidPrice" tag="div">
        <a href="javascript:;">竞价专区</a>
      </router-link>
    </div>
    <router-view></router-view>
    <!-- 筛选按钮 -->
    <div @click="handleOpenFilter" class="filter">
      <i></i>
      筛选
    </div>
    <!-- 筛选 -->
    <filter-con ref="filter"></filter-con>
  </div>
</template>

<script>
import filter from '@/views/transaction/filter'
  export default {
    components: {
      'filter-con': filter
    },
    data() {
      return {
      }
    },
    methods: {
      handleOpenFilter () {
        this.$refs.filter.isShowFilter = true;
      }
    }
  }
</script>


<style lang="scss" scoped >
@import '@/assets/css/base.scss';
.tab {
  height: 108px;
  font-size: $large-size;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $block-bg;
  div {
    flex: 1;
    position: relative;
    text-align: center;
    &.router-link-active::after {
      content: '';
      width: 155px;
      height: 4px;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-color: #1e92ec;
    }
    &.router-link-active {
      a {
        color: #1e92ec;
      }
    }
  }
  a {
    line-height: 108px;
  }
}

.filter {
  position: fixed;
  right: 0;
  bottom: 140px;
  width: 126px;
  height: 66px;
  line-height: 66px;
  padding-left: 62px;
	background-color: #333333;
  border-radius: 33px 0px 0px 33px;
  border-right: 8px solid #1e92ec;
  color: #fff;
  i {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 35px;
    height: 35px;
    background-image: url('../../assets/images/filter.png');
    background-size: 35px 35px;
  }
}
</style>


