<template>
  <div class="mine_box">
    <div class="mine_box_title">
      <div class="set_up_icon">
        <img src="../../assets/images/set_up.png" alt="">
      </div>
      <div class="mine_box_backgroud">
      </div>
      <img src="../../assets/images/user.png">
      <div class="is_login" v-if="is_login==1">
        <div class="manager_name">
          <span>{{user_info.Type}}</span>
          <span>{{user_info.Name}}</span>
        </div>
        <p class="mail_name">
          {{user_info.Account}}
        </p>
      </div>
      <div class="is_login" v-else @click="jump_to_login">
        <div class="manager_name">
          <span>去登录</span>
        </div>
      </div>
      
    </div>
    <!-- 我的订单 -->
    <div class="my_order ship_box_background">
      <div class="my_order_title" @click='jump_to_order_list(0)'>
        <p>我的订单</p>
        <img src="../../assets/images/arrow_icon.png" alt="">
      </div>
      <div class="order_type">
        <div class="order_type_list" @click='jump_to_order_list(0)'>
          <img src="../../assets/images/deal_order.png" alt="">
          <p>成交订单</p>
        </div>
        <div class="order_type_list"   @click='jump_to_order_list(1)'>
          <img src="../../assets/images/deal_order_two.png" alt="">
          <p>手续审核</p>
        </div>
        <div class="order_type_list"   @click='jump_to_order_list(2)'>
          <img src="../../assets/images/deal_order_three.png" alt="">
          <p>交易完成</p>
        </div>
      </div>
    </div>
    <!-- 快捷管理 -->
    <div class="quickly_manage ship_box_background">
      <p class="quickly_manage_title">快捷管理</p>
      <ul class="quickly_manage_box">
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_one.png" alt="">
          <div class="quickly_manage_right">
            <p>煤种信息</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_two.png" alt="">
          <div class="quickly_manage_right">
            <p>合格供应商</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_three.png" alt="">
          <div class="quickly_manage_right">
            <p>公司信息</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_four.png" alt="">
          <div class="quickly_manage_right">
            <p>合同管理</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_five.png" alt="">
          <div class="quickly_manage_right">
            <p>银行账户</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
        <li class="quickly_manege_list">
          <img src="../../assets/images/manage_list_six.png" alt="">
          <div class="quickly_manage_right">
            <p>交易管理账户</p>
            <img src="../../assets/images/arrow_icon.png" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getUserInfo } from "@/api/login";
export default {
  name: "mine",
  data() {
    return {
      user_info: {},
      is_login:0
      // user_params:{
      //   account:'747731122@qq.com',
      //   pwd:'16842f37a0fe0f3cc34305a7ea5a3b9a'
      // }
    };
  },
  created() {
    console.log(this.$store.state.user.loginInfo)
    if(this.$store.state.user.loginInfo.account==''){
      this.is_login=0
    }else{
      this.is_login=1
      this.getInfo();
    }
  },
  methods: {
    // 获取个人信息
    getInfo() {
      getUserInfo(this.$store.state.user.loginInfo)
        .then(({ data }) => {
          this.user_info = data;
        })
        .catch(err => {});
    },
    //定位到列表
    jump_to_order_list(num) {
      this.$router.push({
        name: "myOrder",
        params: {
          num: num
        }
      });
    },
    jump_to_login(){
      this.$router.push('login');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.mine_box {
  width: 100%;
  height: 100%;
  background: #f5f6f7;
  margin-bottom: 100px;
}
.mine_box_title {
  width: 100%;
  height: 290px;
  background: #fff;
  border-bottom: 1px solid #e6e6e6; /*no*/
  margin-bottom: 20px;
  position: relative;
}
.mine_box_backgroud {
  width: 100%;
  height: 130px;
  background: $blue-color;
}
.set_up_icon {
  position: absolute;
  right: 20px;
  top: 50px;
}
.set_up_icon > img {
  display: block;
  width: 48px;
  height: 48px;
}
.mine_box_title > img {
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 55px;
  margin: 0 auto;
  margin-top: -55px;
  z-index: 1;
}
.manager_name {
  width: 100%;
  height: 55px;
  line-height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.manager_name > span:nth-child(1) {
  display: block;
  width: auto;
  height: 30px;
  line-height: 32px;
  border-radius: 14px;
  padding: 0 12px;
  text-align: center;
  font-size: $small-size;
  color: #fff;
  background: $blue-color;
  margin-right: 15px;
}
.manager_name > span:nth-child(2) {
  font-size: $bigger-size;
  font-weight: bold;
}
.mail_name {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: $gray-color;
}
.ship_box_background {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 10px;
  border-top: 1px solid #e6e6e6; /*no*/
  border-bottom: 1px solid #e6e6e6; /*no*/
  box-sizing: border-box;
  margin-bottom: 20px;
}
.my_order {
  width: 100%;
  height: auto;
}
.my_order_title {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #e6e6e6; /*no*/
  p {
    font-size: $large-size;
  }
}
.my_order_title > img {
  display: block;
  width: 32px;
  height: 32px;
  margin-top: 24px;
}
.order_type {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
}
.order_type_list {
  width: 33%;
  padding-bottom: 25px;
}
.order_type_list > img {
  display: block;
  width: 48px;
  height: 48px;
  margin: 0 auto;
  margin-top: 30px;
}
.order_type_list > p {
  width: 100%;
  height: 42px;
  line-height: 42px;
  text-align: center;
  font-size: $base-size;
}
.quickly_manage {
  width: 100%;
  height: auto;
}
.quickly_manage_box {
  width: 100%;
  height: auto;
}
.quickly_manage_title {
  width: 100%;
  font-size: $base-size;
  padding-left: 20px;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #e6e6e6; /*no*/
}
.quickly_manege_list {
  width: 100%;
  height: 88px;
  line-height: 88px;
  display: flex;
}
.quickly_manege_list:last-child .quickly_manage_right {
  border: 0;
}
.quickly_manege_list > img {
  display: block;
  width: 48px;
  height: 48px;
  margin-top: 20px;
  margin-left: 6px;
}
.quickly_manage_right {
  display: flex;
  flex: 1;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6; /*no*/
}
.quickly_manage_right > p {
  font-size: $bigger-size;
  margin-left: 12px;
}
.quickly_manage_right > img {
  display: block;
  width: 36px;
  height: 36px;
  margin-right: 20px;
  margin-top: 26px;
}
</style>