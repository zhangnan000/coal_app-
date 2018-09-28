<template>
  <div class="large_box">
    <!-- 轮播 -->
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="(item, key) in slides" :key="key" class="swiper_slide">
        <img :src="item.img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
    </swiper>
    <div class="rolling_box">
      <div class="rolling_box_left">
        <p>公告</p>
      </div>
      <div class="rolling_box_right">
        <ul>
          <li v-for="(item,key) in company_show" :key="key" ref="rollul" :class="{anim:animate==true}" @click="jump_public_detail(item.ID)">
            <p class="rolling_box_title overflow_one">{{item.FullTitle}}</p>
            <p class="rolling_box_time">{{item.UpdateTime}}</p>
          </li>
        </ul>
      </div>
    </div>
    <!-- 航运指数 -->
    <div class="ship_box ship_box_background">
      <p class="ship_box_title">
        航运指数
      </p>
      <ul class="ship_ul_box">
        <li class="ship_list">
          <p class="line_through"></p>
          <div class="ship_list_left">
            澳大利亚-舟山
          </div>
          <div class="ship_list_right">
            <span :class="ship_data.AustraliaToZSComp>=0?'blue':'origin'">{{ship_data.AustraliaToZS}}</span>
            <!--<span>09-07</span>-->
          </div>
        </li>
        <li class="ship_list">
          <p class="line_through"></p>
          <div class="ship_list_left">
            印尼-舟山
          </div>
          <div class="ship_list_right">
            <span :class="ship_data.IndonesiaToZSComp>=0?'blue':'origin'">{{ship_data.IndonesiaToZS}}</span>
            <!--<span>09-07</span>-->
          </div>
        </li>
        <li class="ship_list">
          <p class="line_through"></p>
          <div class="ship_list_left">
            北方港-舟山
          </div>
          <div class="ship_list_right">
            <span :class="ship_data.NorthHarourToZSComp>=0?'blue':'origin'">{{ship_data.NorthHarourToZS}}</span>
            <!--<span>09-07</span>-->
          </div>
        </li>
        <li class="ship_list">
          <p class="line_through"></p>
          <div class="ship_list_left">
            俄罗斯-舟山
          </div>
          <div class="ship_list_right">
            <span :class="ship_data.RussiaToZSComp>=0?'blue':'origin'">{{ship_data.RussiaToZS}}</span>
            <!--<span>09-07</span>-->
          </div>
        </li>
        <li class="ship_list">
          <p class="line_through"></p>
          <div class="ship_list_left">
            舟山-温州
          </div>
          <div class="ship_list_right">
            <span :class="ship_data.ZSToWZComp>=0?'blue':'origin'">{{ship_data.ZSToWZ}}</span>
            <!--<span>09-07</span>-->
          </div>
        </li>
      </ul>
    </div>
    <!-- 行业快讯 -->
    <div class="industry_box  ship_box_background">
      <div class="industry_title_box">
        <div class="industry_title_left">
          <img src="../../assets/images/industry_img.png">
          <p>行业快讯</p>
        </div>
        <div class="industry_title_right" @click="jump_industry_list">
          <span>更多</span>
          <i></i>
        </div>
      </div>
      <ul class="industry_ul_box">
        <li class="industry_list" v-for="(item, key) in industry_data" :key="key"  @click="jump_public_detail_industry(item.ID)">
          <i></i>
          <p class="overflow_one">{{item.Title}}</p>
          <p>{{item.NewsDateString}}</p>
        </li>
      </ul>
    </div>
    <!-- 成交展示 -->
    <div class="deal_show ship_box_background">
      <div class="industry_title_box">
        <div class="industry_title_left">
          <img src="../../assets/images/turnover_img.png">
          <p>成交展示</p>
        </div>
        <!--<div class="industry_title_right">
            <span>更多</span>
            <i></i>
          </div>-->
      </div>
      <div class="deal_show_box">
        <div class="deal_show_list">
          <p>累计成交量(万吨)</p>
          <p>{{turnover_information.TotalAmount}}</p>
        </div>
        <div class="deal_show_list">
          <p>累计交易额(万元)</p>
          <p>{{turnover_information.TotalMoney}}</p>
        </div>
      </div>
      <ul class="industry_deal">
        <li class="industry_deal_list" v-for="(item, key) in turnover_show" :key="key">
          <div class="industry_deal_left">
            <div class="industry_name_box">
              <p class="sale_type">销售挂牌</p>
              <p class="industry_name overflow_one">{{item.CompanyName}}</p>
            </div>
            <div class="sort_coal">
              <span>煤种：</span>
              <span>{{item.CoalName}}</span>
            </div>
            <div class="sort_coal">
              <span>成交量：</span>
              <span>{{item.ContractAmount}}</span>
              <span>吨</span>
            </div>
          </div>
          <div class="industry_deal_right">
            <i></i>
            <div class="deal_time">
              <span>{{item.DealedDate}}</span>
              <p>成交时间</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getShipData } from '@/api/indexInfo'
import { getIndustryNews } from '@/api/indexInfo'
import { getDealInfo } from '@/api/indexInfo'
import { getAlldata } from '@/api/indexInfo'
import { getPlantformNotice } from '@/api/indexInfo'
export default {
  name: 'carrousel',
  data() {
    return {
      animate: true,
      components: {
        swiper,
        swiperSlide
      },
      slides: [
        { img: require("@/assets/images/Banner01.png") },
        { img: require("@/assets/images/Banner02.png") },
        { img: require("@/assets/images/Banner03.png") }
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination", type: 'custom',
          // 自定义分页样式,css样式也写在这里，
          renderCustom: function(swiper, current, total) {
            const activeColor = '#1e92ec'
            const normalColor = '#fff'
            let color = ''
            let paginationStyle = ''
            let html = ''
            for (let i = 1; i <= total; i++) {
              if (i === current) {
                color = activeColor
              } else {
                color = normalColor
              }
              paginationStyle = `background:${color};opacity:1;margin-right:12px;width:6px;height:6px;border-radius:3px;`
              html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
            }
            return html
          }
        },
        loop: true,
        loop: true,
        autoplay: true,
        //speed是一张图划过的时间长度
        speed: 100
      },
      industry_list_params: {
        pageSize: 5,
        pageNumber: 1
      },
      //行业资讯
      industry_data: {
      },
      // 成交信息
      turnover_information: {},
      //航运指数
      ship_data: {},
      //成交展示
      turnover_show: {},
      // 平台公告
      company_show: {},
      car_run: ''
    };
  },
  created() {
    this.getShipList();
    this.getIndustryList();
    this.get_turnover();
    this.get_turnover_show();
    this.get_company_data();
  },
  beforeDestroy() {
    window.clearInterval(this.car_run)
  },
  methods: {
    // 获取航运指数
    getShipList() {
      getShipData().then(({ data }) => {
        this.ship_data = data
      }).catch(err => {
      })
    },
    //行业资讯
    getIndustryList() {
      getIndustryNews(this.industry_list_params).then(({ data }) => {
        this.industry_data = data.Rows
      }).catch(err => {

      })
    },
    //成交信息
    get_turnover() {
      getDealInfo().then(({ data }) => {
        this.turnover_information = data
      }).catch(err => {

      })
    },
    //成交展示
    get_turnover_show() {
      getAlldata().then(({ data }) => {
        this.turnover_show = data.DealedListing
      }).catch(err => {

      })
    },
    //平台公告
    get_company_data() {
      clearInterval(this.car_run)
      getPlantformNotice(this.industry_list_params).then(({ data }) => {
        this.company_show = data.Rows;
        if (this.company_show.length > 1) {
          this.car_run = setInterval(this.running_car, 3000)
        }
      }).catch(err => {

      })
    },
    // 跑马车
    running_car() {
      let con1 = this.$refs.rollul;
      con1[0].style.marginTop = '90px';
      this.animate = !this.animate;
      setTimeout(() => {
        this.company_show.push(this.company_show[0]);
        this.company_show.shift();
        con1[0].style.marginTop = '0px';
        this.animate = !this.animate;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
      }, 0)
    },
    // 跳转到公告详情
     jump_public_detail(id){
        this.$router.push({
        name: 'publicNoticeDetail',
        params: {
          id: id,
          is_index:1
        }
      })
    },
    jump_public_detail_industry(id){
      this.$router.push({
        name: 'industryDetail',
        params: {
          id: id,
          is_index:1
        }
      })
    },
    //跳转到资讯列表
    jump_industry_list(){
      this.$router.push({
        name: 'industryList',
      })
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/common.scss";
.anim {
  transition: all 0.5s;
}

.large_box {
  width: 100%;
  height: 100%;
  background: #f5f6f7;
  margin-bottom: 100px;
}

.rolling_box {
  width: 730px;
  height: 98px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #333;
  display: flex;
}

.rolling_box_left {
  width: 110px;
  height: 100%;
  border-right: 1px solid #484848;
  /*no*/
}

.rolling_box_left p {
  color: #fff;
  width: 62px;
  height: 30px;
  background: #1e92ec;
  margin-left: 30px;
  margin-top: 20px;
  font-size: $base-size;
  line-height: 30px;
  text-align: center;
  border-radius: 2px;
}

.rolling_box_right {
  width: 560px;
  margin-left: 18px;
  height: 100%;
  overflow: hidden;
  transition: all 0.5s;
}
.rolling_box_right ul{
  // margin-top:-90px;
}
.rolling_box_title {
  width: 100%;
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: $small-size;
  margin-top: 10px;
}

.rolling_box_time {
  font-size: $small-size;
  color: #858585;
}

.ship_box_background {
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 10px;
  border-top: 1px solid #e6e6e6;
  /*no*/
  border-bottom: 1px solid #e6e6e6;
  /*no*/
  box-sizing: border-box;
  margin-bottom: 20px;
}

.ship_box {
  padding-bottom: 25px;
}

.ship_box_title {
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #0059b3;
  font-size: 40px;
  margin-top: 25px;
  font-weight: bold;
}

.ship_ul_box {
  width: 700px;
  height: auto;
  margin: 0 auto;
}

.ship_list {
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.ship_list_left {
  width: auto;
  background: #fff;
  height: 60px;
  font-size: $extra-large-size;
  z-index: 1;
  padding-right: 10px;
  /* font-weight: bold; */
}

.ship_list_right {
  width: auto;
  background: #fff;
  height: 60px;
  z-index: 1;
  padding-left: 10px;
}

.ship_list_right>span:nth-child(1) {
  font-size: $largest-size;
  margin-right: 10px;
}

.ship_list_right>span:nth-child(1).blue {
  color: #40acff;
}

.ship_list_right>span:nth-child(1).origin {
  color: #ed801f;
}

.ship_list_right>span:nth-child(2) {
  font-size: $small-size;
  color: $gray-color;
}

.line_through {
  width: 100%;
  height: 1px;
  /*no*/
  border: 1px dotted #d9d9d9;
  /*no*/
  position: absolute;
  top: 29px;
  left: 0;
  z-index: 0;
}





/* 行业快讯 */

.industry_title_box {
  width: 700px;
  height: 90px;
  margin: 0 auto;
  line-height: 90px;
  display: flex;
  justify-content: space-between;
}

.industry_title_left {
  display: flex;
}

.industry_title_left>p {
  font-size: $extra-large-size;
  font-weight: bold;
}

.industry_title_left>img {
  display: block;
  width: 48px;
  height: 48px;
  margin-top: 21px;
  margin-left: -6px;
}

.industry_title_right {
  display: flex;
}

.industry_title_right>span {
  display: block;
  width: auto;
  height: 90px;
  line-height: 90px;
  font-size: base-size;
  color: $gray-color;
}

.industry_title_right>i {
  width: 0;
  height: 0;
  display: block;
  border: 10px solid transparent;
  border-left: 10px solid #333;
  margin-top: 35px;
  margin-left: 14px;
}

.industry_ul_box {
  width: 700px;
  height: auto;
  margin: 0 auto;
}

.industry_list {
  width: 100%;
  display: flex;
  // justify-content: space-between;
  line-height: 104px;
  height: 104px;
  border-top: 1px solid #e6e6e6;
  /*no*/
}
.industry_list>i{
  display: block;
  width:8px;
  height: 8px;
  border-radius: 4px;
  background: $blue-color;
  margin-top:48px;
  margin-right:12px;
}

.industry_list>p:nth-child(2) {
  font-size: $large-size;
  width: 540px;
  line-height: 104px;
  margin-right:12px;
}

.industry_list>p:nth-child(3) {
  font-size: $smallest-size;
  color: $gray-color;
}

.deal_show_box {
  width: 700px;
  height: 120px;
  border-radius: 8px;
  background: #f2f2f2;
  margin: 0 auto;
  margin-bottom: 12px;
  display: flex;
}

.deal_show_list {
  width: 50%;
  height: 100%;
}

.deal_show_list:nth-child(1) {
  border-right: 1px solid #e1e1e1;
  /*no*/
}

.deal_show_list:nth-child(2) {
  border-left: 1px solid #e1e1e1;
  /*no*/
}

.deal_show_list>p:nth-child(1) {
  text-align: center;
  height: 60px;
  line-height: 60px;
  font-size: $base-size;
  color: $blue-color;
  width: 100%;
}

.deal_show_list>p:nth-child(2) {
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: $large-size;
  width: 100%;
  font-weight: bold;
}

.industry_deal {
  width: 700px;
  height: auto;
  margin: 0 auto;
}

.industry_deal_list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: 160px;
  border-top: 1px solid #e6e6e6;
  /*no*/
}

.industry_deal_left {
  width: 470px;
}

.industry_name {
  font-size: $base-size;
  height: 70px;
  line-height: 70px;
}
.industry_name_box{
  display: flex;
  height: 70px;
}
.sale_type{
  width:120px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  color:#fff;
  font-size: $small-size;
  margin-top:15px;
  background: $blue-color;
  border-radius: 15px;
  margin-right: 12px;
}
.sort_coal {
  height: 30px;
  line-height: 30px;
}

.sort_coal>span:nth-child(1) {
  color: $blue-color;
}

.sort_coal>span:nth-child(2) {
  color: $deep-gray-color;
}

.sort_coal>span:nth-child(3) {
  color: $gray-color;
}

.industry_deal_right {
  width: 160px;
  display: flex;
  margin-top: 15px;
}

.industry_deal_right>i {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background: $blue-color;
  margin-top: 17px;
  margin-right: 5px;
}

.deal_time {
  height: 40px;
  line-height: 40px;
  span {
    display: block;
    color: $deep-gray-color;
    font-size: $small-size;
  }
  p {
    font-size: $small-size;
    color: $gray-color;
    line-height: 35px;
    height: 35px;
  }
}

.swiper_slide {
  width: 100%;
  height: 320px;
  img {
    display: block;
    width: 100%;
    height: 320px;
  }
}
</style>

