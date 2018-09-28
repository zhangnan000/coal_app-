<template>
   <div class="wait_review_detail">
       <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt="" @click="back_list"> 报价详情
        </div>
        <div class="price_sort_box">
            <p class="price_sort_left">
                挂牌信息
            </p>
            <p class="price_sort_right">
                详情＞
            </p>
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
                        库存（吨）
                    </p>
                    <p class="trade_information_right">
                        10000.00
                    </p>
                </div>
                <div class="trade_information_cell">
                    <p class="trade_information_left">
                        最小摘牌量（吨）
                    </p>
                    <p class="trade_information_right">
                        5000.00
                    </p>
                </div>
            </div>
        </div>
        <p class="my_delist">
            我的摘牌
        </p>
        <ul class="my_delist_box">
            <li class="my_delist_detail">
                <p class="delist_title">
                2018.12.12 13:48
                </p>
                <p class="delist_company_name">
                浙江浙能天宫信息科技有限公司
                </p>
                <div class="single_price_box">
                    <div class="single_price_box_left">
                        <span>报价单价</span>
                        <span>550.00</span>
                        <span> · 元/吨</span>
                    </div>
                    <div class="single_price_box_right">
                        审核中
                    </div>
                </div>
                <div class="single_price_box_other">
                    <span>购买数量</span>
                    <span class="other_color">10000.00</span>
                    <span> · 吨</span>
                </div>
                <div class="revise_box">
                    <button class="blue_button">修改</button>
                    <button class="gray_button">删除</button>
                </div>
            </li>
        </ul>
       
   </div>
</template>
<script>
export default {
  name: "waitReview",
  data() {
    return {};
  },
  created() {
    window.scroll(0, 0);
  },
  methods: {
    back_list(){
       this.$router.push({name:'dynamic'}) 
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/wait_review.scss";
</style>