<template>
  <div>
    <w-header>报价详情</w-header>
    <div class="info">
      <div class="item">
        <p>销售单位</p>
        <p>{{bidPriceInfo.ReleaseCompany}}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>煤种</p>
        <p>{{bidPriceInfo.CoalInfo.CoalType}}</p>
      </div>
      <div class="item">
        <p>交割地</p>
        <p>{{bidPriceInfo.DeliveryLocation}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>热值(kcai/kg)</p>
        <p>{{bidPriceInfo.CoalInfo.CoalQString}}-{{bidPriceInfo.CoalInfo.MaxCoalQString}}</p>
      </div>
      <div class="item">
        <p>合同基准硫分(%)</p>
        <p>{{bidPriceInfo.CoalInfo.CoalStdString}}-{{bidPriceInfo.CoalInfo.MaxCoalStdString}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>竞价总数量(吨)</p>
        <p>{{bidPriceInfo.Amount}}</p>
      </div>
      <div class="item">
        <p>竞拍最低价(元/吨)</p>
        <p>{{bidPriceInfo.ReservePrice}}</p>
      </div>
    </div>
    <div class="form-item">
      <h4>上传保证金凭证</h4>
      <p>保证金盛和通过才能报价</p>
      <p>审核通过后可在动态-我的报价种进行连续报价</p>
      <label for="">
        <i class="iconfont icon-add"></i>
        <img v-if="promiseMoneyUrl" :src="promiseMoneyUrl" alt="">
        <input type="file">
      </label>
    </div>
    <div class="bottom">
      <button @click="handleConfirm">确定下单</button>
    </div>
  </div>
</template>

<script>
import { confirmPutBrand } from '@/api/transaction'
import Header from '@/components/common/header'

export default {
  data () {
    return {
      promiseMoneyUrl:'',
    }
  },
  components: {
    'w-header': Header
  },
  computed: {
    bidPriceInfo () {
      return this.$store.state.transation.bidPriceDetail
    }
  },
  created () {
  },
  methods: {
    handleConfirm() {
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';

  .info {
    margin-top: 110px;
    padding: 20px;
    border-radius: 8px; /*no*/
    font-size: $bigger-size;
    background-color: #fff;
    .item {
      display: flex;
      p:first-child {
        width: 245px;
        color: #9da2a6; 
      }
      p:last-child {
        flex: 1;
        color: #262626;
      }
    }
  }

  .line {
    width: 100%;
    height: 1px; /*no*/
    background-color: #e6e6e6;
    margin: 20px 0;
  }

  .form-item {
    margin-top: 10px;
    background-color: #fff;
    border-radius: 8px; /*no*/
    padding: 30px 20px;
    input {
      display: none;
    }
    h4 {
      color: #1e92ec;
      font-size: $large-size;
      margin-bottom: 25px;
    }
    p {
      font-size: $bigger-size;
      color: #616466;
      line-height: 32px;
    }
    label {
      display: block;
      position: relative;
      text-align: center;
      width: 180px;
      height: 180px;
      margin-top: 30px;
      margin-right: 30px;
      background-color: #f2f2f2;
      border-radius: 8px;
      border: solid 1px #cccccc; /*no*/
      color: #CCC;
      i {
        font-size: 54px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
    }
  }

  .bottom {
    padding: 20px;
    button {
      width: 100%;
      background-color: #1e92ec;
      color: #fff;
      line-height: 88px;
      font-size: $large-size;
      border-radius: 8px; /*no*/
    }
  }
</style>


