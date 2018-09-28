<template>
    <div class="my_order_box">
        <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt="" @click="back_page"> 我的订单
        </div>
        <ul class="order_type_box">
            <li v-for="(item,key) in tabs" :key="key" :class='item.isActive?"order_type_list_active":""' class="order_type_list" @click='handleChangeTab(key)'>
                {{item.text}}
            </li>
        </ul>
        <ul class="order_box">
            <li class="order_list">
                <div class="order_list_title">
                    <span>销售商：</span>
                    <span>浙江浙能富兴燃料有限公司</span>
                </div>
                <div class="order_list_bottom">
                    <div class="order_list_bottom_left">
                        <div class="order_list_left_one">
                            <span>安阳系列</span>
                            <span> · 煤种</span>
                        </div>
                        <div class="order_list_left_two">
                            <span>成交价格：</span>
                            <span>500</span>
                            <span>·元/吨</span>
                        </div>
                        <div class="order_list_left_two">
                            <span>成交数量：</span>
                            <span>10000</span>
                            <span>·元/吨</span>
                        </div>
                    </div>
                    <div class="order_list_bottom_right">
                        <p class="order_list_right_one">
                            等待合同上传
                        </p>
                        <p class="order_list_right_two">
                            剩余时间
                        </p>
                        <p class="order_list_right_three">2天12小时33分</p>
                    </div>
                </div>
            </li>
            <li class="order_list">
                <div class="order_list_title">
                    <span>销售商：</span>
                    <span>浙江浙能富兴燃料有限公司</span>
                </div>
                <div class="order_list_bottom">
                    <div class="order_list_bottom_left">
                        <div class="order_list_left_one">
                            <span>安阳系列</span>
                            <span> · 煤种</span>
                        </div>
                        <div class="order_list_left_two">
                            <span>成交价格：</span>
                            <span>500</span>
                            <span>·元/吨</span>
                        </div>
                        <div class="order_list_left_two">
                            <span>成交数量：</span>
                            <span>10000</span>
                            <span>·元/吨</span>
                        </div>
                    </div>
                    <div class="order_list_bottom_right">
                        <p class="order_list_right_one order_list_right_one_blue">
                            去上传
                        </p>
                        <p class="order_list_right_two">
                            剩余时间
                        </p>
                        <p class="order_list_right_three">2天12小时33分</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { getUserInfo } from "@/api/login";
export default {
  name: "mine_order",
  data() {
    return {
      tabs: [
        { text: "成交订单", isActive: true, orderStatus: 0 },
        { text: "手续审核", isActive: false, orderStatus: 1 },
        { text: "交易完成", isActive: false, orderStatus: 2 }
      ],
      num: this.$route.params.num
    };
  },
  created() {
    this.handleChangeTab(this.num);
  },
  methods: {
    handleChangeTab(key) {
      var tabArr = this.tabs;
      var idx = key;
      tabArr.forEach(el => {
        el.isActive = false;
      });
      tabArr[idx].isActive = true;
    },
    back_page() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.my_order_box {
  width: 100%;
  height: 100%;
  background: #f5f6f7;
}

.my_order_title {
  width: 100%;
  height: 88px;
  line-height: 88px;
  background: #fff;
  text-align: center;
  font-size: $extra-large-size;
  border-bottom: 1px solid #e6e6e6; /*no*/
  position: fixed;
  top: 0;
  left: 0;
  img {
    display: block;
    width: 56px;
    height: 56px;
    position: absolute;
    left: 10px;
    top: 16px;
  }
}

.order_type_box {
  height: 56px;
  line-height: 56px;
  width: 730px;
  border: 1px solid $blue-color;
  /*no*/
  display: flex;
  margin: 8px auto;
  border-radius: 5px;
  margin-top: 96px;
}

.order_type_list {
  justify-content: space-between;
  width: 33.3%;
  text-align: center;
  color: #333;
}
.order_type_list:nth-child(2) {
  border-right: 1px solid $blue-color;
  border-left: 1px solid $blue-color;
}
.order_type_list_active {
  background: $blue-color;
  color: #fff;
}
.order_box {
  width: 100%;
}
.order_list {
  width: 100%;
  height: 236px;
  border-top: 1px solid #e6e6e6; /*no*/
  border-bottom: 1px solid #e6e6e6; /*no*/
  border-radius: 5px;
  background: #fff;
  margin-bottom: 10px;
  padding-bottom: 15px;
}
.order_list_title {
  width: 100%;
  padding: 0 20px;
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #e6e6e6; /*no*/
  font-size: $base-size;
}
.order_list_title > span:nth-child(1) {
  color: $blue-color;
}
.order_list_bottom {
  width: 710px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.order_list_left_one{
    height: 66px;
    line-height: 66px;
    margin-top:8px;
}
.order_list_left_one>span:nth-child(1){
    font-size: $extra-large-size;
    font-weight: bold;
}
.order_list_left_one>span:nth-child(2){
    font-size: $base-size;
    color:$gray-color;
}
.order_list_left_two{
    height: 42px;
    line-height: 42px;
}
.order_list_left_two>span:nth-child(1){
    color:$gray-color;
    font-size: $base-size; 
}
.order_list_left_two>span:nth-child(2){
    color:$deep-gray-color;
    font-size: $base-size; 
    font-weight: bold;
}
.order_list_left_two>span:nth-child(3){
    color:$gray-color;
    font-size: $base-size; 
}
.order_list_right_one{
    color:$deep-gray-color;
    height: 66px;
    line-height: 66px;
    margin-top:8px;
    font-size: $base-size;
}
.order_list_right_two{
    height: 40px;
    line-height: 40px;
    color:$gray-color;
    font-size:$smallest-size;
    margin-top:8px;
}
.order_list_right_three{
    height: 40px;
    line-height: 40px;
    color:$gray-color;
    font-size:$small-size;
}
.order_list_right_one_blue{
    color:$blue-color;
}
</style>