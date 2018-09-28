<template>
  <transition  enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight" >
    <div v-if="isShowFilter" class="container">
      <div class="content">
        <!-- 筛选 -->
        <div class="header">
          筛选
          <i @click="handleClose" class="close"></i>
        </div>
        <div class="search">
          <i></i>
          <input type="text">
        </div>
        <div class="item coal-type">
          <h4>煤种</h4>
          <span class="active">焦炭</span>
          <span>炼焦炭</span>
          <span>动力煤</span>
          <span>无烟煤</span>
          <span>喷吹煤</span>
        </div>
        <div class="item price-type">
          <h4>价格类型</h4>
          <span>商议</span>
          <span>具体价格</span>
          <span>指数挂钩</span>
        </div>
        <!-- 低位发热量 -->
        <div class="item">
          <h4>低位发热量(Qnet,ar)(Kal/kg)：</h4>
          <input type="text">
          <span class="line">—</span>
          <input type="text">
        </div>
        <div class="item">
          <h4>全水分(Mt)(%)：</h4>
          <input type="text">
          <span class="line">—</span>
          <input type="text">
        </div>
        <div class="item">
          <h4>干燥基全硫(St.d)(%)：</h4>
          <input type="text">
          <span class="line">—</span>
          <input type="text">
        </div>
        <div class="item">
          <h4>干燥基灰分(Ad)(%)：</h4>
          <input type="text">
          <span class="line">—</span>
          <input type="text">
        </div>
        <div class="item">
          <h4>干燥无灰基挥发份(Vdaf)(%)：</h4>
          <input type="text">
          <span class="line">—</span>
          <input type="text">
        </div>
      </div>
      <div class="btns">
        <button class="reset">重置</button>
        <button class="confirm">确定</button>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        isShowFilter: false
      }
    },
    methods: {
      handleClose() {
        this.isShowFilter = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/assets/css/base.scss';
  .container {
    z-index: 99;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .content {
    padding: 0 20px;
  }
  .header {
    position: relative;
    line-height: 100px;
    font-size: $largest-size;
    color: #262626;
    .close {
      position: absolute;
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
      width: 35px;
      height: 35px;
      background-image: url('../../assets/images/close-o.png');
      background-size: 35px 35px;
    }
  }
  .item {
    padding: 20px 0;
    border-bottom: 1px solid #f0f0f0;/*no*/  
    h4 {
      margin-bottom: 20px;
      font-size: $bigger-size;
      color: #262626;
    }
  }
  .item {
    input {
      width: 315px;
      height: 56px;
      background-color: #fafafa;
      border-radius: 8px;
      border: solid 1px #d9d9d9;/*no*/
      padding-left: 20px;
    }
    .line {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
  .coal-type,
  .price-type {
    span {
      display: inline-block;
      padding: 18px;
      color: #5c6266;
      background-color: #f0f2f2;
      border-radius: 4px;/*no*/
      margin-right: 15px;
      &.active {
        background-color: #1e92ec;
        color: #fff;
      }
    }
  }
  .search {
    position: relative;
    width: 100%;
    height: 70px;
    border: 1px solid #ccc;/*no*/
    padding-left: 70px;
    padding-right: 20px;
    border-radius: 8px;
    i {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      width: 28px;
      height: 28px;
      background-image: url('../../assets/images/search.png');
      background-size: 28px 28px;
    }
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
    }
  }
  .btns {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 70px;
    font-size: $large-size;
    button {
      flex: 1;
      line-height: 70px;
    }
    .reset {
      background-color: #e6e6e6;
      color: #5c6266;
    }
    .confirm {
      background-color: #1e92ec;
      color: #fff;
    }
  }
</style>

