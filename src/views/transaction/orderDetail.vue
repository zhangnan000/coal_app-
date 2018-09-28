<template>
  <div>
    <div class="header">
      <i @click="handleGoBack" class=""></i> 订单详情
    </div>
    <div class="info">
      <div class="item">
        <p>销售单位</p>
        <p>{{brandInfo.CompanyName}}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>煤种</p>
        <p>{{brandInfo.Quality.CoalType}}</p>
      </div>
      <div class="item">
        <p>交割地</p>
        <p>{{brandInfo.DeliveryLocations}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>热值(kcai/kg)</p>
        <p>{{brandInfo.Quality.CoalQString}}-{{brandInfo.Quality.MaxCoalQString}}</p>
      </div>
      <div class="item">
        <p>合同基准硫分(%)</p>
        <p>{{brandInfo.Quality.CoalStdString}}-{{brandInfo.Quality.MaxCoalStdString}}</p>
      </div>
      <div class="line"></div>
      <div class="item">
        <p>库存(吨)</p>
        <p>{{brandInfo.LeftAmount}}</p>
      </div>
      <div class="item">
        <p>最小摘牌量(吨)</p>
        <p>{{brandInfo.MinimumDelisting}}</p>
      </div>
    </div>
    <div class="form-item">
      <div class="item">
        <p>单价(元/吨)</p>
        <p class="price">{{brandInfo.Price}}</p>
      </div>
      <div class="item">
        <p>购买数量(吨)</p>
        <input v-model="amount" placeholder="请输入购买数量" type="text">
      </div>
    </div>
    <div class="bottom">
      <div>
        总计：<span class="total-price">¥{{totalPrice}}</span>
      </div>
      <button @click="handleConfirm">确定下单</button>
    </div>
  </div>
</template>

<script>
import { confirmPutBrand } from '@/api/transaction'
export default {
  data () {
    return {
      amount:''
    }
  },
  computed: {
    brandInfo () {
      return this.$store.state.transation.putBrandInfo
    },
    totalPrice () {
      return this.amount * this.brandInfo.Price
    }
  },
  created () {
  },
  methods: {
    handleGoBack () {
      this.$router.go(-1)
    },
    handleConfirm() {
      let data = {
        amount: this.amount,
        listingId: this.$store.state.transation.id
      }
      confirmPutBrand(data).then(({data}) => {
        console.log(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/base.scss';
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
  .info {
    margin-top: 20px;
    padding: 20px;
    border-radius: 8px; /*no*/
    font-size: $bigger-size;
    background-color: #fff;
    .item {
      display: flex;
      p:first-child {
        width: 235px;
        color: #9da2a6; 
      }
      p:last-child {
        flex: 1;
        color: #262626;
      }
    }
  }

  .form-item {
    margin-top: 10px;
    background-color: #fff;
    border-radius: 8px; /*no*/
    padding: 0 20px;
    .item {
      line-height: 82px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid#e6e6e6; /*no*/
      p:first-child {
        width: 266px;
        font-size: $bigger-size;
      }
      .price {
        font-size: 40px;
        color: #ed801f;
      }
      input {
        flex: 1;
        padding-left: 20px;
        line-height: 56px;
        border-radius: 8px; /*no*/
        border: solid 1px #e6e6e6; /*no*/
        background-color: #f2f2f2;
      }
    }
  }

  .bottom {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 98px;
    display: flex;
    line-height: 98px;
    button {
      width: 212px;
      background-color: #1e92ec;
      color: #fff;
      font-size: $large-size;
    }
    div {
      flex: 1;
      background-color: #fff;
      font-size: $bigger-size;
      padding-left: 20px;
    }
    .total-price {
      color: #ed801f;
      font-size: $largest-size; 
    }
  }

  .line {
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    height: 1px; /*no*/
    background-color: #f0f0f0;
  }
</style>


