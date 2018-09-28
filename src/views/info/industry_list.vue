<template>
    <div class="industry_box">
         <div class="my_order_title">
            <img src="../../assets/images/back_icon.png" alt="" @click="back_index"> 行业资讯
        </div>
        <ul class="public_notice_box">
            <li class="public_notice_list" v-for="(item,key) in industry_data" :key="key"  @click="jump_public_detail(item.ID)">
                <img :src="item.imgUrl" alt="">
                <div class="news_box">
                  <p class="public_notice_title overflow_two">
                    {{item.Title}}
                  </p>
                  <p class="public_notice_time">{{item.NewsDateString}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { getIndustryNews } from "@/api/indexInfo";
import { get_pic_url } from "@/api/indexInfo";
export default {
  name: "industryList",
  data() {
    return {
      industry_list_params: {
        pageSize: 5,
        pageNumber: 1
      },
      industry_data: {}
    };
  },
  created() {
    window.scroll(0, 0);
    this.getIndustryList();
  },
  methods: {
    //行业资讯
    getIndustryList() {
      getIndustryNews(this.industry_list_params)
        .then(({ data }) => {
          this.industry_data = data.Rows.map(el => {
            el.imgUrl = 'http://10.162.1.191/Annex/GetAnnex?annexId=' + el.PictureAnnexId
            return el
          });
        })
        .catch(err => {});
    },
    jump_public_detail(id) {
      this.$router.push({
        name: "industryDetail",
        params: {
          id: id,
          is_index: 0
        }
      });
    },
    back_index() {
      this.$router.push({ name: "info" });
    },
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/css/industry_list.scss";
</style>