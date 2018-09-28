<template>
    <div class="my_order_box">
        <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt=""> 订单详情
        </div>
        <div class="file_box">
            <div class="file_box_title">
                <span>合同</span>
                <span>未上传</span>
            </div>
            <div class="img_con_box">
                <div class="img_box">
                    <input type="file">
                    <img src="../../assets/images/add_pic.png" alt="">
                </div>
                <p class="con_title">支持图片格式：JPG/PNG</p>
            </div>
        </div>
        <div class="submit_box">
            <button>确认提交</button>
        </div>
        <div class="trade_information_box">
            <div class="trade_information_title">
                <p class="trade_information_left">
                    销售单位
                </p>
                <p class="trade_information_right">
                    浙江浙能天工信息科技有限公司
                </p>
            </div>
            <div class="trade_information_list">
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        煤种
                    </p>
                    <p class="trade_information_right">
                        动力煤
                    </p>
                </div>
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        交割地
                    </p>
                    <p class="trade_information_right">
                        六横岛
                    </p>
                </div>
            </div>
            <div class="trade_information_list">
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        热值(kcai/kg)
                    </p>
                    <p class="trade_information_right">
                        163
                    </p>
                </div>
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        合同基准硫分(%)
                    </p>
                    <p class="trade_information_right">
                        0.03
                    </p>
                </div>
            </div>
            <div class="trade_information_list trade_information_list_active">
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        数量(吨)
                    </p>
                    <p class="trade_information_right">
                        250.00
                    </p>
                </div>
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        总价(元)
                    </p>
                    <p class="trade_information_right">
                        50,000.00
                    </p>
                </div>
            </div>
        </div>
        <div class="order_detail">
            <div class="order_detail_cell">
                 <p class="trade_information_left">
                    订单编号
                </p>
                <p class="order_detail_right">
                    42
                </p>
            </div>
             <div class="order_detail_cell">
                 <p class="trade_information_left">
                    订单时间
                </p>
                <p class="order_detail_right">
                    2018.08.03 15:08:07
                </p>
            </div>
        </div>
         <div class="submit_box">
            <button>审核通过</button>
        </div>
    </div>
</template>
<script>
export default {
  name: "myOrderDetail",
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
   
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.my_order_box{
    width:100%;
    height: auto;
    background: #f6f6f6;
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
.file_box{
    width:100%;
    height: 290px;
    border-top:1px solid #e6e6e6;/*no*/
    border-bottom:1px solid #e6e6e6;/*no*/
    margin-top:108px;
    background: #fff;
    border-radius: 5px;
}
.file_box_title{
    width:710px;
    margin:0 auto;
    height: 78px;
    line-height: 78px;
    font-size: $small-size;
}
.file_box_title>span:nth-child(2){
    color:$blue-color;
}
.img_con_box{
    width:710px;
    height: auto;
    margin:0 auto;
    display: flex;
}
.img_box{
    width:180px;
    height: 180px;
    position: relative;
    img{
        display: block;
        width:180px;
        height: 180px;
        border-radius: 5px;
        position: absolute;
        top:0;
        left:0;
    }
    input{
        display: block;
        width:180px;
        height: 180px;
        position: absolute;
        top:0;
        left:0;
        visibility: hidden;
    }
}
.con_title{
    height: 40px;
    line-height: 40px;
    margin-left:56px;
    color:$gray-color;
}
.submit_box{
    width:100%;
    height: 130px;
    overflow: hidden;
    button{
        display: block;
        height: 86px;
        width:710px;
        margin:0 auto;
        background: $blue-color;
        margin-top: 22px;
        border-radius: 5px;
        color:#fff;
        font-size: 30px;
        letter-spacing: 1px;/*no*/
    }
}
.trade_information_box{
    width:100%;
    height: auto;
    background: #fff;
    border-top:1px solid #e6e6e6;/*no*/
    border-bottom:1px solid #e6e6e6;/*no*/
    font-size: $base-size;
}
.trade_information_title{
    width:100%;
    height: 70px;
    line-height: 70px;
    display: flex;
    padding: 0 20px;
    border-bottom:1px solid #e6e6e6;/*no*/
}
.trade_information_left{
    width:240px;
    color:$gray-color;
}
.trade_information_right{
    color:#616466;
}
.trade_information_list{
    height: 106px;
    border-bottom:1px solid #f0f0f0;/*no*/
    width:710px;
    margin:0 auto;
}
.trade_information_list_active{
    border:0;
}
.trade_information_cell{
    display: flex;
    height: 40px;
    line-height: 40px;
}
.trade_information_cell:nth-child(1){
    margin-top:24px;
}
.order_detail{
    width:100%;
    height: 126px;
    background: #fff;
    padding:0 20px;
    border-top:1px solid #e6e6e6;
    border-bottom:1px solid #e6e6e6;
    margin-top:20px;
}
.order_detail_cell{
    display: flex;
    height: 40px;
    line-height: 40px;
}
.order_detail_cell:nth-child(1){
    margin-top:23px;
}
.order_detail_right{
    color:$gray-color;
}
</style>